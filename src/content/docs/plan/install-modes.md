---
title: Install modes
description: Plug-in hub with cords, or fixed wiring in walls - what changes between them.
status: draft
sidebar:
  order: 7
sources:
  - title: IEC TS 62257-9-4:2016, User installation (preview)
    url: https://cdn.standards.iteh.ai/samples/22172/b7ef20fc7ea64326b7b39e9c276976bf/IEC-TS-62257-9-4-2016.pdf
    note: fixed wiring for 12/24 V installations up to 500 VA
  - title: Summary of IEC TS 62257-9-8 (VeraSol)
    url: https://verasol.org/wp-content/uploads/import/Summary-of-IEC-62257-9-8.pdf
    note: plug-and-socket kits
---

There are two ways to bring power from the distribution board to the devices. Many systems use
both.

## Plug-in hub

The board, battery and battery switch stand together. Every device connects to an outlet on the
board with a cord, the way a laptop connects to its charger. Cords are visible, movable, and a few
metres long.

- **Good for:** Sizes A and B, rented homes, first systems, anyone who does not want to open walls.
- **Rules:** the cords follow [DIST-3.4](/code/connectors-and-outlets/#dist-34-cords).

## Fixed wiring in walls

Branch cables run inside walls or ceilings to outlets, lights and switches in other rooms. This is
a building installation, and it is where most mistakes hide.

What changes compared with the plug-in hub:

- **Wire size from the fuse**, never from the electronic breaker setting
  ([DIST-2.1](/code/wiring/#dist-21-wire-size-from-the-fuse)), and long runs sized for voltage drop
  ([DIST-2.2](/code/wiring/#dist-22-voltage-drop)).
- **Cable type by branch class:** light cable only on limited branches; standard and power
  branches use building cable or wire in conduit
  ([DIST-1.5](/code/overcurrent-protection/#dist-15-branch-classes)).
- **Kept apart from AC wiring**: never in the same conduit or box without a barrier.
- **Every joint in a box you can reach**, with lever or screw terminals; no buried joints.
- **DC outlets**, never AC sockets ([DIST-3.1](/code/connectors-and-outlets/#dist-31-one-connector-family-per-voltage)).
- **Labels at both ends** of each run: branch number, voltage, fuse
  ([SYS-2.2](/code/labels-and-documents/#sys-22-labels)).
- **A test before use:** polarity at every outlet, and a short at the far end trips the branch
  ([Commissioning](/install/commissioning/)).
