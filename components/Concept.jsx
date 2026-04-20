const Concept = () => {
  const pillars = [
    {
      num: '01',
      title: 'Crews',
      subtitle: 'Missions, not microservices',
      body: 'Orchestrated teams of agents aligned around an outcome — fraud detection, compliance, brand safety.',
      icon: IconUsers,
    },
    {
      num: '02',
      title: 'Agents',
      subtitle: 'Autonomous, with a job to do',
      body: 'Each agent holds a role, a scope, and a responsibility. They coordinate, escalate, and hand off.',
      icon: IconBot,
    },
    {
      num: '03',
      title: 'Skills',
      subtitle: 'How agents think',
      body: 'Pattern recognition, regulatory checks, anomaly detection — the reasoning each agent applies.',
      icon: IconBrain,
    },
    {
      num: '04',
      title: 'Tools',
      subtitle: 'How agents act',
      body: 'Query databases, send alerts, flag accounts, file takedowns. Concrete actions, auditable trails.',
      icon: IconWrench,
    },
  ];

  return (
    <section id="concept" className="section-pad" style={{
      background: 'var(--bg-wash)',
      borderTop: '1px solid var(--hair)', borderBottom: '1px solid var(--hair)',
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'end' }} className="concept-head">
          <div>
            <Reveal><Eyebrow dot>The model</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 style={{
                marginTop: 20,
                fontSize: 'clamp(32px, 5vw, 56px)',
                letterSpacing: '-0.035em', lineHeight: 1.02,
              }}>
                A layered intelligence system —<br />
                <span style={{ color: 'var(--ink-faint)' }}>from strategy to execution.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p style={{ fontSize: 17, lineHeight: 1.55, maxWidth: 440 }}>
              Describe the problem once. DinoTrace translates your words into a crew of agents, wires them to your systems, and puts them to work. You supervise; they execute.
            </p>
          </Reveal>
        </div>

        {/* Pillars with connecting line */}
        <div style={{ marginTop: 80, position: 'relative' }}>
          <div aria-hidden style={{
            position: 'absolute', left: '6%', right: '6%', top: 38,
            height: 1, background: 'repeating-linear-gradient(90deg, var(--hair-strong) 0 6px, transparent 6px 12px)',
            zIndex: 0,
          }} className="concept-line" />

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative', zIndex: 1,
          }} className="concept-grid">
            {pillars.map((p, i) => (
              <Reveal key={p.num} delay={i * 100}>
                <div style={{
                  background: 'white', border: '1px solid var(--hair)',
                  borderRadius: 16, padding: 24,
                  boxShadow: 'var(--shadow-soft)',
                  height: '100%',
                  transition: 'all .3s var(--ease-out)',
                }} className="card-hover">
                  <div style={{
                    width: 56, height: 56, borderRadius: 14,
                    background: 'white', border: '1px solid var(--hair)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--ink)', margin: '0 auto',
                    boxShadow: 'var(--shadow-soft)',
                  }}>
                    <p.icon size={22} />
                  </div>
                  <div className="mono" style={{ textAlign: 'center', marginTop: 14, fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.06em' }}>
                    {p.num}
                  </div>
                  <h3 style={{ textAlign: 'center', marginTop: 6, fontSize: 22, letterSpacing: '-0.02em' }}>{p.title}</h3>
                  <div style={{ textAlign: 'center', marginTop: 4, fontSize: 13, fontWeight: 500, color: 'var(--blue-deep)' }}>
                    {p.subtitle}
                  </div>
                  <p style={{ marginTop: 14, fontSize: 13.5, lineHeight: 1.55, color: 'var(--ink-muted)', textAlign: 'center' }}>
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={500}>
          <div style={{
            marginTop: 40, textAlign: 'center',
            display: 'inline-flex', width: '100%', justifyContent: 'center',
          }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '10px 16px', borderRadius: 999,
              border: '1px dashed var(--hair-strong)',
              background: 'rgba(255,255,255,0.6)',
              fontSize: 13, color: 'var(--ink-muted)',
              fontFamily: 'var(--mono)',
            }}>
              <IconMessage size={14} />
              Describe your problem. DinoTrace builds the crew.
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .concept-head { grid-template-columns: 1fr !important; gap: 24px !important; }
          .concept-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .concept-line { display: none; }
        }
        @media (max-width: 560px) {
          .concept-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

window.Concept = Concept;
