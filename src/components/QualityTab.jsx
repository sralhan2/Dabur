import { qualityBatches } from '../data/mockData'

export default function QualityTab() {
  return (
    <div className="panel">
      <div className="panel-head">
        <div className="panel-title">Batch traceability, plant to shelf</div>
        <div className="panel-note">Live batches with complaint linkage and shelf-life exposure</div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Batch</th>
            <th>SKU</th>
            <th>Plant</th>
            <th>Status</th>
            <th>Complaints (30d)</th>
            <th>Expiry risk</th>
          </tr>
        </thead>
        <tbody>
          {qualityBatches.map((b) => (
            <tr key={b.batch}>
              <td style={{ fontFamily: 'var(--mono)' }}>{b.batch}</td>
              <td>{b.sku}</td>
              <td>{b.plant}</td>
              <td><span className={`pill ${b.status.toLowerCase()}`}>{b.status}</span></td>
              <td>{b.complaints}</td>
              <td style={{ color: b.expiryRisk === 'High' ? 'var(--brick)' : b.expiryRisk === 'Medium' ? 'var(--turmeric-soft)' : 'var(--leaf-400)' }}>
                {b.expiryRisk}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
