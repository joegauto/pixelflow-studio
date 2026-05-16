'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, MessageCircle, Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceHeroProps {
  data: {
    title: string
    subtitle: string
    description: string
    image: string
    benefits: string[]
    ctaText: string
    price: string
  }
}

export function ServiceHero({ data }: ServiceHeroProps) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '595981234567'
  const whatsappMessage = encodeURIComponent(`Hola! Me interesa el servicio de ${data.title}. ¿Podrían brindarme más información?`)

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {data.title}
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-primary-600 dark:text-primary-400 font-semibold mb-6">
              {data.subtitle}
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {data.description}
            </p>

            {/* Benefits */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Beneficios principales:
              </h3>
              <ul className="space-y-3">
                {data.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-full text-lg font-semibold">
                {data.price}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>{data.ctaText}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={data.image}
                alt={data.title}
                width={600}
                height={400}
                className="w-full h-80 lg:h-96 object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}