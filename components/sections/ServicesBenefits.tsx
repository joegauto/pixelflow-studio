'use client'

import { motion } from 'framer-motion'
import { 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Users, 
  Award,
  CheckCircle2
} from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Implementación Rápida',
    description: 'Metodología ágil que permite entregas rápidas sin comprometer la calidad.',
    stats: '50% más rápido que la competencia',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: DollarSign,
    title: 'ROI Garantizado',
    description: 'Nuestros clientes ven retorno de inversión desde el primer mes de implementación.',
    stats: 'Promedio 300% ROI en 6 meses',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: TrendingUp,
    title: 'Escalabilidad',
    description: 'Soluciones que crecen con tu negocio, adaptándose a nuevas necesidades.',
    stats: 'Escalable hasta 10x el volumen inicial',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Shield,
    title: 'Máxima Seguridad',
    description: 'Implementamos los más altos estándares de seguridad en todos nuestros desarrollos.',
    stats: '99.9% uptime garantizado',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: Users,
    title: 'Soporte Especializado',
    description: 'Equipo técnico disponible 24/7 para resolver cualquier consulta o problema.',
    stats: 'Respuesta promedio < 15 minutos',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Award,
    title: 'Calidad Certificada',
    description: 'Procesos certificados y mejores prácticas internacionales en cada proyecto.',
    stats: '98% satisfacción del cliente',
    color: 'from-yellow-500 to-orange-500'
  }
]

const achievements = [
  {
    number: '6',
    label: 'Servicios Especializados',
    description: 'Tecnologías modernas'
  },
  {
    number: '100%',
    label: 'Compromiso',
    description: 'Con cada proyecto'
  },
  {
    number: '24h',
    label: 'Respuesta Inicial',
    description: 'A tu consulta'
  },
  {
    number: '100%',
    label: 'Transparencia',
    description: 'En nuestros procesos'
  }
]

export function ServicesBenefits() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
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
            Ventajas competitivas que nos distinguen en el mercado de servicios informáticos
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
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
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Stats */}
                  <div className={`inline-block bg-gradient-to-r ${benefit.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                    {benefit.stats}
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
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Números que Hablan por Nosotros
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Resultados medibles que demuestran nuestro compromiso con la excelencia
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-8">
            Certificaciones y Reconocimientos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ISO 27001</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Gestión de Seguridad de la Información
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Google Partner</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Partner Certificado de Google Cloud
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Microsoft Certified</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Azure Solutions Architect Expert
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}