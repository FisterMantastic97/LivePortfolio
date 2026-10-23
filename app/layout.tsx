import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://live-portfolio-snowy.vercel.app'
const DESCRIPTION =
  'UX researcher and designer. I run real studies and turn them into design decisions. Human factors, automotive UX, accessibility, and safety-critical interfaces.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Nicholas Mitchell — UX Research + Design',
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Nicholas Mitchell',
    title: 'Nicholas Mitchell — UX Research + Human Factors',
    description: DESCRIPTION,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Nicholas Mitchell, UX research and human factors. 180+ players surveyed for one study, 1,000+ trials in a single experiment, 1 app designed, built, and shipped solo.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicholas Mitchell — UX Research + Human Factors',
    description: DESCRIPTION,
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bowlby+One&family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=Yellowtail&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  )
}
