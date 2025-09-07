import { Header } from "@/components/header"
import { VideoHeroSection } from "@/components/sections/video-hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { AboutSection } from "@/components/sections/about-section"
import { PhotoGallery } from "@/components/sections/photo-gallery"
import { SimpleVideoGallery } from "@/components/sections/simple-video-gallery"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <VideoHeroSection />
        <ServicesSection />
        <AboutSection />
        <PhotoGallery />
        <SimpleVideoGallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
