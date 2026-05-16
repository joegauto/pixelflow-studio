import Link from 'next/link'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Shield
} from 'lucide-react'

const navigation = {
  servicios: [
    { name: 'Desarrollo Web', href: '/servicios/desarrollo-web' },
    { name: 'Inteligencia Artificial', href: '/servicios/inteligencia-artificial' },
    { name: 'Automatizaciones', href: '/servicios/automatizaciones' },
    { name: 'Ciberseguridad', href: '/servicios/ciberseguridad' },
    { name: 'Criptomonedas', href: '/servicios/criptomonedas' },
    { name: 'Soporte 24/7', href: '/servicios/soporte' },
  ],
  empresa: [
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Blog', href: '/blog' },
    { name: 'Casos de Éxito', href: '/casos-exito' },
    { name: 'Contacto', href: '/contacto' },
  ],
  legal: [
    { name: 'Términos y Condiciones', href: '/legal/terminos' },
    { name: 'Política de Privacidad', href: '/legal/privacidad' },
    { name: 'Política de Cookies', href: '/legal/cookies' },
    { name: 'Estado del Servicio', href: '/estado' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
  ],
}

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-8 group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-sky-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-green-500/25 transition-all duration-200">
                  <span className="text-slate-900 font-black text-2xl">F</span>
                </div>
                <span className="font-display font-bold text-3xl text-white">FlujoPy</span>
              </Link>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg font-medium">
                Desarrollamos soluciones digitales que convierten visitas en clientes. 
                Especialistas en desarrollo web y automatización en Paraguay.
              </p>
              
              {/* Service Badge */}
              <div className="flex items-center space-x-2 bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-3 rounded-xl text-sm font-semibold mb-8">
                <Shield className="w-5 h-5" />
                <span>Soporte Especializado</span>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {navigation.social.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="w-12 h-12 bg-slate-800 hover:bg-green-500 hover:text-slate-900 text-gray-400 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
                      aria-label={item.name}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-8">Servicios</h3>
              <ul className="space-y-4">
                {navigation.servicios.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium hover:translate-x-1 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-8">Empresa</h3>
              <ul className="space-y-4">
                {navigation.empresa.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium hover:translate-x-1 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-8">Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-medium">
                      Av. Mariscal López 1234<br />
                      Asunción, Paraguay
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <a 
                    href="tel:+595981234567" 
                    className="text-gray-300 hover:text-green-400 transition-colors font-medium"
                  >
                    +595 981 234 567
                  </a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <a 
                    href="mailto:info@flujopy.com" 
                    className="text-gray-300 hover:text-green-400 transition-colors font-medium"
                  >
                    info@flujopy.com
                  </a>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-medium">
                      Lun - Vie: 8:00 - 18:00<br />
                      Sáb: 9:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-8">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-medium">
              © {new Date().getFullYear()} FlujoPy Consultor. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 font-medium">
              Hecho con ❤️ en Paraguay
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}