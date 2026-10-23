// Means, SDs, and group sizes come from the dashboard usability report (Mitchell & Rehman).
const ROWS = [
  { type: 'Analog', n: 25, m: 82.17, sd: 9.18, tone: 'low' },
  { type: 'Hybrid', n: 36, m: 86.9, sd: 6.12, tone: 'mid' },
  { type: 'Digital', n: 4, m: 90.0, sd: 3.69, tone: 'thin' },
]

export default function DashScores() {
  return (
    <figure className="figure">
      <div className="fig-head">
        <p className="fig-k">★ Fig 01 · Usability scores</p>
        <p className="fig-t">Average score by dashboard type, out of 100</p>
      </div>
      <ul className="dbars">
        {ROWS.map((r) => (
          <li key={r.type}>
            <span className="db-l"><b>{r.type}</b><span>{r.n} drivers</span></span>
            <span className="db-track" aria-hidden="true">
              <span className={`db-fill ${r.tone}`} style={{ width: `${r.m}%` }} />
            </span>
            <span className="db-v"><b>{r.m.toFixed(1)}</b><span>SD {r.sd.toFixed(1)}</span></span>
          </li>
        ))}
      </ul>
      <p className="fig-note">
        Scored with a modified seven-item System Usability Scale, converted to 100. Analog scored
        lower than hybrid and digital combined, t(63) = &minus;2.15, p &lt; .05, about half a standard
        deviation. The digital bar is hatched because four drivers is too few to compare on its own.
      </p>
    </figure>
  )
}
