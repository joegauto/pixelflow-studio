import type { Metadata } from 'next'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ServiceFeatures } from '@/components/sections/ServiceFeatures'
import { ServiceProcess } from '@/components/sections/ServiceProcess'

import { ServiceFAQ } from '@/components/sections/ServiceFAQ'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Automatizaciones - FlujoPy Consultor',
  description: 'Automatiza tus procesos empresariales con Make, n8n, Zapier e integraciones API. Reduce costos y aumenta la eficiencia operativa.',
  keywords: ['automatización', 'Make', 'n8n', 'Zapier', 'API', 'workflows', 'procesos', 'Paraguay'],
  openGraph: {
    title: 'Automatizaciones - FlujoPy Consultor',
    description: 'Automatiza tus procesos empresariales con Make, n8n, Zapier e integraciones API.',
    images: ['/services/automatizaciones-og.jpg'],
  },
}

export default function AutomatizacionesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Automatización de Procesos Empresariales",
    "description": "Automatización de procesos con Make, n8n, Zapier e integraciones API personalizadas",
    "provider": {
      "@type": "Organization",
      "name": "FlujoPy Consultor"
    },
    "areaServed": "Paraguay",
    "offers": {
      "@type": "Offer",
      "price": "800000",
      "priceCurrency": "PYG",
      "description": "Desde Gs. 800.000 - Automatización básica de procesos"
    }
  }

  const heroData = {
    title: "Automatización de Procesos",
    subtitle: "Transforma tu negocio con workflows inteligentes",
    description: "Automatiza tareas repetitivas, integra sistemas y optimiza procesos con las mejores herramientas del mercado. Reduce costos operativos hasta un 70% y aumenta la productividad de tu equipo.",
    image: "/services/automatizaciones-hero.svg",
    benefits: [
      "Reducción de costos operativos hasta 70%",
      "Eliminación de errores humanos",
      "Procesos 24/7 sin intervención",
      "Integración con +1000 aplicaciones"
    ],
    ctaText: "Solicitar Información",
    price: "Desde Gs. 800.000"
  }

  const features = [
    {
      title: "Workflows Automáticos",
      description: "Diseñamos flujos de trabajo que conectan tus aplicaciones y automatizan tareas repetitivas.",
      icon: "workflow" as const,
      benefits: [
        "Procesamiento automático de pedidos",
        "Sincronización de datos entre sistemas",
        "Notificaciones automáticas",
        "Generación de reportes programados"
      ]
    },
    {
      title: "Integraciones API",
      description: "Conectamos cualquier sistema o aplicación a través de APIs robustas y seguras.",
      icon: "api" as const,
      benefits: [
        "Integración con ERP/CRM",
        "Conexión con redes sociales",
        "APIs personalizadas",
        "Webhooks en tiempo real"
      ]
    },
    {
      title: "Herramientas No-Code",
      description: "Utilizamos las mejores plataformas no-code para automatizaciones rápidas y eficientes.",
      icon: "tools" as const,
      benefits: [
        "Make (Integromat)",
        "n8n workflows",
        "Zapier automations",
        "Microsoft Power Automate"
      ]
    },
    {
      title: "Monitoreo y Alertas",
      description: "Supervisión continua de tus automatizaciones con alertas proactivas.",
      icon: "monitor" as const,
      benefits: [
        "Dashboard de monitoreo",
        "Alertas por email/WhatsApp",
        "Logs detallados",
        "Métricas de rendimiento"
      ]
    }
  ]

  const process = [
    {
      step: 1,
      title: "Análisis de Procesos",
      description: "Identificamos procesos repetitivos y oportunidades de automatización en tu negocio.",
      duration: "2-3 días"
    },
    {
      step: 2,
      title: "Diseño de Workflows",
      description: "Creamos diagramas de flujo y definimos la lógica de automatización.",
      duration: "3-5 días"
    },
    {
      step: 3,
      title: "Implementación",
      description: "Configuramos las herramientas y desarrollamos las integraciones necesarias.",
      duration: "1-3 semanas"
    },
    {
      step: 4,
      title: "Testing y Optimización",
      description: "Probamos exhaustivamente y optimizamos el rendimiento de las automatizaciones.",
      duration: "3-5 días"
    },
    {
      step: 5,
      title: "Capacitación y Soporte",
      description: "Entrenamos a tu equipo y proporcionamos documentación completa.",
      duration: "1-2 días"
    }
  ]



  const faqs = [
    {
      question: "¿Qué tipos de procesos se pueden automatizar?",
      answer: "Prácticamente cualquier proceso repetitivo puede automatizarse: gestión de pedidos, facturación, marketing por email, sincronización de inventarios, reportes, atención al cliente, y mucho más. Durante la consulta inicial identificamos las mejores oportunidades en tu negocio."
    },
    {
      question: "¿Cuánto tiempo toma implementar una automatización?",
      answer: "Depende de la complejidad. Automatizaciones simples pueden estar listas en 1-2 semanas, mientras que proyectos complejos con múltiples integraciones pueden tomar 4-8 semanas. Siempre proporcionamos un cronograma detallado antes de comenzar."
    },
    {
      question: "¿Qué herramientas utilizan para automatizar?",
      answer: "Utilizamos las mejores herramientas del mercado como Make (Integromat), n8n, Zapier, Microsoft Power Automate, y también desarrollamos APIs personalizadas cuando es necesario. Elegimos la herramienta más adecuada para cada caso específico."
    },
    {
      question: "¿Puedo modificar las automatizaciones después?",
      answer: "Sí, todas nuestras automatizaciones son escalables y modificables. Proporcionamos documentación completa y capacitación para que puedas hacer ajustes básicos. Para cambios complejos, ofrecemos servicios de mantenimiento y actualización."
    },
    {
      question: "¿Qué pasa si una automatización falla?",
      answer: "Implementamos sistemas de monitoreo y alertas que nos notifican inmediatamente si algo falla. Incluimos mecanismos de respaldo y recuperación automática. Además, nuestro equipo de soporte está disponible para resolver cualquier problema rápidamente."
    },
    {
      question: "¿Necesito conocimientos técnicos para usar las automatizaciones?",
      answer: "No, diseñamos las automatizaciones para que funcionen de manera transparente. Proporcionamos capacitación básica y documentación fácil de entender. La mayoría de nuestros clientes pueden gestionar sus automatizaciones sin conocimientos técnicos avanzados."
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