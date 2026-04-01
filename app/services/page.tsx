import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingChat from '@/components/FloatingChat'
import Link from 'next/link'
import { FileText, BookOpen, MessageSquare, Search, CheckCircle, ArrowRight, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore ShowMoney Pro\'s full range of visa financial documentation services — proof of funds letters, bank statement assistance, visa consultation, and document review.',
}

const services = [
  {
    id: 'proof-of-funds',
    icon: FileText,
    title: 'Proof of Funds Letter',
    tagline: 'The most critical document for your visa application',
    description:
      'Our professionally crafted proof-of-funds letters are designed to meet the exact standards of embassies worldwide. Each letter is customized to your destination country, visa type, and personal financial profile.',
    features: [
      'Embassy-compliant letterhead and format',
      'Certified financial figures with clear sourcing',
      'Customized per destination country requirements',
      'Digital & printable formats included',
      'Available in English and other languages on request',
    ],
    turnaround: '24–48 hours',
    color: 'from-gold-500/20 to-gold-600/5',
    iconColor: 'text-gold-500',
    borderColor: 'border-card-border',
  },
  {
    id: 'bank-statement',
    icon: BookOpen,
    title: 'Bank Statement Assistance',
    tagline: 'Present your savings in the best possible light',
    description:
      'Your bank statement tells a story. We help you organize, format, and present your banking history in a way that clearly demonstrates financial stability and the ability to fund your trip.',
    features: [
      '3–6 month transaction history review',
      'Balance presentation strategy',
      'Red flag identification & correction guidance',
      'Supporting documentation checklist',
      'Multiple bank account consolidation tips',
    ],
    turnaround: '24–48 hours',
    color: 'from-blue-500/20 to-blue-600/5',
    iconColor: 'text-blue-500',
    borderColor: 'border-card-border',
  },
  {
    id: 'consultation',
    icon: MessageSquare,
    title: 'Visa Consultation',
    tagline: 'Personalized advice from experienced visa specialists',
    description:
      'A one-on-one session with our visa specialists to assess your financial profile, identify weak points, and craft a comprehensive strategy — tailored to the specific embassy you\'re applying to.',
    features: [
      'Full financial profile assessment',
      'Embassy-specific strategy development',
      'Document checklist creation',
      'Timeline and preparation guidance',
      'Follow-up Q&A session included',
    ],
    turnaround: 'Same day',
    color: 'from-purple-500/20 to-purple-600/5',
    iconColor: 'text-purple-500',
    borderColor: 'border-card-border',
  },
  {
    id: 'document-review',
    icon: Search,
    title: 'Document Review',
    tagline: 'Catch problems before the embassy does',
    description:
      'Our experts review your complete visa application package — every document, every figure, every inconsistency — so you can submit knowing everything is in perfect order.',
    features: [
      'Full application package audit',
      'Financial document cross-checking',
      'Red flag identification & solutions',
      'Cover letter review and improvement',
      'Submission checklist confirmation',
    ],
    turnaround: '24 hours',
    color: 'from-emerald-500/20 to-emerald-600/5',
    iconColor: 'text-emerald-500',
    borderColor: 'border-card-border',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-theme-gradient relative overflow-hidden">
          <div className="hero-glow w-96 h-96 bg-gold-500/10 -top-20 -left-20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="section-badge mb-6 inline-flex">Services</span>
            <h1 className="section-title mb-6">
              Professional Visa{' '}
              <span className="gold-text">Documentation Services</span>
            </h1>
            <p className="section-subtitle mx-auto text-lg">
              From proof-of-funds letters to complete document reviews — we have everything you need to present a winning visa application.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`glass-card p-8 sm:p-12 border ${service.borderColor} scroll-mt-28 border-card-border shadow-sm`}
                >
                  <div className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-start`}>
                    <div className="lg:w-1/2">
                      <div className={`w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center mb-6 border border-card-border`}>
                        <Icon size={30} className={service.iconColor} />
                      </div>
                      <div className="section-badge mb-4 inline-flex">{service.turnaround} turnaround</div>
                      <h2 className="text-3xl font-bold font-serif text-foreground mb-2">{service.title}</h2>
                      <p className={`text-sm font-semibold mb-4 ${service.iconColor}`}>{service.tagline}</p>
                      <p className="text-muted leading-relaxed mb-8">{service.description}</p>
                      <Link href="/contact" className="btn-primary">
                        Get This Service <ArrowRight size={18} />
                      </Link>
                    </div>
                    <div className="lg:w-1/2">
                      <div className="p-6 rounded-2xl bg-foreground/5 border border-card-border">
                        <h3 className="text-foreground font-semibold mb-5 flex items-center gap-2">
                          <Shield size={16} className="text-gold-500" />
                          What's Included
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((f) => (
                            <li key={f} className="flex items-start gap-3 text-foreground/80 text-sm font-medium">
                              <CheckCircle size={16} className="text-gold-500 shrink-0 mt-0.5" />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 pt-5 border-t border-card-border flex items-center gap-2 text-sm text-muted">
                          <Clock size={14} className="text-gold-500" />
                          Delivery: <span className="text-foreground font-medium">{service.turnaround}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="section-title mb-4">Not Sure Which Service You Need?</h2>
            <p className="section-subtitle mx-auto mb-8">Chat with our team — we'll help you figure out exactly what your embassy requires.</p>
            <Link href="/contact" className="btn-primary">Contact Us <ArrowRight size={18} /></Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingChat />
    </>
  )
}
