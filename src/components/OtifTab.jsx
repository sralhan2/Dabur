import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { channelData } from '../data/channelData'

export default function OtifTab({ channel }) {
  const d = channelData[channel]
  const maxShare = Math.max(...d.missReasons.map((r) => r.share))

  return (
    <>
      <div className="panel">
        <div className="panel-head">
          <div className="panel-title">{d.fulfillmentLabel}, last 8 weeks</div>
          <div className="panel-note">{d.fulfillmentSub}</div>
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={d.trend}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="period" stroke="#C9C2AC" tickLine={false} axisLine={false} />
            <YAxis domain={d.fulfillmentDomain} stroke="#C9C2AC" tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ background: '#1D3125', border: '1px solid #2C4636', fontSize: 12 }} />
            <Line
              type="monotone"
              dataKey={() => d.fulfillmentTarget}
              stroke="#7FA084"
              strokeDasharray="4 4"
              dot={false}
              strokeWidth={1.5}
              isAnimationActive={false}
              legendType="none"
            />
            <Line type="monotone" dataKey="value" stroke="#C9932F" strokeWidth={2.5} dot={{ r: 3, fill: '#C9932F' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="panel">
        <div className="panel-head">
          <div className="panel-title">Where the misses come from</div>
          <div className="panel-note">Share of failed order/demand events, trailing 4 weeks</div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Reason</th>
              <th>Share of misses</th>
            </tr>
          </thead>
          <tbody>
            {d.missReasons.map((r) => (
              <tr key={r.reason}>
                <td>{r.reason}</td>
                <td>
                  <div className="bar-cell">
                    <div className="bar-track">
                      <div
                        className="bar-fill"
                        style={{
                          width: `${(r.share / maxShare) * 100}%`,
                          background: r.share > 20 ? '#B8493B' : '#C9932F',
                        }}
                      />
                    </div>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 12 }}>{r.share}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
