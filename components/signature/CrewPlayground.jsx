// Type a problem → watch a crew assemble.
const CREW_TEMPLATES = [
  {
    prompt: 'Detect bonus abuse across multiple accounts',
    crew: 'Fraud Detection Crew',
    agents: ['Bonus Abuse Analyst', 'Transaction Monitor', 'Device Fingerprint Agent', 'AML Watchdog'],
  },
  {
    prompt: 'Monitor fake sites targeting our players',
    crew: 'Anti-Phishing Crew',
    agents: ['Domain Scanner', 'SSL Monitor', 'Brand Guardian', 'Threat Reporter'],
  },
  {
    prompt: 'Automate player retention campaigns',
    crew: 'Marketing Crew',
    agents: ['Segment Builder', 'Campaign Runner', 'Churn Predictor', 'A/B Allocator'],
  },
  {
    prompt: 'Flag suspicious VIP deposit patterns',
    crew: 'VIP Risk Crew',
    agents: ['Velocity Watcher', 'Source-of-Funds Auditor', 'Jurisdiction Gate', 'Escalation Router'],
  },
];

const CrewPlayground = () => {
  const [idx, setIdx] = React.useState(0);
  const [typed, setTyped] = React.useState('');
  const [stage, setStage] = React.useState('typing'); // typing, thinking, building, done
  const [visibleAgents, setVisibleAgents] = React.useState(0);

  const current = CREW_TEMPLATES[idx];

  React.useEffect(() => {
    setTyped(''); setStage('typing'); setVisibleAgents(0);
    let i = 0;
    const typer = setInterval(() => {
      i++;
      setTyped(current.prompt.slice(0, i));
      if (i >= current.prompt.length) {
        clearInterval(typer);
        setTimeout(() => setStage('thinking'), 400);
        setTimeout(() => setStage('building'), 1300);
        current.agents.forEach((_, k) => {
          setTimeout(() => setVisibleAgents(k + 1), 1600 + k * 350);
        });
        setTimeout(() => setStage('done'), 1600 + current.agents.length * 350 + 400);
        setTimeout(() => setIdx((x) => (x + 1) % CREW_TEMPLATES.length), 7500);
      }
    }, 38);
    return () => clearInterval(typer);
  }, [idx]);

  return (
    <div style={{
      borderRadius: 16, border: '1px solid var(--hair)', background: 'white',
      boxShadow: 'var(--shadow-card)', overflow: 'hidden', width: '100%',
      // Reserve space for the tallest state so the page doesn't jump as agents appear
      minHeight: 440,
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--hair)', display: 'flex', alignItems: 'center', gap: 10, background: '#FAFBFC' }}>
        <LogoMark size={18} />
        <span className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          DinoTrace · Agent Builder
        </span>
      </div>

      <div style={{ padding: '24px 24px 20px', flex: 1 }}>
        {/* User prompt */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 20 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 14, background: '#EEF4FC',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            fontSize: 12, fontWeight: 600, color: 'var(--blue-deep)'
          }}>YOU</div>
          <div style={{ fontSize: 16, color: 'var(--ink)', lineHeight: 1.5, paddingTop: 3 }}>
            {typed}
            {stage === 'typing' && <span className="caret" />}
          </div>
        </div>

        {/* Thinking */}
        {(stage === 'thinking' || stage === 'building' || stage === 'done') && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 16 }}>
            <div style={{
              width: 28, height: 28, borderRadius: 14, background: 'var(--ink)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'white'
            }}>
              <LogoMark size={14} />
            </div>
            <div style={{ paddingTop: 3, flex: 1 }}>
              {stage === 'thinking' && (
                <span className="mono" style={{ fontSize: 13, color: 'var(--ink-faint)' }}>
                  Analyzing problem<span style={{ animation: 'blink 1s infinite' }}>...</span>
                </span>
              )}
              {(stage === 'building' || stage === 'done') && (
                <div>
                  <div style={{ fontSize: 14, color: 'var(--ink-muted)', marginBottom: 12 }}>
                    Assembling <strong style={{ color: 'var(--ink)' }}>{current.crew}</strong> with {current.agents.length} agents:
                  </div>
                  <div style={{ display: 'grid', gap: 8 }}>
                    {current.agents.map((a, k) => (
                      <div key={a}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 10,
                          padding: '10px 12px',
                          background: k < visibleAgents ? 'white' : '#FAFBFC',
                          border: '1px solid',
                          borderColor: k < visibleAgents ? 'var(--hair)' : '#F0F2F5',
                          borderRadius: 10,
                          opacity: k < visibleAgents ? 1 : 0,
                          transform: k < visibleAgents ? 'translateY(0)' : 'translateY(8px)',
                          transition: 'all .45s var(--ease-spring)',
                        }}>
                        <div style={{
                          width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                          background: 'var(--blue-tint)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: 'var(--blue-deep)', fontSize: 11, fontWeight: 600,
                          fontFamily: 'var(--mono)'
                        }}>
                          0{k + 1}
                        </div>
                        <span style={{ fontSize: 13, color: 'var(--ink)', fontWeight: 500 }}>{a}</span>
                        {k < visibleAgents && stage === 'done' && (
                          <span className="mono pill pill-live" style={{ marginLeft: 'auto', fontSize: 9, padding: '2px 6px' }}>
                            <span className="pill-dot" /> Ready
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Prompt suggestions */}
      <div style={{ padding: '12px 18px', borderTop: '1px solid var(--hair)', background: '#FAFBFC', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <span className="mono" style={{ fontSize: 10, color: 'var(--ink-faint)', alignSelf: 'center', marginRight: 4, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          Try:
        </span>
        {CREW_TEMPLATES.map((t, i) => (
          <button key={i}
            onClick={() => setIdx(i)}
            style={{
              fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500,
              background: i === idx ? 'var(--ink)' : 'white',
              color: i === idx ? 'white' : 'var(--ink-2)',
              border: '1px solid', borderColor: i === idx ? 'var(--ink)' : 'var(--hair)',
              padding: '4px 10px', borderRadius: 999,
              cursor: 'pointer', transition: 'all .2s var(--ease-out)',
            }}>
            {t.prompt.length > 40 ? t.prompt.slice(0, 40) + '…' : t.prompt}
          </button>
        ))}
      </div>
    </div>
  );
};

window.CrewPlayground = CrewPlayground;
