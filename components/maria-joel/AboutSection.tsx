'use client';

const joeTools = [
  { icon: '⚡', label: 'Next.js / React' },
  { icon: '🐍', label: 'Python' },
  { icon: '🤖', label: 'LangChain + IA' },
  { icon: '🗄️', label: 'Prisma / SQLite' },
  { icon: '🔧', label: 'FastAPI' },
  { icon: '🛒', label: 'Shopify' },
  { icon: '🔗', label: 'Make / Zapier' },
  { icon: '🌐', label: 'OpenRouter / Ollama' },
];

const mariTools = [
  { icon: '🎨', label: 'Canva Pro' },
  { icon: '🎬', label: 'Edición de Video' },
  { icon: '📱', label: 'Instagram / TikTok' },
  { icon: '📊', label: 'Meta Ads' },
  { icon: '✍️', label: 'Copywriting' },
  { icon: '📧', label: 'Email Marketing' },
  { icon: '🗓️', label: 'Planificación de contenido' },
  { icon: '💬', label: 'Atención al cliente' },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">El Equipo</h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Dos perfiles complementarios que cubren todo lo que un proyecto digital necesita
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Joel */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#4ECDC4]/40 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4ECDC4] to-[#45B7AF] rounded-2xl flex items-center justify-center text-3xl">
                ⚡
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Joel</h3>
                <p className="text-[#4ECDC4] text-sm font-medium">Desarrollador & Automatización IA</p>
              </div>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              Desarrollo web full-stack con Next.js y Python. Especializado en integrar inteligencia artificial real en productos — desde agentes autónomos hasta sistemas de análisis con LangChain. Construye lo que otros solo prometen.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {joeTools.map((t, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 text-sm text-white/70">
                  <span>{t.icon}</span>
                  <span>{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mari */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FF6B6B]/40 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] rounded-2xl flex items-center justify-center text-3xl">
                🎨
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Mari</h3>
                <p className="text-[#FF6B6B] text-sm font-medium">Marketing & Diseño Visual</p>
              </div>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              Diseño visual estratégico y gestión de redes sociales con foco en conversión. Crea la identidad visual, el contenido y la comunicación que conecta marcas con su audiencia. El lado humano de cada proyecto.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {mariTools.map((t, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 text-sm text-white/70">
                  <span>{t.icon}</span>
                  <span>{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Por qué nosotros */}
        <div className="mt-10 bg-gradient-to-r from-[#FF6B6B]/10 to-[#4ECDC4]/10 border border-white/10 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">¿Por qué trabajar con nosotros?</h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            No subcontratamos ni usamos plantillas genéricas. Cada proyecto lo construimos desde cero, combinando diseño que comunica con tecnología que funciona. Un solo equipo, todo cubierto.
          </p>
        </div>
      </div>
    </section>
  );
}
