import { VideoHero } from '@/components/sections/VideoHero'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { CaseStudies } from '@/components/sections/CaseStudies'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { PricingSection } from '@/components/sections/PricingSection'
import { TestimonialsSlider } from '@/components/sections/TestimonialsSlider'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FlujoPy Consultor",
    "description": "Consultora de servicios informáticos especializada en IA, automatización y ciberseguridad en Paraguay",
    "url": "https://flujopy.com",
    "logo": "https://flujopy.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+595-981-234567",
      "contactType": "customer service",
      "availableLanguage": "Spanish"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PY",
      "addressLocality": "Asunción"
    },
    "sameAs": [
      "https://www.linkedin.com/company/flujopy",
      "https://www.facebook.com/flujopy",
      "https://twitter.com/flujopy"
    ]
  }

  return (
    <>
      <JsonLd data={organizationSchema} />
      <VideoHero />
      <ServicesGrid />
      <WhyChooseUs />
      <CaseStudies />
      <ProcessTimeline />
      <PricingSection />
      <TestimonialsSlider />
      <FAQSection />
      <CTASection />
    </>
  )
}