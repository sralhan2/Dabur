import { channels } from '../data/channelData'

export default function ChannelSelector({ active, onChange }) {
  return (
    <div className="channel-bar">
      {channels.map((c) => (
        <button
          key={c.id}
          className={`channel-pill ${active === c.id ? 'active' : ''}`}
          onClick={() => onChange(c.id)}
        >
          {c.label}
          <span className="channel-share">{c.share}%</span>
        </button>
      ))}
    </div>
  )
}
