import type { Metadata } from 'next'
import './globals.css'

import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  metadataBase: new URL('https://showmoney-web.vercel.app'),
  title: {
    default: 'ShowMoney Pro — Trusted Proof of Funds Agency for Visa Applications',
    template: '%s | ShowMoney Pro',
  },
  description:
    'ShowMoney Pro helps Sri Lankan travelers get trusted proof-of-funds documentation for visa applications — Schengen, US, UK, Japan, Australia & more. Fast, secure, and reliable.',
  keywords: [
    'show money sri lanka',
    'bank statement for visa sri lanka',
    'proof of funds agency',
    'visa documentation services colombo',
    'visa funds sri lanka',
    'bank certificate for visa',
    'tourist visa requirements sri lanka',
  ],
  authors: [{ name: 'ShowMoney Pro' }],
  creator: 'ShowMoney Pro',
  openGraph: {
    title: 'ShowMoney Pro — Trusted Proof of Funds Agency',
    description:
      'Fast, secure proof-of-funds documentation for all visa types. Trusted by thousands of Sri Lankan travelers.',
    url: 'https://showmoneypro.com',
    siteName: 'ShowMoney Pro',
    locale: 'en_LK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShowMoney Pro — Trusted Proof of Funds Agency',
    description:
      'Fast, secure proof-of-funds documentation for all visa types. Trusted by thousands of Sri Lankan travelers.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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
              '@type': 'LocalBusiness',
              name: 'ShowMoney Pro',
              image: 'https://showmoneypro.com/og-image.png',
              '@id': 'https://showmoneypro.com',
              url: 'https://showmoneypro.com',
              telephone: '+94702345678',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Colombo',
                addressCountry: 'LK',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 6.9271,
                longitude: 79.8612,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
                opens: '08:00',
                closes: '20:00',
              },
              sameAs: [
                'https://www.facebook.com/showmoneypro',
                'https://www.instagram.com/showmoneypro',
              ],
              description:
                'Trusted proof-of-funds agency helping Sri Lankan travelers with visa documentation.',
              areaServed: 'LK',
              knowsAbout: [
                'Visa Financial Documentation',
                'Proof of Funds',
                'Bank Statements',
              ],
              availableLanguage: ['English', 'Sinhala', 'Tamil'],
            }),
          }}
        />
      </head>
      <body className="font-inter" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
