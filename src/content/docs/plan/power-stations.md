---
title: Why not a power station?
description: When a sealed portable power station makes sense, and why a DC system usually wins for homes.
status: draft
sidebar:
  order: 7
sources: []
---

When people think "solar", they often think of portable power stations: a box with a battery, a
screen, lots of ports, panel in and AC out. For some uses they are fine. But if the goal is
**long-term, low-cost, repairable power**, they come with real trade-offs.

1. **They are AC-first, not DC-first.** Most are built around plugging in AC appliances, so
   there is always an inverter inside, sometimes running even when you only need USB or DC. You
   pay for, and lose energy to, the architecture you were trying to avoid.
2. **High cost per kWh.** You buy plastics, displays, marketing and several converters in one
   box. Per kWh, a power station usually costs much more than a simple 24 V battery + MPPT + DC
   distribution.
3. **Hard to repair, hard to scale.** If the battery management board dies, a transistor shorts,
   or a connector breaks, most users cannot fix it. You cannot easily open it, swap one bad cell,
   or reconfigure it for a bigger system. For a household or community, that sealed box becomes a
   single point of failure.
4. **A poor fit for wiring a house or community centre.** They are great on a table with a
   laptop plugged in. They are not designed as the backbone for branch circuits, lighting runs or
   several rooms. Stretching one into whole-home duty ends in awkward workarounds and more idle
   losses.
5. **Locked into one vendor.** Batteries, firmware, connectors and spare parts are
   vendor-specific. If the vendor changes its product line or stops supporting older models, you
   are stuck. Commodity 24 V or 48 V gear lets you mix parts from many suppliers.

## Where they do make sense

- Short trips and portable work
- Emergency backup for a small apartment
- Places where nobody is going to wire anything, ever

That is [Size A](/plan/system-sizes/#size-a-kit) and the low end of Size B. For anything
that looks like infrastructure, a simple DC system built from commodity parts is usually cheaper,
more efficient and longer-lived, even if the power station looks easier on day one.
