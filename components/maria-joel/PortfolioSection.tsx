'use client';

const projects = [
  {
    category: 'IA · Automatización',
    title: 'Agente de Inteligencia Comercial',
    description: 'Sistema completo con LangChain + FastAPI + dashboard web en tiempo real. Analiza leads, detecta riesgo de churn y genera reportes PDF ejecutivos automáticamente. Construido como demo para Axionyst.',
    tags: ['Python', 'LangChain', 'FastAPI', 'OpenRouter', 'PDF'],
    icon: '🤖',
    color: 'from-[#4ECDC4]/20 to-[#4ECDC4]/5',
    border: 'border-[#4ECDC4]/30',
    who: 'Joel',
    whoColor: 'text-[#4ECDC4]',
    highlight: true,
  },
  {
    category: 'Desarrollo Web',
    title: 'Plataforma Web Empresarial',
    description: 'Sitio web completo con Next.js 14, múltiples secciones de servicios, blog, formulario de contacto con integración a base de datos, SEO técnico y sitemap automático.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'SEO'],
    icon: '🌐',
    color: 'from-blue-500/20 to-blue-500/5',
    border: 'border-blue-500/30',
    who: 'Joel',
    whoColor: 'text-[#4ECDC4]',
    highlight: false,
  },
  {
    category: 'IA · Chatbot',
    title: 'Chatbot con Memoria + Agente con Herramientas',
    description: 'Chatbot conversacional con historial de sesión, agente que usa herramientas (calculadora, conversión de monedas, búsqueda) y salida estructurada con Pydantic. Stack: LangChain + OpenRouter.',
    tags: ['LangChain', 'Python', 'OpenRouter', 'Claude AI', 'Pydantic'],
    icon: '💬',
    color: 'from-purple-500/20 to-purple-500/5',
    border: 'border-purple-500/30',
    who: 'Joel',
    whoColor: 'text-[#4ECDC4]',
    highlight: false,
  },
  {
    category: 'Scraping · Backend',
    title: 'Sistema de Surebets y Value Bets',
    description: 'Backend completo con scrapers de múltiples casas de apuestas, base de datos SQLite con Prisma, API REST, sistema de limpieza automática y logs. Arquitectura escalable con TypeScript.',
    tags: ['TypeScript', 'Prisma', 'SQLite', 'API REST', 'Scrapers'],
    icon: '📊',
    color: 'from-orange-500/20 to-orange-500/5',
    border: 'border-orange-500/30',
    who: 'Joel',
    whoColor: 'text-[#4ECDC4]',
    highlight: false,
  },
  {
    category: 'Marketing · Diseño',
    title: 'Gestión de Redes Sociales',
    description: 'Planificación de contenido, diseño de piezas visuales con Canva, programación de publicaciones y análisis de métricas. Estrategia de comunicación alineada con la identidad de marca.',
    tags: ['Canva', 'Instagram', 'TikTok', 'Estrategia', 'Contenido'],
    icon: '📱',
    color: 'from-[#FF6B6B]/20 to-[#FF6B6B]/5',
    border: 'border-[#FF6B6B]/30',
    who: 'Mari',
    whoColor: 'text-[#FF6B6B]',
    highlight: false,
  },
  {
    category: 'Branding · Video',
    title: 'Identidad Visual y Contenido Audiovisual',
    description: 'Creación de identidad de marca, diseño de materiales de comunicación y edición de video profesional para redes sociales y presentaciones corporativas.',
    tags: ['Canva Pro', 'Edición Video', 'Branding', 'Diseño Gráfico'],
    icon: '🎬',
    color: 'from-pink-500/20 to-pink-500/5',
    border: 'border-pink-500/30',
    who: 'Mari',
    whoColor: 'text-[#FF6B6B]',
    highlight: false,
  },
];

export default function PortfolioSection() {
  return (
    <section id="portafolio" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Trabajos Realizados</h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Proyectos reales construidos con tecnología actual
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${p.color} border ${p.border} rounded-2xl p-6 hover:scale-[1.02] transition-all ${p.highlight ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{p.icon}</span>
                <span className={`text-xs font-semibold ${p.whoColor} bg-white/5 px-2 py-1 rounded-full`}>
                  {p.who}
                </span>
              </div>
              <div className="text-xs text-white/40 font-medium uppercase tracking-wider mb-2">{p.category}</div>
              <h3 className="text-lg font-bold text-white mb-3 leading-snug">{p.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs bg-white/5 border border-white/10 text-white/60 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-14 bg-white/5 border border-white/10 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>
          <p className="text-white/70 italic text-lg leading-relaxed mb-4">
            "Trabajar con Mari y Joel fue increíble. Entendieron exactamente lo que necesitaba y entregaron un resultado que superó mis expectativas. La combinación de diseño profesional y automatización inteligente marcó la diferencia."
          </p>
          <p className="text-white/40 text-sm">— Cliente satisfecho</p>
        </div>
      </div>
    </section>
  );
}
