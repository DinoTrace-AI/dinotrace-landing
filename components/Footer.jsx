const Footer = () => (
  <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--hair)' }}>
    <div className="container" style={{ padding: '64px 32px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr', gap: 40 }} className="footer-grid">
        <div>
          <Logo size={26} />
          <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.55, color: 'var(--ink-muted)', maxWidth: 300 }}>
            The Agent Factory for iGaming. Built by operators, for operators.
          </p>

        </div>

        {[
          { h: 'Product', links: ['Fraud Detection Crew', 'Anti-Phishing Crew', 'Agent Builder', 'Request access'] },
          { h: 'Company', links: ['About', 'Contact', 'Careers · soon', 'Blog · soon'] },
          { h: 'Legal', links: ['Privacy', 'Terms', 'Security', 'DPA'] },
        ].map((col) => (
          <div key={col.h}>
            <div className="eyebrow">{col.h}</div>
            <ul style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none' }}>
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" style={{ fontSize: 14, color: 'var(--ink-muted)', transition: 'color .2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--ink)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--ink-muted)'}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom bar with oversized wordmark */}
    <div style={{ borderTop: '1px solid var(--hair)', overflow: 'hidden' }}>
      <div className="container" style={{ padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ fontSize: 12, color: 'var(--ink-faint)' }}>© 2026 DinoTrace. All rights reserved.</div>
        <div style={{ fontSize: 12, color: 'var(--ink-faint)', fontFamily: 'var(--mono)' }}>Made with care in ·SG·</div>
      </div>
    </div>
    <style>{`
      @media (max-width: 900px) {
        .footer-grid { grid-template-columns: 1fr 1fr !important; }
      }
      @media (max-width: 500px) {
        .footer-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </footer>
);

window.Footer = Footer;
