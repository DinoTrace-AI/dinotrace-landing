const EarlyAccess = () => {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = (e) => { e.preventDefault(); if (!email) return; setSubmitted(true); };

  return (
    <section id="early-access" style={{
      position: 'relative', overflow: 'hidden',
      background: 'var(--bg-darker)',
      color: 'white',
      padding: '120px 0',
    }}>
      {/* BG */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 700px 500px at 30% 20%, rgba(58,135,249,0.3), transparent 60%), radial-gradient(ellipse 600px 400px at 80% 80%, rgba(168,205,73,0.2), transparent 60%)',
      }} />
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 60% 80% at 50% 50%, black, transparent)',
        WebkitMaskImage: 'radial-gradient(ellipse 60% 80% at 50% 50%, black, transparent)',
      }} />

      <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
        <Reveal>
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: 'var(--lime-glow)', marginRight: 8 }} />
            Early access · limited cohort
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 style={{
            marginTop: 20, color: 'white',
            fontSize: 'clamp(38px, 6vw, 72px)',
            letterSpacing: '-0.035em', lineHeight: 1.02,
            maxWidth: 820, margin: '20px auto 0',
          }}>
            Deploy your first crew<br />
            <span style={{
              background: 'linear-gradient(90deg, #6AAFFF, #C8F261)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
              fontStyle: 'italic', fontWeight: 500,
            }}>this quarter.</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.5, color: 'rgba(255,255,255,0.65)', maxWidth: 560, margin: '20px auto 0' }}>
            30-minute walkthrough with our team. We'll show you how to describe your problem and get agents running.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div style={{ marginTop: 36, maxWidth: 460, margin: '36px auto 0' }}>
            {submitted ? (
              <div style={{
                padding: 24, borderRadius: 16,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                <IconCheck size={28} style={{ color: 'var(--lime-glow)' }} />
                <div style={{ marginTop: 10, fontSize: 17, fontWeight: 500, color: 'white' }}>Request received</div>
                <div style={{ marginTop: 6, fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>We'll reach out within 24 hours.</div>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <input
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@operator.com"
                  style={{
                    flex: '1 1 240px',
                    padding: '14px 18px', borderRadius: 10,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'white', fontSize: 15, fontFamily: 'var(--sans)',
                    outline: 'none',
                    transition: 'border-color .2s, background .2s',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(58,135,249,0.7)'; e.target.style.background = 'rgba(255,255,255,0.08)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.12)'; e.target.style.background = 'rgba(255,255,255,0.06)'; }}
                />
                <button type="submit" className="btn btn-inverse btn-lg" style={{ flex: '0 0 auto' }}>
                  Request access <IconArrowRight size={15} />
                </button>
              </form>
            )}
            <div style={{ marginTop: 14, fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
              Or email <a href="mailto:hello@dinotrace.com" className="link-underline" style={{ color: 'rgba(255,255,255,0.7)' }}>hello@dinotrace.com</a> — response within a business day.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

window.EarlyAccess = EarlyAccess;
