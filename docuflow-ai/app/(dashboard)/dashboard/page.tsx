"use client";

import { FileText, FolderOpen, HardDrive, Sparkles, TrendingUp, Clock } from "lucide-react";

const stats = [
  { label: "Total Documents", value: "1,247", change: "+12%", icon: FileText, color: "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400" },
  { label: "Folders", value: "34", change: "+3", icon: FolderOpen, color: "bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400" },
  { label: "Storage Used", value: "2.4 GB", change: "48%", icon: HardDrive, color: "bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400" },
  { label: "AI Processed", value: "892", change: "+28%", icon: Sparkles, color: "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400" },
];

const recentActivity = [
  { action: "Document uploaded", document: "Q4-Financial-Report.pdf", time: "2 min ago", type: "upload" },
  { action: "AI analysis complete", document: "Contract-2024-NewClient.docx", time: "5 min ago", type: "ai" },
  { action: "Document shared", document: "Marketing-Strategy.pptx", time: "12 min ago", type: "share" },
  { action: "Folder created", document: "Legal Documents", time: "1 hour ago", type: "folder" },
  { action: "Document updated", document: "Employee-Handbook-v3.pdf", time: "2 hours ago", type: "update" },
  { action: "AI classification", document: "Invoice-Supplier-Dec.pdf", time: "3 hours ago", type: "ai" },
];

const categoryBreakdown = [
  { name: "Contracts", count: 342, percentage: 27, color: "bg-indigo-500" },
  { name: "Financial", count: 256, percentage: 21, color: "bg-emerald-500" },
  { name: "Reports", count: 198, percentage: 16, color: "bg-amber-500" },
  { name: "Legal", count: 167, percentage: 13, color: "bg-purple-500" },
  { name: "Marketing", count: 145, percentage: 12, color: "bg-pink-500" },
  { name: "Other", count: 139, percentage: 11, color: "bg-gray-400" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Overview of your document management workspace
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className={`p-2.5 rounded-xl ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-1 rounded-lg">
                <TrendingUp className="w-3 h-3" />
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
            <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 font-medium">
              View all
            </button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  item.type === "ai" ? "bg-purple-100 dark:bg-purple-900/30" :
                  item.type === "upload" ? "bg-indigo-100 dark:bg-indigo-900/30" :
                  item.type === "share" ? "bg-emerald-100 dark:bg-emerald-900/30" :
                  "bg-gray-100 dark:bg-gray-800"
                }`}>
                  {item.type === "ai" ? <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" /> :
                   item.type === "upload" ? <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> :
                   item.type === "share" ? <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> :
                   <FolderOpen className="w-4 h-4 text-gray-600 dark:text-gray-400" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{item.action}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{item.document}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 shrink-0">
                  <Clock className="w-3 h-3" />
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Categories
          </h3>
          <div className="space-y-4">
            {categoryBreakdown.map((cat) => (
              <div key={cat.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {cat.name}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {cat.count} docs
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${cat.color} transition-all`}
                    style={{ width: `${cat.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Storage Usage */}
          <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Storage</span>
              <span className="text-xs text-gray-500">2.4 GB / 5 GB</span>
            </div>
            <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ width: "48%" }} />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Upgrade to Enterprise for 50GB storage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
