const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Platform', href: '#how-it-works' },
    { label: 'Crews', href: '#crews' },
    { label: 'How it works', href: '#concept' },
    { label: 'Security', href: '#credibility' },
  ];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'all .3s var(--ease-out)',
      background: scrolled ? 'rgba(250,251,252,0.82)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(180%) blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(16px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'var(--hair)' : 'transparent'}`,
    }}>
      <nav className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 64,
      }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
          <Logo size={24} />
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="nav-desktop">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              style={{
                padding: '8px 14px', fontSize: 14, fontWeight: 500,
                color: 'var(--ink-muted)', transition: 'color .2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--ink)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--ink-muted)'}>
              {l.label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <a href="#" style={{
            fontSize: 14, fontWeight: 500, color: 'var(--ink-muted)',
            padding: '8px 12px',
          }} className="nav-desktop">Sign in</a>
          <a href="#early-access" className="btn btn-primary">
            Request access <IconArrowRight size={14} />
          </a>
          <button className="nav-mobile" onClick={() => setOpen(!open)}
            style={{
              display: 'none', background: 'none', border: 'none', cursor: 'pointer',
              padding: 8, color: 'var(--ink)'
            }}>
            {open ? <IconX size={22} /> : <IconMenu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div style={{ borderTop: '1px solid var(--hair)', background: 'white', padding: '12px 24px 20px' }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '10px 0', fontSize: 15, color: 'var(--ink)' }}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
};

window.Navbar = Navbar;
