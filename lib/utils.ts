import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
}

export const PLANS = {
  FREE: {
    name: "Free",
    maxDocuments: 25,
    maxStorage: 100 * 1024 * 1024, // 100MB
    maxMembers: 2,
    aiProcessing: false,
    semanticSearch: false,
    auditLog: false,
    apiAccess: false,
  },
  PRO: {
    name: "Pro",
    maxDocuments: 500,
    maxStorage: 5 * 1024 * 1024 * 1024, // 5GB
    maxMembers: 10,
    aiProcessing: true,
    semanticSearch: true,
    auditLog: true,
    apiAccess: false,
  },
  ENTERPRISE: {
    name: "Enterprise",
    maxDocuments: -1, // unlimited
    maxStorage: 50 * 1024 * 1024 * 1024, // 50GB
    maxMembers: -1, // unlimited
    aiProcessing: true,
    semanticSearch: true,
    auditLog: true,
    apiAccess: true,
  },
} as const;
