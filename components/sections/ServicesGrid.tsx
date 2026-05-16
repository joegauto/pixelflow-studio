'use client'

import { motion } from 'framer-motion'
import { 
  Globe, 
  Brain, 
  Zap, 
  Shield, 
  Coins, 
  Headphones,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 'desarrollo-web',
    name: 'Páginas Web y Tiendas',
    description: 'Desarrollo de sitios web modernos y tiendas online optimizadas para conversión y SEO.',
    icon: Globe,
    features: ['Diseño responsive', 'SEO optimizado', 'Integración de pagos', 'Panel de administración'],
    price: 'Desde Gs. 800.000',
    color: 'from-blue-500 to-cyan-500',
    href: '/servicios/desarrollo-web'
  },
  {
    id: 'inteligencia-artificial',
    name: 'Implementación de IA',
    description: 'Chatbots inteligentes, asistentes virtuales y análisis de datos con inteligencia artificial.',
    icon: Brain,
    features: ['Chatbots personalizados', 'Análisis predictivo', 'Automatización inteligente', 'RAG personalizado'],
    price: 'Desde Gs. 1.500.000',
    color: 'from-purple-500 to-pink-500',
    href: '/servicios/inteligencia-artificial'
  },
  {
    id: 'automatizaciones',
    name: 'Automatizaciones',
    description: 'Automatización de procesos con Make, n8n, Zapier e integraciones API personalizadas.',
    icon: Zap,
    features: ['Workflows automáticos', 'Integraciones API', 'Sincronización de datos', 'Reportes automáticos'],
    price: 'Desde Gs. 600.000',
    color: 'from-yellow-500 to-orange-500',
    href: '/servicios/automatizaciones'
  },
  {
    id: 'ciberseguridad',
    name: 'Ciberseguridad',
    description: 'Auditorías de seguridad, hardening de sistemas y formación en ciberseguridad empresarial.',
    icon: Shield,
    features: ['Auditorías completas', 'Hardening de servidores', 'Formación del equipo', 'Monitoreo 24/7'],
    price: 'Desde Gs. 900.000',
    color: 'from-green-500 to-emerald-500',
    href: '/servicios/ciberseguridad'
  },
  {
    id: 'criptomonedas',
    name: 'Criptomonedas',
    description: 'Implementación de pagos cripto, on-ramp/off-ramp y formación en tecnología blockchain.',
    icon: Coins,
    features: ['Pagos con cripto', 'Exchange integration', 'Wallets corporativas', 'Formación blockchain'],
    price: 'Desde Gs. 1.200.000',
    color: 'from-indigo-500 to-purple-500',
    href: '/servicios/criptomonedas'
  },
  {
    id: 'soporte',
    name: 'Soporte Técnico',
    description: 'Mesa de ayuda técnica especializada con respuesta rápida y mantenimiento proactivo.',
    icon: Headphones,
    features: ['Soporte especializado', 'Respuesta rápida', 'Monitoreo proactivo', 'Mantenimiento preventivo'],
    price: 'Desde Gs. 300.000/mes',
    color: 'from-red-500 to-pink-500',
    href: '/servicios/soporte'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export function ServicesGrid() {
  return (
    <section className="section-padding bg-slate-800/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-8">
            Nuestros{' '}
            <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
            Desarrollamos soluciones digitales que generan resultados medibles para tu empresa
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group"
              >
                <div className="card h-full p-8 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group">
                  {/* Background Gradient */}
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${service.color}`}></div>
                  
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-bold text-white mb-6">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-8 leading-relaxed font-medium">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={service.href}
                    className="group/cta inline-flex items-center space-x-2 text-green-400 hover:text-green-300 font-semibold transition-all duration-200 hover:translate-x-1"
                    aria-label={`Conocer más sobre ${service.name}`}
                  >
                    <span>Conocer más</span>
                    <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-green-500/10 to-sky-500/10 rounded-3xl p-12 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Necesitas algo específico?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Desarrollamos soluciones personalizadas que se adaptan exactamente a las necesidades de tu negocio.
            </p>
            <Link
              href="/contacto"
              className="btn-primary inline-flex items-center space-x-2"
              aria-label="Solicitar consulta personalizada"
            >
              <span>Solicitar Consulta</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}