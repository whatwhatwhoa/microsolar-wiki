---
title: STO-2 Battery fuse and isolator
description: The main fuse at the battery - distance, interrupt rating, fuse types - and the battery isolator switch.
status: draft
sidebar:
  order: 21
sources:
  - title: ABYC E-11 AC and DC Electrical Systems on Boats (2003)
    url: https://law.resource.org/pub/us/cfr/ibr/inc/ansi/abyc.e-11.2003.pdf
    note: 11.12.1.2 fuse within 7 in (175 mm), 72 in if sheathed; 11.7.1.2 battery switch in the positive
  - title: ISO 10133:2012, Small craft - extra-low-voltage DC installations (preview)
    url: https://cdn.standards.iteh.ai/samples/45867/0dceabde692c42a2abe7f580f3b099ff/ISO-10133-2012.pdf
    note: 8.1 within 200 mm, 1.8 m if sheathed; 6.1 disconnect reachable without tools
  - title: Victron Energy, Wiring Unlimited
    url: https://www.victronenergy.com.au/upload/documents/Wiring-Unlimited.pdf
    note: interrupt rating at least the bank's short-circuit current (mandatory for lithium); isolate the positive; fuse interrupt ratings by type
  - title: MarineHowTo, Battery banks and over-current protection
    url: https://marinehowto.com/?p=17412
    note: MRBF 10 kA at 14 V; Class T 20 kA (secondary)
  - title: IEC TS 62257-5:2015, Protection against electrical hazards (preview)
    url: https://cdn.standards.iteh.ai/samples/22162/1a6bbaebbff34b5c8f43cac430648284/IEC-TS-62257-5-2015.pdf
    note: breaking capacity at least the prospective short-circuit current
---

A lithium battery can push thousands of amps into a short circuit: enough to melt a spanner. The
main fuse is the one part that stops that.

## STO-2.1 Main fuse at the battery

**must** - A fuse sits in the positive cable within 200 mm of the battery's positive terminal
(measured along the cable). If that short piece of cable is impossible, the cable up to the fuse
is fully sheathed or in conduit, and at most 1.8 m long.

*Why:* everything between the battery and its fuse is unprotected. ISO 10133 (200 mm) and ABYC
E-11 (7 in, 175 mm) agree. The US RV standard allows 18 in (457 mm); this code follows the marine
rule.

## STO-2.2 Interrupt rating above the battery's short-circuit current

**must** - The main fuse's DC interrupt rating, **at the system voltage**, is at least the
battery's short-circuit current. Use the figure the battery maker declares. If the maker does not
declare one, use a fuse rated at least 20 000 A DC (Class T).

*Why:* Victron calls this "a mandatory safety requirement" for every lithium installation. A fuse
that cannot break the current can explode or keep arcing. Estimates for a 24 V LiFePO₄ pack: about
5 000 A from a 100 Ah pack, about 14 000 A from a 200 Ah pack. Only the maker's figure replaces a
Class T.

## STO-2.3 Which fuse type

**must** - Choose the main fuse from this table, checking the rating at your system voltage.

| Fuse type | Interrupt rating | As main fuse on a lithium battery |
|---|---|---|
| Class T | 20 000 A or more at 125-160 V DC | Yes: the default |
| MRBF (terminal fuse) | about 10 000 A at 14 V, 5 000 A at 32 V, 2 000 A at 58 V | Only at 12 V, or at 24 V if the battery's declared short-circuit current is under 5 000 A |
| ANL | about 6 000 A at 32 V (good brands); unrated copies far less | No: a branch fuse behind a Class T |
| MEGA, MIDI | about 1 000-2 500 A | No: a branch fuse behind a Class T |
| Blade (ATO) | not given | No: small branches only |

*Why:* these ratings are from Victron and MarineHowTo. A fuse sold as "Class T" without a printed
interrupt rating is not proof of one: buy from a known maker.

## STO-2.4 Size the main fuse to its cable

**must** - The main fuse rating is no higher than the battery cable can carry
([DIST-1.2](/code/overcurrent-protection/#dist-12-fuse-no-bigger-than-the-wire)) and no higher
than the battery's own maximum continuous discharge current.

*Why:* the main fuse protects the main cable. The battery's own rating is a second limit: the
lower one wins (Victron).

## STO-2.5 Battery isolator

**must** - A manual DC switch in the positive cable, after the main fuse, disconnects the battery.
It is rated for DC at the system voltage and for the full load current, and can be reached quickly
without tools. An electronic switch (BMS, relay board) does not count as an isolator.

*Why:* nobody can work safely on a system that cannot be switched off. Many switches cannot break
DC current under load: check the DC rating. Victron isolates the positive only; ISO 10133 asks for
a disconnect reachable "without the use of tools".

## STO-2.6 Connect with the isolator open

**should** - When connecting a battery, open the isolator first, connect the cables, then close
the isolator.

*Why:* the capacitors in a charge controller or inverter draw a large spark when a battery is
connected straight to them. That spark pits terminals and can damage the electronics.
