import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function CTABanner() {
  return (
    <section id="cta-banner" className="py-24 bg-background border-t border-card-border overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-card border border-gold-500/20 p-12 sm:p-16 text-center shadow-2xl dark:shadow-black/50 shadow-gold-500/5">
          {/* Theme-aware background gradient inside card */}
          <div className="absolute inset-0 bg-gold-500/5 dark:bg-navy-900/40 pointer-events-none" />

          {/* Glow accents */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl opacity-50 dark:opacity-30" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gold-500/8 rounded-full blur-3xl opacity-50 dark:opacity-20" />

          <div className="relative z-10">
            <span className="section-badge mb-6 inline-flex bg-gold-500/10 border-gold-500/20 text-gold-600 dark:text-gold-400 font-bold">
              Start Today
            </span>
            <h2 className="section-title text-foreground mb-4">
              Ready to Travel with{' '}
              <span className="gold-text">Full Confidence?</span>
            </h2>
            <p className="section-subtitle mx-auto text-muted mb-10 font-medium">
              Don't let financial documentation hold back your dream trip. Our team is ready to help you get visa-ready in as little as 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link id="cta-get-started" href="/contact" className="btn-primary text-base px-10 py-4">
                Get Started Now <ArrowRight size={18} />
              </Link>
              <a
                id="cta-whatsapp"
                href={`${SITE_CONFIG.contact.whatsapp.link}?text=${encodeURIComponent(SITE_CONFIG.contact.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base px-8 py-4"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            <p className="mt-8 text-muted text-xs font-semibold">
              No hidden fees · Secure & Confidential · 24–48 hour delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
