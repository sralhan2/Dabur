import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { channelData } from '../data/channelData'

export default function DemandTab({ channel }) {
  const d = channelData[channel]

  return (
    <div className="panel">
      <div className="panel-head">
        <div className="panel-title">{d.demandLabel}</div>
        <div className="panel-note">Indexed to forecast = 100</div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={d.demand}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="period" stroke="#C9C2AC" tickLine={false} axisLine={false} />
          <YAxis domain={[80, 140]} stroke="#C9C2AC" tickLine={false} axisLine={false} />
          <Tooltip contentStyle={{ background: '#1D3125', border: '1px solid #2C4636', fontSize: 12 }} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Line type="monotone" dataKey="forecast" name="Forecast" stroke="#7FA084" strokeDasharray="4 4" dot={false} />
          <Line type="monotone" dataKey="a" name={d.demandSeriesNames[0]} stroke="#C9932F" strokeWidth={2.5} dot={{ r: 3 }} />
          <Line type="monotone" dataKey="b" name={d.demandSeriesNames[1]} stroke="#B8493B" strokeWidth={2.5} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
      <p style={{ fontSize: 13, color: 'var(--paper-dim)', marginTop: 8, maxWidth: 640 }}>
        {d.demandNote}
      </p>
    </div>
  )
}
