'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingChat from '@/components/FloatingChat'
import { Mail, Phone, Clock, Send, CheckCircle, Loader2 } from 'lucide-react'

const visaTypes = [
  'Schengen Visa',
  'US Tourist Visa (B-2)',
  'UK Standard Visitor',
  'Japan Tourist',
  'Australia Tourist (600)',
  'Canada Tourist',
  'South Korea (C-3)',
  'New Zealand Visitor',
  'Other',
]

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const MessengerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.1l3.131 3.259 5.887-3.259-6.559 6.863z" />
  </svg>
)

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', visaType: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate form submission — replace with actual API call / Resend / EmailJS
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('sent')
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-navy-gradient relative overflow-hidden">
          <div className="hero-glow w-80 h-80 bg-gold-500/10 -top-10 -right-10" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="section-badge mb-6 inline-flex">Contact Us</span>
            <h1 className="section-title text-5xl sm:text-6xl mb-6">
              Let's Get You{' '}
              <span className="gold-text">Visa Ready</span>
            </h1>
            <p className="section-subtitle mx-auto text-lg">
              Tell us about your visa application and we'll get back to you within a few hours.
            </p>
          </div>
        </section>

        <section className="py-20 bg-navy-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold font-serif text-white mb-3">Reach Us Directly</h2>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Prefer to chat? Reach us through any of these channels and we'll respond quickly.
                  </p>
                </div>

                <div className="space-y-4">
                  <a href="https://wa.me/639000000000?text=Hi%2C%20I%27m%20interested%20in%20your%20Show%20Money%20service."
                    id="contact-whatsapp"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 glass-card-hover border border-[#25D366]/20">
                    <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                      <WhatsAppIcon />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">WhatsApp</div>
                      <div className="text-slate-400 text-xs">+63 900 000 0000</div>
                      <div className="text-[#25D366] text-xs mt-0.5">Typically replies in minutes</div>
                    </div>
                  </a>

                  <a href="https://m.me/showmoneypro"
                    id="contact-messenger"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 glass-card-hover border border-[#0084FF]/20">
                    <div className="w-12 h-12 rounded-xl bg-[#0084FF]/10 flex items-center justify-center text-[#0084FF] shrink-0">
                      <MessengerIcon />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Facebook Messenger</div>
                      <div className="text-slate-400 text-xs">@showmoneypro</div>
                      <div className="text-[#0084FF] text-xs mt-0.5">Available 8am – 10pm PHT</div>
                    </div>
                  </a>

                  <a href="mailto:hello@showmoneypro.com"
                    id="contact-email"
                    className="flex items-center gap-4 p-5 glass-card-hover border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Email</div>
                      <div className="text-slate-400 text-xs">hello@showmoneypro.com</div>
                      <div className="text-slate-500 text-xs mt-0.5">Response within 24 hours</div>
                    </div>
                  </a>
                </div>

                {/* Office Hours */}
                <div className="glass-card p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock size={16} className="text-gold-400" />
                    <span className="text-white font-semibold text-sm">Office Hours</span>
                  </div>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between text-slate-300">
                      <span>Monday – Friday</span>
                      <span className="text-white font-medium">8:00 AM – 8:00 PM</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Saturday</span>
                      <span className="text-white font-medium">9:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Sunday</span>
                      <span>Emergency only</span>
                    </div>
                    <div className="mt-2 text-xs text-slate-500">All times Philippine Standard Time (UTC+8)</div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="glass-card p-8 sm:p-10">
                  {status === 'sent' ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                        <CheckCircle size={32} className="text-emerald-400" />
                      </div>
                      <h3 className="text-white text-2xl font-bold font-serif mb-3">Message Sent!</h3>
                      <p className="text-slate-400">Thank you for reaching out. Our team will contact you within a few hours.</p>
                    </div>
                  ) : (
                    <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                      <h2 className="text-2xl font-bold font-serif text-white mb-6">Send Us a Message</h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            placeholder="Your full name"
                            className="input-field"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
                          <input
                            id="contact-email-field"
                            type="email"
                            required
                            placeholder="your@email.com"
                            className="input-field"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Phone / WhatsApp</label>
                          <input
                            id="contact-phone"
                            type="tel"
                            placeholder="+63 9xx xxx xxxx"
                            className="input-field"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Visa Type *</label>
                          <select
                            id="contact-visa-type"
                            required
                            className="input-field"
                            value={form.visaType}
                            onChange={(e) => setForm({ ...form, visaType: e.target.value })}
                          >
                            <option value="" disabled>Select visa type...</option>
                            {visaTypes.map((v) => <option key={v} value={v}>{v}</option>)}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Message *</label>
                        <textarea
                          id="contact-message"
                          required
                          rows={5}
                          placeholder="Tell us about your visa application, travel dates, and what you need help with..."
                          className="input-field resize-none"
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                        />
                      </div>

                      <button
                        id="contact-submit"
                        type="submit"
                        disabled={status === 'sending'}
                        className="btn-primary w-full justify-center py-4"
                      >
                        {status === 'sending' ? (
                          <><Loader2 size={18} className="animate-spin" /> Sending...</>
                        ) : (
                          <><Send size={18} /> Send Message</>
                        )}
                      </button>

                      <p className="text-slate-500 text-xs text-center">
                        By submitting, you agree to our Privacy Policy. We never share your information.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingChat />
    </>
  )
}
