'use client';

const services = [
  {
    icon: '🌐',
    title: 'Presencia Digital Completa',
    description: 'Web profesional con Next.js, SEO técnico y automatización de procesos para que tu negocio destaque y convierta.',
    features: ['Diseño responsive a medida', 'SEO técnico + sitemap', 'Formularios con base de datos', 'Analytics integrado', 'Dominio + hosting incluido'],
    color: 'from-[#4ECDC4] to-[#45B7AF]',
    who: 'Joel',
  },
  {
    icon: '🤖',
    title: 'Automatización con IA',
    description: 'Agentes inteligentes, chatbots y flujos automatizados que ahorran tiempo y reducen errores en tu operación.',
    features: ['Chatbots con memoria', 'Agentes con herramientas', 'Integración con APIs externas', 'Reportes automáticos', 'Make / Zapier / Python'],
    color: 'from-purple-500 to-purple-700',
    who: 'Joel',
  },
  {
    icon: '📱',
    title: 'Social Media Inteligente',
    description: 'Gestión de redes + contenido visual atractivo + estrategia de comunicación que conecta con tu audiencia.',
    features: ['Diseño de contenido Canva', 'Planificación mensual', 'Edición de video', 'Reportes de métricas', 'Estrategia de marca'],
    color: 'from-[#FF6B6B] to-[#FF8E8E]',
    who: 'Mari',
  },
  {
    icon: '🛒',
    title: 'E-commerce Listo para Vender',
    description: 'Tienda Shopify diseñada y configurada profesionalmente con automatización de marketing y gestión de inventario.',
    features: ['Setup Shopify completo', 'Diseño de marca', 'Automatización de emails', 'Integración de pagos', 'Catálogo de productos'],
    color: 'from-orange-500 to-orange-700',
    who: 'Joel + Mari',
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Servicios</h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Paquetes completos que combinan diseño y tecnología real
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all group">
              <div className={`bg-gradient-to-br ${s.color} p-6`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-4xl">{s.icon}</span>
                  <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full font-medium">{s.who}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{s.description}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  {s.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-white/70">
                      <span className="text-emerald-400 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contacto"
                  className="block w-full text-center py-3 bg-white/5 border border-white/10 text-white rounded-xl text-sm font-medium hover:bg-white/10 transition-all">
                  Solicitar cotización
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-block bg-white/5 border border-white/10 rounded-2xl p-8 max-w-xl">
            <h3 className="text-xl font-bold text-white mb-3">¿Necesitas algo diferente?</h3>
            <p className="text-white/50 mb-6 text-sm">Creamos soluciones personalizadas según tu proyecto y presupuesto.</p>
            <a href="#contacto"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Cuéntanos tu proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
