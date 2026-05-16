import type { Metadata } from 'next'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ServiceFeatures } from '@/components/sections/ServiceFeatures'
import { ServiceProcess } from '@/components/sections/ServiceProcess'

import { ServiceFAQ } from '@/components/sections/ServiceFAQ'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Desarrollo Web - FlujoPy Consultor',
  description: 'Desarrollo de páginas web modernas y tiendas online optimizadas para SEO y conversión. Diseño responsive y tecnología de vanguardia.',
  keywords: ['desarrollo web', 'páginas web', 'tiendas online', 'ecommerce', 'SEO', 'responsive', 'Paraguay'],
  openGraph: {
    title: 'Desarrollo Web - FlujoPy Consultor',
    description: 'Desarrollo de páginas web modernas y tiendas online optimizadas para SEO y conversión.',
    images: ['/services/desarrollo-web-og.jpg'],
  },
}

export default function DesarrolloWebPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Desarrollo Web y Tiendas Online",
    "description": "Desarrollo de sitios web modernos, responsivos y tiendas online optimizadas para conversión",
    "provider": {
      "@type": "Organization",
      "name": "FlujoPy Consultor"
    },
    "areaServed": "Paraguay",
    "offers": {
      "@type": "Offer",
      "price": "1500000",
      "priceCurrency": "PYG",
      "description": "Desde Gs. 1.500.000 - Página web profesional"
    }
  }

  const heroData = {
    title: "Desarrollo Web Profesional",
    subtitle: "Sitios web que convierten visitantes en clientes",
    description: "Creamos páginas web modernas, rápidas y optimizadas para SEO que impulsan tu negocio. Desde sitios corporativos hasta tiendas online completas con sistemas de pago integrados.",
    image: "/services/desarrollo-web-hero.svg",
    benefits: [
      "Diseño responsive para todos los dispositivos",
      "Optimización SEO desde el primer día",
      "Velocidad de carga superior a 90/100",
      "Integración con sistemas de pago seguros"
    ],
    ctaText: "Crear Mi Sitio Web",
    price: "Desde Gs. 1.200.000"

  }

  const features = [
    {
      title: "Diseño Responsive",
      description: "Sitios web que se adaptan perfectamente a cualquier dispositivo: móvil, tablet o desktop.",
      icon: "workflow",
      benefits: [
        "Diseño mobile-first optimizado",
        "Experiencia de usuario consistente",
        "Compatibilidad con todos los navegadores",
        "Velocidad de carga optimizada"
      ]
    },
    {
      title: "SEO Optimizado",
      description: "Implementamos las mejores prácticas de SEO para que tu sitio aparezca en los primeros resultados.",
      icon: "api",
      benefits: [
        "Optimización on-page completa",
        "Estructura de URLs amigables",
        "Meta tags y schema markup",
        "Sitemap XML automático"
      ]
    },
    {
      title: "Tiendas Online",
      description: "E-commerce completos con gestión de productos, inventario y múltiples métodos de pago.",
      icon: "tools",
      benefits: [
        "Catálogo de productos ilimitado",
        "Carrito de compras avanzado",
        "Múltiples métodos de pago",
        "Panel de administración intuitivo"
      ]
    },
    {
      title: "Tecnología Moderna",
      description: "Utilizamos las últimas tecnologías web para garantizar rendimiento y seguridad.",
      icon: "monitor",
      benefits: [
        "Next.js y React para máximo rendimiento",
        "Certificados SSL incluidos",
        "CDN global para velocidad",
        "Backup automático diario"
      ]
    }
  ]

  const process = [
    {
      step: 1,
      title: "Análisis y Planificación",
      description: "Analizamos tu negocio, competencia y definimos la estrategia digital más efectiva.",
      duration: "2-3 días"
    },
    {
      step: 2,
      title: "Diseño UI/UX",
      description: "Creamos wireframes y diseños que priorizan la experiencia del usuario y la conversión.",
      duration: "5-7 días"
    },
    {
      step: 3,
      title: "Desarrollo Frontend",
      description: "Desarrollamos la interfaz con las mejores tecnologías, responsive y optimizada.",
      duration: "1-2 semanas"
    },
    {
      step: 4,
      title: "Backend e Integraciones",
      description: "Implementamos la lógica del servidor, base de datos y integraciones necesarias.",
      duration: "1-2 semanas"
    },
    {
      step: 5,
      title: "Testing y Lanzamiento",
      description: "Realizamos pruebas exhaustivas y lanzamos tu sitio con capacitación incluida.",
      duration: "3-5 días"
    }
  ]



  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar un sitio web?",
      answer: "El tiempo varía según la complejidad. Un sitio básico toma 2-3 semanas, mientras que una tienda online completa puede tomar 4-6 semanas. Siempre proporcionamos un cronograma detallado antes de comenzar el proyecto."
    },
    {
      question: "¿El sitio web será responsive (adaptable a móviles)?",
      answer: "Sí, todos nuestros sitios web son completamente responsive y se adaptan perfectamente a cualquier dispositivo: móviles, tablets y computadoras. Utilizamos un enfoque mobile-first para garantizar la mejor experiencia en todos los dispositivos."
    },
    {
      question: "¿Incluyen optimización para motores de búsqueda (SEO)?",
      answer: "Absolutamente. Todos nuestros sitios incluyen SEO básico: optimización de velocidad, meta tags, estructura de URLs amigables, sitemap XML y configuración de Google Analytics. Para SEO avanzado, ofrecemos servicios adicionales especializados."
    },
    {
      question: "¿Puedo actualizar el contenido yo mismo?",
      answer: "Sí, desarrollamos sitios con sistemas de gestión de contenido (CMS) fáciles de usar. Proporcionamos capacitación completa para que puedas actualizar textos, imágenes y productos sin conocimientos técnicos."
    },
    {
      question: "¿Qué incluye el hosting?",
      answer: "El hosting incluye: servidor optimizado para WordPress/Next.js, certificado SSL, backup diario automático, CDN global, soporte técnico básico y alta disponibilidad durante el primer año."
    },
    {
      question: "¿Pueden integrar sistemas de pago en mi tienda online?",
      answer: "Sí, integramos múltiples métodos de pago: tarjetas de crédito/débito, transferencias bancarias, Tigo Money, Personal Pay, y otros sistemas populares en Paraguay. Todas las transacciones son seguras y encriptadas."
    }
  ]

  return (
    <>
      <JsonLd data={serviceSchema} />
      <div className="pt-20">
        <ServiceHero data={heroData} />
        <ServiceFeatures features={features} />
        <ServiceProcess steps={process} />

        <ServiceFAQ faqs={faqs} />
        <CTASection />
      </div>
    </>
  )
}