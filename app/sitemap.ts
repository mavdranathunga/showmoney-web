import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://showmoney-web.vercel.app'

  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/how-it-works`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/visa-types`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/faq`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/privacy-policy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/terms-of-service`, priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  const blogSlugs = [
    'how-much-show-money-schengen-visa',
    'us-tourist-visa-bank-statement-tips',
    'japan-visa-financial-requirements-sri-lanka',
    'proof-of-funds-vs-show-money-difference',
    'uk-visa-financial-evidence-guide',
    'how-to-avoid-show-money-rejection',
  ]

  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  return [...staticPages, ...blogPages].map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
