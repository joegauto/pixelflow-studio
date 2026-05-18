import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { askDocumentQuestion, generateDocumentSuggestions } from "@/lib/ai";

// POST /api/documents/[id]/ask - Ask AI a question about a document
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
    const { question } = await req.json();

    if (!question) {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 }
      );
    }

    const document = await db.document.findFirst({
      where: { id, organizationId: session.user.organizationId },
    });

    if (!document) {
      return NextResponse.json({ error: "Document not found" }, { status: 404 });
    }

    if (!document.extractedText) {
      return NextResponse.json(
        { error: "Document has not been processed yet. Please process it first." },
        { status: 422 }
      );
    }

    const answer = await askDocumentQuestion(document.extractedText, question);

    return NextResponse.json({ answer, question });
  } catch (error) {
    console.error("Error asking document:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET /api/documents/[id]/ask - Get suggested questions
export async function GET(
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

    if (!document || !document.extractedText) {
      return NextResponse.json({ suggestions: [] });
    }

    const suggestions = await generateDocumentSuggestions(document.extractedText);

    return NextResponse.json({ suggestions });
  } catch (error) {
    console.error("Error generating suggestions:", error);
    return NextResponse.json({ suggestions: [] });
  }
}
