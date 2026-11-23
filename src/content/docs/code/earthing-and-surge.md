---
title: DIST-4 Earthing and surge
description: One earth point for the DC negative, bonding metal parts, and when the system may float.
status: draft
sidebar:
  order: 33
sources:
  - title: Victron Wiring Unlimited, Ground, earth and electrical safety
    url: https://www.victronenergy.com/media/pg/The_Wiring_Unlimited_book/en/ground,-earth-and-electrical-safety.html
    note: one ground point close to the battery; frames to the central ground; PV conductors not grounded
  - title: IEC TS 62257-5:2015, Protection against electrical hazards (preview)
    url: https://cdn.standards.iteh.ai/samples/22162/1a6bbaebbff34b5c8f43cac430648284/IEC-TS-62257-5-2015.pdf
    note: one DC conductor may be earthed with at least simple separation from AC; SPDs; earthing
  - title: IEC TS 62257-9-4:2016, User installation (preview)
    url: https://cdn.standards.iteh.ai/samples/22172/b7ef20fc7ea64326b7b39e9c276976bf/IEC-TS-62257-9-4-2016.pdf
    note: lightning-protection earth conductor at least 16 mm²
  - title: ABYC E-11 AC and DC Electrical Systems on Boats (2003)
    url: https://law.resource.org/pub/us/cfr/ibr/inc/ansi/abyc.e-11.2003.pdf
    note: two-wire systems; no metal hull or chassis as the current return
---

"Earthing" means connecting the system to the ground outside with an earth rod. "Bonding" means
joining metal parts together so they stay at the same voltage.

## DIST-4.1 One earth point

**must** - All negatives (PV, battery, distribution, outputs) are one connected conductor. If the
system is earthed, that negative is connected to earth at **one point only**: an earth stud next
to the battery negative.

*Why:* two earth connections make current flow through the soil and through equipment that was
never meant to carry it. Victron: one ground point, close to the battery.

## DIST-4.2 Two wires to every load

**must** - Every circuit has its own negative wire back to the distribution board. No metal frame,
roof, pipe or the earth itself carries the return current.

*Why:* vans use the chassis as the negative return; that does not carry over to buildings, where
metal parts are not designed as conductors and joints corrode. ABYC also requires two-wire
systems.

## DIST-4.3 Bond the metal

**should** - Panel frames, mounting rails, metal enclosures and the surge protector's earth wire
all connect to the same earth stud, with green-yellow cable. The earth conductor for lightning
protection is at least 16 mm².

*Why:* bonded metal cannot sit at a different voltage from the system during a surge or a fault.
16 mm² is the IEC TS 62257-9-4 minimum for a lightning-protection earth conductor.

## DIST-4.4 Floating systems

**should** - Where no earth rod can be installed, the system may float (no earth connection). Then
all metal parts are still bonded together ([DIST-4.3](#dist-43-bond-the-metal)).

*Why:* at 60 V DC or less, an unearthed system is allowed. The cost is that a fault from positive
to metal goes unnoticed until a second fault, so regular checks matter more
([Regular checks](/maintain/regular-checks/)).

## DIST-4.5 AC equipment must be isolated

**must** - Any AC charger or inverter connected to an earthed DC system has isolated (separated)
input and output.

*Why:* IEC TS 62257-5 allows earthing a DC conductor only when the DC side is separated from any
AC side. A non-isolated device can connect the DC system to mains voltage.
