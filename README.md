# DocuFlow AI

> Intelligent Document Management Platform powered by AI

![Next.js](https://img.shields.io/badge/Next.js_14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?logo=openai&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?logo=stripe&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)

## Overview

DocuFlow AI is a full-stack SaaS platform that enables organizations to upload, analyze, and search documents using artificial intelligence. It automatically classifies documents, extracts key information, generates summaries, and provides semantic search powered by vector embeddings.

## Features

- **AI Document Processing** — GPT-4o powered analysis, classification, summarization, and entity extraction
- **Semantic Search** — Vector similarity search using pgvector (OpenAI embeddings) with cosine distance ranking
- **Multi-Tenant Architecture** — Organization-based data isolation with RBAC permissions
- **Document Q&A** — Ask questions about any document and get AI-powered contextual answers
- **Drag & Drop Upload** — Multi-file upload with progress tracking, supporting 50+ file formats
- **Smart Organization** — Auto-categorized folders with color coding and nested hierarchy
- **Enterprise Security** — NextAuth.js with OAuth (Google/GitHub), JWT sessions, audit trail
- **Billing & Subscriptions** — Stripe integration with checkout, webhooks, customer portal
- **Responsive Dashboard** — Collapsible sidebar, dark/light theme, real-time stats
- **Full Audit Log** — Complete activity trail with user, timestamp, and metadata

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14 (App Router, Server Actions) |
| **Language** | TypeScript (strict mode) |
| **Database** | PostgreSQL + Prisma ORM + pgvector |
| **Auth** | NextAuth.js v5 (OAuth + Credentials) |
| **AI** | OpenAI GPT-4o-mini + text-embedding-3-small |
| **Storage** | AWS S3 (presigned URLs) |
| **Billing** | Stripe (Checkout, Webhooks, Portal) |
| **UI** | Tailwind CSS + Lucide Icons + Framer Motion |
| **State** | TanStack Query + Zustand |
| **Validation** | Zod + React Hook Form |

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Next.js App Router                      │
├───────────┬───────────────────────────────┬──────────────┤
│  (auth)   │        (dashboard)            │ (marketing)  │
│  Login    │  Documents | Folders | Search  │  Landing     │
│  Register │  Dashboard | Billing | Audit   │  Pricing     │
├───────────┴───────────────────────────────┴──────────────┤
│                      API Routes                            │
│  /api/documents  /api/search  /api/billing  /api/auth     │
├──────────────────────────────────────────────────────────┤
│          Services: AI | Storage | Permissions             │
├──────────────────────────────────────────────────────────┤
│     PostgreSQL + pgvector  │  AWS S3  │  Stripe          │
└──────────────────────────────────────────────────────────┘
```

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL with pgvector extension
- OpenAI API key
- AWS S3 bucket
- Stripe account

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/docuflow-ai.git
cd docuflow-ai

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Set up database
pnpm prisma generate
pnpm prisma db push

# Run development server
pnpm dev
```

### Environment Variables

See `.env.example` for all required variables.

## Project Structure

```
├── app/
│   ├── (auth)/           # Login, Register pages
│   ├── (dashboard)/      # Protected dashboard pages
│   ├── (marketing)/      # Public landing page
│   └── api/              # REST API routes
├── components/
│   ├── dashboard/        # Sidebar, Header
│   ├── documents/        # Upload, Cards, AI Panel
│   ├── landing/          # Marketing components
│   └── shared/           # Providers, common
├── lib/                  # Core utilities
│   ├── ai.ts            # OpenAI integration
│   ├── auth.ts          # NextAuth config
│   ├── db.ts            # Prisma client
│   ├── permissions.ts   # RBAC + Audit
│   ├── storage.ts       # S3 operations
│   ├── stripe.ts        # Billing logic
│   └── utils.ts         # Helpers
├── prisma/
│   └── schema.prisma    # Database schema
├── hooks/               # Custom React hooks
└── types/               # TypeScript types
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/documents` | List documents (paginated, filterable) |
| POST | `/api/documents` | Upload document (FormData) |
| GET | `/api/documents/:id` | Get document details |
| PATCH | `/api/documents/:id` | Update document |
| DELETE | `/api/documents/:id` | Delete document |
| POST | `/api/documents/:id/process` | Trigger AI analysis |
| POST | `/api/documents/:id/ask` | Ask AI about document |
| POST | `/api/search` | Semantic vector search |
| GET | `/api/search?q=` | Text-based search |
| GET | `/api/folders` | List folders |
| POST | `/api/folders` | Create folder |
| GET | `/api/audit-log` | Get audit trail |
| GET | `/api/billing` | Get billing info |
| POST | `/api/billing` | Create checkout/portal session |

## License

MIT
