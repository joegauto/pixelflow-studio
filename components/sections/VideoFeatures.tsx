'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Palette, Globe, Shield, Sparkles } from 'lucide-react'

export function VideoFeatures() {
  const features = [
    {
      icon: Brain,
      title: 'IA Avanzada',
      description: 'Utilizamos los modelos de IA más avanzados para generar videos de alta calidad',
      color: 'text-blue-500'
    },
    {
      icon: Zap,
      title: 'Generación Rápida',
      description: 'Crea videos profesionales en cuestión de minutos, no horas',
      color: 'text-yellow-500'
    },
    {
      icon: Palette,
      title: 'Múltiples Estilos',
      description: 'Elige entre diferentes estilos: realista, animado, cinematográfico y más',
      color: 'text-purple-500'
    },
    {
      icon: Globe,
      title: 'Cualquier Tema',
      description: 'Genera videos sobre cualquier tema que puedas imaginar',
      color: 'text-green-500'
    },
    {
      icon: Shield,
      title: 'Uso Comercial',
      description: 'Todos los videos generados pueden usarse comercialmente sin restricciones',
      color: 'text-red-500'
    },
    {
      icon: Sparkles,
      title: 'HD Quality',
      description: 'Videos en alta definición listos para cualquier plataforma',
      color: 'text-indigo-500'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Características Poderosas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestra plataforma de generación de videos con IA está diseñada para 
            ofrecerte la mejor experiencia y resultados profesionales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-lg bg-white shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Videos Generados</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2 min</div>
              <div className="text-blue-100">Tiempo Promedio</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4K</div>
              <div className="text-blue-100">Resolución Máxima</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Satisfacción</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}