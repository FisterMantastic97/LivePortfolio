'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CaseRow, CASES } from '@/components/CaseCard'

const FILTERS = ['all', 'research', 'design'] as const
type Filter = (typeof FILTERS)[number]

export default function WorkPage() {
  const [filter, setFilter] = useState<Filter>('all')
  const shown = CASES.filter((c) => filter === 'all' || c.cat.split(' ').includes(filter))

  return (
    <>
      <Header active="work" />
      <main id="main" className="page">
        <div className="work-head">
          <div>
            <h1 className="sh page-title" style={{ fontSize: 'clamp(40px,7vw,72px)', margin: '0 0 18px' }}>
              The <span className="tang">work.</span>
            </h1>
            <p className="work-intro">
              UX research and design, weighted equally. Four are real studies with real findings, and one is an app I
              designed and shipped. Each is written so you can read the judgment behind the decisions, not just the outcome.
            </p>
          </div>
          <nav className="toc" aria-label="In this catalog">
            <p className="toc-k">In this catalog</p>
            <ol>
              {CASES.map((c) => (
                <li key={c.slug}>
                  <a href={`#${c.slug}`} onClick={() => setFilter('all')}>
                    <span className="ct-name">{c.project}</span>
                    <span className="ct-dots" aria-hidden="true" />
                    <span className="ct-no">{c.catno}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <div className="filters" role="group" aria-label="Filter work">
          {FILTERS.map((f) => (
            <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <h2 className="sr-only">Case studies</h2>
        <ul className="catalog">
          {shown.map((c) => <CaseRow key={c.slug} c={c} />)}
        </ul>
      </main>
      <Footer />
    </>
  )
}
