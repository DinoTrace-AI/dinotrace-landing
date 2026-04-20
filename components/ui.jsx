// Shared UI helpers: Reveal on scroll, Section wrapper, Eyebrow, etc.

const Reveal = ({ children, delay = 0, className = '', as: Tag = 'div', style }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { el.classList.add('in'); io.unobserve(el); }
      });
    }, { rootMargin: '-10% 0px -10% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </Tag>
  );
};

const Eyebrow = ({ children, dot, className = '' }) => (
  <div className={`eyebrow ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
    {dot && <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)' }} />}
    {children}
  </div>
);

// Accurate DinoTrace logo mark — blue rounded "D" with white T cutout and green leg
const LogoMark = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="DinoTrace">
    {/* Blue rounded D — full circle on right, flat on left */}
    <path d="M4 4 H54 A46 46 0 0 1 54 96 H4 Z" fill="#3A87F9"/>
    {/* Green leg: short bar at bottom-left, sits under the T */}
    <rect x="14" y="58" width="18" height="34" fill="#A8CD49"/>
    {/* White T crossbar */}
    <rect x="4" y="40" width="60" height="10" fill="#FAFBFC"/>
    {/* White T stem */}
    <rect x="32" y="40" width="10" height="52" fill="#FAFBFC"/>
  </svg>
);

// Full wordmark lockup (uses the provided PNG)
const Logo = ({ dark = false, size = 26 }) => (
  <img
    src="assets/dinotrace-logo-color.png"
    alt="DinoTrace"
    style={{
      height: size + 4,
      width: 'auto',
      display: 'block',
      // Invert lightness so the dark wordmark reads on dark backgrounds
      filter: dark ? 'brightness(0) invert(1)' : 'none',
    }}
  />
);

Object.assign(window, { Reveal, Eyebrow, LogoMark, Logo });
