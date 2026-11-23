---
title: GEN-2 Charge controller
description: Rules for the MPPT charge controller - type, settings, temperature limits and its battery fuse.
status: draft
sidebar:
  order: 11
sources:
  - title: Victron SmartSolar MPPT 150/35 and 150/45 manual, Installation
    url: https://www.victronenergy.com/media/pg/Manual_SmartSolar_MPPT_150-35__150-45/en/installation.html
    note: battery-side fuse with a minimum and maximum per model
  - title: Victron Lithium Battery Smart manual, Appendix
    url: https://www.victronenergy.com/media/pg/Lithium_Battery_Smart/en/appendix.html
    note: LiFePO4 charge voltages and temperature limits
  - title: Summary of IEC TS 62257-9-8 (VeraSol)
    url: https://verasol.org/wp-content/uploads/import/Summary-of-IEC-62257-9-8.pdf
    note: IEC 62109 / UL 1741 charge controller above 240 W
---

The charge controller sits between the solar array and the battery. Background:
[The parts of a system](/plan/parts-of-a-system/#mppt-charge-controllers).

## GEN-2.1 MPPT above Size A

**should** - Systems larger than [Size A](/plan/system-sizes/#size-a-kit) use an MPPT
controller, not PWM.

*Why:* a PWM controller connects the panel straight to the battery and wastes the difference
between the panel's voltage (about 34-38 V at maximum power) and the battery's. With full-size
panels that is a large part of the output.

## GEN-2.2 Listed controller

**should** - Use a controller certified to IEC 62109-1 (or UL 1741).

*Why:* VeraSol asks for this above 240 W of panel; the controller is the part that stands between
the panel and everything else.

## GEN-2.3 Set for the battery

**must** - The controller is set for the battery's chemistry and voltage. Its charge voltage is
below the battery's own over-voltage cut-off, with margin.

*Why:* the controller's settings are the basic safeguard against overcharge; the battery's BMS is
the supplementary one ([STO-1](/code/battery-pack/)). If both are set to the same voltage, the BMS
trips every day.

## GEN-2.4 No charging in the cold

**must** - A lithium iron phosphate (LiFePO₄) battery is not charged below the temperature its
maker allows (Victron: 5 °C for its own batteries; many makers: 0 °C). The controller should read
the battery temperature; the battery's BMS must cut charging in the cold as the backstop.

*Why:* charging lithium cells below freezing plates metal lithium inside them, which permanently
damages the cells and can cause an internal short later.

## GEN-2.5 Fuse on the battery side

**must** - The cable from the controller to the battery has a fuse at the battery end, sized
within the range in the controller's manual and no larger than the cable allows
([DIST-1](/code/overcurrent-protection/)).

*Why:* the battery, not the panel, is what can drive a huge current into that cable.
