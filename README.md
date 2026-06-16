# Nicholas Mitchell — Portfolio

A UX portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**, in a
1950s retro-futurism / vintage-packaging design system.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
app/
  layout.tsx                      Root layout (fonts, metadata)
  globals.css                     The full design system (tokens + components)
  page.tsx                        Home
  work/page.tsx                   Work index (filterable)
  work/<slug>/page.tsx            One folder per case study
  about/page.tsx                  About
  writing/page.tsx                Writing (placeholder)
components/
  Header, Footer, Brand           Site chrome + Sputnik/Seal SVGs
  CaseStudy.tsx                   Cover, MetaStrip, Section, Outcome, etc.
  CaseCard.tsx                    Work/Home cards + the CASES list
```

## Add a case study

1. Add an entry to `CASES` in `components/CaseCard.tsx`.
2. Create `app/work/<your-slug>/page.tsx`, copying an existing one and filling in the
   `CaseCover`, `MetaStrip`, `Section`, `Outcome`, and `Reflection` blocks.

That's the whole job — the layout, color events, stamps, and hovers come from the shared components.

## Image slots

Case studies render `<ImageSlot />` placeholders where figures go. Replace each with an
`<img>` / `next/image` when you have the asset.

## Deploy

Push to GitHub, import the repo at vercel.com, accept defaults. No environment variables needed.

## Notes

- Fonts (Bowlby One, Space Grotesk, DM Sans) load from Google Fonts via `<link>` in `app/layout.tsx`.
- Contact email and the footer name are hard-coded; search for `NicholasSMitchell@gmail.com`
  and `Nicholas Scott Mitchell` to change them.
