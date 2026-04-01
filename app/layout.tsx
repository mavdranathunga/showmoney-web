import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  title: SITE_CONFIG.metadata.title,
  description: SITE_CONFIG.metadata.description,
  keywords: SITE_CONFIG.metadata.keywords,
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    title: SITE_CONFIG.metadata.title.default,
    description: SITE_CONFIG.metadata.description,
    url: SITE_CONFIG.baseUrl,
    siteName: SITE_CONFIG.name,
    locale: 'en_LK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.metadata.title.default,
    description: SITE_CONFIG.metadata.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

import ScrollToTop from '@/components/ScrollToTop'

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
              name: SITE_CONFIG.name,
              image: `${SITE_CONFIG.baseUrl}/og-image.png`,
              '@id': SITE_CONFIG.baseUrl,
              url: SITE_CONFIG.baseUrl,
              telephone: SITE_CONFIG.contact.phone.url,
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
                SITE_CONFIG.social.facebook,
                SITE_CONFIG.social.instagram,
              ],
              description: SITE_CONFIG.metadata.description,
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
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
