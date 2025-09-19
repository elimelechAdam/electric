import { TopBar } from '@/components/top-bar'
import { Navigation } from '@/components/navigation'
import { FeaturesSection } from '@/components/features-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { HeroSection } from '@/components/hero-section'
import { CtaServiceSection } from '@/components/cta-service'
import { GallerySection } from '@/components/gallery-section'

export default function HomePage() {
  return (
    <div className="min-h-screen  overflow-x-hidden">
      <TopBar />
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <CtaServiceSection />
    </div>
  )
}
