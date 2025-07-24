import Navigation from "./components/Navigation"
import HeroSection from "./components/HeroSection"
import VideoHeroSection from "./components/VideoHeroSection"
import HowItWorks from "./components/HowItWorks"
import SizesSection from "./components/SizesSection"
import FlavorShowcase from "./components/FlavorShowcase"
import TestimonialsSection from "./components/TestimonialsSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <VideoHeroSection />
      <HowItWorks />
      <SizesSection />
      <FlavorShowcase />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
