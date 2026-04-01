import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingChat from '@/components/FloatingChat'
import Link from 'next/link'
import { ArrowRight, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Visa Types We Support',
  description:
    'ShowMoney Pro provides proof-of-funds documentation for Schengen, US, UK, Japan, Australia, Canada, South Korea, New Zealand visas and 50+ more destinations.',
}

const regions = [
  {
    region: 'Europe (Schengen)',
    description: 'All 27 Schengen area countries share the same financial requirement framework. We create documentation that satisfies the consulate you\'re applying through.',
    requiredAmount: '€100/day · min. €3,000 recommended',
    countries: [
      { flag: '🇩🇪', name: 'Germany' },
      { flag: '🇫🇷', name: 'France' },
      { flag: '🇮🇹', name: 'Italy' },
      { flag: '🇪🇸', name: 'Spain' },
      { flag: '🇳🇱', name: 'Netherlands' },
      { flag: '🇨🇭', name: 'Switzerland' },
      { flag: '🇦🇹', name: 'Austria' },
      { flag: '🇧🇪', name: 'Belgium' },
      { flag: '🇬🇷', name: 'Greece' },
      { flag: '🇵🇹', name: 'Portugal' },
      { flag: '🇸🇪', name: 'Sweden' },
      { flag: '🇩🇰', name: 'Denmark' },
    ],
    color: 'border-blue-500/20 bg-blue-500/5',
    badge: 'blue',
  },
  {
    region: 'Americas',
    description: 'US and Canada have rigorous financial screening. Our documentation helps demonstrate strong ties to the Philippines and sufficient travel funds.',
    requiredAmount: 'USD $3,000–$10,000+ depending on trip',
    countries: [
      { flag: '🇺🇸', name: 'United States' },
      { flag: '🇨🇦', name: 'Canada' },
    ],
    color: 'border-red-500/20 bg-red-500/5',
    badge: 'red',
  },
  {
    region: 'United Kingdom',
    description: 'The UK has left the EU but maintains its own strict financial requirements. We prepare documentation aligned with UKVI standards.',
    requiredAmount: '£2,000–£5,000+ recommended',
    countries: [{ flag: '🇬🇧', name: 'United Kingdom' }],
    color: 'border-indigo-500/20 bg-indigo-500/5',
    badge: 'indigo',
  },
  {
    region: 'Asia',
    description: 'Japan, South Korea, and Singapore have clear financial benchmarks. Our documents are formatted to match each country\'s specific embassy requirements.',
    requiredAmount: 'Varies by country (₩3M+, ¥300K+)',
    countries: [
      { flag: '🇯🇵', name: 'Japan' },
      { flag: '🇰🇷', name: 'South Korea' },
      { flag: '🇸🇬', name: 'Singapore' },
      { flag: '🇹🇭', name: 'Thailand' },
      { flag: '🇨🇳', name: 'China' },
      { flag: '🇹🇼', name: 'Taiwan' },
    ],
    color: 'border-orange-500/20 bg-orange-500/5',
    badge: 'orange',
  },
  {
    region: 'Oceania',
    description: 'Australia and New Zealand process visa applications online but still require strong financial evidence to demonstrate intention to return home.',
    requiredAmount: 'AUD $5,000+ / NZD $5,000+',
    countries: [
      { flag: '🇦🇺', name: 'Australia' },
      { flag: '🇳🇿', name: 'New Zealand' },
    ],
    color: 'border-emerald-500/20 bg-emerald-500/5',
    badge: 'emerald',
  },
  {
    region: 'Middle East & Others',
    description: 'We also assist with documentation for UAE, Saudi Arabia, and many other destinations not listed here.',
    requiredAmount: 'Contact us for specific requirements',
    countries: [
      { flag: '🇦🇪', name: 'UAE' },
      { flag: '🇸🇦', name: 'Saudi Arabia' },
      { flag: '🇶🇦', name: 'Qatar' },
    ],
    color: 'border-yellow-500/20 bg-yellow-500/5',
    badge: 'yellow',
  },
]

export default function VisaTypesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-navy-gradient relative overflow-hidden">
          <div className="hero-glow w-80 h-80 bg-gold-500/10 top-0 right-0" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="section-badge mb-6 inline-flex">50+ Destinations</span>
            <h1 className="section-title text-5xl sm:text-6xl mb-6">
              Visa Types We{' '}
              <span className="gold-text">Support</span>
            </h1>
            <p className="section-subtitle mx-auto text-lg">
              We have deep expertise across every major visa category and embassy. Whether you're going to Paris or Tokyo, we've got the right documentation for you.
            </p>
          </div>
        </section>

        {/* Visa Regions */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {regions.map((region) => (
              <div key={region.region} id={region.region.toLowerCase().replace(/\s+/g, '-')} className={`glass-card p-8 border ${region.color} scroll-mt-28`}>
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="lg:w-1/3">
                    <h2 className="text-2xl font-bold font-serif text-white mb-2">{region.region}</h2>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{region.description}</p>
                    <div className="flex items-start gap-2 p-3 rounded-xl bg-gold-500/5 border border-gold-500/10">
                      <Info size={14} className="text-gold-400 shrink-0 mt-0.5" />
                      <span className="text-gold-300 text-xs">{region.requiredAmount}</span>
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                      {region.countries.map((country) => (
                        <div key={country.name} className="text-center p-3 rounded-xl bg-white/3 border border-white/5 hover:border-gold-500/20 transition-all">
                          <div className="text-2xl mb-1">{country.flag}</div>
                          <div className="text-white text-xs font-medium leading-tight">{country.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 bg-navy-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-6 border border-yellow-500/20">
              <div className="flex gap-3 items-start">
                <Info size={18} className="text-yellow-400 shrink-0 mt-0.5" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  <strong className="text-white">Disclaimer:</strong> Financial requirements shown are indicative based on general embassy guidelines and are subject to change. Actual requirements may vary based on your individual profile, length of stay, and embassy discretion. Always verify current requirements with the official embassy website.
                </p>
              </div>
            </div>
            <div className="text-center mt-10">
              <p className="text-slate-400 text-sm mb-4">Don't see your destination? We cover many more countries.</p>
              <Link href="/contact" className="btn-primary">
                Ask About Your Destination <ArrowRight size={18} />
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
