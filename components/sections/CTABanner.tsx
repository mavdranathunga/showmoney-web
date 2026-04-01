import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTABanner() {
  return (
    <section id="cta-banner" className="py-24 bg-navy-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 via-navy-700 to-navy-800 border border-gold-500/20 p-12 sm:p-16 text-center shadow-2xl shadow-black/50">
          {/* Glow accents */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gold-500/8 rounded-full blur-3xl" />

          <div className="relative z-10">
            <span className="section-badge mb-6 inline-flex">Start Today</span>
            <h2 className="section-title text-white mb-4">
              Ready to Travel with{' '}
              <span className="gold-text">Full Confidence?</span>
            </h2>
            <p className="section-subtitle mx-auto text-slate-300 mb-10">
              Don't let financial documentation hold back your dream trip. Our team is ready to help you get visa-ready in as little as 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link id="cta-get-started" href="/contact" className="btn-primary text-base px-10 py-4">
                Get Started Now <ArrowRight size={18} />
              </Link>
              <a
                id="cta-whatsapp"
                href="https://wa.me/639000000000?text=Hi%2C%20I%27m%20interested%20in%20your%20Show%20Money%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base px-8 py-4"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            <p className="mt-8 text-slate-500 text-xs">
              No hidden fees · Secure & Confidential · 24–48 hour delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
