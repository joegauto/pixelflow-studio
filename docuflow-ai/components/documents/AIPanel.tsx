"use client";

import { useState } from "react";
import {
  Sparkles,
  Send,
  Loader2,
  Brain,
  Tag,
  Globe,
  FileText,
  MessageSquare,
  Lightbulb,
  RefreshCw,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AIPanelProps {
  documentId: string;
  summary: string | null;
  category: string | null;
  tags: string[];
  language: string | null;
  status: string;
  onProcess: () => void;
  isProcessing: boolean;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export function AIPanel({
  documentId,
  summary,
  category,
  tags,
  language,
  status,
  onProcess,
  isProcessing,
}: AIPanelProps) {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isAsking, setIsAsking] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const askQuestion = async (q: string) => {
    if (!q.trim()) return;

    const userMessage: ChatMessage = { role: "user", content: q };
    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setIsAsking(true);

    try {
      const res = await fetch(`/api/documents/${documentId}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q }),
      });

      const data = await res.json();
      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: data.answer || data.error || "Unable to answer.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "An error occurred. Please try again." },
      ]);
    } finally {
      setIsAsking(false);
    }
  };

  const loadSuggestions = async () => {
    try {
      const res = await fetch(`/api/documents/${documentId}/ask`);
      const data = await res.json();
      setSuggestions(data.suggestions || []);
    } catch {
      // Silently fail
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">AI Analysis</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Powered by GPT-4o & Embeddings
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Process Button */}
        {status !== "COMPLETED" && (
          <button
            onClick={onProcess}
            disabled={isProcessing || status === "PROCESSING"}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-indigo-400 disabled:to-purple-400 text-white font-medium rounded-xl transition-all shadow-sm"
          >
            {isProcessing || status === "PROCESSING" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing with AI...
              </>
            ) : (
              <>
                <Brain className="w-4 h-4" />
                Analyze with AI
              </>
            )}
          </button>
        )}

        {/* Analysis Results */}
        {status === "COMPLETED" && (
          <div className="space-y-5">
            {/* Summary */}
            {summary && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <FileText className="w-4 h-4 text-indigo-500" />
                  Summary
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                  {summary}
                </p>
              </div>
            )}

            {/* Category & Language */}
            <div className="grid grid-cols-2 gap-3">
              {category && (
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-3">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                    <Tag className="w-3 h-3" />
                    Category
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                    {category}
                  </p>
                </div>
              )}
              {language && (
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-3">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                    <Globe className="w-3 h-3" />
                    Language
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white uppercase">
                    {language}
                  </p>
                </div>
              )}
            </div>

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <Tag className="w-4 h-4 text-indigo-500" />
                  Tags
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Re-process Button */}
            <button
              onClick={onProcess}
              disabled={isProcessing}
              className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
            >
              <RefreshCw className={cn("w-4 h-4", isProcessing && "animate-spin")} />
              Re-analyze document
            </button>
          </div>
        )}

        {/* AI Chat */}
        {status === "COMPLETED" && (
          <div className="border-t border-gray-200 dark:border-gray-800 pt-5">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-4 h-4 text-indigo-500" />
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Ask about this document
              </h4>
            </div>

            {/* Suggested Questions */}
            {messages.length === 0 && suggestions.length === 0 && (
              <button
                onClick={loadSuggestions}
                className="flex items-center gap-2 text-xs text-gray-500 hover:text-indigo-500 transition-colors mb-3"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                Load suggested questions
              </button>
            )}

            {suggestions.length > 0 && messages.length === 0 && (
              <div className="space-y-2 mb-4">
                {suggestions.slice(0, 3).map((s, i) => (
                  <button
                    key={i}
                    onClick={() => askQuestion(s)}
                    className="block w-full text-left px-3 py-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Chat Messages */}
            {messages.length > 0 && (
              <div className="space-y-3 max-h-60 overflow-y-auto mb-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={cn(
                      "px-4 py-3 rounded-xl text-sm",
                      msg.role === "user"
                        ? "bg-indigo-50 dark:bg-indigo-950/30 text-indigo-900 dark:text-indigo-100 ml-8"
                        : "bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 mr-8"
                    )}
                  >
                    {msg.content}
                  </div>
                ))}
                {isAsking && (
                  <div className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 mr-8">
                    <Loader2 className="w-4 h-4 animate-spin text-indigo-500" />
                  </div>
                )}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                askQuestion(question);
              }}
              className="flex gap-2"
            >
              <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask a question about this document..."
                className="flex-1 px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                disabled={!question.trim() || isAsking}
                className="p-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white rounded-xl transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
