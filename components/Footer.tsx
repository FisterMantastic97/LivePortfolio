import Link from 'next/link'

const SEALS = ['Built for humans', 'Meets WCAG AA', 'Nielsen tested', 'Est. 1957']

type Props = {
  prevHref?: string
  prevLabel?: string
  nextHref?: string
  nextLabel?: string
}

export default function Footer({ prevHref, prevLabel = 'All work', nextHref, nextLabel = 'Next project' }: Props) {
  const hasNav = prevHref || nextHref
  return (
    <footer className="site-footer">
      <div className="seals">
        {SEALS.map((s) => (
          <div className="seal-badge" key={s}>{s}</div>
        ))}
      </div>
      {hasNav && (
        <div className="csnav">
          {prevHref ? (
            <Link className="prev" href={prevHref}><span className="arw">←</span> {prevLabel}</Link>
          ) : <span />}
          {nextHref ? (
            <Link className="next" href={nextHref}>{nextLabel} <span className="arw">→</span></Link>
          ) : <span />}
        </div>
      )}
      <p className="copy">© 2026 Nicholas Scott Mitchell</p>
    </footer>
  )
}
