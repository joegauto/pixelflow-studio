'use client'

import { motion } from 'framer-motion'
import { 
  Clock, 
  Shield, 
  TrendingUp, 
  Users, 
  Award, 
  Zap,
  CheckCircle2,
  Star
} from 'lucide-react'

const reasons = [
  {
    icon: Clock,
    title: 'Rapidez en Entrega',
    description: 'Implementamos soluciones en tiempo récord sin comprometer la calidad.',
    stats: '50% más rápido que la competencia',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Máxima Seguridad',
    description: 'Todos nuestros desarrollos siguen los más altos estándares de ciberseguridad.',
    stats: '99.9% de uptime garantizado',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: TrendingUp,
    title: 'ROI Comprobado',
    description: 'Nuestros clientes ven resultados medibles desde el primer mes.',
    stats: 'Promedio 300% ROI en 6 meses',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Equipo Especializado',
    description: 'Profesionales capacitados y actualizados en las últimas tecnologías del mercado.',
    stats: 'Formación continua en nuevas tecnologías',
    color: 'from-orange-500 to-red-500'
  }
]

const achievements = [
  {
    icon: Award,
    title: 'Certificaciones',
    items: ['ISO 27001', 'Google Partner', 'Microsoft Certified']
  },
  {
    icon: Star,
    title: 'Reconocimientos',
    items: ['Top IT Company 2024', 'Best Innovation Award', 'Customer Choice']
  },
  {
    icon: Zap,
    title: 'Tecnologías',
    items: ['IA/ML', 'Blockchain', 'Cloud Computing']
  }
]

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-white dark:bg-gray-800">
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
            ¿Por qué elegir{' '}
            <span className="text-gradient">FlujoPy?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Más de 150 empresas confían en nosotros para transformar sus procesos digitales
          </p>
        </motion.div>

        {/* Main Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="card p-8 h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
                    {reason.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Stats */}
                  <div className={`inline-block bg-gradient-to-r ${reason.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                    {reason.stats}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Respaldados por la Excelencia
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Nuestras certificaciones y reconocimientos avalan la calidad de nuestro trabajo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
                    {achievement.title}
                  </h4>
                  
                  <ul className="space-y-2">
                    {achievement.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">6</div>
            <div className="text-gray-600 dark:text-gray-400">Servicios Especializados</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-secondary-600 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-400">Compromiso con Calidad</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent-600 mb-2">24h</div>
            <div className="text-gray-600 dark:text-gray-400">Respuesta Inicial</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-400">Transparencia</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}