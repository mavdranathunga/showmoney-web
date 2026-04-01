import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for ShowMoney Pro — understand the terms under which we provide our visa documentation services.',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-theme-gradient relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="section-title text-5xl mb-4">Terms of <span className="gold-text">Service</span></h1>
            <p className="text-muted text-sm font-medium">Last updated: March 1, 2024</p>
          </div>
        </section>
        <section className="py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-muted leading-relaxed font-medium">
            {[
              {
                title: '1. Acceptance of Terms',
                body: 'By accessing or using ShowMoney Pro\'s services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
              },
              {
                title: '2. Nature of Services',
                body: 'ShowMoney Pro provides legitimate documentation assistance and consultation services for visa financial requirements. We assist clients in organizing, formatting, and presenting their actual financial information in compliance with embassy standards. We do not fabricate, falsify, or misrepresent any financial information.',
              },
              {
                title: '3. Client Responsibilities',
                body: 'Clients are responsible for providing accurate and truthful financial information. Any misrepresentation of financial information to embassies is the sole responsibility of the client. ShowMoney Pro shall not be held liable for consequences arising from client-provided inaccurate information.',
              },
              {
                title: '4. No Guarantee of Visa Approval',
                body: 'ShowMoney Pro does not guarantee visa approval. Visa decisions are solely at the discretion of the respective embassy or consulate. Our services improve documentation quality; we cannot influence or control embassy decisions.',
              },
              {
                title: '5. Payment and Refunds',
                body: 'Payment terms are agreed upon before service commencement. Refunds may be provided at our discretion in cases where services have not yet been rendered. Completed services are non-refundable.',
              },
              {
                title: '6. Confidentiality',
                body: 'We treat all client information with strict confidentiality and will not share your personal or financial information with any third parties without your explicit consent.',
              },
              {
                title: '7. Limitation of Liability',
                body: 'ShowMoney Pro\'s liability shall be limited to the service fee paid by the client. We are not liable for lost travel opportunities, flight penalties, or other consequential damages related to visa outcomes.',
              },
              {
                title: '8. Contact',
                body: `For questions about these Terms of Service, contact us at: ${SITE_CONFIG.contact.email}`,
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-foreground font-bold text-xl mb-3 font-serif">{section.title}</h2>
                <p>{section.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
