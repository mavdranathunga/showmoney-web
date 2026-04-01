import Link from 'next/link'
import { FileText, BookOpen, MessageSquare, Search, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: FileText,
    title: 'Proof of Funds Letter',
    description:
      'Professionally prepared show money documentation that meets embassy standards — clear, credible, and compelling.',
    features: ['Embassy-compliant format', 'Official letterhead', 'Certified figures'],
    cta: '/services#proof-of-funds',
    color: 'from-gold-500/20 to-gold-600/5',
    iconColor: 'text-gold-400',
  },
  {
    icon: BookOpen,
    title: 'Bank Statement Assistance',
    description:
      'Guidance on preparing and presenting your bank statements in the most favorable, accurate, and organized manner.',
    features: ['3–6 months history', 'Format guidance', 'Balance optimization tips'],
    cta: '/services#bank-statement',
    color: 'from-blue-500/20 to-blue-600/5',
    iconColor: 'text-blue-400',
  },
  {
    icon: MessageSquare,
    title: 'Visa Consultation',
    description:
      'One-on-one consultation to understand your profile, identify financial gaps, and create a strategy for approval.',
    features: ['Profile assessment', 'Personalized advice', 'Document checklist'],
    cta: '/services#consultation',
    color: 'from-purple-500/20 to-purple-600/5',
    iconColor: 'text-purple-400',
  },
  {
    icon: Search,
    title: 'Document Review',
    description:
      'Expert review of your full visa application package to spot red flags before the embassy sees them.',
    features: ['Full document audit', 'Risk identification', 'Correction guidance'],
    cta: '/services#document-review',
    color: 'from-emerald-500/20 to-emerald-600/5',
    iconColor: 'text-emerald-400',
  },
]

export default function ServicesOverview() {
  return (
    <section id="how-it-works-overview" className="py-24 bg-theme-gradient border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge mb-4 inline-flex">Our Services</span>
          <h2 className="section-title mb-6">
            Everything You Need to <span className="gold-text">Get Approved</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We provide comprehensive financial documentation services tailored to every visa type and every Sri Lankan traveler's unique situation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="glass-card-hover p-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 border border-card-border`}>
                  <Icon size={26} className={service.iconColor} />
                </div>
                <h3 className="text-foreground font-bold text-lg mb-3 leading-snug">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/80 font-medium">
                      <CheckCircle size={15} className="text-gold-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={service.cta} className="inline-flex items-center gap-2 text-gold-400 text-sm font-semibold hover:gap-3 transition-all">
                  Learn more <ArrowRight size={15} />
                </Link>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/services" className="btn-primary">
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
