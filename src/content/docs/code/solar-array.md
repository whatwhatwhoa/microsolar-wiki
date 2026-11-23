---
title: GEN-1 Solar array
description: Rules for panels, panel voltage in the cold, the PV disconnect, PV cable, parallel panels and surge protection.
status: draft
sidebar:
  order: 10
sources:
  - title: Victron SmartSolar MPPT 150/35 and 150/45 manual, Installation
    url: https://www.victronenergy.com/media/pg/Manual_SmartSolar_MPPT_150-35__150-45/en/installation.html
    note: disconnect for all PV conductors; fuse between array and charger
  - title: Victron Wiring Unlimited, Ground, earth and electrical safety
    url: https://www.victronenergy.com/media/pg/The_Wiring_Unlimited_book/en/ground,-earth-and-electrical-safety.html
    note: PV conductors not grounded; frames to the central ground
  - title: Summary of IEC TS 62257-9-8 (VeraSol)
    url: https://verasol.org/wp-content/uploads/import/Summary-of-IEC-62257-9-8.pdf
    note: panel and controller listings above 240 W / 35 V Voc / 8 A Isc; string fusing via IEC 60364-7-712
  - title: IEC TS 62257-5:2015, Protection against electrical hazards (preview)
    url: https://cdn.standards.iteh.ai/samples/22162/1a6bbaebbff34b5c8f43cac430648284/IEC-TS-62257-5-2015.pdf
    note: surge protective devices and earthing
---

The solar array is the panels, their frames and mounting, and the cable down to the charge
controller. Background: [The parts of a system](/plan/parts-of-a-system/#solar-panels).

## GEN-1.1 Panel voltage in the cold

**must** - The array's open-circuit voltage (Voc) at the coldest temperature expected on site
stays at or below 60 V, and below the charge controller's maximum input voltage.

*Why:* panel voltage rises in the cold, by roughly 0.3 % per °C below 25 °C. A panel labelled
Voc 49.5 V can reach about 55 V on a frosty morning. 60 V keeps the array extra-low voltage
([SYS-1.1](/code/safety-model/#sys-11-extra-low-voltage-only)). In practice: one 400-500 W panel
per string, and panels in parallel, never in series.

*How to check:* Voc on the panel label × (1 + 0.003 × (25 − coldest °C)). Use the panel's own
temperature coefficient if the datasheet gives it.

## GEN-1.2 Listed panels

**should** - Use panels certified to IEC 61215 and IEC 61730. For panels over 240 W, Voc over
35 V or Isc over 8 A, use IEC 61730 class II panels.

*Why:* certified panels are tested for weather, insulation and fire. The second sentence is the
condition VeraSol (IEC TS 62257-9-8) sets for bigger panels.

## GEN-1.3 PV disconnect

**must** - A switch or DC breaker at the controller disconnects both PV conductors. It is rated
for DC, for at least the array's cold Voc, and for at least 1.25 × the array's short-circuit
current (Isc).

*Why:* panels make power whenever there is light. Without a disconnect, nobody can safely work on
the controller. DC breakers are often polarity-marked: wire them the way the label shows.

## GEN-1.4 PV cable and connectors

**must** - PV cable outdoors is solar cable rated for sunlight and weather (for example
H1Z2Z2-K or PV wire), sized for at least 1.56 × Isc. Connectors are touch-safe PV connectors
(MC4 type), and the two halves of each connection come from the same maker.

*Why:* ordinary cable cracks in sunlight within a few years. 1.56 is 1.25 × 1.25: one factor for
bright sun above the label value, one for continuous current. Mixed connector brands may not fit
tightly and can overheat.

## GEN-1.5 Panels in parallel

**must** - With three or more panels in parallel, each panel has its own fuse, no larger than the
"maximum series fuse" on the panel's label. With one or two panels, no panel fuse is needed.

*Why:* if one panel fails short, the others push their current backwards into it. Two panels
cannot push more than one panel's current, which every panel can carry; three or more can.

## GEN-1.6 Frames and surge protection

**should** - Bond panel frames and metal mounting to the system's earth point
([DIST-4](/code/earthing-and-surge/)). Where PV cable runs outdoors for more than a few metres,
fit a DC surge protective device (SPD) for PV at the controller end.

*Why:* bonded frames give lightning surges a path to earth that does not run through the
controller. A small clamp diode inside a controller is not a surge protective device.

## GEN-1.7 Never earth a PV conductor

**must** - Neither PV conductor is connected to earth anywhere except through the system's single
earth point ([DIST-4.1](/code/earthing-and-surge/#dist-41-one-earth-point)).

*Why:* most small MPPT controllers are not isolated: PV negative and battery negative are the
same wire inside. A second earth connection makes current flow through the earth and the
controller.
