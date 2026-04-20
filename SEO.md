# SEO Checklist — DinoTrace

Status of what's in the prototype and what to do before launch.

## ✅ Already in `index.html`

- **Title & meta description** — keyword-rich, under 160 chars
- **Canonical URL** — `https://dinotrace.com/` (update to real domain)
- **Robots directives** — `index, follow, max-image-preview:large`
- **Open Graph** tags (Facebook, LinkedIn, Slack, iMessage)
- **Twitter/X card** — `summary_large_image`
- **JSON-LD structured data** — Organization, WebSite, SoftwareApplication, FAQPage
- **Favicons** — points at `assets/dinotrace-logo-color.png`
- **Theme color** for mobile browser chrome
- **Preconnects** to Google Fonts + unpkg
- **Preload** of the logo PNG
- **Semantic HTML** — `<main>`, `<header>`, `<footer>`, `<section id>` throughout

## ✅ Also added

- `robots.txt` — points at the sitemap
- `sitemap.xml` — home URL + image reference + commented templates for future pages

## ⚠ Before you ship — replace these

1. **Domain**: every occurrence of `https://dinotrace.com/` in `index.html`, `robots.txt`, `sitemap.xml` — update to your real production domain.
2. **Social sharing image**: `og:image` currently uses the logo PNG. Replace with a dedicated **1200×630** social card (hero headline + DinoTrace mark on brand background). I can mock one if you want.
3. **Favicon set**: currently uses the full logo PNG, which is wide (1636×363) and doesn't render as a square favicon well. Generate a proper set — `favicon.ico` (32×32), `apple-touch-icon.png` (180×180), `favicon-192.png`, `favicon-512.png`. [realfavicongenerator.net](https://realfavicongenerator.net) does this in 30 seconds from your mark.
4. **Organization `sameAs`** — empty array in JSON-LD. Add your LinkedIn, X/Twitter, and company profile URLs once live — this powers Google's knowledge panel.
5. **`foundingDate`** — set to 2025 as a placeholder. Correct if different.

## 🚀 Port to Next.js — where this lives

When you move to Next.js (App Router):

```ts
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://dinotrace.com'),
  title: { default: 'DinoTrace — The Agent Factory for iGaming', template: '%s | DinoTrace' },
  description: '...',
  openGraph: { ... },
  twitter: { card: 'summary_large_image', ... },
  robots: { index: true, follow: true },
}
```

- Move the JSON-LD into `app/layout.tsx` as a `<script type="application/ld+json" dangerouslySetInnerHTML={...}>` inside `<body>`.
- Move `robots.txt` and `sitemap.xml` to **dynamic routes** using Next's `app/robots.ts` and `app/sitemap.ts` — they regenerate when you add pages.

## 📈 Post-launch

- **Google Search Console**: verify ownership, submit the sitemap.
- **Bing Webmaster Tools**: same.
- **Core Web Vitals**: the current page uses dev React + in-browser Babel — these will murder your LCP/TBT scores. Production build must use Next.js SSR/SSG, not runtime Babel. (That's the porting step anyway.)
- **Add an H1 audit**: the Hero has a big headline — make sure it renders as `<h1>` when you port. Currently it's JSX'd; in Next.js wrap it explicitly.
- **Alt text**: logo alt is set. Any product screenshots you add later must have descriptive alt.
- **Page speed**: self-host Geist (Next.js `next/font/google`) instead of Google Fonts CDN — eliminates a DNS hop.

## 🎯 Keyword angle

The page targets:

- **High intent**: `iGaming fraud detection`, `bonus abuse detection`, `AML screening iGaming`, `responsible gaming AI`
- **Category-defining**: `agent factory`, `AI agents iGaming`, `DinoTrace`
- **Long-tail**: `no-code fraud detection iGaming`, `AI crew for sportsbooks`

If you want to rank for a specific operator segment (sportsbook vs casino vs lottery), we should spin out a landing page per vertical — same chassis, tuned copy.
