const Hero = ({ signatureMoment = 'graph' }) => {
  return (
    <section style={{
      position: 'relative',
      paddingTop: 160,
      paddingBottom: 80,
      overflow: 'hidden',
    }}>
      {/* Background */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 900px 500px at 50% 0%, rgba(58,135,249,0.08), transparent 60%), radial-gradient(ellipse 600px 400px at 80% 30%, rgba(168,205,73,0.06), transparent 60%)',
      }} />
      <div aria-hidden className="bg-grid" style={{
        position: 'absolute', inset: 0, zIndex: 0,
        maskImage: 'radial-gradient(ellipse 60% 80% at 50% 30%, black 0%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 60% 80% at 50% 30%, black 0%, transparent 80%)',
        opacity: 0.7,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Announcement pill */}
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="#early-access" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '6px 6px 6px 14px',
              border: '1px solid var(--hair)',
              background: 'rgba(255,255,255,.7)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderRadius: 999,
              fontSize: 13, color: 'var(--ink-muted)',
              transition: 'all .2s var(--ease-out)',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--hair-strong)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--hair)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <span className="pill pill-live" style={{ padding: '3px 8px', fontSize: 10 }}>
                <span className="pill-dot pill-dot-live" /> Early access
              </span>
              <span>First crews shipping now — more every month</span>
              <IconArrowRight size={14} />
            </a>
          </div>
        </Reveal>

        {/* Headline */}
        <h1 style={{
          marginTop: 36,
          textAlign: 'center',
          fontSize: 'clamp(44px, 8vw, 96px)',
          lineHeight: 0.98,
          fontWeight: 600,
          letterSpacing: '-0.04em',
          maxWidth: 1040,
          marginLeft: 'auto', marginRight: 'auto',
        }}>
          <Reveal delay={60} as="span" style={{ display: 'block' }}>
            The Agent Factory
          </Reveal>
          <Reveal delay={160} as="span" style={{ display: 'block' }}>
            <span style={{
              background: 'linear-gradient(90deg, #3A87F9 0%, #6AAFFF 45%, #A8CD49 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              fontStyle: 'italic',
              fontWeight: 500,
            }}>for iGaming.</span>
          </Reveal>
        </h1>

        {/* Subline */}
        <Reveal delay={280}>
          <p style={{
            marginTop: 26, textAlign: 'center',
            fontSize: 19, lineHeight: 1.5,
            color: 'var(--ink-muted)',
            maxWidth: 680, marginLeft: 'auto', marginRight: 'auto',
          }}>
            Deploy AI agent crews for every corner of your operation — risk, compliance, marketing, support, brand safety. Described in plain English, live in under an hour.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={360}>
          <div style={{ marginTop: 32, display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#early-access" className="btn btn-primary btn-lg">
              Request early access <IconArrowRight size={15} />
            </a>
            <a href="#how-it-works" className="btn btn-ghost btn-lg">
              <IconPlay size={12} /> See it in action
            </a>
          </div>
        </Reveal>

        {/* Micro-proof */}
        <Reveal delay={460}>
          <div style={{ marginTop: 26, display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', fontSize: 12, color: 'var(--ink-faint)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <IconCheck size={14} /> No code required
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <IconCheck size={14} /> Deploy in under 60 min
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <IconCheck size={14} /> Security-first architecture
            </span>
          </div>
        </Reveal>

        {/* Signature moment */}
        <Reveal delay={540}>
          <div style={{ marginTop: 72, maxWidth: 1080, marginLeft: 'auto', marginRight: 'auto' }}>
            {signatureMoment === 'graph' && <AgentGraph />}
            {signatureMoment === 'ticker' && <LiveTicker />}
            {signatureMoment === 'playground' && <CrewPlayground />}
          </div>
        </Reveal>

        {/* Coverage strip — problem surfaces we handle */}
        <div style={{ marginTop: 80 }}>
          <p className="eyebrow" style={{ textAlign: 'center', display: 'block' }}>
            One platform · every operational surface
          </p>
          <div style={{
            marginTop: 24,
            maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)',
            overflow: 'hidden',
          }}>
            <div className="marquee" style={{ gap: 48, opacity: 0.7 }}>
              {[...Array(2)].flatMap((_, k) => (
                ['FRAUD DETECTION', 'AML SCREENING', 'RESPONSIBLE GAMING', 'BONUS ABUSE', 'RETENTION OPS', 'PLAYER SUPPORT', 'VIP RISK', 'BRAND SAFETY', 'PAYMENT ANOMALIES', 'KYC AUTOMATION'].map((name) => (
                  <span key={k + name} className="mono" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    fontSize: 13, fontWeight: 500, letterSpacing: '0.1em',
                    color: 'var(--ink-muted)', whiteSpace: 'nowrap',
                  }}>
                    <span aria-hidden style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--brand-blue)', opacity: 0.7 }} />
                    {name}
                  </span>
                ))
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.Hero = Hero;
