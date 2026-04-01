import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingChat from '@/components/FloatingChat'
import Link from 'next/link'
import { Shield, Heart, Zap, Users, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about ShowMoney Pro — our story, our mission, and why thousands of Filipino travelers trust us for their visa financial documentation.',
}

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We only help you present your actual financial standing — accurately, clearly, and compliantly. No shortcuts that put your visa at risk.',
  },
  {
    icon: Heart,
    title: 'Genuine Care',
    description: 'We understand how much a visa approval means. Every application we touch receives our full attention and dedication.',
  },
  {
    icon: Zap,
    title: 'Speed & Reliability',
    description: 'We deliver within 24–48 hours because we know visa deadlines are real. We never miss a delivery.',
  },
  {
    icon: Users,
    title: 'Expertise',
    description: 'Our team has helped over 5,000 Filipino travelers across every major visa type and embassy. We know what works.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-navy-gradient relative overflow-hidden">
          <div className="hero-glow w-80 h-80 bg-gold-500/10 -top-20 -right-20" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="section-badge mb-6 inline-flex">Our Story</span>
            <h1 className="section-title text-5xl sm:text-6xl mb-6">
              Built for Filipino{' '}
              <span className="gold-text">Travelers</span>
            </h1>
            <p className="section-subtitle mx-auto text-lg">
              We started ShowMoney Pro because we saw too many Filipinos being denied visas not because they couldn't afford to travel — but because their financial documents weren't presented correctly.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-10 sm:p-14">
              <div className="max-w-3xl mx-auto">
                <h2 className="section-title mb-6">Why We Exist</h2>
                <div className="space-y-5 text-slate-400 leading-relaxed">
                  <p>
                    Every year, thousands of qualified Filipino travelers are denied visas — not because they lack funds or genuine travel intentions — but because they don't know how to present their financial situation in the way embassies expect.
                  </p>
                  <p>
                    ShowMoney Pro was created to bridge that gap. We combine deep knowledge of embassy requirements with professional documentation skills to give every Filipino traveler the best possible financial presentation for their visa application.
                  </p>
                  <p>
                    We believe that a well-prepared, honest, and well-presented application opens doors that would otherwise stay closed. That's not manipulation — that's professionalism.
                  </p>
                  <p>
                    From first-time applicants heading to Japan to seasoned travelers applying for US B-2 visas, we have helped over 5,000 Filipinos travel to their dream destinations with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-navy-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="section-title mb-4">Our <span className="gold-text">Values</span></h2>
              <p className="section-subtitle mx-auto">The principles that guide everything we do.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <div key={v.title} className="glass-card-hover p-8 text-center">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/5 border border-gold-500/20 flex items-center justify-center mb-5">
                      <Icon size={26} className="text-gold-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-3">{v.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* By the numbers */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="section-title mb-14">ShowMoney Pro <span className="gold-text">By the Numbers</span></h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {[
                { value: '5,000+', label: 'Clients Served' },
                { value: '98%', label: 'Approval Rate' },
                { value: '50+', label: 'Visa Types Covered' },
                { value: '24hr', label: 'Avg. Delivery Time' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-8">
                  <div className="text-4xl font-bold gold-text font-serif mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we don't do */}
        <section className="py-16 bg-navy-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-8 border border-emerald-500/20">
              <h2 className="text-xl font-bold text-white mb-6 font-serif">Our Commitment to Honesty</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                ShowMoney Pro strictly provides legitimate documentation assistance. We do not offer, facilitate, or endorse any form of fraud, document falsification, or misrepresentation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'We only work with your real financial figures',
                  'We never fabricate bank statements',
                  'We never create false employment records',
                  'We guide you to present facts — not fiction',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy-900 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="section-title mb-4">Ready to Work With Us?</h2>
            <p className="section-subtitle mx-auto mb-8">Join thousands of Filipino travelers who trust ShowMoney Pro for their visa documentation.</p>
            <Link href="/contact" className="btn-primary">
              Get Started Today <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingChat />
    </>
  )
}
