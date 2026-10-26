# Olamide Olawuyi — Portfolio

My personal portfolio site, showcasing my projects, skills, and experience as a
Junior Software Engineer. Built with Next.js (App Router), TypeScript, Tailwind
CSS, Framer Motion, and `next-themes` (dark mode support).

## Running locally

**Requirements:** Node.js 18.18+ and npm.

```bash
# 1. Clone the repo
git clone https://github.com/christianaao/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open **http://localhost:3000** in your browser.

### Other useful commands

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # lint the codebase
```

## Project structure

- `src/data/portfolio.ts` — the single source of truth for all site text: name,
  tagline, bio, skills, projects (with links), experience, and contact info.
  Update this file to change any content on the site.
- `src/components/` — one component per section (hero, about, skills, projects,
  experience, contact, nav, footer), plus `theme-toggle.tsx` / `theme-provider.tsx`
  for dark mode and `reveal.tsx` for scroll-in animations
- `src/app/globals.css` — the lavender/purple color theme (light + dark variants)
- `public/` — static assets, including the CV PDF

## Tech stack

- [Next.js](https://nextjs.org/) (App Router, Turbopack)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [next-themes](https://github.com/pacocoursey/next-themes) for dark mode
