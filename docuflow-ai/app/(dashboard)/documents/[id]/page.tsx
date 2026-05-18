"use client";

import { useParams, useRouter } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  ArrowLeft,
  Download,
  Trash2,
  Edit,
  Clock,
  User,
  FolderOpen,
  HardDrive,
  FileText,
  Loader2,
} from "lucide-react";
import { formatBytes, formatDate } from "@/lib/utils";
import { AIPanel } from "@/components/documents/AIPanel";

export default function DocumentDetailPage() {
  const params = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();
  const id = params.id as string;

  // Fetch document
  const { data, isLoading } = useQuery({
    queryKey: ["document", id],
    queryFn: async () => {
      const res = await fetch(`/api/documents/${id}`);
      if (!res.ok) throw new Error("Failed to fetch document");
      return res.json();
    },
  });

  // Process mutation
  const processMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(`/api/documents/${id}/process`, {
        method: "POST",
      });
      if (!res.ok) throw new Error("Processing failed");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["document", id] });
    },
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(`/api/documents/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
    },
    onSuccess: () => {
      router.push("/documents");
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
      </div>
    );
  }

  const doc = data?.document;
  if (!doc) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-gray-500">Document not found</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Back Navigation */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Documents
      </button>

      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-gray-500 dark:text-gray-400">{doc.description}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <Download className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </button>
          <button className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <Edit className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={() => {
              if (confirm("Are you sure you want to delete this document?")) {
                deleteMutation.mutate();
              }
            }}
            className="p-2.5 rounded-xl border border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
          >
            <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Document Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Metadata */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Document Information
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <FileText className="w-3.5 h-3.5" />
                  File Name
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {doc.fileName}
                </p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <HardDrive className="w-3.5 h-3.5" />
                  Size
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {formatBytes(doc.fileSize)}
                </p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <User className="w-3.5 h-3.5" />
                  Uploaded by
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {doc.uploadedBy?.name || "Unknown"}
                </p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Clock className="w-3.5 h-3.5" />
                  Uploaded
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {formatDate(doc.createdAt)}
                </p>
              </div>
            </div>
            {doc.folder && (
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-2 text-sm">
                  <FolderOpen className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-500">Folder:</span>
                  <span
                    className="font-medium text-gray-900 dark:text-white px-2 py-0.5 rounded-md"
                    style={{ backgroundColor: `${doc.folder.color}20` }}
                  >
                    {doc.folder.name}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Comments Section */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Comments
            </h3>
            {doc.comments && doc.comments.length > 0 ? (
              <div className="space-y-4">
                {doc.comments.map((comment: { id: string; content: string; createdAt: string; user: { name: string | null; image: string | null } }) => (
                  <div key={comment.id} className="flex gap-3">
                    <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-gray-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {comment.user?.name || "User"}
                        </span>
                        <span className="text-xs text-gray-400">
                          {formatDate(comment.createdAt)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {comment.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No comments yet.
              </p>
            )}
          </div>
        </div>

        {/* Right: AI Panel */}
        <div>
          <AIPanel
            documentId={id}
            summary={doc.summary}
            category={doc.category}
            tags={doc.tags || []}
            language={doc.language}
            status={doc.status}
            onProcess={() => processMutation.mutate()}
            isProcessing={processMutation.isPending}
          />
        </div>
      </div>
    </div>
  );
}
