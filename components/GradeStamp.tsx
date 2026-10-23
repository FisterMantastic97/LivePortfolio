'use client'

import { useReveal } from './useReveal'

/** A rubber-stamped grade that thuds onto the page the first time it scrolls into view. */
export default function GradeStamp({ grade, label = 'Grade', small = false }: { grade: string; label?: string; small?: boolean }) {
  const [ref, state] = useReveal<HTMLSpanElement>(0.6)
  return (
    <span ref={ref} className={`gstamp${small ? ' gstamp-sm' : ''} is-${state}`} role="img" aria-label={`${label} ${grade}`}>
      <span className="gstamp-l" aria-hidden="true">{label}</span>
      <span className="gstamp-g" aria-hidden="true">{grade}</span>
    </span>
  )
}
