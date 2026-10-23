'use client'

import { createContext, useCallback, useContext, useEffect, useId, useRef, useState, ReactNode } from 'react'

type Mode = 'quick' | 'full'
const KEY = 'nm-read-mode'

const ReadModeContext = createContext<{ mode: Mode; setMode: (m: Mode) => void } | null>(null)

/** Wrap a case study in this to give it the Quick / Full read switch. The choice carries across pages. */
export function ReadModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>('quick')

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY)
      if (saved === 'quick' || saved === 'full') setModeState(saved)
    } catch {}
  }, [])

  const setMode = useCallback((m: Mode) => {
    setModeState(m)
    try {
      localStorage.setItem(KEY, m)
    } catch {}
  }, [])

  return <ReadModeContext.Provider value={{ mode, setMode }}>{children}</ReadModeContext.Provider>
}

function useReadMode() {
  return useContext(ReadModeContext)
}

/** Keeps collapsed content out of the tab order and away from screen readers. */
function useInert(open: boolean) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    ref.current?.toggleAttribute('inert', !open)
  }, [open])
  return ref
}

const WPM = 230

export function ReadToggle() {
  const ctx = useReadMode()
  const ref = useRef<HTMLDivElement>(null)
  const [mins, setMins] = useState<{ quick: number; full: number } | null>(null)

  // Estimate both read times from the page's own text, so the bar can show the
  // difference the moment the switch flips, even when the sections that change are off screen.
  useEffect(() => {
    const bar = ref.current
    const article = bar?.closest('article')
    if (!bar || !article) return
    const words = (el: Element) => (el.textContent || '').trim().split(/\s+/).filter(Boolean).length
    const sum = (sel: string) => Array.from(article.querySelectorAll(sel)).reduce((n, el) => n + words(el), 0)
    const extra = sum('.expander')
    const base = words(article) - extra - sum('.sec-summary') - sum('.sec-more') - sum('.site-footer') - words(bar)
    const toMin = (w: number) => Math.max(1, Math.round(w / WPM))
    setMins({ quick: toMin(base), full: toMin(base + extra) })
  }, [])

  // Stick the bar just under the site header, whatever height the header wraps to.
  useEffect(() => {
    const bar = ref.current
    const header = document.querySelector<HTMLElement>('.site-header')
    if (!bar || !header) return
    const place = () => bar.style.setProperty('--stick', `${header.offsetHeight}px`)
    place()
    window.addEventListener('resize', place)
    return () => window.removeEventListener('resize', place)
  }, [])

  if (!ctx) return null
  const full = ctx.mode === 'full'

  return (
    <div className="readbar" ref={ref}>
      <span className="readbar-k">Reading mode</span>
      <div className="readtoggle">
        <span className={`rt-side${!full ? ' on' : ''}`} aria-hidden="true" onClick={() => ctx.setMode('quick')}>Quick</span>
        <button
          type="button"
          role="switch"
          aria-checked={full}
          aria-label="Full read"
          className="switch"
          onClick={() => ctx.setMode(full ? 'quick' : 'full')}
        >
          <span className="knob" />
        </button>
        <span className={`rt-side${full ? ' on' : ''}`} aria-hidden="true" onClick={() => ctx.setMode('full')}>Full</span>
      </div>
      <span className={`readbar-time${full ? ' is-full' : ''}`} aria-live="polite">
        <span className="rt-label">{full ? 'Everything' : 'Key points'}</span>
        {mins && <span className="rt-mins">{full ? mins.full : mins.quick} min</span>}
      </span>
    </div>
  )
}

/**
 * Section body that collapses to a one-line summary in Quick read.
 * With no provider or no summary, it just renders its children.
 */
export function SectionBody({ summary, children }: { summary?: string; children: ReactNode }) {
  const ctx = useReadMode()
  const id = useId()
  const collapsible = !!(ctx && summary)
  const [open, setOpen] = useState(() => !collapsible || ctx?.mode === 'full')
  const ref = useInert(open)

  useEffect(() => {
    if (collapsible && ctx) setOpen(ctx.mode === 'full')
  }, [ctx?.mode, collapsible]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!collapsible) return <>{children}</>

  return (
    <>
      {!open && <p className="sec-summary">{summary}</p>}
      {ctx?.mode === 'quick' && (
        <button type="button" className="sec-more" aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)}>
          {open ? 'Show less' : 'Read this section'} <span className="arw" aria-hidden="true">{open ? '↑' : '↓'}</span>
        </button>
      )}
      <div id={id} ref={ref} className={`expander${open ? ' open' : ''}`}>
        <div className="expander-inner">{children}</div>
      </div>
    </>
  )
}

/** "Under the hood" panel for technical readers. Opens with Full read, or on its own. */
export function DeepRead({ title = 'Under the hood', children }: { title?: string; children: ReactNode }) {
  const ctx = useReadMode()
  const id = useId()
  const [open, setOpen] = useState(() => ctx?.mode === 'full')
  const ref = useInert(open)

  useEffect(() => {
    if (ctx) setOpen(ctx.mode === 'full')
  }, [ctx?.mode]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={`deep${open ? ' open' : ''}`}>
      <button type="button" className="deep-head" aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)}>
        <svg className="deep-gear" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 8.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Zm8.6 4.9-1.9.7a6.9 6.9 0 0 1-.6 1.5l.9 1.8-1.7 1.7-1.8-.9c-.5.3-1 .5-1.5.6l-.7 1.9h-2.4l-.7-1.9a6.9 6.9 0 0 1-1.5-.6l-1.8.9-1.7-1.7.9-1.8a6.9 6.9 0 0 1-.6-1.5l-1.9-.7v-2.4l1.9-.7c.1-.5.3-1 .6-1.5l-.9-1.8 1.7-1.7 1.8.9c.5-.3 1-.5 1.5-.6l.7-1.9h2.4l.7 1.9c.5.1 1 .3 1.5.6l1.8-.9 1.7 1.7-.9 1.8c.3.5.5 1 .6 1.5l1.9.7Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
        <span className="deep-t">{title}</span>
        <span className="deep-sub">Technical detail</span>
        <span className="deep-chev" aria-hidden="true" />
      </button>
      <div id={id} ref={ref} className={`expander${open ? ' open' : ''}`}>
        <div className="expander-inner">
          <div className="deep-body">{children}</div>
        </div>
      </div>
    </div>
  )
}
