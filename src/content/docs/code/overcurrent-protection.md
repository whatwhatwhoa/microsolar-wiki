---
title: DIST-1 Fuses and breakers
description: Where fuses go, how to size them to the wire, DC and interrupt ratings, and branch classes.
status: draft
sidebar:
  order: 30
sources:
  - title: ISO 10133:2012, Small craft - extra-low-voltage DC installations (preview)
    url: https://cdn.standards.iteh.ai/samples/45867/0dceabde692c42a2abe7f580f3b099ff/ISO-10133-2012.pdf
    note: 8.1 fuse within 200 mm; 8.2 rating not above the smallest conductor
  - title: ABYC E-11 AC and DC Electrical Systems on Boats (2003)
    url: https://law.resource.org/pub/us/cfr/ibr/inc/ansi/abyc.e-11.2003.pdf
    note: 11.12 overcurrent protection; Table V breaker interrupt ratings
  - title: Victron Energy, Wiring Unlimited
    url: https://www.victronenergy.com.au/upload/documents/Wiring-Unlimited.pdf
    note: one fuse per consumer; interrupt rating at least the bank's short-circuit current (mandatory for lithium)
  - title: IEC TS 62257-5:2015, Protection against electrical hazards (preview)
    url: https://cdn.standards.iteh.ai/samples/22162/1a6bbaebbff34b5c8f43cac430648284/IEC-TS-62257-5-2015.pdf
    note: IB ≤ In ≤ Iz; breaking capacity ≥ prospective current
  - title: MarineHowTo, Battery banks and over-current protection
    url: https://marinehowto.com/?p=17412
    note: interrupt ratings by fuse type and voltage (secondary)
---

A fuse or breaker is the safeguard that counts against overload and short circuits
([SYS-1.3](/code/safety-model/#sys-13-the-safeguard-that-counts-fails-safe)). The main battery
fuse has its own page: [STO-2](/code/battery-fuse-and-isolator/).

## DIST-1.1 One fuse per wire

**must** - Every positive conductor has its own fuse or breaker, at the end where power comes from:
at the battery for the main cable, at the distribution board for each branch. Every device on the
board (charger, converter, USB charger, branch) has its own fuse where it connects.

*Why:* a fuse protects only the wire after it. One fuse for everything means a small wire can
burn while a big fuse holds. Victron: "Each individual consumer needs to have an individual fuse.
No matter how big or small."

## DIST-1.2 Fuse no bigger than the wire

**must** - A fuse or breaker is rated no higher than what the wire after it can carry
([DIST-2.1](/code/wiring/#dist-21-wire-size-from-the-fuse)), and at least the circuit's normal
current. The normal continuous current is at most 80 % of the fuse rating.

*Why:* this is IB ≤ In ≤ Iz in IEC TS 62257-5, and the rule in ISO 10133 and Victron. Sizing a fuse
at "1.25 × the load" without checking the wire is a common van-build mistake: a thin wire can then
overheat without the fuse ever opening.

## DIST-1.3 Rated for DC at the system voltage

**must** - Every fuse and breaker is rated for DC, at a voltage at least the highest system voltage
(for a 24 V LiFePO₄ system, at least 32 V DC). Breakers are wired with the polarity their label
shows.

*Why:* DC arcs do not stop by themselves the way AC arcs do. A part rated only for AC, or for a lower
DC voltage, may not break the arc. Some glass fuses have no DC rating at all.

## DIST-1.4 Interrupt rating

**must** - A fuse or breaker can safely break the largest current that could flow through it in a
short circuit, at the system voltage (its interrupt rating, also called breaking capacity or AIC).
Near a lithium battery, this is the battery's short-circuit current: see
[STO-2](/code/battery-fuse-and-isolator/).

*Why:* a fuse that cannot break the current may explode or keep arcing. Interrupt ratings fall as
voltage rises: the same MRBF terminal fuse is rated about 10 000 A at 14 V but about 2 000 A at
58 V. Check the rating **at your voltage**.

## DIST-1.5 Branch classes

**should** - Each branch circuit is one of three classes, labelled at the board.

| Class | Load | Fuse | Least wire | Use |
|---|---|---|---|---|
| Limited | up to 2.5 A | 3 A | 1.0 mm² (18 AWG) | Lights, chargers, small devices; light cable allowed |
| Standard | up to 5 A | 8 A | 1.5 mm² (16 AWG) | General outlets, fans, TV |
| Power | up to 7.5 A | 10 A | 1.5 mm² (16 AWG) | Fridge, tools |

*Why:* three classes keep fuses, wire and outlets matched without calculation on site. A limited
branch stays under 100 W even with its electronics failed (3 A × 29.2 V is under 100 VA), which
matches the "power-limited" idea in IEC 62368-1 (PS2) and the US NEC (Class 2). Longer runs need
thicker wire: [DIST-2.2](/code/wiring/#dist-22-voltage-drop).

## DIST-1.6 Electronic breakers behind a fuse

**should** - Where a branch has an electronic breaker (eFuse), it trips before the fuse, latches
off, and is reset by the user. The fuse behind it is sized to the wire and does not open in normal
use.

*Why:* electronic breakers act in microseconds and reset easily, so the fuse only opens when the
electronics have failed ([SYS-1.3](/code/safety-model/#sys-13-the-safeguard-that-counts-fails-safe)).
VeraSol (IEC TS 62257-9-8) asks for overload protection the user can reset.
