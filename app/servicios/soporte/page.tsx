import type { Metadata } from 'next'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ServiceFeatures } from '@/components/sections/ServiceFeatures'
import { ServiceProcess } from '@/components/sections/ServiceProcess'
import { ServiceFAQ } from '@/components/sections/ServiceFAQ'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Soporte Técnico - FlujoPy Consultor',
  description: 'Mesa de ayuda técnica especializada con respuesta rápida. Monitoreo proactivo, mantenimiento preventivo y soporte profesional.',
  keywords: ['soporte técnico', 'mesa de ayuda', '24/7', 'SLA', 'monitoreo', 'mantenimiento', 'helpdesk', 'Paraguay'],
  openGraph: {
    title: 'Soporte Técnico 24/7 - FlujoPy Consultor',
    description: 'Mesa de ayuda técnica 24/7/365 con SLA garantizado y monitoreo proactivo.',
    images: ['/services/soporte-og.jpg'],
  },
}

export default function SoportePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Soporte Técnico Especializado",
    "description": "Mesa de ayuda técnica con respuesta rápida y monitoreo proactivo",
    "provider": {
      "@type": "Organization",
      "name": "FlujoPy Consultor"
    },
    "areaServed": "Paraguay",
    "offers": {
      "@type": "Offer",
      "price": "500000",
      "priceCurrency": "PYG",
      "description": "Desde Gs. 500.000/mes - Soporte básico"
    }
  }

  const heroData = {
    title: "Soporte Técnico Especializado",
    subtitle: "Mantenemos tu tecnología funcionando",
    description: "Mesa de ayuda técnica especializada con respuesta rápida y eficiente. Monitoreo proactivo, mantenimiento preventivo y soporte profesional para mantener tu negocio operativo.",
    image: "/services/soporte-hero.svg",
    benefits: [
      "Respuesta rápida y eficiente",
      "Técnicos especializados certificados",
      "Monitoreo proactivo de sistemas",
      "Mantenimiento preventivo regular"
    ],
    ctaText: "Contratar Soporte",
    price: "Desde Gs. 500.000"
  }

  const features = [
    {
      title: "Mesa de Ayuda Especializada",
      description: "Soporte técnico profesional a través de múltiples canales: teléfono, email, chat y WhatsApp.",
      icon: "workflow" as const,
      benefits: [
        "Respuesta rápida en horario laboral",
        "Múltiples canales de contacto",
        "Técnicos especializados certificados",
        "Escalación por prioridad"
      ]
    },
    {
      title: "Monitoreo Proactivo",
      description: "Supervisión continua de sistemas, servidores y aplicaciones con alertas automáticas.",
      icon: "api" as const,
      benefits: [
        "Monitoreo de servidores y servicios",
        "Alertas automáticas de incidentes",
        "Detección temprana de problemas",
        "Reportes de rendimiento detallados"
      ]
    },
    {
      title: "Mantenimiento Preventivo",
      description: "Mantenimiento programado para prevenir problemas antes de que afecten tu operación.",
      icon: "tools" as const,
      benefits: [
        "Actualizaciones de seguridad automáticas",
        "Optimización de rendimiento",
        "Backup automático verificado",
        "Limpieza y optimización de sistemas"
      ]
    },
    {
      title: "Tiempos de Respuesta",
      description: "Comprometidos con tiempos de respuesta rápidos según la prioridad del incidente.",
      icon: "monitor" as const,
      benefits: [
        "Clasificación por prioridad",
        "Tiempos de respuesta definidos",
        "Seguimiento de incidentes",
        "Reportes de rendimiento"
      ]
    }
  ]

  const process = [
    {
      step: 1,
      title: "Configuración Inicial",
      description: "Configuramos el monitoreo de tus sistemas y establecemos los canales de comunicación.",
      duration: "1-2 días"
    },
    {
      step: 2,
      title: "Definición de SLA",
      description: "Establecemos acuerdos de nivel de servicio personalizados según tus necesidades críticas.",
      duration: "1 día"
    },
    {
      step: 3,
      title: "Capacitación del Equipo",
      description: "Entrenamos a tu equipo en los procedimientos de soporte y escalación.",
      duration: "2-3 días"
    },
    {
      step: 4,
      title: "Inicio del Monitoreo",
      description: "Activamos el monitoreo 24/7 y comenzamos con el soporte técnico continuo.",
      duration: "Inmediato"
    },
    {
      step: 5,
      title: "Mejora Continua",
      description: "Revisamos y optimizamos continuamente los procesos basados en métricas y feedback.",
      duration: "Permanente"
    }
  ]

  const faqs = [
    {
      question: "¿Qué horarios de soporte manejan?",
      answer: "Ofrecemos diferentes horarios según el plan: Básico (8:00-18:00 L-V), Pro (7:00-21:00 L-S), Enterprise (horario extendido con respuesta prioritaria). Nuestro equipo técnico está disponible por teléfono, email, chat y WhatsApp."
    },
    {
      question: "¿Cuáles son los tiempos de respuesta?",
      answer: "Los tiempos varían según el plan: Básico (4 horas), Pro (2 horas), Enterprise (1 hora). Para incidentes críticos que afecten la operación, priorizamos la respuesta según la urgencia y el plan contratado."
    },
    {
      question: "¿Qué sistemas pueden monitorear?",
      answer: "Monitoreamos servidores, sitios web, aplicaciones, bases de datos, servicios de email, sistemas de backup, redes, y cualquier servicio crítico para tu negocio. Configuramos alertas personalizadas según tus necesidades específicas."
    },
    {
      question: "¿El soporte es en español?",
      answer: "Sí, todo nuestro equipo técnico habla español nativo y está familiarizado con el contexto empresarial paraguayo. No tendrás barreras de idioma o culturales al contactar nuestro soporte."
    },
    {
      question: "¿Qué pasa si no cumplen con los tiempos de respuesta?",
      answer: "Nos comprometemos a cumplir con los tiempos de respuesta establecidos. En caso de no cumplir por causas internas, evaluamos cada caso y aplicamos las compensaciones correspondientes según el plan contratado."
    },
    {
      question: "¿Pueden dar soporte a sistemas que no desarrollaron ustedes?",
      answer: "Absolutamente. Damos soporte a cualquier sistema o aplicación que uses en tu negocio, independientemente de quién lo haya desarrollado. Nuestro equipo tiene experiencia con una amplia gama de tecnologías y plataformas."
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