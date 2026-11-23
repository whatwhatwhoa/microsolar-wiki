---
title: DIST-2 Wiring
description: Wire size from the fuse, voltage drop by length, cable type, colours, crimping and terminations.
status: draft
sidebar:
  order: 31
sources:
  - title: ABYC E-11 AC and DC Electrical Systems on Boats (2003)
    url: https://law.resource.org/pub/us/cfr/ibr/inc/ansi/abyc.e-11.2003.pdf
    note: Table IV ampacity; 3 % / 10 % voltage drop; crimping, no solder-only joints, 4 per stud, support every 455 mm
  - title: ISO 10133:2012, Small craft - extra-low-voltage DC installations (preview)
    url: https://cdn.standards.iteh.ai/samples/45867/0dceabde692c42a2abe7f580f3b099ff/ISO-10133-2012.pdf
    note: stranded copper; colours 7.9-7.11; support every 450 mm
  - title: Victron Wiring Unlimited, DC wiring
    url: https://victronenergy.com/media/pg/The_Wiring_Unlimited_book/en/dc-wiring.html
    note: fine-strand cable, ferrules, crimp tool and tug test, torque, cable table
  - title: IEC 60445:2021 preview, clause 6.2.4
    url: https://cdn.standards.iteh.ai/samples/104151/245002a9257645fdbc639f87ad465f14/IEC-60445-2021.pdf
    note: DC colours red / white (this code departs from it; see DIST-2.4)
  - title: IEC TS 62257-9-4:2016, User installation (preview)
    url: https://cdn.standards.iteh.ai/samples/22172/b7ef20fc7ea64326b7b39e9c276976bf/IEC-TS-62257-9-4-2016.pdf
    note: voltage drop and conductor sizes for 12/24 V installations up to 500 VA
---

## DIST-2.1 Wire size from the fuse

**must** - Each wire is at least the size the table gives for the fuse that protects it. The fuse
decides the smallest wire; the length may make it bigger ([DIST-2.2](#dist-22-voltage-drop)).

| Fuse up to | Least wire (metric) | Least wire (AWG) |
|---|---|---|
| 7 A | 1.0 mm² | 18 AWG |
| 10 A | 1.5 mm² | 16 AWG |
| 15 A | 2.5 mm² | 14 AWG |
| 20 A | 4 mm² | 12 AWG |
| 30 A | 6 mm² | 10 AWG |

*Why:* the AWG column is the US small-conductor rule (NEC 240.4(D)), which is stricter than the
marine free-air tables. Each metric size is the next standard size up from the AWG size, so it is
never thinner. Wire inside thermal insulation, bundled with other wires or in hot places carries
less: go one size up.

## DIST-2.2 Voltage drop

**must** - Voltage drop from the battery to a load is at most 3 % for the main feeds and for
anything that stops working when the voltage sags (electronics, chargers, fridges); at most 10 %
for simple loads (lights, fans).

Longest one-way cable run for 3 % drop at 24 V (0.72 V), copper, both conductors counted:

| Load current | 1.0 mm² | 1.5 mm² | 2.5 mm² | 4 mm² | 6 mm² |
|---|---|---|---|---|---|
| 1 A | 20 m | 30 m | 51 m | 82 m | 123 m |
| 2.5 A | 8.2 m | 12 m | 20 m | 32 m | 49 m |
| 5 A | - | 6.1 m | 10 m | 16 m | 24 m |
| 7.5 A | - | 4.1 m | 6.9 m | 11 m | 16 m |

At 12 V the lengths are half; at 10 % drop they are 3.3 times longer.

*Why:* low voltage makes the same wire lose a bigger share of the power. ABYC uses 3 % and 10 %;
Victron aims for 2.5 %. The table is resistance arithmetic (copper at 20 °C, 0.0175 Ω·mm²/m, out
and back); "-" means the wire is too small for that current under [DIST-2.1](#dist-21-wire-size-from-the-fuse).

## DIST-2.3 Stranded copper cable

**must** - Use insulated, stranded copper cable rated at least 90 °C (105 °C in hot places).
Flexible fine-strand cable for battery and flexible runs; tinned copper in damp or coastal
places. Never solid-core wire for DC power runs, and never aluminium.

*Why:* solid wire cracks where it moves and loosens in terminals; tinned strands resist corrosion
by sea air and humidity (ABYC, ISO 10133, Victron).

## DIST-2.4 Colours and marks

**must** - Positive is **red**, negative is **black**, earth and bonding conductors are
**green-yellow**. Mark "+" and "-" at both ends of every battery-side cable. Never use green or
green-yellow for a current-carrying conductor.

*Why:* red and black are the battery and solar cable colours stocked almost everywhere, and match
ABYC, ISO 10133 and common practice. **This departs from IEC 60445:2021**, which specifies red for
positive and white for negative: white battery cable is rarely available, and white is a neutral
colour in some AC systems. Where AC wiring with black live conductors is in the same box, mark
the DC negative with tape or sleeving, or use yellow as ISO 10133 does.

## DIST-2.5 Crimped, not twisted

**must** - Terminate wires with crimped ring terminals or lugs made with the right crimp tool, and
pull-test every crimp by hand. Put crimped ferrules on stranded wire in screw terminals. No
twist-on wire nuts, no solder as the only joint, no wire wrapped around a screw.

*Why:* loose joints are the most common cause of fire in low-voltage systems: a poor contact heats
up at full current. Solder wicks into the strands and makes them break next to the joint.

## DIST-2.6 Studs, torque and support

**must** - At most four ring terminals on one stud, the ring the same size as the stud. Tighten to
the maker's torque with a torque tool. Support cables at least every 450 mm and relieve strain at
every terminal; protect them where they pass edges or walls.

*Why:* ABYC and ISO 10133 set the stud and support limits; Victron requires a torque wrench.
Over-tightened studs crack, loose ones heat up.
