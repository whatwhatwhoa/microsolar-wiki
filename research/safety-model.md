# Safety model (seed study)

Origin: a source-to-load safety study written for one 24 V picogrid product (the "Picobox": MPPT,
battery disconnect, source selector, eFuse branch breakers, 12 V and USB-C outputs). It is the
starting point for the code's requirements; product-specific parts (module names, gaps G1-G8,
internal file links) are context, not requirements. Pages cite it as research, never as a source.


How the Picobox (`architecture.md`) is made safe, layer by layer from the sources to the loads. The
system is mostly off-grid, so no inspector checks it: the design itself carries the safety, and it
takes as much coverage as is reasonable. The why and the framework choice are
`docs/decisions/microsolar.md` D-MS.3; the standards behind each rule are in *Standards* below.

## The rule: a rated installation plus one fault-proof device per hazard

IEC 62368-1's model, applied to the whole system: every hazard has a **basic safeguard** that holds
in normal use and a **supplementary safeguard** that acts on a single fault, and one fault never
defeats both. For wiring, the basic safeguard is the wire itself (sized for its load, insulated,
routed, strain-relieved, terminals enclosed) and the supplementary one is a single overcurrent
device that still works after the fault: one per conductor, as in a car (each wire its fuse, the
main fuse for the main feed) or the NEC. It is not two protective devices in series, and no
function is duplicated (no second OV or UV cutoff behind the first).

**Electronics are convenience, the fuse is the counted device.** An eFuse or hot-swap FET can fail
short, which is exactly the single fault, so it is not the counted safeguard: a plain fuse sized to
the wire is. The electronic breaker stays in front of it because it acts fast, resets, latches like
a breaker and keeps the fuse from blowing on ordinary faults. Where a hazard has no fault-proof
device today (the 12 V port's overvoltage when its buck FET shorts), one is added.

**Counting by where the hazard is.** A load's own protections (fuse, OCP, OTP) cover faults inside
the load. They do not cover the distribution: a short in a cord or wall cable, a loose connector, a
wrong port voltage or a failed module in the box sits upstream of the load, which never sees it,
and the box cannot choose what gets plugged in. So from the bus to every output plug the box
provides the safeguards itself. A load's OV protection is never counted: on cheap loads it is often
a small TVS that burns.

Every voltage in the system is extra-low: the bus is 20-29.2 V, the PV side at most 50 V cold
Voc. All of it is ES1 / SELV (≤ 60 V DC, touch-safe in dry places). The hazards are therefore
**energy** (an LFP pack delivers kA into a short: burns, molten metal, cable fires), **fire**
(overloaded wire, loose terminals, arcing connectors, the pack itself), and **damage to loads**
(overvoltage), not shock.

| Hazard | Primary (normal use) | Counted single-fault safeguard | Status |
|---|---|---|---|
| Battery lead short (kA) | pack BMS short-circuit trip | Class T fuse at the battery (L2) | fuse: gap G1 |
| Branch wire overload / short | branch eFuse or hot-swap limit, latch-off | fuse sized to the wire (L10) | fuse: gap G2 |
| Fault inside a bus module | its own limit / UVLO | fuse at its bus tap (L9) | fuse: gap G2 |
| Pack overcharge | MPPT CV 28.8 V (28.5-29.1) | BMS cell OV; disconnect OV 33 V cuts the bus | covered |
| Pack overdischarge | disconnect LVD 24.0 V (23.3-24.8) | BMS cell UV (~2.5 V/cell) | covered |
| Charging below 0 °C | MPPT TS window, 103AT on the pack (-0.2 °C) | BMS low-temperature charge cutoff | BMS spec: G6 |
| PV overvoltage onto loads | MPPT CV; PV OV cutoff 52 V | disconnect OV 33 V, branch OV 31 V | covered |
| PV reverse polarity | LM74700 ideal diode on PV | SMBJ51A is unidirectional after it | covered |
| 12 V output overvoltage (buck high-side short) | none | none | gap G3 |
| Surge / lightning on PV | SMBJ51A on the board (component level) | external DC SPD + bonded frames (L5) | gap G5 |
| Fire inside the box | IC thermal shutdowns, fuses | fire enclosure (L15) | gap G7 |

## Layers, source to load

### L1 Battery pack and its BMS
- **Protects against:** cell overcharge, overdischarge, overcurrent, short circuit, charging cold.
- **Requirement:** a commodity 8S LFP pack listed to IEC 62619 or UL 1973 and tested to UN 38.3
  (VeraSol asks this of stationary lithium packs). Its BMS cuts per cell on OV (≤ 3.70 V/cell),
  UV (≥ 2.45 V/cell; VeraSol's LFP defaults are 3.65 / 2.50 recommended), overcurrent, short
  circuit and charge below 0 °C. The maker declares the pack's short-circuit current; it sizes L2.
- **Covered by:** the pack (outside the Picobox). The Picobox adds its own backstops (L6, L7).

### L2 Battery terminal fuse (main fuse)
- **Protects against:** a short anywhere on the battery leads, the box's battery path, or a failed
  BMS FET. Without it a pack short is limited only by cell and cable resistance.
- **Requirement:** a fuse on the positive post, within 18 cm (7 in, ABYC E-11) of the post, or
  within ~1.8 m if that lead is sheathed or in conduit (E-11's 72 in exception). Its DC interrupt
  rating must exceed the pack's prospective short-circuit current at the system voltage
  (Victron: mandatory for lithium; IEC TS 62257-5 6.3). Estimates for 8S LFP: ~5 kA at the
  terminals of a 100 Ah pack with BMS FETs, ~8.5 kA without, ~14 kA for 200 Ah (pack resistance
  estimates; the maker's declared figure replaces them). **Class T** (≥ 20 kA DC) is the
  default. MRBF is 10 kA at 14 V but 5 kA at 32 V: only for a pack whose declared short-circuit
  current stays under 5 kA. ANL (5-6 kA) and MEGA (2.5 kA) are distribution fuses behind a
  Class T, not main fuses.
- **Rating:** the Picobox lead fuse is 20-25 A: no more than the box's battery path is built for
  (20 A presets of the disconnect and selector) and the lead's ampacity (10 AWG / 6 mm²). The
  inverter gets its own fuse from the same post or a fuse block behind the Class T (800 W is
  33 A at 24 V: 50-60 A, 6 AWG).
- **Covered by:** nothing in the Picobox today (gap G1).

### L3 Battery isolator
- **Protects against:** working on a live system; the spark of connecting a pack straight onto
  the MPPT's bulk capacitors (2 x 68 uF + ceramics on the battery side).
- **Requirement:** a manual DC switch rated for the full current, positive lead, after the fuse
  (Victron: isolate the positive only). An electronic switch is not an isolator (no air gap), so
  the LM74502 does not count. Connect the pack with the isolator open, then close it.
- **Covered by:** nothing today (gap G1, with the main fuse).

### L4 Battery input of the Picobox
- **Protects against:** reverse connection, a loose high-current contact, unplugging under load.
- **Requirement:** a polarised, latching connector rated above the main fuse (the Mini-Fit 2x4,
  9 A x 4 contacts before derating; not rated for hot unplugging: open L3 first).
- **Covered by:** `conn_minifit` 2x4 (keyed). Reverse polarity: the LM74502's back-to-back FETs
  block a reversed pack on the disconnect path; the MPPT's battery side has no reverse block
  (keying is the safeguard).

### L5 PV side
- **Protects against:** reverse panel, over-voltage (cold Voc), DC arcs on disconnect, lightning
  surges, PV-to-battery backfeed, touching live PV wiring.
- **Requirement.**
  - One panel, Voc ≤ 50 V cold (the panel rule, `decisions/bq25756.md` D-MPPT.4). This keeps the
    PV side at ES1 (≤ 60 V) and under NEC 690.11's 80 V arc-fault threshold.
  - A 2-pole DC isolator or DC breaker at the box, rated ≥ 60 V DC and ≥ 1.25 x Isc (~20 A for a
    500 W panel); DC breakers are often polarity-marked.
  - PV cable outdoor- and UV-rated (PV wire / H1Z2Z2-K), sized ≥ 1.56 x Isc (NEC 690.8 practice:
    1.25 x 1.25), MC4-type touch-safe connectors.
  - A DC surge protective device (Type 2, Ucpv ≥ 60 V) at the box's PV input when the PV cable
    runs outdoors more than a few metres; panel frames and mounting bonded to the earth point
    (L14). The board's SMBJ51A is a component clamp (600 W, 10/1000 us), not an SPD.
  - No string fuse is needed for one panel that cannot be back-fed (IEC 60364-7-712 via VeraSol).
- **Covered by:** M1 `pv_protect`: 20 A fuse, LM74700 ideal diode (reverse panel, no backfeed),
  SMBJ51A after it, OV cutoff 52.1 V (50.4-53.4). Isolator, SPD, frame bonding: gap G5.

### L6 Charger control
- **Protects against:** overcharge, charging hot or below 0 °C, overcurrent into the pack.
- **Requirement:** CV below the BMS OV with margin; a temperature cutoff on the pack itself.
- **Covered by:** M1 BQ25756: CV 28.82 V (28.54-29.10, 3.567-3.638 V/cell), charge current
  15 A, TS window -0.2 to ~60 °C with the 103AT on the pack (an open NTC lead reads cold and
  stops charging). Backstops: the BMS (L1) and the disconnect's OV cutoff (L7).

### L7 Battery disconnect (LVD / OV)
- **Protects against:** deep discharge by the loads; a bus overvoltage from a failed charger or a
  pack whose BMS has opened (VeraSol's "PV overvoltage" case: load terminals stay safe with the
  battery gone).
- **Requirement:** cut the bus below the pack's safe floor and above the bus parts' ratings.
- **Covered by:** M2 LM74502 + TPS3701: off below 24.0 V (23.3-24.8), on again at 26.0 V, OV
  cutoff 33 V (29.9-36.1). It has no current limit: L2 and the BMS cover overcurrent.

### L8 AC/DC input and source selector
- **Protects against:** backfeed into the AC/DC, the AC/DC charging the pack, a reversed source.
- **Requirement:** the AC/DC is a listed SELV supply (IEC 62368-1 / UL 62368-1 or IEC 61010-1,
  isolated output) with its own short-circuit limit; it never sees mains on the DC side.
- **Covered by:** M3 LM74700 x2 (reverse blocking, SMBJ33CA per input). No current limit (the
  AC/DC limits itself; the battery side is L2). A shorted selector FET plus a shorted AC/DC lead
  is a second fault, cleared by L2. Input fuses: `decisions/lm74700.md` D-ORING.1 question 4.

### L9 The bus
- **Protects against:** a failed module tapping the bus (a shorted converter FET, a TVS that
  failed short after a long surge) pulling the whole bus into a fault.
- **Requirement:** every module on the bus is fused at its tap, the fuse above the module's
  highest input current and with an interrupt rating above the bus's prospective current. That
  current is ~1-1.2 kA (pack ~5 mOhm, 2 m of 8-10 AWG lead, the connector, the disconnect and
  selector FETs: ~21-26 mOhm at 25.6 V). The Bel 0679L (2410, already in `lib/`) is rated 10 kA
  at 86 V DC from 250 mA to 10 A, but only 300 A at 125 V DC from 12 to 20 A: every tap ≤ 10 A
  fits it. The taps' sustained loads together stay inside the battery path's 20 A (load
  planning): three 5 A branches, 12 V and 100 W USB-C reach ~24 A at a 20 V bus, which the main
  fuse would carry for minutes.
- **Covered by:** nothing today (gap G2). The TVSs (SMBJ33A/CA, 33 V standoff) are present.

| Tap | Highest input | Tap fuse (0679L) |
|---|---|---|
| 12 V output 5 A (M4) | 3.2 A at a 20 V bus | 5 A |
| USB-C 45 W (SW3517S) | 2.5 A | 4 A |
| USB-C 100 W (SW3516H) | 5.4 A | 8 A |
| Branch: see L10 | | |

### L10 Branch breakers: electronic limit plus a fused backstop
- **Protects against:** overload and shorts on house wiring and cords; a failed eFuse or hot-swap
  FET (fails short: the branch then has no limit at all).
- **Requirement:** the electronic limit is the breaker (fast, latch-off, reset by the wall switch
  or a power cycle; VeraSol: overload protection resettable by the user). Behind it, a fuse sized
  to the branch **wire**, not to the load: the fuse never opens in normal use (the sustained load
  is ≤ ~80 % of it; the limit's worst-high is only reached for the trip time), and it opens
  before the wire overheats when the electronics have failed. The wire is then sized to the fuse
  (*Wiring* below). TPS16630 is UL 2367 recognised as a solid-state overcurrent protector
  (R_ILIM ≥ 3 k, datasheet SLVSET9G p. 1); the fuse still covers its single fault.
- **Branch classes** (load, limit worst-case, backstop, least wire):

| Class | Load | Limit (worst) | Fuse | Wire | Module |
|---|---|---|---|---|---|
| Limited (Class 2-like, ≤ 100 VA) | ≤ 2.5 A | 2.64-3.17 A | 3 A | 18 AWG / 0.75 mm² | TPS16630, R_ILIM 6.2k |
| Standard | ≤ 5.0 A | 5.02-5.90 A | 8 A | 16 AWG / 1.5 mm² | TPS16630, R_ILIM 3.3k |
| Power | ≤ 7.5 A | 8.00-10.35 A | 10 A | 16 AWG / 1.5 mm² | LM5069, RS 6 mOhm |

  A limited branch stays ≤ 100 VA at 29.2 V even with its eFuse failed short, because the 3 A
  fuse is under 100 / 29.2 = 3.4 A (the NEC Class 2 rule for a source that is not inherently
  limited: an overcurrent device ≤ 100/V A between 20 and 30 V). Only this class may use CL2 / CL3
  cable in walls. Standard and power branches are like NEC Class 1 power-limited circuits
  (≤ 30 V, ≤ 1000 VA): building wire, sized to the fuse.
- **Covered by:** B1-B3 (TPS16630, latch-off, UVLO 21 V, OV 31 V) and `lm5069_branch`. The fuses
  are missing (gap G2).

### L11 12 V and USB-C outputs
- **Protects against:** overload (the converters limit current), overvoltage onto the connected
  devices when a converter fails.
- **Requirement:** a 12 V port never exceeds 15 V (VeraSol); a USB PD port is a limited power
  source (≤ 100 W, PS2; IEC 62368-3 covers DC power over ports).
- **Covered by:** M4 LM76005 (current limit 6.0-7.8 A, UVLO 21 V); SW3517S / SW3516H (USB PD
  protections, OVP). **Not covered:** a shorted high-side FET in the LM76005 puts the bus (up to
  29.2 V, 33 V before the OV cutoff) on the 12 V jack and on the 25 V output capacitors (gap G3).

### L12 Output connectors and cord sets
- **Protects against:** plugging a 12 V device into 24 V, reversed polarity, overheated or
  arcing contacts, cords pulled from terminals.
- **Requirement.**
  - Each voltage on its own connector family that no other voltage's plug fits: 12 V on the
    5.5 / 2.1 barrel (the 12 V convention, ≤ 5 A); 24 V branches on a polarised, latching
    connector (Mini-Fit Jr 2x1 / 2x2, the repo's power family, `decisions/app.md` D-APP.3).
    Never AC receptacles (NEMA, Schuko) for DC.
  - Connector and cord rated above the branch's backstop fuse, with derating for every loaded
    contact.
  - **Hot plug.** Plugging into a live branch is current-limited: the eFuse pulls the inrush down
    to its limit within microseconds, so the contacts carry no lasting capacitor spike.
    Unplugging under load can arc: copper contacts arc above ~13 V and ~0.43 A (Holm), and
    Mini-Fit has no hot-plug rating (Molex: hot mating arcs and cuts contact life). The rule is switch off, then unplug; a
    switched branch's wall switch or the box's per-branch indicator makes that easy. A connector
    rated for hot plug (Anderson Powerpole: 250 cycles at 120 V DC) is the option where users
    will unplug live.
  - Cords visible and unconcealed, strain-relieved at both ends, outdoor-rated outdoors
    (VeraSol: strain relief test, outdoor cable UV rating).
- **Covered by:** today the branches end on KF301 screw terminals (installation terminals) and
  12 V on a DC-044A 5.5 / 2.1 jack (5 A / 30 V). The cord-set connector is gap G4.

### L13 Wiring
- **Protects against:** wire overheating, voltage drop that browns out loads, fire from loose
  terminations (series arcs: below 80 V no arc-fault detection is required or used).
- **Requirement:** wire ampacity ≥ the backstop fuse (table below); copper; ferrules on stranded
  wire in screw terminals (VeraSol: wire clamped between plates, never wrapped round a screw, no
  twist-on connectors); lever-nut or screw terminals in boxes; polarity marked at both ends.
- **Covered by:** the installation guide (gap G8).

### L14 Earthing and bonding
- **Protects against:** a +-to-metal fault going unnoticed, static build-up on the PV side,
  lightning potential differences, SPDs with no reference.
- **Requirement.** The Picobox's DC negative is one net: the BQ25756 is non-isolated, so PV-,
  battery-, bus- and every output's - are joined. It is bonded to earth at **one point**, an
  earth stud at the box next to the battery negative; PV frames, mounting, the enclosure and the
  SPD's earth go to the same stud (Victron: one ground, close to the battery; frames to the
  central ground). No PV conductor is earthed anywhere else (it would make ground currents
  through the MPPT). IEC TS 62257-5 permits earthing one DC conductor when the DC side has at
  least simple separation from any AC side: the AC/DC and the inverter must be isolated types.
  A lightning-protection earth conductor is ≥ 16 mm² (IEC TS 62257-9-4 7.2).
  Floating (no earth bond) is allowed at ES1 and is the fallback where no earth electrode can be
  made; then all metal is bonded together and a +-to-metal fault is not detected.
- **Covered by:** nothing on the board yet (gap G5: an earth stud and the bond point).

### L15 Enclosure and fire
- **Protects against:** a fire started inside the box spreading; fingers or tools on terminals.
- **Requirement:** the bus and battery path are PS3 (> 100 W available), so the electronics sit
  in a fire enclosure: metal, or plastic rated V-0 (UL 94), bottom openings baffled. All
  terminals covered to IP2X once wired (VeraSol: no live part reachable, a 12.5 mm probe does not
  enter; the battery needs only one terminal insulated). Indoor IP2X; outdoor parts IP5X /
  IPX5. Airflow over the MPPT at full charge current (15 A stage: fan or 4 layers,
  `decisions/bq25756.md` D-MPPT.3); wire insulation inside rated 105 °C.
- **Covered by:** nothing yet (gap G7).

### L16 Placement
- **Battery:** not in a bedroom or escape path; on a non-combustible surface, ventilated, out of
  the sun, above flood level, away from heat; a smoke alarm in the room. NFPA 855 / IRC R328
  list utility closets, basements, storage rooms, garages, exterior walls and outdoors for home
  batteries (≤ 20 kWh per unit); habitable rooms are not on the list. Tier 2's 5 kWh is far
  inside the size limit. LFP vents no gas in normal use, but flammable and toxic gas in thermal
  runaway.
- **Picobox:** next to the battery (short, fused lead), at eye level, reachable for the isolator
  and the branch reset; not inside a cabinet with the battery's vent path.
- **Inverter:** on the battery through its own fuse (L2), never through the box.
- **Covered by:** the installation guide (gap G8).

### L17 Labels and manual
- **Requirement (VeraSol):** fuse sizes on the product and in the manual (spare fuse if user
  replaceable); battery chemistry, capacity and voltage on the pack; a user manual for
  installation, use, troubleshooting, basic electrical safety and maintenance, in words and
  pictures a typical user understands; date of manufacture or serial; PV module label with Voc
  and Isc. Picobox labels: "24 V DC" on every branch, max PV Voc 50 V, polarity at every
  terminal, the main fuse rating, "switch off before unplugging".
- **Covered by:** nothing yet (gap G8).

## Install modes

**A. Plug-in hub (default).** The Picobox, battery and isolator stand together; every load hangs on
an output connector through a cord set, as a laptop hangs on its adapter. Cords are visible,
movable, a few metres long, rated for the branch's fuse, and the appliance end is the appliance's
own business. This is the IEC 62257-9-8 kit model: everything plug-and-socket, no tools. Any
branch class may feed cord sets.

**B. Fixed wiring in walls.** A branch run inside walls or ceilings is a building installation (IEC
TS 62257-9-4 for 12/24 V installations up to 500 VA; IEC TS 62257-5 above that; NEC Class 2 /
Class 1 power-limited as the detailed rules). What changes:
- The wire is sized to the backstop fuse and never to the eFuse setting (the eFuse can fail).
- Cable type follows the branch class: CL2 / CL3 cable only on limited (≤ 100 VA) branches;
  standard and power branches use building wire (NM-type cable, or single conductors in conduit
  or surface raceway).
- Separation from AC wiring (no shared conduit or box without a barrier).
- Every joint in a box, accessible, with lever-nut or screw terminals; no buried splices.
- Outlets are the DC connectors of L12 in boxes, never AC receptacles.
- Labels at both ends of each run: branch number, 24 V DC, fuse.
- Voltage drop ≤ 3 % at the branch's load (table below). Wall switches carry only the breaker's
  enable signal (already the design).
- A commissioning check: polarity, a short at the far end trips the branch, insulation to earth.

## Wiring table

Least copper per backstop fuse (NEC 240.4(D): 18 AWG 7 A, 16 AWG 10 A, 14 AWG 15 A, 12 AWG 20 A,
10 AWG 30 A) and the longest one-way run for 3 % drop (0.72 V at 24 V; 20 °C copper, out and back).

| Load | 18 AWG 0.82 mm² | 16 AWG 1.31 mm² | 14 AWG 2.08 mm² | 12 AWG 3.31 mm² | 10 AWG 5.26 mm² |
|---|---|---|---|---|---|
| 1 A | 17 m | 27 m | 43 m | 69 m | 110 m |
| 2 A | 8.6 m | 14 m | 22 m | 34 m | 55 m |
| 2.5 A (limited, 3 A fuse) | 6.9 m | 11 m | 17 m | 28 m | 44 m |
| 5 A (standard, 8 A fuse) | not allowed | 5.5 m | 8.7 m | 14 m | 22 m |
| 7.5 A (power, 10 A fuse) | not allowed | 3.6 m | 5.8 m | 9.2 m | 15 m |

Longer runs take the next size up. The fuse decides the least size; the length decides more.
Battery lead 20-25 A: 10 AWG (6 mm²) for ≤ 2 m. PV: ≥ 1.56 x Isc (12 AWG / 4 mm² for ~14 A
Isc).

## Standards

IEC and UL texts are paywalled. Each entry says what the Picobox takes from the standard, then
(in brackets) what was actually read.

- **IEC TS 62257-9-8:2020, the VeraSol quality standards** ([IEC](https://webstore.iec.ch/publication/62431),
  [VeraSol summary](https://verasol.org/wp-content/uploads/import/Summary-of-IEC-62257-9-8.pdf)):
  port overcurrent and overload tests, user-resettable protection, wiring and connector sizing,
  strain relief, PV overvoltage onto ports, miswiring, IP levels, fuse labels and spares, lithium
  pack listing, LFP cutoff defaults, the manual, plug-and-socket kits. Scope ≤ 350 W and ≤ 35 V
  working voltage: the Picobox (400-500 W PV, 50 V Voc) is beyond it; above 240 W, 35 V Voc or
  8 A Isc it asks for IEC 61730 class II panels and an IEC 62109 / UL 1741 charge controller.
  (VeraSol's summary, read in full.)
- **IEC TS 62257-9-5** ([IEC](https://webstore.iec.ch/en/publication/65559)): the lab test methods
  behind 9-8 (port protection, PV overvoltage, appliance tests); ed. 5 (2024) replaces 2018.
  (Abstract only.)
- **IEC TS 62257-5:2015** ([preview](https://cdn.standards.iteh.ai/samples/22162/1a6bbaebbff34b5c8f43cac430648284/IEC-TS-62257-5-2015.pdf)):
  SELV or double insulation on the DC side; one DC conductor may be earthed given simple
  separation from AC; overload rule IB ≤ In ≤ Iz; breaking capacity ≥ the prospective current
  unless a coordinated upstream device covers it; SPDs; earthing. (Clauses 1-7 and the contents,
  free preview.)
- **IEC TS 62257-9-4:2016** ([preview](https://cdn.standards.iteh.ai/samples/22172/b7ef20fc7ea64326b7b39e9c276976bf/IEC-TS-62257-9-4-2016.pdf)):
  the user's installation (fixed wiring) for 12/24 V DC micropower plants up to 500 VA: voltage
  drop, conductor sizes, a fuse table, lightning conductor ≥ 16 mm². (Scope and contents.)
- **IEC TS 62257-8-1:2018** ([IEC](https://webstore.iec.ch/publication/31768)): nothing; since
  2018 it covers automotive flooded lead-acid only. (Abstract.)
- **IEC 62368-1** ([UL brief](https://japan.ul.com/wp-content/uploads/sites/27/2014/06/1_techbrief_classandele_measurement.pdf),
  [IEEE 802.3 summary](https://www.ieee802.org/3/ad_hoc/PDCC/public/2021/ES1_LPS_SELV_1_0821.pdf),
  [GlobTek on LPS](https://www.globtek.com/en/technical-articles/limited-power-sources-lps-iec62368-1-vs-ul1310-for-ac-dc-power-supplies-and-adapters)):
  the hazard-based method: ES1 (≤ 60 V DC), PS1 ≤ 15 W, PS2 ≤ 100 W after 5 s, PS3 above (fire
  enclosure); LPS (Annex Q: ≤ 100 VA, ≤ 60 V open circuit, limited short-circuit current); two
  safeguards per energy source. (Secondary summaries.)
- **IEC 62368-3** ([IEC](https://webstore.iec.ch/publication/26479)): DC power over ports (USB PD)
  at ES1, PS2. (Abstract.)
- **IEC 61140, IEC 60364-4-41, IEC 60364-7-716** (the IEEE 802.3 summary above): SELV ≤ 120 V
  ripple-free DC; touch ≤ 60 V dry, ≤ 15 V elsewhere; 7-716 (DC over ICT cabling) ≤ 60 V dry.
  (Secondary.)
- **NEC 725 / 722 / 724 and Ch. 9 Table 11(B)** ([Sola note](https://hallaweb.jlab.org/tech/Detectors/public_html/hall_a/miscellaneous_info/sola_introNECclass2_rg.pdf),
  [EC&M 2023 changes](https://www.ecmweb.com/national-electrical-code/article/21254614/top-changes-to-the-2023-national-electrical-code),
  [IAEI 2026](https://iaeimagazine.org/standards/nec-2026-significant-code-changes/)): Class 2
  ≤ 100 VA nameplate, 100/V A above 20 V, an overcurrent device ≤ 100/V A when the source is not
  inherently limited; Class 1 power-limited (Art. 724 since 2023) ≤ 30 V, ≤ 1000 VA, 18 AWG 7 A,
  16 AWG 10 A. (Secondary; the 100/V device limit is from memory of Table 11(B): check the text.)
- **NEC 690** ([IAEI](https://iaeimagazine.org/electrical-fundamentals/nec-rapid-shutdown-requirements-and-ul-3741/)):
  cold-corrected Voc; arc-fault protection only at ≥ 80 V; rapid shutdown only for PV on or in
  buildings (30 V inside, 80 V in the array, within 30 s); conductors 1.25 x 1.25 x Isc.
  (Secondary; 690.8 from memory.)
- **NEC 250.162** ([EEPower](https://eepower.com/technical-articles/nec-basics-grounding-and-bonding-dc-systems-supplying-premises/)):
  a 2-wire DC system must be grounded only above 60 V (50 V before 2014): the 24 V bus may
  float. (Secondary.)
- **NEC 712 and 720** ([C3 Controls](https://c3controls.com/white-paper/preparing-for-nec-2023-in-2024)):
  history only. 712 (DC microgrids) moved into 705 and 720 (< 50 V) was deleted in 2023; 2026
  reuses 720 as the limited-energy general article. (Secondary.)
- **NFPA 855 / IRC R328** ([UL sheet](https://code-authorities.ul.com/wp-content/uploads/sites/46/2021/08/ESS-Separation-Max-Quantities-2021-Residential-Requirements-002_TLrev_08272021-002.pdf)):
  home battery locations, ≤ 20 kWh per unit, UL 9540 listing for a packaged ESS. (UL's summary.)
- **IEC 62485-5** ([IEC](https://webstore.iec.ch/publication/29086)): stationary lithium battery
  installations (short circuit, gas, fire). (Abstract.)
- **ABYC E-11** ([marinehowto](https://marinehowto.com/?p=17412)) **and MRBF**
  ([Eaton](https://www.eaton.com/ee/et-ee/catalog/emobility/marine-rated-battery-fuse.html)):
  battery fuse within 7 in, 40 / 72 in if sheathed; interrupt ratings Class T 20 kA, MRBF 10 kA
  at 14 V / 5 kA at 32 V / 2 kA at 58 V, ANL ~6 kA. (Secondary; ABYC is paywalled.)
- **ANSI/RVIA DC standard** ([RVIA](https://www.rvia.org/standards-regulations/association-and-ansi-adopted-standards)):
  RV DC systems ≤ 60 V nominal. NFPA 1192 is RV fire and life safety, not the DC wiring.
  (Listing only.)
- **Victron Wiring Unlimited** ([DC wiring](https://victronenergy.com/media/pg/The_Wiring_Unlimited_book/en/dc-wiring.html),
  [earthing](https://www.victronenergy.com/media/pg/The_Wiring_Unlimited_book/en/ground,-earth-and-electrical-safety.html)):
  fuse in the positive, interrupt rating ≥ the lithium bank's short-circuit current, isolate the
  positive, ≤ 2.5 % drop; one ground near the battery, PV conductors not grounded, frames to the
  central ground. (Read.)
- **Holm's arc limits** ([US 8638050](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/8638050))
  **and Molex hot mating** ([brief](https://dev3.molex.com/content/dam/molex/molex-dot-com/en_us/pdf/tech-briefs/987652-3376.pdf)):
  copper arcs above ~13 V and ~0.43 A; hot mating cuts Mini-Fit contact life. (Secondary.)
- **TPS1663 SLVSET9G and Bel 0679L** (`references/datasheets/`): UL 2367 recognition
  (R_ILIM ≥ 3 k); 0679L ≤ 10 A rated 10 kA at 86 V DC. (Primary.)

## Gaps: what the modules do not cover today

- **G1** Main fuse and isolator at the battery (L2, L3): Class T 20-25 A for the Picobox lead,
  the inverter's own fuse, a positive isolator. Commodity parts; a kit BOM line and the guide.
- **G2** Fuses on the bus (L9, L10): a fuse at every bus tap and a wire-sized backstop in every
  branch module (`tps1663_branch`, `lm5069_branch`, `lm76005_buck`, the USB PD chargers): a
  `fuse` flag, 0679L sized from the module's current.
- **G3** 12 V output overvoltage (L11): a buck high-side short puts up to 33 V on the 12 V jack
  and on 25 V output caps; VeraSol caps a 12 V port at 15 V.
- **G4** Branch output connector for cord sets (L12): the branches end on screw terminals; mode A
  needs a keyed, latching 24 V connector distinct from the 12 V barrel. Also check KF301 terminal
  ratings on PV (~14 A Isc, 1.25 x) and the AC/DC input (20 A).
- **G5** PV isolator, DC SPD, the earth stud and bond point (L5, L14).
- **G6** Pack requirements (L1): the battery spec in the kit (listing, BMS functions including
  low-temperature charge cutoff, declared short-circuit current, the NTC lead to the TS port).
- **G7** Enclosure (L15): fire enclosure, IP2X terminal covers, the MPPT fan, internal wiring.
- **G8** Installation guide and labels (L12, L13, L16, L17, install modes A and B, the wiring
  table, commissioning checks).
