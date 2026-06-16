import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nicholas Mitchell — UX Research + Design',
  description:
    'UX researcher and designer. I run real studies and turn them into design decisions. Human factors, automotive UX, accessibility, and safety-critical interfaces.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bowlby+One&family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap"
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
