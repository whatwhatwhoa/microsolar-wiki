---
title: DIST-5 Enclosures
description: Fire enclosures, covered terminals, protection against water and dust, and heat.
status: draft
sidebar:
  order: 34
sources:
  - title: IEC 62368-1 classes and safeguards (UL tech brief)
    url: https://japan.ul.com/wp-content/uploads/sites/27/2014/06/1_techbrief_classandele_measurement.pdf
    note: PS3 (over 100 W) needs a fire enclosure (secondary summary)
  - title: Summary of IEC TS 62257-9-8 (VeraSol)
    url: https://verasol.org/wp-content/uploads/import/Summary-of-IEC-62257-9-8.pdf
    note: no live part reachable; IP levels; battery terminal insulation
  - title: ABYC E-11 AC and DC Electrical Systems on Boats (2003)
    url: https://law.resource.org/pub/us/cfr/ibr/inc/ansi/abyc.e-11.2003.pdf
    note: battery positive terminals covered (11.5.2.7.5)
---

## DIST-5.1 Fire enclosure

**must** - The distribution board, charge controller and any part fed by more than 100 W sit in a
fire enclosure: metal, or plastic rated UL 94 V-0, with no openings in the bottom (or baffled
openings).

*Why:* IEC 62368-1 calls a source that can deliver more than 100 W a PS3 source, able to start a
fire, and asks for a fire enclosure around it. A battery can always deliver far more than 100 W.

## DIST-5.2 No reachable live parts

**must** - Once installed, no live terminal or bare conductor can be touched: covers on terminal
strips, boots on battery and fuse terminals. Indoors at least IP2X (a finger cannot enter); outdoor
parts at least IP54, or as their location needs.

*Why:* even at safe voltages, a dropped spanner across bare terminals makes a short circuit with
thousands of amps. VeraSol tests that no live part is reachable.

## DIST-5.3 Heat

**must** - Enclosures leave the airflow the controller and converters need, as their manuals give.
Wire insulation inside an enclosure is rated at least 105 °C.

*Why:* an MPPT controller at full current gives off tens of watts of heat. Trapped heat shortens
its life and can trip it in the middle of the day.
