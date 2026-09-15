# CLAUDE.md — Instructions for Claude working in this repo

This is a **Next.js (App Router)** website using Tailwind CSS. Read this file
first before touching anything. Do NOT crawl the whole repo to find where to
make a change — use the map below to jump straight to the right file.

## Repo map (where things live)

| What you want to change                        | Go here                              |
| ----------------------------------------------- | ------------------------------------- |
| Home page content                               | `src/app/page.tsx`                    |
| About Us page content                           | `src/app/about-us/page.tsx`           |
| Services page content                           | `src/app/services/page.tsx`           |
| Contact page content (incl. the contact form)   | `src/app/contact/page.tsx` (form UI lives in `src/components/ContactForm.tsx`) |
| Any new page (e.g. `/pricing`)                  | `src/app/pricing/page.tsx` (folder name = URL segment) |
| Header / nav (shown on every page)              | `src/components/Header.tsx`           |
| Footer (shown on every page)                    | `src/components/Footer.tsx`           |
| Sticky mobile call/WhatsApp bar                 | `src/components/MobileCallBar.tsx`    |
| Reusable FAQ accordion (used on Home/Services/Contact) | `src/components/FaqAccordion.tsx` |
| Shared page wrapper (`<head>`, fonts, wraps Header/Footer/MobileCallBar) | `src/app/layout.tsx` |
| Global CSS / base resets                        | `src/app/globals.css`                 |
| Tailwind design tokens (colors, spacing, fonts) | `tailwind.config.mjs`                 |
| Site config (image domains, etc.)               | `next.config.js`                      |
| Optimized images (photos, graphics)             | `src/assets/images/`                  |
| Static files served as-is (favicon, robots.txt, files that must keep a fixed URL) | `public/` |

New pages go in `src/app/<route>/page.tsx`. New reusable UI pieces go in
`src/components/`. Header, Footer, and MobileCallBar are wired into
`src/app/layout.tsx` — every route gets them automatically since the root
layout wraps all pages; do not re-import or duplicate them inside individual
pages.

Components that need interactivity (state, event handlers, hooks) must start
with `'use client'` (see `Header.tsx`, `FaqAccordion.tsx`, `ContactForm.tsx`).
Pages themselves stay server components unless they need client-only
behavior.

Note: the phone number (07881 241835), WhatsApp link (wa.me/447881241835),
email (theroadrescueguys@gmail.com), and depot address (25 Kingsway,
Birmingham, B4 7SL) are repeated across Header, Footer, MobileCallBar, and
every page's CTAs. If the user asks to change contact details, update all
occurrences — grep for the old value across `src/` to find every instance.
The OG image (`public/og-image.png`) also has the phone number baked into
its pixels — its editable source is `src/assets/og-image-source.svg`;
edit that and re-render to PNG (1200x630) rather than editing the PNG
directly if this changes again.

The photos across all four pages are currently hotlinked `https://lh3.googleusercontent.com/...`
placeholder URLs carried over from the original design mockups, not local
files. When the user supplies real photos, save them into `src/assets/images/`
per the image rule below and swap the matching `<Image src="https://...">` for
a locally-imported `<Image />` — do this one image at a time as real assets
arrive, don't block on having all of them.

## Image rule — always optimized

**Every content image goes in `src/assets/images/`, never in `public/`.**

- Only place an image in `public/` if it truly must be served at a fixed,
  unprocessed URL (favicon, `robots.txt`, `og-image` referenced by exact
  path outside Next's image pipeline). Everything else — hero images,
  gallery photos, icons used in content — goes in `src/assets/images/`.
- Import images and render them with Next's built-in `<Image />` component
  (`next/image`) so they are automatically optimized, resized, and served in
  modern formats. Do NOT use a plain `<img src="...">` tag for content
  images.

Example:

```tsx
import { Image } from 'next/image';
import towTruck from '../assets/images/tow-truck.webp';

<Image src={towTruck} alt="Tow truck on the highway" width={800} height={600} />
```

- Prefer `.webp` source files (smaller, good quality). If a supplied image
  is `.jpg`/`.png`, it still works with `<Image />` — Next re-encodes it —
  but ask before converting formats if the user gave you a specific file.
- Always give `<Image />` a real `alt`. Use `width`/`height` for a fixed-size
  image, or `fill` (inside a `relative` sized wrapper) for images that need
  to fill a responsive container — see the existing pages for both patterns.
- Remote images (the current hotlinked placeholders) require their host to
  be allow-listed in `next.config.js` under `images.remotePatterns`.
- Never fetch or invent image files. If content calls for an image that
  hasn't been supplied, leave a clear placeholder comment and ask the user
  for the file instead of guessing a path.

## When asked to change site content

1. Identify the exact page/component from the table above.
2. Edit only that file (and any component it directly includes).
3. Don't refactor unrelated files, don't "clean up" other pages, don't add
   new dependencies unless asked.
4. If a request is ambiguous about which page it targets, ask rather than
   editing every page that might match.

## Commands

- `npm install` — install dependencies
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — serve the production build locally
