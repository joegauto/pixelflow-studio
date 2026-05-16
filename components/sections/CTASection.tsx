'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Calendar, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'

export function CTASection() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '595981234567'
  const whatsappMessage = encodeURIComponent('Hola! Me interesa solicitar una demo gratuita de los servicios de FlujoPy.')

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-sm font-medium mb-8">
              <Star className="w-4 h-4" />
              <span>Consulta Gratuita Disponible</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
              ¿Listo para transformar tu negocio con{' '}
              <span className="text-yellow-300">tecnología de vanguardia?</span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Únete a más de 150 empresas que ya han revolucionado sus procesos con nuestras soluciones de IA, automatización y ciberseguridad.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                <span className="text-lg">Consulta gratuita sin compromiso</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                <span className="text-lg">Propuesta personalizada en 24h</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                <span className="text-lg">Soporte 24/7 garantizado</span>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link
                href="/contacto"
                className="group bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2 text-lg"
              >
                <Calendar className="w-6 h-6" />
                <span>Solicitar Demo Gratuita</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2 text-lg"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Hablar por WhatsApp</span>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">150+</div>
                <div className="text-blue-100">Proyectos Exitosos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">98%</div>
                <div className="text-blue-100">Satisfacción Cliente</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
                <div className="text-blue-100">Soporte Disponible</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">5★</div>
                <div className="text-blue-100">Calificación Promedio</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
            <h3 className="text-2xl font-display font-bold text-center mb-6">
              O déjanos tus datos y te contactamos
            </h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="WhatsApp"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                />
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent">
                  <option value="" className="text-gray-900">Servicio de interés</option>
                  <option value="desarrollo-web" className="text-gray-900">Desarrollo Web</option>
                  <option value="ia" className="text-gray-900">Inteligencia Artificial</option>
                  <option value="automatizacion" className="text-gray-900">Automatizaciones</option>
                  <option value="ciberseguridad" className="text-gray-900">Ciberseguridad</option>
                  <option value="criptomonedas" className="text-gray-900">Criptomonedas</option>
                  <option value="soporte" className="text-gray-900">Soporte 24/7</option>
                </select>
              </div>
              
              <textarea
                placeholder="Cuéntanos sobre tu proyecto..."
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent resize-none"
              ></textarea>
              
              <button
                type="submit"
                className="w-full bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Enviar Consulta</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            
            <p className="text-center text-blue-100 text-sm mt-4">
              Te contactaremos en menos de 24 horas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}