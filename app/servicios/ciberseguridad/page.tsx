import type { Metadata } from 'next'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ServiceFeatures } from '@/components/sections/ServiceFeatures'
import { ServiceProcess } from '@/components/sections/ServiceProcess'
import { ServiceFAQ } from '@/components/sections/ServiceFAQ'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Ciberseguridad - FlujoPy Consultor',
  description: 'Servicios de ciberseguridad empresarial: auditorías de seguridad, hardening de sistemas, monitoreo 24/7 y formación especializada.',
  keywords: ['ciberseguridad', 'seguridad informática', 'auditoría', 'hardening', 'pentesting', 'firewall', 'Paraguay'],
  openGraph: {
    title: 'Ciberseguridad - FlujoPy Consultor',
    description: 'Servicios de ciberseguridad empresarial: auditorías, hardening y monitoreo 24/7.',
    images: ['/services/ciberseguridad-og.jpg'],
  },
}

export default function CiberseguridadPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Servicios de Ciberseguridad Empresarial",
    "description": "Auditorías de seguridad, hardening de sistemas y formación en ciberseguridad",
    "provider": {
      "@type": "Organization",
      "name": "FlujoPy Consultor"
    },
    "areaServed": "Paraguay",
    "offers": {
      "@type": "Offer",
      "price": "1200000",
      "priceCurrency": "PYG",
      "description": "Desde Gs. 1.200.000 - Auditoría básica de seguridad"
    }
  }

  const heroData = {
    title: "Ciberseguridad Empresarial",
    subtitle: "Protege tu negocio de amenazas digitales",
    description: "Implementamos estrategias de ciberseguridad robustas para proteger tu empresa: auditorías completas, hardening de sistemas, monitoreo 24/7 y formación especializada para tu equipo.",
    image: "/services/ciberseguridad-hero.svg",
    benefits: [
      "99.9% de protección contra amenazas conocidas",
      "Cumplimiento de normativas internacionales",
      "Monitoreo proactivo 24/7/365",
      "Reducción del 95% en incidentes de seguridad"
    ],
    ctaText: "Evaluar Mi Seguridad",
    price: "Desde Gs. 1.800.000"
  }

  const features = [
    {
      title: "Auditorías de Seguridad",
      description: "Evaluaciones completas de vulnerabilidades en sistemas, redes y aplicaciones web.",
      icon: "workflow",
      benefits: [
        "Pentesting de aplicaciones web",
        "Análisis de vulnerabilidades de red",
        "Auditoría de configuraciones",
        "Reportes ejecutivos detallados"
      ]
    },
    {
      title: "Hardening de Sistemas",
      description: "Fortalecimiento de servidores, bases de datos y sistemas operativos contra ataques.",
      icon: "api",
      benefits: [
        "Configuración segura de servidores",
        "Implementación de firewalls avanzados",
        "Políticas de acceso granulares",
        "Cifrado de datos en reposo y tránsito"
      ]
    },
    {
      title: "Monitoreo y Respuesta",
      description: "Supervisión continua de amenazas con respuesta automática a incidentes de seguridad.",
      icon: "tools",
      benefits: [
        "SOC (Security Operations Center) 24/7",
        "Detección de amenazas en tiempo real",
        "Respuesta automática a incidentes",
        "Análisis forense post-incidente"
      ]
    },
    {
      title: "Formación y Concienciación",
      description: "Capacitación especializada para tu equipo en mejores prácticas de ciberseguridad.",
      icon: "monitor",
      benefits: [
        "Talleres de concienciación",
        "Simulacros de phishing",
        "Políticas de seguridad personalizadas",
        "Certificaciones en ciberseguridad"
      ]
    }
  ]

  const process = [
    {
      step: 1,
      title: "Evaluación Inicial",
      description: "Realizamos un diagnóstico completo de la postura de seguridad actual de tu organización.",
      duration: "3-5 días"
    },
    {
      step: 2,
      title: "Análisis de Riesgos",
      description: "Identificamos y clasificamos amenazas, vulnerabilidades y riesgos específicos de tu negocio.",
      duration: "1 semana"
    },
    {
      step: 3,
      title: "Implementación de Controles",
      description: "Desplegamos medidas de seguridad técnicas, administrativas y físicas según prioridades.",
      duration: "2-4 semanas"
    },
    {
      step: 4,
      title: "Testing y Validación",
      description: "Realizamos pruebas de penetración y validamos la efectividad de los controles implementados.",
      duration: "1 semana"
    },
    {
      step: 5,
      title: "Monitoreo Continuo",
      description: "Establecemos monitoreo 24/7 y procesos de mejora continua de la seguridad.",
      duration: "Permanente"
    }
  ]

  const faqs = [
    {
      question: "¿Qué incluye una auditoría de ciberseguridad?",
      answer: "Una auditoría completa incluye: escaneo de vulnerabilidades en sistemas y aplicaciones, análisis de configuraciones de seguridad, revisión de políticas y procedimientos, pentesting ético, evaluación de controles de acceso, y un reporte detallado con plan de remediación priorizado."
    },
    {
      question: "¿Cuánto tiempo toma implementar las medidas de seguridad?",
      answer: "Depende del alcance y complejidad. Medidas básicas como firewalls y antivirus pueden implementarse en 1-2 semanas. Un programa completo de ciberseguridad con hardening, políticas y formación puede tomar 4-8 semanas. Siempre priorizamos los riesgos críticos primero."
    },
    {
      question: "¿Ofrecen servicios de respuesta a incidentes?",
      answer: "Sí, ofrecemos respuesta a incidentes 24/7 para clientes con planes SOC. Incluye contención inmediata, análisis forense, erradicación de amenazas, recuperación de sistemas y documentación completa del incidente para prevenir futuras ocurrencias."
    },
    {
      question: "¿Pueden ayudar con el cumplimiento de normativas?",
      answer: "Absolutamente. Ayudamos con el cumplimiento de ISO 27001, NIST Cybersecurity Framework, GDPR, y otras normativas relevantes. Incluye gap analysis, implementación de controles, documentación de políticas y preparación para auditorías externas."
    },
    {
      question: "¿Qué tipo de formación ofrecen al personal?",
      answer: "Ofrecemos formación en múltiples niveles: concienciación general en ciberseguridad, identificación de phishing y malware, manejo seguro de datos, políticas de contraseñas, y formación técnica especializada para equipos de IT. Incluimos simulacros prácticos y certificaciones."
    },
    {
      question: "¿Cómo manejan la confidencialidad durante las auditorías?",
      answer: "Mantenemos estrictos acuerdos de confidencialidad (NDA) y seguimos protocolos de seguridad rigurosos. Todo nuestro equipo está certificado y tiene experiencia en manejo de información sensible. Los reportes se entregan de forma segura y se almacenan con cifrado."
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