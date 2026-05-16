'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, Settings } from 'lucide-react'
import Link from 'next/link'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted))
    setIsVisible(false)
    
    // Initialize analytics if accepted
    if (allAccepted.analytics) {
      initializeAnalytics()
    }
  }

  const acceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))
    setIsVisible(false)
    
    if (preferences.analytics) {
      initializeAnalytics()
    }
  }

  const rejectAll = () => {
    const minimal = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    }
    setPreferences(minimal)
    localStorage.setItem('cookie-consent', JSON.stringify(minimal))
    setIsVisible(false)
  }

  const initializeAnalytics = () => {
    // Initialize Google Analytics or other analytics tools
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
      })
    }
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-2xl"
      >
        <div className="container-custom py-6">
          {!showSettings ? (
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex items-start space-x-4 flex-1">
                <Cookie className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Usamos cookies para mejorar tu experiencia
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Utilizamos cookies esenciales para el funcionamiento del sitio y cookies opcionales 
                    para análisis y marketing. Puedes personalizar tus preferencias o aceptar todas.{' '}
                    <Link href="/legal/cookies" className="text-primary-600 hover:underline">
                      Más información
                    </Link>
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex items-center justify-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg transition-colors"
                >
                  <Settings className="w-4 h-4" />
                  <span>Personalizar</span>
                </button>
                <button
                  onClick={rejectAll}
                  className="px-6 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg transition-colors"
                >
                  Rechazar
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                >
                  Aceptar todas
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  Preferencias de cookies
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Cookies necesarias</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Esenciales para el funcionamiento básico del sitio web.
                    </p>
                  </div>
                  <div className="text-sm text-gray-500">Siempre activas</div>
                </div>
                
                {[
                  {
                    key: 'analytics',
                    title: 'Cookies de análisis',
                    description: 'Nos ayudan a entender cómo interactúas con nuestro sitio web.'
                  },
                  {
                    key: 'marketing',
                    title: 'Cookies de marketing',
                    description: 'Utilizadas para mostrar anuncios relevantes y medir su efectividad.'
                  },
                  {
                    key: 'functional',
                    title: 'Cookies funcionales',
                    description: 'Permiten funcionalidades mejoradas y personalización.'
                  }
                ].map((cookie) => (
                  <div key={cookie.key} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{cookie.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{cookie.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences[cookie.key as keyof typeof preferences]}
                        onChange={(e) => setPreferences(prev => ({
                          ...prev,
                          [cookie.key]: e.target.checked
                        }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={rejectAll}
                  className="px-6 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg transition-colors"
                >
                  Rechazar todas
                </button>
                <button
                  onClick={acceptSelected}
                  className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                >
                  Guardar preferencias
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}