---
title: Glossary
description: Plain meanings of the words this wiki uses, from amps to watt-hours.
status: draft
sidebar:
  order: 2
sources:
  - title: Victron Energy, Wiring Unlimited, DC wiring
    url: https://victronenergy.com/media/pg/The_Wiring_Unlimited_book/en/dc-wiring.html
    note: current, voltage drop, cable cross-section, fuses
  - title: IEC TS 62257-6:2015, Acceptance, operation, maintenance and replacement (preview)
    url: https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iects62257-6%7Bed2.0%7Den.pdf
    note: commissioning and acceptance
  - title: Certio, SELV, PELV and FELV extra-low voltage explained (secondary)
    url: https://certio.uk/guides/selv-pelv-felv-extra-low-voltage-explained
    note: extra-low voltage and SELV
---

Short, plain meanings of the words used in this wiki. Each page also explains a term the first
time it uses it. Rule IDs in brackets point to the rule that uses the term most.

## Electricity basics

### Volt (V)
The electrical "pressure" that pushes current through a wire. A battery's voltage is printed on
it (12 V, 24 V). Measure it with a multimeter set to DC volts.

### Amp (A)
How much current flows. Current heats a wire, so thicker wires carry more amps. Measure it with a
clamp meter, or read it on the charge controller's display.

### Watt (W)
Power: how fast energy is used or made. Watts = volts × amps. A 24 V device that draws 2 A uses
48 W.

### Watt-hour (Wh) and kilowatt-hour (kWh)
Energy: power over time. A 10 W router running for 24 hours uses 10 W × 24 h = 240 Wh.
1 kWh = 1 000 Wh. Batteries and daily needs are counted in Wh or kWh
([Energy and load budgets](/plan/energy-and-load-budgets/)).

### Amp-hour (Ah)
A battery's capacity in amps over time. Multiply by the battery voltage to get watt-hours: a
24 V, 100 Ah battery stores about 24 × 100 = 2 400 Wh.

### DC and AC
DC (direct current) flows one way, from + to −: batteries, solar panels and USB are DC. AC
(alternating current) changes direction many times a second: mains power from the grid is AC.
This wiki is about DC systems.

### Ohm (Ω) and resistance
How much a wire or part resists current. A longer or thinner wire has more resistance, so it
loses more voltage and makes more heat.

### Voltage drop
The voltage lost along a wire because of its resistance. Too much drop makes devices misbehave and
wastes power as heat ([DIST-2.2](/code/wiring/#dist-22-voltage-drop)).

### Short circuit
A fault where + and − touch with almost no resistance between them. The current becomes very high
in a fraction of a second. A fuse is there to stop it.

## The parts of a system

### Solar panel (PV module)
Turns sunlight into DC electricity. "PV" means photovoltaic. Several panels together are an
array ([Solar array](/code/solar-array/)).

### Voc and Vmp
Two voltages on a panel's label. **Voc** (open-circuit voltage) is the highest the panel makes,
with nothing connected; it rises in cold weather. **Vmp** is the voltage where the panel makes the
most power ([GEN-1.1](/code/solar-array/#gen-11-panel-voltage-in-the-cold)).

### Charge controller
Sits between the panels and the battery and charges the battery safely. It stops charging when
the battery is full ([Charge controller](/code/charge-controller/)).

### MPPT
Maximum power point tracking: a type of charge controller that keeps adjusting to get the most
power from the panels. It is the better choice above the smallest kits
([GEN-2.1](/code/charge-controller/#gen-21-mppt-above-size-a)).

### Battery
Stores energy for the night and cloudy days. This code uses lithium iron phosphate batteries
([STO-1.1](/code/battery-pack/#sto-11-lithium-iron-phosphate)).

### LFP (lithium iron phosphate, LiFePO4)
A lithium battery chemistry that is safer and longer-lived than most other lithium types. A
"24 V" LFP battery has 8 cells in series and charges up to about 29.2 V.

### Cell
The smallest unit inside a battery. Cells in series add their voltages; cells in parallel add
their capacity.

### Series and parallel
**Series:** + of one to − of the next; voltages add, current stays the same. **Parallel:** + to +
and − to −; currents add, voltage stays the same. This code connects panels in parallel
([GEN-1.5](/code/solar-array/#gen-15-panels-in-parallel)) and prefers one battery to batteries in
series ([STO-1.2](/code/battery-pack/#sto-12-one-native-pack-at-the-system-voltage)).

### BMS
Battery management system: the electronics inside a lithium battery that watch each cell and
switch the battery off if it gets too full, too empty, too hot or too cold
([STO-1.4](/code/battery-pack/#sto-14-what-the-bms-must-do)).

### State of charge (SoC)
How full the battery is, in percent. 100 % is full, 0 % is empty.

### Inverter
Turns the battery's DC into AC, so mains-type appliances can run. It uses power even when nothing
is plugged in (its idle draw), so use DC loads first
([LOAD-1.3](/code/outputs-and-loads/#load-13-dc-loads-first)).

### DC-DC converter
Changes one DC voltage into another, for example 24 V to 12 V for a device that only accepts
12 V. A USB-C charger is a kind of DC-DC converter.

### Distribution board
The box where the main battery cable splits into branch circuits, each with its own fuse.

### Branch circuit
One cable run from the distribution board to one or more outlets or loads, protected by its own
fuse ([DIST-1.5](/code/overcurrent-protection/#dist-15-branch-classes)).

### Load
Any device that uses power: a light, a fridge, a phone charger.

## Protection

### Fuse
A thin metal link that melts and opens the circuit when too much current flows. It protects the
wire, not the device ([SYS-1.4](/code/safety-model/#sys-14-protect-the-wire-not-the-device)).
Replace a blown fuse only with the same rating.

### Circuit breaker
A switch that opens by itself when too much current flows, and can be reset. It must be rated
for DC at the system voltage ([DIST-1.3](/code/overcurrent-protection/#dist-13-rated-for-dc-at-the-system-voltage)).

### Interrupt rating
The largest short-circuit current a fuse or breaker can safely stop. Also called breaking
capacity or AIC. A lithium battery can push thousands of amps, so the main fuse needs a high
interrupt rating ([STO-2.2](/code/battery-fuse-and-isolator/#sto-22-interrupt-rating-above-the-batterys-short-circuit-current)).

### Isolator
A big switch on the battery cable that disconnects the battery from everything else, for work or
in an emergency ([STO-2.5](/code/battery-fuse-and-isolator/#sto-25-battery-isolator)).

### PV disconnect
A switch that disconnects the solar panels from the charge controller
([GEN-1.3](/code/solar-array/#gen-13-pv-disconnect)).

### Safeguard
Something that stops a fault from hurting a person or starting a fire, such as insulation, an
enclosure or a fuse. The code asks for two safeguards for every hazard
([SYS-1.2](/code/safety-model/#sys-12-two-safeguards-for-every-hazard)).

### Extra-low voltage (ELV) and SELV
Voltages low enough that a dry, intact circuit is safe to touch: up to 60 V DC in dry places, less
when wet. SELV (safety extra-low voltage) is an extra-low-voltage circuit kept separate from
mains and from earth ([SYS-1.1](/code/safety-model/#sys-11-extra-low-voltage-only)).

### Earthing
Connecting metal parts to a rod in the ground, so a fault or lightning surge has a safe path
([Earthing and surge](/code/earthing-and-surge/)).

### Surge protection device (SPD)
A part that shunts a sudden high voltage, for example from nearby lightning, away from the
equipment ([GEN-1.6](/code/solar-array/#gen-16-frames-and-surge-protection)).

## Wiring

### Cross-section (mm²)
The size of a wire's copper, in square millimetres. Bigger numbers carry more current. Some
countries use AWG instead; a bigger AWG number is a thinner wire.

### Stranded cable
Cable made of many thin copper strands. It bends without breaking and is required by the code
([DIST-2.3](/code/wiring/#dist-23-stranded-copper-cable)).

### Crimp and lug
A crimp is a metal sleeve squeezed onto a wire end with a crimping tool. A lug is a crimp with a
hole for a bolt or stud ([DIST-2.5](/code/wiring/#dist-25-crimped-not-twisted)).

### Ferrule
A thin metal tube crimped over the end of a stranded wire before it goes into a screw terminal,
so the strands do not spread or break.

### Torque
How tight a bolt or terminal screw is, measured in newton-metres (N·m). The maker's manual gives
the value ([DIST-2.6](/code/wiring/#dist-26-studs-torque-and-support)).

## Planning and installing

### Picogrid
A very small, self-contained power system for one home or building, storing about 5 kWh or less.
This wiki is for picogrids.

### System size (A-D)
The wiki's four planning sizes, from a lights-and-phones kit to a community system
([System sizes](/plan/system-sizes/)).

### Sun hours (peak sun hours)
The hours of full, strong sun a panel gets in a day, added up. Used to estimate how much energy a
panel makes ([System estimator](/plan/system-estimator/)).

### Days without sun
How many days the battery must run the loads with no sun to charge it (also called days of
autonomy).

### Commissioning
The checks done on a new or changed system before the user starts using it
([Commissioning](/install/commissioning/)).

### Listed (certified)
Tested and certified by a recognised test lab to a product standard, with a mark on the label
([GEN-1.2](/code/solar-array/#gen-12-listed-panels)).
