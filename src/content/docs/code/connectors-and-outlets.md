---
title: DIST-3 Connectors and outlets
description: One connector family per voltage, ratings, unplugging under load, and cords.
status: draft
sidebar:
  order: 32
sources:
  - title: Summary of IEC TS 62257-9-8 (VeraSol)
    url: https://verasol.org/wp-content/uploads/import/Summary-of-IEC-62257-9-8.pdf
    note: miswiring protection, strain relief, outdoor cable UV rating, plug-and-socket kits
  - title: Molex, hot mating and unmating of connectors (tech brief)
    url: https://dev3.molex.com/content/dam/molex/molex-dot-com/en_us/pdf/tech-briefs/987652-3376.pdf
    note: hot mating arcs and shortens contact life
  - title: Victron Wiring Unlimited, DC wiring
    url: https://victronenergy.com/media/pg/The_Wiring_Unlimited_book/en/dc-wiring.html
    note: no car plugs above 10 A, no battery clamps for permanent wiring
---

## DIST-3.1 One connector family per voltage

**must** - Each output voltage has its own connector family, and no other voltage's plug fits it.
Never use AC mains sockets or plugs for DC.

*Why:* a 12 V device plugged into 24 V can burn out or catch fire, and the user cannot see the
voltage. An AC socket on DC invites someone to plug in an AC appliance, or plug the DC device into
the mains.

:::note[Standard connectors]
The code will name one connector per voltage. Candidates: 5.5 × 2.1 mm barrel for 12 V up to 5 A
(the common 12 V plug), USB-C for USB power, and for 24 V a polarized, latching connector such as
Mini-Fit Jr or Anderson Powerpole. This choice is open.
:::

## DIST-3.2 Rated above the fuse

**must** - Every connector, socket and cord is rated for at least the current of the fuse that
protects it ([DIST-1](/code/overcurrent-protection/)), and for at least the system voltage.

*Why:* the fuse protects the connector only if the connector can carry what the fuse lets through.
Car cigarette-lighter plugs are poor contacts and should not carry more than 10 A (Victron).

## DIST-3.3 Switch off before unplugging

**should** - Users switch a branch off before unplugging a load that draws more than about 0.5 A.
Where users will unplug live, use a connector rated for it (for example Anderson Powerpole).

*Why:* pulling a DC plug under load can draw an arc above about 13 V and 0.5 A, which pits and
heats the contacts. Most small connectors are not rated for it (Molex).

## DIST-3.4 Cords

**must** - Cords from outlets to devices are visible, not hidden in walls, strain-relieved at both
ends, and rated for sunlight and weather where they run outdoors.

*Why:* VeraSol tests strain relief and outdoor cable for exactly these failures: cords pulled out
of terminals and cable cracked by sunlight. Wiring inside walls is fixed wiring:
[Fixed wiring in walls](/plan/install-modes/#fixed-wiring-in-walls).
