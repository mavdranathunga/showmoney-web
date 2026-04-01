import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingChat from '@/components/FloatingChat'
import Link from 'next/link'
import { MapPin, ArrowRight, CheckCircle, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Visa Types & Requirements',
  description:
    'Detailed financial requirements and show money guides for popular visa destinations including Schengen, US, UK, Japan, and Australia for Sri Lankan applicants.',
}

const visaTypes = [
  {
    region: 'Europe (Schengen)',
    countries: 'Germany, France, Italy, Spain, etc.',
    amount: '€3,000 – €8,000+',
    requirement: '3–6 months bank statements, ADB focus, and a professional proof-of-funds letter.',
    description: 'Schengen embassies are among the strictest. They look for consistent savings and a clear source of funds that justifies your stay.',
  },
  {
    region: 'North America',
    countries: 'USA (B-2), Canada (Visitor)',
    amount: '$5,000 – $10,000+',
    requirement: 'Bank certificate, employment records, and demonstration of strong ties to Sri Lanka.',
    description: 'US and Canada have rigorous financial screening. Our documentation helps demonstrate strong ties to Sri Lanka and sufficient travel funds.',
  },
  {
    region: 'East Asia',
    countries: 'Japan, South Korea, China',
    amount: '¥300,000 – ¥800,000+',
    requirement: 'Original bank certificate, income tax returns, and travel itinerary mapping.',
    description: 'Japan and Korea require high precision in financial declarations. We ensure your certificates match your declared income and savings.',
  },
  {
    region: 'Oceania',
    countries: 'Australia, New Zealand',
    amount: '$5,000 – $12,000+',
    requirement: 'Consolidated accounts, proof of assets, and clear funding evidence.',
    description: 'Australian home affairs look for genuine access to funds. We help you present a clean, consolidated financial profile for your E-visa.',
  },
  {
    region: 'Middle East & Others',
    countries: 'UK, UAE, Turkey',
    amount: '£3,000 – £6,000+',
    requirement: 'Current account history, business income proof, and sponsor letters if applicable.',
    description: 'The UK has specific "standard visitor" rules. We specialize in identifying weak points in your current account statements before you apply.',
  },
]

export default function VisaTypesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-theme-gradient relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="section-badge mb-6 inline-flex">Requirements</span>
            <h1 className="section-title text-5xl sm:text-6xl mb-6">
              Regional <span className="gold-text">Requirements</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Different embassies have different expectations. We tailor your documentation to meet the exact standards of your destination.
            </p>
          </div>
        </section>

        {/* Visa Content */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visaTypes.map((v) => (
                <div key={v.region} className="glass-card-hover p-8 flex flex-col items-start border-card-border shadow-md">
                  <div className="w-12 h-12 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-6">
                    <MapPin size={24} className="text-gold-500" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-1">{v.region}</h2>
                  <p className="text-muted text-xs font-bold uppercase tracking-widest mb-4">{v.countries}</p>
                  
                  <div className="bg-foreground/[0.03] w-full p-4 rounded-xl mb-6 border border-card-border">
                    <div className="text-gold-600 dark:text-gold-400 font-bold text-lg mb-1">{v.amount}</div>
                    <div className="text-muted text-[10px] font-bold uppercase tracking-widest">Recommended Balance</div>
                  </div>

                  <p className="text-foreground/90 text-sm leading-relaxed mb-6 font-medium">
                    {v.description}
                  </p>

                  <div className="mt-auto space-y-3 w-full">
                    <div className="flex items-start gap-2 text-xs text-muted font-semibold">
                      <CheckCircle size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                      {v.requirement}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="mt-16 p-8 glass-card border border-gold-500/20 bg-gold-500/5 max-w-4xl mx-auto text-center">
              <h3 className="text-foreground font-bold mb-3 flex items-center justify-center gap-2 uppercase tracking-wider text-sm">
                <Info size={16} className="text-gold-500" />
                A Note on Specific Amounts
              </h3>
              <p className="text-muted text-xs font-medium leading-relaxed uppercase tracking-wide">
                These amounts are calculated based on our extensive experience with thousands of Sri Lankan travelers. 
                Individual requirements may vary based on your trip duration, itinerary, and embassy updates. 
                Always consult with our team for the most current advice before your application.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background border-t border-card-border text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Not Sure What You Need?</h2>
            <p className="text-muted mb-8 font-medium">
              Every profile is unique. Get a personalized assessment of your financial standing today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Expert Advice <ArrowRight size={18} />
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
