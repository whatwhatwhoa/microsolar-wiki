---
title: Tools and materials
description: The tools an installer needs for a small DC system, what each one is for, and cheaper options that still do the job.
status: draft
sidebar:
  order: 0
sources:
  - title: Victron Energy, Wiring Unlimited (rev 04, PDF)
    url: https://www.victronenergy.com.au/upload/documents/Wiring-Unlimited.pdf
    note: crimp with the right tool and tug-test; ferrules in screw terminals; torque wrench always; crimp terminal colours by wire size
  - title: Victron Wiring Unlimited, DC wiring
    url: https://victronenergy.com/media/pg/The_Wiring_Unlimited_book/en/dc-wiring.html
    note: fine-strand cable, ferrules, crimp tool and tug test
  - title: ABYC E-11 AC and DC Electrical Systems on Boats (2003)
    url: https://law.resource.org/pub/us/cfr/ibr/inc/ansi/abyc.e-11.2003.pdf
    note: crimps made with the tool designed for the connector; solder not the only connection
---

A small DC system needs only a few tools, but the right ones. Most bad joints come from the wrong
crimp tool or from guessing how tight a bolt should be. This page lists what to have before you
start.

:::danger
Use insulated tools near the battery. A spanner that touches + and − at the same time makes a short
circuit of thousands of amps: it can weld itself on, burn your hand and blow the battery's fuse.
Take off rings and watches.
:::

## Must have

| Tool | What it is for | Notes |
|---|---|---|
| **Digital multimeter** | DC volts, continuity, polarity | Any cheap one works for volts and polarity. Learn the [three measurements](/maintain/troubleshooting/#three-measurements). |
| **Ratchet crimp tool for insulated terminals** | Ring, fork and butt terminals on 0.5-6 mm² wire | The ratchet does not open until the crimp is complete. Pliers are not a crimp tool. |
| **Ferrule crimp tool** | Ferrules on wire ends that go into screw terminals | Square or hexagonal jaws. Ferrules stop fine strands from spreading and breaking. |
| **Wire stripper** | Removes insulation without cutting strands | Adjustable or automatic. A knife nicks the copper. |
| **Cable cutter** | Clean, square cuts | A large one for battery cable. |
| **Torque screwdriver or torque wrench** | Terminal screws and battery studs | Use the value in the part's manual ([DIST-2.6](/code/wiring/#dist-26-studs-torque-and-support)). Guessing is how studs crack or joints work loose. |
| **Insulated screwdrivers and spanners** | Work near the battery | Tools rated 1000 V (VDE or IEC 60900 mark) are widely sold. |
| **Heat gun** | Heat-shrink sleeves on battery lugs | A lighter scorches and leaves gaps. |
| **Labels and a marker** | Every cable end, every branch | [SYS-2.2](/code/labels-and-documents/#sys-22-labels). |

## Good to have

| Tool | What it is for |
|---|---|
| **Clamp meter (DC)** | Measures current without opening the circuit. Check that the meter says DC: many cheap clamp meters read AC only. |
| **Hammer or hydraulic crimper for battery lugs** | Lugs on 16 mm² and larger. A hydraulic crimper gives the most even result. |
| **Spirit level and compass** | Panel tilt and direction ([Mounting panels](/install/mounting-panels/)). |
| **Drill, wall plugs, cable clips** | Fixing boxes and supporting cable at least every 450 mm. |
| **Infrared thermometer** | Finds hot joints under load during [regular checks](/maintain/regular-checks/). |

## Crimp terminals by wire size

Insulated crimp terminals are colour coded. Buy the colour that matches the wire:

| Colour | Wire size |
|---|---|
| Red | 0.5-1.5 mm² |
| Blue | 1.5-2.5 mm² |
| Yellow | 2.5-6 mm² |

For bigger wire, use uninsulated copper lugs sized for the wire **and** the stud, plus heat-shrink
sleeve.

## Check every crimp

1. Strip only as much insulation as the terminal barrel is long. No bare copper shows outside the
   terminal; no insulation is inside the barrel.
2. Crimp once, in the right colour position of the tool.
3. **Tug test:** pull the terminal hard by hand. It must not move.
4. Look: no stray strands, barrel evenly squeezed, insulation sleeve gripped.

Never solder a wire end that goes into a screw terminal, and never rely on solder alone at a lug:
solder creeps under pressure and the joint loosens
([DIST-2.5](/code/wiring/#dist-25-crimped-not-twisted)).

## When money is tight

- **One good ratchet crimp tool** matters more than any other tool. Share one between installers
  rather than use pliers.
- **No torque tool?** Borrow one for the battery and the main fuse at least. These joints carry the
  most current and fail the worst.
- **A cheap multimeter is fine** for volts and polarity. Check it on a known battery first.
