import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

import { ChatBot } from '@/components/ui/ChatBot'
import { CookieBanner } from '@/components/ui/CookieBanner'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: 'FlujoPy Consultor - Servicios Informáticos en Paraguay',
    template: '%s | FlujoPy Consultor'
  },
  description: 'Impulsamos tu negocio con IA, automatización y ciberseguridad. Desarrollo web, chatbots, automatizaciones y soporte 24/7 en Paraguay.',
  keywords: ['desarrollo web', 'inteligencia artificial', 'automatización', 'ciberseguridad', 'Paraguay', 'consultoría IT'],
  authors: [{ name: 'FlujoPy Consultor' }],
  creator: 'FlujoPy Consultor',
  publisher: 'FlujoPy Consultor',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://flujopy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_PY',
    url: 'https://flujopy.com',
    title: 'FlujoPy Consultor - Servicios Informáticos en Paraguay',
    description: 'Impulsamos tu negocio con IA, automatización y ciberseguridad. Desarrollo web, chatbots, automatizaciones y soporte 24/7 en Paraguay.',
    siteName: 'FlujoPy Consultor',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FlujoPy Consultor - Servicios Informáticos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlujoPy Consultor - Servicios Informáticos en Paraguay',
    description: 'Impulsamos tu negocio con IA, automatización y ciberseguridad.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
      </head>
      <body className="antialiased bg-slate-900">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          
          <ChatBot />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  )
}