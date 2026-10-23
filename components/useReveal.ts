'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Plays an entrance effect once, the first time an element scrolls into view.
 *
 * 'idle'  = server render, no JS, or reduced motion. Content shows in its final state.
 * 'armed' = JS is running and the element hasn't been seen yet. Hidden, waiting.
 * 'in'    = seen. CSS plays the entrance.
 *
 * Starting at 'idle' means nothing is ever stuck invisible if JS fails.
 */
export function useReveal<T extends Element>(threshold = 0.35) {
  const ref = useRef<T>(null)
  const [state, setState] = useState<'idle' | 'armed' | 'in'>('idle')

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    setState('armed')
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setState('in')
          io.disconnect()
        }
      },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return [ref, state] as const
}
