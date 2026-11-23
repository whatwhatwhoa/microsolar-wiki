---
title: Commissioning
description: The checks before a new or changed system is handed over, and the record to leave behind.
status: draft
sidebar:
  order: 10
sources:
  - title: IEC TS 62257-6:2015, Acceptance, operation, maintenance and replacement (preview)
    url: https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iects62257-6%7Bed2.0%7Den.pdf
    note: acceptance before handover; test values are not in the preview
  - title: Victron Wiring Unlimited, DC wiring
    url: https://victronenergy.com/media/pg/The_Wiring_Unlimited_book/en/dc-wiring.html
    note: tug-test crimps, torque, check current balance
---

Commissioning is the test of a new or changed system before the household starts using it. Do it
with the battery isolator open, then step by step with power on.

## Before power

1. **Compare with the diagram.** Every fuse and cable matches the
   [wiring diagram](/code/labels-and-documents/#sys-21-wiring-diagram).
2. **Fuse ratings.** Each fuse is no bigger than its wire allows
   ([DIST-2.1](/code/wiring/#dist-21-wire-size-from-the-fuse)).
3. **Terminations.** Pull-test every crimp by hand; check torque on battery and fuse studs
   ([DIST-2.6](/code/wiring/#dist-26-studs-torque-and-support)).
4. **Polarity.** Every red wire goes to +, every black to −. Check twice at the battery.
5. **PV voltage.** Measure the panel's open-circuit voltage at the PV disconnect and compare it
   with the label ([GEN-1.1](/code/solar-array/#gen-11-panel-voltage-in-the-cold)).

## With power

1. Close the battery isolator. The controller and the board start without warnings.
2. Close the PV disconnect. The controller shows charging in daylight.
3. **At every outlet:** measure the voltage and the polarity.
4. **Branch trip test** (fixed wiring): a short at the far end of each branch trips it, and the
   user can reset it.
5. **Under load:** run the usual loads for 30 minutes and feel every connection for heat.

## Hand over

- The user guide is explained in person ([SYS-2.3](/code/labels-and-documents/#sys-23-user-guide)).
- The results of these checks are written down and kept with the wiring diagram, with the date
  and the installer's name.
