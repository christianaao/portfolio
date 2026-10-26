# Olamide Olawuyi — Portfolio

Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and `next-themes`.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## ⚠️ Things YOU need to fill in before going live

All editable content lives in **`src/data/portfolio.ts`**. Search that file for
`PLACEHOLDER` or `TODO` comments. Specifically:

1. **GitHub & LinkedIn URLs** — `personalInfo.github` and `personalInfo.linkedin`
   currently point to placeholder URLs.
2. **CV / Resume PDF** — replace `public/olamide-olawuyi-cv-PLACEHOLDER.pdf` with
   your real CV PDF. If you rename the file, update `personalInfo.resumeUrl` to match.
3. **Project links** — every project in the `projects` array has one or more
   `links` entries pointing to `PLACEHOLDER`/`example.com` URLs (live site, front-end
   repo, back-end repo). Replace these with your real deployed URLs and GitHub repo
   links as they become available. On the site itself, any placeholder link is
   visually flagged with an **"Add your link"** badge so they're easy to spot.
4. Two "R&D" project cards (Gibberish Query Detector, Search Intent Detection with
   spaCy) deliberately have **no links** — these summarise generalized, non-confidential
   work from your BBC grad scheme rotations. Do not add internal/employer-specific
   links or details to these without checking they're appropriate to share publicly.

## Where everything lives

- `src/data/portfolio.ts` — all text content (bio, skills, projects, experience, contact)
- `src/components/` — one component per section (hero, about, skills, projects,
  experience, contact, nav, footer) plus `theme-toggle.tsx` / `theme-provider.tsx`
  for dark mode and `reveal.tsx` for scroll-in animations
- `src/app/globals.css` — the lavender/purple color theme (light + dark variants)
- `public/` — static assets, including the CV placeholder PDF

## Deployment

The project has no server-side dependencies, so it deploys cleanly to either
[Vercel](https://vercel.com/new) or [Netlify](https://app.netlify.com/start) —
just connect the GitHub repo once it's pushed.
