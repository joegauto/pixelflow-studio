import { db } from "@/lib/db";
import { Role, PermissionLevel } from "@prisma/client";

interface UserContext {
  id: string;
  role: Role;
  organizationId: string;
}

export async function canAccessDocument(
  user: UserContext,
  documentId: string
): Promise<boolean> {
  // Owners and admins can access everything
  if (user.role === "OWNER" || user.role === "ADMIN") {
    const doc = await db.document.findFirst({
      where: { id: documentId, organizationId: user.organizationId },
    });
    return !!doc;
  }

  // Check if user uploaded the document
  const doc = await db.document.findFirst({
    where: {
      id: documentId,
      organizationId: user.organizationId,
      uploadedById: user.id,
    },
  });
  if (doc) return true;

  // Check explicit permissions
  const permission = await db.permission.findFirst({
    where: {
      documentId,
      userId: user.id,
    },
  });

  return !!permission;
}

export async function canEditDocument(
  user: UserContext,
  documentId: string
): Promise<boolean> {
  if (user.role === "OWNER" || user.role === "ADMIN") {
    const doc = await db.document.findFirst({
      where: { id: documentId, organizationId: user.organizationId },
    });
    return !!doc;
  }

  // Check if user is the uploader
  const doc = await db.document.findFirst({
    where: {
      id: documentId,
      organizationId: user.organizationId,
      uploadedById: user.id,
    },
  });
  if (doc) return true;

  // Check for EDIT or ADMIN permission
  const permission = await db.permission.findFirst({
    where: {
      documentId,
      userId: user.id,
      level: { in: [PermissionLevel.EDIT, PermissionLevel.ADMIN] },
    },
  });

  return !!permission;
}

export async function canAccessFolder(
  user: UserContext,
  folderId: string
): Promise<boolean> {
  if (user.role === "OWNER" || user.role === "ADMIN") {
    const folder = await db.folder.findFirst({
      where: { id: folderId, organizationId: user.organizationId },
    });
    return !!folder;
  }

  const permission = await db.permission.findFirst({
    where: {
      folderId,
      userId: user.id,
    },
  });

  return !!permission;
}

export function canManageMembers(role: Role): boolean {
  return role === "OWNER" || role === "ADMIN";
}

export function canManageBilling(role: Role): boolean {
  return role === "OWNER";
}

export function canDeleteOrganization(role: Role): boolean {
  return role === "OWNER";
}

export async function createAuditLog(params: {
  userId: string;
  organizationId: string;
  action: string;
  entity: string;
  entityId: string;
  metadata?: Record<string, unknown>;
  ipAddress?: string;
  userAgent?: string;
}) {
  await db.auditLog.create({
    data: {
      userId: params.userId,
      organizationId: params.organizationId,
      action: params.action,
      entity: params.entity,
      entityId: params.entityId,
      metadata: params.metadata || {},
      ipAddress: params.ipAddress,
      userAgent: params.userAgent,
    },
  });
}
