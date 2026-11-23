---
title: STO-1 Battery and BMS
description: What battery to buy - chemistry, listings, what its battery management system must do, and the maker's short-circuit figure.
status: draft
sidebar:
  order: 20
sources:
  - title: IEC 62619:2022 Ed 2, Secondary lithium cells and batteries for industrial applications (preview)
    url: https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec62619%7Bed2.0%7Db.pdf
    note: scope includes stationary energy storage
  - title: IEC 62619:2022, clauses 5.1-5.9 (sample)
    url: https://cdn.standards.iteh.ai/samples/102658/51f6834cb0d54da78c6bafbd8435b4f2/IEC-62619-2022.pdf
    note: independent control and protection; per-cell voltage control; system lock
  - title: IEC 63056:2020, Lithium batteries in electrical energy storage systems (preview)
    url: https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec63056%7Bed1.0%7Db.pdf
    note: home and off-grid storage; builds on IEC 62619
  - title: PHMSA, Lithium Battery Test Summary (UN 38.3)
    url: https://www.phmsa.dot.gov/sites/phmsa.dot.gov/files/2024-09/Lithium-Battery-Test-Summary-2024.pdf
    note: transport tests and the test summary (secondary)
  - title: Victron Lithium Battery Smart manual, Appendix
    url: https://www.victronenergy.com/media/pg/Lithium_Battery_Smart/en/appendix.html
    note: LiFePO4 voltages and charging temperature
---

The battery is the most dangerous part of the system: it stores all the energy, all the time.
Background: [Sizing panels and batteries](/plan/sizing-panels-and-batteries/#battery-the-savings-account).

## STO-1.1 Lithium iron phosphate

**should** - Use a lithium iron phosphate (LiFePO₄, LFP) battery. Other chemistries need a reason
written in the system documents.

*Why:* LFP has a long cycle life and is much harder to push into thermal runaway than other lithium
types. It is not risk-free: see [STO-3](/code/battery-placement/).

## STO-1.2 One native pack at the system voltage

**should** - Use one battery built for the system voltage (for example a 24 V pack), not smaller
batteries joined in series.

*Why:* batteries in series drift apart, and the weakest one decides the life of all of them. See
[Choose a system voltage](/plan/choose-a-system-voltage/#one-native-pack-or-two-in-series).

## STO-1.3 Listed for stationary use

**must** - The battery is certified to **IEC 62619** (lithium batteries for industrial and stationary
use; IEC 63056 adds rules for energy storage) or to **UL 1973**, and has a **UN 38.3** test summary.
A battery certified only to IEC 62133-2 is not enough.

*Why:* IEC 62619 tests the battery and its protection as a stationary system. IEC 62133-2 covers
portable batteries such as phone and laptop packs. UN 38.3 proves the battery passed shipping tests
(short circuit, overcharge, crush and more), which also screens out the worst packs.

## STO-1.4 What the BMS must do

**must** - The battery has a battery management system (BMS) that, on its own:

- Keeps **every cell** below its maximum voltage (stops charging) and above its minimum voltage
  (stops discharging).
- Stops charging and discharging above the cell maker's current limits.
- Stops **charging below the cell maker's minimum temperature** (for LFP usually 0 °C; Victron 5 °C)
  and stops charging and discharging when too hot.
- Disconnects on a short circuit.

*Why:* these are the supplementary safeguards behind the charge controller's settings
([GEN-2.3](/code/charge-controller/#gen-23-set-for-the-battery)). IEC 62619 asks for independent
control and protection that keeps each cell inside its limits.

## STO-1.5 Declared short-circuit current

**should** - Choose a battery whose maker declares its short-circuit current. Record it on the
wiring diagram.

*Why:* the main fuse must break that current ([STO-2.2](/code/battery-fuse-and-isolator/#sto-22-interrupt-rating-above-the-batterys-short-circuit-current)).
Without the maker's figure, only a Class T fuse is safe.

## STO-1.6 A damaged battery leaves service

**must** - A battery that is swollen, dented, leaking, has been in a fire or flood, or whose BMS has
locked itself off for a fault, is taken out of service and not reset by the user.

*Why:* IEC 62619 requires a "system lock" that stops a battery when any cell leaves its safe range,
and does not let the user reset it. A damaged cell can fail days or weeks later.
