'use client'

import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Calendar,
  Shield
} from 'lucide-react'

export function ContactInfo() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '595981234567'
  const whatsappMessage = encodeURIComponent('Hola! Me interesa conocer más sobre los servicios de FlujoPy.')

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
            Hablemos de tu{' '}
            <span className="text-gradient">Proyecto</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte a transformar tu negocio con tecnología de vanguardia. 
            Contáctanos y recibe una propuesta personalizada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">
                  Teléfono
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Llámanos directamente
                </p>
                <a 
                  href="tel:+595981234567"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  +595 981 234 567
                </a>
              </div>

              <div className="card p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Escríbenos un email
                </p>
                <a 
                  href="mailto:info@flujopy.com"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  info@flujopy.com
                </a>
              </div>

              <div className="card p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">
                  WhatsApp
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Respuesta inmediata
                </p>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Iniciar chat
                </a>
              </div>

              <div className="card p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">
                  Ubicación
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Visítanos en persona
                </p>
                <address className="text-primary-600 not-italic">
                  Av. Mariscal López 1234<br />
                  Asunción, Paraguay
                </address>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-primary-600" />
                <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white">
                  Horarios de Atención
                </h3>
              </div>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <div className="flex justify-between">
                  <span>Lun - Vie:</span>
                  <span>8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span>9:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span>Cerrado</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 text-secondary-600">
                  <Shield className="w-5 h-5" />
                  <span className="font-semibold">Soporte 24/7/365</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Para clientes con plan Enterprise
                </p>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-4">
                Acciones Rápidas
              </h3>
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-secondary flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat por WhatsApp</span>
                </a>
                <button className="w-full btn-outline flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Reunión</span>
                </button>
              </div>
            </div>

            <div className="card p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
              <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-4">
                Tiempo de Respuesta
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">WhatsApp:</span>
                  <span className="font-semibold text-green-600">&lt; 15 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Email:</span>
                  <span className="font-semibold text-blue-600">&lt; 2 horas</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Propuesta:</span>
                  <span className="font-semibold text-purple-600">&lt; 24 horas</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card p-8"
        >
          <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6 text-center">
            Nuestra Ubicación
          </h3>
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                Mapa interactivo próximamente
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                Av. Mariscal López 1234, Asunción, Paraguay
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}