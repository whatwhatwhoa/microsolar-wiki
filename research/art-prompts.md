# Art prompts (for the owner to generate)

Pictures the pages need that a Mermaid diagram cannot draw. Generate each one, save it under the
file name given, and drop it in `drop/`; an agent then places it in `src/assets/` and the page.

## Shared style (paste before every prompt)

> Flat, clean technical illustration in a consistent style for a public safety wiki. Soft, muted
> colours on a plain off-white background, thin dark outlines, gentle shadows, no gradients.
> Realistic proportions of real equipment, no brand names or logos anywhere, **no text, letters,
> numbers or labels** in the image (labels are added later). People, if shown, are respectful,
> ordinary and from a mix of backgrounds; no stereotypes, no poverty imagery. Landscape 16:9,
> 1600 x 900 px.

Why no text: image models misspell labels, and translated pages need their own labels.

## Prompts

| # | File | Page | Prompt (after the shared style) |
|---|---|---|---|
| 1 | `hero-home.png` | Home page | A small single-storey rural home at dusk. One solar panel stands on a simple metal frame on the ground beside the house, tilted toward the sky. Warm LED light glows through the open doorway and one window. Calm, hopeful mood. |
| 2 | `system-overview.png` | Parts of a system | A cut-away side view of a small home showing, left to right: a solar panel on a ground frame outside, a cable entering the wall through a drip loop, a wall-mounted charge controller, a battery in a ventilated metal box on a low shelf, a small distribution board with fuses, and cables running to a ceiling light, a wall USB outlet and a desk fan. Clear spacing between parts so labels can be added. |
| 3 | `day-household.png` | A day with solar | Evening inside a simple one-room home: a family at a table, one child doing homework under a single bright LED ceiling bulb, phones charging from a small wall-mounted USB outlet, a pot on a cooking stove in the corner. Warm, natural light. |
| 4 | `night-household.png` | A day with solar | Night in the same room: sleeping mats on the floor, a very dim small night light near the door, a pedestal fan turning gently. Quiet blue-dark tones. |
| 5 | `distribution-board.png` | Distribution wiring | Front view of a tidy, open small DC distribution board in a grey plastic enclosure: one thick red and one thick black cable entering at the bottom through cable glands, a red positive busbar and a black negative busbar, a row of six blade-fuse holders, and thin red/black branch cables leaving neatly through glands at the top, each with a blank white label tag. |
| 6 | `star-vs-chain.png` | Distribution wiring | Two simple floor plans of the same three-room home side by side. Left: each light and outlet has its own cable running back to a central board (star layout). Right: one cable runs from the board to the first outlet, then on to the next and the next (chained). Use thin coloured lines for cables, small icons for lights and outlets. |
| 7 | `crimp-good-bad.png` | Wiring (DIST-2.5) | Close-up comparison, two panels side by side, of a ring terminal crimped onto a stranded copper wire. Left (good): straight, fully inserted strands, crimp barrel evenly squeezed, insulation reaching the barrel. Right (bad): stray strands sticking out, bare copper showing, barrel crushed at an angle, twisted and taped wire. A small green tick shape on the left and a red cross shape on the right, no text. |
| 8 | `cable-types.png` | Distribution wiring | A row of five short cable samples cut to show their cross-sections, on a plain background: a two-core flexible cord with fine strands, a solid-core house wire, a single-core automotive wire with fine strands, a black double-insulated solar PV cable, and a thick fine-stranded battery cable with a lug. Each sample clearly different in thickness and strand count. |
| 9 | `copper-vs-cca.png` | What is normally available | Macro close-up of two cut wire ends side by side, one solid bright copper all the way through, the other a silver aluminium core with a very thin copper coating, the coating scraped away with a knife on one strand. |
| 10 | `fuse-types.png` | Overcurrent protection | Five DC fuse types lined up on a workbench, roughly to scale: a small automotive blade fuse, a glass cartridge fuse, a flat bolt-down ANL fuse, a small round terminal fuse that sits on a battery post, and a large cylindrical high-current fuse with bolt tabs. |
| 11 | `battery-placement.png` | Battery placement | Side view of a room corner: a lithium battery inside a closed metal box on a sturdy low wall shelf, in a utility area away from the sleeping area, with clear air space around it, a fused cable and a red isolator switch mounted on the wall beside it, and a smoke alarm on the ceiling above. |
| 12 | `panel-ground-mount.png` | Mounting panels | A single large solar panel on a simple, sturdy ground frame of galvanised steel angle, anchored with bolts into concrete footings, tilted toward the sun, with a person kneeling beside it wiping the glass with a soft cloth and a bucket of water. |
| 13 | `multimeter-battery.png` | Troubleshooting | Close-up of two hands holding multimeter probes on the terminals of a battery: red probe on the positive terminal, black on the negative, the meter on the bench showing a blank display (no digits). |
| 14 | `grid-backup-rail.png` | Solar with grid backup | A DIN rail inside an open enclosure carrying, left to right: a slim AC-to-DC power supply module, a small two-input redundancy module, two DC circuit breakers, and terminal blocks, with neat red and black wires between them. |
| 15 | `lead-acid-vs-lfp.png` | Alternatives | Two batteries side by side on a shelf: a large heavy flooded lead-acid battery with vent caps, and a smaller, slimmer lithium battery in a plain case. The lead-acid battery noticeably bigger and heavier-looking. |
| 16 | `market-stall.png` | What is normally available | A busy, respectful street-market electrical shop front: shelves of cable reels, boxed solar charge controllers, LED bulbs, batteries and a few solar panels leaning against the wall, a shopkeeper helping a customer compare two coils of cable. |
| 17 | `size-icons.png` | System sizes | A set of four matching flat icons in one row, same style and size: a light bulb with a phone (kit), a laptop with a fan (home), a small fridge with a TV (home plus), a water pump with a school building (community). |
| 18 | `labels-board.png` | Labels and documents | A distribution board door open, with a laminated wiring diagram card taped inside the door, a pouch with spare fuses, and blank label tags on every branch cable. |

## After generating

- Check every picture for wrong details before using it: reversed polarity colours, missing fuses,
  a battery on the floor of a bedroom, panels touching the roof sheet. A wrong picture teaches the
  wrong thing.
- Keep the generator's terms in mind: the wiki's content licence is CC BY 4.0.
