'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Casos de estudio reales se agregarán conforme se completen proyectos
const caseStudies = [
  {
    id: 1,
    title: 'Nuestros Primeros Proyectos',
    client: 'Próximamente',
    industry: 'Varios Sectores',
    image: '/case-study-placeholder.jpg',
    description: 'Estamos trabajando en nuestros primeros proyectos y pronto compartiremos casos de estudio reales con resultados verificables.',
    challenge: 'Como empresa nueva, estamos enfocados en entregar valor excepcional en cada proyecto.',
    solution: 'Aplicamos las mejores prácticas de la industria y tecnologías modernas para resolver problemas reales.',
    results: [
      { icon: TrendingUp, metric: 'Próximamente', description: 'Resultados reales' },
      { icon: DollarSign, metric: 'Verificables', description: 'Métricas auténticas' },
      { icon: Users, metric: 'Transparentes', description: 'Testimonios reales' },
      { icon: Clock, metric: 'Honestos', description: 'Tiempos realistas' }
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
    testimonial: 'Compartiremos testimonios reales de nuestros clientes una vez completemos nuestros primeros proyectos.',
    clientRole: 'Próximamente',
    href: '/casos-exito'
  }
]

export function CaseStudies() {
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
            Casos de{' '}
            <span className="text-gradient">Éxito</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Descubre cómo hemos transformado negocios reales con nuestras soluciones tecnológicas
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-sm font-medium mb-1">{study.industry}</div>
                    <div className="text-2xl font-bold">{study.client}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="card p-8">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {study.results.map((result, resultIndex) => {
                      const Icon = result.icon
                      return (
                        <div key={resultIndex} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <Icon className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {result.metric}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {result.description}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Tecnologías utilizadas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="border-l-4 border-primary-500 pl-4 mb-6">
                    <p className="text-gray-700 dark:text-gray-300 italic mb-2">
                      "{study.testimonial}"
                    </p>
                    <cite className="text-sm text-gray-500 dark:text-gray-400">
                      — {study.clientRole}, {study.client}
                    </cite>
                  </blockquote>

                  {/* CTA */}
                  <Link
                    href={study.href}
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors group"
                  >
                    <span>Ver caso completo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              ¿Listo para ser nuestro próximo caso de éxito?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Agenda una consulta gratuita y descubre cómo podemos transformar tu negocio
            </p>
            <Link
              href="/contacto"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>Solicitar Consulta Gratuita</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}