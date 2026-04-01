import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingChat from '@/components/FloatingChat'
import Link from 'next/link'
import { ClipboardList, UserCheck, CreditCard, Send, Clock, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'Learn how ShowMoney Pro helps you prepare perfect visa financial documentation in 4 simple steps. From profile assessment to final document delivery — fast and secure.',
}

const steps = [
  {
    step: '01',
    icon: ClipboardList,
    title: 'Submit Your Requirements',
    description: 'Fill out our simple intake form with your destination country, visa type, travel dates, and current financial situation. No lengthy paperwork — just the essentials we need to get started.',
    details: [
      'Target country & visa type',
      'Planned travel dates',
      'Current bank balance overview',
      'Any previous visa refusals (if applicable)',
    ],
    time: '5 minutes',
  },
  {
    step: '02',
    icon: UserCheck,
    title: 'Profile Assessment',
    description: 'Our specialists review your submission and assess your financial profile against the specific requirements of your target embassy. We identify gaps and opportunities to strengthen your application.',
    details: [
      'Embassy requirement cross-check',
      'Financial gap analysis',
      'Risk factor identification',
      'Strategy recommendation',
    ],
    time: '2–4 hours',
  },
  {
    step: '03',
    icon: CreditCard,
    title: 'Document Preparation',
    description: 'We prepare your customized proof-of-funds letter, review your bank statements, and assemble your complete financial documentation package to embassy standards.',
    details: [
      'Custom proof-of-funds letter drafting',
      'Bank statement formatting review',
      'Supporting document checklist',
      'Quality check & final review',
    ],
    time: '24–48 hours',
  },
  {
    step: '04',
    icon: Send,
    title: 'Receive & Submit',
    description: 'You receive your complete, embassy-ready documentation package via email. Submit your visa application with full confidence knowing your financial documents are solid.',
    details: [
      'PDF & printable formats',
      'Submission guidance included',
      'Post-submission support available',
      'Follow-up consultation if needed',
    ],
    time: 'Instant delivery',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-navy-gradient relative overflow-hidden">
          <div className="hero-glow w-80 h-80 bg-gold-500/10 -top-20 right-0" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="section-badge mb-6 inline-flex">The Process</span>
            <h1 className="section-title text-5xl sm:text-6xl mb-6">
              Four Steps to{' '}
              <span className="gold-text">Visa Ready</span>
            </h1>
            <p className="section-subtitle mx-auto text-lg">
              Getting your financial documentation in order has never been simpler. Here's exactly how we do it.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {steps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <div key={step.step} className="glass-card p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-start">
                    {/* Step indicator */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/5 border border-gold-500/20 flex items-center justify-center">
                        <Icon size={28} className="text-gold-400" />
                      </div>
                      <span className="text-[10px] font-bold text-gold-500/50 tracking-widest mt-2">STEP {step.step}</span>
                      {idx < steps.length - 1 && (
                        <div className="w-px h-12 bg-gradient-to-b from-gold-500/30 to-transparent mt-3 hidden sm:block" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                        <h2 className="text-2xl font-bold font-serif text-white">{step.title}</h2>
                        <span className="section-badge text-xs py-1">
                          <Clock size={11} />
                          {step.time}
                        </span>
                      </div>
                      <p className="text-slate-400 leading-relaxed mb-6">{step.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.details.map((d) => (
                          <div key={d} className="flex items-center gap-2 text-sm text-slate-300">
                            <CheckCircle size={14} className="text-gold-500 shrink-0" />
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* What to prepare */}
        <section className="py-20 bg-navy-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-title mb-4">What to <span className="gold-text">Prepare</span></h2>
              <p className="section-subtitle mx-auto">Have these ready when you contact us to speed up the process.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Valid Philippine passport (photo of data page)',
                'Target destination country',
                'Estimated travel dates',
                'Bank statements (latest 3–6 months)',
                'Employment or business documents',
                'Previous visa history (if any)',
              ].map((item) => (
                <div key={item} className="glass-card p-4 flex items-start gap-3">
                  <AlertCircle size={16} className="text-gold-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/contact" className="btn-primary">
                Start Now <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingChat />
    </>
  )
}
