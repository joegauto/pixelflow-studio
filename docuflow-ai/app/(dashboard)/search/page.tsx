"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  Search,
  Sparkles,
  FileText,
  Loader2,
  ArrowRight,
  Brain,
  Zap,
  Clock,
  Tag,
} from "lucide-react";
import { formatBytes, formatDate, cn } from "@/lib/utils";
import Link from "next/link";

interface SearchResult {
  id: string;
  title: string;
  summary: string | null;
  category: string | null;
  tags: string[];
  fileName: string;
  fileSize: number;
  mimeType: string;
  createdAt: string;
  similarity: number;
}

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

const exampleQueries = [
  "Find contracts mentioning payment terms",
  "Documents about Q4 revenue",
  "Employee onboarding materials",
  "Technical specifications for API",
  "Marketing proposals from last quarter",
  "Legal compliance requirements",
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  // Semantic search mutation
  const searchMutation = useMutation({
    mutationFn: async (searchQuery: string) => {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: searchQuery,
          category: categoryFilter || undefined,
          limit: 15,
        }),
      });
      if (!res.ok) throw new Error("Search failed");
      return res.json();
    },
    onSuccess: (data) => {
      setResults(data.results || []);
      setHasSearched(true);
    },
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim().length < 2) return;
    searchMutation.mutate(query);
  };

  const handleExampleQuery = (exQuery: string) => {
    setQuery(exQuery);
    searchMutation.mutate(exQuery);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-950/50 rounded-full">
          <Brain className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
            AI-Powered Semantic Search
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Find anything in your documents
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
          Search by meaning, not just keywords. Our AI understands context and finds
          relevant documents even when the exact words don&apos;t match.
        </p>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="relative">
        <div className="flex items-center gap-3 p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg shadow-gray-100 dark:shadow-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent transition-all">
          <div className="pl-4">
            <Sparkles className="w-5 h-5 text-indigo-500" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Describe what you're looking for..."
            className="flex-1 py-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none text-lg"
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="hidden sm:block px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-600 dark:text-gray-300 focus:outline-none"
          >
            <option value="">All types</option>
            <option value="contract">Contracts</option>
            <option value="invoice">Invoices</option>
            <option value="report">Reports</option>
            <option value="legal">Legal</option>
            <option value="technical">Technical</option>
            <option value="financial">Financial</option>
          </select>
          <button
            type="submit"
            disabled={query.trim().length < 2 || searchMutation.isPending}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium rounded-xl transition-colors flex items-center gap-2"
          >
            {searchMutation.isPending ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Search className="w-4 h-4" />
            )}
            Search
          </button>
        </div>
      </form>

      {/* Example Queries */}
      {!hasSearched && (
        <div className="space-y-3">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Try these example searches:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {exampleQueries.map((eq) => (
              <button
                key={eq}
                onClick={() => handleExampleQuery(eq)}
                className="px-4 py-2 text-sm bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:border-indigo-200 dark:hover:border-indigo-800 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all"
              >
                {eq}
              </button>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <Brain className="w-8 h-8 text-indigo-500 mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Semantic Understanding</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Finds documents by meaning, not just keyword matching
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <Zap className="w-8 h-8 text-amber-500 mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Lightning Fast</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Vector similarity search returns results in under 300ms
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <Sparkles className="w-8 h-8 text-purple-500 mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">AI-Ranked Results</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Results ordered by relevance using cosine similarity
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {hasSearched && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {results.length} result{results.length !== 1 ? "s" : ""} for &quot;{query}&quot;
            </p>
            {results.length > 0 && (
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Ranked by semantic similarity
              </span>
            )}
          </div>

          {results.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                No results found
              </h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                Try a different search query or make sure your documents have been
                processed with AI analysis.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {results.map((result, index) => (
                <Link
                  key={result.id}
                  href={`/documents/${result.id}`}
                  className="block bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    {/* Rank Badge */}
                    <div className="w-8 h-8 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                        {index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">
                          {categoryIcons[result.category || "other"]}
                        </span>
                        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                          {result.title}
                        </h3>
                      </div>
                      {result.summary && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">
                          {result.summary}
                        </p>
                      )}
                      <div className="flex flex-wrap items-center gap-3">
                        {/* Similarity Score */}
                        <span className={cn(
                          "px-2 py-0.5 rounded-md text-xs font-medium",
                          result.similarity > 0.8
                            ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300"
                            : result.similarity > 0.6
                            ? "bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                        )}>
                          {(result.similarity * 100).toFixed(0)}% match
                        </span>
                        {/* Category */}
                        {result.category && (
                          <span className="text-xs text-gray-500 capitalize">
                            {result.category}
                          </span>
                        )}
                        {/* File Size */}
                        <span className="text-xs text-gray-400">
                          {formatBytes(result.fileSize)}
                        </span>
                        {/* Date */}
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          {formatDate(result.createdAt)}
                        </span>
                        {/* Tags */}
                        {result.tags?.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1 px-2 py-0.5 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                          >
                            <Tag className="w-2.5 h-2.5" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-indigo-500 transition-colors shrink-0 mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
