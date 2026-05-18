import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { analyzeDocument, generateEmbedding } from "@/lib/ai";
import { createAuditLog } from "@/lib/permissions";

// POST /api/documents/[id]/process - Trigger AI processing
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.organizationId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const document = await db.document.findFirst({
      where: { id, organizationId: session.user.organizationId },
    });

    if (!document) {
      return NextResponse.json({ error: "Document not found" }, { status: 404 });
    }

    // Update status to processing
    await db.document.update({
      where: { id },
      data: { status: "PROCESSING" },
    });

    try {
      // For demo purposes, we simulate text extraction
      // In production, you'd use a service like AWS Textract or Apache Tika
      const extractedText = document.extractedText || await extractTextFromDocument(document.fileUrl, document.mimeType);

      if (!extractedText) {
        await db.document.update({
          where: { id },
          data: { status: "FAILED" },
        });
        return NextResponse.json(
          { error: "Could not extract text from document" },
          { status: 422 }
        );
      }

      // Run AI analysis
      const analysis = await analyzeDocument(extractedText);

      // Generate embedding for semantic search
      const embedding = await generateEmbedding(extractedText);

      // Update document with AI results
      await db.$executeRaw`
        UPDATE "Document" 
        SET 
          summary = ${analysis.summary},
          category = ${analysis.category},
          tags = ${analysis.tags},
          "extractedText" = ${extractedText},
          language = ${analysis.language},
          embedding = ${embedding}::vector,
          status = 'COMPLETED',
          "updatedAt" = NOW()
        WHERE id = ${id}
      `;

      // Create audit log
      await createAuditLog({
        userId: session.user.id,
        organizationId: session.user.organizationId,
        action: "DOCUMENT_PROCESSED",
        entity: "document",
        entityId: id,
        metadata: {
          category: analysis.category,
          tags: analysis.tags,
          language: analysis.language,
        },
      });

      return NextResponse.json({
        success: true,
        analysis: {
          summary: analysis.summary,
          category: analysis.category,
          tags: analysis.tags,
          language: analysis.language,
          keyEntities: analysis.keyEntities,
          sentiment: analysis.sentiment,
        },
      });
    } catch (aiError) {
      console.error("AI processing error:", aiError);
      await db.document.update({
        where: { id },
        data: { status: "FAILED" },
      });
      return NextResponse.json(
        { error: "AI processing failed" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error processing document:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Text extraction helper (simplified for demo)
async function extractTextFromDocument(fileUrl: string, mimeType: string): Promise<string | null> {
  try {
    // In production, integrate with:
    // - AWS Textract for PDFs/images
    // - Apache Tika for various formats
    // - pdf-parse for PDFs
    // - mammoth for DOCX
    
    // For demo, fetch the file and attempt basic text extraction
    const response = await fetch(fileUrl);
    if (!response.ok) return null;

    if (mimeType === "text/plain" || mimeType === "text/csv") {
      return await response.text();
    }

    // For binary formats, return a placeholder indicating extraction is needed
    // In production, this would use proper extraction libraries
    return `[Document content from ${mimeType} file - extracted via document processing pipeline]`;
  } catch {
    return null;
  }
}
