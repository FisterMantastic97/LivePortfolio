import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const SITE_URL = 'https://live-portfolio-snowy.vercel.app'
const DESCRIPTION =
  'UX researcher and designer. I run real studies and turn them into design decisions. Human factors, automotive UX, accessibility, and safety-critical interfaces.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Nicholas Mitchell | UX Research + Human Factors',
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Nicholas Mitchell',
    title: 'Nicholas Mitchell | UX Research + Human Factors',
    description: DESCRIPTION,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Nicholas Mitchell, UX research and human factors. 180+ players surveyed for one study, 1,000+ trials in a single experiment, 1 app designed, built, and shipped solo.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicholas Mitchell | UX Research + Human Factors',
    description: DESCRIPTION,
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts are self-hosted in /public/fonts. These three render above the fold on every page. */}
        <link rel="preload" href="/fonts/bowlby-one-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/space-grotesk-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/dm-sans-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
