'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, ArrowRight, MessageCircle, Calendar } from 'lucide-react'
import Link from 'next/link'

export function VideoHero() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(() => {
        // Autoplay failed, which is expected in many browsers
        setIsPlaying(false)
      })
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (video) {
      video.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '595981234567'
  const whatsappMessage = encodeURIComponent('Hola! Me interesa solicitar una demo de sus servicios.')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #22c55e 0%, transparent 50%), radial-gradient(circle at 75% 75%, #38bdf8 0%, transparent 50%)`,
          }}></div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-sky-400 rounded-full animate-pulse animation-delay-200"></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse animation-delay-400"></div>
        </div>
      </div>

      {/* Video Controls */}
      {isLoaded && (
        <div className="absolute bottom-6 left-6 z-20 flex space-x-2">
          <button
            onClick={togglePlay}
            className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </button>
          <button
            onClick={toggleMute}
            className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="bg-slate-800/60 backdrop-blur-md border border-slate-600/50 rounded-full px-6 py-3 text-sm font-semibold text-green-400 hover:bg-slate-700/60 transition-all duration-200">
              ✨ Consultoría Especializada
            </div>
            <div className="bg-slate-800/60 backdrop-blur-md border border-slate-600/50 rounded-full px-6 py-3 text-sm font-semibold text-sky-400 hover:bg-slate-700/60 transition-all duration-200">
              🚀 Tecnología de Vanguardia
            </div>
            <div className="bg-slate-800/60 backdrop-blur-md border border-slate-600/50 rounded-full px-6 py-3 text-sm font-semibold text-gray-200 hover:bg-slate-700/60 transition-all duration-200">
              💼 Proyectos Exitosos
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-black mb-8 leading-tight tracking-tight"
          >
            Webs y automatización que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-sky-400">
              convierten visitas en clientes
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Desarrollamos soluciones digitales que generan resultados reales. 
            Desde sitios web optimizados hasta automatizaciones inteligentes para empresas en Paraguay.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group btn-primary flex items-center space-x-3 text-lg"
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Hablar por WhatsApp</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            
            <Link
              href="/contacto"
              className="group btn-outline flex items-center space-x-3 text-lg"
              aria-label="Ver nuestros servicios"
            >
              <span>Ver Servicios</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center group">
              <div className="text-4xl font-bold text-green-400 mb-3 group-hover:scale-110 transition-transform duration-200">5+</div>
              <div className="text-gray-300 font-medium">Años de Experiencia</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-sky-400 mb-3 group-hover:scale-110 transition-transform duration-200">100%</div>
              <div className="text-gray-300 font-medium">Proyectos Entregados</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-green-300 mb-3 group-hover:scale-110 transition-transform duration-200">6</div>
              <div className="text-gray-300 font-medium">Servicios Especializados</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}