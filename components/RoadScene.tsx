import { ReactNode } from 'react'

/** How many lane dashes travel down the road at once when it's moving. */
const LANE = 6

/**
 * Flat retro road, seen from the driver's seat. Children render on top of it.
 * With `moving`, the lane dashes and roadside posts drive toward the viewer. Each one is drawn once,
 * close up, and scaled about the vanishing point, which is how ground-plane objects shrink with distance.
 * The parent pauses the animation by leaving off `.is-running`.
 */
export function RoadScene({ children, className = '', moving = false }: { children?: ReactNode; className?: string; moving?: boolean }) {
  return (
    <div className={`road ${className}`}>
      <svg className="road-svg" viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="320" height="180" fill="#F2EBDA" />
        <circle cx="252" cy="58" r="20" fill="#E5B033" />
        <g stroke="#F2EBDA" strokeWidth="2.4">
          <line x1="226" y1="62" x2="278" y2="62" />
          <line x1="226" y1="69" x2="278" y2="69" />
        </g>
        <path d="M0 94 Q40 70 92 88 T190 82 T320 90 V100 H0Z" fill="#2DA8A8" opacity="0.45" />
        <rect y="94" width="320" height="86" fill="#8B6F47" opacity="0.28" />
        <polygon points="146,94 174,94 312,180 8,180" fill="#2D1F15" />
        {moving ? (
          <g className="rm">
            {Array.from({ length: LANE }, (_, i) => (
              <g key={i} className="rm-item" style={{ animationDelay: `${(-i * 3) / LANE}s` }}>
                <polygon points="157,146 163,146 164.6,166 155.4,166" fill="#F2EBDA" />
                {i % 2 === 0
                  ? <g><rect x="30" y="140" width="3.6" height="16" fill="#2D1F15" /><rect x="30" y="140" width="3.6" height="4" fill="#E85D3F" /></g>
                  : <g><rect x="286.4" y="140" width="3.6" height="16" fill="#2D1F15" /><rect x="286.4" y="140" width="3.6" height="4" fill="#E85D3F" /></g>}
              </g>
            ))}
          </g>
        ) : (
          <g fill="#F2EBDA">
            <polygon points="159.3,100 160.7,100 161.2,108 158.8,108" />
            <polygon points="158.4,118 161.6,118 162.6,132 157.4,132" />
            <polygon points="157,146 163,146 164.6,166 155.4,166" />
          </g>
        )}
        <g stroke="#E5B033" strokeWidth="1.6">
          <line x1="149" y1="94" x2="22" y2="180" />
          <line x1="171" y1="94" x2="298" y2="180" />
        </g>
      </svg>
      {children}
    </div>
  )
}

/** The warning glyph used for both salience levels. CSS sets size and color. */
export function AlertGlyph() {
  return (
    <svg viewBox="0 0 40 36" aria-hidden="true">
      <path className="ag-tri" d="M20 2 L38 34 H2 Z" strokeLinejoin="round" />
      <rect className="ag-mark" x="18.2" y="12" width="3.6" height="12" rx="1.2" />
      <circle className="ag-mark" cx="20" cy="28.6" r="2.1" />
    </svg>
  )
}

export type AlertKind = 'left' | 'straight' | 'right' | 'msg'

/** The study's alert types: three navigation cues and an incoming message. CSS sets size and color. */
export function NavGlyph({ kind }: { kind: AlertKind }) {
  if (kind === 'msg') {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true" data-g="msg">
        <path className="ag-tri" d="M7 7 H33 a4 4 0 0 1 4 4 V25 a4 4 0 0 1 -4 4 H19 L11 35.5 V29 H7 a4 4 0 0 1 -4 -4 V11 a4 4 0 0 1 4 -4 Z" strokeLinejoin="round" />
        <circle className="ag-dot" cx="12.5" cy="18" r="2.6" />
        <circle className="ag-dot" cx="20" cy="18" r="2.6" />
        <circle className="ag-dot" cx="27.5" cy="18" r="2.6" />
      </svg>
    )
  }
  const mirror = kind === 'right' ? 'translate(40 0) scale(-1 1)' : undefined
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" data-g={kind}>
      <rect className="ag-tri" x="2.5" y="2.5" width="35" height="35" rx="8" />
      {kind === 'straight' ? (
        <path className="ag-line" d="M20 31 V10 M12.5 17 L20 9.5 L27.5 17" />
      ) : (
        <path className="ag-line" transform={mirror} d="M25 31 V22 a7 7 0 0 0 -7 -7 H10.5 M16.5 9 L10 15 L16.5 21" />
      )}
    </svg>
  )
}

/** Static side-by-side of the two salience levels. */
export function AlertIllustration() {
  return (
    <figure className="figure alert-fig">
      <div className="fig-head">
        <p className="fig-k">★ Fig 01 · Stimulus</p>
        <p className="fig-t">Same alert, two salience levels</p>
      </div>
      <div className="alert-pair">
        <div>
          <RoadScene>
            <span className="alert on static" data-sal="high"><AlertGlyph /></span>
          </RoadScene>
          <p className="alert-cap"><b>High salience.</b> Bigger, brighter, higher contrast.</p>
        </div>
        <div>
          <RoadScene>
            <span className="alert on static" data-sal="low"><AlertGlyph /></span>
          </RoadScene>
          <p className="alert-cap"><b>Low salience.</b> Smaller, dimmer, blends in.</p>
        </div>
      </div>
      <p className="fig-note">Illustration of the manipulation, not the original study stimuli. Both alerts sit at the center of the scene, where the driver is already looking.</p>
    </figure>
  )
}
