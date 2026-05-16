'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

interface ProcessStep {
  step: number
  title: string
  description: string
  duration: string
}

interface ServiceProcessProps {
  steps: ProcessStep[]
}

export function ServiceProcess({ steps }: ServiceProcessProps) {
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
            Nuestro{' '}
            <span className="text-gradient">Proceso</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Un proceso estructurado y probado que garantiza resultados excepcionales
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">{step.step}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${
                    isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className="card p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      {/* Step Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                          PASO {step.step}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Garantías de nuestro proceso
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Cada paso está diseñado para maximizar el valor y minimizar los riesgos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Transparencia Total
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Comunicación constante y reportes detallados en cada etapa del proyecto.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Calidad Garantizada
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Testing exhaustivo y revisiones de calidad en cada fase del desarrollo.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Soporte Continuo
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Acompañamiento post-implementación y soporte técnico especializado.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}