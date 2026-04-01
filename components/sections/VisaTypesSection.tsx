import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const visaTypes = [
  { flag: '🇩🇪', country: 'Germany', visa: 'Schengen', amount: '€3,000+' },
  { flag: '🇫🇷', country: 'France', visa: 'Schengen', amount: '€3,000+' },
  { flag: '🇮🇹', country: 'Italy', visa: 'Schengen', amount: '€3,000+' },
  { flag: '🇪🇸', country: 'Spain', visa: 'Schengen', amount: '€3,000+' },
  { flag: '🇺🇸', country: 'United States', visa: 'Tourist B2', amount: '$5,000+' },
  { flag: '🇬🇧', country: 'United Kingdom', visa: 'Standard Visitor', amount: '£3,000+' },
  { flag: '🇯🇵', country: 'Japan', visa: 'Tourist', amount: '¥300,000+' },
  { flag: '🇦🇺', country: 'Australia', visa: 'Tourist 600', amount: 'A$5,000+' },
  { flag: '🇨🇦', country: 'Canada', visa: 'Tourist', amount: 'C$4,000+' },
  { flag: '🇰🇷', country: 'South Korea', visa: 'C-3', amount: '₩3M+' },
  { flag: '🇸🇬', country: 'Singapore', visa: 'SVP', amount: '$3,000+' },
  { flag: '🇳🇿', country: 'New Zealand', visa: 'Visitor', amount: 'NZ$5,000+' },
]

export default function VisaTypesSection() {
  return (
    <section id="visa-types-overview" className="py-24 bg-background border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-badge mb-4 inline-flex">Coverage</span>
          <h2 className="section-title mb-4">
            We Cover{' '}
            <span className="gold-text">All Destinations</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From Schengen to the Americas, Asia, and beyond — we have the expertise for every embassy's requirements.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
          {visaTypes.map((visa) => (
            <div
              key={visa.country}
              className="glass-card-hover p-5 flex flex-col items-center text-center gap-2"
            >
              <span className="text-3xl">{visa.flag}</span>
              <span className="text-foreground font-semibold text-sm leading-tight">{visa.country}</span>
              <span className="text-muted text-xs">{visa.visa} Visa</span>
              <span className="text-gold-400 text-xs font-bold">{visa.amount}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted text-sm mb-6">Don't see your destination? We cover 50+ countries.</p>
          <Link href="/visa-types" className="btn-primary">
            See All Visa Types <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
