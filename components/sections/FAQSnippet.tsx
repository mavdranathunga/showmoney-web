'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    q: 'What exactly is "show money" for visa purposes?',
    a: 'Show money (or proof of funds) is documentation proving you have sufficient financial resources to cover your trip costs and return home. Embassies require this to ensure you won\'t overstay or become a financial burden in their country.',
  },
  {
    q: 'How much show money do I need for a Schengen visa?',
    a: 'The Schengen requirement is generally €100 per day of stay, with a recommended minimum of €3,000 in your bank account. The exact amount varies by country — French consulate, for example, may have slightly different guidelines.',
  },
  {
    q: 'How fast can I get my documents?',
    a: 'Our standard turnaround is 24–48 hours after we receive all your information. For urgent requests, we offer same-day processing (subject to availability).',
  },
  {
    q: 'Is this service legal and legitimate?',
    a: 'Absolutely. We provide documentation assistance and consultation — we help you organize and present your ACTUAL financial documents properly. We do not fabricate or falsify any records.',
  },
]

export default function FAQSnippet() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section id="faq-snippet" className="py-24 bg-background border-t border-card-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-badge mb-4 inline-flex">FAQ</span>
          <h2 className="section-title mb-4">
            Frequently Asked{' '}
            <span className="gold-text">Questions</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Have other questions? Check our full FAQ page or chat with us directly.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-card overflow-hidden">
              <button
                id={`faq-toggle-${idx}`}
                className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-foreground/5 transition-colors"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
              >
                <span className="text-foreground font-semibold text-sm sm:text-base">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-gold-400 shrink-0 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''
                    }`}
                />
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-muted text-sm leading-relaxed border-t border-card-border pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/faq" className="btn-secondary">
            See All FAQs <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
