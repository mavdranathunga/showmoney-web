import Link from 'next/link'
import { ClipboardList, UserCheck, CreditCard, Send, ArrowRight } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: ClipboardList,
    title: 'Submit Your Requirements',
    description:
      'Tell us your target country, visa type, and travel dates. We review your profile and determine the funds amount you need to show.',
  },
  {
    step: '02',
    icon: UserCheck,
    title: 'Profile Assessment',
    description:
      'Our team evaluates your financial standing and creates a documentation strategy tailored specifically to your visa application.',
  },
  {
    step: '03',
    icon: CreditCard,
    title: 'Documents Prepared',
    description:
      'We prepare your proof-of-funds letter and review your bank statements, ensuring everything meets embassy standards perfectly.',
  },
  {
    step: '04',
    icon: Send,
    title: 'Submit with Confidence',
    description:
      'Receive your complete documentation package within 24–48 hours and submit your visa application with full confidence.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works-overview" className="py-24 bg-theme-gradient border-y border-card-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-badge mb-4 inline-flex">The Process</span>
          <h2 className="section-title mb-4">
            From Application to{' '}
            <span className="gold-text">Approval</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Four simple steps — and our team handles the heavy lifting for you every step of the way.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={step.step} className="relative text-center group">
                  {/* Step number + icon */}
                  <div className="relative inline-flex flex-col items-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/5 border border-gold-500/20 flex items-center justify-center mb-3 group-hover:border-gold-500/50 group-hover:shadow-lg group-hover:shadow-gold-500/10 transition-all duration-300">
                      <Icon size={26} className="text-gold-400" />
                    </div>
                    <span className="text-[11px] font-bold text-gold-500/60 tracking-widest">STEP {step.step}</span>
                  </div>
                  <h3 className="text-foreground font-bold text-lg mb-3 leading-snug">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="text-center mt-14">
          <Link href="/how-it-works" className="btn-secondary">
            Full Process Details <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
