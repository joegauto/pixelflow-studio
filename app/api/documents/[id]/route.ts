import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { deleteFile } from "@/lib/storage";
import { createAuditLog } from "@/lib/permissions";

// GET /api/documents/[id] - Get single document
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
      where: {
        id,
        organizationId: session.user.organizationId,
      },
      include: {
        uploadedBy: { select: { id: true, name: true, image: true, email: true } },
        folder: { select: { id: true, name: true, color: true } },
        comments: {
          include: { user: { select: { id: true, name: true, image: true } } },
          orderBy: { createdAt: "desc" },
        },
        versions: { orderBy: { version: "desc" } },
      },
    });

    if (!document) {
      return NextResponse.json({ error: "Document not found" }, { status: 404 });
    }

    return NextResponse.json({ document });
  } catch (error) {
    console.error("Error fetching document:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PATCH /api/documents/[id] - Update document
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.organizationId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await req.json();
    const { title, description, folderId } = body;

    const document = await db.document.findFirst({
      where: { id, organizationId: session.user.organizationId },
    });

    if (!document) {
      return NextResponse.json({ error: "Document not found" }, { status: 404 });
    }

    const updated = await db.document.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(description !== undefined && { description }),
        ...(folderId !== undefined && { folderId }),
      },
      include: {
        uploadedBy: { select: { id: true, name: true, image: true } },
        folder: { select: { id: true, name: true, color: true } },
      },
    });

    await createAuditLog({
      userId: session.user.id,
      organizationId: session.user.organizationId,
      action: "DOCUMENT_UPDATED",
      entity: "document",
      entityId: id,
      metadata: { changes: body },
    });

    return NextResponse.json({ document: updated });
  } catch (error) {
    console.error("Error updating document:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE /api/documents/[id] - Delete document
export async function DELETE(
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

    // Delete from S3
    try {
      const fileKey = document.fileUrl.split(".amazonaws.com/")[1];
      if (fileKey) await deleteFile(fileKey);
    } catch (e) {
      console.error("Error deleting file from S3:", e);
    }

    // Delete from database
    await db.document.delete({ where: { id } });

    await createAuditLog({
      userId: session.user.id,
      organizationId: session.user.organizationId,
      action: "DOCUMENT_DELETED",
      entity: "document",
      entityId: id,
      metadata: { fileName: document.fileName },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting document:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
