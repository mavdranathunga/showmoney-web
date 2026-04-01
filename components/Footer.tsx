import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-card-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center overflow-hidden shadow-lg shadow-gold-500/20 group-hover:scale-110 transition-transform">
                <Image src="/logo.png" alt={SITE_CONFIG.name} width={40} height={40} className="object-cover" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-lg font-bold text-foreground">
                  ShowMoney<span className="gold-text"> Pro</span>
                </span>
                <span className="text-[10px] text-muted font-medium tracking-widest uppercase">Proof of Funds</span>
              </div>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted partner for proof-of-funds documentation. We help Sri Lankan travelers confidently present their financial standing for any visa application.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: SITE_CONFIG.social.facebook, label: 'Facebook' },
                { icon: Instagram, href: SITE_CONFIG.social.instagram, label: 'Instagram' },
                { icon: MessageCircle, href: SITE_CONFIG.social.messenger, label: 'Messenger' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-foreground/5 border border-card-border flex items-center justify-center text-muted hover:text-gold-500 hover:bg-gold-500/5 hover:border-gold-500/20 transition-all"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-bold text-sm uppercase tracking-widest mb-6">Our Services</h3>
            <ul className="space-y-4">
              {[
                { label: 'Schengen Visa', href: '/visa-types' },
                { label: 'US Visa (B1/B2)', href: '/visa-types' },
                { label: 'Japan & Korea', href: '/visa-types' },
                { label: 'Australia & NZ', href: '/visa-types' },
                { label: 'Bank Documentation', href: '/services' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted hover:text-gold-500 text-sm transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-foreground font-bold text-sm uppercase tracking-widest mb-6">Company</h3>
            <ul className="space-y-4">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'How It Works', href: '/how-it-works' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted hover:text-gold-500 text-sm transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-foreground font-bold text-sm uppercase tracking-widest mb-6">Legal</h3>
            <ul className="space-y-4">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Service', href: '/terms-of-service' },
                { label: 'Refund Policy', href: '/terms-of-service' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted hover:text-gold-500 text-sm transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="py-6 border-t border-card-border flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-between">
          <div className="flex flex-wrap gap-6 text-sm text-muted">
            <a href={`mailto:${SITE_CONFIG.contact.email}`} className="flex items-center gap-2 hover:text-gold-400 transition-colors">
              <Mail size={14} />
              {SITE_CONFIG.contact.email}
            </a>
            <a href={SITE_CONFIG.contact.whatsapp.link} className="flex items-center gap-2 hover:text-gold-400 transition-colors">
              <Phone size={14} />
              {SITE_CONFIG.contact.phone.display}
            </a>
            <span className="flex items-center gap-2 text-muted/60">
              <MapPin size={14} />
              {SITE_CONFIG.contact.address}
            </span>
          </div>
          <p className="text-muted/60 text-xs">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
