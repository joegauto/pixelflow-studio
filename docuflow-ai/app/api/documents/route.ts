import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { uploadFile, generateFileKey } from "@/lib/storage";
import { createAuditLog } from "@/lib/permissions";

// GET /api/documents - List documents
export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.organizationId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const folderId = searchParams.get("folderId");
    const status = searchParams.get("status");
    const category = searchParams.get("category");
    const sortBy = searchParams.get("sortBy") || "createdAt";
    const sortOrder = searchParams.get("sortOrder") || "desc";

    const where: Record<string, unknown> = {
      organizationId: session.user.organizationId,
    };

    if (folderId) where.folderId = folderId;
    if (status) where.status = status;
    if (category) where.category = category;

    const [documents, total] = await Promise.all([
      db.document.findMany({
        where,
        include: {
          uploadedBy: { select: { id: true, name: true, image: true } },
          folder: { select: { id: true, name: true, color: true } },
        },
        orderBy: { [sortBy]: sortOrder },
        skip: (page - 1) * limit,
        take: limit,
      }),
      db.document.count({ where }),
    ]);

    return NextResponse.json({
      documents,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching documents:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/documents - Upload document
export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.organizationId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;
    const folderId = formData.get("folderId") as string | null;
    const title = formData.get("title") as string;

    if (!file) {
      return NextResponse.json({ error: "File is required" }, { status: 400 });
    }

    // Check file size (max 50MB)
    if (file.size > 50 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File size exceeds 50MB limit" },
        { status: 400 }
      );
    }

    // Generate file key and upload
    const fileKey = generateFileKey(session.user.organizationId, file.name);
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileUrl = await uploadFile(buffer, fileKey, file.type);

    // Create document record
    const document = await db.document.create({
      data: {
        title: title || file.name.replace(/\.[^/.]+$/, ""),
        fileName: file.name,
        fileUrl,
        fileSize: file.size,
        mimeType: file.type,
        status: "PENDING",
        uploadedById: session.user.id,
        organizationId: session.user.organizationId,
        folderId: folderId || null,
      },
      include: {
        uploadedBy: { select: { id: true, name: true, image: true } },
        folder: { select: { id: true, name: true, color: true } },
      },
    });

    // Create audit log
    await createAuditLog({
      userId: session.user.id,
      organizationId: session.user.organizationId,
      action: "DOCUMENT_UPLOADED",
      entity: "document",
      entityId: document.id,
      metadata: { fileName: file.name, fileSize: file.size, mimeType: file.type },
    });

    return NextResponse.json({ document }, { status: 201 });
  } catch (error) {
    console.error("Error uploading document:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
