# DinoTrace Landing Page — Image & Video Integration Guide

## Overview

This document provides exact instructions for integrating generated images and a hero video into the existing DinoTrace landing page. The page is built with Next.js (App Router, Turbopack) and Tailwind CSS.

All image assets should be placed in `/public/images/` and the hero video in the same folder. All images are JPEG format.

---

## Asset Inventory

### Video

| Filename | Format | Section |
|----------|--------|---------|
| `hero-video.mp4` | MP4 (muted, looping, ~5-10s) | Hero |

### Images

| Filename | Format | Section |
|----------|--------|---------|
| `hero-main.jpeg` | JPEG | Hero (video poster / fallback) |
| `bg-gradient-blobs.jpeg` | JPEG | Hero decorative background |
| `concept-crews.jpeg` | JPEG | Product Concept — Crews |
| `concept-agents.jpeg` | JPEG | Product Concept — Agents |
| `concept-skills.jpeg` | JPEG | Product Concept — Skills |
| `concept-tools.jpeg` | JPEG | Product Concept — Tools |
| `crew-fraud-detection.jpeg` | JPEG | Crew Card — Fraud Detection |
| `crew-anti-phishing.jpeg` | JPEG | Crew Card — Anti-Phishing |
| `crew-marketing.jpeg` | JPEG | Crew Card — Marketing |
| `crew-customer-service.jpeg` | JPEG | Crew Card — Customer Service |
| `crew-custom.jpeg` | JPEG | Crew Card — Build Your Own |
| `step-describe.jpeg` | JPEG | How It Works — Step 1 |
| `step-configure.jpeg` | JPEG | How It Works — Step 2 |
| `step-deploy.jpeg` | JPEG | How It Works — Step 3 |
| `cta-background.jpeg` | JPEG | Final CTA Section |

---

## Current Site Structure (as of latest deploy)

The page has these sections in order:

1. **Header** — sticky navbar with logo and nav links
2. **Hero Section** (no id) — headline, subheadline, CTA buttons, and a gradient placeholder mockup showing "Agent Crews Dashboard — Coming Soon" with 3 mini cards
3. **Trust Bar** (no id) — marquee of placeholder operator logos
4. **Product Concept** (`id="features"`) — "How DinoTrace Works" with 4 cards: Crews, Agents, Skills, Tools (currently icon-only, no images)
5. **Crews Showcase** (`id="crews"`) — "Meet the Crews" with 5 crew cards (currently text + badges only, no images)
6. **How It Works** (`id="how-it-works"`) — 3 steps with emoji icons (💬, ⚙️, 🚀), no images
7. **Testimonials** (`id="testimonials"`) — 3 quote cards
8. **Final CTA** (`id="demo"`) — gradient background with CTA text
9. **Footer** — brand info, links, legal

The hero section already has two CSS gradient blob decorations:
- `absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-3xl`
- `absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-brand-green/10 blur-3xl`

---

## Integration Instructions — Section by Section

---

### 1. HERO SECTION — Replace Placeholder with Video

**Current state:** The hero has a gradient placeholder mockup (`mx-auto mt-16 max-w-3xl rounded-2xl bg-gradient-to-br from-brand-blue/5 to-brand-green/5 border border-border-light p-8`) that shows "Agent Crews Dashboard — Coming Soon" with 3 mini cards (Fraud Detection, Anti-Phishing, Compliance).

**Action:** Replace the entire placeholder mockup div with a looping video element. Keep the headline, subheadline, eyebrow badge, and CTA buttons exactly as they are.

**Replace the placeholder div with:**

```tsx
{/* Hero Visual — Looping Video with Image Fallback */}
<div className="mx-auto mt-16 max-w-4xl">
  <video
    autoPlay
    muted
    loop
    playsInline
    poster="/images/hero-main.jpeg"
    className="w-full h-auto rounded-2xl shadow-2xl"
  >
    <source src="/images/hero-video.mp4" type="video/mp4" />
    {/* Fallback for browsers that don't support video */}
    <img
      src="/images/hero-main.jpeg"
      alt="DinoTrace AI Agent Orchestration Platform"
      className="w-full h-auto rounded-2xl"
    />
  </video>
</div>
```

**Important:**
- `autoPlay`, `muted`, `loop`, and `playsInline` are ALL required — browsers block autoplay unless muted
- `poster="/images/hero-main.jpeg"` shows the static image while the video loads
- The `<img>` inside `<video>` is a fallback for browsers that don't support the video tag
- Keep `rounded-2xl` to match the card aesthetic, add `shadow-2xl` for depth

**Hero background blobs (optional enhancement):**

The existing CSS gradient blob divs (`bg-brand-blue/10 blur-3xl` and `bg-brand-green/10 blur-3xl`) are already working well. Optionally, you can replace them or layer `bg-gradient-blobs.jpeg` underneath for a richer effect:

```tsx
{/* Optional: Add generated gradient blobs image behind existing CSS blobs */}
<img
  src="/images/bg-gradient-blobs.jpeg"
  alt=""
  aria-hidden="true"
  className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] max-w-none opacity-20 blur-sm pointer-events-none select-none"
/>
```

Place this as the first child inside the hero `<section>`, before the existing gradient blob divs. Use `aria-hidden="true"` and empty `alt=""` since it's purely decorative.

---

### 2. PRODUCT CONCEPT SECTION (`id="features"`) — Add Illustrations

**Current state:** The section titled "How DinoTrace Works" has 4 cards (Crews, Agents, Skills, Tools), each with a Lucide icon, title, and description text. No images.

**Action:** Add an illustration image above or in place of each Lucide icon in the cards.

**Image mapping:**

| Card title | Image path | Alt text |
|------------|-----------|----------|
| Crews | `/images/concept-crews.jpeg` | `Agent crews working in formation` |
| Agents | `/images/concept-agents.jpeg` | `AI agent analyzing data` |
| Skills | `/images/concept-skills.jpeg` | `Neural network of agent skills` |
| Tools | `/images/concept-tools.jpeg` | `Connected integration tools` |

**Implementation per card:**

Replace the existing Lucide icon (or place the image above it) with:

```tsx
<img
  src="/images/concept-crews.jpeg"
  alt="Agent crews working in formation"
  className="w-28 h-28 object-contain mx-auto mb-4 rounded-xl"
/>
```

**Notes:**
- Size: `w-28 h-28` (112px) or `w-32 h-32` (128px) — keep them compact, they're illustrations not hero images
- Use `object-contain` to prevent cropping
- Use `rounded-xl` to soften the JPEG edges since they have light backgrounds
- You can either replace the Lucide icon or keep it smaller underneath as a secondary element
- If replacing the icon, remove the existing icon `<div>` and put the `<img>` in its place

---

### 3. CREWS SHOWCASE (`id="crews"`) — Add Card Header Images

**Current state:** The section titled "Meet the Crews" has 5 cards. Each card has a status badge (Live/Coming Soon), a Lucide icon, title, description, and agent tag pills. No images. The section has `bg-bg-section` background class.

**Action:** Add a header image to each crew card, placed above the existing card content.

**Image mapping:**

| Card title | Image path | Alt text | Status |
|------------|-----------|----------|--------|
| Fraud Detection Crew | `/images/crew-fraud-detection.jpeg` | `Fraud detection agents scanning transactions` | Live |
| Anti-Phishing Crew | `/images/crew-anti-phishing.jpeg` | `Anti-phishing radar scanning domains` | Live |
| Marketing Crew | `/images/crew-marketing.jpeg` | `Marketing automation agents` | Coming Soon |
| Customer Service Crew | `/images/crew-customer-service.jpeg` | `Customer service AI agents` | Coming Soon |
| Build Your Own Crew | `/images/crew-custom.jpeg` | `Build your own agent crew` | Coming Soon |

**Implementation:**

Wrap each card with `overflow-hidden` and add an image div at the top, before the existing card content:

```tsx
<div className="bg-white rounded-xl shadow-sm border border-border-light overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300">
  {/* NEW: Card header image */}
  <div className="w-full h-44 overflow-hidden">
    <img
      src="/images/crew-fraud-detection.jpeg"
      alt="Fraud detection agents scanning transactions"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Existing card content (badge, icon, title, description, tags) */}
  <div className="p-6">
    {/* ... keep all existing content here ... */}
  </div>
</div>
```

**For "Coming Soon" crew cards** (Marketing, Customer Service, Build Your Own), add `opacity-60` and `grayscale` filter to the image to visually distinguish them from live crews:

```tsx
<img
  src="/images/crew-marketing.jpeg"
  alt="Marketing automation agents"
  className="w-full h-full object-cover opacity-60 grayscale"
/>
```

**Notes:**
- Image container height: `h-44` (176px) — provides a nice card header ratio
- Use `object-cover` so the image fills the area cleanly
- The parent card needs `overflow-hidden` so the image respects the `rounded-xl` corners
- Keep the existing Lucide icon in the card body — the image is a visual header, the icon acts as a small identifier next to the title

---

### 4. HOW IT WORKS (`id="how-it-works"`) — Add Step Visuals

**Current state:** The section "From Problem to Production in Minutes" has 3 steps. Each step has an emoji icon (💬, ⚙️, 🚀), a step number (01, 02, 03), title, and description. No images.

**Action:** Replace the emoji icons with generated images for each step.

**Image mapping:**

| Step | Emoji to replace | Image path | Alt text |
|------|-----------------|-----------|----------|
| 01 — Describe Your Problem | 💬 | `/images/step-describe.jpeg` | `Conversational AI interface` |
| 02 — Agent Builder Configures | ⚙️ | `/images/step-configure.jpeg` | `AI agents building a workflow` |
| 03 — Deploy & Monitor | 🚀 | `/images/step-deploy.jpeg` | `Agent deployment dashboard` |

**Implementation per step:**

Replace the emoji element with:

```tsx
<div className="w-full h-48 rounded-xl overflow-hidden mb-6 shadow-sm">
  <img
    src="/images/step-describe.jpeg"
    alt="Conversational AI interface"
    className="w-full h-full object-cover"
  />
</div>
```

**Notes:**
- Image container: `h-48` (192px) with `rounded-xl` and `overflow-hidden`
- Remove the emoji span/div entirely and put the image in its place
- Keep the step number (01, 02, 03) — it should appear above or below the image
- These images have `#EEF4FC` light blue backgrounds, but the "How It Works" section currently sits on a white background (`py-20 md:py-28` with no bg class). Consider whether to add `bg-bg-section` to this section or use `rounded-xl` on the images to frame them nicely on white.

---

### 5. FINAL CTA (`id="demo"`) — Add Background Image

**Current state:** The section has `relative overflow-hidden` and uses a gradient background. It contains the headline "Ready to Build Your First Crew?", subheadline, CTA button, and email link.

**Action:** Add `cta-background.jpeg` as a full-bleed background image with a dark overlay for text readability.

**Implementation:**

Add these two elements as the first children inside the `<section>`, before the content container:

```tsx
{/* Background image */}
<img
  src="/images/cta-background.jpeg"
  alt=""
  aria-hidden="true"
  className="absolute inset-0 w-full h-full object-cover"
/>

{/* Dark overlay for text readability */}
<div className="absolute inset-0 bg-blue-900/40" />
```

**Then ensure the existing content container has `relative z-10`:**

```tsx
<div className="relative z-10 max-w-2xl mx-auto text-center">
  {/* ... existing headline, subheadline, CTA button, email link ... */}
</div>
```

**Notes:**
- The image uses `absolute inset-0` and `object-cover` to fill the entire section
- The `bg-blue-900/40` overlay ensures white text remains readable against the image
- All text content must have `relative z-10` to sit above the image and overlay
- Remove any existing CSS gradient background on the section since the image replaces it
- The image has a dark blue gradient built in, so the overlay can be subtle (`/40` = 25% opacity)

---

### 6. DOT GRID BACKGROUND — CSS Only (No Image Needed)

**Action:** Add a subtle dot pattern texture to alternating sections for visual depth.

**Add to `globals.css`:**

```css
.bg-dot-pattern {
  background-image: radial-gradient(circle, #d1dce8 1px, transparent 1px);
  background-size: 24px 24px;
}
```

**Apply to these sections:**
- Product Concept section (`id="features"`)
- How It Works section (`id="how-it-works"`)

```tsx
<section id="features" className="py-20 md:py-28 bg-dot-pattern">
```

**Notes:**
- Do NOT apply to sections that already have `bg-bg-section` — the dot pattern works best on white sections
- The dots are extremely subtle — `#d1dce8` on white is barely visible, just enough to add texture
- If it feels too busy with the new images, it can be safely removed

---

## File Placement

Ensure all assets are placed in `/public/images/`:

```
/public/images/
├── hero-video.mp4              ← Hero looping video
├── hero-main.jpeg              ← Hero video poster / fallback
├── bg-gradient-blobs.jpeg      ← Hero decorative background (optional)
├── concept-crews.jpeg          ← Product Concept: Crews
├── concept-agents.jpeg         ← Product Concept: Agents
├── concept-skills.jpeg         ← Product Concept: Skills
├── concept-tools.jpeg          ← Product Concept: Tools
├── crew-fraud-detection.jpeg   ← Crew Card: Fraud Detection
├── crew-anti-phishing.jpeg     ← Crew Card: Anti-Phishing
├── crew-marketing.jpeg         ← Crew Card: Marketing
├── crew-customer-service.jpeg  ← Crew Card: Customer Service
├── crew-custom.jpeg            ← Crew Card: Build Your Own
├── step-describe.jpeg          ← How It Works: Step 1
├── step-configure.jpeg         ← How It Works: Step 2
├── step-deploy.jpeg            ← How It Works: Step 3
└── cta-background.jpeg         ← Final CTA background
```

---

## Image Optimization

Use the Next.js `<Image>` component from `next/image` instead of raw `<img>` tags for automatic optimization. Example:

```tsx
import Image from 'next/image';

<Image
  src="/images/crew-fraud-detection.jpeg"
  alt="Fraud detection agents scanning transactions"
  width={400}
  height={176}
  className="w-full h-full object-cover"
/>
```

For the hero video, ensure the file is under 5MB. Compress with FFmpeg if needed:

```bash
ffmpeg -i hero-video-raw.mp4 -vcodec libx264 -crf 28 -preset slow -an hero-video.mp4
```

The `-an` flag strips audio (not needed since the video is muted).

---

## Integration Checklist

- [ ] Create `/public/images/` directory
- [ ] Place all 14 JPEG images in `/public/images/`
- [ ] Place `hero-video.mp4` in `/public/images/`
- [ ] **Hero:** Replace the gradient placeholder mockup div with `<video>` element
- [ ] **Hero:** (Optional) Add `bg-gradient-blobs.jpeg` behind existing CSS blobs
- [ ] **Product Concept (`#features`):** Add illustration images to each of the 4 cards
- [ ] **Crews (`#crews`):** Add header images to all 5 crew cards
- [ ] **Crews:** Apply `opacity-60 grayscale` to Coming Soon crew images
- [ ] **How It Works (`#how-it-works`):** Replace emoji icons with step images
- [ ] **CTA (`#demo`):** Add background image with dark overlay
- [ ] **CSS:** Add `.bg-dot-pattern` class to `globals.css`
- [ ] **CSS:** Apply `.bg-dot-pattern` to appropriate white sections
- [ ] Verify all images have meaningful `alt` text
- [ ] Verify decorative images have `aria-hidden="true"` and `alt=""`
- [ ] Consider replacing `<img>` tags with Next.js `<Image>` for optimization
- [ ] Test responsive layout — images should scale correctly on mobile
- [ ] Test hero video autoplay on mobile Safari (requires `playsInline`)
