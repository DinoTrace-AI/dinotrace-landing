# DinoTrace — Animation Polish Spec

## Current State

The page has framer-motion scroll animations on ~35 elements. Good foundation. But every single element uses the exact same animation: `opacity: 0, translateY: 30px → opacity: 1, translateY: 0`. This creates a monotonous "everything slides up the same way" feel. Top-tier sites use animation **variety** — different elements animate differently based on their role in the visual hierarchy.

The page also has:
- ✅ Card hover lift effects on feature and crew cards
- ✅ Pulse animations on live badges
- ✅ Scroll progress bar
- ✅ Hero scroll indicator bounce
- ✅ Demo tab auto-advance with progress bars
- ✅ CTA glow pulse

What's missing:
- ❌ Staggered delays between sibling cards
- ❌ Animation variety (everything fades up the same way)
- ❌ Hero load animation sequence (staggered entrance)
- ❌ Image hover micro-interactions
- ❌ Number/counter animations on any statistics
- ❌ Parallax or scroll-linked motion

---

## 1. HERO — Staggered Load Sequence

The hero content should animate in with a choreographed sequence on page load — not scroll-triggered, since it's above the fold. Each element enters one after the other, creating a "reveal" moment.

```tsx
// Hero component
import { motion } from 'framer-motion';

// Stagger container
const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3, // wait for page to settle
    },
  },
};

// Each child animates with this
const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

// Usage:
<motion.div
  variants={heroContainer}
  initial="hidden"
  animate="visible"
  className="relative z-10 ..."
>
  {/* 1. Pill badge — enters first */}
  <motion.div variants={heroItem}>
    <a href="#early-access" className="...">Now in Early Access...</a>
  </motion.div>

  {/* 2. Headline — enters second */}
  <motion.h1 variants={heroItem} className="...">
    The Agent Factory<br /><span>for iGaming</span>
  </motion.h1>

  {/* 3. Subheadline — enters third */}
  <motion.p variants={heroItem} className="...">
    AI agents that detect fraud...
  </motion.p>

  {/* 4. CTA buttons — enter fourth */}
  <motion.div variants={heroItem} className="flex gap-4 ...">
    <a>Request Early Access</a>
    <a>See How It Works</a>
  </motion.div>

  {/* 5. Bottom line — enters last */}
  <motion.p variants={heroItem} className="...">
    Built for iGaming operators...
  </motion.p>
</motion.div>
```

**Timing:** Each element has 150ms stagger, starting 300ms after page load. Total reveal: ~1.1 seconds. The easing curve `[0.21, 0.47, 0.32, 0.98]` is a smooth ease-out that feels natural and premium.

**The scroll indicator** at the bottom should fade in separately, after the main content, with a longer delay:
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5, duration: 0.8 }}
  className="absolute bottom-8 ..."
>
  {/* Chevron with bounce */}
</motion.div>
```

---

## 2. SECTION HEADINGS — Fade Up (Keep, But Add Blur)

Section headings can keep the fade-up pattern but add a subtle blur clear for more sophistication:

```tsx
const headingAnimation = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};
```

The blur-to-clear effect adds a "focusing" feel that makes headings feel like they're materializing, not just sliding in. Apply to all h2 headings and their subheadlines.

---

## 3. CARD STAGGER — Different per Section

Each section's cards should stagger in with delays between them. Currently all cards in a section appear to animate simultaneously.

### Problem Section (3 pain cards)
```tsx
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-80px' }}
  className="grid grid-cols-1 md:grid-cols-3 gap-8"
>
  {cards.map(card => (
    <motion.div key={card.title} variants={cardFadeUp}>
      <Card {...card} />
    </motion.div>
  ))}
</motion.div>
```

### Feature Section (4 benefit cards)
Use a **scale** variant instead of just fade-up, to differentiate from the problem cards:
```tsx
const cardScaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};
```
Stagger: 0.1s between each card (faster, since there are 4).

### Crew Section (2 live + 3 coming soon)
Live crew cards: **slide in from left and right** respectively.
```tsx
const slideFromLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};
```

Apply `slideFromLeft` to the first live card, `slideFromRight` to the second. This creates a "doors opening" effect.

Coming soon cards: standard staggered fade-up with 0.1s delay between each.

---

## 4. DEMO SECTION — Browser Mockup Entrance

The mock browser window should have a more dramatic entrance since it's the centerpiece of the section:

```tsx
<motion.div
  initial={{ opacity: 0, y: 40, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
  className="rounded-2xl border ... shadow-2xl"
>
  {/* Browser content */}
</motion.div>
```

The combination of `y: 40`, `scale: 0.95` → normal creates a "floating up and expanding" effect that makes the browser feel like it's emerging from the page.

### Tab Image Crossfade
When switching between demo tabs, the images should crossfade smoothly. Use `AnimatePresence` with a fade:

```tsx
import { AnimatePresence, motion } from 'framer-motion';

<AnimatePresence mode="wait">
  <motion.img
    key={activeTab}
    src={tabs[activeTab].image}
    alt={tabs[activeTab].alt}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="w-full h-full object-cover"
  />
</AnimatePresence>
```

Also crossfade the description text and caption below the browser with the same pattern.

---

## 5. IMAGE HOVER MICRO-INTERACTIONS

### Crew Card Images — Subtle Zoom on Hover
Add a gentle zoom effect on crew card images when hovering the card:

```tsx
<div className="overflow-hidden">
  <img
    src={crew.image}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />
</div>
```

Add `group` to the parent card div so the image zoom triggers on card hover:
```tsx
<div className="group rounded-2xl overflow-hidden ...">
```

### Feature Card Images — Gentle Float
Add a subtle continuous floating animation to the feature card images:
```css
@keyframes gentle-float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-4px); }
}

.animate-gentle-float {
  animation: gentle-float 3s ease-in-out infinite;
}
```

Apply `animate-gentle-float` to each feature card image. Stagger the animation timing per card so they don't all bob in sync:
```tsx
<img className="animate-gentle-float" style={{ animationDelay: `${i * 0.5}s` }} />
```

This makes the feature section feel alive even when the user isn't interacting.

---

## 6. TRANSITION TEXT — Typewriter or Highlight Effect

The transition line "DinoTrace lets you deploy AI agents for any operational challenge — without writing a single line of code." sits between the problem and solution sections. Give it a special treatment:

**Option A — Gradient highlight sweep:**
```tsx
<motion.p
  initial={{ backgroundSize: '0% 100%' }}
  whileInView={{ backgroundSize: '100% 100%' }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
  className="text-lg font-medium"
  style={{
    backgroundImage: 'linear-gradient(120deg, rgba(58,135,249,0.1) 0%, rgba(168,205,73,0.1) 100%)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 90%',
    padding: '4px 0',
  }}
>
  DinoTrace lets you deploy AI agents...
</motion.p>
```

This creates a highlight marker effect that sweeps across the text as it scrolls into view — like someone underlining the key message with a highlighter.

---

## 7. CTA SECTION — Entrance Impact

The final CTA should feel like a climactic moment. Use a more dramatic entrance:

```tsx
// Heading
<motion.h2
  initial={{ opacity: 0, y: 30, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
>
  Ready to Deploy Your First Crew?
</motion.h2>

// Email form — slides up with a longer delay
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
>
  {/* Input + button */}
</motion.div>
```

---

## 8. CREDIBILITY SECTION — Subtle Fade

The small credibility strip should fade in gently without any movement — just opacity:

```tsx
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  {/* Content */}
</motion.section>
```

No translateY, no scale. Just a quiet fade-in. This communicates "supporting detail" rather than "look at me."

---

## 9. SCROLL-LINKED PARALLAX (Optional — Premium Touch)

Add a subtle parallax effect to the hero video — as the user scrolls down, the video moves slightly slower than the content, creating depth:

```tsx
import { useScroll, useTransform, motion } from 'framer-motion';

const { scrollY } = useScroll();
const videoY = useTransform(scrollY, [0, 500], [0, 100]);

<motion.video
  style={{ y: videoY }}
  className="absolute inset-0 w-full h-full object-cover"
  autoPlay muted loop playsInline
  poster="/images/hero-main.jpeg"
>
  <source src="/images/hero-video.mp4" type="video/mp4" />
</motion.video>
```

This means as the user scrolls 500px down, the video shifts 100px down — creating a parallax depth effect. The hero content (text, CTAs) scrolls normally while the video lags behind.

**Also add a parallax to the CTA background image:**
```tsx
const ctaImageY = useTransform(scrollYProgress, [0.7, 1], [0, 50]);

<motion.img
  style={{ y: ctaImageY }}
  src="/images/cta-background.jpeg"
  className="absolute inset-0 w-full h-full object-cover"
/>
```

---

## ANIMATION SUMMARY TABLE

| Section | Element | Animation Type | Trigger |
|---------|---------|---------------|---------|
| Hero | Pill badge | Fade up + stagger | Page load (delay: 0.3s) |
| Hero | H1 | Fade up + stagger | Page load (delay: 0.45s) |
| Hero | Subheadline | Fade up + stagger | Page load (delay: 0.6s) |
| Hero | CTAs | Fade up + stagger | Page load (delay: 0.75s) |
| Hero | Bottom line | Fade up + stagger | Page load (delay: 0.9s) |
| Hero | Scroll indicator | Fade in | Page load (delay: 1.5s) |
| Hero | Video | Parallax (scrollY-linked) | Scroll |
| Problem | Heading | Fade up + blur clear | Scroll into view |
| Problem | Cards | Staggered fade up (150ms) | Scroll into view |
| Problem | Transition text | Highlight sweep | Scroll into view |
| Features | Heading | Fade up + blur clear | Scroll into view |
| Features | Cards | Staggered scale-in (100ms) | Scroll into view |
| Features | Card images | Gentle float (continuous) | Always (CSS keyframe) |
| Demo | Heading | Fade up + blur clear | Scroll into view |
| Demo | Browser | Fade up + scale (0.95→1) | Scroll into view |
| Demo | Tab images | Crossfade | Tab switch |
| Crews | Heading | Fade up + blur clear | Scroll into view |
| Crews | Live card 1 | Slide from left | Scroll into view |
| Crews | Live card 2 | Slide from right | Scroll into view |
| Crews | Coming soon | Staggered fade up (100ms) | Scroll into view |
| Crews | Card images | Zoom on hover (scale 1.05) | Hover |
| Credibility | Entire section | Simple fade (no movement) | Scroll into view |
| CTA | Heading | Fade up + scale | Scroll into view |
| CTA | Form | Fade up (delay 0.3s) | Scroll into view |
| CTA | Background | Parallax (scroll-linked) | Scroll |

---

## EASING REFERENCE

Use this cubic-bezier consistently across all framer-motion animations:
```
ease: [0.21, 0.47, 0.32, 0.98]
```
This is a smooth, slightly snappy ease-out that feels natural. Do NOT use `easeInOut` or linear — they feel mechanical.

For CSS transitions (hover states, etc.), use:
```css
transition: all 0.3s cubic-bezier(0.21, 0.47, 0.32, 0.98);
```

---

## PRIORITY

1. **Hero staggered load sequence** — first thing the user sees, most impactful
2. **Card stagger delays** — immediate quality signal
3. **Heading blur-clear effect** — subtle but premium
4. **Crew cards slide from left/right** — visual variety
5. **Demo browser scale entrance** — draws attention to key section
6. **Image hover zoom on crew cards** — micro-interaction polish
7. **Tab crossfade** — smooth content transitions
8. **Feature card gentle float** — adds life to static section
9. **Hero parallax** — premium depth effect
10. **Transition text highlight sweep** — delightful detail
