import type { Metadata } from 'next'
import { CASES } from '@/components/CaseCard'

/**
 * Page metadata for a case study, with its own link-preview card.
 * The cards live in /public/og and are rendered from the same plates the site uses.
 */
export function caseMetadata(slug: string, title: string): Metadata {
  const c = CASES.find((x) => x.slug === slug)
  if (!c) throw new Error(`No case study with slug ${slug}`)
  const url = `/work/${slug}`
  const image = {
    url: `/og/${slug}.png`,
    width: 1200,
    height: 630,
    alt: `Case study by Nicholas Mitchell. ${title} ${c.title}`,
  }
  return {
    title: `${title.replace(/\.$/, '')} — Nicholas Mitchell`,
    description: c.blurb,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      siteName: 'Nicholas Mitchell',
      title,
      description: c.blurb,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: c.blurb,
      images: [image.url],
    },
  }
}
