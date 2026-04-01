import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingChat from '@/components/FloatingChat'
import { Mail, MessageCircle, Clock, MapPin, Send, Facebook, CheckCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with ShowMoney Pro. We're here to help Sri Lankan travelers with their visa financial documentation and proof-of-funds requirements.",
}

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: SITE_CONFIG.contact.phone.display,
    label: 'Typically replies in minutes',
    href: SITE_CONFIG.contact.whatsapp.link,
    color: 'bg-emerald-500/10 text-emerald-500',
  },
  {
    icon: Facebook,
    title: 'Facebook Messenger',
    value: '@showmoneypro',
    label: `Available 8am – 10pm IST`,
    href: SITE_CONFIG.social.messenger,
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    icon: Mail,
    title: 'Email',
    value: SITE_CONFIG.contact.email,
    label: 'Response within 24 hours',
    href: `mailto:${SITE_CONFIG.contact.email}`,
    color: 'bg-gold-500/10 text-gold-500',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-theme-gradient relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="section-badge mb-6 inline-flex">Contact Us</span>
            <h1 className="section-title text-5xl sm:text-6xl mb-6">
              Start Your <span className="gold-text">Visa Success</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Ready to get your show money documents in order? Our team is standing by to help you.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: Contact Info */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Reach Us Directly</h2>
                <p className="text-muted mb-10 font-medium">
                  Prefer to chat? Reach us through any of these channels and we'll respond quickly.
                </p>

                <div className="space-y-4">
                  {contactMethods.map((method) => (
                    <a
                      key={method.title}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card-hover p-6 flex items-center gap-6 group border-card-border"
                    >
                      <div className={`w-14 h-14 rounded-2xl ${method.color} flex items-center justify-center shrink-0`}>
                        <method.icon size={28} />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground group-hover:text-gold-500 transition-colors uppercase tracking-wider text-sm">
                          {method.title}
                        </h3>
                        <p className="text-lg font-bold text-foreground mb-1">{method.value}</p>
                        <p className="text-xs text-muted font-semibold">{method.label}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-10 p-8 glass-card border-card-border">
                  <h3 className="font-bold text-foreground mb-6 flex items-center gap-2">
                    <Clock size={20} className="text-gold-500" />
                    Office Hours
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between pb-2 border-b border-card-border">
                      <span className="text-muted font-medium">Monday – Friday</span>
                      <span className="text-foreground font-bold">8:00 AM – 8:00 PM</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-card-border">
                      <span className="text-muted font-medium">Saturday</span>
                      <span className="text-foreground font-bold">9:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted font-medium">Sunday</span>
                      <span className="text-foreground font-bold">Emergency only</span>
                    </div>
                    <p className="text-[10px] text-muted mt-4 font-bold uppercase tracking-widest text-center">
                      All times Sri Lanka Standard Time (UTC+5:30)
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="glass-card p-8 sm:p-10 border-card-border shadow-2xl">
                <h2 className="text-3xl font-serif font-bold mb-8 text-foreground">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground/80 uppercase tracking-wider">Full Name *</label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="w-full bg-foreground/5 border-card-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500/40 text-foreground font-medium"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground/80 uppercase tracking-wider">Email Address *</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full bg-foreground/5 border-card-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500/40 text-foreground font-medium"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/80 uppercase tracking-wider">Phone / WhatsApp</label>
                    <input
                      type="text"
                      placeholder="+94 7x xxx xxxx"
                      className="w-full bg-foreground/5 border-card-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500/40 text-foreground font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/80 uppercase tracking-wider">Visa Type *</label>
                    <select className="w-full bg-foreground/5 border-card-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500/40 text-foreground font-medium appearance-none">
                      <option className="bg-background">Select visa type...</option>
                      <option className="bg-background">Schengen Visa</option>
                      <option className="bg-background">US Tourist Visa</option>
                      <option className="bg-background">UK Visitor Visa</option>
                      <option className="bg-background">Japan Tourist Visa</option>
                      <option className="bg-background">Australia / NZ</option>
                      <option className="bg-background">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/80 uppercase tracking-wider">Message *</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your visa application, travel dates, and what you need help with..."
                      className="w-full bg-foreground/5 border-card-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500/40 text-foreground font-medium"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full py-4 text-lg font-bold shadow-gold-500/20 shadow-lg">
                    <Send size={18} />
                    Send Message
                  </button>

                  <p className="text-center text-xs text-muted font-medium mt-6">
                    By submitting, you agree to our Privacy Policy. We never share your information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Quick FAQ / Note */}
        <section className="py-16 bg-foreground/[0.02] border-y border-card-border text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Common Question</h2>
            <div className="glass-card p-8 border-card-border">
              <p className="text-foreground font-bold text-lg mb-2">"How fast can I get my documents?"</p>
              <p className="text-muted font-medium">
                Most documents are ready within <span className="text-gold-600 dark:text-gold-400 font-bold">24 to 48 hours</span> after you provide your information. 
                Need it faster? Let us know on WhatsApp and we'll prioritize your request.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingChat />
    </div>
  )
}
