import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Proof of Funds Letter', href: '/services#proof-of-funds' },
    { label: 'Bank Statement Assistance', href: '/services#bank-statement' },
    { label: 'Visa Consultation', href: '/services#consultation' },
    { label: 'Document Review', href: '/services#document-review' },
  ],
  'Visa Types': [
    { label: 'Schengen Visa', href: '/visa-types#schengen' },
    { label: 'US Tourist Visa', href: '/visa-types#us' },
    { label: 'UK Visa', href: '/visa-types#uk' },
    { label: 'Japan Visa', href: '/visa-types#japan' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-gold-500/30">
                <Image src="/logo.png" alt="ShowMoney Pro" width={40} height={40} className="object-cover" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-lg font-bold text-white">
                  ShowMoney<span className="gold-text"> Pro</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">Proof of Funds</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted partner for proof-of-funds documentation. We help Filipino travelers confidently present their financial standing for any visa application.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: MessageCircle, href: 'https://m.me/showmoneypro', label: 'Messenger' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-500/30 hover:bg-gold-500/10 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-4 tracking-wide">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 text-sm hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Strip */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-between">
          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <a href="mailto:hello@showmoneypro.com" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
              <Mail size={14} />
              hello@showmoneypro.com
            </a>
            <a href="https://wa.me/639000000000" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
              <Phone size={14} />
              +63 900 000 0000
            </a>
            <span className="flex items-center gap-2 text-slate-500">
              <MapPin size={14} />
              Philippines
            </span>
          </div>
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} ShowMoney Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
