import Link from 'next/link'
import WorkPlate, { PlateKind } from './WorkPlate'

export type CaseMeta = {
  slug: string
  plate: PlateKind
  project: string
  kind: string
  title: string
  blurb: string
  facts: [string, string][]
  cat: string
  catno: string
}

/** Home page card: plate on top, the finding as the headline. */
export default function CaseCard({ c }: { c: CaseMeta }) {
  return (
    <Link className="card" href={`/work/${c.slug}`}>
      <WorkPlate kind={c.plate} catno={c.catno} />
      <div className="card-body">
        <p className="card-meta"><span className="cm-proj">{c.project}</span><span className="cm-kind">{c.kind}</span></p>
        <h3>{c.title}</h3>
        <p className="card-out">{c.blurb}</p>
        <span className="card-go">Read the case study</span>
      </div>
    </Link>
  )
}

/** Work page row: the same plate, plus the facts a recruiter scans for. */
export function CaseRow({ c }: { c: CaseMeta }) {
  return (
    <li id={c.slug}>
      <Link className="crow" href={`/work/${c.slug}`}>
        <WorkPlate kind={c.plate} catno={c.catno} />
        <div className="card-body">
          <p className="card-meta"><span className="cm-proj">{c.project}</span><span className="cm-kind">{c.kind}</span></p>
          <h3>{c.title}</h3>
          <p className="card-out">{c.blurb}</p>
          <dl className="crow-facts">
            {c.facts.map(([dt, dd]) => (
              <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
            ))}
          </dl>
          <span className="card-go">Read the case study</span>
        </div>
      </Link>
    </li>
  )
}

export const CASES: CaseMeta[] = [
  {
    slug: 'driving-alert-salience',
    catno: 'ISE 298',
    plate: 'thesis',
    project: 'Driving-alert study',
    kind: 'Master’s thesis',
    title: 'A well-placed visual alert beat the beep, at 591 ms.',
    blurb: 'A 24-person study on whether an in-car alert’s salience or its modality matters more for how fast drivers react.',
    facts: [['Role', 'Sole researcher'], ['Design', '2×2 within-subjects, 24 people'], ['When', 'May 2026']],
    cat: 'research',
  },
  {
    slug: 'path-of-exile-2-evaluation',
    catno: 'PSYCH 273',
    plate: 'poe2',
    project: 'Path of Exile 2',
    kind: 'Heuristic evaluation',
    title: 'No player type scored above a B-.',
    blurb: 'A heuristic evaluation of Path of Exile 2, backed by 183 player responses, on a brilliant game buried under its own cognitive load.',
    facts: [['Role', 'Sole researcher'], ['Sample', '183 players, 20+ hours'], ['When', 'Fall 2025']],
    cat: 'research design',
  },
  {
    slug: 'partiful-usability',
    catno: 'ISE 215',
    plate: 'partiful',
    project: 'Partiful',
    kind: 'Team usability study',
    title: 'No one could tell if cancelling notified guests.',
    blurb: 'A five-person usability study of Partiful: a playful party app people enjoyed but couldn’t quite trust, plus the fixes.',
    facts: [['Role', 'UX researcher, team of five'], ['Sample', '5 participants, 4 tasks'], ['When', 'Spring 2025']],
    cat: 'research design',
  },
  {
    slug: 'dashboard-usability',
    catno: 'ISE 210',
    plate: 'dash',
    project: 'Dashboard study',
    kind: 'Survey research',
    title: 'The all-button dashboards scored lowest.',
    blurb: 'A 67-driver survey on how people rate analog, hybrid, and digital car dashboards, as automakers trade knobs for touchscreens.',
    facts: [['Role', 'Co-researcher'], ['Sample', '67 drivers, 3 dashboard types'], ['When', 'Fall 2024']],
    cat: 'research',
  },
  {
    slug: 'craft-and-cup',
    catno: 'Solo build',
    plate: 'craft',
    project: 'Craft & Cup',
    kind: 'Product design and build',
    title: 'Just write what you taste.',
    blurb: 'An AI coffee-journaling app I designed, built, and shipped solo, turning plain-language tasting notes into a structured flavor wheel.',
    facts: [['Role', 'Designer and developer, solo'], ['Stack', 'Next.js, Supabase, Claude'], ['Year', '2026']],
    cat: 'design',
  },
]
