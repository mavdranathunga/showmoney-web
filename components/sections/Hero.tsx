'use client'

import Link from 'next/link'
import { ArrowRight, Shield, CheckCircle, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-gradient"
    >
      {/* Glowing orbs */}
      <div className="hero-glow w-[600px] h-[600px] bg-gold-500/8 -top-32 -right-32" />
      <div className="hero-glow w-[400px] h-[400px] bg-navy-700/60 -bottom-20 -left-20" />
      <div className="hero-glow w-[300px] h-[300px] bg-gold-600/6 top-1/2 left-1/3" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 animate-fade-in">
          <span className="section-badge">
            <Star size={12} className="text-gold-500 fill-gold-500" />
            Trusted by 5,000+ Filipino Travelers
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up">
          Your Visa Journey Starts With{' '}
          <span className="shimmer-text">Confidence</span>
        </h1>

        <p className="section-subtitle text-lg sm:text-xl mx-auto mb-10 animate-slide-up text-slate-300">
          Professional proof-of-funds documentation for all visa types — Schengen, US, UK, Japan, Australia & more. Fast, secure, and built for Filipino travelers.
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
            { icon: Star, text: '4.9★ Client Rating' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-slate-400">
              <Icon size={16} className="text-gold-500" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Decorative card previews */}
        <div className="mt-20 relative hidden lg:block">
          <div className="glass-card max-w-4xl mx-auto p-8 border border-gold-500/10">
            <div className="grid grid-cols-3 gap-6">
              {[
                { country: '🇩🇪 🇫🇷 🇮🇹 +24', label: 'Schengen Zone', amount: '€3,000+' },
                { country: '🇺🇸', label: 'United States', amount: '$5,000+' },
                { country: '🇯🇵', label: 'Japan', amount: '¥300,000+' },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 rounded-xl bg-white/3 border border-white/5">
                  <div className="text-2xl mb-2">{item.country}</div>
                  <div className="text-white font-semibold text-sm mb-1">{item.label}</div>
                  <div className="text-gold-400 font-bold text-lg">{item.amount}</div>
                  <div className="text-slate-500 text-xs mt-1">Required balance</div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 text-center text-slate-500 text-xs">
              Indicative amounts — actual requirements vary per embassy
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />
    </section>
  )
}
