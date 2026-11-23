---
title: LOAD-1 Outputs and loads
description: Rules for 12 V and USB outputs, converters, appliances and inverters.
status: draft
sidebar:
  order: 40
sources:
  - title: Summary of IEC TS 62257-9-8 (VeraSol)
    url: https://verasol.org/wp-content/uploads/import/Summary-of-IEC-62257-9-8.pdf
    note: a 12 V port never exceeds 15 V; port overcurrent tests
  - title: IEC 62368-3, DC power transfer through ports (abstract)
    url: https://webstore.iec.ch/publication/26479
    note: USB PD ports at ES1 / PS2
  - title: Victron Wiring Unlimited, DC wiring
    url: https://victronenergy.com/media/pg/The_Wiring_Unlimited_book/en/dc-wiring.html
    note: each inverter its own fuse
---

## LOAD-1.1 Output voltage stays safe after a fault

**must** - A 12 V output never exceeds 15 V, even if its converter fails. A converter that can fail
by passing the full system voltage through has an over-voltage cut-off or a crowbar and fuse
after it.

*Why:* VeraSol caps a 12 V port at 15 V. A step-down converter whose switch fails short puts the
whole 24 V system on the 12 V outlet, which destroys 12 V devices and can start a fire in them.

## LOAD-1.2 USB outputs

**should** - USB outputs are USB-C Power Delivery chargers rated for the system voltage, each with
its own fuse ([DIST-1.1](/code/overcurrent-protection/#dist-11-one-fuse-per-wire)). A USB-C port
delivers at most 100 W.

*Why:* USB-C PD negotiates the voltage with the device, so one port charges phones and laptops
safely. 100 W is the limited-power level (PS2) in IEC 62368-1 and IEC 62368-3.

## LOAD-1.3 DC loads first

**should** - Loads that can run on DC are run on DC. Inverters are only for loads that need AC.

*Why:* an inverter loses energy all day just by being on. For a fridge, the idle loss can exceed
what the fridge uses ([the fridge problem](/plan/energy-and-load-budgets/#the-fridge-problem)).

## LOAD-1.4 Inverters

**must** - An inverter connects to the battery through its own fuse and cable from the battery or
main fuse block, never through a branch of the distribution board. It is an isolated type with an
idle (no-load) power stated by its maker. Its AC output never connects to building mains wiring
or to a generator unless an electrician installs a proper changeover.

*Why:* an inverter draws far more current than a branch is built for. A non-isolated inverter
connects the DC system to AC voltages ([DIST-4.5](/code/earthing-and-surge/#dist-45-ac-equipment-must-be-isolated)).
AC wiring is outside this code ([SYS-1.1](/code/safety-model/#sys-11-extra-low-voltage-only)).
