# DinoTrace Landing Page — Design Refinement Spec

## Context

This document contains specific UI/UX improvements for the DinoTrace landing page. The page is already built and functional with all images and video integrated. These changes focus on elevating the design from "good" to "world-class" — the level you'd expect from a top-tier AI company like Linear, Vercel, or Stripe.

Apply every change below. Do not remove any existing content — only refine styling, spacing, animation, and interaction quality.

---

## 1. ADD SCROLL ANIMATIONS (Critical — Highest Priority)

The page currently has zero scroll-triggered animations. This is the single biggest thing making it feel static. Install and implement `framer-motion` for scroll-triggered reveals throughout the entire page.

```bash
npm install framer-motion
```

Create a reusable animation wrapper component:

```tsx
'use client';
import { motion } from 'framer-motion';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function AnimateOnScroll({ children, delay = 0, className }: AnimateOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

Apply this component throughout the page:

| Section | Elements to animate | Stagger delay |
|---------|-------------------|---------------|
| Hero | Eyebrow badge → H1 → Subheadline → CTA buttons (sequential) | 0ms → 100ms → 200ms → 350ms |
| Trust Bar | Entire bar fades in | 0ms |
| Product Concept | Section heading → then each of the 4 cards staggered | 0ms heading, then 100ms between cards |
| Crews | Section heading → then each crew card staggered | 0ms heading, then 150ms between cards |
| How It Works | Section heading → then each step staggered | 0ms heading, then 200ms between steps |
| Testimonials | Section heading → then each card staggered | 0ms heading, then 150ms between cards |
| CTA | Headline → Subheadline → Button (sequential) | 0ms → 150ms → 300ms |

For the hero specifically, since it's above the fold, use a direct load animation instead of scroll-triggered:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
>
```

---

## 2. CTA BUTTONS — Make Them Bigger and Bolder

The current CTA buttons use `text-sm` (14px) with `rounded-lg` (8px radius). This feels timid for a landing page. CTAs are the most important interactive elements — they need to command attention.

**Primary CTA ("Book a Demo"):**
```
Change from:  text-sm rounded-lg px-8 py-3.5
Change to:    text-base font-semibold rounded-full px-10 py-4 shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200
```

**Secondary CTA ("See How It Works"):**
```
Change from:  text-sm rounded-lg px-8 py-3.5
Change to:    text-base font-semibold rounded-full px-10 py-4 border-2 border-white/30 hover:bg-white/15 hover:border-white/50 transition-all duration-200
```

Apply the same `rounded-full` and `text-base` treatment to the navbar "Book a Demo" button and the final CTA section button.

---

## 3. NAVBAR — Refine for Premium Feel

Current issues: nav links are 14px, the header becomes solid white on scroll (too abrupt), and there's no active section indicator.

**Changes:**

- **Nav link size:** Change from `text-sm` to `text-[15px]` for better readability
- **Active section:** Add scroll-spy behavior — highlight the currently visible section's nav link with `text-brand-blue font-semibold` styling. Use IntersectionObserver to detect which section is in view.
- **Scroll transition:** The navbar should transition smoothly from transparent (on hero) to a frosted glass effect:
  ```
  When scrolled: bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm
  ```
  Not a hard switch to solid white — use `backdrop-blur-xl` for the modern frosted glass look.
- **Navbar CTA:** Change the "Book a Demo" button in nav to `rounded-full px-6 py-2.5 text-[13px]` — slightly smaller than hero CTAs but still pill-shaped.

---

## 4. HERO SECTION — Tighten Spacing and Polish

The hero currently takes up the full viewport (100vh) with a video background. The layout works but needs spacing refinement.

**Changes:**

- **Tighten the gap** between H1 and subheadline. Currently there's ~24px gap. Reduce to `mt-5` (20px).
- **Tighten the gap** between subheadline and CTAs. Currently ~97px. Reduce to `mt-8` (32px).
- **Eyebrow badge:** Add a subtle border and slightly more padding:
  ```
  border border-white/20 px-5 py-2 text-sm backdrop-blur-sm
  ```
- **H1 styling:** The current 96px size is good for large screens. Ensure proper scaling:
  ```
  text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
  ```
  Add `tracking-tight` for tighter letter-spacing on the headline — this makes large type look more refined.
- **Gradient overlay on video:** The current overlay is `from-black/60 via-black/40 to-black/70`. This is quite dark. Lighten slightly to let more of the video show through:
  ```
  from-black/50 via-black/30 to-black/60
  ```
- **Add a subtle scroll indicator** at the bottom of the hero — a small animated chevron or mouse icon that bounces gently, hinting the user can scroll. Use framer-motion:
  ```tsx
  <motion.div
    className="absolute bottom-8 left-1/2 -translate-x-1/2"
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    <ChevronDown className="w-6 h-6 text-white/50" />
  </motion.div>
  ```

---

## 5. TRUST BAR — Smoother and More Polished

The trust bar is functional but feels plain.

**Changes:**

- **Add gradient fade edges:** On both left and right sides of the marquee, add gradient masks so logos fade in/out smoothly instead of appearing/disappearing abruptly:
  ```
  Add pseudo-elements or overlay divs:
  Left:  absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-white to-transparent z-10
  Right: absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-white to-transparent z-10
  ```
- **Operator placeholder styling:** Change the placeholder text items to look more like actual logo blocks — give them a more substantial feel:
  ```
  text-text-muted/40 font-semibold text-lg tracking-wider uppercase
  ```
- **Slow down the marquee** slightly — it should feel effortless, not rushed.

---

## 6. PRODUCT CONCEPT SECTION — Visual Flow Upgrade

The 4 cards (Crews → Agents → Skills → Tools) need better visual hierarchy and flow.

**Changes:**

- **Connecting arrows:** Replace the current dashed connectors with a cleaner approach. Between each card on desktop, add a small arrow icon (Lucide `ArrowRight` or `ChevronRight`) with `text-brand-blue/30` styling. On mobile (stacked), use `ArrowDown` instead.
- **Card hover effect:** Add a subtle hover interaction:
  ```
  hover:-translate-y-1 hover:shadow-lg hover:border-brand-blue/20 transition-all duration-300
  ```
- **Card image sizing:** Ensure the concept images are consistently sized at `w-24 h-24` or `w-28 h-28` with `object-contain`, centered above the icon.
- **Bottom note styling:** The "Describe your problem in plain English. DinoTrace builds the crew." line should be more visually distinct — make it a subtle callout:
  ```
  mt-12 text-center text-sm text-text-muted italic
  ```
  Or wrap it in a subtle pill/badge with a light background.

---

## 7. CREWS SHOWCASE — Better Card Hierarchy

**Changes:**

- **Live crew cards — add a subtle left accent border:**
  ```
  border-l-4 border-l-brand-green
  ```
  This creates a strong visual signal that these crews are active.
- **Card hover:** Add more pronounced hover on live cards:
  ```
  hover:-translate-y-2 hover:shadow-xl transition-all duration-300
  ```
- **Coming Soon cards:** Increase the visual distinction. Currently they use `bg-white/60` and dashed borders. Additionally:
  - Add `pointer-events-none cursor-default` so they don't feel interactive
  - The "Coming Soon" badge should use `bg-gray-100 text-gray-400` styling
  - Add a subtle overlay text or watermark feel
- **Agent tag pills:** Make them slightly more distinct:
  ```
  bg-brand-blue/5 text-brand-blue text-xs px-2.5 py-1 rounded-full font-medium
  ```
- **Grid gap:** Increase from `gap-6` to `gap-8` to give cards more breathing room.
- **Consider 3-column layout** for the 5 cards: put the 2 live cards in a featured row spanning full width (or larger cards), and the 3 coming-soon cards in a row below as smaller cards. This creates visual hierarchy between what's available now vs. what's coming.

---

## 8. HOW IT WORKS — Add Visual Connectors

**Changes:**

- **Step numbers:** Make the step numbers large and bold, sitting behind or above the card as a watermark-style element:
  ```
  text-8xl font-bold text-brand-blue/10 absolute -top-6 left-1/2 -translate-x-1/2
  ```
  The actual step number should be positioned behind the card content as a giant faded number.
- **Connecting lines between steps:** On desktop, add a horizontal dashed line or arrow connecting the 3 steps. Use a simple approach:
  ```tsx
  {/* Between each step */}
  <div className="hidden md:flex items-center justify-center">
    <div className="w-12 border-t-2 border-dashed border-brand-blue/20" />
    <ChevronRight className="w-5 h-5 text-brand-blue/30 -ml-1" />
  </div>
  ```
  This means the grid should accommodate the connectors. Consider using flexbox instead of grid for the 3 steps on desktop, with connector elements between them.
- **Step image styling:** Add a subtle border and hover zoom:
  ```
  rounded-xl overflow-hidden border border-border-light shadow-sm
  hover:shadow-md transition-shadow duration-300
  ```
  Inside, the image can have a subtle `hover:scale-105 transition-transform duration-500` zoom effect.
- **Quote in Step 1:** The inline quote ("I want to detect bonus abuse across multiple accounts.") should be visually styled as a chat bubble to reinforce the conversational nature:
  ```
  bg-brand-blue/5 border border-brand-blue/10 rounded-xl p-3 text-sm italic text-text-body mt-2
  ```

---

## 9. TESTIMONIALS — More Dynamic Layout

**Changes:**

- **Featured testimonial:** Make the first testimonial card larger or visually distinct — span it across more width or give it a colored left border accent.
- **Quotation mark styling:** Add a large decorative quote mark as a background element in each card:
  ```tsx
  <span className="absolute top-4 left-4 text-6xl text-brand-blue/10 font-serif leading-none">"</span>
  ```
  Remove the existing double-quote characters (`""`) from the text content since the decorative mark handles it.
- **Card variation:** Instead of 3 identical cards in a row, consider making the middle card slightly elevated (`-translate-y-2`) to create visual rhythm.
- **Avatar circles:** The current initial circles (FM, HS, CT) should have a subtle gradient background instead of a flat color:
  ```
  bg-gradient-to-br from-brand-blue to-brand-blue/70 text-white
  ```

---

## 10. FINAL CTA SECTION — More Impact

**Changes:**

- **Button styling:** The CTA button here should be the largest on the page:
  ```
  text-lg font-bold rounded-full px-12 py-5 shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200
  ```
- **Add a subtle animated glow** behind the button using a pseudo-element or additional div:
  ```tsx
  <div className="relative inline-block">
    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse" />
    <a className="relative ...">Book a Demo</a>
  </div>
  ```
- **Email link:** Style more prominently:
  ```
  mt-6 text-white/70 text-sm hover:text-white transition-colors
  ```
  Add an underline decoration: `underline underline-offset-4 decoration-white/30 hover:decoration-white/60`.

---

## 11. FOOTER — More Brand Presence

**Changes:**

- **Add the DinoTrace logo** (white version or light-treated) at the top of the first column, above the column heading. Below it, add the tagline: "The Agent Factory for iGaming" in `text-white/60 text-sm`.
- **Add social media icons** (LinkedIn, Twitter/X) below the tagline in the first column. Use Lucide icons at `w-5 h-5 text-white/40 hover:text-white transition-colors`.
- **Add a 4th column** or integrate a brief brand description. The current 3 columns (Product, Company, Legal) are functional but the footer feels sparse.
- **Bottom bar:** Add a thin `border-t border-white/10` separator above the copyright text. Center it with `text-center text-white/40 text-xs py-6`.
- **Link styling:** `text-white/60 hover:text-white transition-colors text-sm`

---

## 12. GLOBAL REFINEMENTS

### Smooth Scrolling
Add smooth scroll behavior to the HTML element:
```css
html {
  scroll-behavior: smooth;
}
```

### Section Padding Variation
Currently every section uses identical `py-28` (112px) padding. Vary the rhythm:
- Hero: Keep as-is (full viewport)
- Trust Bar: `py-8` (smaller — it's a divider, not a section)
- Product Concept: `py-24`
- Crews: `py-28` (keep — it's a key section)
- How It Works: `py-24`
- Testimonials: `py-20`
- CTA: `py-24`

### Card Border Consistency
Ensure all cards across sections use consistent border radius (`rounded-2xl`), consistent border color (`border-border-light`), and consistent shadow (`shadow-sm`).

### Image Loading
Add `loading="lazy"` to all images below the fold (everything except hero and navbar logo). If using Next.js `<Image>` component, set `priority={true}` only for the hero poster image and navbar logo.

### Dot Pattern
The dot pattern (`bg-dot-pattern`) should only appear on white-background sections. Verify it's not applied to sections that already have `bg-bg-section` (light blue). The pattern should be extremely subtle — if it's visually prominent, reduce the dot color to `#e2e8f0` or lower.

---

## Summary of Priority

1. **Scroll animations** — single biggest impact on perceived quality
2. **CTA buttons** — rounded-full, larger, with hover effects
3. **Navbar frosted glass** — backdrop-blur-xl instead of solid white
4. **Card hover interactions** — subtle lift + shadow on all cards
5. **How It Works connectors** — arrows between steps
6. **Hero spacing tightening** — less gap between elements
7. **Testimonial refinement** — decorative quotes, layout variation
8. **Footer enrichment** — logo, socials, brand presence
9. **Trust bar fade edges** — gradient masks on marquee
10. **Section padding variation** — break the uniform rhythm
