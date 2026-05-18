import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { createAuditLog } from "@/lib/permissions";

// GET /api/folders - List folders
export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.organizationId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const parentId = searchParams.get("parentId");

    const folders = await db.folder.findMany({
      where: {
        organizationId: session.user.organizationId,
        parentId: parentId || null,
      },
      include: {
        _count: {
          select: { documents: true, children: true },
        },
      },
      orderBy: { name: "asc" },
    });

    return NextResponse.json({ folders });
  } catch (error) {
    console.error("Error fetching folders:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/folders - Create folder
export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.organizationId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { name, color, parentId } = await req.json();

    if (!name) {
      return NextResponse.json(
        { error: "Folder name is required" },
        { status: 400 }
      );
    }

    const folder = await db.folder.create({
      data: {
        name,
        color: color || "#6366f1",
        parentId: parentId || null,
        organizationId: session.user.organizationId,
      },
      include: {
        _count: { select: { documents: true, children: true } },
      },
    });

    await createAuditLog({
      userId: session.user.id,
      organizationId: session.user.organizationId,
      action: "FOLDER_CREATED",
      entity: "folder",
      entityId: folder.id,
      metadata: { name, color },
    });

    return NextResponse.json({ folder }, { status: 201 });
  } catch (error) {
    console.error("Error creating folder:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
