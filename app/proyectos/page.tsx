import type { Metadata } from 'next'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Proyectos - FlujoPy Consultor',
  description: 'Explora nuestros proyectos de Dropshipping, Automatización de Videos y más soluciones personalizadas.',
  keywords: ['proyectos', 'dropshipping', 'automatización videos', 'tiendas online', 'Paraguay'],
}

export default function ProyectosPage() {
  const projects = [
    {
      id: 'dropshipping',
      title: 'Tiendas Dropshipping',
      description: 'Automatiza tu tienda online con integración de proveedores, sincronización de inventario y procesamiento de pedidos automático.',
      features: ['Sincronización automática de productos', 'Gestión de pedidos', 'Integración con múltiples proveedores'],
      status: 'Activo'
    },
    {
      id: 'automatizacion-videos',
      title: 'Automatización de Videos',
      description: 'Crea videos automáticamente para redes sociales usando IA. Genera contenido en masa de manera eficiente.',
      features: ['Generación con IA', 'Publicación automática', 'Plantillas personalizadas'],
      status: 'En desarrollo'
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Nuestros Proyectos
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Explora las soluciones personalizadas que hemos desarrollado para nuestros clientes
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    project.status === 'Activo' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-400">
                      <span className="text-blue-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </>
  )
}