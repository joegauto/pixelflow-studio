'use client';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0f0f]">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,107,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,107,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6B6B]/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4ECDC4]/20 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/70 text-sm px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          Disponibles para nuevos proyectos
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          PixelFlow Studio
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-light text-white/70">
          Diseño estratégico · Desarrollo web · Automatización con IA
        </p>
        <p className="text-base md:text-lg mb-12 text-white/50 max-w-2xl mx-auto">
          Mari y Joel — un equipo freelance que combina creatividad visual con tecnología real para construir proyectos digitales que generan resultados.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#portafolio"
            className="px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-xl font-semibold text-base hover:opacity-90 transition-opacity shadow-2xl">
            Ver nuestro trabajo
          </a>
          <a href="#contacto"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-semibold text-base hover:bg-white/10 transition-all">
            Hablemos de tu proyecto
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: '10+', label: 'Proyectos entregados' },
            { value: '2', label: 'Especialistas' },
            { value: '100%', label: 'Remoto' },
            { value: '24h', label: 'Tiempo de respuesta' },
          ].map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-white/50 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
