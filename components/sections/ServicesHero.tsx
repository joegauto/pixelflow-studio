'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export function ServicesHero() {
  const benefits = [
    "Soluciones personalizadas para tu negocio",
    "Tecnología de vanguardia y mejores prácticas",
    "Soporte técnico especializado 24/7",
    "ROI comprobado en todos nuestros proyectos"
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Servicios{' '}
              <span className="text-gradient">Informáticos</span>{' '}
              Integrales
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Transformamos tu negocio con tecnología de vanguardia. Desde desarrollo web hasta 
              inteligencia artificial, ofrecemos soluciones completas para impulsar tu crecimiento.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3 text-left"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contacto"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Solicitar Consulta Gratuita</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                href="#servicios-detalle"
                className="btn-outline inline-flex items-center space-x-2"
              >
                <span>Ver Todos los Servicios</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
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