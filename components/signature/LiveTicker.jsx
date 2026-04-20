// Live-feeling activity ticker — plausible agent events.
const TICKER_EVENTS = [
  { t: 'Bonus Abuse Analyst', action: 'flagged account cluster', detail: '6 accounts · same device · €4,320', tone: 'red', crew: 'FRAUD' },
  { t: 'Domain Scanner', action: 'registered threat domain', detail: 'casino-royal-safe.io · 94% phishing match', tone: 'amber', crew: 'PHISHING' },
  { t: 'Transaction Monitor', action: 'approved high-roller deposit', detail: 'VIP #8821 · €85,000 · clean', tone: 'green', crew: 'FRAUD' },
  { t: 'AML Watchdog', action: 'escalated to compliance', detail: 'structured deposits · 48h window', tone: 'red', crew: 'FRAUD' },
  { t: 'SSL Monitor', action: 'certificate anomaly', detail: 'brand-protect.net · self-signed', tone: 'amber', crew: 'PHISHING' },
  { t: 'VIP Risk Assessor', action: 'tier drop recommended', detail: 'player #4412 · velocity +340%', tone: 'amber', crew: 'FRAUD' },
  { t: 'Brand Guardian', action: 'takedown submitted', detail: 'fake-domain.co · filed w/ registrar', tone: 'green', crew: 'PHISHING' },
  { t: 'Threat Reporter', action: 'alert sent to #security', detail: 'Slack · 3 stakeholders · ack\'d', tone: 'green', crew: 'PHISHING' },
];

const toneColor = { red: '#E45B5B', amber: '#E6A23C', green: '#8FC23D' };

const LiveTicker = () => {
  const [events, setEvents] = React.useState(() =>
    TICKER_EVENTS.slice(0, 5).map((e, i) => ({ ...e, id: i, time: 4 + i * 7 }))
  );
  const [now, setNow] = React.useState(Date.now());
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCounter((c) => c + 1);
      setEvents((prev) => {
        const next = TICKER_EVENTS[(prev[0].id + 1) % TICKER_EVENTS.length];
        return [
          { ...next, id: prev[0].id + 1, time: 0 },
          ...prev.slice(0, 4).map(e => ({ ...e, time: e.time + 3 + Math.random() * 4 })),
        ];
      });
    }, 2800);
    const tick = setInterval(() => setNow(Date.now()), 1000);
    return () => { clearInterval(interval); clearInterval(tick); };
  }, []);

  const fmtTime = (s) => s < 60 ? `${Math.floor(s)}s ago` : `${Math.floor(s/60)}m ago`;

  return (
    <div style={{
      borderRadius: 16,
      border: '1px solid var(--hair)',
      background: 'white',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden',
      width: '100%',
    }}>
      {/* Header */}
      <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--hair)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#FAFBFC' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="pill pill-live" style={{ padding: '3px 8px' }}>
            <span className="pill-dot pill-dot-live" /> Live
          </span>
          <span className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.04em' }}>AGENT · ACTIVITY · FEED</span>
        </div>
        <span className="mono tabular" style={{ fontSize: 11, color: 'var(--ink-faint)' }}>
          {new Date(now).toLocaleTimeString('en-GB')}
        </span>
      </div>

      {/* Events */}
      <div style={{ padding: 4 }}>
        {events.map((ev, i) => (
          <div key={ev.id}
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto',
              gap: 14,
              padding: '12px 14px',
              borderRadius: 10,
              alignItems: 'center',
              transition: 'all .4s var(--ease-out)',
              opacity: 1 - i * 0.12,
              background: i === 0 ? 'rgba(58,135,249,0.04)' : 'transparent',
              animation: i === 0 ? 'none' : 'none',
            }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: toneColor[ev.tone],
                boxShadow: i === 0 ? `0 0 0 4px ${toneColor[ev.tone]}20` : 'none',
                transition: 'box-shadow .3s'
              }} />
              <span className="mono" style={{ fontSize: 10, fontWeight: 500, color: 'var(--ink-faint)', letterSpacing: '0.06em' }}>
                {ev.crew}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)' }}>{ev.t}</span>
              <span style={{ fontSize: 13, color: 'var(--ink-muted)' }}>{ev.action}</span>
              <span className="mono" style={{ fontSize: 12, color: 'var(--ink-faint)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>· {ev.detail}</span>
            </div>
            <span className="mono tabular" style={{ fontSize: 11, color: 'var(--ink-faint)' }}>
              {fmtTime(ev.time)}
            </span>
          </div>
        ))}
      </div>

      {/* Footer counter */}
      <div style={{ padding: '10px 18px', borderTop: '1px solid var(--hair)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FAFBFC' }}>
        <span className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)' }}>
          <span className="tabular" style={{ color: 'var(--ink)', fontWeight: 500 }}>{(12847 + counter).toLocaleString()}</span> events today
        </span>
        <span className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)' }}>
          <span style={{ color: 'var(--ink)', fontWeight: 500 }}>6</span> agents online
        </span>
      </div>
    </div>
  );
};

window.LiveTicker = LiveTicker;
