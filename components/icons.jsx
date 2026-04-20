// Inline SVG icons, sized via width/height props. Minimal and consistent (1.75 stroke).
const Icon = ({ path, size = 18, stroke = 1.75, fill = 'none', children, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill={fill} stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {path ? <path d={path} /> : children}
  </svg>
);

const IconShield = (p) => <Icon {...p}><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z"/></Icon>;
const IconRadar = (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><path d="M12 12l5-5"/></Icon>;
const IconMegaphone = (p) => <Icon {...p}><path d="M3 11v2a2 2 0 002 2h1l3 4v-4l11 3V6L9 9H5a2 2 0 00-2 2z"/></Icon>;
const IconHeadphones = (p) => <Icon {...p}><path d="M3 14v-2a9 9 0 0118 0v2"/><path d="M3 14h3v6H4a1 1 0 01-1-1v-5zM21 14h-3v6h2a1 1 0 001-1v-5z"/></Icon>;
const IconPuzzle = (p) => <Icon {...p}><path d="M10 3h4a1 1 0 011 1v2a2 2 0 104 0V7a1 1 0 011-1h2v4a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-4h-1a2 2 0 110-4h1V7a1 1 0 011-1h4V4a1 1 0 011-1z"/></Icon>;
const IconMessage = (p) => <Icon {...p}><path d="M4 5h16a1 1 0 011 1v10a1 1 0 01-1 1H9l-5 4V6a1 1 0 011-1z"/></Icon>;
const IconBrain = (p) => <Icon {...p}><path d="M12 5a3 3 0 00-3 3v1a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003 3v-13z"/><path d="M12 5a3 3 0 013 3v1a3 3 0 013 3 3 3 0 01-3 3 3 3 0 01-3 3"/></Icon>;
const IconLayers = (p) => <Icon {...p}><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/><path d="M3 18l9 5 9-5"/></Icon>;
const IconZap = (p) => <Icon {...p}><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></Icon>;
const IconArrowRight = (p) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6"/></Icon>;
const IconArrowUpRight = (p) => <Icon {...p}><path d="M7 17L17 7M8 7h9v9"/></Icon>;
const IconCheck = (p) => <Icon {...p}><path d="M5 13l4 4L19 7"/></Icon>;
const IconLock = (p) => <Icon {...p}><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></Icon>;
const IconMenu = (p) => <Icon {...p}><path d="M4 7h16M4 12h16M4 17h16"/></Icon>;
const IconX = (p) => <Icon {...p}><path d="M6 6l12 12M18 6L6 18"/></Icon>;
const IconBot = (p) => <Icon {...p}><rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 4v4M8 14h.01M16 14h.01M9 18h6"/></Icon>;
const IconWrench = (p) => <Icon {...p}><path d="M14 7a4 4 0 014 4l6 6-3 3-6-6a4 4 0 01-6-4L3 5l3-3 5 5z"/></Icon>;
const IconUsers = (p) => <Icon {...p}><circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6"/><circle cx="17" cy="6" r="2.5"/><path d="M15 14c4 0 7 2 7 5"/></Icon>;
const IconFlag = (p) => <Icon {...p}><path d="M4 21V4M4 4h13l-2 4 2 4H4"/></Icon>;
const IconGlobe = (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18"/></Icon>;
const IconAlert = (p) => <Icon {...p}><path d="M12 3l10 18H2L12 3z"/><path d="M12 10v5M12 18h.01" /></Icon>;
const IconFile = (p) => <Icon {...p}><path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9l-6-6z"/><path d="M14 3v6h6M9 14h6M9 17h4"/></Icon>;
const IconSearch = (p) => <Icon {...p}><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></Icon>;
const IconPlay = (p) => <Icon {...p} fill="currentColor"><path d="M7 5v14l12-7L7 5z" stroke="none"/></Icon>;
const IconLinkedin = (p) => <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 114 0v4M12 17v-7"/></Icon>;
const IconTwitter = (p) => <Icon {...p}><path d="M18 4l-5 7 6 9h-4l-4-6-5 6H4l6-8-6-8h4l4 6 4-6z" fill="currentColor" stroke="none"/></Icon>;

Object.assign(window, {
  Icon, IconShield, IconRadar, IconMegaphone, IconHeadphones, IconPuzzle,
  IconMessage, IconBrain, IconLayers, IconZap, IconArrowRight, IconArrowUpRight,
  IconCheck, IconLock, IconMenu, IconX, IconBot, IconWrench, IconUsers,
  IconFlag, IconGlobe, IconAlert, IconFile, IconSearch, IconPlay,
  IconLinkedin, IconTwitter
});
