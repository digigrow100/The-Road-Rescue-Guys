# The Road Rescue Guys

Website built with [Next.js](https://nextjs.org) (App Router) and Tailwind CSS.

## Project structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── page.tsx           # Home
│   │   ├── about-us/page.tsx
│   │   ├── services/page.tsx
│   │   └── contact/page.tsx
│   ├── assets/
│   │   └── images/            # optimized content images (webp preferred)
│   └── components/
└── package.json
```

See `CLAUDE.md` for the full repo map and image-optimization rules.

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`      | Installs dependencies                         |
| `npm run dev`      | Starts local dev server at `localhost:3000`   |
| `npm run build`    | Build your production site to `.next/`        |
| `npm run start`    | Serve the production build locally            |
