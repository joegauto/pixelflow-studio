'use client'

import { motion } from 'framer-motion'
import { 
  MessageSquare, 
  Search, 
  Code, 
  TestTube, 
  Rocket,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const processSteps = [
  {
    id: 1,
    title: 'Consulta Inicial',
    description: 'Analizamos tus necesidades y objetivos de negocio en una reunión personalizada.',
    icon: MessageSquare,
    duration: '1-2 días',
    deliverables: ['Análisis de requerimientos', 'Propuesta inicial', 'Cronograma preliminar'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Investigación y Diseño',
    description: 'Diseñamos la arquitectura técnica y la experiencia de usuario óptima.',
    icon: Search,
    duration: '3-5 días',
    deliverables: ['Arquitectura técnica', 'Diseños UI/UX', 'Especificaciones detalladas'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Desarrollo',
    description: 'Implementamos la solución siguiendo las mejores prácticas de desarrollo.',
    icon: Code,
    duration: '2-4 semanas',
    deliverables: ['Código fuente', 'Documentación técnica', 'Reportes de progreso'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 4,
    title: 'Testing y QA',
    description: 'Realizamos pruebas exhaustivas para garantizar la calidad y seguridad.',
    icon: TestTube,
    duration: '3-5 días',
    deliverables: ['Reportes de testing', 'Corrección de bugs', 'Optimizaciones'],
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 5,
    title: 'Lanzamiento',
    description: 'Desplegamos la solución y brindamos capacitación a tu equipo.',
    icon: Rocket,
    duration: '1-2 días',
    deliverables: ['Deploy en producción', 'Capacitación del equipo', 'Documentación de usuario'],
    color: 'from-indigo-500 to-purple-500'
  }
]

export function ProcessTimeline() {
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
            Nuestro{' '}
            <span className="text-gradient">Proceso</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Un proceso probado que garantiza resultados excepcionales en cada proyecto
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

          {/* Process Steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.id}
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
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${
                    isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className="card p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      {/* Step Number */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                          PASO {step.id}
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
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Entregables:
                        </h4>
                        <ul className="space-y-2">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <li key={deliverableIndex} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
          className="mt-20 bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
              ¿Por qué nuestro proceso funciona?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Cada paso está diseñado para maximizar el valor y minimizar los riesgos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Transparencia Total
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Mantenemos comunicación constante y reportes detallados en cada etapa del proyecto.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TestTube className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Calidad Garantizada
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Testing exhaustivo y revisiones de calidad en cada fase para garantizar excelencia.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Entrega Rápida
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Metodología ágil que permite entregas rápidas sin comprometer la calidad.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
            ¿Listo para comenzar tu proyecto?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Iniciar Proyecto</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/casos-exito"
              className="btn-outline inline-flex items-center space-x-2"
            >
              <span>Ver Casos de Éxito</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}