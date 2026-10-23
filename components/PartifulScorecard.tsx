import GradeStamp from './GradeStamp'

// Grades, explanations, and violation counts come from the team's Partiful usability report.
const GRADES = [
  { q: 'Easy to learn on the first try?', g: 'B-', why: 'Playful, but the form structure and RSVP flow tripped up first-time users.' },
  { q: 'Core features easy to find?', g: 'D+', why: 'Participants struggled to locate Text Blast and guest messaging.' },
  { q: 'Clear feedback and confirmations?', g: 'D', why: 'No confirmation for messages or updates, so people second-guessed their actions.' },
  { q: 'Clear line between public and private?', g: 'C-', why: 'Several users misread who could see their comments or profile info.' },
]

const VIOLATIONS: [string, number][] = [
  ['Visibility of system status', 6],
  ['Recognition rather than recall', 4],
  ['Discoverability and hidden affordances', 4],
  ['Match between system and real world', 3],
  ['Consistency and standards', 3],
]
const MAX = 6

export default function PartifulScorecard() {
  return (
    <figure className="figure">
      <div className="fig-head">
        <p className="fig-k">★ Fig 02 · Scorecard</p>
        <p className="fig-t">Graded on four usability questions</p>
      </div>

      <ol className="score-rows">
        {GRADES.map((r) => (
          <li key={r.q}>
            <div className="score-text">
              <p className="score-q">{r.q}</p>
              <p className="score-why">{r.why}</p>
            </div>
            <GradeStamp grade={r.g} small />
          </li>
        ))}
        <li className="score-overall">
          <div className="score-text">
            <p className="score-q">Overall usability</p>
            <p className="score-why">Fun tone, real gaps in visibility, trust, and discoverability.</p>
          </div>
          <GradeStamp grade="C-" label="Overall" small />
        </li>
      </ol>

      <p className="fig-sub">Heuristic violations across the four tasks</p>
      <ul className="hbars">
        {VIOLATIONS.map(([label, n]) => (
          <li key={label}>
            <span className="hb-l">{label}</span>
            <span className="hb-track" aria-hidden="true">
              <span className="hb-fill" style={{ width: `${(n / MAX) * 100}%` }} />
            </span>
            <span className="hb-n">{n}</span>
          </li>
        ))}
      </ul>
      <p className="fig-note">From the team&rsquo;s report. Issues were rated on a severity scale adapted from Nielsen&rsquo;s.</p>
    </figure>
  )
}
