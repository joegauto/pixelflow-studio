'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X, Star, ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    id: 'basico',
    name: 'Básico',
    description: 'Perfecto para emprendedores y pequeños negocios que inician su transformación digital',
    price: 800000,
    originalPrice: 1200000,
    popular: false,
    features: [
      { name: 'Página web responsive', included: true },
      { name: 'Formulario de contacto', included: true },
      { name: 'SEO básico', included: true },
      { name: 'Soporte por email', included: true },
      { name: 'Hosting incluido (1 año)', included: true },
      { name: 'SSL certificado', included: true },
      { name: 'Google Analytics', included: true },
      { name: 'Chatbot básico', included: false },
      { name: 'Tienda online', included: false },
      { name: 'Automatizaciones', included: false },
      { name: 'Soporte 24/7', included: false },
      { name: 'IA personalizada', included: false }
    ],
    cta: 'Comenzar Ahora',
    href: '/contacto?plan=basico'
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Ideal para empresas en crecimiento que buscan automatizar y optimizar sus procesos',
    price: 2500000,
    originalPrice: 3500000,
    popular: true,
    features: [
      { name: 'Todo lo del plan Básico', included: true },
      { name: 'Tienda online completa', included: true },
      { name: 'Chatbot con IA', included: true },
      { name: 'Automatizaciones básicas', included: true },
      { name: 'Soporte prioritario', included: true },
      { name: 'Análisis de datos', included: true },
      { name: 'Integración con redes sociales', included: true },
      { name: 'Sistema de inventario', included: true },
      { name: 'Reportes automáticos', included: true },
      { name: 'Backup automático', included: true },
      { name: 'Soporte 24/7', included: false },
      { name: 'Auditoría de seguridad', included: false }
    ],
    cta: 'Más Popular',
    href: '/contacto?plan=pro'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Solución completa para grandes empresas que requieren máxima personalización y soporte',
    price: 5000000,
    originalPrice: 7000000,
    popular: false,
    features: [
      { name: 'Todo lo del plan Pro', included: true },
      { name: 'IA personalizada avanzada', included: true },
      { name: 'Automatizaciones complejas', included: true },
      { name: 'Auditoría de ciberseguridad', included: true },
      { name: 'Soporte 24/7/365', included: true },
      { name: 'Integración con ERP/CRM', included: true },
      { name: 'Consultoría estratégica', included: true },
      { name: 'SLA garantizado 99.9%', included: true },
      { name: 'Desarrollo personalizado', included: true },
      { name: 'Capacitación del equipo', included: true },
      { name: 'Gerente de cuenta dedicado', included: true },
      { name: 'Escalabilidad ilimitada', included: true }
    ],
    cta: 'Contactar Ventas',
    href: '/contacto?plan=enterprise'
  }
]

const addOns = [
  { name: 'Mantenimiento mensual', price: 200000 },
  { name: 'Capacitación adicional', price: 300000 },
  { name: 'Integración personalizada', price: 500000 },
  { name: 'Auditoría de seguridad', price: 800000 },
  { name: 'Desarrollo de app móvil', price: 1500000 }
]

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('yearly')
  
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '595981234567'

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-PY', {
      style: 'currency',
      currency: 'PYG',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

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
            Planes y{' '}
            <span className="text-gradient">Precios</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Elige el plan que mejor se adapte a las necesidades de tu negocio
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              Pago único
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all relative ${
                billingPeriod === 'yearly'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              Con mantenimiento
              <span className="absolute -top-2 -right-2 bg-secondary-500 text-white text-xs px-2 py-0.5 rounded-full">
                -30%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'lg:scale-105 lg:z-10' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Más Popular</span>
                  </div>
                </div>
              )}

              <div className={`card h-full p-8 ${
                plan.popular 
                  ? 'border-2 border-primary-500 shadow-2xl' 
                  : 'hover:shadow-2xl'
              } transition-all duration-300`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {plan.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        {formatPrice(plan.price)}
                      </span>
                    </div>
                    {plan.originalPrice && (
                      <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                        {formatPrice(plan.originalPrice)}
                      </div>
                    )}
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {billingPeriod === 'yearly' ? 'Incluye mantenimiento anual' : 'Pago único'}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${
                        feature.included 
                          ? 'text-gray-700 dark:text-gray-300' 
                          : 'text-gray-400 dark:text-gray-500'
                      }`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={plan.href}
                  className={`w-full text-center py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Servicios Adicionales
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Potencia tu plan con estos servicios complementarios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-gray-900 dark:text-white font-medium">
                  {addon.name}
                </span>
                <span className="text-primary-600 dark:text-primary-400 font-semibold">
                  {formatPrice(addon.price)}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
            ¿Tienes preguntas sobre nuestros planes?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Nuestro equipo está listo para ayudarte a elegir la mejor opción para tu negocio
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola! Me interesa conocer más sobre los planes de FlujoPy.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Consultar por WhatsApp</span>
            </a>
            
            <Link
              href="/contacto"
              className="btn-outline inline-flex items-center space-x-2"
            >
              <span>Solicitar Demo Personalizada</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}