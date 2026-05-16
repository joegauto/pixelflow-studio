import { Metadata } from 'next'
import { VideoGeneratorHero } from '@/components/sections/VideoGeneratorHero'
import { VideoGeneratorForm } from '@/components/sections/VideoGeneratorForm'
import { VideoGallery } from '@/components/sections/VideoGallery'
import { VideoFeatures } from '@/components/sections/VideoFeatures'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Generador de Videos con IA | FlujoPy Consultor',
  description: 'Crea videos profesionales con inteligencia artificial. Genera contenido audiovisual de alta calidad en minutos.',
  keywords: 'generador videos IA, inteligencia artificial, videos automáticos, contenido audiovisual, Paraguay',
  openGraph: {
    title: 'Generador de Videos con IA | FlujoPy Consultor',
    description: 'Crea videos profesionales con inteligencia artificial',
    type: 'website',
  }
}

export default function GeneradorVideosPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Generador de Videos con IA",
    "description": "Herramienta de inteligencia artificial para crear videos profesionales automáticamente",
    "url": "https://flujopy.com/generador-videos",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "Generador de Videos IA",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Web Browser"
    }
  }

  return (
    <>
      <JsonLd data={pageSchema} />
      <VideoGeneratorHero />
      <VideoGeneratorForm />
      <VideoFeatures />
      <VideoGallery />
    </>
  )
}