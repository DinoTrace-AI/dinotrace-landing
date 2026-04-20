// Animated agent constellation — nodes self-organize into a crew.
// Pure SVG, no dependencies. Deterministic layout with subtle float.

const AgentGraph = ({ height = 440 }) => {
  const [phase, setPhase] = React.useState(0); // 0: scattered, 1: organized
  const [tick, setTick] = React.useState(0);
  const [activeEdge, setActiveEdge] = React.useState(0);

  React.useEffect(() => {
    const t = setTimeout(() => setPhase(1), 400);
    const i = setInterval(() => setTick((t) => t + 1), 2200);
    const e = setInterval(() => setActiveEdge((a) => (a + 1) % 6), 900);
    return () => { clearTimeout(t); clearInterval(i); clearInterval(e); };
  }, []);

  // Crew orchestrator in center, 6 agents around it
  const cx = 500, cy = 220;
  const orgNodes = [
    { id: 'tx', label: 'Transaction Monitor', icon: 'tx', x: cx - 240, y: cy - 100, scatter: { x: 80, y: 40 } },
    { id: 'bonus', label: 'Bonus Abuse Analyst', icon: 'bonus', x: cx - 280, y: cy + 80, scatter: { x: 40, y: 360 } },
    { id: 'vip', label: 'VIP Risk Assessor', icon: 'vip', x: cx - 80, y: cy + 150, scatter: { x: 600, y: 400 } },
    { id: 'aml', label: 'AML Watchdog', icon: 'aml', x: cx + 120, y: cy + 150, scatter: { x: 900, y: 360 } },
    { id: 'domain', label: 'Domain Scanner', icon: 'domain', x: cx + 260, y: cy + 60, scatter: { x: 940, y: 40 } },
    { id: 'ssl', label: 'SSL Monitor', icon: 'ssl', x: cx + 260, y: cy - 100, scatter: { x: 820, y: -20 } },
  ];

  const IconMap = {
    tx: 'M4 12h4l2-6 4 12 2-6h4',
    bonus: 'M12 6v12M8 8h6a2 2 0 010 4H10a2 2 0 000 4h6',
    vip: 'M12 2l2 5 5 .5-4 3.5 1 5-4-3-4 3 1-5-4-3.5 5-.5z',
    aml: 'M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z',
    domain: 'M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18',
    ssl: 'M6 10V7a6 6 0 1112 0v3M4 10h16v11H4z',
  };

  return (
    <div style={{ position: 'relative', width: '100%', height, minHeight: height }}>
      <svg viewBox="0 0 1000 440" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ overflow: 'visible' }}>
        <defs>
          <radialGradient id="glow-blue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3A87F9" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3A87F9" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow-green" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A8CD49" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#A8CD49" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="edge-active" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3A87F9" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#3A87F9" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#A8CD49" stopOpacity="0.1" />
          </linearGradient>
          <filter id="node-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0B0F19" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Ambient glows */}
        <circle cx={cx} cy={cy} r="280" fill="url(#glow-blue)" />
        <circle cx={cx + 100} cy={cy - 40} r="160" fill="url(#glow-green)" />

        {/* Edges */}
        {phase === 1 && orgNodes.map((n, i) => {
          const isActive = activeEdge === i;
          return (
            <line key={'e' + n.id}
              x1={cx} y1={cy} x2={n.x} y2={n.y}
              stroke={isActive ? 'url(#edge-active)' : '#D8DEE7'}
              strokeWidth={isActive ? 1.5 : 1}
              strokeDasharray={isActive ? "0" : "3 4"}
              style={{
                transition: 'stroke-width .4s var(--ease-out), stroke .4s var(--ease-out)',
                opacity: isActive ? 1 : 0.7
              }}
            />
          );
        })}

        {/* Packet dots animating along active edge */}
        {phase === 1 && orgNodes.map((n, i) => (
          activeEdge === i ? (
            <circle key={'p' + n.id} r="3" fill="#3A87F9">
              <animate attributeName="cx" from={cx} to={n.x} dur="0.9s" repeatCount="1" />
              <animate attributeName="cy" from={cy} to={n.y} dur="0.9s" repeatCount="1" />
              <animate attributeName="opacity" values="0;1;1;0" dur="0.9s" repeatCount="1" />
            </circle>
          ) : null
        ))}

        {/* Central crew node */}
        <g style={{ transition: 'transform .8s var(--ease-spring)' }}>
          {/* Pulse rings */}
          {[0, 1, 2].map((i) => (
            <circle key={'ring' + i} cx={cx} cy={cy} r="40"
              fill="none" stroke="#3A87F9" strokeWidth="1" opacity="0"
              style={{
                transformOrigin: `${cx}px ${cy}px`,
                animation: `pulse-ring 3s ease-out ${i * 1}s infinite`
              }} />
          ))}
          <circle cx={cx} cy={cy} r="38" fill="white" filter="url(#node-shadow)" stroke="#E6EAF0" />
          <circle cx={cx} cy={cy} r="30" fill="#3A87F9" />
          <g transform={`translate(${cx - 12},${cy - 12})`} stroke="white" strokeWidth="1.75" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="8" r="3"/>
            <path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6"/>
            <circle cx="17" cy="6" r="2.5"/>
            <path d="M15 14c4 0 7 2 7 5"/>
          </g>
        </g>
        <text x={cx} y={cy + 66} textAnchor="middle"
          style={{ fontFamily: 'var(--mono)', fontSize: 11, fill: 'var(--ink)', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          Fraud Detection Crew
        </text>

        {/* Agent nodes */}
        {orgNodes.map((n, i) => {
          const pos = phase === 1 ? { x: n.x, y: n.y } : n.scatter;
          return (
            <g key={n.id}
              style={{
                transform: `translate(${pos.x - n.x}px, ${pos.y - n.y}px)`,
                transition: `transform 1.2s var(--ease-spring) ${i * 80}ms, opacity .6s`,
                opacity: phase === 1 ? 1 : 0.4,
              }}>
              <g transform={`translate(${n.x},${n.y})`}>
                <circle cx="0" cy="0" r="26" fill="white" filter="url(#node-shadow)" stroke="#E6EAF0" />
                <g transform="translate(-10,-10)" stroke={activeEdge === i ? '#3A87F9' : '#5A5A5A'} strokeWidth="1.75" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke .3s' }}>
                  <path d={IconMap[n.icon]} />
                </g>
                <text x="0" y="46" textAnchor="middle"
                  style={{ fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500, fill: 'var(--ink-2)' }}>
                  {n.label}
                </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

window.AgentGraph = AgentGraph;
