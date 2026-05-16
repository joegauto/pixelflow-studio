'use client'

import { motion } from 'framer-motion'
import { 
  Workflow, 
  Code, 
  Settings, 
  Monitor,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const iconMap = {
  workflow: Workflow,
  api: Code,
  tools: Settings,
  monitor: Monitor,
}

interface Feature {
  title: string
  description: string
  icon: string
  benefits: string[]
}

interface ServiceFeaturesProps {
  features: Feature[]
}

export function ServiceFeatures({ features }: ServiceFeaturesProps) {
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
            Características{' '}
            <span className="text-gradient">Principales</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Descubre todas las funcionalidades y beneficios que incluye nuestro servicio
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Workflow
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
              ¿Listo para comenzar?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos
            </p>
            <a
              href="/contacto"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Solicitar Consulta Gratuita</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}