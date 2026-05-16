import type { Metadata } from 'next'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ServiceFeatures } from '@/components/sections/ServiceFeatures'
import { ServiceProcess } from '@/components/sections/ServiceProcess'
import { ServiceFAQ } from '@/components/sections/ServiceFAQ'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Criptomonedas y Blockchain - FlujoPy Consultor',
  description: 'Implementación de pagos con criptomonedas, desarrollo de smart contracts, wallets corporativas y consultoría blockchain empresarial.',
  keywords: ['criptomonedas', 'blockchain', 'bitcoin', 'ethereum', 'smart contracts', 'DeFi', 'web3', 'Paraguay'],
  openGraph: {
    title: 'Criptomonedas y Blockchain - FlujoPy Consultor',
    description: 'Implementación de pagos cripto, smart contracts y consultoría blockchain.',
    images: ['/services/criptomonedas-og.jpg'],
  },
}

export default function CriptomonedasPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Servicios de Criptomonedas y Blockchain",
    "description": "Implementación de pagos cripto, desarrollo de smart contracts y consultoría blockchain",
    "provider": {
      "@type": "Organization",
      "name": "FlujoPy Consultor"
    },
    "areaServed": "Paraguay",
    "offers": {
      "@type": "Offer",
      "price": "2000000",
      "priceCurrency": "PYG",
      "description": "Desde Gs. 2.000.000 - Integración básica de pagos cripto"
    }
  }

  const heroData = {
    title: "Criptomonedas y Blockchain",
    subtitle: "Integra el futuro financiero en tu negocio",
    description: "Implementamos soluciones blockchain empresariales: pagos con criptomonedas, smart contracts, wallets corporativas y estrategias DeFi. Accede a mercados globales y reduce costos de transacción hasta un 90%.",
    image: "/services/criptomonedas-hero.svg",
    benefits: [
      "Reducción del 90% en costos de transacción",
      "Acceso a mercados globales 24/7",
      "Transacciones instantáneas y seguras",
      "Nuevas oportunidades de ingresos"
    ],
    ctaText: "Integrar Cripto",
    price: "Desde Gs. 3.000.000"
  }

  const features = [
    {
      title: "Pagos con Criptomonedas",
      description: "Integración completa de pagos cripto en tu negocio: Bitcoin, Ethereum, stablecoins y más.",
      icon: "workflow",
      benefits: [
        "Múltiples criptomonedas soportadas",
        "Conversión automática a moneda local",
        "Integración con e-commerce existente",
        "Reportes fiscales automatizados"
      ]
    },
    {
      title: "Smart Contracts",
      description: "Desarrollo de contratos inteligentes personalizados para automatizar procesos empresariales.",
      icon: "api",
      benefits: [
        "Contratos autoejecutables",
        "Eliminación de intermediarios",
        "Transparencia total en transacciones",
        "Reducción de costos operativos"
      ]
    },
    {
      title: "Wallets Corporativas",
      description: "Soluciones de custodia segura para empresas con múltiples niveles de autorización.",
      icon: "tools",
      benefits: [
        "Custodia multi-firma (multisig)",
        "Controles de acceso granulares",
        "Auditoría completa de transacciones",
        "Integración con sistemas contables"
      ]
    },
    {
      title: "Consultoría Blockchain",
      description: "Asesoramiento estratégico en adopción de tecnologías blockchain y criptomonedas.",
      icon: "monitor",
      benefits: [
        "Análisis de casos de uso específicos",
        "Estrategias de tokenización",
        "Cumplimiento regulatorio",
        "Formación especializada del equipo"
      ]
    }
  ]

  const process = [
    {
      step: 1,
      title: "Análisis de Viabilidad",
      description: "Evaluamos tu negocio para identificar las mejores oportunidades de implementación blockchain.",
      duration: "3-5 días"
    },
    {
      step: 2,
      title: "Diseño de Arquitectura",
      description: "Diseñamos la arquitectura técnica y definimos las criptomonedas y protocolos a utilizar.",
      duration: "1 semana"
    },
    {
      step: 3,
      title: "Desarrollo e Integración",
      description: "Desarrollamos smart contracts, integramos wallets y configuramos sistemas de pago.",
      duration: "3-6 semanas"
    },
    {
      step: 4,
      title: "Testing en Testnet",
      description: "Realizamos pruebas exhaustivas en redes de prueba antes del lanzamiento en mainnet.",
      duration: "1 semana"
    },
    {
      step: 5,
      title: "Lanzamiento y Monitoreo",
      description: "Desplegamos en producción con monitoreo continuo y soporte especializado.",
      duration: "3-5 días"
    }
  ]

  const faqs = [
    {
      question: "¿Es legal aceptar criptomonedas en Paraguay?",
      answer: "Sí, Paraguay tiene un marco regulatorio favorable para criptomonedas. La Ley 6822/21 regula los activos virtuales y permite su uso comercial. Ayudamos con el cumplimiento de todas las obligaciones fiscales y regulatorias correspondientes."
    },
    {
      question: "¿Qué criptomonedas puedo aceptar en mi negocio?",
      answer: "Podemos integrar las principales criptomonedas: Bitcoin (BTC), Ethereum (ETH), stablecoins como USDT y USDC, Litecoin (LTC), y muchas otras. También podemos crear tokens personalizados para tu empresa si es necesario."
    },
    {
      question: "¿Cómo se manejan las fluctuaciones de precio?",
      answer: "Ofrecemos conversión automática instantánea a moneda estable (USD o PYG) para eliminar el riesgo de volatilidad. También podemos configurar estrategias mixtas donde mantienes un porcentaje en cripto y conviertes el resto."
    },
    {
      question: "¿Qué son los smart contracts y cómo pueden ayudar a mi negocio?",
      answer: "Los smart contracts son programas que se ejecutan automáticamente cuando se cumplen condiciones predefinidas. Pueden automatizar pagos, contratos de servicios, distribución de royalties, programas de lealtad, y muchos otros procesos empresariales, reduciendo costos y eliminando intermediarios."
    },
    {
      question: "¿Necesito conocimientos técnicos para usar estas soluciones?",
      answer: "No, diseñamos interfaces intuitivas y proporcionamos capacitación completa. La mayoría de nuestros clientes pueden gestionar sus operaciones cripto sin conocimientos técnicos avanzados. Incluimos documentación detallada y soporte continuo."
    },
    {
      question: "¿Cómo garantizan la seguridad de los fondos?",
      answer: "Implementamos las mejores prácticas de seguridad: wallets multisig, almacenamiento en frío para grandes cantidades, auditorías de smart contracts, cifrado de extremo a extremo, y seguros para activos digitales. Nunca tenemos acceso directo a tus fondos."
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