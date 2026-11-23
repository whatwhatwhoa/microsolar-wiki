---
title: Standards and sources
description: The regulations, industry norms and field practice behind the code, and what the code takes from each.
status: about
sidebar:
  order: 1
---

The code rests on three layers of sources. When they disagree, the code follows the higher layer,
or the safer value, and says so in the rule. Most standards are sold, not free: the code cites the
clause and links the free preview or a reliable summary.

## Guiding regulations

| Standard | What it covers | What the code takes |
|---|---|---|
| **IEC TS 62257 series** | Renewable energy systems for rural electrification: planning, design, protection, installation, acceptance, maintenance | The overall structure; system types (a home picogrid is type T2I); protection rules |
| IEC TS 62257-5 | Protection against electrical hazards | SELV on the DC side, fuse sizing (IB ≤ In ≤ Iz), breaking capacity, earthing, surge protection |
| IEC TS 62257-6 | Acceptance, operation, maintenance and replacement | Commissioning and maintenance as part of the system's life |
| IEC TS 62257-9-4 | User installation for 12/24 V systems up to 500 VA | Fixed wiring, voltage drop, earth conductor sizes |
| IEC TS 62257-9-8 (VeraSol) | Quality of stand-alone kits up to 350 W | Output protection, labels, spare fuses, user manual, panel and controller listings |
| IEC TS 62257-200 | System selection and design (2026, replaces -4) | Design method and architecture types |
| **IEC 62368-1** | Hazard-based safety for electronic equipment | The safety model: energy classes (ES1 ≤ 60 V DC), power classes (PS1-PS3), two safeguards per hazard, fire enclosures |
| IEC 62368-3 | DC power through ports (USB) | USB-C outputs at ES1 / PS2 |

The series is being renumbered (IEC TS 62257-100, 2022) into groups: -1xx planning, -2xx design
and installation, -3xx components, -4xx loads, -5xx kits. Some parts the code cites are being
replaced.

## Industry norms

| Source | What it covers | What the code takes |
|---|---|---|
| **Victron Energy**, *Wiring Unlimited* and product manuals | Low-voltage DC and lithium installations | One fuse per consumer, interrupt rating for lithium, isolating the positive, cable and torque practice, one ground point |
| **ABYC E-11** (boats, US) | AC and DC electrical systems on boats | Battery fuse within 175 mm, crimping, terminals per stud, cable support, voltage drop 3 % / 10 % |
| **ISO 10133** (small craft) | Extra-low-voltage DC installations on boats | Battery fuse within 200 mm, fuse never above the wire, colours, disconnect without tools |
| US NEC (cross-check) | US building wiring | Small-wire fuse limits, Class 2 power-limited circuits, PV conductor sizing |
| World Bank / ESMAP Multi-Tier Framework | Measuring household energy access | The MTF tier each [system size](/plan/system-sizes/) is designed to deliver |

## Field practice

Van and RV builders, solar forums and video makers have tried many things in real installations.
The code uses their lessons, but never as the only source for a rule: they are amateurs, and
common habits sometimes break the norms above. Examples the code corrects:

- Fuses sized at 1.25 × the load without checking the wire ([DIST-1.2](/code/overcurrent-protection/#dist-12-fuse-no-bigger-than-the-wire)).
- MRBF or ANL fuses as the main fuse on 24 V lithium batteries ([STO-2.3](/code/battery-fuse-and-isolator/#sto-23-which-fuse-type)).
- The vehicle chassis as the negative return, which does not carry over to buildings
  ([DIST-4.2](/code/earthing-and-surge/#dist-42-two-wires-to-every-load)).

## Research notes

The sourced research behind each rule, with what was actually read, is in the
[research folder](https://github.com/whatwhatwhoa/microsolar-wiki/tree/main/research) of the
repository.
