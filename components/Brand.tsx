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
      <text x="60" y="58" textAnchor="middle" fontFamily="Bowlby One" fontSize="22" fill="#E85D3F">{number}</text>
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
