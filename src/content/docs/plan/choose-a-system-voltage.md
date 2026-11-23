---
title: Choose a system voltage
description: 12 V, 24 V or 48 V, and one native pack or two packs in series.
status: draft
sidebar:
  order: 4
sources: []
---

The system voltage is the battery voltage. Everything else (charger, wiring, outlets, loads)
follows from it. Higher voltage means lower current for the same power: smaller wires, less
heating, and room to grow. As demand grows, systems move from 12 to 24 to 48 V.

| Voltage | Use it for | Why |
|---|---|---|
| **12 V** (or USB) | Tiny kits only: lights, phones, USB devices | High current, thick wires, low scalability. Wiring losses make it impractical at home scale. |
| **24 V** | Homes, the practical baseline: laptops, fans, monitors, small DC fridges | Easy wiring, easy parts, efficient distribution. Pairs naturally with 400-500 W panels. |
| **48 V** | Larger loads: cooking, refrigeration, desktop computers, anything regularly over 1 kW | Lower current for the same power. |

See [System sizes](/plan/system-sizes/) for which voltage goes with which size.

## One native pack or two in series

Two 12 V batteries in series make 24 V. That is modular and convenient, but only if the user
actively monitors them or the packs include balancing. Otherwise one battery drifts, the system
slowly degrades, and that battery becomes a failure point.

A single native 24 V pack avoids the problem entirely. It is simpler and more robust for
non-technical users.
