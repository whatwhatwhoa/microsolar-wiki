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
- One topic per page, under `src/content/docs/<section>/`. Sections, in reading order:
  start-here, plan (concepts and choices), code (the rules), install, maintain (operate and
  maintain), reference (standards map, glossary). The sidebar builds itself; `sidebar.order`
  sets the order inside a section.
- Copy `templates/page.md`. Frontmatter:
  - `status: draft` (default) shows a "not checked yet" banner; `reviewed` needs at least one
    source and a `reviewed:` date (the build fails otherwise); `about` is for pages with no
    technical claims.
  - `sources:` list of `{ title, url, note? }`, rendered at the end of the page automatically.
  - `draft: true` hides an unwritten page (an outline) from the live site; remove it to publish.
- Every number, limit or safety rule needs a source. Weight, highest first: **guiding
  regulations** (IEC TS 62257 series, IEC 62368-1, and the IEC standards they cite); **industry
  norms** (Victron Energy, marine: ABYC, ISO small craft; national codes such as the NEC as
  cross-checks); **field practice** (van/RV builders, forums, videos: leads and lessons, never
  the only source). If sources disagree, say so and give the safer value.
- `research/` holds the sourced research notes behind the rules (tracked, not published). Read
  the matching note before writing a rule; add what you learn there, with URLs and what was
  actually read (standard, official preview, abstract, or secondary summary). Standards are
  paywalled: never invent a clause number or value.
- Only the owner sets `status: reviewed`. An agent writes `draft` pages.
- `drop/` is the owner's inbox (PDFs, photos, links). Use an item, then delete it or move it into
  the page's sources. Do not publish files that are not ours to share (datasheets, manuals).

## The code
Numbered requirements, like a wiring code, that a community can build to and check against.
- Prefixes by part: `SYS-` (safety model, labels, documents, install modes), `GEN-` (panels,
  charge controllers), `STO-` (battery, BMS, main fuse, isolator, placement), `DIST-` (wiring,
  overcurrent protection, connectors, outlets, earthing, enclosures), `LOAD-` (outputs,
  appliances, inverters). One page per topic under `code/`.
- Each rule: ID as a heading (`### STO-2.1 Fuse at the battery`), **must** or **should**, the
  rule in one or two sentences, then *Why* and *Source*. IDs never change or get reused; a
  withdrawn rule stays as "withdrawn".
- Safety model (from IEC 62368-1): each hazard gets a basic safeguard for normal use and a
  supplementary one that still works after a single fault. Electronics (eFuses, BMS FETs) are
  convenience; the counted safeguard is a device that fails safe, such as a fuse sized to the wire.
- Plan and install pages explain and link to rule IDs instead of restating rules.

## Commands
- `npm run dev` preview at localhost:4321 (agents: `npx astro dev --background`, stop with
  `npx astro dev stop`)
- `npm run build` must pass before a commit: the page schema and the link checker run here.
- Push to `main` deploys (Cloudflare Workers Builds: `npm run build`, then `npx wrangler deploy`).

## Git
Small commits, one page or topic each. `dist/`, `.astro/`, `node_modules/` are not tracked.
