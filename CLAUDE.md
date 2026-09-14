# CLAUDE.md — Instructions for Claude working in this repo

This is an **Astro** website. Read this file first before touching anything.
Do NOT crawl the whole repo to find where to make a change — use the map
below to jump straight to the right file.

## Repo map (where things live)

| What you want to change                        | Go here                              |
| ----------------------------------------------- | ------------------------------------- |
| Home page content                               | `src/pages/index.astro`               |
| About Us page content                           | `src/pages/about-us.astro`            |
| Services page content                           | `src/pages/services.astro`            |
| Contact page content (incl. the contact form)   | `src/pages/contact.astro`             |
| Any new page (e.g. `/pricing`)                  | `src/pages/pricing.astro` (file name = URL) |
| Header / nav (shown on every page)              | `src/components/Header.astro`         |
| Footer (shown on every page)                    | `src/components/Footer.astro`         |
| Sticky mobile call/WhatsApp bar                 | `src/components/MobileCallBar.astro`  |
| Reusable FAQ accordion (used on Home/Services/Contact) | `src/components/FaqAccordion.astro` |
| Shared page wrapper (`<head>`, fonts, wraps Header/Footer/MobileCallBar) | `src/layouts/Layout.astro` |
| Global CSS / base resets                        | `src/styles/global.css`               |
| Tailwind design tokens (colors, spacing, fonts) | `tailwind.config.mjs`                 |
| Site config (site URL, integrations)            | `astro.config.mjs`                    |
| Optimized images (photos, graphics)             | `src/assets/images/`                  |
| Static files served as-is (favicon, robots.txt, files that must keep a fixed URL) | `public/` |

New pages go in `src/pages/`. New reusable UI pieces go in `src/components/`.
Header, Footer, and MobileCallBar are wired into `Layout.astro` — every page
gets them automatically by wrapping content in `<Layout>...</Layout>`; do not
re-import or duplicate them inside individual pages.

Note: the phone number (07700 900123), WhatsApp link (wa.me/447700900123),
email, and depot address (25 Kingsway, Birmingham, B4 7SL) are repeated
across Header, Footer, MobileCallBar, and every page's CTAs. If the user
asks to change contact details, update all occurrences — grep for the old
value across `src/` to find every instance.

The photos across all four pages are currently hotlinked `https://lh3.googleusercontent.com/...`
placeholder URLs carried over from the original design mockups, not local
files. When the user supplies real photos, save them into `src/assets/images/`
per the image rule below and swap the matching `<img src="...">` for an
Astro `<Image />` import — do this one image at a time as real assets arrive,
don't block on having all of them.

## Image rule — always optimized

**Every content image goes in `src/assets/images/`, never in `public/`.**

- Only place an image in `public/` if it truly must be served at a fixed,
  unprocessed URL (favicon, `robots.txt`, `og-image` referenced by exact
  path outside Astro). Everything else — hero images, gallery photos,
  icons used in content — goes in `src/assets/images/`.
- Import images and render them with Astro's built-in `<Image />`
  component so they are automatically optimized, resized, and converted.
  Do NOT use a plain `<img src="...">` tag for content images.

Example:

```astro
---
import { Image } from 'astro:assets';
import towTruck from '../assets/images/tow-truck.webp';
---
<Image src={towTruck} alt="Tow truck on the highway" width={800} height={600} />
```

- Prefer `.webp` source files (smaller, good quality). If a supplied image
  is `.jpg`/`.png`, it still works with `<Image />` — Astro re-encodes it —
  but ask before converting formats if the user gave you a specific file.
- Always give `<Image />` a real `alt`, `width`, and `height`.
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
- `npm run preview` — preview the production build
