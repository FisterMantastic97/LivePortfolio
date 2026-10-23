export function Seal({ number, sublabel, ring }: { number: string; sublabel: string; ring: string }) {
  return (
    <svg className="seal" viewBox="0 0 120 120" aria-hidden="true">
      <g fill="none" stroke="#2D1F15" strokeWidth="2">
        <circle cx="60" cy="60" r="58" />
        <circle cx="60" cy="60" r="44" />
      </g>
      <path id="seal-ring" d="M60,14 a46,46 0 1,1 -0.1,0" fill="none" />
      <text fontFamily="Space Grotesk" fontWeight="700" fontSize="10" letterSpacing="3" fill="#2D1F15">
        <textPath href="#seal-ring" startOffset="0">{ring}</textPath>
      </text>
      <text x="60" y="58" textAnchor="middle" fontFamily="Bowlby One" fontSize="22" fill="#C23617">{number}</text>
      <text x="60" y="73" textAnchor="middle" fontFamily="Space Grotesk" fontWeight="700" fontSize="8.5" letterSpacing="2" fill="#2D1F15">{sublabel}</text>
    </svg>
  )
}

export function Sputnik() {
  return (
    <svg className="hero-art" viewBox="0 0 240 240" aria-hidden="true">
      <g className="orbit" fill="none" stroke="#2D1F15" strokeWidth="1.6">
        <ellipse cx="120" cy="120" rx="104" ry="40" transform="rotate(20 120 120)" />
        <ellipse cx="120" cy="120" rx="104" ry="40" transform="rotate(80 120 120)" />
        <ellipse cx="120" cy="120" rx="104" ry="40" transform="rotate(140 120 120)" />
      </g>
      <circle cx="120" cy="120" r="30" fill="#E5B033" stroke="#2D1F15" strokeWidth="2" />
      <circle cx="120" cy="120" r="7" fill="#2D1F15" />
    </svg>
  )
}

export function AtomicDivider() {
  return (
    <div className="atomic-divider" aria-hidden="true">
      <span className="ad-line" />
      <svg className="ad-atom" viewBox="0 0 60 60" width="58" height="58">
        <g fill="none" stroke="#2D1F15" strokeWidth="1.6">
          <ellipse cx="30" cy="30" rx="22" ry="8" />
          <ellipse cx="30" cy="30" rx="22" ry="8" transform="rotate(60 30 30)" />
          <ellipse cx="30" cy="30" rx="22" ry="8" transform="rotate(120 30 30)" />
        </g>
        <circle cx="30" cy="30" r="5" fill="#E85D3F" stroke="#2D1F15" strokeWidth="1.5" />
        <circle cx="52" cy="30" r="2.6" fill="#2DA8A8" />
        <circle cx="19" cy="11" r="2.6" fill="#2DA8A8" />
        <circle cx="19" cy="49" r="2.6" fill="#2DA8A8" />
      </svg>
      <span className="ad-line" />
    </div>
  )
}

/** A four-point space-age sparkle, centered on (x, y). */
export function Sparkle({ x, y, s = 10, fill = '#2D1F15' }: { x: number; y: number; s?: number; fill?: string }) {
  const k = s * 0.18
  return (
    <path
      d={`M${x} ${y - s} Q${x + k} ${y - k} ${x + s} ${y} Q${x + k} ${y + k} ${x} ${y + s} Q${x - k} ${y + k} ${x - s} ${y} Q${x - k} ${y - k} ${x} ${y - s}Z`}
      fill={fill}
    />
  )
}

/** Sixteen-point starburst polygon points around (cx, cy). */
function burstPoints(cx: number, cy: number, ro: number, ri: number, n = 16) {
  return Array.from({ length: n * 2 }, (_, i) => {
    const r = i % 2 ? ri : ro
    const a = (i / (n * 2)) * Math.PI * 2 - Math.PI / 2
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`
  }).join(' ')
}

/**
 * The catalog cover illustration: a ringed planet, a satellite on a slow orbit,
 * sparkles, and a starburst counting the case studies inside.
 */
export function CoverArt({ count }: { count: number }) {
  return (
    <svg className="cover-art" viewBox="0 0 440 440" aria-hidden="true">
      <circle cx="220" cy="220" r="196" fill="none" stroke="#2D1F15" strokeWidth="1.6" strokeDasharray="2 9" strokeLinecap="round" />
      <g transform="rotate(-18 220 220)">
        <path d="M50 220 A170 42 0 0 1 390 220" fill="none" stroke="#2D1F15" strokeWidth="13" />
        <path d="M50 220 A170 42 0 0 1 390 220" fill="none" stroke="#2DA8A8" strokeWidth="6" />
      </g>
      <circle cx="220" cy="220" r="96" fill="#E5B033" stroke="#2D1F15" strokeWidth="3" />
      <clipPath id="cover-planet"><circle cx="220" cy="220" r="94" /></clipPath>
      <g clipPath="url(#cover-planet)">
        <path d="M110 186 Q220 160 330 186 L330 204 Q220 178 110 204Z" fill="#E85D3F" />
        <path d="M110 252 Q220 228 330 252 L330 262 Q220 238 110 262Z" fill="#E85D3F" />
        <circle cx="262" cy="282" r="12" fill="#2D1F15" opacity="0.18" />
        <circle cx="186" cy="150" r="7" fill="#2D1F15" opacity="0.18" />
        <path d="M150 140 A96 96 0 0 0 150 300" fill="none" stroke="#F2EBDA" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
      </g>
      <g transform="rotate(-18 220 220)">
        <path d="M390 220 A170 42 0 0 1 50 220" fill="none" stroke="#2D1F15" strokeWidth="13" />
        <path d="M390 220 A170 42 0 0 1 50 220" fill="none" stroke="#2DA8A8" strokeWidth="6" />
      </g>
      <g className="sat-orbit">
        <g transform="translate(220 24) rotate(28)">
          <g stroke="#2D1F15" strokeWidth="2.2" strokeLinecap="round">
            <line x1="-8" y1="6" x2="-34" y2="22" />
            <line x1="-4" y1="9" x2="-22" y2="36" />
            <line x1="8" y1="6" x2="34" y2="22" />
            <line x1="4" y1="9" x2="22" y2="36" />
          </g>
          <circle cx="0" cy="0" r="14" fill="#E85D3F" stroke="#2D1F15" strokeWidth="2.5" />
          <path d="M-7 -6 A9 9 0 0 1 3 -10" fill="none" stroke="#F2EBDA" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </g>
      <Sparkle x={70} y={88} s={16} fill="#2DA8A8" />
      <Sparkle x={388} y={70} s={11} fill="#2D1F15" />
      <Sparkle x={404} y={330} s={17} fill="#E85D3F" />
      <Sparkle x={112} y={392} s={9} fill="#2DA8A8" />
      <Sparkle x={330} y={112} s={7} fill="#E85D3F" />
      {[[40, 230], [140, 40], [300, 410], [420, 200], [360, 380]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2.6" fill="#2D1F15" />
      ))}
      <g transform="translate(72 374) rotate(-10)">
        <polygon points={burstPoints(0, 0, 66, 52)} fill="#E85D3F" stroke="#2D1F15" strokeWidth="2.5" strokeLinejoin="round" />
        <circle r="44" fill="#F2EBDA" stroke="#2D1F15" strokeWidth="1.8" />
        <text y="-6" textAnchor="middle" fontFamily="'Bowlby One',sans-serif" fontSize="30" fill="#2D1F15">{count}</text>
        <text y="10" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontWeight="700" fontSize="9.5" letterSpacing="1" fill="#2D1F15">CASE STUDIES</text>
        <text y="30" textAnchor="middle" fontFamily="'Yellowtail',cursive" fontSize="19" fill="#C23617">inside!</text>
      </g>
    </svg>
  )
}
