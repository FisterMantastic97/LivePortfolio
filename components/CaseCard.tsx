import Link from 'next/link'

export type CaseMeta = {
  slug: string
  accent: 'pool' | 'sun' | 'tang' | 'soda'
  type: string
  title: string
  blurb: string
  cat: string
}

export default function CaseCard({ c }: { c: CaseMeta }) {
  return (
    <Link className={`card ${c.accent}`} href={`/work/${c.slug}`}>
      <div className="bar" aria-hidden="true" />
      <div className="card-body">
        <span className="card-type">{c.type}</span>
        <h3>{c.title}</h3>
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
    blurb: 'An AI coffee-journaling app I designed, built, and shipped solo, turning plain-language tasting notes into a structured flavor wheel.',
    cat: 'design',
  },
  {
    slug: 'driving-alert-salience',
    accent: 'pool',
    type: 'Master\u2019s research \u00b7 UX research',
    title: 'When does a visual alert beat a beep?',
    blurb: 'A 24-person study on whether an in-car alert\u2019s salience or its modality matters more for how fast drivers react.',
    cat: 'research',
  },
  {
    slug: 'partiful-usability',
    accent: 'sun',
    type: 'Team usability study \u00b7 Research + design',
    title: 'Fun to use, hard to trust.',
    blurb: 'A five-person usability study of Partiful: a playful party app people enjoyed but couldn\u2019t quite trust, plus the fixes.',
    cat: 'research design',
  },
  {
    slug: 'path-of-exile-2-evaluation',
    accent: 'tang',
    type: 'Graduate coursework \u00b7 UX design',
    title: 'When depth becomes a wall.',
    blurb: 'A heuristic evaluation of Path of Exile 2, backed by 183 player responses, on a brilliant game buried under its own cognitive load.',
    cat: 'design',
  },
]
