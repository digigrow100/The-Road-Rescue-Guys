# CLAUDE.md — Instructions for Claude working in this repo

This is an **Astro** website. Read this file first before touching anything.
Do NOT crawl the whole repo to find where to make a change — use the map
below to jump straight to the right file.

## Repo map (where things live)

| What you want to change              | Go here                                  |
| ------------------------------------- | ----------------------------------------- |
| Home page content                     | `src/pages/index.astro`                   |
| Any other page (e.g. `/about`)        | `src/pages/about.astro` (file name = URL) |
| Header / nav                          | `src/components/Header.astro`             |
| Footer                                | `src/components/Footer.astro`             |
| Shared page wrapper (`<head>`, etc.)  | `src/layouts/Layout.astro`                |
| Global CSS                            | `src/styles/global.css`                   |
| Site config (site URL, integrations)  | `astro.config.mjs`                        |
| Optimized images (photos, graphics)   | `src/assets/images/`                      |
| Static files served as-is (favicon, robots.txt, files that must keep a fixed URL) | `public/` |

New pages go in `src/pages/`. New reusable UI pieces go in `src/components/`.

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
