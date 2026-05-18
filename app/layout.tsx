import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/shared/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DocuFlow AI - Intelligent Document Management",
  description:
    "Upload, analyze, and search your documents with AI-powered intelligence. Extract insights, classify automatically, and find anything with semantic search.",
  keywords: ["document management", "AI", "semantic search", "OCR", "enterprise"],
  openGraph: {
    title: "DocuFlow AI - Intelligent Document Management",
    description:
      "Upload, analyze, and search your documents with AI-powered intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
