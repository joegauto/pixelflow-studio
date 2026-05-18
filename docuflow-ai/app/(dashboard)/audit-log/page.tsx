"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Shield,
  FileText,
  FolderOpen,
  User,
  Sparkles,
  Trash2,
  Upload,
  Edit,
  Eye,
  Loader2,
  Clock,
  Filter,
} from "lucide-react";
import { formatDate, cn } from "@/lib/utils";
import { useState } from "react";

interface AuditEntry {
  id: string;
  action: string;
  entity: string;
  entityId: string;
  metadata: Record<string, unknown> | null;
  createdAt: string;
  user: {
    id: string;
    name: string | null;
    email: string;
    image: string | null;
  };
}

const actionConfig: Record<string, { icon: typeof FileText; color: string; label: string }> = {
  DOCUMENT_UPLOADED: { icon: Upload, color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-950/50", label: "Document Uploaded" },
  DOCUMENT_UPDATED: { icon: Edit, color: "text-amber-500 bg-amber-50 dark:bg-amber-950/50", label: "Document Updated" },
  DOCUMENT_DELETED: { icon: Trash2, color: "text-red-500 bg-red-50 dark:bg-red-950/50", label: "Document Deleted" },
  DOCUMENT_PROCESSED: { icon: Sparkles, color: "text-purple-500 bg-purple-50 dark:bg-purple-950/50", label: "AI Processing Complete" },
  DOCUMENT_VIEWED: { icon: Eye, color: "text-gray-500 bg-gray-50 dark:bg-gray-800", label: "Document Viewed" },
  FOLDER_CREATED: { icon: FolderOpen, color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/50", label: "Folder Created" },
  FOLDER_DELETED: { icon: Trash2, color: "text-red-500 bg-red-50 dark:bg-red-950/50", label: "Folder Deleted" },
  USER_INVITED: { icon: User, color: "text-blue-500 bg-blue-50 dark:bg-blue-950/50", label: "User Invited" },
};

export default function AuditLogPage() {
  const [entityFilter, setEntityFilter] = useState<string>("");

  const { data, isLoading } = useQuery({
    queryKey: ["audit-logs", entityFilter],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (entityFilter) params.set("entity", entityFilter);
      const res = await fetch(`/api/audit-log?${params}`);
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
  });

  const logs: AuditEntry[] = data?.logs || [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Shield className="w-7 h-7 text-indigo-500" />
            Audit Log
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Complete activity trail for your workspace
          </p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={entityFilter}
            onChange={(e) => setEntityFilter(e.target.value)}
            className="px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Activities</option>
            <option value="document">Documents</option>
            <option value="folder">Folders</option>
            <option value="user">Users</option>
          </select>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900 rounded-2xl p-4 flex items-center gap-3">
        <Shield className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
        <p className="text-sm text-indigo-700 dark:text-indigo-300">
          Audit logs are retained for 90 days on Pro plans and unlimited on Enterprise.
          Every action is recorded with timestamps, user identity, and IP address.
        </p>
      </div>

      {/* Timeline */}
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
        </div>
      ) : logs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6">
            <Shield className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No activity yet</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Actions will appear here as your team uses the workspace.
          </p>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {logs.map((log) => {
              const config = actionConfig[log.action] || {
                icon: FileText,
                color: "text-gray-500 bg-gray-50 dark:bg-gray-800",
                label: log.action,
              };
              const Icon = config.icon;

              return (
                <div
                  key={log.id}
                  className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", config.color)}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {config.label}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        by {log.user?.name || log.user?.email || "System"}
                      </span>
                      {log.metadata && (log.metadata as Record<string, string>).fileName && (
                        <>
                          <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            {(log.metadata as Record<string, string>).fileName}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 shrink-0">
                    <Clock className="w-3 h-3" />
                    {formatDate(log.createdAt)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
