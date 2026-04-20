const Crews = () => {
  const live = [
    {
      icon: IconShield,
      title: 'Fraud Detection',
      body: 'Autonomous agents monitoring transactions, detecting bonus abuse, and flagging suspicious behavior in real-time.',
      agents: ['Bonus Abuse Analyst', 'Transaction Monitor', 'VIP Risk Assessor', 'AML Watchdog'],
      integrations: 'Player DBs · Payment gateways · Slack · Email',
      accent: '#3A87F9',
    },
    {
      icon: IconRadar,
      title: 'Anti-Phishing',
      body: 'Proactive brand protection agents scanning for phishing domains, fake sites, and SSL anomalies targeting your players.',
      agents: ['Domain Scanner', 'SSL Monitor', 'Threat Reporter', 'Brand Guardian'],
      integrations: 'DNS feeds · Registrars · Takedown workflows · API',
      accent: '#8FC23D',
    },
  ];

  const upcoming = [
    { icon: IconMegaphone, title: 'Marketing', body: 'Campaign automation, segmentation, retention flows.', eta: 'Q2 2026' },
    { icon: IconHeadphones, title: 'Customer Service', body: 'Automated support, smart escalation, 24/7 coverage.', eta: 'Q2 2026' },
    { icon: IconPuzzle, title: 'Build your own', body: 'Describe any problem. DinoTrace builds the crew.', eta: 'Q3 2026' },
  ];

  return (
    <section id="crews" className="section-pad">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'end' }} className="crews-head">
          <div>
            <Reveal><Eyebrow dot>Agent crews</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 style={{
                marginTop: 20,
                fontSize: 'clamp(32px, 5vw, 56px)',
                letterSpacing: '-0.035em', lineHeight: 1.02,
              }}>
                What you can deploy<br />
                <span style={{ color: 'var(--ink-faint)' }}>today — and what's next.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p style={{ fontSize: 17, lineHeight: 1.55, maxWidth: 440 }}>
              Two crews are live and running in production. Three more ship across 2026. Custom crews are built to spec — describe the problem, we ship the solution.
            </p>
          </Reveal>
        </div>

        {/* Live crews */}
        <div style={{ marginTop: 72, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="crews-live">
          {live.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <div className="card card-hover" style={{
                position: 'relative', overflow: 'hidden',
                padding: 0, height: '100%',
              }}>
                {/* Accent bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, bottom: 0, width: 4,
                  background: c.accent,
                }} />
                <div style={{ padding: '28px 28px 28px 32px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: 14,
                      background: c.accent + '12',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: c.accent,
                    }}>
                      <c.icon size={26} />
                    </div>
                    <span className="pill pill-live">
                      <span className="pill-dot pill-dot-live" /> Live
                    </span>
                  </div>
                  <h3 style={{ marginTop: 20, fontSize: 28, letterSpacing: '-0.025em' }}>
                    {c.title} <span style={{ color: 'var(--ink-faint)', fontWeight: 500 }}>Crew</span>
                  </h3>
                  <p style={{ marginTop: 10, fontSize: 14.5, lineHeight: 1.55 }}>{c.body}</p>

                  <div style={{ marginTop: 22 }}>
                    <div className="eyebrow" style={{ marginBottom: 10 }}>Agents in this crew</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {c.agents.map((a) => (
                        <span key={a} style={{
                          fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 500,
                          padding: '5px 10px', borderRadius: 6,
                          background: 'var(--bg-tint)',
                          color: 'var(--ink-2)',
                          border: '1px solid var(--hair)',
                        }}>
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: 24, paddingTop: 18, borderTop: '1px dashed var(--hair)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 11.5, color: 'var(--ink-faint)' }}>
                      {c.integrations}
                    </div>
                    <a href="#early-access" style={{
                      fontSize: 13, fontWeight: 500, color: 'var(--ink)',
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                    }} className="link-underline">
                      Request access <IconArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Divider */}
        <div style={{ margin: '48px 0 24px', display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ flex: 1, height: 1, background: 'var(--hair)' }} />
          <div className="eyebrow">Roadmap · 2026</div>
          <div style={{ flex: 1, height: 1, background: 'var(--hair)' }} />
        </div>

        {/* Upcoming */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="crews-upcoming">
          {upcoming.map((u, i) => (
            <Reveal key={u.title} delay={i * 80}>
              <div style={{
                padding: 24, borderRadius: 16,
                border: '1px dashed var(--hair-strong)',
                background: 'rgba(255,255,255,0.5)',
                height: '100%',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: 'var(--bg-tint)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--ink-faint)',
                  }}>
                    <u.icon size={20} />
                  </div>
                  <span className="pill" style={{ fontSize: 10 }}>
                    {u.eta}
                  </span>
                </div>
                <h4 style={{ marginTop: 18, fontSize: 18, letterSpacing: '-0.02em', color: 'var(--ink-2)' }}>
                  {u.title} <span style={{ color: 'var(--ink-faint)', fontWeight: 500 }}>Crew</span>
                </h4>
                <p style={{ marginTop: 8, fontSize: 13.5, lineHeight: 1.55, color: 'var(--ink-muted)' }}>{u.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .crews-head { grid-template-columns: 1fr !important; gap: 24px !important; }
          .crews-live { grid-template-columns: 1fr !important; }
          .crews-upcoming { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

window.Crews = Crews;
