import type { ReactNode } from 'react'
import { DeepRead } from './ReadMode'

/**
 * The real study documents, set as printed forms inside a fold-out.
 * Wording comes from the original instruments. Anything trimmed is marked as an excerpt.
 */
export function Materials({ children }: { children: ReactNode }) {
  return (
    <DeepRead title="Research materials" sub="The actual documents">
      <div className="docs">{children}</div>
    </DeepRead>
  )
}

/** One document: a form number, a title, and a note on what's shown. */
export function Doc({ form, title, note, children }: { form: string; title: string; note?: string; children: ReactNode }) {
  return (
    <section className="doc">
      <p className="doc-top"><span>{form}</span>{note && <span className="doc-ex">{note}</span>}</p>
      <h4 className="doc-title">{title}</h4>
      {children}
    </section>
  )
}

/** A value the survey filled in from an earlier answer. */
export function Pipe({ children }: { children: ReactNode }) {
  return <span className="pipe" title="Filled in from the driver’s earlier answer">{children}</span>
}

const AGREE = ['Strongly disagree', 'Somewhat disagree', 'Neither agree nor disagree', 'Somewhat agree', 'Strongly agree']

/** Agree–disagree items with the five-point scale printed beside each one. */
export function LikertItems({ items, start = 1 }: { items: ReactNode[]; start?: number }) {
  return (
    <>
      <p className="sv-legend">
        {AGREE.map((a, i) => <span key={a}><b>{i + 1}</b> {a}</span>)}
      </p>
      <ol className="sv" start={start}>
        {items.map((it, i) => (
          <li key={i}>
            <span className="sv-q">{it}</span>
            <span className="sv-boxes" aria-hidden="true">{[1, 2, 3, 4, 5].map((n) => <i key={n}>{n}</i>)}</span>
          </li>
        ))}
      </ol>
    </>
  )
}

/** A moderator script card: the scenario read aloud, the tasks, and the probes that follow. */
export function ScriptCard({ no, title, scenario, tasks, probes, note }: {
  no: number; title: string; scenario: string; tasks: string[]; probes: string[]; note?: string
}) {
  return (
    <div className="sc">
      <p className="sc-h"><span className="sc-no">Script {no}</span> {title}</p>
      <blockquote className="sc-say">{scenario}</blockquote>
      <div className="sc-cols">
        <div>
          <p className="sc-k">Tasks</p>
          <ol className="sc-list">{tasks.map((t) => <li key={t}>{t}</li>)}</ol>
        </div>
        <div>
          <p className="sc-k">Probes</p>
          <ul className="sc-list sc-q">{probes.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      </div>
      {note && <p className="sc-note"><b>Moderator note.</b> {note}</p>}
    </div>
  )
}

/** A numbered checklist, like a printed run sheet. */
export function RunSheet({ steps }: { steps: ReactNode[] }) {
  return (
    <ol className="run">
      {steps.map((s, i) => <li key={i}><span className="run-box" aria-hidden="true" /><span>{s}</span></li>)}
    </ol>
  )
}
