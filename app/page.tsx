import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingChat from '@/components/FloatingChat'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import ServicesOverview from '@/components/sections/ServicesOverview'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import VisaTypesSection from '@/components/sections/VisaTypesSection'
import Testimonials from '@/components/sections/Testimonials'
import FAQSnippet from '@/components/sections/FAQSnippet'
import CTABanner from '@/components/sections/CTABanner'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ServicesOverview />
        <HowItWorksSection />
        <VisaTypesSection />
        <Testimonials />
        <FAQSnippet />
        <CTABanner />
      </main>
      <Footer />
      <FloatingChat />
    </>
  )
}
