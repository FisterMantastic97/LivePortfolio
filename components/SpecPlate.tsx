/** The 60-second read. Same rows in the same spot on every case study. */
export default function SpecPlate({ model, rows }: { model: string; rows: [string, string][] }) {
  return (
    <div className="plate-wrap">
      <div className="plate">
        <span className="rivet tl" aria-hidden="true" />
        <span className="rivet tr" aria-hidden="true" />
        <span className="rivet bl" aria-hidden="true" />
        <span className="rivet br" aria-hidden="true" />
        <div className="plate-head">
          <h2 className="plate-k">★ Spec plate</h2>
          <span className="plate-model">{model}</span>
        </div>
        <dl className="plate-rows">
          {rows.map(([dt, dd]) => (
            <div key={dt}>
              <dt>{dt}</dt>
              <dd>{dd}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
