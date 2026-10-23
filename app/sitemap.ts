import type { MetadataRoute } from 'next'
import { CASES } from '@/components/CaseCard'

const SITE_URL = 'https://live-portfolio-snowy.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/work', '/about', '/resume', '/accessibility']
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: 'monthly' as const, priority: p === '' ? 1 : 0.7 })),
    ...CASES.map((c) => ({ url: `${SITE_URL}/work/${c.slug}`, changeFrequency: 'monthly' as const, priority: 0.8 })),
  ]
}
