import Link from 'next/link'

type Props = {
  prevHref?: string
  prevLabel?: string
  nextHref?: string
  nextLabel?: string
}

/** The catalog's back cover: next-project links, then the maker's mark and seals. */
export default function Footer({ prevHref, prevLabel = 'All work', nextHref, nextLabel = 'Next project' }: Props) {
  const hasNav = prevHref || nextHref
  return (
    <footer className="site-footer">
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
      <div className="backcover">
        <p className="bc-mark">Nicholas <span>Mitchell</span></p>
        <p className="bc-line">UX research and human factors, <i>printed in San José</i></p>
        <div className="seals">
          <div className="seal-badge">Built for<br />humans</div>
          <Link className="seal-badge" href="/accessibility" aria-label="Meets WCAG AA, guaranteed. Read the accessibility statement.">Meets<br />WCAG AA<span className="sb-script">Guaranteed</span></Link>
          <div className="seal-badge">Est.<br />1997</div>
        </div>
        <p className="copy">© 2026 Nicholas Scott Mitchell <span aria-hidden="true">·</span> <Link href="/accessibility">Accessibility</Link></p>
      </div>
    </footer>
  )
}
