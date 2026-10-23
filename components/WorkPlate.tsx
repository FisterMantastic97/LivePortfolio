import type React from 'react'
import Image from 'next/image'
import GradeStamp from './GradeStamp'
import { RoadScene, AlertGlyph } from './RoadScene'

export type PlateKind = 'craft' | 'poe2' | 'thesis' | 'partiful' | 'dash'

const ACCENT: Record<PlateKind, string> = { craft: 'soda', poe2: 'tang', thesis: 'pool', partiful: 'sun', dash: 'walnut' }

/**
 * A catalog plate: the real work, set on a colored backdrop like a product shot,
 * with the headline finding stamped on. Cards use it as decoration (alt text off);
 * case study covers use it as the lead image.
 */
export default function WorkPlate({ kind, cover = false, catno }: { kind: PlateKind; cover?: boolean; catno?: string }) {
  const alt = (text: string) => (cover ? text : '')

  return (
    <div className={`wp wp-${kind} wp-${ACCENT[kind]}${cover ? ' wp-cover' : ''}`} aria-hidden={cover ? undefined : true}>
      {catno && <span className="wp-no">No. {catno}</span>}
      {cover && CALLOUTS[kind]?.map((c) => <Callout key={c.t} {...c} />)}
      {kind === 'poe2' && (
        <>
          <span className="wp-print wp-back">
            <Image src="/poe2/essence-stash.jpg" width={849} height={990} sizes="(min-width: 1000px) 250px, 30vw" priority={cover}
              alt={alt('A Path of Exile 2 stash tab packed with near-identical crystal icons and no labels.')} />
          </span>
          <span className="wp-print wp-front">
            <Image src="/poe2/boss-fight.jpg" width={1280} height={720} sizes="(min-width: 1000px) 520px, 57vw" priority={cover}
              alt={alt('A Path of Exile 2 boss fight where spell effects hide both the boss and the player.')} />
          </span>
          <span className="wp-stamp"><GradeStamp grade="B-" label="Best grade" small={!cover} /></span>
        </>
      )}

      {kind === 'partiful' && (
        <>
          <span className="wp-phone wp-p1">
            <Image src="/partiful/rsvp-comment.jpg" width={516} height={1080} sizes="(min-width: 1000px) 290px, 37vw" priority={cover}
              alt={alt('Partiful RSVP sheet with a comment typed into the optional comment box.')} />
          </span>
          <span className="wp-phone wp-p2">
            <Image src="/partiful/rsvp-feed.jpg" width={499} height={1080} sizes="(min-width: 1000px) 290px, 37vw" priority={cover}
              alt={alt('The event page activity feed showing that comment to every guest.')} />
          </span>
          <span className="wp-stamp"><GradeStamp grade="C-" label="Overall" small={!cover} /></span>
        </>
      )}

      {kind === 'thesis' && (
        <>
          <span className="wp-print wp-road" role={cover ? 'img' : undefined}
            aria-label={cover ? 'Illustration of a driver’s view of the road with a bright warning alert at the center.' : undefined}>
            <RoadScene>
              <span className="alert on static" data-sal="high"><AlertGlyph /></span>
            </RoadScene>
          </span>
          <svg className="wp-tag" viewBox="0 0 132 66" role={cover ? 'img' : undefined}
            aria-label={cover ? '591 milliseconds, the fastest mean reaction time' : undefined} aria-hidden={cover ? undefined : true}>
            <path d="M24 3 H126 a3 3 0 0 1 3 3 V60 a3 3 0 0 1 -3 3 H24 L3 33 Z" fill="#F2EBDA" stroke="#2D1F15" strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="22" cy="33" r="5" fill="#2DA8A8" stroke="#2D1F15" strokeWidth="2" />
            <text x="78" y="36" textAnchor="middle" fontFamily="'Bowlby One',sans-serif" fontSize="25" fill="#2D1F15">591</text>
            <text x="78" y="53" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontWeight="700" fontSize="11" fill="#2D1F15">ms, fastest</text>
          </svg>
        </>
      )}

      {kind === 'dash' && (
        <svg className="wp-lineup" viewBox="14 30 292 128" preserveAspectRatio="xMidYMid meet"
          role={cover ? 'img' : undefined} aria-hidden={cover ? undefined : true}
          aria-label={cover ? 'Three dashboard styles side by side with their average usability scores: analog 82.2, hybrid 86.9, digital 90.0.' : undefined}>
          <DashCard x={24} r={-3} label="Analog" score="82.2" low>
            <Gauge cx={25} cy={27} a={-40} />
            <Gauge cx={55} cy={27} a={25} />
            <circle cx="17" cy="52" r="4.5" fill="#7F6541" stroke="#F2EBDA" strokeWidth="1.2" />
            <circle cx="29" cy="52" r="4.5" fill="#7F6541" stroke="#F2EBDA" strokeWidth="1.2" />
            {[39, 47, 55, 63].map((bx) => <rect key={bx} x={bx} y="48.5" width="6" height="7" rx="1" fill="#F2EBDA" />)}
          </DashCard>
          <DashCard x={120} r={1.5} label="Hybrid" score="86.9">
            <Gauge cx={22} cy={28} a={10} />
            <rect x="38" y="13" width="31" height="28" rx="2" fill="#2DA8A8" />
            <rect x="42" y="18" width="14" height="4" rx="1" fill="#F2EBDA" />
            <rect x="42" y="26" width="23" height="3" rx="1" fill="#F2EBDA" opacity="0.7" />
            <rect x="42" y="32" width="18" height="3" rx="1" fill="#F2EBDA" opacity="0.7" />
            <circle cx="18" cy="53" r="4.5" fill="#7F6541" stroke="#F2EBDA" strokeWidth="1.2" />
            <circle cx="30" cy="53" r="4.5" fill="#7F6541" stroke="#F2EBDA" strokeWidth="1.2" />
            <rect x="41" y="49.5" width="27" height="7" rx="1" fill="#F2EBDA" />
          </DashCard>
          <DashCard x={216} r={-2} label="Digital" score="90.0">
            <rect x="9" y="10" width="62" height="48" rx="3" fill="#2DA8A8" />
            <text x="26" y="40" textAnchor="middle" fontFamily="'Bowlby One',sans-serif" fontSize="15" fill="#F2EBDA">65</text>
            <text x="26" y="49" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontWeight="700" fontSize="5.5" fill="#F2EBDA">mph</text>
            {[16, 28, 40].map((ty) => <rect key={ty} x="45" y={ty} width="20" height="8" rx="1.5" fill="#F2EBDA" opacity="0.9" />)}
          </DashCard>
        </svg>
      )}

      {kind === 'craft' && (
        <>
          <span className="wp-note">
            <span className="wp-note-k">Tasting note</span>
            <span className="wp-note-t">Bright, a little jammy, cocoa on the finish.</span>
          </span>
          <svg className="wp-arrow" viewBox="0 0 80 40" aria-hidden="true">
            <path d="M4 30 C 26 4, 52 4, 70 20" fill="none" stroke="#2D1F15" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" />
            <path d="M62 12 L72 22 L58 24" fill="none" stroke="#2D1F15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <FlavorWheel />
          <svg className="wp-burst" viewBox="0 0 100 100" aria-hidden="true">
            <polygon points="50,4 58.3,19.1 73,10.2 72.6,27.4 89.8,27 80.9,41.7 96,50 80.9,58.3 89.8,73 72.6,72.6 73,89.8 58.3,80.9 50,96 41.7,80.9 27,89.8 27.4,72.6 10.2,73 19.1,58.3 4,50 19.1,41.7 10.2,27 27.4,27.4 27,10.2 41.7,19.1" fill="#E85D3F" stroke="#2D1F15" strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="50" cy="50" r="30" fill="#F2EBDA" stroke="#2D1F15" strokeWidth="1.5" />
            <text x="50" y="44" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontWeight="700" fontSize="9" letterSpacing="1.5" fill="#2D1F15">NOW</text>
            <text x="50" y="66" textAnchor="middle" fontFamily="'Bowlby One',sans-serif" fontSize="17" fill="#2D1F15">LIVE</text>
          </svg>
        </>
      )}
    </div>
  )
}

type Call = { t: string; x: number; y: number; w: number; ax: number; ay: number; aw: number; flip?: boolean; up?: boolean }

// Catalog-style callouts on the case study covers, placed in % of the plate. Each points at the problem in the shot.
const CALLOUTS: Partial<Record<PlateKind, Call[]>> = {
  poe2: [
    { t: 'Where\u2019s the boss?', x: 5, y: 5, w: 22, ax: 17, ay: 11, aw: 11 },
    { t: 'Which crystal is which?', x: 36, y: 6, w: 26, ax: 55, ay: 9, aw: 10 },
  ],
  partiful: [
    { t: 'Feels private\u2026', x: 4, y: 24, w: 20, ax: 16, ay: 32, aw: 12 },
    { t: '\u2026posts to everyone.', x: 78, y: 50, w: 20, ax: 70, ay: 61, aw: 10, flip: true },
  ],
  thesis: [
    { t: 'Big, bright, and dead center.', x: 3, y: 10, w: 15, ax: 13, ay: 25, aw: 28 },
  ],
  craft: [
    { t: 'Plain words in\u2026', x: 6, y: 5, w: 26, ax: 20, ay: 9, aw: 9 },
    { t: '\u2026a flavor wheel out.', x: 33, y: 84, w: 28, ax: 52, ay: 77, aw: 9, up: true },
  ],
  dash: [
    { t: 'Lowest score', x: 9, y: 3, w: 22, ax: 22, ay: 4, aw: 8 },
    { t: 'Only four drivers', x: 64, y: 3, w: 26, ax: 75, ay: 5, aw: 8, flip: true },
  ],
}

/** A handwritten catalog callout with a curved arrow. */
function Callout({ t, x, y, w, ax, ay, aw, flip, up }: Call) {
  return (
    <>
      <span className="wp-call" style={{ left: `${x}%`, top: `${y}%`, width: `${w}%` }}>{t}</span>
      <svg className={`wp-arrow-c${flip ? ' fx' : ''}${up ? ' fy' : ''}`} viewBox="0 0 120 80" aria-hidden="true"
        style={{ left: `${ax}%`, top: `${ay}%`, width: `${aw}%` }}>
        <path d="M6 8 C 40 4, 80 20, 104 64" fill="none" strokeWidth="3" strokeLinecap="round" />
        <path d="M104 50 L104 64 L92 56" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  )
}

/** One dashboard in the lineup: a cream card with a dark dash face, a name, and a score tag. */
function DashCard({ x, r, label, score, low = false, children }: { x: number; r: number; label: string; score: string; low?: boolean; children: React.ReactNode }) {
  return (
    <g transform={`translate(${x} 40) rotate(${r} 40 50)`}>
      <rect x="3" y="4" width="80" height="100" fill="#2D1F15" />
      <rect x="0" y="0" width="80" height="100" fill="#F2EBDA" stroke="#2D1F15" strokeWidth="2" />
      <rect x="6" y="6" width="68" height="58" rx="3" fill="#2D1F15" />
      <g transform="translate(6 6) scale(0.85)">{children}</g>
      <text x="8" y="80" fontFamily="'Space Grotesk',sans-serif" fontWeight="700" fontSize="11" fill="#2D1F15">{label}</text>
      <g transform="translate(40 84) rotate(-6)">
        <path d="M8 0 H44 a2 2 0 0 1 2 2 V20 a2 2 0 0 1 -2 2 H8 L0 11 Z" fill={low ? '#E85D3F' : '#F2EBDA'} stroke="#2D1F15" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="8" cy="11" r="2" fill="#2D1F15" />
        <text x="28" y="16" textAnchor="middle" fontFamily="'Bowlby One',sans-serif" fontSize="11" fill="#2D1F15">{score}</text>
      </g>
    </g>
  )
}

/** A round analog gauge with a needle at angle a (degrees from straight up). */
function Gauge({ cx, cy, a }: { cx: number; cy: number; a: number }) {
  const rad = ((a - 90) * Math.PI) / 180
  return (
    <g>
      <circle cx={cx} cy={cy} r="13" fill="#F2EBDA" />
      <path d={`M${cx - 9.2} ${cy + 9.2} A13 13 0 1 1 ${cx + 9.2} ${cy + 9.2}`} transform={`translate(${0} ${0})`} fill="none" stroke="#E5B033" strokeWidth="2.5" strokeDasharray="1.5 3" />
      <line x1={cx} y1={cy} x2={(cx + 10 * Math.cos(rad)).toFixed(2)} y2={(cy + 10 * Math.sin(rad)).toFixed(2)} stroke="#E85D3F" strokeWidth="2" strokeLinecap="round" />
      <circle cx={cx} cy={cy} r="2.2" fill="#2D1F15" />
    </g>
  )
}

/** A simplified flavor wheel. Two wedges light up, the way a tasting note maps onto it. */
function FlavorWheel() {
  const n = 9
  const lit: Record<number, string> = { 0: '#E85D3F', 5: '#7F6541' }
  const R = 46, r = 15, c = 50
  const pt = (rad: number, a: number) => `${(c + rad * Math.cos(a)).toFixed(2)} ${(c + rad * Math.sin(a)).toFixed(2)}`
  const wedges = Array.from({ length: n }, (_, i) => {
    const a0 = (i / n) * Math.PI * 2 - Math.PI / 2
    const a1 = ((i + 1) / n) * Math.PI * 2 - Math.PI / 2
    return `M${pt(r, a0)} L${pt(R, a0)} A${R} ${R} 0 0 1 ${pt(R, a1)} L${pt(r, a1)} A${r} ${r} 0 0 0 ${pt(r, a0)} Z`
  })
  return (
    <svg className="wp-wheel" viewBox="0 0 100 100" aria-hidden="true">
      {wedges.map((d, i) => (
        <path key={i} d={d} fill={lit[i] ?? '#F2EBDA'} stroke="#2D1F15" strokeWidth="1.6" strokeLinejoin="round" />
      ))}
      <circle cx={c} cy={c} r={r - 5} fill="#2D1F15" />
    </svg>
  )
}
