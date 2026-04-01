import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomainhere.com'),
  title: {
    default: 'ShowMoney Pro — Trusted Proof of Funds Agency for Visa Applications',
    template: '%s | ShowMoney Pro',
  },
  description:
    'ShowMoney Pro helps Filipino travelers get trusted proof-of-funds documentation for visa applications — Schengen, US, UK, Japan, Australia & more. Fast, secure, and reliable.',
  keywords: [
    'show money philippines',
    'proof of funds visa',
    'show money for schengen visa',
    'show money for us visa',
    'bank statement for visa',
    'visa funds philippines',
    'proof of financial capacity',
    'tourist visa requirements philippines',
  ],
  authors: [{ name: 'ShowMoney Pro' }],
  creator: 'ShowMoney Pro',
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://yourdomainhere.com',
    siteName: 'ShowMoney Pro',
    title: 'ShowMoney Pro — Trusted Proof of Funds Agency',
    description:
      'Fast, secure proof-of-funds documentation for all visa types. Trusted by thousands of Filipino travelers.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShowMoney Pro' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShowMoney Pro — Proof of Funds Agency',
    description:
      'Fast, secure proof-of-funds documentation for all visa types.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* JSON-LD LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FinancialService',
              name: 'ShowMoney Pro',
              description:
                'Trusted proof-of-funds agency helping Filipino travelers with visa documentation.',
              url: 'https://yourdomainhere.com',
              areaServed: 'PH',
              serviceType: 'Proof of Funds / Show Money Documentation',
              priceRange: '$$',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: ['English', 'Filipino'],
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
