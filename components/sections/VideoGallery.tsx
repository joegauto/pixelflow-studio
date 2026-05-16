'use client'

import { motion } from 'framer-motion'
import { Play, Eye } from 'lucide-react'
import { useState } from 'react'

export function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const exampleVideos = [
    {
      id: 1,
      title: 'Paisaje Natural',
      description: 'Un hermoso amanecer en las montañas con niebla',
      thumbnail: '/api/placeholder/400/225',
      prompt: 'Un amanecer dorado sobre montañas cubiertas de niebla, con rayos de sol atravesando los árboles',
      style: 'Cinematográfico',
      duration: '30s'
    },
    {
      id: 2,
      title: 'Animación Urbana',
      description: 'Ciudad futurista con luces de neón',
      thumbnail: '/api/placeholder/400/225',
      prompt: 'Una ciudad futurista de noche con rascacielos iluminados por luces de neón azules y moradas',
      style: 'Animado',
      duration: '45s'
    },
    {
      id: 3,
      title: 'Producto Comercial',
      description: 'Presentación elegante de producto',
      thumbnail: '/api/placeholder/400/225',
      prompt: 'Un smartphone moderno girando lentamente sobre una superficie reflectante con iluminación profesional',
      style: 'Realista',
      duration: '15s'
    },
    {
      id: 4,
      title: 'Naturaleza Abstracta',
      description: 'Formas orgánicas en movimiento',
      thumbnail: '/api/placeholder/400/225',
      prompt: 'Formas orgánicas fluidas que se transforman en colores vibrantes como pintura líquida',
      style: 'Artístico',
      duration: '60s'
    },
    {
      id: 5,
      title: 'Cocina Gourmet',
      description: 'Preparación de comida en cámara lenta',
      thumbnail: '/api/placeholder/400/225',
      prompt: 'Un chef preparando pasta fresca en cámara lenta con vapor y ingredientes frescos',
      style: 'Cinematográfico',
      duration: '30s'
    },
    {
      id: 6,
      title: 'Espacio Exterior',
      description: 'Viaje a través del cosmos',
      thumbnail: '/api/placeholder/400/225',
      prompt: 'Un viaje épico a través del espacio con nebulosas coloridas, estrellas y planetas',
      style: 'Cinematográfico',
      duration: '45s'
    }
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Galería de Videos Generados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explora algunos ejemplos de videos creados con nuestra IA. 
            Cada uno fue generado a partir de una simple descripción de texto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exampleVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedVideo(video.id.toString())}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors"
                  >
                    <Play className="w-8 h-8 text-white" />
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {video.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">Prompt:</span>
                    <span className="text-xs text-gray-300 line-clamp-2">
                      "{video.prompt}"
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                      {video.style}
                    </span>
                    <button className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      Ver detalles
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para crear tu propio video?
            </h3>
            <p className="text-blue-100 mb-6">
              Únete a miles de creadores que ya están usando nuestra IA para generar contenido increíble
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Empezar Gratis
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal para video (opcional) */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Vista Previa del Video</h3>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <p className="text-gray-600">
                  Aquí se mostraría el video seleccionado
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  (En la implementación real, aquí iría el reproductor de video)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}