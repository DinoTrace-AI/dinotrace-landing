const TweaksPanel = ({ signatureMoment, setSignatureMoment, visible }) => {
  const opts = [
    { id: 'graph', label: 'Agent graph', sub: 'Self-organizing crew' },
    { id: 'ticker', label: 'Live ticker', sub: 'Real-time event feed' },
    { id: 'playground', label: 'Playground', sub: 'Type → crew assembles' },
  ];
  if (!visible) return null;
  return (
    <div className="tweaks-panel">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div className="eyebrow">Tweaks</div>
        <span className="mono" style={{ fontSize: 10, color: 'var(--ink-faint)' }}>hero / signature</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {opts.map((o) => (
          <button key={o.id} onClick={() => setSignatureMoment(o.id)}
            style={{
              textAlign: 'left', padding: '10px 12px', borderRadius: 10,
              border: '1px solid', borderColor: signatureMoment === o.id ? 'var(--ink)' : 'var(--hair)',
              background: signatureMoment === o.id ? 'var(--ink)' : 'white',
              color: signatureMoment === o.id ? 'white' : 'var(--ink)',
              cursor: 'pointer', transition: 'all .2s var(--ease-out)',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
            <div style={{
              width: 16, height: 16, borderRadius: '50%', border: '1.5px solid',
              borderColor: signatureMoment === o.id ? 'white' : 'var(--hair-strong)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              {signatureMoment === o.id && <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'white' }} />}
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500, fontFamily: 'var(--sans)' }}>{o.label}</div>
              <div style={{ fontSize: 11, color: signatureMoment === o.id ? 'rgba(255,255,255,0.7)' : 'var(--ink-faint)', marginTop: 1 }}>{o.sub}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

window.TweaksPanel = TweaksPanel;
