# Micro Solar DC Wiki - rules for agents

A public wiki (Astro Starlight, deployed to Cloudflare) growing into a **framework, almost a
"code", for small off-grid DC solar systems**: picogrids storing about 5 kWh or less, for
households and small community buildings in rural and Indigenous communities and anywhere grid
power is unreliable or unaffordable. Not for utility tie-ins or community-scale grids (yet).
Principles (from The Mission): commodity parts, modular and repairable, community-led
deployment, long-term sustainability, evolve as needs change.

## The reader
Handymen, community installers, NGO leads: practical, not engineers. They know Ohm's law and
what a fuse does; they do not read schematics or datasheets.
- Plain words, short sentences, no idioms: many readers use English as a second language or a
  translation tool. Metric units first. A picture or table beats a paragraph.
- Define a term the first time a page uses it (volts, amps, watt-hours, fuse).
- Tell them what to do, in steps, then why in one or two sentences. Use worked examples with
  real numbers and units ("a 10 W router for 24 h = 240 Wh").
- Warnings come before the step they apply to, as `:::danger` / `:::caution` asides.
- Say when to stop and get a licensed electrician, and that wiring rules differ by country.
- No PCB, IC or circuit-design content; link to the manufacturer manual instead.

## Pages
- One topic per page, under `src/content/docs/<section>/`. Sections follow what a user does:
  start-here, plan, choose-parts, install, safety, maintain, examples. The sidebar builds itself;
  `sidebar.order` sets the order inside a section.
- Copy `templates/page.md`. Frontmatter:
  - `status: draft` (default) shows a "not checked yet" banner; `reviewed` needs at least one
    source and a `reviewed:` date (the build fails otherwise); `about` is for pages with no
    technical claims.
  - `sources:` list of `{ title, url, note? }`, rendered at the end of the page automatically.
  - `draft: true` hides an unwritten page (an outline) from the live site; remove it to publish.
- Every number, limit or safety rule needs a source: a standard or code (name it and its
  country), a manufacturer manual, or a recognised safety body. Forums and videos are leads,
  never the source. If sources disagree, say so and give the safer value.
- Only the owner sets `status: reviewed`. An agent writes `draft` pages.
- `drop/` is the owner's inbox (PDFs, photos, links). Use an item, then delete it or move it into
  the page's sources. Do not publish files that are not ours to share (datasheets, manuals).

## The code (direction)
The goal is a set of numbered requirements, like a wiring code, that a community can build to
and check against. Requirements use **must** / **should**, carry a stable ID that never gets
reused (e.g. `DIST-3.2`), and each gives its reason and source. Guide pages explain and link to
requirement IDs instead of restating them. The owner's original outline (Mission; Part I DC
introduction; Part II component standards and Tiers 0-2; Part III applications) is the backbone.

## Commands
- `npm run dev` preview at localhost:4321 (agents: `npx astro dev --background`, stop with
  `npx astro dev stop`)
- `npm run build` must pass before a commit: the page schema and the link checker run here.
- Push to `main` deploys (Cloudflare Workers Builds: `npm run build`, then `npx wrangler deploy`).

## Git
Small commits, one page or topic each. `dist/`, `.astro/`, `node_modules/` are not tracked.
