'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingChat from '@/components/FloatingChat'
import Link from 'next/link'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqCategories = [
  {
    category: 'General',
    faqs: [
      {
        q: 'What exactly is "show money" for visa purposes?',
        a: 'Show money (or proof of funds) is documentation proving you have sufficient financial resources to cover your trip costs and return home. Embassies require this to ensure you won\'t overstay or become a financial burden in their country. It typically includes your bank statements and/or a formal proof-of-funds letter.',
      },
      {
        q: 'Is ShowMoney Pro\'s service legal?',
        a: 'Absolutely. We provide legitimate documentation assistance and consultation services. We help you organize, prepare, and present your ACTUAL financial documents in the most favorable and compliant way. We do not fabricate, falsify, or misrepresent any financial information. All documents reflect your real financial standing.',
      },
      {
        q: 'Who can use your service?',
        a: 'Any Filipino national planning to apply for an international visa can use our service. Whether you are a first-time applicant, have had a previous rejection, are self-employed, or a professional — we tailor our approach to your specific situation.',
      },
    ],
  },
  {
    category: 'Financial Requirements',
    faqs: [
      {
        q: 'How much show money do I need for a Schengen visa?',
        a: 'The general Schengen guideline is €100 per day of stay. So a 30-day trip would require approximately €3,000. However, we recommend maintaining at least €3,000–€5,000 in your bank account for at least 3 months prior to application. Some consulates like France and Germany may have slightly stricter expectations.',
      },
      {
        q: 'What about US Tourist Visa (B-1/B-2) requirements?',
        a: 'The US embassy does not publish a fixed amount, but generally expects you to demonstrate funds sufficient to cover your entire trip plus living expenses. For most short visits (2–4 weeks), $3,000–$8,000 in your account is a solid benchmark. Self-sufficiency and strong ties to the Philippines are equally important.',
      },
      {
        q: 'Do I need a separate "show money" account or can I use my existing savings?',
        a: 'Your existing savings and checking accounts work perfectly fine. You do not need to open a separate account. What matters is the consistency, history, and source of funds. We help you present your existing accounts in the most favorable way possible.',
      },
      {
        q: 'Can I borrow money and show it in my account?',
        a: 'While some people do this, we strongly advise against temporary fund parking as embassies look for consistent transaction history. Sudden large deposits often raise red flags. Our consultation service helps you develop a legitimate strategy based on your actual financial situation.',
      },
    ],
  },
  {
    category: 'Our Process',
    faqs: [
      {
        q: 'How fast can I get my documents?',
        a: 'Our standard turnaround is 24–48 hours after we receive all required information. For urgent cases, we offer same-day processing (availability may vary). Contact us directly for rush requests.',
      },
      {
        q: 'What information do I need to provide?',
        a: 'We typically need: your target country and visa type, planned travel dates, current bank balance and 3–6 month transaction history, employment or business documents, and any prior visa history. Our team will guide you through exactly what to send.',
      },
      {
        q: 'What format will I receive my documents in?',
        a: 'You will receive your documents as high-quality PDFs suitable for both digital submission and printing. We can also provide editable formats if you need to make adjustments after delivery.',
      },
    ],
  },
  {
    category: 'After Applying',
    faqs: [
      {
        q: 'What if my visa is still rejected after using your service?',
        a: 'While we cannot guarantee visa approval (no one legitimately can), our documentation significantly improves your financial presentation. If your visa is rejected, we offer a free follow-up consultation to review what happened and re-strategize for your next application.',
      },
      {
        q: 'Can I use your documents for multiple visa applications?',
        a: 'Each proof-of-funds letter is prepared specifically for one visa application. If you need documentation for a different country or a re-application, we will prepare a new, updated document for you.',
      },
      {
        q: 'Do you help with visa interview preparation?',
        a: 'Our consultation service includes financial interview preparation tips — specifically how to answer questions about your funds, income, and ties to the Philippines. For full interview coaching, please mention this when booking.',
      },
    ],
  },
]

export default function FAQPage() {
  const [openKey, setOpenKey] = useState<string | null>('General-0')

  const toggle = (key: string) => setOpenKey(openKey === key ? null : key)

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-navy-gradient relative overflow-hidden">
          <div className="hero-glow w-80 h-80 bg-gold-500/10 -top-20 -right-20" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="section-badge mb-6 inline-flex">FAQ</span>
            <h1 className="section-title text-5xl sm:text-6xl mb-6">
              Frequently Asked{' '}
              <span className="gold-text">Questions</span>
            </h1>
            <p className="section-subtitle mx-auto text-lg">
              Everything you need to know about show money, visa documentation, and how we work.
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-xl font-bold text-gold-400 mb-4 font-serif">{cat.category}</h2>
                <div className="space-y-3">
                  {cat.faqs.map((faq, idx) => {
                    const key = `${cat.category}-${idx}`
                    const isOpen = openKey === key
                    return (
                      <div key={key} className="glass-card overflow-hidden">
                        <button
                          id={`faq-${cat.category.toLowerCase().replace(/\s+/g, '-')}-${idx}`}
                          className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-white/2 transition-colors"
                          onClick={() => toggle(key)}
                          aria-expanded={isOpen}
                        >
                          <span className="text-white font-semibold text-sm sm:text-base">{faq.q}</span>
                          <ChevronDown
                            size={18}
                            className={`text-gold-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still have questions */}
        <section className="py-16 bg-navy-950 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="section-title mb-4">Still Have Questions?</h2>
            <p className="section-subtitle mx-auto mb-8">Our team is available to answer any specific questions about your situation.</p>
            <Link href="/contact" className="btn-primary">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingChat />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqCategories.flatMap((c) =>
              c.faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              }))
            ),
          }),
        }}
      />
    </>
  )
}
