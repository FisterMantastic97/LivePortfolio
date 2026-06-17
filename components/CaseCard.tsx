import Link from 'next/link'

export type CaseMeta = {
  slug: string
  accent: 'pool' | 'sun' | 'tang' | 'soda'
  type: string
  title: string
  label: string
  blurb: string
  cat: string
  badge?: string
}

export default function CaseCard({ c }: { c: CaseMeta }) {
  return (
    <Link className={`card ${c.accent}${c.badge ? ' has-burst' : ''}`} href={`/work/${c.slug}`}>
      <div className="bar" aria-hidden="true" />
      {c.badge && (
        <svg className="card-burst" viewBox="0 0 100 100" aria-hidden="true">
          <polygon points="50,4 58.3,19.1 73,10.2 72.6,27.4 89.8,27 80.9,41.7 96,50 80.9,58.3 89.8,73 72.6,72.6 73,89.8 58.3,80.9 50,96 41.7,80.9 27,89.8 27.4,72.6 10.2,73 19.1,58.3 4,50 19.1,41.7 10.2,27 27.4,27.4 27,10.2 41.7,19.1" fill="#E85D3F" stroke="#2D1F15" strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="50" cy="50" r="30" fill="#F2EBDA" stroke="#2D1F15" strokeWidth="1.5" />
          <text x="50" y="44" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontWeight="700" fontSize="9" letterSpacing="1.5" fill="#2D1F15">NOW</text>
          <text x="50" y="66" textAnchor="middle" fontFamily="'Bowlby One',sans-serif" fontSize="17" fill="#2D1F15">{c.badge}</text>
        </svg>
      )}
      <div className="card-body">
        <span className="card-type">{c.type}</span>
        <h3>{c.title}</h3>
        <p className="card-label">{c.label}</p>
        <p className="card-out">{c.blurb}</p>
        <span className="card-go">View case study <span className="arw">→</span></span>
      </div>
    </Link>
  )
}

export const CASES: CaseMeta[] = [
  {
    slug: 'craft-and-cup',
    accent: 'soda',
    type: 'Product design + build \u00b7 Shipped',
    title: 'Just write what you taste.',
    label: 'Craft & Cup, an AI coffee-journaling app',
    blurb: 'An AI coffee-journaling app I designed, built, and shipped solo, turning plain-language tasting notes into a structured flavor wheel.',
    cat: 'design',
    badge: 'LIVE',
  },
  {
    slug: 'driving-alert-salience',
    accent: 'pool',
    type: 'Master\u2019s research \u00b7 UX research',
    title: 'When does a visual alert beat a beep?',
    label: 'A driving-alert detection study',
    blurb: 'A 24-person study on whether an in-car alert\u2019s salience or its modality matters more for how fast drivers react.',
    cat: 'research',
  },
  {
    slug: 'partiful-usability',
    accent: 'sun',
    type: 'Team usability study \u00b7 Research + design',
    title: 'Fun to use, hard to trust.',
    label: 'A usability study of Partiful',
    blurb: 'A five-person usability study of Partiful: a playful party app people enjoyed but couldn\u2019t quite trust, plus the fixes.',
    cat: 'research design',
  },
  {
    slug: 'path-of-exile-2-evaluation',
    accent: 'tang',
    type: 'Graduate coursework \u00b7 UX design',
    title: 'When depth becomes a wall.',
    label: 'A heuristic evaluation of Path of Exile 2',
    blurb: 'A heuristic evaluation of Path of Exile 2, backed by 183 player responses, on a brilliant game buried under its own cognitive load.',
    cat: 'design',
  },
]
