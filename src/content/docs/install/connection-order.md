---
title: Connection order
description: Which part to connect first and last - battery first, panels last - and why the order matters.
status: draft
sidebar:
  order: 1
sources:
  - title: Victron SmartSolar MPPT 150/35 and 150/45 manual, Installation
    url: https://www.victronenergy.com/media/pg/Manual_SmartSolar_MPPT_150-35__150-45/en/installation.html
    note: connect the battery, wait 10 s, then PV; the reason (system voltage detection); torque 1.6 Nm
  - title: Victron SmartSolar MPPT 150/35 and 150/45 manual, Troubleshooting
    url: https://www.victronenergy.com/media/pg/Manual_SmartSolar_MPPT_150-35__150-45/en/troubleshooting.html
    note: no protection against a reversed battery; system voltage is detected only once
  - title: Victron SmartSolar MPPT 75/10 up to 100/20 manual, Installation
    url: https://www.victronenergy.com/media/pg/Manual_SmartSolar_MPPT_75-10_up_to_100-20/en/installation.html
    note: battery, then loads, then PV; torque 0.75 Nm
  - title: EPEver Tracer-AN G3 user manual V2.2
    url: https://www.epever.com/wp-content/uploads/2024/08/Tracer-AN-G3-Manual-EN-V2.2.pdf
    note: section 2.4 - order battery, load, PV; reverse to disconnect; fuses out while wiring; inverter straight to the battery
  - title: Renogy Rover Li 20/30/40 A user manual, rev B3
    url: https://au.renogy.com/cdn/shop/files/RNG-CTRL-RVR20_30_40_Rover_Li_Series__UM_B3.pdf
    note: battery before panel, or reverse polarity protection does not apply; uncover panels after connecting
  - title: Victron Inverter VE.Direct 230 V manual, Installation
    url: https://www.victronenergy.com/media/pg/Inverter_VE.Direct_230V_-_HW15/en/installation.html
    note: keep the inverter switched off while connecting; reversed battery cables damage it
  - title: Victron Lithium Battery Smart manual, Installation
    url: https://www.victronenergy.com/media/pg/Lithium_Battery_Smart/en/installation.html
    note: battery stud torque 10-20 Nm by model
---

This page is for the installer connecting a new system, or reconnecting one after work on it. The
rule is short: **battery first, solar panels last. To disconnect, do it the other way round.**
Your charge controller's manual has the final word. The three makers checked here
(Victron, EPEver, Renogy) all use this order.

:::danger
- A battery can push hundreds of amps into a short. Take off rings and watches. Use insulated
  tools. Never let a spanner touch + and − at the same time.
- Solar panels make power whenever there is light. Keep the PV disconnect open, or cover the
  panels or lay them face down, until the last step.
:::

## What you need

- The charge controller's manual (and the inverter's, if there is one).
- A multimeter on DC volts.
- Insulated screwdrivers and spanners, and a torque screwdriver or wrench.
- The [wiring diagram](/code/labels-and-documents/#sys-21-wiring-diagram).

## Steps to connect

1. **Everything open.** The battery isolator is open
   ([STO-2.5](/code/battery-fuse-and-isolator/#sto-25-battery-isolator)), the PV disconnect is open
   ([GEN-1.3](/code/solar-array/#gen-13-pv-disconnect)), the branch fuses or breakers are out, and
   the inverter is switched off.
2. **Battery cables.** Connect the main fuse and the isolator to the battery. Tighten the battery
   studs to the battery maker's torque.
3. **Controller to battery.** Connect the controller's battery cable at both ends, with its fuse
   at the battery end ([GEN-2.5](/code/charge-controller/#gen-25-fuse-on-the-battery-side)).
4. **Check polarity before you close anything.** Follow each cable from end to end: red from a +
   terminal to a + terminal, black from − to −. Then measure the battery itself, red probe on the
   terminal marked +: the meter must show a **positive** voltage. A reversed battery cable is the
   one mistake most controllers do not survive.
5. **Close the battery isolator** ([STO-2.6](/code/battery-fuse-and-isolator/#sto-26-connect-with-the-isolator-open)).
   Wait about 10 seconds. The controller starts and shows the battery voltage: 12 V or 24 V.
6. **Inverter**, if there is one: it connects to the battery side (the busbar or the board), never
   to the controller's load output. Switch it on only after it is fully connected.
7. **Loads.** Put in the branch fuses or close the branch breakers, one branch at a time.
8. **Panels last.** At the PV disconnect, measure the panel voltage and polarity (red on +). The
   reading should be close to the open-circuit voltage (Voc) on the panel label. Then close the
   PV disconnect and uncover the panels. In daylight the controller shows charging.

Then do the [commissioning checks](/install/commissioning/).

## Steps to disconnect

Work in the reverse order:

1. Open the **PV disconnect** (or cover the panels).
2. Switch off the inverter and take out the **branch fuses**.
3. Open the **battery isolator**.
4. Now you can work on the controller. Before you touch the battery cables themselves, take out
   the main fuse as well.

## Why this order

- **The controller sets itself from the battery.** Many controllers measure the battery when they
  first start, to choose between 12 V and 24 V. With the panels connected first, they can guess
  wrong, or be damaged. Victron detects the voltage only once: a controller moved later from a
  24 V system to a 12 V battery keeps charging at 24 V settings and overcharges it.
- **Most controllers are not protected against a reversed battery.** Victron and the larger
  EPEver controllers are damaged or blow an internal fuse. Renogy's protection works only if the
  battery is connected first. A reversed panel does less harm: most controllers just do not
  charge.
- **The isolator takes the spark.** Controllers and inverters hold capacitors that charge with a
  large spark when a battery is connected straight to them. Closing the isolator puts that spark
  in a switch built for it, not on your cable lug.

## What the manuals say

| | Victron SmartSolar | EPEver Tracer-AN | Renogy Rover Li |
|---|---|---|---|
| Connect | battery, wait 10 s, (loads), PV | battery, load, PV | battery, then panel |
| Disconnect | PV, then battery | reverse order | battery reconnects first |
| Battery reversed | not protected | damaged unless PV is off; larger models not protected | protected only if battery first |
| Terminal torque | 0.75 N·m (small) to 1.6 N·m | at least 1.2 N·m | 1.2 N·m, do not overtighten |

Battery studs need much more: 10 N·m on an M8 stud, 20 N·m on M10 (Victron lithium batteries).
Always use the value in your own part's manual
([DIST-2.6](/code/wiring/#dist-26-studs-torque-and-support)).

## When to get help

Stop and ask an experienced installer if the controller shows the wrong battery voltage, shows an
error at start, or a fuse blows when you close the isolator. Do not try again until you have
found the cause: a reversed cable is the usual one.
