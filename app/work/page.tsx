'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CaseCard, { CASES } from '@/components/CaseCard'

const FILTERS = ['all', 'research', 'design'] as const
type Filter = (typeof FILTERS)[number]

export default function WorkPage() {
  const [filter, setFilter] = useState<Filter>('all')
  const shown = CASES.filter((c) => filter === 'all' || c.cat.split(' ').includes(filter))

  return (
    <>
      <Header active="work" />
      <main id="main" className="page">
        <p className="eyebrow">★ Selected work</p>
        <h1 className="sh" style={{ fontSize: 'clamp(40px,7vw,72px)', margin: '0 0 18px' }}>
          The <span className="tang">work.</span>
        </h1>
        <p className="work-intro">
          UX research and design, weighted equally. Each project is a real study with real findings,
          written so you can read the judgment behind the decisions, not just the outcome.
        </p>

        <div className="filters" role="group" aria-label="Filter work">
          {FILTERS.map((f) => (
            <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid">
          {shown.map((c) => <CaseCard key={c.slug} c={c} />)}
        </div>
      </main>
      <Footer />
    </>
  )
}
