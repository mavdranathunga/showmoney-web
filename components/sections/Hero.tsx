'use client'

import Link from 'next/link'
import { ArrowRight, Shield, CheckCircle, Star } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg-theme transition-colors duration-500 border-b border-card-border"
    >
      {/* Glowing orbs - Adjust based on theme */}
      <div className="hero-glow w-[600px] h-[600px] bg-gold-500/10 dark:bg-gold-500/8 -top-32 -right-32" />
      <div className="hero-glow w-[400px] h-[400px] bg-gold-500/5 dark:bg-navy-700/60 -bottom-20 -left-20" />
      <div className="hero-glow w-[300px] h-[300px] bg-gold-600/5 dark:bg-gold-600/6 top-1/2 left-1/3" />


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 animate-fade-in">
          <span className="section-badge border-gold-500/20 bg-gold-500/5">
            <Star size={12} className="text-gold-500 fill-gold-500" />
            <span className="text-gold-600 dark:text-gold-400 font-bold">Trusted by {SITE_CONFIG.stats.clients} Sri Lankan Travelers</span>
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
          Your Visa Journey Starts With{' '}
          <span className="shimmer-text">Confidence</span>
        </h1>

        <p className="text-lg sm:text-xl mx-auto mb-10 animate-slide-up text-muted max-w-2xl font-medium">
          Professional proof-of-funds documentation for all visa types — Schengen, US, UK, Japan, Australia & more. Fast, secure, and built for Sri Lankan travelers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
          <Link href="/contact" id="hero-cta-primary" className="btn-primary text-base px-8 py-4">
            Get Your Funds Ready <ArrowRight size={18} />
          </Link>
          <Link href="/how-it-works" id="hero-cta-secondary" className="btn-secondary text-base px-8 py-4">
            See How It Works
          </Link>
        </div>

        {/* Quick trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 animate-fade-in">
          {[
            { icon: Shield, text: 'Bank-Level Security' },
            { icon: CheckCircle, text: '24–48 Hour Turnaround' },
            { icon: Star, text: `${SITE_CONFIG.stats.rating} Client Rating` },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-muted font-semibold">
              <Icon size={16} className="text-gold-500" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Decorative card previews */}
        <div className="mt-20 relative hidden lg:block">
          <div className="glass-card max-w-4xl mx-auto p-8 border border-card-border shadow-xl">
            <div className="grid grid-cols-3 gap-6">
              {[
                { country: '🇩🇪 🇫🇷 🇮🇹 +24', label: 'Schengen Zone', amount: '€3,000+' },
                { country: '🇺🇸', label: 'United States', amount: '$5,000+' },
                { country: '🇯🇵', label: 'Japan', amount: '¥300,000+' },
              ].map((item) => (
                <div key={item.label} className="text-center p-6 rounded-xl bg-foreground/5 border border-card-border hover:border-gold-500/20 transition-all shadow-sm">
                  <div className="text-2xl mb-2">{item.country}</div>
                  <div className="text-foreground font-bold text-sm mb-1">{item.label}</div>
                  <div className="text-gold-600 dark:text-gold-400 font-bold text-xl">{item.amount}</div>
                  <div className="text-muted text-xs mt-1 font-medium">Required balance</div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-card-border text-center text-muted text-xs font-medium">
              Indicative amounts — actual requirements vary per embassy
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
