import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { generateEmbedding } from "@/lib/ai";

// POST /api/search - Semantic search across documents
export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.organizationId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { query, category, limit = 10 } = await req.json();

    if (!query || query.trim().length < 2) {
      return NextResponse.json(
        { error: "Search query must be at least 2 characters" },
        { status: 400 }
      );
    }

    // Generate embedding for the search query
    const queryEmbedding = await generateEmbedding(query);

    // Perform vector similarity search using cosine distance
    let results;

    if (category) {
      results = await db.$queryRaw`
        SELECT
          id,
          title,
          summary,
          category,
          tags,
          "fileName",
          "fileSize",
          "mimeType",
          "createdAt",
          1 - (embedding <=> ${queryEmbedding}::vector) as similarity
        FROM "Document"
        WHERE "organizationId" = ${session.user.organizationId}
          AND embedding IS NOT NULL
          AND status = 'COMPLETED'
          AND category = ${category}
        ORDER BY embedding <=> ${queryEmbedding}::vector
        LIMIT ${limit}
      `;
    } else {
      results = await db.$queryRaw`
        SELECT
          id,
          title,
          summary,
          category,
          tags,
          "fileName",
          "fileSize",
          "mimeType",
          "createdAt",
          1 - (embedding <=> ${queryEmbedding}::vector) as similarity
        FROM "Document"
        WHERE "organizationId" = ${session.user.organizationId}
          AND embedding IS NOT NULL
          AND status = 'COMPLETED'
        ORDER BY embedding <=> ${queryEmbedding}::vector
        LIMIT ${limit}
      `;
    }

    return NextResponse.json({
      results,
      query,
      total: (results as unknown[]).length,
    });
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET /api/search - Text-based search (fallback for non-AI search)
export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.organizationId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q") || "";
    const category = searchParams.get("category");

    if (!query || query.length < 2) {
      return NextResponse.json({ results: [], query, total: 0 });
    }

    const where: Record<string, unknown> = {
      organizationId: session.user.organizationId,
      OR: [
        { title: { contains: query, mode: "insensitive" } },
        { summary: { contains: query, mode: "insensitive" } },
        { extractedText: { contains: query, mode: "insensitive" } },
        { tags: { has: query.toLowerCase() } },
      ],
    };

    if (category) where.category = category;

    const results = await db.document.findMany({
      where,
      select: {
        id: true,
        title: true,
        summary: true,
        category: true,
        tags: true,
        fileName: true,
        fileSize: true,
        mimeType: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
      take: 20,
    });

    return NextResponse.json({
      results,
      query,
      total: results.length,
    });
  } catch (error) {
    console.error("Text search error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
