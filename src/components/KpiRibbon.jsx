import { kpis } from '../data/mockData'

export default function KpiRibbon() {
  return (
    <div className="kpi-ribbon">
      {kpis.map((k) => (
        <div className="kpi" key={k.label}>
          <div className="kpi-label">{k.label}</div>
          <div className="kpi-value">{k.value}</div>
          <div className={`kpi-delta ${k.trend}`}>{k.delta}</div>
        </div>
      ))}
    </div>
  )
}
