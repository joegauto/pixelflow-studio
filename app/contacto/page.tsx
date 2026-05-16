import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/ContactForm'
import { ContactInfo } from '@/components/sections/ContactInfo'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Contacto - FlujoPy Consultor',
  description: 'Contáctanos para una consulta gratuita. Transformamos tu negocio con IA, automatización y ciberseguridad en Paraguay.',
  openGraph: {
    title: 'Contacto - FlujoPy Consultor',
    description: 'Contáctanos para una consulta gratuita. Transformamos tu negocio con IA, automatización y ciberseguridad.',
  },
}

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacto - FlujoPy Consultor",
    "description": "Página de contacto de FlujoPy Consultor",
    "url": "https://flujopy.com/contacto",
    "mainEntity": {
      "@type": "Organization",
      "name": "FlujoPy Consultor",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+595-981-234567",
        "contactType": "customer service",
        "availableLanguage": "Spanish",
        "areaServed": "PY"
      }
    }
  }

  return (
    <>
      <JsonLd data={contactSchema} />
      <div className="pt-20">
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  )
}