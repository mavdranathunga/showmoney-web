'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, ChevronRight, Phone, MessageCircle } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { useTheme } from 'next-themes'
import { SITE_CONFIG } from '@/lib/constants'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Visa Types', href: '/visa-types' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHome = pathname === '/'
  // Only show white on Home, if Dark Theme is active, and NOT scrolled
  const shouldShowWhite = mounted && isHome && resolvedTheme === 'dark' && !scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-card-border ${scrolled
          ? 'bg-background/95 backdrop-blur-xl shadow-lg border-b border-card-border'
          : isHome ? 'bg-transparent' : 'bg-background/95 backdrop-blur-xl border-b border-card-border'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-gold-500/30 shadow-lg shadow-gold-500/10">
              <Image src="/logo.png" alt={`${SITE_CONFIG.name} Logo`} width={40} height={40} className="object-cover" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-serif text-lg font-bold transition-colors ${shouldShowWhite ? 'text-white' : 'text-foreground'} group-hover:text-gold-400`}>
                ShowMoney<span className="gold-text"> Pro</span>
              </span>
              <span className={`text-[10px] font-medium tracking-widest uppercase ${shouldShowWhite ? 'text-white/60' : 'text-muted'}`}>Proof of Funds</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold-500 ${shouldShowWhite ? 'text-white/80' : 'text-muted'}`}
              >
                {link.label}
              </Link>
            ))}
            <div className={`flex items-center gap-4 border-l pl-4 ${shouldShowWhite ? 'border-white/10' : 'border-card-border'}`}>
              <ThemeToggle isDarkBg={shouldShowWhite} />
              <Link href="/contact" className="btn-primary py-2.5 px-6 text-sm">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle isDarkBg={shouldShowWhite} />
            <button
              className={`p-2 transition-colors ${shouldShowWhite ? 'text-white/80' : 'text-muted'}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-card-border space-y-1 bg-background">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-muted hover:text-gold-500 hover:bg-foreground/5 rounded-lg transition-all font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 px-4">
              <Link href="/contact" className="btn-primary w-full justify-center" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
