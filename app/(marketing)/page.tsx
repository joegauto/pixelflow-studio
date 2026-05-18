import Link from "next/link";

const features = [
  {
    icon: "🧠",
    title: "AI-Powered Analysis",
    description:
      "Automatically classify, summarize, and extract key information from any document using GPT-4.",
  },
  {
    icon: "🔍",
    title: "Semantic Search",
    description:
      "Find documents by meaning, not just keywords. Our vector search understands context and intent.",
  },
  {
    icon: "📂",
    title: "Smart Organization",
    description:
      "Auto-categorize documents into folders with AI. Tags, labels, and metadata generated automatically.",
  },
  {
    icon: "🔐",
    title: "Enterprise Security",
    description:
      "256-bit encryption, RBAC permissions, complete audit trail, and SOC 2 Type II compliance.",
  },
  {
    icon: "💬",
    title: "Document Q&A",
    description:
      "Ask questions about any document and get instant AI-powered answers with source references.",
  },
  {
    icon: "📊",
    title: "Analytics & Insights",
    description:
      "Track document usage, team activity, and storage metrics with real-time dashboards.",
  },
];

const stats = [
  { value: "10M+", label: "Documents Processed" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "0.3s", label: "Avg. Search Time" },
  { value: "2,000+", label: "Teams Trust Us" },
];

const steps = [
  {
    step: "01",
    title: "Upload Your Documents",
    description:
      "Drag & drop or bulk upload any file format — PDFs, DOCX, spreadsheets, images, and more.",
  },
  {
    step: "02",
    title: "AI Processes Everything",
    description:
      "Our AI automatically extracts text, classifies the document, generates summaries, and creates searchable embeddings.",
  },
  {
    step: "03",
    title: "Search & Collaborate",
    description:
      "Find anything instantly with semantic search. Share with your team with granular permissions.",
  },
];

const testimonials = [
  {
    quote:
      "DocuFlow AI replaced 3 different tools we were using. The semantic search alone saved us 10+ hours per week.",
    author: "Sarah Chen",
    role: "VP of Operations, TechCorp",
    avatar: "SC",
  },
  {
    quote:
      "The AI classification is remarkably accurate. We processed 50,000 legal documents in days instead of months.",
    author: "Marcus Rivera",
    role: "Head of Legal, FinanceFlow",
    avatar: "MR",
  },
  {
    quote:
      "Best document management system we've ever used. The Q&A feature is like having a research assistant on demand.",
    author: "Emily Nakamura",
    role: "CTO, DataScale",
    avatar: "EN",
  },
];

const pricing = [
  {
    name: "Free",
    price: "$0",
    description: "For individuals getting started",
    features: ["25 documents", "100MB storage", "2 team members", "Basic search"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "For growing teams",
    features: [
      "500 documents",
      "5GB storage",
      "10 team members",
      "AI processing",
      "Semantic search",
      "Audit log",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For organizations at scale",
    features: [
      "Unlimited documents",
      "50GB storage",
      "Unlimited members",
      "AI processing",
      "API access",
      "Custom integrations",
      "Dedicated support",
      "SSO",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-950/20 dark:to-gray-950" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900 rounded-full mb-8">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                Now with GPT-4o Integration
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
              Document Intelligence
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">
                Powered by AI
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Upload, analyze, and search your documents with AI-powered intelligence.
              Extract insights automatically and find anything in seconds with semantic search.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link
                href="/register"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-lg transition-all shadow-lg shadow-indigo-200 dark:shadow-none hover:shadow-xl"
              >
                Start Free — No Credit Card
              </Link>
              <a
                href="#how-it-works"
                className="flex items-center gap-2 px-6 py-4 text-gray-700 dark:text-gray-200 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                See How It Works
              </a>
            </div>

            {/* Social Proof */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  <p className="mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-950 to-transparent z-10 h-32 bottom-0 top-auto" />
            <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-800 dark:border-gray-700 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 dark:border-gray-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-gray-500">app.docuflow.ai</span>
                </div>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-900/50 min-h-[400px] flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 w-full max-w-3xl">
                  <div className="col-span-1 space-y-3">
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
                    <div className="space-y-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" style={{ width: `${70 + i * 5}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="col-span-2 space-y-3">
                    <div className="flex gap-2">
                      <div className="flex-1 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
                      <div className="w-24 h-10 bg-indigo-200 dark:bg-indigo-900/50 rounded-lg animate-pulse" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-32 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-3">
                          <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                          <div className="h-3 w-1/2 bg-gray-100 dark:bg-gray-700 rounded animate-pulse mt-2" />
                          <div className="flex gap-1 mt-4">
                            <div className="h-5 w-12 bg-indigo-100 dark:bg-indigo-900/30 rounded animate-pulse" />
                            <div className="h-5 w-10 bg-purple-100 dark:bg-purple-900/30 rounded animate-pulse" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              Features
            </span>
            <h2 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white">
              Everything you need to manage documents
            </h2>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Powerful AI capabilities combined with enterprise-grade security and collaboration tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-7 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-indigo-100 dark:hover:border-indigo-900 hover:shadow-lg transition-all group"
              >
                <span className="text-4xl">{feature.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white">
              Three steps to intelligent documents
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.step} className="relative">
                <div className="text-6xl font-black text-indigo-100 dark:text-indigo-950 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white">
              Loved by teams worldwide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              Pricing
            </span>
            <h2 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
              Start free, upgrade when you need more power.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl ${
                  plan.popular
                    ? "bg-white dark:bg-gray-900 border-2 border-indigo-500 shadow-xl shadow-indigo-100 dark:shadow-none"
                    : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {plan.description}
                  </p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/register"
                    className={`mt-8 block text-center py-3 px-6 rounded-xl font-medium text-sm transition-colors ${
                      plan.popular
                        ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
                        : "border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Ready to transform your
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              document workflow?
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-500 dark:text-gray-400">
            Join 2,000+ teams already using DocuFlow AI. Free to start, no credit card required.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/register"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-lg transition-all shadow-lg shadow-indigo-200 dark:shadow-none"
            >
              Get Started Free
            </Link>
            <a
              href="#"
              className="px-8 py-4 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold rounded-xl text-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
