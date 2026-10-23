'use client'

import { useId, useState } from 'react'

// The survey's seven usability questions, lightly reworded so they read without the piped-in car name.
// Averages are from every driver who answered each question in the Qualtrics export.
const ITEMS = [
  { q: 'Finding the heater and AC controls was easy the first time I drove this car.', short: 'finding the climate controls', avg: 4.64 },
  { q: 'I can find the hazard lights quickly and easily.', short: 'finding the hazard lights', avg: 4.49 },
  { q: 'I like the layout of my dashboard.', short: 'liking the layout', avg: 4.32 },
  { q: 'I can quickly find the volume control while driving.', short: 'finding the volume', avg: 4.74 },
  { q: 'I feel confident operating this car.', short: 'feeling confident', avg: 4.82 },
  { q: 'I have been unable to find a button or screen I needed while driving.', short: 'losing a control mid-drive', avg: 2.49, reverse: true },
  { q: 'Other people would get used to my dashboard quickly.', short: 'how fast others would adapt', avg: 4.19 },
]

// Group means from the report (n = 25, 36, 4).
const GROUPS = [
  { key: 'analog', label: 'Analog', blurb: 'Knobs and buttons, no touchscreen', m: 82.17 },
  { key: 'hybrid', label: 'Hybrid', blurb: 'A touchscreen plus physical controls', m: 86.9 },
  { key: 'digital', label: 'Digital', blurb: 'Nearly everything on the screen', m: 90.0 },
] as const

const SCALE = ['Strongly disagree', 'Somewhat disagree', 'Neither', 'Somewhat agree', 'Strongly agree']

export default function DashDemo() {
  const base = useId()
  const [type, setType] = useState<string | null>(null)
  const [ans, setAns] = useState<(number | null)[]>(ITEMS.map(() => null))
  const done = ans.every((a) => a !== null)

  const score = done
    ? ((ans as number[]).reduce((sum, a, i) => sum + (ITEMS[i].reverse ? 6 - a : a), 0) / 35) * 100
    : null

  // The question where this visitor differs most from the drivers we surveyed.
  let gap: { i: number; d: number } | null = null
  if (done) {
    ;(ans as number[]).forEach((a, i) => {
      const d = Math.abs(a - ITEMS[i].avg)
      if (!gap || d > gap.d) gap = { i, d }
    })
  }
  const g = gap as { i: number; d: number } | null
  const mine = GROUPS.find((x) => x.key === type)
  const closest = score === null ? null : [...GROUPS].sort((a, b) => Math.abs(a.m - score) - Math.abs(b.m - score))[0]

  const reset = () => { setType(null); setAns(ITEMS.map(() => null)) }

  return (
    <figure className="figure dash-demo">
      <div className="fig-head">
        <p className="fig-k">★ Fig 02 · Try it</p>
        <p className="fig-t">Rate your own car with the survey&rsquo;s seven questions</p>
      </div>

      <fieldset className="dd-type">
        <legend>What kind of dashboard does your car have?</legend>
        <div className="dd-types">
          {GROUPS.map((x) => (
            <label key={x.key} className={type === x.key ? 'on' : undefined}>
              <input type="radio" name={`${base}-type`} value={x.key} checked={type === x.key} onChange={() => setType(x.key)} />
              <b>{x.label}</b>
              <span>{x.blurb}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <p className="dd-legend" aria-hidden="true"><span>1 = Strongly disagree</span><span>5 = Strongly agree</span></p>
      <ol className="dd-items">
        {ITEMS.map((it, i) => (
          <li key={it.q}>
            <fieldset>
              <legend>{it.q}</legend>
              <div className="dd-scale">
                {SCALE.map((s, v) => (
                  <label key={s} className={ans[i] === v + 1 ? 'on' : undefined}>
                    <input type="radio" name={`${base}-q${i}`} value={v + 1} checked={ans[i] === v + 1}
                      onChange={() => setAns((prev) => prev.map((p, j) => (j === i ? v + 1 : p)))} />
                    <span aria-hidden="true">{v + 1}</span>
                    <span className="sr-only">{s}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </li>
        ))}
      </ol>

      <div className="dd-result" aria-live="polite">
        {score === null ? (
          <p className="dd-wait">Answer all seven to see your score. {ans.filter((a) => a !== null).length} of 7 done.</p>
        ) : (
          <>
            <p className="dd-score"><b>{Math.round(score)}</b><span>out of 100</span></p>
            <div className="dd-line" aria-hidden="true">
              {GROUPS.map((x, k) => (
                <span key={x.key} className={`dd-mark g${k}`} style={{ left: `${x.m}%` }}><i>{x.label} {x.m.toFixed(1)}</i></span>
              ))}
              <span className="dd-mark you" style={{ left: `${score}%` }}><i>You {Math.round(score)}</i></span>
            </div>
            <p className="dd-read">
              {mine && <>You drive a {mine.label.toLowerCase()} dashboard. Those drivers averaged {mine.m.toFixed(1)}. </>}
              {closest && <>Your score sits closest to the {closest.label.toLowerCase()} group{closest.key === 'digital' ? ', though that group was only four drivers' : ''}. </>}
              {g && g.d >= 1 && <>You differ most on {ITEMS[g.i].short}: you answered {ans[g.i]}, and the drivers we surveyed averaged {ITEMS[g.i].avg.toFixed(1)}.</>}
            </p>
            <button type="button" className="dd-reset" onClick={reset}>Start over</button>
          </>
        )}
      </div>
      <p className="fig-note">The sixth question is reverse-scored here, since agreeing with it is a bad sign. Then the total out of 35 converts to 100. Nothing you enter leaves this page.</p>
    </figure>
  )
}
