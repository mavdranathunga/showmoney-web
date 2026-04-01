import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingChat from '@/components/FloatingChat'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import { blogPosts } from '../page'

// Blog content map — each slug maps to html-like content
const blogContent: Record<string, { intro: string; sections: { heading: string; body: string }[] }> = {
  'how-much-show-money-schengen-visa': {
    intro:
      'Applying for a Schengen visa is a major milestone for many Sri Lankan travelers. European embassies are strict about financial documentation, and knowing exactly how much "show money" you need — and how to present it — can make the difference between approval and rejection.',
    sections: [
      {
        heading: 'The Official €100 Per Day Rule',
        body: 'Most Schengen consulates follow the general guideline of €100 per day of stay as the minimum financial requirement. For a 30-day trip, that\'s €3,000. However, this is a floor, not a ceiling — embassies want to see that you have significantly more than just the trip costs available.',
      },
      {
        heading: 'Recommended Bank Balance',
        body: 'Our experience shows that applicants with at least €5,000–€8,000 in their accounts (maintained consistently for 3–6 months) have significantly higher approval rates. A high balance that has been "parked" recently is often flagged and may hurt your application.',
      },
      {
        heading: 'Consistency Matters More Than the Amount',
        body: 'Schengen embassies, particularly France and Germany, look at the trajectory of your balance. A savings account that shows gradual accumulation is far more convincing than one with a sudden large deposit right before the application date.',
      },
      {
        heading: 'What Documents to Prepare',
        body: 'You\'ll need your original bank statements (not screenshots) covering the last 3–6 months, a bank certificate, and in many cases a proof-of-funds letter. Payslips or business income documents also significantly strengthen your financial package.',
      },
      {
        heading: 'How ShowMoney Pro Can Help',
        body: 'We review your complete financial picture, prepare a professional proof-of-funds letter aligned with the consulate you\'re applying to, and advise you on how to present your bank history for maximum impact. Contact us today to get started.',
      },
    ],
  },
  'us-tourist-visa-bank-statement-tips': {
    intro:
      'The US B-2 tourist visa is one of the most sought-after — and most scrutinized — visas for Sri Lankan travelers. US consular officers are trained to detect financial inconsistencies. Here\'s what actually works.',
    sections: [
      {
        heading: 'The US Embassy Doesn\'t Publish a Fixed Amount',
        body: 'Unlike Schengen, the US embassy has no published minimum "show money" requirement. What they\'re looking for is evidence that you can fund your trip, have strong economic ties to Sri Lanka, and have a clear reason to return home.',
      },
      {
        heading: 'What Amount Is "Enough"?',
        body: 'For a 2–4 week US trip, we generally recommend demonstrating a balance of at least $5,000–$10,000 USD equivalent. But the source and consistency of those funds matters as much as the amount.',
      },
      {
        heading: '5 Bank Statement Red Flags to Avoid',
        body: '1) Sudden large deposits right before the application. 2) Account balance that drops to near zero regularly. 3) No clear income source visible in transactions. 4) Multiple accounts with small balances instead of one strong primary account. 5) Third-party deposits with unclear origins.',
      },
      {
        heading: 'Strengthen Your Application Beyond The Bank Balance',
        body: 'Property ownership, stable employment with a return work date, existing travel history, and family ties in Sri Lanka all contribute to a stronger overall financial profile. The bank balance alone is rarely what wins or loses a US visa.',
      },
    ],
  },
  'how-to-avoid-show-money-rejection': {
    intro:
      'After helping over 5,000 Sri Lankan travelers with their financial documentation, we\'ve seen the same mistakes come up again and again. Here are the 7 most common errors — and exactly how to avoid each one.',
    sections: [
      {
        heading: 'Mistake 1: Temporary Fund Parking',
        body: 'Borrowing a large sum right before your application and depositing it into your account is one of the most common — and most easily detected — tactics. Embassy officers are trained to spot sudden, unexplained spikes in account balances.',
      },
      {
        heading: 'Mistake 2: Using Multiple Small Accounts Instead of One Strong Account',
        body: 'Spreading Rs. 1,000,000 across 5 accounts looks weaker than having Rs. 1,000,000 consolidated in one savings account with a consistent history. Consolidation shows financial discipline.',
      },
      {
        heading: 'Mistake 3: Not Providing Bank Certificates',
        body: 'A bank statement alone is often not enough. Most embassies want an original bank certificate (on bank letterhead, signed by a branch officer) confirming your account balance and average daily balance.',
      },
      {
        heading: 'Mistake 4: Inconsistent Financial Story',
        body: 'If your payslip shows Rs. 100,000/month but your bank shows Rs. 3,000,000 in savings with no clear explanation of how, that inconsistency signals a red flag. Your income, expenses, and savings should tell a coherent, believable story.',
      },
      {
        heading: 'Mistake 5: Submitting Screenshot Bank Statements',
        body: 'Never submit screenshots of your online banking app. Always use official printed statements from your bank branch, or official PDF exports through your bank\'s authenticated system.',
      },
      {
        heading: 'Mistake 6: Missing the 3–6 Month Requirement',
        body: 'Most embassies want to see 3–6 months of bank history, not just your current balance. Submitting only the most recent month\'s statement is a common mistake that can lead to rejection.',
      },
      {
        heading: 'Mistake 7: No Proof-of-Funds Letter',
        body: 'For many visa types, a standalone bank statement isn\'t enough. A professional proof-of-funds letter that contextualizes your financial capacity in embassy-friendly language can be the deciding factor.',
      },
    ],
  },
}

// Update the keys for Japan if changed in the list
blogContent['japan-visa-financial-requirements-sri-lanka'] = {
  intro: 'Japan is a dream destination for many Sri Lankans. Here is how to prepare your funds.',
  sections: [
    { heading: 'Fixed Deposits vs Savings', body: 'Sri Lankan banks often offer better FD rates.' },
    { heading: 'Embassy of Japan in Colombo', body: 'They require original bank certificates.' }
  ]
}

// Generate static params for all blog slugs
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const content = blogContent[params.slug]
  const currentIdx = blogPosts.findIndex((p) => p.slug === params.slug)
  const prevPost = blogPosts[currentIdx - 1]
  const nextPost = blogPosts[currentIdx + 1]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-theme-gradient relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gold-500 text-sm font-bold mb-8 hover:gap-3 transition-all">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-6">
              <span className="section-badge font-bold uppercase tracking-wider">{post.category}</span>
              <span className="text-muted text-sm font-bold">{post.date} · {post.readTime}</span>
            </div>
            <h1 className="section-title text-4xl sm:text-5xl lg:text-5xl mb-8">
              {post.title}
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {content ? (
              <article className="prose prose-slate dark:prose-invert prose-lg max-w-none">
                <p className="text-foreground/80 text-xl font-medium leading-relaxed mb-10 border-l-4 border-gold-500 pl-5 italic">
                  {content.intro}
                </p>
                {content.sections.map((section, idx) => (
                  <div key={idx} className="mb-10">
                    <h2 className="text-foreground text-2xl font-bold font-serif mb-4">{section.heading}</h2>
                    <p className="text-muted font-medium leading-relaxed transition-colors duration-300">{section.body}</p>
                  </div>
                ))}
              </article>
            ) : (
              <div className="glass-card p-12 text-center border-card-border">
                <p className="text-muted font-bold">Full article content coming soon.</p>
              </div>
            )}

            {/* CTA Box */}
            <div className="mt-16 glass-card p-8 border border-gold-500/20 bg-gold-500/5 text-center shadow-lg transition-transform hover:scale-[1.01]">
              <h3 className="text-foreground text-xl font-bold font-serif mb-3">Ready to Get Your Documents?</h3>
              <p className="text-muted text-sm mb-6 font-medium">
                Send us your details and we'll have your proof-of-funds documentation ready in 24–48 hours.
              </p>
              <Link href="/contact" className="btn-primary">
                Get Started <ArrowRight size={18} />
              </Link>
            </div>

            {/* Post Navigation */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevPost && (
                <Link href={`/blog/${prevPost.slug}`} className="glass-card-hover p-5 flex flex-col gap-1 border-card-border group">
                  <span className="text-muted text-xs flex items-center gap-1 font-bold uppercase"><ArrowLeft size={12} /> Previous</span>
                  <span className="text-foreground text-sm font-bold line-clamp-2 group-hover:text-gold-500 transition-colors uppercase tracking-tight">{prevPost.title}</span>
                </Link>
              )}
              {nextPost && (
                <Link href={`/blog/${nextPost.slug}`} className={`glass-card-hover p-5 flex flex-col gap-1 border-card-border group ${!prevPost ? 'col-span-full sm:col-start-2' : ''}`}>
                  <span className="text-muted text-xs flex items-center gap-1 justify-end font-bold uppercase">Next <ArrowRight size={12} /></span>
                  <span className="text-foreground text-sm font-bold text-right line-clamp-2 group-hover:text-gold-500 transition-colors uppercase tracking-tight">{nextPost.title}</span>
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingChat />
    </div>
  )
}
