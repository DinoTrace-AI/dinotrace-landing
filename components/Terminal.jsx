// Two-track how-it-works: prebuilt templates OR conversation.
const TEMPLATES = [
  { id: 'fraud', name: 'Fraud Detection', icon: '🛡', agents: 4, eta: '12 min', tag: 'Risk' },
  { id: 'phish', name: 'Anti-Phishing', icon: '◎', agents: 4, eta: '8 min', tag: 'Brand safety' },
  { id: 'vip', name: 'VIP Risk', icon: '★', agents: 3, eta: '10 min', tag: 'Risk' },
  { id: 'aml', name: 'AML Screening', icon: '⚖', agents: 5, eta: '18 min', tag: 'Compliance' },
  { id: 'retention', name: 'Retention Ops', icon: '⟳', agents: 4, eta: '14 min', tag: 'Growth' },
  { id: 'support', name: 'Player Support Triage', icon: '✦', agents: 3, eta: '9 min', tag: 'Service' },
  { id: 'rg', name: 'Responsible Gaming', icon: '◐', agents: 3, eta: '11 min', tag: 'Compliance' },
  { id: 'custom', name: 'Custom', icon: '+', agents: null, eta: 'chat', tag: 'Describe it', isCustom: true },
];

const SCENES = [
  { label: '01 · Describe', prompt: 'I want to cut bonus abuse across our new promos',
    response: [
      { t: 'out', text: 'Analyzing operational context...' },
      { t: 'out', text: 'Matched playbook: Fraud Detection (95%)' },
      { t: 'out', text: 'Prebuilt crew · 4 agents · deploy in 12 min' },
      { t: 'q', text: 'Which systems should the crew connect to?' },
    ]},
  { label: '02 · Configure', prompt: 'player_db, payments_api, promo_engine',
    response: [
      { t: 'out', text: 'Connecting 3 sources... ✓' },
      { t: 'out', text: 'Assembling crew:' },
      { t: 'agent', text: 'Bonus Abuse Analyst     → clustering · pattern rec' },
      { t: 'agent', text: 'Transaction Monitor     → velocity · anomaly' },
      { t: 'agent', text: 'Device Fingerprint Agent→ browser · ip · geo' },
      { t: 'agent', text: 'AML Watchdog            → regulatory checks' },
      { t: 'q', text: 'Ready to deploy?' },
    ]},
  { label: '03 · Deploy', prompt: 'yes, ship to production',
    response: [
      { t: 'out', text: 'Provisioning crew... ✓' },
      { t: 'out', text: 'Wiring tools... ✓' },
      { t: 'out', text: 'Smoke tests passing... ✓' },
      { t: 'live', text: '● CREW LIVE · 4 agents · monitoring 14,382 accounts' },
      { t: 'event', text: '[00:02] Bonus Abuse Analyst flagged cluster: 6 accts · €4,320' },
      { t: 'event', text: '[00:04] Transaction Monitor: clean sweep 2,180 tx' },
      { t: 'event', text: '[00:07] AML Watchdog escalated #8821 → compliance' },
    ]},
];

const Terminal = () => {
  const [scene, setScene] = React.useState(0);
  const [typedPrompt, setTypedPrompt] = React.useState('');
  const [visibleLines, setVisibleLines] = React.useState(0);
  const [promptDone, setPromptDone] = React.useState(false);
  const [selectedTmpl, setSelectedTmpl] = React.useState('fraud');

  const current = SCENES[scene];

  React.useEffect(() => {
    setTypedPrompt(''); setVisibleLines(0); setPromptDone(false);
    let i = 0;
    const typer = setInterval(() => {
      i++;
      setTypedPrompt(current.prompt.slice(0, i));
      if (i >= current.prompt.length) {
        clearInterval(typer);
        setPromptDone(true);
        current.response.forEach((_, k) => {
          setTimeout(() => setVisibleLines(k + 1), 500 + k * 420);
        });
        setTimeout(() => setScene((s) => (s + 1) % SCENES.length), 500 + current.response.length * 420 + 2200);
      }
    }, 35);
    return () => clearInterval(typer);
  }, [scene]);

  const lineStyle = (t) => {
    if (t === 'q') return { color: '#F4D06F' };
    if (t === 'agent') return { color: '#6AAFFF', fontFamily: 'var(--mono)' };
    if (t === 'live') return { color: 'var(--lime-glow)', fontWeight: 600 };
    if (t === 'event') return { color: 'var(--ink-faint)' };
    return { color: 'rgba(255,255,255,0.78)' };
  };

  return (
    <section id="how-it-works" className="section-pad" style={{
      background: 'var(--bg-darker)', color: 'white',
      position: 'relative', overflow: 'hidden',
    }}>
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 800px 400px at 30% 20%, rgba(58,135,249,0.18), transparent 60%), radial-gradient(ellipse 600px 400px at 80% 80%, rgba(168,205,73,0.1), transparent 60%)',
      }} />
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
        maskImage: 'radial-gradient(ellipse 60% 80% at 50% 50%, black, transparent)',
        WebkitMaskImage: 'radial-gradient(ellipse 60% 80% at 50% 50%, black, transparent)',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'end', marginBottom: 48 }} className="term-head">
          <div>
            <div className="eyebrow" style={{ color: '#6AAFFF' }}>
              <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: '#6AAFFF', marginRight: 8 }} />
              How it works
            </div>
            <h2 style={{ marginTop: 20, color: 'white',
              fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.035em', lineHeight: 1.02 }}>
              Start from a template —<br />
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>or describe it in your own words.</span>
            </h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.55, color: 'rgba(255,255,255,0.6)', maxWidth: 440 }}>
            Pick a prebuilt crew and be live in minutes. Or talk to our Agent Builder — it asks the right questions, configures the crew, and ships it. No YAML. No engineering ticket.
          </p>
        </div>

        {/* TRACK A: Prebuilt templates */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap', gap: 12 }}>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: 'var(--lime-glow)', marginRight: 8 }} />
              Track A · Start from a prebuilt crew
            </div>
            <span className="mono" style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>
              {TEMPLATES.length - 1} templates · more every month
            </span>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10,
          }} className="tmpl-grid">
            {TEMPLATES.map((t) => {
              const active = selectedTmpl === t.id;
              return (
                <button key={t.id} onClick={() => setSelectedTmpl(t.id)}
                  style={{
                    textAlign: 'left', cursor: 'pointer',
                    background: active ? 'rgba(58,135,249,0.12)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${active ? 'rgba(58,135,249,0.5)' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: 12, padding: '14px 14px',
                    color: 'white', fontFamily: 'var(--sans)',
                    transition: 'all .2s var(--ease-out)',
                    display: 'flex', flexDirection: 'column', gap: 8,
                    minHeight: 92,
                    borderStyle: t.isCustom ? 'dashed' : 'solid',
                  }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 18, color: active ? '#9CC8FF' : 'rgba(255,255,255,0.7)' }}>{t.icon}</span>
                    <span className="mono" style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{t.tag}</span>
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em' }}>{t.name}</div>
                  <div className="mono" style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.45)', marginTop: 'auto' }}>
                    {t.agents ? `${t.agents} agents · ${t.eta} to deploy` : 'Describe · we build it'}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Track B header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 40, marginBottom: 14 }}>
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: '#6AAFFF', marginRight: 8 }} />
            Track B · Or describe it in plain English
          </div>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
        </div>

        {/* Scene indicator */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          {SCENES.map((s, i) => (
            <button key={s.label} onClick={() => setScene(i)}
              style={{
                fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 500, letterSpacing: '0.04em',
                padding: '6px 12px', borderRadius: 999,
                background: i === scene ? 'rgba(58,135,249,0.2)' : 'rgba(255,255,255,0.05)',
                color: i === scene ? '#9CC8FF' : 'rgba(255,255,255,0.5)',
                border: `1px solid ${i === scene ? 'rgba(58,135,249,0.4)' : 'rgba(255,255,255,0.1)'}`,
                cursor: 'pointer', textTransform: 'uppercase',
                transition: 'all .2s var(--ease-out)',
              }}>
              {s.label}
            </button>
          ))}
        </div>

        {/* Terminal */}
        <div style={{
          background: '#0A0E1A', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 14, overflow: 'hidden',
          boxShadow: '0 40px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(58,135,249,0.15)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8,
            padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
            <div style={{ display: 'flex', gap: 6 }}>
              <span className="term-dot" style={{ background: '#FF5F57' }} />
              <span className="term-dot" style={{ background: '#FEBC2E' }} />
              <span className="term-dot" style={{ background: '#28C840' }} />
            </div>
            <div style={{ margin: '0 auto', fontFamily: 'var(--mono)', fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>
              dinotrace · agent-builder · live
            </div>
            <span className="pill pill-live" style={{ padding: '2px 8px', fontSize: 10, background: 'rgba(168,205,73,0.15)', borderColor: 'rgba(168,205,73,0.3)', color: 'var(--lime-glow)' }}>
              <span className="pill-dot pill-dot-live" /> Connected
            </span>
          </div>

          <div style={{ padding: '28px 28px 28px', fontFamily: 'var(--mono)', fontSize: 13.5, lineHeight: 1.75,
            minHeight: 440, maxHeight: 520, overflow: 'hidden' }}>
            <div style={{ marginBottom: 16 }}>
              <span style={{ color: 'var(--lime-glow)' }}>you@dinotrace</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>:~$ </span>
              <span style={{ color: 'white' }}>{typedPrompt}</span>
              {!promptDone && <span className="caret" />}
            </div>
            <div style={{ paddingLeft: 16, borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
              {current.response.slice(0, visibleLines).map((line, i) => (
                <div key={i} style={{ ...lineStyle(line.t), opacity: 0, animation: 'term-fade .3s var(--ease-out) forwards' }}>
                  {line.t === 'q' && <span style={{ color: '#F4D06F' }}>▸ </span>}
                  {line.t === 'agent' && <span style={{ color: '#6AAFFF' }}>  ◆ </span>}
                  {line.t === 'out' && <span style={{ color: 'rgba(255,255,255,0.3)' }}>  › </span>}
                  {line.t === 'event' && <span style={{ color: 'rgba(255,255,255,0.3)' }}>  </span>}
                  {line.text}
                </div>
              ))}
              {promptDone && visibleLines < current.response.length && (
                <span className="caret" style={{ color: 'rgba(255,255,255,0.6)' }} />
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes term-fade { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 1100px) { .tmpl-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 820px) { .tmpl-grid { grid-template-columns: repeat(2, 1fr) !important; } .term-head { grid-template-columns: 1fr !important; gap: 20px !important; } }
      `}</style>
    </section>
  );
};

window.Terminal = Terminal;
