'use client'

import { useState } from 'react'
import { useReveal } from './useReveal'

type Bar = { key: string; modality: 'Auditory' | 'Visual'; sal: 'High' | 'Low'; ms: number; note: string }

const SCALE_MAX = 800
const BARS: Bar[] = [
  { key: 'ah', modality: 'Auditory', sal: 'High', ms: 619, note: '28 ms behind the high-salience visual alert.' },
  { key: 'al', modality: 'Auditory', sal: 'Low', ms: 736, note: '117 ms slower than high-salience audio.' },
  { key: 'vh', modality: 'Visual', sal: 'High', ms: 591, note: 'Fastest of all four conditions.' },
  { key: 'vl', modality: 'Visual', sal: 'Low', ms: 757, note: 'Slowest of all four, and 166 ms behind high-salience visual.' },
]
const GROUPS = ['Auditory', 'Visual'] as const

export default function ResultsChart() {
  const [ref, state] = useReveal<HTMLDivElement>(0.4)
  const [active, setActive] = useState('vh')
  const [table, setTable] = useState(false)
  const a = BARS.find((b) => b.key === active)!

  return (
    <figure className="figure">
      <div className="fig-head">
        <p className="fig-k">★ Fig 02 · Results</p>
        <p className="fig-t">Mean reaction time by alert type</p>
      </div>
      <div className="fig-legend" aria-hidden="true">
        <span><i className="sw sw-pool" />High salience</span>
        <span><i className="sw sw-tang" />Low salience</span>
      </div>

      <div ref={ref} className={`rtc is-${state}`}>
        <div className="rtc-y" aria-hidden="true">
          {[800, 600, 400, 200, 0].map((v) => (
            <span key={v} style={{ bottom: `${(v / SCALE_MAX) * 100}%` }}>{v}</span>
          ))}
        </div>
        <div className="rtc-plot">
          {[0, 200, 400, 600, 800].map((v) => (
            <span key={v} className="rtc-line" style={{ bottom: `${(v / SCALE_MAX) * 100}%` }} aria-hidden="true" />
          ))}
          {GROUPS.map((g, gi) => (
            <div className="rtc-group" key={g}>
              {BARS.filter((b) => b.modality === g).map((b, bi) => (
                <button
                  key={b.key}
                  type="button"
                  className={`rtc-bar ${b.sal === 'High' ? 'is-high' : 'is-low'}${active === b.key ? ' is-active' : ''}`}
                  style={{ ['--h' as string]: b.ms / SCALE_MAX, ['--d' as string]: `${(gi * 2 + bi) * 110}ms` }}
                  aria-label={`${b.modality} alert, ${b.sal.toLowerCase()} salience: ${b.ms} milliseconds`}
                  aria-pressed={active === b.key}
                  onMouseEnter={() => setActive(b.key)}
                  onFocus={() => setActive(b.key)}
                  onClick={() => setActive(b.key)}
                >
                  <span className="rtc-fill" />
                  <span className="rtc-val">{b.ms}</span>
                  {b.key === 'vh' && <span className="rtc-flag" aria-hidden="true">★</span>}
                </button>
              ))}
            </div>
          ))}
        </div>
        <div className="rtc-x" aria-hidden="true">
          {GROUPS.map((g) => <span key={g}>{g}</span>)}
        </div>
      </div>

      <p className="fig-readout" aria-live="polite">
        <b>{a.modality}, {a.sal.toLowerCase()} salience: {a.ms} ms.</b> {a.note}
      </p>
      <p className="fig-note">Mean reaction time in milliseconds, N = 24, within-subjects. Lower is faster. Tap a bar for details.</p>

      <button type="button" className="fig-table-btn" aria-expanded={table} onClick={() => setTable((t) => !t)}>
        {table ? 'Hide the table' : 'Show as a table'}
      </button>
      {table && (
        <table className="fig-table">
          <caption className="sr-only">Mean reaction time by modality and salience</caption>
          <thead>
            <tr><th scope="col">Modality</th><th scope="col">Salience</th><th scope="col">Mean RT (ms)</th></tr>
          </thead>
          <tbody>
            {BARS.map((b) => (
              <tr key={b.key}><td>{b.modality}</td><td>{b.sal}</td><td>{b.ms}</td></tr>
            ))}
          </tbody>
        </table>
      )}
    </figure>
  )
}
