# IEC 62368-1, touch voltage, batteries, surge and DC outlets

Research note for the code (`SYS-`, `STO-`, `DIST-`, `LOAD-` rules). Written 2026-11-23. It checks
the secondary summaries the safety model started from against better sources and records what each
source actually says.

**How to read the citations.** Every claim carries a source tag such as [S1]. The *Sources* list at
the end gives the URL, the source type and what was actually read. Types:

- **primary**: the standard itself, or the official preview PDF that IEC publishes (on
  webstore.iec.ch, mirrored by VDE Verlag at assets.vde-verlag.de, or the iTeh sample at
  cdn.standards.iteh.ai). Previews hold the foreword, introduction, scope, terms and some early
  clauses, never the full text.
- **official abstract**: the catalogue entry of a standards body.
- **secondary**: test labs (UL, TÜV), regulators, industry guides, manufacturers, peer-reviewed
  papers, and municipal code tip sheets that reproduce code text.
- **search summary**: seen only in a web-search result summary because the page refused automated
  reading. Weakest; a lead to check, never the only source for a rule.

Standards are paywalled. Where a value is not in a source read here, this note says **not found**.
Clause numbers appear only where a source names them.

---

## 1. The IEC 62368-1 hazard-based model (HBSE)

### 1.1 What the standard is and what it leaves out

- IEC 62368-1 is a **product** safety standard for audio/video, information and communication
  technology (ICT) equipment rated up to 600 V. Current edition: 4.0, 2023-05, corrected version
  2025-08 [S1].
- The 2025-08 correction updates **Table 4** (steady-state ES1 and ES2 limits) [S1]. The note could
  not see what changed. Any ES table copied from an older summary needs a check against the
  corrected edition.
- Edition 4 changes, from its foreword: a new table for external circuits, revised **fire
  enclosure opening** rules, revised liquid-filled component rules, revised **battery charging**
  rules [S1].
- Scope exclusions that matter for a solar picogrid, quoted from clause 1 [S1]:
  - It does not apply to "power supply systems that are not an integral part of the equipment, such
    as motor-generator sets, **battery backup systems** and distribution transformers".
  - It does not apply to "equipment to be used in **wet areas indoors**".
  - It does not address "injurious effects of **gases released by thermal decomposition** or
    combustion".
  - Lightning protection of outdoor equipment is out of scope (it points to IEC 62305-1).
- It "harmonizes with IEC 61140 and gives consideration to the electrical installation" [S1].
- DC power over USB and PoE ports is in IEC 62368-3 [S1] (see section 5).
- Australia's battery industry guide hits the same exclusion and still applies AS/NZS 62368.1 "to
  the extent it can be applied" to battery storage equipment, with IEC 62619 for the battery module
  and its management unit [S28]. That is a working precedent for borrowing 62368-1 outside its
  scope.

**Consequence for the code:** 62368-1 gives the *method* (classify energy, interpose safeguards).
It does not cover the battery system, wet rooms, battery gases or the installation. Those come from
IEC 60364 / IEC 61140 (installation and shock), IEC 62485-5 and AS/NZS 5139 or IRC R328 (battery
placement and gases), and IEC TS 62257-5 (off-grid systems).

### 1.2 The model in plain terms

From clause 0 (informative), read in the preview [S1]:

- **Three-block model.** An energy source, a body part, and an energy transfer between them. A
  **safeguard** sits between source and body and makes the transfer less likely. It can attenuate,
  impede, divert, disconnect, envelop, or put a barrier in the way.
- **Three classes of energy source** (Table 1): class 1 is not painful (may be detectable), ignition
  not likely; class 2 is painful but not an injury, ignition possible with limited spread; class 3
  is an injury, ignition likely with rapid spread.
- **Order of preference** (from ISO/IEC Guide 51): equipment safeguards first (they need no action
  by people), then installation safeguards (when safety can only exist after installation), then
  behavioural safeguards (when the energy source must stay accessible).
- **Shock rule:** against a source that can cause *pain*, one **basic safeguard** under normal and
  abnormal operation. Against a source that can cause *injury*, a basic **and** a supplementary
  safeguard; "in the event of a failure of either safeguard, the other safeguard becomes
  effective". A **reinforced safeguard** (for example reinforced insulation) may replace the pair.
- **Fire rule:** the basic safeguard is that no material reaches its ignition temperature in normal
  and abnormal operation. The supplementary safeguard makes ignition less likely or limits the
  spread of fire (for example a fire enclosure).
- **Burn rule:** same pattern as shock: one basic safeguard against pain, basic plus supplementary
  against injury.
- **Hazardous substances:** the basic safeguard is containment. Supplementary ones include a second
  or spill-resistant container, containment trays and instructional safeguards. Chemical energy is
  not classified (no class 1/2/3).
- **Mechanical:** kinetic sources listed include wall or rack mounting failure and "part motion due
  to an **exploding battery**". Basic safeguards include robust mounting means and means to contain
  expelled parts.

### 1.3 Kinds of safeguard

From clause 0.5 and Table 3 of the preview [S1]:

| Kind | Basic | Supplementary | Reinforced |
|---|---|---|---|
| Equipment (part of the product) | basic insulation; temperatures below ignition | supplementary insulation; **fire enclosure** | reinforced insulation |
| Installation (part of the building wiring) | **wire size** | **overcurrent protective device** | **socket-outlet** |
| Personal (worn) | gloves | insulating floor mat | electrically insulated glove for live work |
| Instructional (a sign or instruction) | "disconnect the cable before opening" | warning on hot parts behind a door | only in exceptional cases, when a full safeguard would stop the product working |

- **Installation safeguards** "are not controlled by the equipment manufacturer"; with respect to
  the equipment, an installation safeguard is generally a supplementary safeguard. The standard
  does not set installation requirements but **assumes** some exist and work, such as protective
  earthing [S1].
- **Behavioural safeguards** come in three kinds, one per kind of person: instructional (ordinary
  person), precautionary (instructed person), skill (skilled person). An instructional safeguard
  "does not result in an ordinary person becoming an instructed person" [S1].
- Table 3 names wire size, overcurrent device and socket-outlet as installation safeguards. That is
  the bridge to a whole-installation code: the wire is the basic safeguard, the fuse the
  supplementary one.

### 1.4 Kinds of person

From clause 0.2 [S1]:

- **Ordinary person**: everyone who is not instructed or skilled, including anyone near the
  equipment. Must not be exposed to sources that can cause pain in normal or abnormal operation, or
  to sources that can cause injury after a single fault.
- **Instructed person**: trained or supervised by a skilled person to recognise class 2 sources
  and take precautions. Must not be exposed to sources that can cause injury, even after a single
  fault.
- **Skilled person**: has training or experience to recognise class 2 and class 3 sources and
  protect themselves; still protected against *unintentional* contact with injury-level sources.
- National notes: in Australia the work of instructed or skilled persons can need a licence; in
  Germany legal conditions apply [S1].
- "Additional requirements may apply for equipment that is clearly designed or intended for use by
  children or specifically attractive to children" [S1].

### 1.5 Electrical energy source classes (ES)

Secondary sources (the limit table itself is not in the preview):

| Class | DC limit, normal and abnormal operation | Source |
|---|---|---|
| ES1 | ≤ 60 V DC (any current), or > 60 V DC with ≤ 2 mA DC touch current | [S3], [S8], [S9] |
| ES2 | ≤ 120 V DC, or touch current ≤ 25 mA DC | [S3], [S8] |
| ES3 | above ES2 | [S3], [S8] |

- A source is ES1 if **either** the voltage limit **or** the current limit is met [S3], [S8].
- ES1 must stay within ES1 in normal and abnormal operation and within **ES2** after a single fault
  (Ed 3 clarifies that the single fault includes a fault of a supplementary safeguard) [S3], [S7].
- What it means for the body (UL, 2010): ES1 is safe for all persons "including children" to touch;
  ES2 may be painful and causes a startle reaction, with "potential for muscle tetanus in
  children"; ES3 may cause fibrillation, cardiac or respiratory arrest, burns [S3].
- **ES1 is not SELV.** UL: "SELV is not used in IEC 62368-1 and is not equivalent to ES1 in all
  cases" [S6]. ES1 is defined by voltage *or* touch current; SELV is defined by source isolation
  and voltage.
- **Outdoor and wet contact.** Ed 3 (2018) moved the outdoor rules of IEC 60950-22 into 62368-1:
  for outdoor equipment, accessible touch voltage must not exceed **0.5 × the ES1 limits** in
  normal, abnormal and single-fault conditions, and not exceed ES1 after a fault of a basic or
  supplementary safeguard [S7]. For DC that is **30 V**. UL confirms circuits within half the ES1
  voltage need no extra current measurement; above it the ES1 current limits still apply [S6].
  The lower limits apply to ordinary persons only [S7].
- **Indoor wet areas:** excluded from the standard's scope [S1]. No wet-location ES table found.

### 1.6 Power source classes (PS) and how they are measured

From UL's brief (2011) and UL's Q&A [S4], [S6]:

| Class | Limit | Meaning |
|---|---|---|
| PS1 | ≤ 500 W in the first 3 s, **≤ 15 W after 3 s** | not enough to ignite materials |
| PS2 | above PS1, **≤ 100 W after 5 s** | ignition possible, spread can be contained |
| PS3 | above PS2, or not classified | ignition and spread beyond the source likely |

- Measurement: a variable load and a wattmeter at the point being classified. Two tests, the worst
  result counts: (1) a normal source into the worst-case **load fault**: the resistor is swept to
  draw maximum power; if a protective device trips, repeat just below the trip point; (2) the
  worst-case **single fault inside the source** (each relevant component shorted or opened in
  turn) into a normal load. Power is read at 3 s, at 5 s and until stable [S4].
- UL (Ed 3): PS1 "does not exceed 15 W measured after 3 seconds", for both measurements [S6].
- **A battery bus is ES1 but PS3.** UL on a 48 V DC bus bar: ES1, but "carrying greater than
  100 VA, so they are a risk of fire (PS3)" [S6]. Any 12, 24 or 48 V battery or branch circuit
  above 100 W is PS3, so the main hazard of a picogrid is **fire, not shock**.
- IC current limiters may be used to make an output PS1 or PS2 [S6].
- IEC 62368-3 note: "PS2 circuits are generally expected to provide less than 100 W to an undefined
  load under both normal operating conditions and single fault conditions" [S41].

### 1.7 Limited power source (LPS, Annex Q)

- LPS (secondary): ≤ 100 VA continuous under any load; cannot supply substantial current into a
  short; open-circuit voltage ≤ 60 V DC [S10]. The IEEE summary gives "≤ 60 V open circuit" from
  Table Q.1 [S9].
- 8 A for ≤ 30 V sources: GlobTek's curve allows up to 8 A at open-circuit voltages of 12.5 V or
  less [S10]. The full Table Q.1 (voltage bands, current and VA rows) was **not found** in a source
  read here.
- Annex Q applies only to circuits **intended to connect to building wiring** (UL, Ed 4) [S6]. A
  fuse may not be counted toward an *inherently* limited source [S6].
- CL2-listed cable may be used in Class 2 and LPS circuits; external wiring in PS1 circuits has no
  flammability requirement (UL, Ed 3) [S6].

### 1.8 Thermal energy source classes (TS)

- Basis: ISO 13732-1 (hot surfaces). TS2 = TS1 + 10 K; TS3 = above TS2 [S5].
- TS1 limits from UL's 2010 brief (draft-era Table 42; the table number changed in later editions,
  values need a check against Ed 4) [S5]:

| Contact time | Metal | Plastic and rubber |
|---|---|---|
| > 1 min | 48 °C | 48 °C |
| 10 s to 1 min | 51 °C | 60 °C |
| 1 s to 10 s | 60 °C | 77 °C |
| < 1 s | 70 °C | 94 °C |

- TS1 needs no safeguard; TS2 needs an equipment or instructional safeguard for ordinary persons;
  TS3 needs a basic plus a supplementary safeguard (UL brief) [S5].

### 1.9 Mechanical energy source classes (MS)

- MS1 to MS3 exist [S1]. Clause 0.9 lists wall-mount failure, instability and exploding batteries
  among kinetic hazards [S1]. **Numeric MS limits not found.** Relevant to wall-hung battery packs
  (mass, mounting means).

### 1.10 Fire enclosures and materials

- A fire enclosure is a **supplementary** safeguard (Table 3) [S1].
- **PS2:** a PS2 circuit does not need a fire enclosure, even with a potential ignition source
  (PIS), if the PIS separation distances are kept; an HB-rated casing may then be fine (UL, Ed 3)
  [S6]. PS2 and PS3 keep a minimum separation requirement even if single-fault testing passes [S6].
- **PS3:** a DC/DC converter rated 900 A "will require a Basic Safeguard, per sub-clause 6.3, as a
  minimum" and components per 6.4.6, with a fire enclosure as one option (UL, Ed 4) [S6].
- **Lithium cells (Annex M.4.3):** "Unless the cell is PS1, a fire enclosure, V-1 or better, is
  required for the cell or combination of cells"; the product enclosure can serve as it; the cells
  count as a resistive PIS; V-2 battery casings are "generally not acceptable"; an HB enclosure plus
  a fire barrier "does not meet the intent of M.4.3" [S6].
- **V-0 satisfies a V-1 minimum** (UL, Ed 4) [S6].
- **Openings:** Ed 2 limits read in UL's Q&A: top and side openings "shall not exceed 5 mm in any
  dimension or 1 mm in width regardless of the length"; bottom openings ≤ 3 mm or ≤ 1 mm wide
  [S6]. Ed 3 revised top, side and bottom openings (new Figure 40, all orientations of use) [S7];
  Ed 4 revised them again [S1]. **Current opening values not found.**
- Material temperature: 90 % of the spontaneous ignition temperature or 300 °C; RTI not used for
  6.3 (UL, Ed 4) [S6].
- Wiring: IEC 60332-1-2 is a viable route for flammability of internal and external wire; UL 2556
  VW-1 wire is accepted (UL, Ed 4) [S6].
- Australia's battery guide adds, for whole battery products: external enclosure of metal at least
  0.20 mm thick, or polymer rated **5VA** (IEC 60695-11-20), with small-opening exemptions [S28].

### 1.11 Battery and charging rules inside 62368-1

- Annex M covers equipment containing batteries (lithium and lead-acid) [S6].
- Charging must **stop** when the battery passes the highest specified charging temperature; there
  is no tolerance above it (Annex M.4.2.3, Ed 4) [S6].
- Ed 3 added a **backfeed safeguard** (5.8, "Backfeed safeguard in battery backed up supplies" in
  the Ed 3 contents [S2]): a battery-backed supply must not leave more than ES1
  on its input terminals after mains loss; UPS and transfer switches stay outside the scope [S7].
- Outdoor equipment with mains socket-outlets for general use needs a ≤ 30 mA RCD (5.5.9, Ed 3)
  [S7] (AC only; noted for hybrid systems).

### 1.12 Installer-built system vs listed product

- 62368-1 judges a **product**; it assumes installation safeguards exist and leaves them to the
  installation rules [S1].
- A DC distribution board is an **assembly** in IEC terms. IEC 61439-3 (Ed 2, 2024) covers
  distribution boards operated by ordinary persons (DBO) up to 300 V AC to earth; "the voltage
  limits for DC applications are under consideration" [S47]. It applies to one-off and series
  boards and to integrating devices into an empty enclosure [S47]. No DC distribution board
  standard for ordinary persons was found.
- Practical split (analysis, not from a source): parts bought as products (charger, battery, USB
  outlet) carry their own listing; the installer's work (wire, fuses, enclosures, placement,
  labels) is judged against the code. The code supplies the installation safeguards 62368-1
  assumes.

---

## 2. Extra-low voltage and touch voltage limits (IEC 61140, IEC 60364)

### 2.1 Definitions and the top of the ELV band

- IEC 60364-4-41: DC voltages are **ripple-free**: r.m.s. ripple ≤ 10 % of the DC component
  (410.3.1). Protective measures include SELV and PELV (Clause 414) [S11].
- The same standard uses 120 V DC as the shock threshold elsewhere: automatic disconnection is not
  required above 50 V AC or 120 V DC if, on a fault to earth, the source output falls to 50 V AC or
  120 V DC or less within 5 s (411.3.2.5) [S12].
- SELV, from IEC 60884-2-4: "voltage which does not exceed 50 V a.c. r.m.s. or **120 V d.c.**
  (ripple free) between conductors, or between any conductor and earth, in a circuit which is
  isolated from the supply mains by means such as a safety isolating transformer or converter with
  separate windings" [S18].
- 414.1.1 limits ELV to 120 V DC, and the IEC 60364-7 parts may set lower values (IEEE summary)
  [S9].
- **Sources for SELV include an electrochemical source (a battery)** (414.3 and 61140 5.2.6,
  IEEE summary) [S9].
- IEC 61140 applies to persons **and livestock**, at any voltage [S13]. IEC TS 61201 gives touch
  voltage *thresholds* as a function of contact area, skin condition (dry, water-wet, saltwater-wet)
  and current path, for DC and AC; it does not consider immersion [S14].

**120 V DC is the ceiling of the ELV band, not a touch-safe limit.** Touch limits are lower:

### 2.2 When SELV needs no insulation or enclosure (basic protection)

| Condition | DC limit without basic protection | Source and strength |
|---|---|---|
| Normal dry conditions, SELV | ≤ 60 V ripple-free DC (25 V AC) | 414.4.5 per BS 7671 summary [S15] |
| PELV with parts earthed to the main earthing terminal | ≤ 60 V DC (25 V AC) | [S15] |
| Above those limits, or equipment immersed | insulation or barriers/enclosures required (expected; wording **not found** in a source read here) | none |
| "All other cases" (wet) | ≤ 30 V DC (12 V AC) | single secondary source only; **unverified** |
| IEC 61140 5.2.6 | 60 V dry with no large contact areas, **15 V** in all other cases | IEEE summary [S9] |
| IEC 60364-7-716 (ICT cabling power) | 60 V dry, 15 V all others | IEEE summary [S9] |

- **Conflict:** the 30 V DC wet figure (BS 7671 tradition) and the 15 V figure (61140 5.2.6 and
  7-716, per IEEE) disagree. The safer value is 15 V. The code should not rely on bare live parts
  in wet places at any picogrid voltage: require insulation or enclosure everywhere outside dry
  indoor rooms.
- SELV live parts must not be earthed or connected to another circuit's protective conductor;
  PELV may be earthed [S15] (secondary).

### 2.3 Special locations (IEC 60364-7-7xx)

| Location | Rule found | Source |
|---|---|---|
| Bathroom zone 0 (7-701) | SELV only, ≤ 12 V AC / 30 V DC | [S15] (BS 7671 summary) |
| Bathroom zone 1 (7-701) | SELV or PELV, ≤ 25 V AC / 60 V DC | [S15] |
| Bathrooms generally | basic protection for SELV/PELV equipment "whatever the voltage" | [S15] |
| Pools zones 0 and 1 (7-702) | SELV only, ≤ 12 V AC / 30 V DC | [S15] |
| Agricultural and livestock premises (7-705) | clauses exist: 705.414 SELV/PELV, 705.513.2 accessibility by livestock | [S17] (TOC only) |

- The 7-705 SELV voltage values and the livestock rules are **not found**. The code should treat
  barns and animal shelters as wet locations and keep every live part enclosed.

### 2.4 What this means for 12, 24 and 48 V (analysis)

Arithmetic, assuming the common LFP per-cell charge limit of 3.65 V and Li-ion 4.2 V (check the
cell datasheet):

| System | Pack | Highest normal voltage | Dry indoor (≤ 60 V) | Outdoor (≤ 30 V, [S7]) |
|---|---|---|---|---|
| 12 V | 4S LFP | 14.6 V | inside | inside |
| 24 V | 8S LFP | 29.2 V | inside | inside, tight |
| 24 V | 7S Li-ion | 29.4 V | inside | inside, tight |
| 48 V | 15S LFP | 54.8 V | inside | **above** |
| 48 V | 16S LFP | 58.4 V | inside, **< 2 V margin** | **above** |

- At 48 V: bare live parts are acceptable only in dry places, and only if charger set-points,
  equalisation and meter tolerances never push the bus past 60 V. Outdoors and in wet rooms 48 V
  live parts need an enclosure or insulation as the basic safeguard and a second safeguard for a
  single fault (for example supplementary insulation, or an enclosure that needs a tool to open).
- PV strings: two 60-cell or 72-cell modules in series typically exceed 60 V open circuit when
  cold (typical module data, not from a source here), so a "24 V" system's PV side can leave ES1
  and SELV even when its battery stays inside.
- 24 V systems stay under the 30 V outdoor limit, which favours 24 V for community buildings with
  outdoor or wet-area wiring.

---

## 3. Batteries: product standards, placement, BMS, gases

### 3.1 Product standards

| Standard | Scope (from the standard's own preview unless noted) | Source |
|---|---|---|
| IEC 62619:2022 (Ed 2) | safety of secondary lithium cells and batteries for **industrial applications, including stationary**: telecom, UPS, electrical energy storage, emergency power; first-life only | [S21] |
| IEC 63056:2020 | additional requirements for lithium cells and batteries in **electrical energy storage systems** ≤ 1500 V DC, including **home (residential) ESS** and off-grid; builds on IEC 62619; not for portable systems ≤ 500 Wh (IEC 61960-3) | [S24] |
| IEC 62133-2:2017 | **portable** sealed secondary lithium cells and batteries | [S23] |
| IEC 62485-5:2020 | **installation**, use, inspection, maintenance and disposal of stationary lithium-ion batteries ≤ 1500 V DC, including "private residences"; hazards: electricity, short circuits, electrolyte, gas emission, fire, explosion | [S20] |
| UL 1973 | batteries for stationary and auxiliary power (US); UL 9540 (whole ESS) relies on it; UL 9540A is a fire test method, not a listing | search summary [S49] |
| UN 38.3 | transport tests T.1 altitude, T.2 thermal, T.3 vibration, T.4 shock, T.5 external short, T.6 impact/crush, T.7 overcharge, T.8 forced discharge; a test summary must be available | search summary [S48] |

- IEC 62485-5 defines a **home energy storage system (HESS)**: "stationary battery system used in or
  next to a single or multi-family dwelling", typically in rooms "not designed as electrical service
  rooms or battery rooms". Its contents cover separate battery rooms, battery enclosures, working
  distances, charging modes, overcharge or overdischarge under fault conditions, ripple current, and
  labels and warnings [S20]. It refers shock protection to IEC 60364-4-41 and expects stationary
  lithium batteries to meet IEC 62619 [S20].
- Australia's industry guide for battery storage equipment (1 kWh to 200 kWh at 0.1C) uses IEC
  62619 as the main standard, plus AS/NZS 62368.1 or 60950.1 for the complete product, plus
  software checks (IEC 60335-1 clause 22.46 or UL 1973 5.8.1.3) [S28]. It is being replaced by
  **SA TS 5398:2025**; compliance with TS 5398 counts as compliance with the guide, not the reverse
  [S28].

**What a ≤ 5 kWh LFP pack in a home should be listed to (synthesis):** IEC 62619 for the battery
(with IEC 63056 for ESS use), or UL 1973; UL 9540 where US codes apply; UN 38.3 for shipping;
IEC 62133-2 alone is not enough because its scope is portable batteries. Australia adds the guide or
SA TS 5398.

### 3.2 What the BMS must do (IEC 62619 Ed 2, clause 5, read in the sample [S22])

- Battery systems are designed within the voltage, current and temperature limits of the cell
  maker, and abnormal temperature rise is prevented (5.4).
- "Each battery system shall have an **independent control and protection** method(s)" (5.6.1).
- The voltage control function must keep **each cell or cell block** below the cell maker's upper
  charge voltage; monitoring every cell or block is recommended (5.6.2).
- Charge and discharge current of the battery stay within the cell's limits (5.6.2).
- Cell reversal from uneven discharge of part of a series string must be prevented (5.6.1).
- **System lock (5.8):** a non-resettable function stops operation when any cell leaves its
  operating region; "This feature shall not be user resettable or allow for automatic reset".
  Return to service only after a check per the maintenance manual.
- Clause 8.2 sets BMS requirements: overcharge control of voltage, overcharge control of current,
  overheating control [S21] (TOC; text not read).
- Ed 2 added rules on hazardous live parts, battery system design, system lock, EMC, and a laser
  propagation test [S21].
- Australia's guide lists the BMS duties as protection against overcharge, overcurrent, over
  discharge, overheating and overvoltage, and its hazard list adds **low-temperature and
  high-temperature charging**, explosive gases, toxic gases and arc flash [S28]. Alarms must work
  without internet; remote safety-software updates need a validation process [S28].
- IEC 62368-1: charging stops above the highest specified charging temperature [S6].

### 3.3 Placement: AS/NZS 5139 (Australia and New Zealand)

- Scope: battery systems from 12 V to 1500 V DC, **≥ 1 kWh and ≤ 200 kWh** per system (0.1C rating
  for lithium), up to but not including the power conversion equipment; also pre-assembled
  integrated systems. Excludes critical-power premises, telecom, EVs, portable equipment, UPS and
  transportable structures [S25].
- **Amendment 1, published 19 December 2025, is mandatory** (NSW) [S26]. Changes listed by the NSW
  regulator [S26]:
  - Systems may now sit within 600 mm of an opening if the opening is wider than 900 mm (for example
    a garage door) (4.2.2.1, 5.2.2.1).
  - Treatment of windows and building ventilation in restricted locations is clarified (4.2.2.2,
    5.2.2.2).
  - Inverters count as an associated appliance and are allowed in the restricted location.
  - Exempt materials used as a barrier to habitable rooms must be at least **6 mm** thick (4.2.4.2,
    5.2.4.2).
  - Overcurrent devices need a kA rating at least the combined fault current of paralleled battery
    systems.
  - New rules for building materials within 1 m of a battery system categorised as a chemical
    hazard (content not stated).
  - A physical copy of the safety data sheet must be left on site, protected (7.7); signs updated
    for explosive gas, toxic fumes, chemical hazard and arc flash (7.8 to 7.11).
- Prohibited locations, from a pre-amendment secondary summary: ceiling spaces, wall cavities,
  under stairways, evacuation or escape routes, roofs (unless suitable), under access walkways,
  blocking a switchboard [S27]. Restricted: within 600 mm of an exit, within 600 mm of a window side
  or vent into a habitable room, within 600 mm of an appliance, within 900 mm below an opening into
  a habitable room [S27]. **Amendment 1 changes some of these; check before use.**
- Mechanical protection: movable shelving is not protection; where a vehicle can reach, fixed
  vehicle protection (for example a bollard) is needed (4.2.2.1, 5.2.2.1) [S29].

### 3.4 Placement: IRC R328 and NFPA 855 (United States)

From IRC 2021 R328 as reproduced with ICC commentary by a municipal tip sheet [S30], and UL's
summary of IRC R328 and NFPA 855 Chapter 15 [S31]:

- Applies to energy storage systems (ESS) of **1 kWh (3.6 MJ) or more**; smaller ones are exempt
  (R328.1 exception 2). Exception 1: ESS listed to UL 9540 and marked "For use in residential
  dwelling units", installed per instructions and NFPA 70 [S30].
- Listed and labelled to **UL 9540** (R328.2) [S30], [S31].
- Units ≥ 3 ft (914 mm) apart unless large-scale fire testing shows less is enough (R328.3.1) [S30].
- **Allowed locations** (R328.4): detached garages and accessory structures; attached garages
  separated from living space; outdoors or exterior walls ≥ 3 ft from doors and windows into the
  dwelling; enclosed utility closets, basements, storage or utility spaces with finished or
  noncombustible walls and ceilings (unfinished wood framing gets 5/8 in Type X gypsum) [S30].
- "ESS shall not be installed in **sleeping rooms**, or closets or spaces opening directly into
  sleeping rooms." Commentary: "People are most at risk where they sleep" [S30].
- **Energy limits** (R328.5): 20 kWh per unit; aggregate 40 kWh in utility closets, basements,
  storage spaces; 80 kWh in garages, accessory structures, on exterior walls, outdoors on the ground
  [S30], [S31].
- Smoke alarms in the ESS room; an interconnected heat detector where a smoke alarm cannot go
  (R328.7). Vehicle impact barriers (R328.8). Mechanical ventilation for ESS that make hydrogen or
  other flammable gases **during charging** (R328.9). Manual and service contact label (R328.11)
  [S30].
- **Conflict:** the tip sheet's commentary describes exception 1 as covering UL 9540 systems "that
  will not go into thermal runaway or produce flammable gas when subject to the UL 9540A Cell Level
  test", which is narrower than the exception's own text [S30]. Local adoptions of R328 differ;
  check the adopted text where a US rule is cited.

**Common ground for the code:** both regimes start at 1 kWh, keep batteries out of sleeping rooms
and escape routes (and in Australia out of habitable rooms, ceilings and wall cavities), put a
non-combustible barrier between the battery and living space, protect against vehicles, and require
signs and documents.

### 3.5 Thermal runaway gases from LFP

- Review of the literature (Bugryniec et al., 2024, open access) [S32]:
  - LFP at 100 % SOC in air, average composition: **H2 36 %**, CO2 25 %, CO 12 %, hydrocarbons 11 %.
    NMC: CO2 36 %, CO 25 %, H2 20 %.
  - Calculated lower flammability limit (LFL): **LFP 6.2 %**, NMC 7.9 to 9.2 %. LFP off-gas breaches
    its LFL in a volume 18 % smaller than NMC: "LFP presents a greater flammability hazard even
    though they show less occurrence of flames".
  - Because LFP runs away cooler, its gas is more often released **unburnt**, so a vapour cloud
    can build up and explode. Electrolyte vapour can be up to 60 % of off-gas when no fire occurs.
  - LFP off-gas is more **toxic** than NMC in absolute terms (more HF), most at low SOC. The
    smallest single-cell release (about 0.01 kWh) is enough to contaminate a single-car garage.
- Meta-analysis of 76 papers (Rappsilber et al., 2023) [S33]: total gas 3 to 48 mmol/Wh, CO 1 to
  161 mg/Wh, HF 2 to 197 mg/Wh; results depend strongly on calorimeter, gas analyser and trigger.
  For LFP, HF release falls as SOC rises [S33]. LFP cells showed no visible gas outburst below 50 %
  SOC in one study cited by the review [S32].
- IEC 62368-1 does not address these gases [S1]; IEC 62485-5 lists gas emission and explosion among
  its hazards [S20]; AS/NZS 5139 Amendment 1 updates explosive-gas and toxic-fume signs [S26].
- **Consequence for the code:** "LFP is safe" is not a basis for indoor placement. Rules on
  placement (not in sleeping rooms, not in escape routes, a barrier to living space, an exit route
  away from the battery) apply to LFP as much as to other lithium chemistries.

---

## 4. Lightning, surge and earthing for small PV

### 4.1 Standards and their scopes

- **IEC 60364-7-712:2017** (PV installations) covers off-grid, parallel and alternative PV systems
  but "does not cover the specific installation requirements for batteries"; it does cover PV
  array protection needed because batteries are present [S34]. It has a clause on transient
  overvoltages (712.443), a table for the **critical length Lcrit** (Table 712.1), and a clause on
  SPDs (712.534) [S34] (TOC only).
- **IEC 61643-31:2018** (SPD product standard, PV DC side, ≤ 1500 V DC): "SPDs for PV systems with
  **energy storage (e.g. batteries**, capacitor banks) are not covered" [S35].
- **IEC 61643-32:2017** (selection and installation of SPDs for PV, ≤ 1500 V DC): "For PV
  installations including batteries additional requirements may be necessary"; it covers PV with
  and without an external lightning protection system (LPS) and with signal circuits [S36].
- **IEC 61643-41:2025** (SPDs for DC power systems ≤ 1500 V DC): tests assume a source with a linear
  voltage-current characteristic; other sources need "careful consideration"; a risk assessment may
  relax requirements for low-power circuits and circuits separated from the utility; "SPDs for PV
  applications are not covered" [S37].
- **Gap:** the PV SPD standard excludes battery systems and the DC SPD standard excludes PV. A
  battery-buffered PV bus falls between them. No source found resolves this.
- **IEC TS 62257-5:2015** (off-grid systems, electrical hazards) bases shock protection on IEC
  61140 and IEC 60364 and has sections on DC-side requirements, fire, lightning (overvoltage and
  direct strikes, pick-up area of a rod per IEC 62305-3), SPDs, earth electrodes and bonding [S38]
  (TOC; requirements not read).

### 4.2 When DC SPDs are needed

- Rule reported by Schneider's Electrical Installation Guide (search summary; the site refused
  automated reading) [S39]: SPDs on the DC side are compulsory when the cumulative DC cable length
  **L ≥ Lcrit**; Lcrit = **115/Ng** for individual homes, 200/Ng for ground-mounted plants, 450/Ng
  for service, industrial, agricultural and other buildings, with Ng the lightning ground flash
  density (strikes/km²/year). Place the SPD near the inverter if the run is under 10 m.
- Schneider blog: IEC 60364-7-712.534 recommends **Type 2** SPDs on the DC side; Type 1 or 2 on the
  AC side depending on an external lightning rod and Ng (search summary) [S39].
- **Not verified against the standard.** The coefficients come from one secondary source read only
  as a summary.
- Worked example (arithmetic): Ng = 2 strikes/km²/year gives Lcrit = 57 m for a home. A small array
  on the house roof with 10 m of DC cable is below it, so the SPD is optional by this rule; a pole
  array 40 m away with a 2 × 40 m run (L = 80 m, if L counts both conductors; definition not found)
  needs one.
- Australia's battery guide lists "transient overvoltage protection (surges, spikes, lightning)"
  among the hazards a battery product must address [S28].

### 4.3 Earthing for tiny off-grid systems

- SELV: live parts not earthed; PELV: may be earthed at one point (secondary) [S15].
- IEC 60364-7-712 shows PV arrays with functional earthing on the DC negative or positive side and
  unearthed arrays (figure titles) [S34].
- IEC 61643-41 has an informative annex on DC distribution configurations (TT, TN-S, TN-C, TN-C-S,
  IT) (search summary) [S37].
- IEC 62368-1: an outdoor DC- or PoE-powered device has no overvoltage category, because it is not
  mains-powered (UL, Ed 4) [S6].
- **Not found:** a rule for when a tiny (≤ 5 kWh, ≤ 60 V) off-grid system needs an earth electrode.
  IEC TS 62257-5 clause 9.6 (earth electrodes, protective bonding) is the place to read next [S38].

---

## 5. Outlets and connectors: USB-C PD, 12 V sockets, ELV plugs, mixed voltages

### 5.1 USB-C and other powered ports

- **IEC 62368-3:2017** applies to equipment that supplies or receives power through communication
  cables or ports: power sourcing equipment (PSE) to powered device (PD) [S41]. USB and PoE are
  examples of ES1 power transfer; ES1 "can generally be assumed to have similar limits" to SELV and
  PELV [S41]. Any cable with an industry-standard connector that permits DC power transfer counts as
  a communication cable, even if it only charges a battery [S41].
- Its contents include "DC power transfer interconnection to building wiring" (5.3.1) and
  "Safeguards to protect against a single fault condition in the PSE" (5.4) [S41] (TOC only).
- IEC 62368-1 Ed 4: 62368-3 does not apply to equipment with **proprietary connectors** or a
  proprietary protocol for power selection [S1].
- **USB PD 3.1 (2021)** adds the Extended Power Range: fixed **28 V, 36 V and 48 V**, up to
  **240 W** over USB-C; before it, USB PD stopped at 100 W (20 V, 5 A). The USB Promoter Group notes
  that safety requirements for 100 to 240 W products "are also more stringent" [S42].
  - **Consequence:** an EPR port at 48 V and 240 W is PS3, not PS2, and its 48 V is near the 60 V
    ES1 line. The code should treat ≤ 100 W USB-C ports as PS2 and EPR ports as PS3 loads.
- The IEC 62368-1 scope note (USB is ES1, PS2 is "less than 100 W") matches the pre-EPR world
  [S1], [S41].

### 5.2 ELV socket-outlets for installations

- **IEC 60906-3:1994**: IEC system of SELV plugs and socket-outlets, 16 A, **6, 12, 24, 48 V AC
  and DC**, household and similar, indoor or outdoor (official abstract seen in search summary)
  [S19].
- **IEC 60884-2-4:2007**, the product standard used with IEC 60906-3, read in the sample [S18]:
  - Scope: plugs, fixed or portable socket-outlets and appliance outlets from 6 V to 48 V DC or AC
    SELV, 16 A, household, indoors or outdoors; also cord extension sets.
  - Ratings: 2-pole, 16 A, at 6 (non-preferred), 12, 24 or 48 V, AC or DC (Table 1).
  - DC terminals marked + and − (8.1, 8.5).
  - **9.2: it shall not be possible for DC plugs to enter AC socket-outlets or the reverse; for
    plugs to enter socket-outlets of any other plug system; for plugs to enter socket-outlets of
    other voltage ratings.**
  - No earthing provision (clause 11 not applicable; clause 18 earthing contacts not applicable).
  - Multiple socket-outlets consist only of SELV socket-outlets (13.101).
  - Cord extension sets: at least 1.0 mm² up to 2 m, 1.5 mm² over 2 m (14.101).
  - Suitable for ambient temperatures normally ≤ 25 °C, occasionally 35 °C.
- Installation rule (secondary, BS 7671 summary): SELV and PELV plugs and sockets "must not fit
  sockets or plugs of other voltage systems in the same premises" [S15]. The IEC 60364-4-41 clause
  number was not seen.
- **IEC 60309-2** has ELV variants (violet 20 to 25 V, white 40 to 50 V, with keying), listed for
  50 to 60 Hz AC; DC keying **not found** (search summary of a manufacturer page) [S40]. **IEC 61984
  not researched** (search found nothing).

### 5.3 12 V vehicle sockets

- **SAE J563** (2009): 12 V DC cigar lighters, power outlets and accessory plugs in vehicles; the
  1990 edition limited accessory plugs to 8.0 A (search summary) [S44].
- **ISO 4165**: a double-pole connection for **12 V or 24 V** DC in road vehicles; confirmed 2024
  per ISO (search summary) [S43].
- These are vehicle standards, not installation standards. The same ISO 4165 socket at 12 V and
  24 V, and SAE J563-style sockets in 24 V trucks, mean the shape does not tell the voltage.

### 5.4 Anderson Powerpole and other genderless connectors

- Amateur-radio emergency groups (ARES, RACES) use Powerpole 15/45 as their standard **12 V**
  connector, red positive, with an orientation convention; one red and one black housing can be
  assembled in four orientations, two of which do not mate (search summary) [S45]. No convention
  found that codes voltage by housing colour or keying.

### 5.5 Mixed voltages on one connector (synthesis)

- The only standard found that forbids it outright is IEC 60884-2-4 9.2 (no plug into a socket of
  another voltage rating, no DC into AC) [S18], with the installation-level rule in BS 7671 [S15].
- USB-C avoids the problem by negotiation: the source stays at 5 V until the device asks for more
  [S42]. Barrel jacks, cigar sockets, ISO 4165 and Powerpole have no negotiation and no voltage
  keying.
- **Rule direction for the code:** one connector family per voltage in one building (for example
  cigar sockets only at 12 V, a different keyed family at 24 V), USB-C for anything that negotiates,
  and a label with the voltage at every DC outlet.

---

## 6. How a code can borrow the model for a whole installation

Synthesis, not from one source:

1. **Inventory energy sources by location**, not by device: PV string, battery terminals, main bus,
   each branch, each outlet, each cord. Classify each as ES (shock), PS (fire), TS (burn), and
   chemical or mechanical (battery gases, wall-hung mass) [S1].
2. **Pick the person** per location: ordinary person everywhere a household member or child can
   reach; instructed or skilled only behind a lock or tool [S1].
3. **Interpose safeguards** per the 62368-1 pattern: one basic safeguard against class 2, basic plus
   supplementary against class 3 [S1]. For PS3 wiring the installation safeguards are named in
   62368-1 Table 3: wire size (basic), overcurrent device (supplementary), socket-outlet
   (reinforced) [S1].
4. **Use installation standards for what 62368-1 leaves out**: shock in wet and special locations
   (IEC 60364-4-41, 7-7xx), battery placement and gases (IEC 62485-5, AS/NZS 5139, IRC R328), surge
   (IEC 60364-7-712, IEC 61643-32), off-grid specifics (IEC TS 62257-5) [S11], [S20], [S25], [S30],
   [S34], [S36], [S38].
5. **Prefer equipment safeguards** over labels, and installation safeguards over behaviour, in that
   order (ISO/IEC Guide 51 order in 62368-1 clause 0.5.1) [S1].
6. Keep the "single fault" test: after any one fault, ES stays within ES2 for an ES1 part [S3], and
   a PS3 fault is cleared by a device that does not depend on the failed part (owner's rule,
   consistent with [S1]).

---

## 7. Corrections and confirmations to the starting list

| Starting claim | Finding |
|---|---|
| ES1 ≤ 60 V DC | **Confirmed**, with the alternative: > 60 V allowed if touch current ≤ 2 mA DC [S3]. ES1 ≠ SELV [S6]. |
| PS1 ≤ 15 W | **Refined**: ≤ 15 W *after 3 s*, and up to 500 W in the first 3 s [S4], [S6]. |
| PS2 ≤ 100 W after 5 s | **Confirmed** [S4]. |
| PS3 needs a fire enclosure | **Refined**: PS3 needs a basic safeguard plus a supplementary one, a fire enclosure being one option; lithium cells need a V-1 or better fire enclosure unless PS1 [S6]. |
| LPS ≤ 100 VA, ≤ 60 V OC | **Confirmed** [S10], [S9]; applies only to circuits meant to connect to building wiring [S6]. |
| One basic plus one supplementary safeguard per source | **Confirmed for class 3 sources**; class 2 needs one basic safeguard; a reinforced safeguard can replace the pair [S1]. |
| 62368-3 covers USB PD at ES1/PS2 | **Confirmed for ≤ 100 W**; USB PD 3.1 EPR reaches 48 V / 240 W (PS3) [S41], [S42]. |
| SELV ≤ 120 V DC, touch ≤ 60 V dry, lower when wet | **Confirmed**: 120 V is the ELV band top; 60 V DC dry without basic protection; wet values conflict (30 V vs 15 V) [S9], [S15], [S18]. |
| NEC Class 2 ≤ 100 VA | **Confirmed** for the 100 VA ceiling [S46]; the Table 11(B) voltage and current rows and the wet-contact DC limit were **not found** in a source read here. |
| (new) Outdoor touch limit | 0.5 × ES1 = **30 V DC** for outdoor equipment, from 62368-1 Ed 3 [S7]. |
| (new) Scope gaps | 62368-1 excludes battery backup systems, indoor wet areas and battery gases [S1]; IEC 61643-31 excludes PV with batteries; IEC 61643-41 excludes PV [S35], [S37]. |

## 8. Not found (next reads)

- IEC 62368-1 Ed 4 Table 4 values after the 2025 correction; Table Q.1 in full; current fire
  enclosure opening limits; MS class limits; Annex M.4 text.
- IEC 60364-4-41 414.4.5 and 414.4.2 wording from the standard (only BS 7671 summaries read).
- IEC 60364-7-705 livestock values; IEC 60364-7-701 and 7-702 values from the IEC text.
- IEC 60364-7-712 Lcrit formula and the definition of L, from the standard.
- IEC TS 62257-5 clauses 5.2 (DC side), 8 (lightning) and 9.6 (earthing): requirements text.
- AS/NZS 5139 Amendment 1 location figures (4.1A to 4.1D) and barrier material list.
- IEC 62619 clause 8.2 BMS test criteria; SA TS 5398:2025 content.
- IEC 61984, IEC 60130-10 (barrel connectors), IEC 60309 DC keying.

---

## Sources

Each entry: tag, title, type, what was read, URL.

- **S1** IEC 62368-1:2023 Ed 4.0 RLV, corrected 2025-08. Primary (IEC preview PDF via VDE Verlag).
  Read: foreword (changes, corrigendum note), clause 0 in full, clause 1 scope, 3.1 abbreviations.
  https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec62368-1%7Bed4.0.RLV%7Den.pdf
- **S2** IEC 62368-1:2018 sample. Primary (iTeh sample). Read: table of contents only (clause names
  such as 4.3.2 to 4.3.5 and 5.8 backfeed).
  https://cdn.standards.iteh.ai/samples/23618/ab1334250adf48c1b76f0f2ab423a967/IEC-62368-1-2018.pdf
- **S3** UL, "IEC 62368-1 Technical Brief: Electrical Energy Source (ES) vs. SELV and LCC", C. Sato,
  2010. Secondary (test lab). Read: whole brief.
  https://japan.ul.com/wp-content/uploads/sites/27/2014/06/1_techbrief_ESvsSELV.pdf
- **S4** UL, "Classification & Electrical Measurement of PS1, PS2 and PS3 Power Sources", Nezu and
  Sato, 2011. Secondary (test lab). Read: whole brief.
  https://japan.ul.com/wp-content/uploads/sites/27/2014/06/1_techbrief_classandele_measurement.pdf
- **S5** UL, "IEC 62368-1 Technical Brief: Touch Temperature Limits", F. Chiang, 2010. Secondary
  (test lab, draft-era table numbers). Read: whole brief.
  https://japan.ul.com/wp-content/uploads/sites/27/2014/06/1_techbrief_touchtemp.pdf
- **S6** UL Solutions, "IEC 62368-1 Ask the Engineers" Q&A page. Secondary (test lab). Read: whole
  page (about 400,000 characters) through targeted extraction on fire enclosures, PS, batteries,
  LPS, ES, outdoor; editions noted per answer.
  https://www.ul.com/resources/iec-62368-1-ask-engineers-question-and-answer-page
- **S7** UL Solutions, "Certification Impact Analysis CSA/EN/UL/IEC 62368-1 Ed 3", rev. 2023-08-29.
  Secondary (test lab). Read: foreword list; rows for 3.3.6.2, 5.2.x, 5.3.1, 5.3.2, 5.5.9, 5.8,
  6.4.8.x.
  https://collateral-library-production.s3.amazonaws.com/uploads/asset_file/attachment/56784/62368-1_Ed_3_UL_Analysis_2021-10-22.pdf
- **S8** Delta Electronics, "What is the Difference Between SELV, PELV and ES1 in AC/DC Power
  Supplies?". Secondary (manufacturer). Read: whole page.
  https://psu.deltaww.com/de/industry-know-how/what-is-the-difference-between-selv-pelv-and-es1-in-ac-dc-power-supplies
- **S9** IEEE 802.3 PDCC ad hoc, "ES1, LPS and SELV voltage and source requirements summary" v1.5,
  2021. Secondary (standards-committee working summary). Read: whole slide.
  https://www.ieee802.org/3/ad_hoc/PDCC/public/2021/ES1_LPS_SELV_1_0821.pdf
- **S10** GlobTek, "Limited Power Sources (LPS): IEC 62368-1 vs. UL 1310 Class 2", 2020. Secondary
  (manufacturer). Read: whole article.
  https://www.globtek.com/en/technical-articles/limited-power-sources-lps-iec62368-1-vs-ul1310-for-ac-dc-power-supplies-and-adapters
- **S11** IEC 60364-4-41:2005+AMD1:2017 CSV. Primary (IEC preview via VDE). Read: contents, 410.3.
  https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec60364-4-41%7Bed5.1%7Db.pdf
- **S12** IEC 60364-4-41:2005. Primary (iTeh sample). Read: 411.3.2 including Table 41.1 and
  411.3.2.5; clause 414 not in the sample.
  https://cdn.standards.iteh.ai/samples/10887/b410f7c10853465e9e7f293d9e18fd98/IEC-60364-4-41-2005.pdf
- **S13** IEC 61140:2016 Ed 4.0 RLV. Primary (IEC preview via VDE). Read: contents, scope.
  https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec61140%7Bed4.0.RLV%7Den.pdf
- **S14** IEC TS 61201:2007. Primary (iTeh sample). Read: clauses 1 to 5.1 and Figures 1 to 5.
  https://cdn.standards.iteh.ai/samples/14698/6c855f58355f40aba16283e771fd10d8/IEC-TS-61201-2007.pdf
- **S15** Certio, "SELV, PELV and FELV explained" (BS 7671-based). Secondary (commercial UK guide,
  no named reviewer). Read: whole page via extraction.
  https://certio.uk/guides/selv-pelv-felv-extra-low-voltage-explained
- **S17** IEC 60364-7-705:2006. Primary (iTeh sample). Read: contents and scope only.
  https://cdn.standards.iteh.ai/samples/13123/0f884a42d87045038b5bbd7ac410be23/IEC-60364-7-705-2006.pdf
- **S18** IEC 60884-2-4:2007 (plugs and socket-outlets for SELV). Primary (iTeh sample). Read:
  clauses 1 to 20 as included.
  https://cdn.standards.iteh.ai/samples/14531/e632d92089454877b0f02171de7e3aad/IEC-60884-2-4-2007.pdf
- **S19** IEC 60906-3:1994, IEC webstore entry. Official abstract. Seen in search summary only.
  https://webstore.iec.ch/publication/3884
- **S20** IEC 62485-5:2020. Primary (IEC preview via VDE). Read: contents, foreword, introduction,
  scope, normative references, 3.1.1 to 3.1.2.
  https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec62485-5%7Bed1.0%7Db.pdf
- **S21** IEC 62619:2022 Ed 2.0. Primary (IEC preview via VDE). Read: contents, foreword changes,
  scope.
  https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec62619%7Bed2.0%7Db.pdf
- **S22** IEC 62619:2022 CMV. Primary (iTeh sample). Read: clauses 5.1 (end) to 5.9.
  https://cdn.standards.iteh.ai/samples/102658/51f6834cb0d54da78c6bafbd8435b4f2/IEC-62619-2022.pdf
- **S23** IEC 62133-2:2017. Primary (IEC preview via VDE). Read: scope.
  https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec62133-2%7Bed1.0%7Db.pdf
- **S24** IEC 63056:2020. Primary (IEC preview via VDE). Read: scope.
  https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec63056%7Bed1.0%7Db.pdf
- **S25** AS/NZS 5139:2019, Intertek Inform store page. Official abstract. Read: abstract and scope.
  https://intertekinform.com/en-au/Standards/preview-1166297_SAIG_AS_AS_2775044/
- **S26** NSW Government, "Changes to the Battery Standard" (Amendment 1 advisory). Secondary
  (regulator). Read: whole page.
  https://www.nsw.gov.au/housing-and-construction/compliance-and-regulation/electricians/electrical-standards-rules-and-notes/changes-to-battery-standard
- **S27** SolarQuotes, "Thinking About A Home Battery? Better Think About Where", 2022. Secondary
  (consumer site, pre-amendment). Read: whole article.
  https://www.solarquotes.com.au/blog/battery-installation-locations/
- **S28** Clean Energy Council et al., "Best Practice Guide: Battery Storage Equipment - Electrical
  Safety Requirements" v1.1, 10 March 2026. Secondary (industry guide used for AS/NZS 5139 product
  eligibility). Read: update notice, scope, definitions, Part 3 method 1, specific requirements,
  hazard list.
  https://cleanenergycouncil.org.au/getmedia/fc9e9f11-b270-432f-84c2-541b88c11237/Best-Practice-guide-battery-storage-equipment-publication-v1-1-Dec-2025.pdf
- **S29** Solar Victoria / TechSafe, "Technical guidance sheet 2.1: Physical protection of battery
  systems", 2023. Secondary (regulator guidance, reviewed by Energy Safe Victoria). Read: whole
  sheet.
  https://www.solar.vic.gov.au/sites/default/files/2023-03/SOL209_Tech-Guidance_S2_Battery_Sheet1_01.03.23.pdf
- **S30** Town of Topsham (Maine), "Energy Storage Systems (IRC 2021) TIP 26": IRC 2021 R328.1 to
  R328.11 text with ICC commentary. Secondary (municipality reproducing model code). Read: whole
  document.
  https://www.topshammaine.com/vertical/sites/%7B95A28B10-4485-4BEC-B8FC-5E8BF056A147%7D/uploads/TIP_26_ENERGY_STORAGE_SYSTEMS.pdf
- **S31** UL Code Authorities, "2021 Residential ESS Requirements: IRC R328 and NFPA 855 Chapter 15".
  Secondary (test lab). Read: whole sheet.
  https://code-authorities.ul.com/wp-content/uploads/sites/46/2021/08/ESS-Separation-Max-Quantities-2021-Residential-Requirements-002_TLrev_08272021-002.pdf
- **S32** Bugryniec P.J. et al., "Review of gas emissions from lithium-ion battery thermal runaway
  failure", Journal of Energy Storage 87 (2024) 111288, CC BY. Secondary (peer-reviewed review).
  Read: abstract, sections on composition, toxicity, flammability, conclusions.
  https://eprints.whiterose.ac.uk/id/eprint/227052/8/1-s2.0-S2352152X24008739-main.pdf
- **S33** Rappsilber T. et al., "Meta-analysis of heat release and smoke gas emission during thermal
  runaway of lithium-ion batteries", Journal of Energy Storage 60 (2023) 106579. Secondary
  (peer-reviewed meta-analysis). Read: abstract, LFP sections.
  https://opus4.kobv.de/opus4-bam/files/56807/Meta-analysis.pdf
- **S34** IEC 60364-7-712:2017 Ed 2.0. Primary (IEC preview via VDE). Read: contents, scope.
  https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec60364-7-712%7Bed2.0%7Db.pdf
- **S35** IEC 61643-31:2018. Primary (IEC preview via VDE). Read: scope.
  https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec61643-31%7Bed1.0%7Db.pdf
- **S36** IEC 61643-32:2017. Primary (IEC preview via VDE). Read: contents, scope.
  https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec61643-32%7Bed1.0%7Db.pdf
- **S37** IEC 61643-41:2025. Primary (iTeh sample). Read: scope. Annex list seen in search summary.
  https://cdn.standards.iteh.ai/samples/iec/iec-61643-41-2025/3100514a3d184600935a5cf99c2cceae/iec-61643-41-2025.pdf
- **S38** IEC TS 62257-5:2015 Ed 2.0. Primary (IEC preview via VDE). Read: contents, foreword,
  introduction, scope, normative references.
  https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec62257-5%7Bed2.0%7Den.pdf
- **S39** Schneider Electric, Electrical Installation Guide, "SPD for photovoltaic applications",
  and Schneider blog "When lightning strikes, is your PV installation protected?" (2020). Secondary
  (manufacturer). Search summary only (site returned 403).
  https://www.electrical-installation.org/enwiki/SPD_for_photovoltaic_applications ;
  https://blog.se.com/infrastructure-and-grid/power-management-metering-monitoring-power-quality/2020/03/03/when-lightning-strikes-is-your-pv-installation-protected/
- **S40** MENNEKES, "Low voltage" (IEC 60309 ELV colour codes and keying). Secondary
  (manufacturer). Search summary only.
  https://www.mennekes.in/knowledge/for-electrical-engineers/norms-regulations/low-voltage
- **S41** IEC 62368-3:2017. Primary (IEC preview via VDE). Read: contents, foreword notes, scope,
  3.1.1 to 3.1.3.
  https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec62368-3%7Bed1.0%7Db.pdf
- **S42** USB Promoter Group, "USB Power Delivery Specification Revision 3.1" announcement, 26 May
  2021. Primary for the USB PD claim (specification owner's announcement). Read: whole document.
  https://www.usb.org/sites/default/files/2021-05/USB%20PG%20USB%20PD%203.1%20DevUpdate%20Announcement_FINAL.pdf
- **S43** ISO 4165 catalogue entry. Official abstract. Search summary only (site returned 403).
  https://www.iso.org/standard/33321.html
- **S44** SAE J563_200902 catalogue entry. Official abstract. Search summary only.
  https://saemobilus.sae.org/standards/j563_200902-standard-12-volt-cigarette-lighters-power-outlets-accessory-plugs
- **S45** Anderson Powerpole conventions (Wikipedia; amateur-radio group pages). Field practice.
  Search summary only.
  https://en.wikipedia.org/wiki/Anderson_Powerpole ; https://www.qsl.net/w2vtm/powerpole.html
- **S46** Siemens, "Dimensioning and protection of control circuits according to UL", white paper,
  2018. Secondary (manufacturer). Read: Class 2 and LVLEC sections.
  https://assets.new.siemens.com/siemens/assets/api/uuid:73306dd4-9c66-4df8-92c0-ad73b6cd5a0a/necclass2-whitepaper-icp-us.pdf
- **S47** IEC 61439-3:2024 Ed 2.0 (distribution boards for ordinary persons). Primary (IEC preview
  via VDE). Read: scope.
  https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec61439-3%7Bed2.0%7Db.pdf
- **S48** PHMSA, "Lithium Battery Test Summary" (UN 38.3), 2024; TÜV SÜD UN 38.3 pages. Secondary
  (regulator, test lab). Search summary only.
  https://www.phmsa.dot.gov/sites/phmsa.dot.gov/files/2024-09/Lithium-Battery-Test-Summary-2024.pdf
- **S49** UL Solutions, energy storage system testing page (UL 1973, UL 9540, UL 9540A). Secondary
  (test lab). Search summary only.
  https://www.ul.com/offerings/energy-storage-system-testing-and-certification

(Tag S16 is not used.)

[S1]: https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec62368-1%7Bed4.0.RLV%7Den.pdf
[S2]: https://cdn.standards.iteh.ai/samples/23618/ab1334250adf48c1b76f0f2ab423a967/IEC-62368-1-2018.pdf
[S3]: https://japan.ul.com/wp-content/uploads/sites/27/2014/06/1_techbrief_ESvsSELV.pdf
[S4]: https://japan.ul.com/wp-content/uploads/sites/27/2014/06/1_techbrief_classandele_measurement.pdf
[S5]: https://japan.ul.com/wp-content/uploads/sites/27/2014/06/1_techbrief_touchtemp.pdf
[S6]: https://www.ul.com/resources/iec-62368-1-ask-engineers-question-and-answer-page
[S7]: https://collateral-library-production.s3.amazonaws.com/uploads/asset_file/attachment/56784/62368-1_Ed_3_UL_Analysis_2021-10-22.pdf
[S8]: https://psu.deltaww.com/de/industry-know-how/what-is-the-difference-between-selv-pelv-and-es1-in-ac-dc-power-supplies
[S9]: https://www.ieee802.org/3/ad_hoc/PDCC/public/2021/ES1_LPS_SELV_1_0821.pdf
[S10]: https://www.globtek.com/en/technical-articles/limited-power-sources-lps-iec62368-1-vs-ul1310-for-ac-dc-power-supplies-and-adapters
[S11]: https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec60364-4-41%7Bed5.1%7Db.pdf
[S12]: https://cdn.standards.iteh.ai/samples/10887/b410f7c10853465e9e7f293d9e18fd98/IEC-60364-4-41-2005.pdf
[S13]: https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec61140%7Bed4.0.RLV%7Den.pdf
[S14]: https://cdn.standards.iteh.ai/samples/14698/6c855f58355f40aba16283e771fd10d8/IEC-TS-61201-2007.pdf
[S15]: https://certio.uk/guides/selv-pelv-felv-extra-low-voltage-explained
[S17]: https://cdn.standards.iteh.ai/samples/13123/0f884a42d87045038b5bbd7ac410be23/IEC-60364-7-705-2006.pdf
[S18]: https://cdn.standards.iteh.ai/samples/14531/e632d92089454877b0f02171de7e3aad/IEC-60884-2-4-2007.pdf
[S19]: https://webstore.iec.ch/publication/3884
[S20]: https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec62485-5%7Bed1.0%7Db.pdf
[S21]: https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec62619%7Bed2.0%7Db.pdf
[S22]: https://cdn.standards.iteh.ai/samples/102658/51f6834cb0d54da78c6bafbd8435b4f2/IEC-62619-2022.pdf
[S23]: https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec62133-2%7Bed1.0%7Db.pdf
[S24]: https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec63056%7Bed1.0%7Db.pdf
[S25]: https://intertekinform.com/en-au/Standards/preview-1166297_SAIG_AS_AS_2775044/
[S26]: https://www.nsw.gov.au/housing-and-construction/compliance-and-regulation/electricians/electrical-standards-rules-and-notes/changes-to-battery-standard
[S27]: https://www.solarquotes.com.au/blog/battery-installation-locations/
[S28]: https://cleanenergycouncil.org.au/getmedia/fc9e9f11-b270-432f-84c2-541b88c11237/Best-Practice-guide-battery-storage-equipment-publication-v1-1-Dec-2025.pdf
[S29]: https://www.solar.vic.gov.au/sites/default/files/2023-03/SOL209_Tech-Guidance_S2_Battery_Sheet1_01.03.23.pdf
[S30]: https://www.topshammaine.com/vertical/sites/%7B95A28B10-4485-4BEC-B8FC-5E8BF056A147%7D/uploads/TIP_26_ENERGY_STORAGE_SYSTEMS.pdf
[S31]: https://code-authorities.ul.com/wp-content/uploads/sites/46/2021/08/ESS-Separation-Max-Quantities-2021-Residential-Requirements-002_TLrev_08272021-002.pdf
[S32]: https://eprints.whiterose.ac.uk/id/eprint/227052/8/1-s2.0-S2352152X24008739-main.pdf
[S33]: https://opus4.kobv.de/opus4-bam/files/56807/Meta-analysis.pdf
[S34]: https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec60364-7-712%7Bed2.0%7Db.pdf
[S35]: https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec61643-31%7Bed1.0%7Db.pdf
[S36]: https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec61643-32%7Bed1.0%7Db.pdf
[S37]: https://cdn.standards.iteh.ai/samples/iec/iec-61643-41-2025/3100514a3d184600935a5cf99c2cceae/iec-61643-41-2025.pdf
[S38]: https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec62257-5%7Bed2.0%7Den.pdf
[S39]: https://www.electrical-installation.org/enwiki/SPD_for_photovoltaic_applications
[S40]: https://www.mennekes.in/knowledge/for-electrical-engineers/norms-regulations/low-voltage
[S41]: https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec62368-3%7Bed1.0%7Db.pdf
[S42]: https://www.usb.org/sites/default/files/2021-05/USB%20PG%20USB%20PD%203.1%20DevUpdate%20Announcement_FINAL.pdf
[S43]: https://www.iso.org/standard/33321.html
[S44]: https://saemobilus.sae.org/standards/j563_200902-standard-12-volt-cigarette-lighters-power-outlets-accessory-plugs
[S45]: https://en.wikipedia.org/wiki/Anderson_Powerpole
[S46]: https://assets.new.siemens.com/siemens/assets/api/uuid:73306dd4-9c66-4df8-92c0-ad73b6cd5a0a/necclass2-whitepaper-icp-us.pdf
[S47]: https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iec61439-3%7Bed2.0%7Db.pdf
[S48]: https://www.phmsa.dot.gov/sites/phmsa.dot.gov/files/2024-09/Lithium-Battery-Test-Summary-2024.pdf
[S49]: https://www.ul.com/offerings/energy-storage-system-testing-and-certification
