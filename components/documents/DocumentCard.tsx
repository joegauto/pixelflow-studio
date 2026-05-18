"use client";

import { FileText, MoreVertical, Download, Trash2, Edit, FolderOpen, Sparkles, Clock } from "lucide-react";
import { formatBytes, formatDate, cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import type { DocumentWithRelations } from "@/types";

interface DocumentCardProps {
  document: DocumentWithRelations;
  onDelete: (id: string) => void;
  onEdit: (doc: DocumentWithRelations) => void;
  view: "grid" | "list";
}

const statusColors = {
  PENDING: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
  PROCESSING: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  COMPLETED: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300",
  FAILED: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
};

const categoryIcons: Record<string, string> = {
  contract: "📜",
  invoice: "🧾",
  report: "📊",
  legal: "⚖️",
  technical: "⚙️",
  marketing: "📣",
  hr: "👥",
  financial: "💰",
  correspondence: "✉️",
  other: "📄",
};

export function DocumentCard({ document, onDelete, onEdit, view }: DocumentCardProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (view === "list") {
    return (
      <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-md transition-all group">
        {/* Icon */}
        <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-950/50 rounded-xl flex items-center justify-center shrink-0">
          <span className="text-lg">{categoryIcons[document.category || "other"]}</span>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
            {document.title}
          </p>
          <div className="flex items-center gap-3 mt-0.5">
            <span className="text-xs text-gray-500">{formatBytes(document.fileSize)}</span>
            <span className="text-xs text-gray-400">•</span>
            <span className="text-xs text-gray-500">{formatDate(document.createdAt)}</span>
            {document.folder && (
              <>
                <span className="text-xs text-gray-400">•</span>
                <span className="flex items-center gap-1 text-xs text-gray-500">
                  <FolderOpen className="w-3 h-3" />
                  {document.folder.name}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Status */}
        <span className={cn("px-2.5 py-1 rounded-lg text-xs font-medium", statusColors[document.status])}>
          {document.status === "COMPLETED" && <Sparkles className="w-3 h-3 inline mr-1" />}
          {document.status.charAt(0) + document.status.slice(1).toLowerCase()}
        </span>

        {/* Tags */}
        {document.tags?.length > 0 && (
          <div className="hidden lg:flex items-center gap-1">
            {document.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              >
                {tag}
              </span>
            ))}
            {document.tags.length > 2 && (
              <span className="text-xs text-gray-400">+{document.tags.length - 2}</span>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 opacity-0 group-hover:opacity-100 transition-all"
          >
            <MoreVertical className="w-4 h-4 text-gray-500" />
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-10 w-44 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg py-1 z-50">
              <button
                onClick={() => { onEdit(document); setMenuOpen(false); }}
                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <Edit className="w-4 h-4" /> Edit
              </button>
              <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">
                <Download className="w-4 h-4" /> Download
              </button>
              <button
                onClick={() => { onDelete(document.id); setMenuOpen(false); }}
                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30"
              >
                <Trash2 className="w-4 h-4" /> Delete
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Grid view
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 hover:shadow-md transition-all group">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-950/50 rounded-xl flex items-center justify-center">
          <span className="text-2xl">{categoryIcons[document.category || "other"]}</span>
        </div>
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 opacity-0 group-hover:opacity-100 transition-all"
          >
            <MoreVertical className="w-4 h-4 text-gray-400" />
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-8 w-44 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg py-1 z-50">
              <button
                onClick={() => { onEdit(document); setMenuOpen(false); }}
                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <Edit className="w-4 h-4" /> Edit
              </button>
              <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">
                <Download className="w-4 h-4" /> Download
              </button>
              <button
                onClick={() => { onDelete(document.id); setMenuOpen(false); }}
                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30"
              >
                <Trash2 className="w-4 h-4" /> Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Title & Description */}
      <div className="mt-4">
        <h3 className="font-medium text-gray-900 dark:text-white truncate">{document.title}</h3>
        {document.summary ? (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
            {document.summary}
          </p>
        ) : (
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">{document.fileName}</p>
        )}
      </div>

      {/* Tags */}
      {document.tags?.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-3">
          {document.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <span className={cn("px-2 py-0.5 rounded-md text-xs font-medium", statusColors[document.status])}>
            {document.status === "COMPLETED" ? "Analyzed" : document.status.toLowerCase()}
          </span>
          <span className="text-xs text-gray-400">{formatBytes(document.fileSize)}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <Clock className="w-3 h-3" />
          {formatDate(document.createdAt)}
        </div>
      </div>
    </div>
  );
}
