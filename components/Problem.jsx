const Problem = () => {
  const painPoints = [
    {
      eyebrow: '01 · Risk & integrity',
      title: 'Threats evolve faster than process',
      body: 'Bonus abuse, fraud rings, payment anomalies, account takeovers — by the time humans spot a pattern, the damage is already priced in.',
      stat: '€4.2M',
      statLabel: 'avg. annual loss · mid-size operator',
      accent: '#E45B5B',
    },
    {
      eyebrow: '02 · Growth & retention',
      title: 'Campaigns that never quite land',
      body: 'Segmentation, retention, reactivation, VIP management — every growth lever needs constant tuning, and marketing ops never sleeps.',
      stat: '3.2×',
      statLabel: 'lift from continuously-tuned campaigns',
      accent: '#1E5FD8',
    },
    {
      eyebrow: '03 · Compliance & support',
      title: 'The work compounds every shift',
      body: 'AML reviews, KYC, responsible gaming checks, regulatory reports, 24/7 player support — paperwork and queues multiply faster than headcount.',
      stat: '68%',
      statLabel: 'of ops time spent on repeatable review',
      accent: '#E6A23C',
    },
  ];

  return (
    <section id="problem" className="section-pad" style={{ position: 'relative' }}>
      <div className="container">
        <Reveal>
          <Eyebrow dot>The problem</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 style={{
            marginTop: 20,
            fontSize: 'clamp(32px, 5vw, 60px)',
            letterSpacing: '-0.035em',
            lineHeight: 1.02,
            maxWidth: 880,
          }}>
            Operations is a thousand jobs,
            <span style={{ color: 'var(--ink-faint)' }}> and your team can only be in so many places.</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p style={{
            marginTop: 22, fontSize: 18, lineHeight: 1.55, maxWidth: 640,
          }}>
            Risk, compliance, marketing, retention, support, brand safety — every function needs constant attention. Teams are stretched thin, tools are disconnected, and the work compounds faster than you can hire.
          </p>
        </Reveal>

        {/* Stat cards in a horizontal split-grid */}
        <div style={{
          marginTop: 72,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
          border: '1px solid var(--hair)', borderRadius: 16,
          overflow: 'hidden', background: 'white',
        }} className="problem-grid">
          {painPoints.map((p, i) => (
            <Reveal key={i} delay={i * 100}
              style={{
                padding: 36,
                borderLeft: i > 0 ? '1px solid var(--hair)' : 'none',
                position: 'relative',
              }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: p.accent, opacity: 0.4 }} />
              <div className="eyebrow" style={{ color: p.accent }}>
                {p.eyebrow}
              </div>
              <h3 style={{
                marginTop: 16, fontSize: 22, lineHeight: 1.2,
                letterSpacing: '-0.02em', fontWeight: 600,
                minHeight: 54,
              }}>{p.title}</h3>
              <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.55, color: 'var(--ink-muted)' }}>
                {p.body}
              </p>
              <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px dashed var(--hair)' }}>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: 32, fontWeight: 500,
                  letterSpacing: '-0.02em', color: 'var(--ink)',
                }} className="tabular">{p.stat}</div>
                <div className="eyebrow" style={{ marginTop: 6, textTransform: 'none', letterSpacing: '0.01em', fontSize: 11 }}>
                  {p.statLabel}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={360}>
          <div style={{
            marginTop: 36, textAlign: 'center', fontSize: 17,
            color: 'var(--ink)', fontWeight: 500, letterSpacing: '-0.01em',
          }}>
            DinoTrace deploys AI agents for any operational challenge — <span style={{ color: 'var(--ink-faint)', fontWeight: 400 }}>without a single line of code.</span>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .problem-grid { grid-template-columns: 1fr !important; }
          .problem-grid > * { border-left: none !important; border-top: 1px solid var(--hair); }
          .problem-grid > *:first-child { border-top: none; }
        }
      `}</style>
    </section>
  );
};

window.Problem = Problem;
