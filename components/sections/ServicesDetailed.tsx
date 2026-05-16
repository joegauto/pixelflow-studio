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
import Image from 'next/image'

const services = [
  {
    id: 'desarrollo-web',
    name: 'Desarrollo Web y Tiendas',
    description: 'Creamos sitios web modernos, responsivos y optimizados para SEO. Desde páginas corporativas hasta tiendas online completas con sistemas de pago integrados.',
    icon: Globe,
    image: '/services/desarrollo-web.svg',
    features: [
      'Diseño responsive y moderno',
      'SEO optimizado desde el inicio',
      'Integración con sistemas de pago',
      'Panel de administración intuitivo',
      'Optimización de velocidad',
      'Certificados SSL incluidos'
    ],
    technologies: ['Next.js', 'React', 'WordPress', 'Shopify', 'WooCommerce'],
    price: 'Desde Gs. 1.500.000',
    deliveryTime: '2-4 semanas',
    color: 'from-blue-500 to-cyan-500',
    href: '/servicios/desarrollo-web'
  },
  {
    id: 'inteligencia-artificial',
    name: 'Implementación de IA',
    description: 'Integramos inteligencia artificial en tu negocio con chatbots inteligentes, análisis predictivo y automatización de procesos complejos.',
    icon: Brain,
    image: '/services/inteligencia-artificial.svg',
    features: [
      'Chatbots conversacionales avanzados',
      'Análisis predictivo de datos',
      'Procesamiento de lenguaje natural',
      'Sistemas de recomendación',
      'Automatización inteligente',
      'Integración con APIs de IA'
    ],
    technologies: ['OpenAI GPT', 'TensorFlow', 'Python', 'Dialogflow', 'Rasa'],
    price: 'Desde Gs. 2.500.000',
    deliveryTime: '3-6 semanas',
    color: 'from-purple-500 to-pink-500',
    href: '/servicios/inteligencia-artificial'
  },
  {
    id: 'automatizaciones',
    name: 'Automatizaciones',
    description: 'Automatizamos procesos repetitivos y conectamos tus sistemas para aumentar la eficiencia operativa y reducir errores humanos.',
    icon: Zap,
    image: '/services/automatizaciones.svg',
    features: [
      'Workflows automáticos personalizados',
      'Integración entre aplicaciones',
      'Sincronización de datos en tiempo real',
      'Reportes automáticos programados',
      'Notificaciones inteligentes',
      'APIs y webhooks personalizados'
    ],
    technologies: ['Make', 'n8n', 'Zapier', 'Power Automate', 'APIs REST'],
    price: 'Desde Gs. 800.000',
    deliveryTime: '1-3 semanas',
    color: 'from-yellow-500 to-orange-500',
    href: '/servicios/automatizaciones'
  },
  {
    id: 'ciberseguridad',
    name: 'Ciberseguridad',
    description: 'Protegemos tu negocio con auditorías de seguridad, hardening de sistemas y formación especializada para tu equipo.',
    icon: Shield,
    image: '/services/ciberseguridad.svg',
    features: [
      'Auditorías de seguridad completas',
      'Hardening de servidores y sistemas',
      'Implementación de firewalls',
      'Monitoreo de amenazas 24/7',
      'Formación en ciberseguridad',
      'Planes de respuesta a incidentes'
    ],
    technologies: ['Nessus', 'OpenVAS', 'Wireshark', 'Metasploit', 'OWASP'],
    price: 'Desde Gs. 1.200.000',
    deliveryTime: '2-4 semanas',
    color: 'from-green-500 to-emerald-500',
    href: '/servicios/ciberseguridad'
  },
  {
    id: 'criptomonedas',
    name: 'Criptomonedas',
    description: 'Implementamos soluciones blockchain, pagos con criptomonedas y brindamos formación especializada en tecnologías descentralizadas.',
    icon: Coins,
    image: '/services/criptomonedas.svg',
    features: [
      'Integración de pagos cripto',
      'Desarrollo de smart contracts',
      'Wallets corporativas seguras',
      'Exchanges y trading bots',
      'Formación en blockchain',
      'Consultoría en tokenización'
    ],
    technologies: ['Ethereum', 'Bitcoin', 'Solidity', 'Web3.js', 'MetaMask'],
    price: 'Desde Gs. 2.000.000',
    deliveryTime: '3-8 semanas',
    color: 'from-indigo-500 to-purple-500',
    href: '/servicios/criptomonedas'
  },
  {
    id: 'soporte',
    name: 'Soporte 24/7/365',
    description: 'Mesa de ayuda técnica especializada con SLA garantizado. Mantenimiento proactivo y soporte inmediato para tu tranquilidad.',
    icon: Headphones,
    image: '/services/soporte.svg',
    features: [
      'Soporte técnico inmediato',
      'SLA de respuesta garantizado',
      'Monitoreo proactivo de sistemas',
      'Mantenimiento preventivo',
      'Actualizaciones de seguridad',
      'Backup y recuperación de datos'
    ],
    technologies: ['Zendesk', 'Slack', 'Monitoring Tools', 'Remote Support'],
    price: 'Desde Gs. 500.000/mes',
    deliveryTime: 'Inmediato',
    color: 'from-red-500 to-pink-500',
    href: '/servicios/soporte'
  }
]

export function ServicesDetailed() {
  return (
    <section id="servicios-detalle" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
            Nuestros{' '}
            <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Soluciones tecnológicas completas diseñadas para impulsar tu negocio hacia el futuro digital
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                }`}
              >
                {/* Image */}
                <div className={`${isEven ? '' : 'lg:col-start-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Price Badge */}
                    <div className="absolute top-6 right-6">
                      <div className={`bg-gradient-to-r ${service.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                        {service.price}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                  <div className="space-y-6">
                    {/* Icon and Title */}
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white">
                          {service.name}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                          <span>⏱️ {service.deliveryTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Características principales:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Tecnologías:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={service.href}
                        className="btn-primary inline-flex items-center space-x-2"
                      >
                        <span>Ver Detalles</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      
                      <Link
                        href={`/contacto?service=${service.id}`}
                        className="btn-outline inline-flex items-center space-x-2"
                      >
                        <span>Solicitar Cotización</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}