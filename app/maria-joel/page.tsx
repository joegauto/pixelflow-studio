import { Metadata } from 'next';
import HeroSection from '@/components/maria-joel/HeroSection';
import AboutSection from '@/components/maria-joel/AboutSection';
import ServicesSection from '@/components/maria-joel/ServicesSection';
import PortfolioSection from '@/components/maria-joel/PortfolioSection';
import ProcessSection from '@/components/maria-joel/ProcessSection';
import ContactSection from '@/components/maria-joel/ContactSection';

export const metadata: Metadata = {
  title: 'PixelFlow Studio - Diseño + Tecnología Freelance',
  description: 'Mari y Joel: Tu equipo freelance que combina diseño profesional con automatización inteligente. Transformamos tu negocio digital.',
  keywords: 'freelance, diseño web, automatización, redes sociales, shopify, IA, low code',
};

export default function MariaJoelPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}
