'use client'

import { useEffect, useRef, useState } from 'react'
import { RoadScene, NavGlyph, type AlertKind } from './RoadScene'

type Sal = 'high' | 'low'
type Phase = 'intro' | 'running' | 'done'
type Trial = { kind: AlertKind; sal: Sal }
type Result = Trial & { rt: number | null; ok: boolean }

/** The study's response mapping: one control per navigation cue, one to acknowledge a message. */
const CONTROLS: { kind: AlertKind; label: string; key: string; cap: string; keyName: string }[] = [
  { kind: 'left', label: 'Turn left', key: 'ArrowLeft', cap: '←', keyName: 'Left arrow' },
  { kind: 'straight', label: 'Straight', key: 'ArrowUp', cap: '↑', keyName: 'Up arrow' },
  { kind: 'right', label: 'Turn right', key: 'ArrowRight', cap: '→', keyName: 'Right arrow' },
  { kind: 'msg', label: 'Message', key: ' ', cap: 'Space', keyName: 'Space' },
]
const NAME: Record<AlertKind, string> = { left: 'a left turn', straight: 'straight ahead', right: 'a right turn', msg: 'a message' }
const RESPONSE_WINDOW = 2000
const STUDY = { high: 591, low: 757, gap: 166, acc: 97 }
const GAUGE_MAX = 1200

function shuffle<T>(arr: T[]) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function median(xs: number[]) {
  if (!xs.length) return null
  const s = [...xs].sort((a, b) => a - b)
  const m = Math.floor(s.length / 2)
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2
}

/**
 * A small version of the study task: eight alerts, every alert type once at each salience level, in random order.
 * Each alert has its own answer, so a press has to be fast and right.
 * Timing notes: the alert is shown by toggling a class inside requestAnimationFrame, with no fade,
 * and the clock starts in that same frame. Responses use pointerdown and keydown, not click.
 */
export default function ReactionDemo() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [feedback, setFeedback] = useState('')
  const [results, setResults] = useState<Result[]>([])
  const [trial, setTrial] = useState(0)

  // Refs carry the live state so timers and listeners never read stale values.
  const live = useRef<'idle' | 'wait' | 'alert' | 'feedback'>('idle')
  const order = useRef<Trial[]>([])
  const index = useRef(0)
  const log = useRef<Result[]>([])
  const t0 = useRef(0)
  const timer = useRef<number | undefined>(undefined)
  const alertEl = useRef<HTMLSpanElement>(null)
  const sceneEl = useRef<HTMLDivElement>(null)
  const pads = useRef<Partial<Record<AlertKind, HTMLButtonElement | null>>>({})

  const clear = () => window.clearTimeout(timer.current)
  const hideAlert = () => alertEl.current?.classList.remove('on')

  function runTrial(i: number) {
    index.current = i
    setTrial(i)
    setFeedback('')
    live.current = 'wait'
    const foreperiod = 1300 + Math.random() * 2200
    timer.current = window.setTimeout(() => {
      requestAnimationFrame(() => {
        const el = alertEl.current
        if (!el) return
        el.dataset.sal = order.current[i].sal
        el.dataset.kind = order.current[i].kind
        el.classList.add('on')
        t0.current = performance.now()
        live.current = 'alert'
        timer.current = window.setTimeout(() => record(null, false, 'Missed it'), RESPONSE_WINDOW)
      })
    }, foreperiod)
  }

  function record(rt: number | null, ok: boolean, label: string) {
    clear()
    hideAlert()
    log.current = [...log.current, { ...order.current[index.current], rt, ok }]
    setResults(log.current)
    setFeedback(label)
    live.current = 'feedback'
    timer.current = window.setTimeout(() => {
      const next = index.current + 1
      if (next >= order.current.length) {
        live.current = 'idle'
        setFeedback('')
        setPhase('done')
      } else {
        runTrial(next)
      }
    }, ok || rt === null ? 850 : 1400)
  }

  function respond(kind: AlertKind) {
    if (live.current === 'wait') {
      clear()
      setFeedback('Too soon. Wait for it.')
      live.current = 'feedback'
      timer.current = window.setTimeout(() => runTrial(index.current), 1100)
    } else if (live.current === 'alert') {
      const rt = performance.now() - t0.current
      const want = order.current[index.current].kind
      if (kind === want) record(rt, true, `${Math.round(rt)} ms`)
      else record(rt, false, `Wrong control. That was ${NAME[want]}.`)
    }
  }

  function press(kind: AlertKind) {
    const b = pads.current[kind]
    if (b) {
      b.classList.add('hit')
      window.setTimeout(() => b.classList.remove('hit'), 140)
    }
    respond(kind)
  }

  function start() {
    clear()
    hideAlert()
    order.current = shuffle<Trial>(
      CONTROLS.flatMap((c) => [{ kind: c.kind, sal: 'high' as Sal }, { kind: c.kind, sal: 'low' as Sal }]),
    )
    log.current = []
    setResults([])
    setPhase('running')
    sceneEl.current?.focus({ preventScroll: true })
    runTrial(0)
  }

  function stop() {
    clear()
    hideAlert()
    live.current = 'idle'
    setFeedback('')
    setPhase('intro')
  }

  useEffect(() => {
    if (phase !== 'running') return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return stop()
      const c = CONTROLS.find((x) => x.key === e.key || (x.kind === 'msg' && e.code === 'Space'))
      if (!c) return
      e.preventDefault()
      if (!e.repeat) press(c.kind)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [phase]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const total = CONTROLS.length * 2
  const rts = (s: Sal) => results.filter((r) => r.sal === s && r.ok && r.rt !== null).map((r) => r.rt as number)
  const high = median(rts('high'))
  const low = median(rts('low'))
  const answered = results.filter((r) => r.rt !== null).length
  const correct = results.filter((r) => r.ok).length
  const misses = total - answered

  return (
    <div className="demo">
      <div
        ref={sceneEl}
        className={`demo-scene is-${phase}`}
        tabIndex={phase === 'running' ? 0 : -1}
        aria-label="Driving scene. Answer each alert with its matching control."
      >
        <RoadScene moving>
          <span ref={alertEl} className="alert" data-sal="high" data-kind="left">
            {CONTROLS.map((c) => <NavGlyph key={c.kind} kind={c.kind} />)}
          </span>
        </RoadScene>
        {phase === 'intro' && <span className="demo-badge">Eyes here</span>}
        {feedback && <span className="demo-pill" aria-live="assertive">{feedback}</span>}
      </div>

      <div className="ctl" role="group" aria-label="Controls">
        {CONTROLS.map((c) => (
          <button
            key={c.kind}
            type="button"
            ref={(el) => { pads.current[c.kind] = el }}
            className="ctl-btn"
            aria-label={`${c.label} (${c.keyName} key)`}
            aria-disabled={phase !== 'running'}
            onPointerDown={(e) => {
              if (phase !== 'running') return
              e.preventDefault()
              press(c.kind)
            }}
            onClick={(e) => {
              // Keyboard activation of a focused button arrives as a click with no pointer detail.
              if (phase === 'running' && e.detail === 0) press(c.kind)
            }}
          >
            <span className="ctl-ico"><NavGlyph kind={c.kind} /></span>
            <span className="ctl-l">{c.label}</span>
            <kbd className="ctl-k">{c.cap}</kbd>
          </button>
        ))}
      </div>

      <div className="demo-bar">
        {phase === 'intro' && (
          <>
            <button type="button" className="btn btn-primary" onClick={start}>
              Start the drive <span className="arw">→</span>
            </button>
            <span className="demo-meta">Eight alerts, about 30 seconds</span>
          </>
        )}
        {phase === 'running' && (
          <>
            <ol className="pips" aria-label={`Alert ${trial + 1} of ${total}`}>
              {Array.from({ length: total }, (_, i) => (
                <li key={i} className={i < results.length ? 'done' : i === trial ? 'now' : undefined} />
              ))}
            </ol>
            <span className="demo-meta demo-hint">Eyes on the road</span>
            <button type="button" className="demo-stop" onClick={stop}>Stop</button>
          </>
        )}
        {phase === 'done' && (
          <>
            <button type="button" className="btn btn-ghost" onClick={start}>
              Drive it again <span className="arw">↻</span>
            </button>
            <span className="demo-meta">{misses ? `${misses} of ${total} missed` : 'No misses'}</span>
          </>
        )}
      </div>

      {phase === 'done' && <DemoResults high={high} low={low} correct={correct} answered={answered} />}
    </div>
  )
}

function DemoResults({ high, low, correct, answered }: { high: number | null; low: number | null; correct: number; answered: number }) {
  const gap = high !== null && low !== null ? Math.round(low - high) : null

  let headline: string
  let body: string
  if (low === null && high === null) {
    headline = 'No clean answers this round.'
    body = 'Every alert was missed or answered with the wrong control. Give it another drive.'
  } else if (low === null) {
    headline = 'The faint alerts got past you.'
    body = 'That matches the study. Faint visual alerts were missed more than twice as often as bold ones.'
  } else if (high === null) {
    headline = 'The bold alerts got past you.'
    body = 'Eight alerts is a tiny sample. Give it another drive.'
  } else if (gap !== null && gap > 0) {
    headline = `The faint alerts cost you ${gap} ms.`
    body = `In the study, the same drop in salience cost drivers ${STUDY.gap} ms. Same alerts, same spot on screen. Only how much they stood out changed.`
  } else {
    headline = 'No salience cost this round.'
    body = `Eight alerts is a tiny sample. Across 1,008 trials, the study found a ${STUDY.gap} ms cost for the low-salience visual alerts. Drive it again.`
  }

  return (
    <div className="demo-results" aria-live="polite">
      <Gauge high={high} low={low} />
      <div className="demo-read">
        <p className="demo-head">{headline}</p>
        <p>{body}</p>
        <dl className="demo-rows">
          <div>
            <dt><i className="sw sw-pool" aria-hidden="true" />High salience</dt>
            <dd>You {high === null ? 'none correct' : `${Math.round(high)} ms`} · Study {STUDY.high} ms</dd>
          </div>
          <div>
            <dt><i className="sw sw-tang" aria-hidden="true" />Low salience</dt>
            <dd>You {low === null ? 'none correct' : `${Math.round(low)} ms`} · Study {STUDY.low} ms</dd>
          </div>
          <div>
            <dt>Right control</dt>
            <dd>You {correct} of {answered} · Study {STUDY.acc}%</dd>
          </div>
        </dl>
        <p className="demo-fine">
          A toy version of the task, not the study protocol. Times are medians of your correct answers. Your screen, browser, and
          input device add delay, so compare the gap between high and low, not the raw times.
        </p>
      </div>
    </div>
  )
}

function Gauge({ high, low }: { high: number | null; low: number | null }) {
  const [armed, setArmed] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setArmed(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const deg = (ms: number | null) => (ms === null ? 0 : (180 * Math.min(ms, GAUGE_MAX)) / GAUGE_MAX)
  const point = (ms: number, r: number) => {
    const a = Math.PI - (Math.PI * ms) / GAUGE_MAX
    return [120 + r * Math.cos(a), 122 - r * Math.sin(a)]
  }
  const ticks = Array.from({ length: 9 }, (_, i) => i * 150)

  return (
    <svg className="gauge" viewBox="-16 -12 272 174" role="img" aria-label={`Gauge. Your high-salience median ${high === null ? 'none correct' : Math.round(high) + ' ms'}, low-salience ${low === null ? 'none correct' : Math.round(low) + ' ms'}. Study averages 591 and 757 ms.`}>
      <path d="M14 122 A106 106 0 0 1 226 122" fill="#F2EBDA" stroke="#2D1F15" strokeWidth="2" />
      <path d="M30 122 A90 90 0 0 1 210 122" fill="none" stroke="#2D1F15" strokeWidth="0.8" />
      {ticks.map((t) => {
        const [x1, y1] = point(t, 90)
        const [x2, y2] = point(t, t % 300 === 0 ? 78 : 84)
        return <line key={t} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2D1F15" strokeWidth={t % 300 === 0 ? 1.6 : 1} />
      })}
      {[0, 300, 600, 900, 1200].map((t) => {
        const end = t === 0 || t === GAUGE_MAX
        const [x, y] = point(t, end ? 106 : 117)
        return (
          <text key={t} x={x} y={end ? y + 14 : y + 3} textAnchor="middle" className="gauge-num">{t}</text>
        )
      })}
      {(
        [
          [STUDY.high, '#2DA8A8'],
          [STUDY.low, '#E85D3F'],
        ] as const
      ).map(([ms, c]) => {
        const [x1, y1] = point(ms, 92)
        const [x2, y2] = point(ms, 104)
        return <line key={ms} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth="4" strokeLinecap="round" />
      })}
      {low !== null && (
        <line className="needle" x1="120" y1="122" x2="44" y2="122" stroke="#E85D3F" strokeWidth="3" strokeLinecap="round"
          style={{ transform: `rotate(${armed ? deg(low) : 0}deg)`, transitionDelay: '.15s' }} />
      )}
      {high !== null && (
        <line className="needle" x1="120" y1="122" x2="34" y2="122" stroke="#2DA8A8" strokeWidth="3.4" strokeLinecap="round"
          style={{ transform: `rotate(${armed ? deg(high) : 0}deg)` }} />
      )}
      <circle cx="120" cy="122" r="7" fill="#2D1F15" />
      <circle cx="120" cy="122" r="2.6" fill="#E5B033" />
      <text x="120" y="156" textAnchor="middle" className="gauge-key">Milliseconds · Needles: you · Notches: study</text>
    </svg>
  )
}
