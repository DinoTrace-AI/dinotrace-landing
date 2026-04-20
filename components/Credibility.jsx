const Credibility = () => (
  <section id="credibility" className="section-pad-sm" style={{
    borderTop: '1px solid var(--hair)', borderBottom: '1px solid var(--hair)',
    background: 'var(--bg)',
  }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="cred-grid">
        <div>
          <Reveal><Eyebrow dot>Built by operators</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 style={{ marginTop: 18, fontSize: 'clamp(28px, 4vw, 40px)', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              We've run these problems.<br />
              <span style={{ color: 'var(--ink-faint)' }}>Now we're building the solution.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ marginTop: 16, fontSize: 15.5, lineHeight: 1.6, maxWidth: 480 }}>
              DinoTrace was founded by operators and engineers with 10+ years in iGaming — across sportsbooks, casinos, and multi-brand groups. Multi-jurisdiction, multi-regulator, multi-headache.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, background: 'var(--hair)', borderRadius: 14, overflow: 'hidden', border: '1px solid var(--hair)' }}>
            {[
              { label: 'Years in iGaming', val: '10+' },
              { label: 'Jurisdictions covered', val: '14' },
              { label: 'Fraud patterns seen', val: '200+' },
              { label: 'Code required', val: '0', mono: true },
            ].map((s) => (
              <div key={s.label} style={{ background: 'white', padding: '28px 24px' }}>
                <div className="tabular" style={{ fontSize: 40, fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--ink)', fontFamily: s.mono ? 'var(--mono)' : 'var(--sans)' }}>{s.val}</div>
                <div className="eyebrow" style={{ marginTop: 6, textTransform: 'none', letterSpacing: '0.01em', fontSize: 12 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={320}>
        <div style={{
          marginTop: 40, paddingTop: 28, borderTop: '1px dashed var(--hair)',
          display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center',
          color: 'var(--ink-muted)',
        }}>
          {[
            { icon: IconLock, label: 'Security-first architecture' },
            { icon: IconCheck, label: 'GDPR ready' },
            { icon: IconCheck, label: 'End-to-end encryption' },
            { icon: IconCheck, label: 'SOC 2 Type II (in progress)' },
          ].map((b) => (
            <span key={b.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
              <b.icon size={14} /> {b.label}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
    <style>{`
      @media (max-width: 900px) { .cred-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
    `}</style>
  </section>
);

window.Credibility = Credibility;
