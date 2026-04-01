'use client'

import { useState } from 'react'
import { Plus, Minus, Search } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingChat from '@/components/FloatingChat'
import { SITE_CONFIG } from '@/lib/constants'

const faqs = [
  {
    category: 'General Service',
    questions: [
      {
        q: 'Who can use ShowMoney Pro?',
        a: 'Any Sri Lankan national planning to apply for an international visa can use our service. Whether you are a first-time applicant, have had a previous rejection, are self-employed, or a professional — we tailor our approach to your specific situation.',
      },
      {
        q: 'What exactly do you provide?',
        a: 'We provide a comprehensive "financial presentation package" which includes a professionally drafted proof-of-funds letter, bank statement analysis, and advice on how to structure your financial history to meet embassy-specific requirements.',
      },
      {
        q: 'Is this legal and compliant?',
        a: 'Yes, 100%. We help you present your REAL financial situation in a professional manner. We do not falsify documents, provide "fake" bank statements, or engage in any form of misrepresentation. Embassies appreciate professional documentation.',
      },
    ],
  },
  {
    category: 'Requirements & Amounts',
    questions: [
      {
        q: 'How much show money do I actually need?',
        a: 'The US embassy does not publish a fixed amount, but generally expects you to demonstrate funds sufficient to cover your entire trip plus living expenses. For most short visits (2–4 weeks), $3,000–$8,000 in your account is a solid benchmark. Self-sufficiency and strong ties to Sri Lanka are equally important.',
      },
      {
        q: 'Do I need to leave the money in my bank?',
        a: 'Yes. Most embassies want to see the "Average Daily Balance" (ADB) over 3–6 months. Moving large sums in and out right before an application is a major red flag. We guide you on how to manage your accounts to avoid these triggers.',
      },
    ],
  },
  {
    category: 'Process & Timing',
    questions: [
      {
        q: 'How long does the service take?',
        a: 'Our standard turnaround time is 24 to 48 hours once we have all your information. We also offer "Express" services for urgent visa appointments.',
      },
      {
        q: 'What information do I need to provide?',
        a: 'Typically, we will need to see your bank statements for the last 3–6 months and understand your employment/business status. Your information is kept strictly confidential and used only to draft your documentation.',
      },
      {
        q: 'Can you help if I have a previous rejection?',
        a: 'Yes. In fact, many of our clients come to us after a rejection. We specialize in identifying why your previous financial presentation failed and how to address those specific concerns in your new application.',
      },
      {
        q: 'Do you help with the actual interview?',
        a: 'Our consultation service includes financial interview preparation tips — specifically how to answer questions about your funds, income, and ties to Sri Lanka. For full interview coaching, please mention this when booking.',
      },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="glass-card-hover mb-4 overflow-hidden border-t border-card-border transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between gap-4 group"
      >
        <span className="text-foreground font-bold text-lg group-hover:text-gold-500 transition-colors">
          {q}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-gold-500 text-white rotate-180' : 'bg-foreground/5 text-gold-500'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-0 text-muted font-medium leading-relaxed bg-foreground/[0.01]">
          {a}
        </div>
      </div>
    </div>
  )
}

export default function FAQContent() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-theme-gradient relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="section-badge mb-6 inline-flex">Support</span>
            <h1 className="section-title text-5xl sm:text-6xl mb-6">
              Common <span className="gold-text">Questions</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Everything you need to know about our services, visa requirements, and the documentation process.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search */}
            <div className="relative mb-16">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
              <input
                type="text"
                placeholder="Search your question..."
                className="w-full bg-foreground/5 border border-card-border rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-gold-500/40 text-foreground font-medium"
                onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
              />
            </div>

            {faqs.map((category) => {
              const filteredQuestions = category.questions.filter(
                (item) => item.q.toLowerCase().includes(searchTerm) || item.a.toLowerCase().includes(searchTerm)
              )

              if (filteredQuestions.length === 0) return null

              return (
                <div key={category.category} className="mb-12">
                  <h2 className="text-xl font-bold gold-text font-serif mb-6 uppercase tracking-widest pl-4 border-l-4 border-gold-500">
                    {category.category}
                  </h2>
                  <div>
                    {filteredQuestions.map((item, idx) => (
                      <FAQItem key={idx} q={item.q} a={item.a} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Still have questions? */}
        <section className="py-16 bg-background border-t border-card-border text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Still Have Questions?</h2>
            <p className="text-muted mb-8 font-medium">
              We're here to help. Reach out to our specialist team on WhatsApp or via email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`${SITE_CONFIG.contact.whatsapp.link}?text=${encodeURIComponent(SITE_CONFIG.contact.whatsapp.defaultMessage)}`} className="btn-primary">
                Chat on WhatsApp
              </a>
              <Link href="/contact" className="btn-secondary">
                Send a Message
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingChat />
    </div>
  )
}
