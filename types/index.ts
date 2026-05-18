import { Plan, Role, DocumentStatus, PermissionLevel } from "@prisma/client";

// Extend NextAuth types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image?: string;
      role: string;
      organizationId: string;
      organizationName: string;
      plan: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
    organizationId: string;
    organizationName: string;
    plan: string;
  }
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Document types
export interface DocumentWithRelations {
  id: string;
  title: string;
  description: string | null;
  fileName: string;
  fileUrl: string;
  fileSize: number;
  mimeType: string;
  status: DocumentStatus;
  summary: string | null;
  category: string | null;
  tags: string[];
  language: string | null;
  createdAt: Date;
  updatedAt: Date;
  uploadedBy: {
    id: string;
    name: string | null;
    image: string | null;
  };
  folder: {
    id: string;
    name: string;
    color: string | null;
  } | null;
}

// Search types
export interface SearchResult {
  id: string;
  title: string;
  summary: string | null;
  category: string | null;
  tags: string[];
  similarity: number;
  createdAt: Date;
}

// Folder types
export interface FolderWithCount {
  id: string;
  name: string;
  color: string | null;
  parentId: string | null;
  _count: {
    documents: number;
    children: number;
  };
  createdAt: Date;
}

// Audit Log types
export interface AuditLogEntry {
  id: string;
  action: string;
  entity: string;
  entityId: string;
  metadata: Record<string, unknown> | null;
  createdAt: Date;
  user: {
    id: string;
    name: string | null;
    email: string;
    image: string | null;
  };
}

// Dashboard stats
export interface DashboardStats {
  totalDocuments: number;
  totalStorage: number;
  documentsThisMonth: number;
  processingDocuments: number;
  categoryCounts: Record<string, number>;
  recentActivity: AuditLogEntry[];
}
