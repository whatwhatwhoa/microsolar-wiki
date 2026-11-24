---
title: Energy and load budgets
description: The units that matter (Wh, Ah, C-rate) and how to add up what your devices use each day.
status: draft
sidebar:
  order: 2
sources: []
---

Before choosing parts, you need a feel for how energy budgeting works. Solar is unforgiving: if
you undersize one part, the whole system feels weak. If you oversize randomly, you waste money.

## The units that matter

**Watt-hours (Wh)**
Total energy over time. This is what batteries store and what loads consume. A laptop that uses
40 W for 5 hours consumes about 200 Wh.

**Amps (A) and amp-hours (Ah)**
A rough way to understand current draw and battery size. At 24 V, a 100 Ah battery stores about
2.4 kWh (24 V × 100 Ah).

**C-rate**
How quickly you can safely charge or discharge a battery relative to its size. Most LiFePO₄
batteries prefer a steady, low C-rate instead of big surges.

**Baseline loads and peak loads**
Baseline is what runs for hours every day. Peak is the short bursts (pumps, motors). Baseline
sets the battery size. Peak sets the wiring and distribution.

## Build a load budget

Your loads are your "expenses". You can't cheat the math: the battery does exactly what the
numbers say, not what you hope. Write down what you actually use, not what you might use.

1. List each device.
2. Write its wattage.
3. Estimate hours per day.
4. Multiply (W × hours).
5. Add everything up.

That total, in Wh per day, drives everything else. If a system feels underpowered, it usually
means someone skipped steps 1-4.

The [System estimator](/plan/system-estimator/) does these steps for you, with typical values for
common devices.

## Slot-based budgeting

For non-technical users, dividing power into "slots" helps. For example, one slot = 10 W of
steady load. A panel or battery gives you a number of slots in total; a system might allow 30-50
slots depending on its size. It is an easy way to explain limits without talking volts and amps.

## DC and AC loads

If a device can run on DC at all, keep it DC. It avoids inverter overhead and keeps power draw
predictable. AC is for the things you cannot avoid: fridges, microwaves, and anything with a
compressor or heating element.

## The fridge problem

A full-size AC fridge only draws about 80-100 W while the compressor runs, but the inverter must
stay on all day to wait for the compressor. That 25-50 W idle loss adds up to about 1 kWh per
day, which is more than the fridge itself uses. This is why small systems struggle once
refrigeration comes in.
