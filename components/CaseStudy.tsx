import { ReactNode } from 'react'
import { Seal } from './Brand'

export function CaseCover({
  eyebrow, title, lede, seal,
}: {
  eyebrow: string
  title: ReactNode
  lede: string
  seal: { number: string; sublabel: string; ring: string }
}) {
  return (
    <div className="pad cover">
      <Seal number={seal.number} sublabel={seal.sublabel} ring={seal.ring} />
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="cover-title">{title}</h1>
      <p className="lede">{lede}</p>
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

export function Section({ num, heading, children }: { num: string; heading: string; children: ReactNode }) {
  return (
    <section className="block pad">
      <p className="stamp"><span className="num">★ {num}</span></p>
      <h2 className="sec-title">{heading}</h2>
      {children}
    </section>
  )
}

export function Stats({ items, note }: { items: { n: string; l: string }[]; note?: string }) {
  return (
    <>
      <div className="stats">
        {items.map((s) => (
          <div className="stat" key={s.l}>
            <span className="n">{s.n}</span>
            <span className="l">{s.l}</span>
          </div>
        ))}
      </div>
      {note && <p className="stat-note">{note}</p>}
    </>
  )
}

export function ImageSlot({ tag, desc, placeholder = 'drop in available asset' }: { tag: string; desc: string; placeholder?: string }) {
  return (
    <div className="slot">
      <span className="tag">{tag}</span>
      <span className="desc">{desc}</span>
      <span className="ph">{placeholder}</span>
    </div>
  )
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

export function Reflection({ items }: { items: { h: string; body: string }[] }) {
  return (
    <section className="block pad">
      <p className="stamp"><span className="num">★ 06</span></p>
      <h2 className="sec-title">Reflection</h2>
      <div className="reflect">
        {items.map((r) => (
          <div key={r.h}>
            <h3>{r.h}</h3>
            <p>{r.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
