'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, MessageCircle } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: '¿Cuánto tiempo toma implementar una solución?',
    answer: 'El tiempo de implementación varía según la complejidad del proyecto. Para una página web básica, típicamente toma 1-2 semanas. Para soluciones más complejas con IA y automatizaciones, puede tomar 4-8 semanas. Siempre proporcionamos un cronograma detallado durante la consulta inicial.'
  },
  {
    id: 2,
    question: '¿Ofrecen soporte después de la implementación?',
    answer: 'Sí, ofrecemos diferentes niveles de soporte post-implementación. Todos nuestros planes incluyen soporte básico por email. Los planes Pro y Enterprise incluyen soporte prioritario y 24/7 respectivamente. También ofrecemos contratos de mantenimiento mensual para garantizar el óptimo funcionamiento de tu solución.'
  },
  {
    id: 3,
    question: '¿Pueden integrar sus soluciones con nuestros sistemas existentes?',
    answer: 'Absolutamente. Tenemos amplia experiencia integrando nuestras soluciones con sistemas ERP, CRM, y otras plataformas empresariales como SAP, Salesforce, HubSpot, y muchas más. Durante la consulta inicial evaluamos tus sistemas actuales y diseñamos la integración más eficiente.'
  },
  {
    id: 4,
    question: '¿Qué medidas de seguridad implementan?',
    answer: 'La seguridad es nuestra prioridad. Implementamos cifrado SSL, autenticación multifactor, copias de seguridad automáticas, y seguimos las mejores prácticas de ciberseguridad. Todos nuestros desarrollos pasan por auditorías de seguridad y cumplimos con estándares internacionales como ISO 27001.'
  },
  {
    id: 5,
    question: '¿Trabajan con empresas de todos los tamaños?',
    answer: 'Sí, trabajamos con empresas de todos los tamaños, desde emprendedores individuales hasta grandes corporaciones. Tenemos planes específicos para cada tipo de negocio y adaptamos nuestras soluciones a las necesidades y presupuesto de cada cliente.'
  },
  {
    id: 6,
    question: '¿Qué pasa si no estoy satisfecho con el resultado?',
    answer: 'Ofrecemos una garantía de satisfacción. Si no estás completamente satisfecho con el resultado, trabajaremos contigo para hacer las correcciones necesarias sin costo adicional. En casos excepcionales, ofrecemos reembolso parcial según los términos acordados en el contrato.'
  },
  {
    id: 7,
    question: '¿Pueden capacitar a nuestro equipo?',
    answer: 'Por supuesto. Incluimos capacitación básica en todos nuestros planes. Para el plan Enterprise, ofrecemos capacitación extendida y personalizada. También proporcionamos documentación detallada y videos tutoriales para que tu equipo pueda usar las soluciones de manera efectiva.'
  },
  {
    id: 8,
    question: '¿Ofrecen servicios de mantenimiento?',
    answer: 'Sí, ofrecemos diferentes planes de mantenimiento que incluyen actualizaciones de seguridad, backups automáticos, monitoreo de rendimiento, y soporte técnico. El mantenimiento es esencial para garantizar que tu solución funcione óptimamente a largo plazo.'
  },
  {
    id: 9,
    question: '¿Cómo manejan los datos de nuestros clientes?',
    answer: 'Cumplimos estrictamente con las regulaciones de protección de datos. Implementamos cifrado de extremo a extremo, acceso controlado, y auditorías regulares. Nunca compartimos datos de clientes con terceros y seguimos las mejores prácticas de privacidad y seguridad de datos.'
  },
  {
    id: 10,
    question: '¿Pueden ayudarnos con el hosting y dominio?',
    answer: 'Sí, podemos gestionar completamente el hosting y dominio de tu proyecto. Trabajamos con proveedores confiables y ofrecemos diferentes opciones según tus necesidades de rendimiento y presupuesto. También podemos migrar sitios existentes si es necesario.'
  }
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([1]) // First item open by default

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '595981234567'

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
            Preguntas{' '}
            <span className="text-gradient">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Resolvemos las dudas más comunes sobre nuestros servicios y procesos
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  aria-expanded={openItems.includes(faq.id)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(faq.id) ? (
                      <Minus className="w-5 h-5 text-primary-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openItems.includes(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-lg">
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
                ¿No encuentras la respuesta que buscas?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Nuestro equipo de expertos está disponible 24/7 para resolver cualquier duda específica sobre tu proyecto
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola! Tengo una consulta sobre los servicios de FlujoPy.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Consultar por WhatsApp</span>
                </a>
                
                <a
                  href="/contacto"
                  className="btn-outline inline-flex items-center space-x-2"
                >
                  <span>Enviar Consulta</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}