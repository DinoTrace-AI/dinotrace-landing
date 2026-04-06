# DinoTrace — Navbar Transition & Button Consistency

## 1. NAVBAR: Transparent on Hero → Frosted Glass on Scroll

### Current Problem
The navbar always shows `bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm` — even when sitting on top of the dark hero video. This makes the page feel like a white bar is pasted over the video. Top-tier sites (Apple, Linear, Vercel, Stripe) all use a transparent navbar that transitions to frosted glass once the user scrolls past the hero.

### Implementation

The navbar needs two states controlled by scroll position. Use a React state + scroll listener:

```tsx
'use client';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Nav content */}
      <nav className="mx-auto max-w-6xl px-6 flex items-center justify-between h-[72px]">
        
        {/* Logo — needs to work on both dark (hero) and light (scrolled) backgrounds */}
        <a href="/">
          <img
            src="/dinotrace-logo-color.png"
            alt="DinoTrace"
            className={`h-8 w-auto transition-all duration-500 ${
              scrolled ? '' : 'brightness-0 invert'
            }`}
          />
        </a>

        {/* Nav links — text color changes based on scroll state */}
        <div className="hidden md:flex items-center gap-8">
          {['Features', 'How It Works', 'Crews'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, '-')}`}
              className={`text-[15px] font-medium transition-colors duration-500 ${
                scrolled
                  ? 'text-text-body hover:text-text-dark'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA button — adapts to scroll state */}
        <a
          href="#early-access"
          className={`text-[14px] font-semibold rounded-full px-6 py-2.5 transition-all duration-500 ${
            scrolled
              ? 'bg-brand-blue text-white hover:bg-brand-blue/90'
              : 'bg-white/15 text-white border border-white/25 backdrop-blur-sm hover:bg-white/25'
          }`}
        >
          Request Early Access
        </a>
      </nav>
    </header>
  );
}
```

### Key Details

**Logo treatment for transparent state:**
Since the logo is a dark PNG on transparent background, it won't be visible on the dark hero video. Use CSS `brightness-0 invert` to turn it white when the navbar is transparent:
```
Not scrolled: brightness-0 invert (makes logo white)
Scrolled:     no filter (original dark logo)
```
Both states use `transition-all duration-500` for smooth crossfade.

If the logo has colored elements (blue/green icon) that you want to preserve on light backgrounds, then you'll need two logo files: one for dark backgrounds (white version) and one for light backgrounds (color version). For now, the CSS filter approach works fine.

**Nav link colors:**
```
Not scrolled: text-white/80, hover:text-white (light text on dark hero)
Scrolled:     text-text-body (#5A5A5A), hover:text-text-dark (#2D2D2D)
```

**CTA button:**
```
Not scrolled: bg-white/15 border border-white/25 text-white backdrop-blur-sm (ghost button on dark)
Scrolled:     bg-brand-blue text-white (solid brand button on light)
```

**Scroll threshold:** 50px. This ensures the transition happens quickly but not instantly on page load.

**Border:**
```
Not scrolled: border-b border-transparent (invisible)
Scrolled:     border-b border-black/5 shadow-sm (subtle separator)
```
Use `border-black/5` instead of `border-white/20` — on a white frosted background, a white border is invisible. A very subtle black border provides the right amount of definition.

**Active nav link highlight:**
The current page has "Features" highlighted with `text-brand-blue font-600`. In transparent mode, the active link should use `text-white font-semibold` instead. Add scroll-spy awareness:
```tsx
className={`... ${
  isActive
    ? scrolled ? 'text-brand-blue font-semibold' : 'text-white font-semibold'
    : scrolled ? 'text-text-body' : 'text-white/80'
}`}
```

### Mobile Hamburger
If there's a mobile hamburger menu, when opened it should force the navbar to the scrolled (frosted) state regardless of scroll position — the dropdown menu needs a solid background to be readable.

---

## 2. BUTTON SIZE CONSISTENCY

### Current Problem

Button sizes vary across the page:

| Location | Font Size | Padding | Weight |
|----------|-----------|---------|--------|
| Navbar CTA | 13px | 10px 24px | 600 |
| Hero pill badge | 14px | 10px 20px | 400 |
| Hero primary CTA | 15px | 12px 28px | 600 |
| Hero secondary CTA | 15px | 12px 28px | 500 |
| Demo tab buttons | 14px | 10px 20px | 500 |
| CTA form button | 15px | 16px 32px | 700 |

The navbar CTA at 13px feels noticeably smaller than the hero CTAs at 15px. The CTA form button at 16px/32px padding is larger than the hero buttons. This inconsistency signals lack of attention to detail.

### Button System

Define 3 button sizes and stick to them across the entire page:

**Size S (navbar, secondary actions):**
```
text-[13px] font-semibold rounded-full px-5 py-2
```
Used for: Navbar CTA only

**Size M (standard CTAs):**
```
text-[15px] font-semibold rounded-full px-7 py-3
```
Used for: Hero primary CTA, Hero secondary CTA, CTA form button

**Size L (hero emphasis — optional, use sparingly):**
```
text-base font-bold rounded-full px-8 py-3.5
```
Used for: Only if you want one CTA to stand out above all others (e.g., the final CTA section button)

**Tab buttons (not CTAs, separate system):**
```
text-sm font-medium rounded-full px-5 py-2.5
```
Used for: Demo section tab buttons only. These aren't primary actions — they're content switches.

**Pill badge (not a CTA, decorative):**
```
text-sm font-normal rounded-full px-5 py-2.5
```
Used for: Hero announcement pill only. This is informational, not a call-to-action, so lighter weight is correct.

### Specific Changes

**Navbar CTA — currently 13px / 10px 24px:**
Keep Size S. The navbar CTA should be smaller than hero CTAs — this is intentional. The navbar button is a persistent shortcut, not the main call to action. But tighten the padding:
```
Change from: text-[13px] px-6 py-2.5 (10px 24px)
Change to:   text-[13px] font-semibold rounded-full px-5 py-2
```

**Hero Primary CTA — currently 15px / 12px 28px:**
Use Size M. Slightly increase padding for more visual weight:
```
Change from: text-[15px] px-7 py-3 (12px 28px)
Change to:   text-[15px] font-semibold rounded-full px-7 py-3 shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all
```
Add the shadow and hover scale if not already present — this makes the primary CTA feel interactive and important.

**Hero Secondary CTA — currently 15px / 12px 28px:**
Use Size M. Keep matching the primary size but with ghost styling:
```
text-[15px] font-medium rounded-full px-7 py-3 border border-white/25 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all
```

**CTA Form Button — currently 15px / 16px 32px:**
Reduce to Size M to match hero buttons:
```
Change from: text-[15px] font-bold px-8 py-4 (16px 32px)
Change to:   text-[15px] font-semibold rounded-full px-7 py-3 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all
```
The current button is too large relative to the input field next to it. Size M brings it into harmony.

**Also adjust the email input height to match** the button:
```
Input: text-sm rounded-full px-6 py-3
```
Ensure the input and button are the same height. Both at `py-3` (12px top + 12px bottom) with the same `text-[15px]` / `text-sm` sizing.

**Demo Tab Buttons — currently 14px / 10px 20px:**
Keep as-is. These are content switches, not CTAs. Their smaller size correctly communicates "these are navigation, not actions."

### Button Color System

Also standardize hover states:

| Button Type | Default | Hover | Active |
|-------------|---------|-------|--------|
| Primary (solid blue) | `bg-brand-blue text-white` | `bg-brand-blue/90 shadow-xl scale-[1.02]` | `scale-[0.98]` |
| Secondary (ghost on dark) | `bg-white/10 border-white/25 text-white` | `bg-white/20 border-white/40` | `scale-[0.98]` |
| Navbar (solid blue, small) | `bg-brand-blue text-white` | `bg-brand-blue/90` | — |
| Navbar transparent (ghost) | `bg-white/15 border-white/25 text-white` | `bg-white/25` | — |
| Tab (inactive) | `bg-white border-border-light text-text-body` | `border-brand-blue/30` | — |
| Tab (active) | `bg-brand-blue text-white shadow-md` | — | — |

Every interactive element should have `transition-all duration-200` for smooth state changes.
