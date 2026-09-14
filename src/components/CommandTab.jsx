import KpiRibbon from './KpiRibbon'
import { exceptions } from '../data/mockData'
import { channels } from '../data/channelData'

export default function CommandTab() {
  return (
    <>
      <KpiRibbon />

      <div className="panel">
        <div className="panel-head">
          <div className="panel-title">Channel mix</div>
          <div className="panel-note">Share of network volume</div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Channel</th>
              <th>Share of volume</th>
            </tr>
          </thead>
          <tbody>
            {channels.map((c) => (
              <tr key={c.id}>
                <td>{c.label}</td>
                <td>
                  <div className="bar-cell">
                    <div className="bar-track" style={{ maxWidth: 200 }}>
                      <div className="bar-fill" style={{ width: `${c.share}%`, background: '#C9932F' }} />
                    </div>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 12 }}>{c.share}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="panel">
        <div className="panel-head">
          <div className="panel-title">Exception queue</div>
          <div className="panel-note">Ranked by financial exposure, across all channels and modules</div>
        </div>
        {exceptions.map((e) => (
          <div className="exception-row" key={e.id}>
            <div className={`sev-mark ${e.severity}`} />
            <div>
              <div className="exception-title">{e.title}</div>
              <div className="exception-module">{e.module} · {e.channel} · {e.id}</div>
            </div>
            <div className="exception-impact">{e.impact}</div>
            <div className="exception-age">{e.age}</div>
          </div>
        ))}
      </div>
    </>
  )
}
