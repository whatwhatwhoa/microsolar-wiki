---
title: Choose a system voltage
description: 12 V, 24 V or 48 V, how the choice changes wire size and safety, and one native pack or two packs in series.
status: draft
sidebar:
  order: 4
sources:
  - title: Victron Energy, Wiring Unlimited, DC wiring
    url: https://victronenergy.com/media/pg/The_Wiring_Unlimited_book/en/dc-wiring.html
    note: higher voltage means lower current and thinner cable; heat in a cable equals its voltage-drop share of the power
  - title: ISO 10133:2012, Small craft, extra-low-voltage d.c. installations (preview)
    url: https://cdn.standards.iteh.ai/samples/45867/0dceabde692c42a2abe7f580f3b099ff/ISO-10133-2012.pdf
    note: 4.6, equipment works from 75 % to 133 % of nominal voltage; 4.7, voltage drop limits
  - title: UL, IEC 62368-1 3rd edition analysis
    url: https://collateral-library-production.s3.amazonaws.com/uploads/asset_file/attachment/56784/62368-1_Ed_3_UL_Analysis_2021-10-22.pdf
    note: ES1 limit for outdoor locations lowered to 30 V DC
  - title: Certio, SELV, PELV and FELV extra-low voltage explained (secondary)
    url: https://certio.uk/guides/selv-pelv-felv-extra-low-voltage-explained
    note: SELV without basic protection up to 60 V DC in normal dry conditions
  - title: Victron Lithium Battery Smart manual, Installation
    url: https://www.victronenergy.com/media/pg/Lithium_Battery_Smart/en/installation.html
    note: series strings; a fuse in the positive of every battery and every series string
---

The system voltage is the battery voltage. Everything else (charge controller, wiring, outlets,
loads) follows from it, so choose it first and use the same voltage for the whole system. For
most homes the answer is **24 V**.

## The short answer

| Voltage | Use it for | Why |
|---|---|---|
| **12 V** (or USB) | Tiny kits only: lights, phones, USB devices | High current, thick wires, little room to grow. Wiring losses make it impractical at home scale. |
| **24 V** | Homes, the practical baseline: laptops, fans, monitors, small DC fridges | Easy wiring, easy parts, efficient distribution. Pairs naturally with 400-500 W panels. |
| **48 V** | Larger loads: cooking, refrigeration, desktop computers, anything regularly over 1 kW | Lower current for the same power. Needs more care with touch safety (below). |

See [System sizes](/plan/system-sizes/) for which voltage goes with which size. As demand grows,
systems move from 12 to 24 to 48 V.

## Steps

1. **Find your system size** on [System sizes](/plan/system-sizes/). It suggests a voltage.
2. **Work out the current of your biggest loads.** Current = power ÷ voltage. Compare it with
   the [worked example](#worked-example): if 12 V needs cable thicker than you can buy and crimp
   locally, move up to 24 V.
3. **Check where the wiring goes.** If any wiring runs outdoors, in a bathroom or in an animal
   shelter, prefer 24 V over 48 V (see [Touch safety](#touch-safety)).
4. **Pick one voltage for the whole system.** The battery, the charge controller setting, the
   fuses and the outlets all use it. A device that needs a different voltage gets a
   [DC-DC converter](/reference/glossary/#dc-dc-converter) at its outlet.
5. **Buy a battery built for that voltage**
   ([STO-1.2](/code/battery-pack/#sto-12-one-native-pack-at-the-system-voltage)), not two
   smaller ones in series.

## Why higher voltage helps

Power is voltage times current (watts = volts × amps). For the same power, double the voltage
means half the current.

Current is what heats a wire and what makes the voltage sag along it. Half the current means a
quarter of the heat in the same wire, or the same loss in a wire with about a quarter of the
copper. A thinner wire is cheaper, easier to bend and easier to crimp.

There is a second effect. The same drop in volts is a smaller share of a higher voltage: a 0.36 V
loss is 3 % of 12 V but only 1.5 % of 24 V. The wiring code sets drop limits as a share of the
system voltage ([DIST-2.2](/code/wiring/#dist-22-voltage-drop)).

## Worked example

A home runs a laptop, a router and a small DC fridge at the same time: **240 W** in total. The
distribution board is **10 m** from the battery (20 m of cable, out and back). The cable is
copper.

| | 12 V | 24 V | 48 V |
|---|---|---|---|
| Current (240 W ÷ voltage) | 20 A | 10 A | 5 A |
| *With 2.5 mm² cable (0.14 Ω out and back):* | | | |
| Voltage lost in the cable | 2.8 V (23 %) | 1.4 V (5.8 %) | 0.7 V (1.5 %) |
| Power turned into heat in the cable | 56 W | 14 W | 3.5 W |
| **Cable needed for 3 % drop** | 25 mm² | 6 mm² | 1.5 mm² |

At 12 V, the 2.5 mm² cable wastes almost a quarter of the power and the fridge may not start. At
24 V the same job needs a 6 mm² cable, which is common and easy to crimp. At 48 V a thin cable is
enough.

*How the numbers are found:* resistance = 0.0175 Ω·mm²/m × 20 m ÷ 2.5 mm² = 0.14 Ω. Voltage lost
= current × resistance. Heat = current × current × resistance. For the last row, the allowed drop
(0.36 V, 0.72 V, 1.44 V) is divided by the current to get the allowed resistance, and the smallest
standard size that meets it is chosen. Also check that the wire is big enough for its fuse
([DIST-2.1](/code/wiring/#dist-21-wire-size-from-the-fuse)).

## Touch safety

Dry, intact skin can touch up to **60 V DC** without danger, and this code keeps every circuit at
or below 60 V ([SYS-1.1](/code/safety-model/#sys-11-extra-low-voltage-only)). Outdoors and in wet
places the safe limit is lower: **30 V DC** outdoors, and less on wet skin. So outdoors and in wet
places every live part must be covered, at any voltage
([SYS-1.6](/code/safety-model/#sys-16-no-bare-live-parts-outdoors-or-in-wet-places)).

A battery's voltage is higher than its name while it charges. For lithium iron phosphate (LFP)
batteries, at the usual charge limit of 3.65 V per cell:

| System | Cells in series | Highest charging voltage | Dry indoors (60 V) | Outdoors (30 V) |
|---|---|---|---|---|
| 12 V | 4 | 14.6 V | below | below |
| 24 V | 8 | 29.2 V | below | just below |
| 48 V | 16 | 58.4 V | **less than 2 V below** | **above** |

:::caution
At 48 V there is almost no margin below the 60 V limit. Set the charge controller exactly to the
battery maker's values ([GEN-2.3](/code/charge-controller/#gen-23-set-for-the-battery)) and never
use an "equalise" setting that raises the voltage. Keep all 48 V parts inside closed boxes.
:::

The solar panels have their own voltage, which can be higher than the battery's. That is covered
in [GEN-1.1](/code/solar-array/#gen-11-panel-voltage-in-the-cold).

## Will my devices run on it?

DC devices are made for a nominal voltage but accept a range around it. Small-boat equipment, for
example, must work from 75 % to 133 % of its nominal voltage:

| Nominal | Range the device must accept |
|---|---|
| 12 V | 9-16 V |
| 24 V | 18-32 V |
| 48 V | 36-64 V |

Read the input range on the device's label or in its manual, not only the nominal voltage. A
device marked "12-24 V" or "9-32 V" runs directly on a 24 V system. A device marked only "12 V"
needs a converter. Phones and laptops charge from USB-C outlets, which work from any system
voltage ([LOAD-1.2](/code/outputs-and-loads/#load-12-usb-outputs)).

## One native pack or two in series

Two 12 V batteries in series make 24 V. That is modular and convenient, but only if the user
actively monitors them or the packs include balancing. Otherwise one battery drifts, the system
slowly degrades, and that battery becomes a failure point.

**Why they drift.** No two batteries are exactly the same. In series, the same current flows
through both, so the weaker one empties first and fills first. Each battery's protection circuit
(its [BMS](/reference/glossary/#bms)) sees only its own half. Over months the gap grows, and the
weaker battery is overcharged or overdischarged while the total voltage looks normal.

A single native 24 V pack avoids the problem entirely. Its BMS watches every cell. It is simpler
and more robust for non-technical users, and the code prefers it
([STO-1.2](/code/battery-pack/#sto-12-one-native-pack-at-the-system-voltage)).

If you must use batteries in series:

- Use batteries of the same make, model, size and age, bought together.
- Use only packs that the maker allows in series, and follow the maker's manual.
- Fuse the positive of the series string at the battery
  ([STO-2.1](/code/battery-fuse-and-isolator/#sto-21-main-fuse-at-the-battery)).
- Measure each battery's voltage separately at every [regular check](/maintain/regular-checks/).
  A difference that grows month after month means the string needs balancing or a battery is
  failing.

## Changing voltage later

Moving from 12 V to 24 V later is a rebuild, not an upgrade. The battery changes, the charge
controller must support and be set to the new voltage, every 12 V-only device needs a converter,
and every fuse and outlet must be checked for the new voltage
([DIST-1.3](/code/overcurrent-protection/#dist-13-rated-for-dc-at-the-system-voltage)). If you
expect to grow beyond a kit, start at 24 V.

## When to get help

Ask a qualified installer before choosing 48 V, before joining batteries in series, or if any part
of the system will connect to mains (AC) wiring. Wiring rules differ by country.
