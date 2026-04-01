import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingChat from '@/components/FloatingChat'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — Visa Tips & Show Money Guides',
  description:
    'Expert advice on visa financial requirements, show money amounts, bank statement tips, and proof-of-funds strategies for Sri Lankan travelers.',
}

export const blogPosts = [
  {
    slug: 'how-much-show-money-schengen-visa',
    title: 'How Much Show Money Do You Need for a Schengen Visa in 2024?',
    excerpt:
      'The Schengen zone covers 27 European countries and has one of the most scrutinized financial requirements for Sri Lankan applicants. Here\'s the exact breakdown.',
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
    slug: 'japan-visa-financial-requirements-sri-lanka',
    title: 'Japan Visa Financial Requirements for Sri Lankans: Complete 2024 Guide',
    excerpt:
      'Japan is one of the most popular destinations for Sri Lankan tourists. But many applicants are rejected due to poorly prepared financial documents. Here\'s how to avoid that.',
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
      'These common financial documentation mistakes are costing Sri Lankan applicants their visa approvals. Learn what they are and how to avoid each one.',
    category: 'General Guide',
    readTime: '9 min read',
    date: 'February 14, 2024',
    featured: true,
  },
]

const categoryColors: Record<string, string> = {
  'Schengen Visa': 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20',
  'US Visa': 'text-red-600 dark:text-red-400 bg-red-500/10 border-red-500/20',
  'Japan Visa': 'text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/20',
  'General Guide': 'text-gold-600 dark:text-gold-400 bg-gold-500/10 border-gold-500/20',
  'UK Visa': 'text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
}

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured)
  const rest = blogPosts.filter((p) => !p.featured)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-theme-gradient relative overflow-hidden">
          <div className="hero-glow w-96 h-96 bg-gold-500/10 -top-20 -right-20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="section-badge mb-6 inline-flex">Expert Advice</span>
            <h1 className="section-title text-5xl sm:text-6xl mb-6">
              Travel <span className="gold-text">Insights</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Everything you need to know about show money, bank requirements, and visa success strategies.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold gold-text font-serif mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {featured.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="glass-card-hover p-6 flex flex-col gap-4 group border-card-border shadow-sm transition-all hover:scale-[1.01]"
                >
                  <span className={`self-start text-xs font-bold px-3 py-1 rounded-full border ${categoryColors[post.category] ?? 'text-gold-500 bg-gold-500/10 border-gold-500/20'}`}>
                    {post.category}
                  </span>
                  <h3 className="text-foreground font-bold text-lg leading-snug group-hover:text-gold-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed flex-1 font-medium">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-card-border text-xs text-muted font-bold">
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* All Posts */}
            <h2 className="text-xl font-bold gold-text font-serif mb-8 italic uppercase tracking-widest pl-4 border-l-4 border-gold-500">All Articles</h2>
            <div className="space-y-4">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="glass-card-hover p-6 flex flex-col sm:flex-row sm:items-center gap-4 group border-card-border shadow-sm"
                >
                  <span className={`self-start sm:self-center shrink-0 text-xs font-bold px-3 py-1 rounded-full border ${categoryColors[post.category] ?? 'text-gold-500 bg-gold-500/10 border-gold-500/20'}`}>
                    {post.category}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-foreground font-bold text-base leading-snug group-hover:text-gold-500 transition-colors mb-1">
                      {post.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed font-medium transition-colors duration-300">{post.excerpt}</p>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-1 text-xs text-muted font-bold shrink-0">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <ArrowRight size={16} className="hidden sm:block text-gold-500 shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingChat />
    </div>
  )
}
