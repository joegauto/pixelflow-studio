import type { Metadata } from 'next'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ServiceFeatures } from '@/components/sections/ServiceFeatures'
import { ServiceProcess } from '@/components/sections/ServiceProcess'
import { ServiceFAQ } from '@/components/sections/ServiceFAQ'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Inteligencia Artificial - FlujoPy Consultor',
  description: 'Implementación de IA empresarial: chatbots inteligentes, análisis predictivo, automatización con machine learning y asistentes virtuales.',
  keywords: ['inteligencia artificial', 'IA', 'chatbots', 'machine learning', 'análisis predictivo', 'GPT', 'Paraguay'],
  openGraph: {
    title: 'Inteligencia Artificial - FlujoPy Consultor',
    description: 'Implementación de IA empresarial: chatbots inteligentes, análisis predictivo y automatización.',
    images: ['/services/inteligencia-artificial-og.jpg'],
  },
}

export default function InteligenciaArtificialPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Implementación de Inteligencia Artificial",
    "description": "Chatbots inteligentes, análisis predictivo y automatización con machine learning",
    "provider": {
      "@type": "Organization",
      "name": "FlujoPy Consultor"
    },
    "areaServed": "Paraguay",
    "offers": {
      "@type": "Offer",
      "price": "2500000",
      "priceCurrency": "PYG",
      "description": "Desde Gs. 2.500.000 - Chatbot con IA básico"
    }
  }

  const heroData = {
    title: "Inteligencia Artificial Empresarial",
    subtitle: "Automatiza decisiones y mejora la experiencia del cliente",
    description: "Implementamos soluciones de IA que transforman tu negocio: chatbots conversacionales, análisis predictivo, automatización inteligente y asistentes virtuales que trabajan 24/7 para tu empresa.",
    image: "/services/inteligencia-artificial-hero.svg",
    benefits: [
      "Reducción del 80% en consultas repetitivas",
      "Análisis predictivo para mejores decisiones",
      "Atención al cliente 24/7 automatizada",
      "Mejora significativa en eficiencia operativa"
    ],
    ctaText: "Implementar IA",
    price: "Desde Gs. 2.500.000"
  }

  const features = [
    {
      title: "Chatbots Conversacionales",
      description: "Asistentes virtuales que entienden lenguaje natural y mantienen conversaciones fluidas con tus clientes.",
      icon: "workflow",
      benefits: [
        "Procesamiento de lenguaje natural avanzado",
        "Integración con WhatsApp, web y redes sociales",
        "Aprendizaje continuo de conversaciones",
        "Escalación inteligente a humanos"
      ]
    },
    {
      title: "Análisis Predictivo",
      description: "Modelos de machine learning que analizan datos históricos para predecir tendencias y comportamientos.",
      icon: "api",
      benefits: [
        "Predicción de demanda y ventas",
        "Análisis de comportamiento de clientes",
        "Detección de patrones y anomalías",
        "Reportes automáticos con insights"
      ]
    },
    {
      title: "Automatización Inteligente",
      description: "Sistemas que toman decisiones automáticas basadas en reglas complejas y aprendizaje automático.",
      icon: "tools",
      benefits: [
        "Clasificación automática de documentos",
        "Procesamiento inteligente de emails",
        "Recomendaciones personalizadas",
        "Optimización automática de procesos"
      ]
    },
    {
      title: "Integración con APIs de IA",
      description: "Conectamos tu negocio con las mejores APIs de IA: OpenAI GPT, Google AI, Microsoft Cognitive Services.",
      icon: "monitor",
      benefits: [
        "OpenAI GPT-4 para conversaciones",
        "Google Vision para análisis de imágenes",
        "Azure Cognitive Services",
        "APIs personalizadas según necesidad"
      ]
    }
  ]

  const process = [
    {
      step: 1,
      title: "Análisis de Casos de Uso",
      description: "Identificamos las mejores oportunidades de IA en tu negocio y definimos objetivos medibles.",
      duration: "3-5 días"
    },
    {
      step: 2,
      title: "Diseño de la Solución",
      description: "Diseñamos la arquitectura de IA, seleccionamos modelos y definimos flujos conversacionales.",
      duration: "1 semana"
    },
    {
      step: 3,
      title: "Desarrollo y Entrenamiento",
      description: "Desarrollamos la solución, entrenamos modelos con tus datos y configuramos integraciones.",
      duration: "2-4 semanas"
    },
    {
      step: 4,
      title: "Testing y Optimización",
      description: "Probamos la IA con casos reales, optimizamos respuestas y ajustamos parámetros.",
      duration: "1 semana"
    },
    {
      step: 5,
      title: "Despliegue y Monitoreo",
      description: "Lanzamos la solución en producción con monitoreo continuo y mejora automática.",
      duration: "3-5 días"
    }
  ]

  const faqs = [
    {
      question: "¿Qué tan inteligente puede ser el chatbot?",
      answer: "Nuestros chatbots utilizan modelos de lenguaje avanzados como GPT-4 que pueden mantener conversaciones naturales, entender contexto, recordar información previa y manejar consultas complejas. Pueden resolver hasta el 80-90% de consultas sin intervención humana."
    },
    {
      question: "¿Necesito tener muchos datos para implementar IA?",
      answer: "No necesariamente. Para chatbots básicos, podemos empezar con información de tu sitio web y FAQ. Para análisis predictivo, idealmente necesitamos datos históricos de 6-12 meses, pero podemos trabajar con menos datos usando técnicas de transfer learning."
    },
    {
      question: "¿La IA puede integrarse con mis sistemas actuales?",
      answer: "Sí, desarrollamos integraciones personalizadas con CRM, ERP, bases de datos, APIs existentes y cualquier sistema que uses. La IA puede consultar información en tiempo real y actualizar registros automáticamente."
    },
    {
      question: "¿Cómo se entrena la IA con información específica de mi negocio?",
      answer: "Utilizamos técnicas de fine-tuning y RAG (Retrieval Augmented Generation) para entrenar la IA con tu información específica: productos, servicios, políticas, FAQ, etc. La IA aprende continuamente de cada interacción."
    },
    {
      question: "¿Qué idiomas puede manejar la IA?",
      answer: "Nuestras soluciones manejan español nativo de Paraguay (incluyendo expresiones locales), inglés, portugués y otros idiomas según necesidad. Podemos configurar detección automática de idioma y respuestas multiidioma."
    },
    {
      question: "¿Cómo se mide el éxito de la implementación de IA?",
      answer: "Medimos KPIs específicos como: reducción de consultas humanas, tiempo de respuesta, satisfacción del cliente, tasa de resolución automática, ahorro en costos operativos y aumento en conversiones. Proporcionamos reportes detallados mensuales."
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