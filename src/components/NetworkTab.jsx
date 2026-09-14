import { channelData } from '../data/channelData'
import { plants } from '../data/mockData'

export default function NetworkTab({ channel }) {
  const d = channelData[channel]
  const isRate = /rate|win/i.test(d.networkMetricLabel)

  return (
    <div className="grid-2">
      <div className="panel">
        <div className="panel-head">
          <div className="panel-title">{d.networkLabel}</div>
          <div className="panel-note">{d.networkMetricLabel} vs target, by node</div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Node</th>
              <th>{d.networkMetricLabel}</th>
              <th>Target</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {d.networkEntities.map((n) => {
              const off = isRate ? n.metric < n.target : n.metric > n.target
              return (
                <tr key={n.name}>
                  <td>{n.name}</td>
                  <td style={{ fontFamily: 'var(--mono)', color: off ? 'var(--brick)' : 'var(--leaf-400)' }}>
                    {n.metric}{isRate ? '%' : ''}
                  </td>
                  <td style={{ fontFamily: 'var(--mono)', color: 'var(--paper-dim)' }}>
                    {n.target}{isRate ? '%' : ''}
                  </td>
                  <td style={{ color: 'var(--paper-dim)', fontSize: 12 }}>{n.note}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="panel">
        <div className="panel-head">
          <div className="panel-title">Plant output & OEE</div>
          <div className="panel-note">Today, tonnes — shared across all channels</div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Plant</th>
              <th>Output</th>
              <th>OEE</th>
            </tr>
          </thead>
          <tbody>
            {plants.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td style={{ fontFamily: 'var(--mono)' }}>{p.output}t</td>
                <td>
                  <div className="bar-cell">
                    <div className="bar-track">
                      <div
                        className="bar-fill"
                        style={{ width: `${p.oee}%`, background: p.oee < 80 ? '#B8493B' : '#3C6B4B' }}
                      />
                    </div>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 12 }}>{p.oee}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
