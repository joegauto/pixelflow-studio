'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

const navigation = [
  { name: 'Inicio', href: '/' },
  { 
    name: 'Servicios', 
    href: '/servicios',
    submenu: [
      { name: 'Páginas Web', href: '/servicios/desarrollo-web' },
      { name: 'Inteligencia Artificial', href: '/servicios/inteligencia-artificial' },
      { name: 'Generador de Videos IA', href: '/generador-videos' },
      { name: 'Automatizaciones', href: '/servicios/automatizaciones' },
      { name: 'Ciberseguridad', href: '/servicios/ciberseguridad' },
      { name: 'Criptomonedas', href: '/servicios/criptomonedas' },
      { name: 'Soporte 24/7', href: '/servicios/soporte' },
    ]
  },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Roadmap', href: '/roadmap' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contacto', href: '/contacto' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => {
    setIsOpen(false)
    setActiveSubmenu(null)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/90 backdrop-blur-xl shadow-2xl border-b border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-500 to-sky-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-green-500/25 transition-all duration-200 group-hover:scale-105">
              <span className="text-slate-900 font-black text-xl lg:text-2xl">F</span>
            </div>
            <span className="font-display font-bold text-2xl lg:text-3xl text-white">
              FlujoPy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className={`flex items-center space-x-1 px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-200 ${
                        pathname.startsWith(item.href)
                          ? 'text-green-400 bg-slate-800/50'
                          : 'text-gray-300 hover:text-white hover:bg-slate-800/30'
                      }`}
                      onMouseEnter={() => setActiveSubmenu(item.name)}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {activeSubmenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-slate-600/50 py-2"
                          onMouseEnter={() => setActiveSubmenu(item.name)}
                          onMouseLeave={() => setActiveSubmenu(null)}
                        >
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="block px-4 py-3 text-sm text-gray-300 hover:bg-slate-700/50 hover:text-green-400 transition-all duration-200 rounded-lg mx-2"
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-200 ${
                      pathname === item.href
                        ? 'text-green-400 bg-slate-800/50'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800/30'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contacto" className="btn-primary">
              Contactar
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:bg-slate-800/50 hover:text-white transition-all duration-200 rounded-lg mx-2"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${
                            activeSubmenu === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        <AnimatePresence>
                          {activeSubmenu === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
              className="bg-slate-800/30"
                            >
                              {item.submenu.map((subitem) => (
                                <Link
                                  key={subitem.name}
                                  href={subitem.href}
                                  onClick={closeMenu}
                                  className="block px-8 py-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                                >
                                  {subitem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`block px-4 py-3 transition-all duration-200 rounded-lg mx-2 ${
                          pathname === item.href
                            ? 'text-green-400 bg-slate-800/50'
                            : 'text-gray-300 hover:bg-slate-800/50 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <Link href="/contacto" onClick={closeMenu} className="btn-primary w-full text-center">
                    Contactar
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}