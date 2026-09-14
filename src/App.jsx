import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import ChannelSelector from './components/ChannelSelector'
import CommandTab from './components/CommandTab'
import OtifTab from './components/OtifTab'
import NetworkTab from './components/NetworkTab'
import QualityTab from './components/QualityTab'
import DemandTab from './components/DemandTab'

const CHANNEL_TABS = ['otif', 'network', 'demand']

const TITLES = {
  command: { title: 'Command Center', sub: 'Single view of every open exception, ranked by what it costs.' },
  otif: { title: 'Perfect Order', sub: 'Fulfillment performance and root cause, by channel.' },
  network: { title: 'Network Pulse', sub: 'Plant output plus channel-specific network health — CFAs, key accounts, platforms, or dark stores.' },
  quality: { title: 'Quality Watch', sub: 'Batch-level traceability from plant floor to shelf, channel-agnostic.' },
  demand: { title: 'Demand-Supply', sub: 'Forecast against what each channel actually sells through.' },
}

export default function App() {
  const [tab, setTab] = useState('command')
  const [channel, setChannel] = useState('gt')
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30000)
    return () => clearInterval(t)
  }, [])

  const meta = TITLES[tab]

  return (
    <div className="app">
      <Sidebar active={tab} onChange={setTab} />
      <main className="main">
        <div className="page-head">
          <div>
            <div className="page-title">{meta.title}</div>
            <div className="page-sub">{meta.sub}</div>
          </div>
          <div className="timestamp">
            {now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })} · {now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })} IST
          </div>
        </div>

        {CHANNEL_TABS.includes(tab) && <ChannelSelector active={channel} onChange={setChannel} />}

        {tab === 'command' && <CommandTab />}
        {tab === 'otif' && <OtifTab channel={channel} />}
        {tab === 'network' && <NetworkTab channel={channel} />}
        {tab === 'quality' && <QualityTab />}
        {tab === 'demand' && <DemandTab channel={channel} />}
      </main>
    </div>
  )
}
