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
  ReadMode.tsx                    Quick/Full read switch, collapsible sections, Under the hood panels
  SpecPlate.tsx                   The 60-second summary plate at the top of a case
  ReactionDemo.tsx                Thesis reaction-time task + gauge
  ResultsChart.tsx                Thesis results chart (draws in once, tap for details, table view)
  GradeStamp.tsx                  Rubber-stamp grade (use stamp: true on a Stats item)
  RoadScene.tsx                   Road illustration + alert glyph shared by the demo and Fig 01
```

## Quick / Full read

Wrap a case study's content in `<ReadModeProvider>` and add `<ReadToggle />` under the meta strip.
Give a `Section` a `summary` and it collapses to that line in Quick read. Put technical detail in
`<DeepRead>` and it opens in Full read. The reader's choice is remembered across case studies.
Pages without the provider render exactly as before.

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
