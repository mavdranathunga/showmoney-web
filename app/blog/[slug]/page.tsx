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
      'Applying for a Schengen visa is a major milestone for many Filipino travelers. European embassies are strict about financial documentation, and knowing exactly how much "show money" you need — and how to present it — can make the difference between approval and rejection.',
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
      'The US B-2 tourist visa is one of the most sought-after — and most scrutinized — visas for Filipino travelers. US consular officers are trained to detect financial inconsistencies. Here\'s what actually works.',
    sections: [
      {
        heading: 'The US Embassy Doesn\'t Publish a Fixed Amount',
        body: 'Unlike Schengen, the US embassy has no published minimum "show money" requirement. What they\'re looking for is evidence that you can fund your trip, have strong economic ties to the Philippines, and have a clear reason to return home.',
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
        body: 'Property ownership, stable employment with a return work date, existing travel history, and family ties in the Philippines all contribute to a stronger overall financial profile. The bank balance alone is rarely what wins or loses a US visa.',
      },
    ],
  },
  'how-to-avoid-show-money-rejection': {
    intro:
      'After helping over 5,000 Filipino travelers with their financial documentation, we\'ve seen the same mistakes come up again and again. Here are the 7 most common errors — and exactly how to avoid each one.',
    sections: [
      {
        heading: 'Mistake 1: Temporary Fund Parking',
        body: 'Borrowing a large sum right before your application and depositing it into your account is one of the most common — and most easily detected — tactics. Embassy officers are trained to spot sudden, unexplained spikes in account balances.',
      },
      {
        heading: 'Mistake 2: Using Multiple Small Accounts Instead of One Strong Account',
        body: 'Spreading ₱200,000 across 5 accounts looks weaker than having ₱200,000 consolidated in one savings account with a consistent history. Consolidation shows financial discipline.',
      },
      {
        heading: 'Mistake 3: Not Providing Bank Certificates',
        body: 'A bank statement alone is often not enough. Most embassies want an original bank certificate (on bank letterhead, signed by a branch officer) confirming your account balance and average daily balance.',
      },
      {
        heading: 'Mistake 4: Inconsistent Financial Story',
        body: 'If your payslip shows ₱30,000/month but your bank shows ₱500,000 in savings with no clear explanation of how, that inconsistency signals a red flag. Your income, expenses, and savings should tell a coherent, believable story.',
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
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-navy-gradient relative overflow-hidden">
          <div className="hero-glow w-80 h-80 bg-gold-500/8 -top-10 right-0" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-gold-400 transition-colors text-sm mb-8">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <span className="section-badge mb-4 inline-flex">{post.category}</span>
            <h1 className="section-title text-4xl sm:text-5xl mb-6 text-balance">{post.title}</h1>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-navy-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {content ? (
              <article className="prose prose-invert prose-lg max-w-none">
                <p className="text-slate-300 text-lg leading-relaxed mb-10 border-l-4 border-gold-500 pl-5">
                  {content.intro}
                </p>
                {content.sections.map((section, idx) => (
                  <div key={idx} className="mb-10">
                    <h2 className="text-white text-2xl font-bold font-serif mb-4">{section.heading}</h2>
                    <p className="text-slate-400 leading-relaxed">{section.body}</p>
                  </div>
                ))}
              </article>
            ) : (
              <div className="glass-card p-12 text-center">
                <p className="text-slate-400">Full article content coming soon.</p>
              </div>
            )}

            {/* CTA Box */}
            <div className="mt-16 glass-card p-8 border border-gold-500/20 text-center">
              <h3 className="text-white text-xl font-bold font-serif mb-3">Ready to Get Your Documents?</h3>
              <p className="text-slate-400 text-sm mb-6">
                Send us your details and we'll have your proof-of-funds documentation ready in 24–48 hours.
              </p>
              <Link href="/contact" className="btn-primary">
                Get Started <ArrowRight size={18} />
              </Link>
            </div>

            {/* Post Navigation */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevPost && (
                <Link href={`/blog/${prevPost.slug}`} className="glass-card-hover p-5 flex flex-col gap-1">
                  <span className="text-slate-500 text-xs flex items-center gap-1"><ArrowLeft size={12} /> Previous</span>
                  <span className="text-white text-sm font-semibold line-clamp-2">{prevPost.title}</span>
                </Link>
              )}
              {nextPost && (
                <Link href={`/blog/${nextPost.slug}`} className={`glass-card-hover p-5 flex flex-col gap-1 ${!prevPost ? 'col-span-full sm:col-start-2' : ''}`}>
                  <span className="text-slate-500 text-xs flex items-center gap-1 justify-end">Next <ArrowRight size={12} /></span>
                  <span className="text-white text-sm font-semibold text-right line-clamp-2">{nextPost.title}</span>
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingChat />
    </>
  )
}
