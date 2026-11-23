---
title: System sizes
description: Four system sizes, A to D, from a micro kit to a community system, and how to pick yours by your biggest load.
status: draft
sidebar:
  order: 3
sources:
  - title: ESMAP (2015), Beyond Connections - Energy Access Redefined, executive summary
    url: https://www.worldbank.org/content/dam/Worldbank/Topics/Energy%20and%20Extract/Beyond_Connections_Energy_Access_Redefined_Exec_ESMAP_2015.pdf
    note: Multi-Tier Framework, Tables ES.1-ES.3 (tier thresholds)
  - title: ESMAP (2015), Beyond Connections - Energy Access Redefined, full report
    url: https://documents1.worldbank.org/curated/en/650971468180259602/pdf/105054-ESM-P148200-ADD-SERIES-PUBLIC-FINAL-ESMAP-Beyond-Connections-TR008-15-optimized.pdf
    note: Tables 6.3 (technologies per tier) and 10.4 (community facilities)
  - title: IEC TS 62257-200:2026, System selection and design (preview)
    url: https://cdn.standards.iteh.ai/samples/iec/iec-ts-62257-200-2026/05eef8bcea96435a904a7e94259d64f5/iec-ts-62257-200-2026.pdf
    note: architecture type T2I (individual system, renewable generation with storage)
---

Most people don't start by designing a full system. They start with one need, add another, and
end up with something that looks like infrastructure. These four sizes organize that growth:
**what size fits what life**, **which voltage fits**, and **which loads fall where**. They are a
planning aid, not a rule: every situation is different.

Your size is a mix of three things: how much energy you use per day, how many panels you have,
and how technical you want to be.

## Pick by your biggest load

Pick the size by the **highest-energy device you need to run reliably**.

| Your biggest load | Size |
|---|---|
| Lights and phones | [Size A: Kit](#size-a-kit) |
| A laptop or router | [Size B: Home](#size-b-home) |
| A fridge or workshop tools | [Size C: Home Plus](#size-c-home-plus) |
| A pump, or several rooms or buildings | [Size D: Community](#size-d-community) |

## The sizes at a glance

| | A: Kit | B: Home | C: Home Plus | D: Community |
|---|---|---|---|---|
| Battery | 0.2-0.5 kWh | 1-2.5 kWh | 2.5-5 kWh | 5 kWh and up |
| Panels | one small, 20-80 W | one 400-500 W | two or three 400-500 W | four or more 400-500 W |
| Voltage | 12 V or USB | 24 V | 24 V | 48 V |
| Typical build | sealed kit or power bank | custom or kit distribution | modular distribution board | modular bus bars, structured distribution |
| Repairable | no: integrated | to a degree | yes: modular, upgradable | yes: a long-term asset |
| Skill needed | none | low | moderate | technical |
| Designed to deliver (MTF) | Tier 1-2 | Tier 3 | Tier 3, Tier 4 at the top end | Tier 4-5 |

Moving right, systems go from simple and user-friendly but sealed, to modular and repairable but
needing more knowledge. Sizes A to C are what this wiki covers today.

## Sizes and the Multi-Tier Framework

Many NGOs and funders measure energy access with the World Bank's **Multi-Tier Framework (MTF)**,
which grades what a household actually receives from Tier 0 (no access) to Tier 5. Our sizes
are hardware, not outcomes, so they use letters to avoid confusion. The last row of the table
above is the MTF tier each size is designed to deliver, assuming 4-5 sun hours a day.

| MTF tier | Power at least | Energy per day at least | Hours per day at least |
|---|---|---|---|
| Tier 1 | 3 W | 12 Wh | 4 h |
| Tier 2 | 50 W | 200 Wh | 4 h |
| Tier 3 | 200 W | 1.0 kWh | 8 h |
| Tier 4 | 800 W | 3.4 kWh | 16 h |
| Tier 5 | 2 kW | 8.2 kWh | 23 h |

The tier a household reaches also depends on reliability, affordability, safety and more, not
only on the hardware. In IEC TS 62257 terms, every size here is an **individual electrification
system with renewable generation and storage** (type T2I).

## Size A: Kit

**"A step above a power bank."** For lighting, phone charging, radios, USB fans and emergency use.
Ideal for first-time users, disaster kits, or one small room.

- **Runs:** LED lights for several hours, phones and small USB devices, an occasional radio,
  router or USB fan.
- **Typical setup:** one small panel (20-80 W), a 12 V battery or an integrated power station,
  a couple of USB ports and a light output.
- **What it feels like:** extremely simple. You plug things in and they work, but you notice the
  limits quickly. It is a convenience layer, not a home system.

## Size B: Home

**"The smallest real home system."** The first size that supports a daily routine without
constant rationing. One good panel and one good battery run the essentials.

- **Runs:** a full evening of lighting, a laptop or mini PC for work, home internet, fans, USB
  charging for everyone.
- **Typical setup:** one 400-500 W panel, one 24 V LiFePO₄ battery, a 24 V MPPT charge
  controller, basic DC distribution (lights, USB-C, fan).
- **What it feels like:** more freedom. You stop thinking about every watt. A household can live
  on Size B indefinitely if its needs stay modest.

## Size C: Home Plus

**"A small home system with headroom."** Enough battery and panel for real appliances, carefully.
Many rural homes and small shops can run almost entirely on Size C, and many households never
need more. It matches common commodity battery sizes (2.5-5 kWh).

- **Runs:** everything in Size B, plus a TV, a sewing machine or small workshop tools, a DC
  fridge or a carefully managed AC fridge, larger fans.
- **Typical setup:** two or three 400-500 W panels, 2.5-5 kWh of 24 V LiFePO₄, a higher-current
  MPPT, a labeled DC distribution board with electronic breakers.
- **What it feels like:** daily life gets smoother. The system moves from personal use to
  household infrastructure, maintainable with local skills.

## Size D: Community

**"When your system becomes infrastructure."** Serves several people, rooms or buildings, and
heavier loads: a long-term community asset for a school, clinic or community centre.

- **Runs:** a refrigerator with little compromise, water pumps, lighting across several rooms or
  buildings, computer labs, workshops, charging for e-bikes or tools.
- **Typical setup:** four or more 400-500 W panels, 5-10+ kWh at 48 V, modular bus bars and
  breakers, proper grounding, possibly an inverter for occasional AC loads.

:::note
Size D is beyond this wiki's current scope (up to about 5 kWh). It is described so you know where
the line is; the code does not cover it yet.
:::
