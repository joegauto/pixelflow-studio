import type { Metadata } from 'next'
import { ServicesHero } from '@/components/sections/ServicesHero'
import { ServicesDetailed } from '@/components/sections/ServicesDetailed'
import { ServicesBenefits } from '@/components/sections/ServicesBenefits'
// import { ServicesProcess } from '@/components/sections/ServicesProcess'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Servicios - FlujoPy Consultor',
  description: 'Descubre todos nuestros servicios: Desarrollo Web, IA, Automatizaciones, Ciberseguridad, Criptomonedas y Soporte 24/7 en Paraguay.',
  keywords: ['servicios informáticos', 'desarrollo web', 'inteligencia artificial', 'automatización', 'ciberseguridad', 'Paraguay'],
  openGraph: {
    title: 'Servicios - FlujoPy Consultor',
    description: 'Servicios informáticos completos: Desarrollo Web, IA, Automatizaciones, Ciberseguridad y más.',
    images: ['/services-og.jpg'],
  },
}

export default function ServicesPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Servicios de FlujoPy Consultor",
    "description": "Lista completa de servicios informáticos ofrecidos por FlujoPy Consultor",
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Desarrollo Web y Tiendas Online",
        "description": "Desarrollo de sitios web modernos y tiendas online optimizadas",
        "provider": { "@type": "Organization", "name": "FlujoPy Consultor" }
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "Implementación de IA",
        "description": "Chatbots inteligentes, asistentes virtuales y análisis de datos",
        "provider": { "@type": "Organization", "name": "FlujoPy Consultor" }
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "Automatizaciones",
        "description": "Automatización de procesos con Make, n8n, Zapier e integraciones API",
        "provider": { "@type": "Organization", "name": "FlujoPy Consultor" }
      },
      {
        "@type": "Service",
        "position": 4,
        "name": "Ciberseguridad",
        "description": "Auditorías de seguridad, hardening y formación en ciberseguridad",
        "provider": { "@type": "Organization", "name": "FlujoPy Consultor" }
      },
      {
        "@type": "Service",
        "position": 5,
        "name": "Criptomonedas",
        "description": "Implementación de pagos cripto y formación blockchain",
        "provider": { "@type": "Organization", "name": "FlujoPy Consultor" }
      },
      {
        "@type": "Service",
        "position": 6,
        "name": "Soporte 24/7/365",
        "description": "Mesa de ayuda técnica con SLA garantizado",
        "provider": { "@type": "Organization", "name": "FlujoPy Consultor" }
      }
    ]
  }

  return (
    <>
      <JsonLd data={servicesSchema} />
      <div className="pt-20">
        <ServicesHero />
        <ServicesDetailed />
        <ServicesBenefits />
        {/* <ServicesProcess /> */}
        <CTASection />
      </div>
    </>
  )
}