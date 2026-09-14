const NAV_ITEMS = [
  { id: 'command', label: 'Command Center' },
  { id: 'otif', label: 'Perfect Order' },
  { id: 'network', label: 'Network Pulse' },
  { id: 'quality', label: 'Quality Watch' },
  { id: 'demand', label: 'Demand-Supply' },
]

export default function Sidebar({ active, onChange }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">Nerve Center</div>
        <div className="brand-sub">Dabur Supply Chain Control Tower</div>
      </div>
      <nav className="nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${active === item.id ? 'active' : ''}`}
            onClick={() => onChange(item.id)}
          >
            <span className="nav-dot" />
            {item.label}
          </button>
        ))}
      </nav>
      <div className="sidebar-foot">
        Six plants · five regional CFAs<br />
        Data refreshed every 15 min from SAP, DMS &amp; Nielsen feeds
      </div>
    </aside>
  )
}
