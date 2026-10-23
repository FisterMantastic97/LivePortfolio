'use client'

import { useState } from 'react'

/**
 * Opens the visitor's mail app and copies the address too, so the button
 * still does something on machines with no mail app set up.
 */
export default function EmailButton({ email, className = 'btn btn-ghost' }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 4000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <span className="email-wrap">
      <a className={className} href={`mailto:${email}`} onClick={copy}>
        {copied ? 'Address copied' : 'Email me'}
      </a>
      <span className="email-note" role="status" aria-live="polite">
        {copied ? <>Copied <b>{email}</b> to your clipboard.</> : ''}
      </span>
    </span>
  )
}
