import { ReactNode } from 'react'
import Link from 'next/link'
import { Seal } from './Brand'
import { SectionBody } from './ReadMode'
import GradeStamp from './GradeStamp'

export function CaseCover({
  eyebrow, crumb, title, lede, seal, doc,
}: {
  eyebrow?: string
  crumb?: string
  title: ReactNode
  lede: string
  seal: { number: string; sublabel: string; ring: string }
  doc?: { href: string; label: string; meta: string }
}) {
  return (
    <div className="pad cover">
      <Seal number={seal.number} sublabel={seal.sublabel} ring={seal.ring} />
      {crumb ? (
        <nav className="crumb" aria-label="Breadcrumb">
          <Link href="/work">Work</Link><span aria-hidden="true">/</span><span aria-current="page">{crumb}</span>
        </nav>
      ) : (
        <p className="eyebrow">{eyebrow}</p>
      )}
      <h1 className="cover-title">{title}</h1>
      <p className="lede">{lede}</p>
      {doc && (
        <p className="cover-doc">
          <a href={doc.href}>{doc.label}</a>
          <span>{doc.meta}</span>
        </p>
      )}
    </div>
  )
}

export function MetaStrip({ items }: { items: [string, string][] }) {
  return (
    <dl className="meta">
      {items.map(([dt, dd]) => (
        <div key={dt}>
          <dt>{dt}</dt>
          <dd>{dd}</dd>
        </div>
      ))}
    </dl>
  )
}

export function Section({ num, heading, summary, children }: { num: string; heading: string; summary?: string; children: ReactNode }) {
  return (
    <section className="block pad">
      <p className="stamp"><span className="num">★ {num}</span></p>
      <h2 className="sec-title">{heading}</h2>
      <SectionBody summary={summary}>{children}</SectionBody>
    </section>
  )
}

export function Stats({ items, note }: { items: { n: string; l: string; stamp?: boolean }[]; note?: string }) {
  return (
    <>
      <div className="stats">
        {items.map((s) => (
          <div className="stat" key={s.l}>
            {s.stamp ? <GradeStamp grade={s.n} /> : <span className="n">{s.n}</span>}
            <span className="l">{s.l}</span>
          </div>
        ))}
      </div>
      {note && <p className="stat-note">{note}</p>}
    </>
  )
}

/**
 * Placeholder for a figure that hasn't been added yet. It renders nothing, so
 * no empty boxes show on the live site. Swap it for a real figure when one exists.
 */
export function ImageSlot(_props: { tag: string; desc: string; placeholder?: string }) {
  return null
}

export function Pull({ children }: { children: ReactNode }) {
  return <p className="pull">{children}</p>
}

export function Outcome({ num = '05', children }: { num?: string; children: ReactNode }) {
  return (
    <section className="outcome pad">
      <p className="stamp"><span className="num">★ {num}</span></p>
      <h2 className="sec-title">The Outcome</h2>
      {children}
    </section>
  )
}

export function Takeaways({ items }: { items: ReactNode[] }) {
  return (
    <ol className="takeaways">
      {items.map((t, i) => (
        <li key={i}><span>{t}</span></li>
      ))}
    </ol>
  )
}

export function Reflection({ items, summary }: { items: { h: string; body: string }[]; summary?: string }) {
  return (
    <section className="block pad">
      <p className="stamp"><span className="num">★ 06</span></p>
      <h2 className="sec-title">Reflection</h2>
      <SectionBody summary={summary}>
        <div className="reflect">
          {items.map((r) => (
            <div key={r.h}>
              <h3>{r.h}</h3>
              <p>{r.body}</p>
            </div>
          ))}
        </div>
      </SectionBody>
    </section>
  )
}
