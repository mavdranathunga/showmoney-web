import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingChat from '@/components/FloatingChat'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — Visa Tips & Show Money Guides',
  description:
    'Expert advice on visa financial requirements, show money amounts, bank statement tips, and proof-of-funds strategies for Filipino travelers.',
}

export const blogPosts = [
  {
    slug: 'how-much-show-money-schengen-visa',
    title: 'How Much Show Money Do You Need for a Schengen Visa in 2024?',
    excerpt:
      'The Schengen zone covers 27 European countries and has one of the most scrutinized financial requirements for Filipino applicants. Here\'s the exact breakdown.',
    category: 'Schengen Visa',
    readTime: '6 min read',
    date: 'March 15, 2024',
    featured: true,
  },
  {
    slug: 'us-tourist-visa-bank-statement-tips',
    title: 'US Tourist Visa B-2: Bank Statement Tips That Get Approved',
    excerpt:
      'The US embassy reviews your financial documents carefully. Learn what officers look for, what triggers red flags, and how to present your savings confidently.',
    category: 'US Visa',
    readTime: '8 min read',
    date: 'March 10, 2024',
    featured: true,
  },
  {
    slug: 'japan-visa-financial-requirements-philippines',
    title: 'Japan Visa Financial Requirements for Filipinos: Complete 2024 Guide',
    excerpt:
      'Japan is one of the most popular destinations for Filipino tourists. But many applicants are rejected due to poorly prepared financial documents. Here\'s how to avoid that.',
    category: 'Japan Visa',
    readTime: '7 min read',
    date: 'March 5, 2024',
    featured: false,
  },
  {
    slug: 'proof-of-funds-vs-show-money-difference',
    title: 'Proof of Funds vs Show Money: What\'s the Difference?',
    excerpt:
      'These two terms are often used interchangeably, but there are important nuances depending on which embassy you\'re applying to. We break it all down.',
    category: 'General Guide',
    readTime: '4 min read',
    date: 'February 28, 2024',
    featured: false,
  },
  {
    slug: 'uk-visa-financial-evidence-guide',
    title: 'UK Standard Visitor Visa: What Financial Evidence Do You Need?',
    excerpt:
      'The UK has its own visa process separate from Schengen. Here\'s exactly what UKVI requires to prove you can fund your visit and will return home.',
    category: 'UK Visa',
    readTime: '6 min read',
    date: 'February 20, 2024',
    featured: false,
  },
  {
    slug: 'how-to-avoid-show-money-rejection',
    title: '7 Show Money Mistakes That Lead to Visa Rejection (And How to Avoid Them)',
    excerpt:
      'These common financial documentation mistakes are costing Filipino applicants their visa approvals. Learn what they are and how to avoid each one.',
    category: 'General Guide',
    readTime: '9 min read',
    date: 'February 14, 2024',
    featured: true,
  },
]

const categoryColors: Record<string, string> = {
  'Schengen Visa': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  'US Visa': 'text-red-400 bg-red-400/10 border-red-400/20',
  'Japan Visa': 'text-orange-400 bg-orange-400/10 border-orange-400/20',
  'General Guide': 'text-gold-400 bg-gold-400/10 border-gold-400/20',
  'UK Visa': 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
}

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured)
  const rest = blogPosts.filter((p) => !p.featured)

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-navy-gradient relative overflow-hidden">
          <div className="hero-glow w-80 h-80 bg-gold-500/10 -top-10 -right-10" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="section-badge mb-6 inline-flex">Expert Guides</span>
            <h1 className="section-title text-5xl sm:text-6xl mb-6">
              Visa Tips &{' '}
              <span className="gold-text">Show Money Guides</span>
            </h1>
            <p className="section-subtitle mx-auto text-lg">
              Practical, expert advice on financial requirements, bank statement tips, and proof-of-funds strategies for every destination.
            </p>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gold-400 font-serif mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {featured.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="glass-card-hover p-6 flex flex-col gap-4 group"
                >
                  {/* Category badge */}
                  <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[post.category] ?? 'text-gold-400 bg-gold-400/10 border-gold-400/20'}`}>
                    {post.category}
                  </span>
                  <h3 className="text-white font-bold text-lg leading-snug group-hover:text-gold-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* All Posts */}
            <h2 className="text-xl font-bold text-gold-400 font-serif mb-8">All Articles</h2>
            <div className="space-y-4">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="glass-card-hover p-6 flex flex-col sm:flex-row sm:items-center gap-4 group"
                >
                  <span className={`self-start sm:self-center shrink-0 text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[post.category] ?? 'text-gold-400 bg-gold-400/10 border-gold-400/20'}`}>
                    {post.category}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-base leading-snug group-hover:text-gold-400 transition-colors mb-1">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{post.excerpt}</p>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-1 text-xs text-slate-500 shrink-0">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <ArrowRight size={16} className="hidden sm:block text-gold-400 shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingChat />
    </>
  )
}
