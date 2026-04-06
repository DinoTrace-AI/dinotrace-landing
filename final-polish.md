# DinoTrace Landing Page — Final Design Polish

## Issues Found & Fixes

This spec addresses every issue identified from a thorough audit. Apply all changes.

---

## ISSUE 1: Announcement Banner Blocking Navbar

**Problem:** The banner (z-60, position: relative) and navbar (z-50, position: fixed) clash. The banner sits behind the fixed navbar on load and gets covered when scrolling. It looks broken.

**Fix: Remove the fixed top banner entirely. Replace it with a subtle inline badge inside the hero section.**

Delete the announcement banner `<div>` completely. Instead, enhance the existing hero eyebrow badge to carry the announcement message. The hero already has a badge that says "Early Access — Now Live" — this is sufficient. No separate banner needed.

If you want to keep an announcement-style element, use a **floating pill at the very top of the hero** (below the navbar, not above it):

```tsx
{/* Inside hero section, as the first element in the z-10 content container */}
<div className="mb-8">
  <a
    href="#early-access"
    className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/80 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/25"
  >
    <span className="flex h-2 w-2">
      <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-brand-green opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
    </span>
    Now in Early Access — Fraud Detection & Anti-Phishing Crews are live
    <span className="text-white/40 group-hover:text-white/60 transition-colors">→</span>
  </a>
</div>
```

This is how Vercel, Linear, and Stripe do it — the announcement is a clickable pill badge at the top of the hero, not a banner that fights with the navbar. It's elegant, doesn't break layout, and serves the same purpose.

Remove the separate banner div and its associated state/localStorage logic.

---

## ISSUE 2: Problem Statement Section Is Too Fraud-Focused

**Problem:** The section immediately after the hero screams "iGaming fraud" — but DinoTrace is a general agent orchestration platform. Fraud detection is just one crew. Leading with fraud narrows the positioning.

**Fix: Rewrite the Problem Statement to be about operational complexity, not fraud specifically.**

**New headline:**
```
"Your operations team is doing the work of 10 people"
```
or
```
"Running an iGaming operation shouldn't require an army"
```

**New subheadline:**
```
"Fraud, compliance, player safety, marketing — every function needs constant monitoring. Your team is stretched thin, your tools are disconnected, and threats evolve faster than your processes."
```

**New pain point cards (broader scope):**

**Card 1 — "Threats That Never Sleep"**
- Icon: `ShieldAlert` (Lucide)
- Color: red tones (keep existing)
- Description: `Fraud patterns, phishing domains, and compliance violations don't wait for business hours. Manual review can't keep pace.`

**Card 2 — "Disconnected Tools"**
- Icon: `Unplug` (Lucide)
- Color: orange tones (keep existing)
- Description: `Your fraud system doesn't talk to your compliance tools, which don't talk to your marketing platform. Every team works in silos.`

**Card 3 — "No Way to Ship Fast"**
- Icon: `Rocket` (Lucide)
- Color: yellow tones (keep existing)
- Description: `Your operations team knows what they need but can't build it. Every new workflow requires engineering time you don't have.`

**New transition line:**
```
"What if you could deploy intelligent AI agents for any operational challenge — without writing a single line of code?"
```

This frames DinoTrace as the platform solution, not just a fraud tool.

---

## ISSUE 3: Feature Cards Uneven Heights at "How DinoTrace Works"

**Problem:** The "Agents" card is 298px tall while Crews, Skills, and Tools are all 318px. This makes the grid look broken.

**Fix: Force equal card heights with CSS.**

On the grid container, add `items-stretch` so all cards in the same row stretch to the tallest card's height:

```tsx
<div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-4 items-stretch">
```

On each card, add `h-full flex flex-col` so the card fills the stretched height, and put `flex-grow` on the description paragraph so content distributes evenly:

```tsx
<div className="relative rounded-2xl border border-border-light bg-white p-6 text-center shadow-sm h-full flex flex-col hover:-translate-y-1 hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300">
  <img className="w-28 h-28 object-contain mx-auto mb-4 rounded-xl" ... />
  {/* Lucide icon */}
  <h3 className="font-semibold text-text-dark mb-2">Crews</h3>
  <p className="text-sm text-text-muted flex-grow">Orchestrated teams of agents aligned around a mission...</p>
</div>
```

The key is `items-stretch` on the grid + `h-full flex flex-col` on cards + `flex-grow` on the description paragraph. This guarantees all 4 cards are exactly the same height regardless of content length.

---

## ISSUE 4: Text Hard to Read on Image/Video Backgrounds

**Problem:** Some text on the hero and CTA sections is low-contrast against the background images.

### Hero Section
The hero overlay is `from-black/40 via-black/20 to-black/50`. The middle portion (via-black/20) is too light — text crossing through the mid-section of the video can be hard to read.

**Fix:** Increase the overlay opacity:
```
Change from: from-black/40 via-black/20 to-black/50
Change to:   from-black/60 via-black/40 to-black/70
```

Also add a `text-shadow` to the hero text for extra insurance:
```css
/* Add to globals.css */
.text-hero-shadow {
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.2);
}
```
Apply `text-hero-shadow` to the h1, subheadline, and badge.

### CTA Section (early-access)
The overlay is `bg-blue-900/50`. Some text is at `text-white/40` (the "No credit card required" line) — this is nearly invisible.

**Fix:**
```
Change overlay from: bg-blue-900/50
Change to:           bg-gradient-to-b from-blue-900/70 via-blue-900/60 to-blue-900/80
```

Increase the minimum text opacity on all CTA text:
```
"No credit card required..." — change from text-white/40 to text-white/60
"Prefer to chat?..." — change from text-white/50 to text-white/70
```

---

## ISSUE 5: Back-to-Back Blue Sections (How It Works + Crews)

**Problem:** How It Works (`bg-bg-section`) immediately followed by Crews (`bg-bg-section`) creates one massive 2316px blue block with no visual separation. It reads as one giant section.

**Fix: Alternate backgrounds.** Change Crews section to white background:

```
How It Works: bg-bg-section (light blue) ← keep
Crews:        bg-white/transparent      ← change from bg-bg-section
```

This creates the alternating rhythm: white → white → white → blue → white → dark.

Full background flow should be:
```
Hero:             transparent (video bg)
Problem:          white
Product Concept:  white (with dot pattern)
How It Works:     bg-bg-section (light blue)
Crews:            white                        ← CHANGED
Early Access:     dark (background image)
Footer:           dark
```

---

## ISSUE 6: Button Size Inconsistency

**Problem:** Button sizes vary wildly across the page:
- Navbar CTA: 13px font, 10px/24px padding
- Hero CTAs: 16px font, 16px/40px padding
- Demo tabs: 14px font, 12px/24px padding
- CTA form button: 14px font, 16px/32px padding

**Fix: Establish a consistent button system.**

**Primary CTA (all "Request Early Access" buttons):**
```
text-[15px] font-semibold rounded-full px-7 py-3 shadow-md shadow-brand-blue/20 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all
```

**Navbar CTA (smaller primary):**
```
text-[13px] font-semibold rounded-full px-5 py-2.5
```

**Secondary CTA ("See How It Works"):**
```
text-[15px] font-medium rounded-full px-7 py-3 border border-white/25 bg-white/10 backdrop-blur-sm hover:bg-white/15
```

**Tab buttons (demo section):**
```
text-sm font-medium rounded-full px-5 py-2.5
Active:   bg-brand-blue text-white shadow-md
Inactive: bg-white text-text-body border border-border-light hover:border-brand-blue/30
```

**CTA section form button:**
```
text-[15px] font-bold rounded-full px-8 py-4 whitespace-nowrap
```

---

## ISSUE 7: Demo Section Tab State Mismatch

**Problem:** The tab buttons show "02 Configure" as active (blue) but the description text below reads "Tell DinoTrace what you need in plain language..." which is Step 1 content. The visual state and content are out of sync.

**Fix:** Ensure the default active tab on load is Tab 1 ("01 Describe"), and that the description text and image always correspond to the active tab. The state should be managed properly:

```tsx
const [activeTab, setActiveTab] = useState(0); // 0 = Describe, 1 = Configure, 2 = Deploy

const tabs = [
  {
    label: '01 Describe',
    description: 'Tell DinoTrace what you need in plain language. "I want to detect bonus abuse across multiple accounts."',
    image: '/images/step-describe.jpeg'
  },
  {
    label: '02 Configure',
    description: 'Our AI Agent Builder asks follow-up questions, extracts your business rules, and generates a complete crew configuration.',
    image: '/images/step-configure.jpeg'
  },
  {
    label: '03 Deploy',
    description: 'Your crew goes live. Agents work autonomously, report findings, and learn from feedback. You stay in control.',
    image: '/images/step-deploy.jpeg'
  }
];
```

Make sure the first tab is active by default.

---

## ISSUE 8: Page Is Too Long (5959px)

**Problem:** 6 full screens of scrolling is too much for a pre-launch page with limited content. The Crews section alone is 1220px.

**Fixes to reduce length:**

1. **Reduce Crews section padding:**
   ```
   Change from: py-28 (112px each side = 224px total)
   Change to:   py-20 (80px each side = 160px total)
   ```

2. **Compact the Coming Soon crew cards.** Currently they're 389px wide x 266px tall each in a 3-column grid. Reduce image height:
   ```
   Change image from: h-44 or similar
   Change to:         h-24 (96px)
   ```
   And tighten card padding:
   ```
   Change from: p-6
   Change to:   p-4
   ```

3. **Reduce Product Demo section height.** The mock browser (546px tall) is oversized. The image inside should be constrained:
   ```
   Change browser content area from: min-h-[400px] or unconstrained
   Change to:                        aspect-[16/10] max-h-[360px]
   ```

4. **Reduce Problem Statement section.** Currently 926px. Tighten the spacing:
   ```
   Section padding: change from py-24 md:py-32 to py-20 md:py-24
   Gap between heading and cards: change from mt-16 to mt-12
   ```

Target: reduce total page height from ~5959px to ~4500-5000px.

---

## ISSUE 9: Crews Section — Live vs Coming Soon Need Clearer Visual Separation

Beyond the sizing difference (which is good), the transition between live and coming-soon crews needs to be sharper.

**Add a clear divider between them:**
```tsx
<div className="my-10 flex items-center justify-center gap-4">
  <div className="h-px flex-1 max-w-[80px] bg-border-light" />
  <span className="text-xs font-semibold text-text-muted uppercase tracking-widest">On the Roadmap</span>
  <div className="h-px flex-1 max-w-[80px] bg-border-light" />
</div>
```

**Coming Soon cards should also:**
- Use `grayscale` filter on the entire card (not just the image)
- Have `opacity-60` on the entire card
- No hover effects — add `pointer-events-none`
- Use `border-dashed` border style

---

## ISSUE 10: Product Concept Section — Missing Visual Flow

The 4 cards (Crews → Agents → Skills → Tools) need connecting arrows to show the hierarchy flows left to right.

**Add SVG arrow connectors between cards on desktop:**

```tsx
{/* Between each card in the grid */}
<div className="hidden md:flex items-center justify-center -mx-3">
  <svg className="w-6 h-6 text-brand-blue/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
</div>
```

This requires changing from a `grid` layout to a `flex` layout on desktop so you can insert connector elements between cards:

```tsx
{/* Desktop: flex with connectors */}
<div className="hidden md:flex items-stretch justify-center gap-0">
  {concepts.map((concept, i) => (
    <React.Fragment key={concept.title}>
      <div className="flex-1 max-w-[280px]">
        <Card {...concept} />
      </div>
      {i < 3 && (
        <div className="flex items-center px-3 shrink-0">
          <svg className="w-6 h-6 text-brand-blue/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      )}
    </React.Fragment>
  ))}
</div>

{/* Mobile: stacked */}
<div className="md:hidden grid grid-cols-1 gap-6">
  {concepts.map(concept => <Card key={concept.title} {...concept} />)}
</div>
```

---

## ISSUE 11: Email Input in CTA Section Needs Better Contrast

The email input sits on a dark background. Ensure it has strong contrast:

```tsx
<input
  type="email"
  placeholder="Enter your work email"
  className="flex-1 rounded-full px-6 py-4 text-sm text-text-dark bg-white border-2 border-transparent shadow-xl focus:outline-none focus:ring-0 focus:border-brand-blue placeholder:text-gray-400"
/>
```

Key: `bg-white` (not semi-transparent), `shadow-xl` (lifts it off the dark bg), `border-2 border-transparent focus:border-brand-blue` (clean focus state).

On mobile, stack the input and button vertically:
```tsx
<div className="flex flex-col sm:flex-row gap-3">
  <input ... className="w-full sm:flex-1 ..." />
  <button ... className="w-full sm:w-auto ..." />
</div>
```

---

## ISSUE 12: Missing Scroll Progress Bar

Add a thin progress indicator at the very top of the viewport. This is a subtle premium touch used by Linear, Stripe, and others.

```tsx
'use client';
import { motion, useScroll } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-brand-blue origin-left z-[100]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
```

Add `<ScrollProgress />` at the top of the layout, before everything else.

---

## ISSUE 13: Footer Polish

Ensure the footer has:
- DinoTrace logo in the first column (if not already)
- Proper social icons (LinkedIn, Twitter/X) with hover effects
- All dead links (Blog, Careers, About, Pricing) either removed or clearly marked as `(Coming Soon)` in muted text
- A proper bottom border separator: `border-t border-white/10 mt-12 pt-6`
- Copyright centered: `text-center text-white/30 text-xs`

---

## FINAL SECTION ORDER & BACKGROUND RHYTHM

```
Section                  Background           Padding
─────────────────────────────────────────────────────────
Scroll Progress Bar      brand-blue 2px        fixed
Navbar                   white/80 blur         fixed
Hero                     video + overlay       100vh
Problem Statement        white                 py-20 md:py-24
Product Concept          white + dot-pattern   py-24 md:py-28
Product Demo             bg-section (blue)     py-24 md:py-28
Crews Showcase           white                 py-20 md:py-24
Early Access CTA         dark image + overlay  py-28 md:py-32
Footer                   dark                  py-12
```

The rhythm alternates: dark (hero) → white → white → blue → white → dark → dark. No two blue or dark sections touch.

---

## COMPLETE TEXT CHANGES REFERENCE

| Location | Current | New |
|----------|---------|-----|
| Problem h2 | iGaming fraud is evolving faster than your team can keep up | Your operations team is doing the work of 10 people |
| Problem subheadline | Bonus abuse. Multi-accounting. Phishing domains... | Fraud, compliance, player safety, marketing — every function needs constant monitoring. Your team is stretched thin, your tools are disconnected, and threats evolve faster than your processes. |
| Problem card 1 title | Manual Fraud Review | Threats That Never Sleep |
| Problem card 1 desc | Your team manually reviews flagged transactions... | Fraud patterns, phishing domains, and compliance violations don't wait for business hours. Manual review can't keep pace. |
| Problem card 2 title | Slow Response Times | Disconnected Tools |
| Problem card 2 desc | By the time a phishing domain is detected... | Your fraud system doesn't talk to your compliance tools, which don't talk to your marketing platform. Every team works in silos. |
| Problem card 3 title | Engineering Bottleneck | No Way to Ship Fast |
| Problem card 3 desc | Every new detection rule requires engineering time... | Your operations team knows what they need but can't build it. Every new workflow requires engineering time you don't have. |
| Problem transition | What if your fraud team could deploy AI agents... | What if you could deploy intelligent AI agents for any operational challenge — without writing a single line of code? |

---

## PRIORITY ORDER

1. **Remove announcement banner, enhance hero badge** — fixes the layout clash immediately
2. **Rewrite Problem Statement** — broadens positioning beyond fraud
3. **Fix feature card equal heights** — items-stretch + h-full flex flex-col
4. **Fix text readability** — increase overlay opacity, add text shadows, increase min text opacity
5. **Break back-to-back blue sections** — change Crews bg to white
6. **Fix demo tab state** — default to tab 1
7. **Standardize button sizes** — consistent sizing system
8. **Compact page height** — reduce padding and card sizes
9. **Add connecting arrows** — product concept visual flow
10. **Add scroll progress bar** — premium touch
11. **Polish email input** — better contrast and mobile layout
12. **Footer cleanup** — remove dead links, add separator
