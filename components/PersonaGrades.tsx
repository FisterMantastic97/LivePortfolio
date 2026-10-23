'use client'

import { useId, useState } from 'react'
import GradeStamp from './GradeStamp'

// Personas, grades, and rationales come from the Path of Exile 2 evaluation report.
const PERSONAS = [
  { type: 'The Experienced Veteran', name: 'Marcus', grade: 'B-', why: 'Experience covers many gaps, but combat clutter and thin crafting feedback still slow him down.' },
  { type: 'The Strategic Planner', name: 'Elias', grade: 'C', why: 'The depth he wants is there, but nothing previews tree routes or crafting outcomes, and comparing gear is manual.' },
  { type: 'The Action-Focused Combatant', name: 'Maya', grade: 'C-', why: 'Key attacks blend into effects and telegraphs are inconsistent, so deaths feel unavoidable.' },
  { type: 'The Efficient Collector', name: 'Samir', grade: 'D+', why: 'Loot has no clear priority, modifiers are slow to parse, and the inventory needs constant manual sorting.' },
  { type: 'The New Adventurer', name: 'Ava', grade: 'D', why: 'Dense early information and unclear onboarding. The tree, modifiers, and crafting all go unexplained.' },
]

export default function PersonaGrades() {
  const [open, setOpen] = useState<number | null>(null)
  const base = useId()

  return (
    <figure className="figure personas">
      <div className="fig-head">
        <p className="fig-k">★ Fig 03 · Report cards</p>
        <p className="fig-t">Five player types, graded on how well the interface serves them</p>
      </div>
      <ul className="pcards">
        {PERSONAS.map((p, i) => {
          const isOpen = open === i
          const id = `${base}-${i}`
          return (
            <li key={p.type} className={`pcard${isOpen ? ' open' : ''}`}>
              <button type="button" className="pcard-btn" aria-expanded={isOpen} aria-controls={id} onClick={() => setOpen(isOpen ? null : i)}>
                <span className="pcard-type">{p.type}</span>
                <span className="pcard-name">{p.name}</span>
                <GradeStamp grade={p.grade} small />
                <span className="pcard-more" aria-hidden="true">{isOpen ? 'Hide why' : 'Why?'}</span>
              </button>
              <p id={id} className="pcard-why" hidden={!isOpen}>{p.why}</p>
            </li>
          )
        })}
      </ul>
      <p className="fig-note">Tap a card to see what drove the grade.</p>
    </figure>
  )
}
