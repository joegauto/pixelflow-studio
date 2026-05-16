'use client';

const steps = [
  {
    number: '01',
    title: 'Descubrimiento',
    description: 'Videollamada inicial para entender tu negocio, objetivos y audiencia. Sin compromiso.',
    icon: '🎯',
    color: 'bg-[#FF6B6B]',
  },
  {
    number: '02',
    title: 'Propuesta',
    description: 'Diseñamos un plan claro con alcance, tiempos y precio. Sin sorpresas.',
    icon: '📋',
    color: 'bg-purple-500',
  },
  {
    number: '03',
    title: 'Construcción',
    description: 'Mari trabaja el diseño y la comunicación mientras Joel construye la parte técnica. En paralelo.',
    icon: '⚡',
    color: 'bg-[#4ECDC4]',
  },
  {
    number: '04',
    title: 'Entrega',
    description: 'Revisamos juntos, ajustamos lo que haga falta y lanzamos. Con soporte post-entrega.',
    icon: '🚀',
    color: 'bg-emerald-500',
  },
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Cómo Trabajamos</h2>
          <p className="text-white/50 text-lg">Un proceso simple y transparente de principio a fin</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-px bg-white/10"></div>
              )}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all">
                <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}>
                  {step.number}
                </div>
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="text-white font-bold mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { value: '24h', label: 'Primera respuesta', color: 'text-[#FF6B6B]' },
            { value: '1-4 sem', label: 'Tiempo de entrega', color: 'text-purple-400' },
            { value: '100%', label: 'Comunicación transparente', color: 'text-[#4ECDC4]' },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <div className={`text-3xl font-bold ${item.color} mb-1`}>{item.value}</div>
              <div className="text-white/50 text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
