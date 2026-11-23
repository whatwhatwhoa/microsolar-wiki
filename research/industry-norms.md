# Industry norms for small DC systems (Victron, marine, RV and van practice)

Research note for the code. It complements IEC TS 62257 and IEC 62368-1 with what Victron Energy,
marine standards (ABYC, ISO small craft) and RV/van building actually do. Pages cite it as research,
never as a source. Every claim carries a source tag `[S#]`; the Sources list at the end gives the URL,
the grade (primary / secondary summary / amateur practice) and what was actually read.

## How to read this note

- **Primary** = the standard or manufacturer document itself. **Secondary** = a reputable summary
  (Panbo, MarineHowTo, vendor tech notes). **Amateur** = blogs, forums, van-build sites.
- **ABYC E-11 text read is the 2003 edition** (S1, published free by the US government's
  incorporation-by-reference site). Current editions (E-11 and E-13, 2022-2025) are paywalled; what
  changed is known only from Panbo (S14, S15) and is marked "current ed., secondary". Where the 2003
  text and a newer summary differ, both are shown.
- **ISO 10133:2012** (S2) was read from the public preview (clauses 4-9 visible). It is withdrawn;
  ISO 13297:2020 now covers AC and DC (S27). The ISO 13297 text itself is paywalled and was not read.
- **Victron Wiring Unlimited rev 04 (08/2026)** (S3) was read in full as PDF text plus the web
  version (S4, S5).
- **ANSI/RVIA LV 2020** (S9), the US low-voltage standard for RVs and conversion vans, is free and was
  read in full. It is the closest thing to a van "code"; it is much looser than marine or Victron.
- **Not read (blocked or paywalled):** Blue Sea Systems articles (HTTP 403), West Marine advisor pages
  (404), ABYC current text, ISO 13297, EN 1648-2, NFPA 1192, IEC 60445 Annex tables beyond 6.2.4.
  "Not found" means exactly that; no value was guessed.
- Table columns marked "(2003)" are ABYC E-11 July 2003. Ampacity rows were mapped by position from
  extracted PDF text and cross-checked against one secondary source (S12: 2/0 at 105 C = 330 A).

## Summary: where the sources agree and where they split

| Point | ABYC E-11 | ISO 10133 | Victron | ANSI/RVIA LV (RV/van) | Van-build blogs |
|---|---|---|---|---|---|
| Fuse in the positive, at the source | 7 in (175 mm) of battery post; 40 in or 72 in if sheathed [S1] | 200 mm; 1 m or 1.8 m if sheathed [S2] | Main battery fuse plus one fuse per consumer; no distance given [S3] | 18 in (457 mm) of where power enters [S9] | Terminal fuse on the post [S23] |
| Fuse rating vs wire | at most 150 % of wire ampacity (non-motor) [S1] | not above the smallest conductor [S2] | lowest of cable, load, battery [S3, S6] | not above conductor ampacity [S9] | 120-125 % of load [S24, S26] |
| Interrupt rating | breakers: Table V; newer ed. 5 000 A per 100 Ah for lithium [S1, S14] | not stated in preview | at least one fuse >= bank short-circuit current, mandatory [S3] | none stated (only "DC rating >= system voltage") [S9] | forum: 10-20 kA, disputed [S20] |
| Voltage drop | 3 % / 10 % [S1] | 10 %, with 3 % list [S2] | below 2.5 % (toolkit) [S4] | 10 % (informative appendix) [S9] | 3 % / 10 % chart [S22] |
| DC negative colour | black or yellow [S1] | black or yellow (yellow if AC aboard) [S2] | not specified in the text read [S3] | not specified; ground return "uniquely identified" [S9] | black [S22, S23] |
| Battery disconnect | positive, banks > 800 CCA [S1] | positive (or both poles) [S2] | positive only; removing main fuse may do [S3] | not found [S9] | Blue Sea system switch [S23] |
| Chassis as current return | no (two-wire only) [S1] | not stated in preview | one ground point near battery [S5] | yes, if metal thick enough [S9] | chassis ground common [S23] |

---

## 1. Overcurrent protection

### 1.1 Where fuses go

| Position | ABYC E-11 (2003) [S1] | ISO 10133:2012 [S2] | Victron [S3, S6, S8] | ANSI/RVIA LV [S9] |
|---|---|---|---|---|
| At the battery | Every ungrounded conductor within 7 in (175 mm) of the source, measured along the conductor (11.12.1.2). Exceptions: conductor on the battery terminal and fully sheathed or enclosed, as close as practicable, max 72 in (1.83 m); other sources, sheathed, max 40 in (1.02 m); cranking circuits exempt | Within 200 mm of the source for each circuit; sheathed on the battery terminal max 1.8 m; other sources sheathed max 1 m; conductors under 200 mm exempt (8.1) | "A DC circuit usually contains a main battery fuse, after which it branches off." Smart Lithium: fuse the positive of every battery and every series string, and the main positive of a parallel bank | Within 18 in (457 mm) of the point where the power source connects (3-5) |
| Charger or alternator | Each ungrounded conductor from a charging source needs OCP within 7 in of the battery or DC system, and a second one at or within 7 in of the source sized to its maximum output; self-limiting devices excepted (11.12.1.1) | Output of self-limiting generators and battery chargers "do not require fuses or circuit breakers" (8.3) | Solar charger: "battery supply must be protected by a fuse" with a minimum and maximum per model (150/35: 40-45 A; 150/45: 50-63 A), even if an external fuse exists [S8] | PV circuits exempt if the conductor ampacity covers the largest available current (3-1 exception 1) |
| Each branch | At the point of connection to the main switchboard (11.12.1.5.1); source-of-power breaker for a panel up to 100 % of panel capacity (11.12.1.6) | At the source of power, e.g. the panel board (4.4) | "Each individual consumer needs to have an individual fuse. No matter how big or small" | "All conductors shall be provided with overcurrent protection" (3-1) |
| Busbar feeds | Panelboard source breaker or fuse at most 100 % of the feeder; 150 % allowed if a submain at most 100 % sits in the panel (11.12.1.6) | Not in the preview | Several inverter/chargers: each its own fuse of the same type, not one big fuse; fuse the positive only, continuous negative preferred but not mandatory | Not stated |
| PV array | Not in E-11 | Not in preview | "A fuse needs to be located between a PV array and the solar charger. Please check with the local authorities" | Not required (current limiting) |

Notes.

- ABYC "within 7 in" and ISO "within 200 mm" are nearly the same rule. The RV figure is 2.5 times
  longer, so a van that follows only RVIA can pass with a fuse 18 in from the battery. MarineHowTo
  cites ISO 200 mm as law for CE-marked boats and ABYC as voluntary [S12].
- Victron's rev 04 text read gives no distance rule at all. It states the principle (fuse the positive,
  one fuse per consumer, a fuse removed isolates the battery) [S3].
- Boats exempt engine cranking circuits; MarineHowTo and Nigel Calder call that exemption "patently
  unsafe" for small engines [S12, S13]. Not relevant to a DC picogrid with no starter.
- ABYC E-11 2003 also requires continuously energised parts such as battery positive terminals to be
  boot-covered, except circuits fused at the source (11.5.2.7.5) [S1].

### 1.2 Sizing: to the wire or to the load

| Source | Rule |
|---|---|
| ABYC E-11 (2003) [S1] | Non-motor load: device rating at most 150 % of the supply conductor ampacity (Table IV) (11.12.1.4). Motors: protection must prevent a fire hazard if energised 7 h under any overload including locked rotor (11.12.1.3). Panelboard feeder: at most 100 % of feeder ampacity (11.12.1.6) |
| MarineHowTo (secondary) [S13] | "You size the fuse to protect the wire, provided your wire is sufficiently sized." Fuse can be below the wire's ampacity but ideally not above; ABYC's 150 % is allowed but the author prefers rounding down |
| ISO 10133:2012 [S2] | Voltage rating not below nominal circuit voltage; current rating "shall not exceed the value for the smallest size conductor in the circuit" (8.2) |
| Victron [S3, S6] | One consumer: the lower of the consumer's current and the cable's rating. Several consumers: the cable's rating. Smart Lithium: the lowest of cable, battery and system rating |
| ANSI/RVIA LV [S9] | OCP "not in excess of the ampacity of the conductors shown in Table 1 or Table 2" (3-2). Table 2 gives 90 C and 105/125 C ampacities (12 AWG: 22.5 A / 25 A; 4 AWG: 95 A / 120 A); Table 1 small-wire OCP maxima extracted garbled (not quoted) |
| Van blogs [S24, S26] | Search excerpts: fuse = 1.2 x or 1.25 x the continuous load, then round up; "trust the manufacturer's number" [S22] |

Conflict. ABYC allows up to 150 % of wire ampacity; ISO, RVIA and Victron cap the fuse at the wire.
For the code the ISO/Victron/RV form (never above the wire) is the safer common denominator, and 100 %
of ampacity for the specific insulation rating and installation conditions is what MarineHowTo
recommends.

### 1.3 Fuse and breaker types for DC

Voltage and interrupt data as published by Victron (S3), with other sources alongside. Interrupt
rating falls as DC voltage rises, so the figure is only meaningful at the stated voltage.

| Type | DC voltage and current range (Victron [S3]) | Interrupt rating | Notes and conflicts |
|---|---|---|---|
| Glass / ceramic | up to ~60 A, up to 250 V | not given | Some glass fuses have no DC rating at all (search excerpt only, S28) |
| Blade (ATO/ATC) | up to 120 A, 32 V, slow | not given | Victron lists slow-blow behaviour for DC use |
| Midi | 23-200 A, 32 V | not given | |
| MRBF terminal | 30-300 A, 58 V | Victron: 2 000 A at 58 V. MarineHowTo/Blue Sea: 10 000 A at 14 V [S12]. User-supplied: 5 kA at 32 V | Same part, three voltages. Victron's table gives only the 58 V figure |
| MEGA | 40-500 A, 32 V, slow | Victron table: 2 500 A (70 V version), 1 000 A (58 V version). MarineHowTo: 2 000 A [S12] | Sources disagree by part version; datasheet needed |
| ANL | 35-750 A, 32 V, fast | 6 000 A (Blue Sea, ignition-protected). MarineHowTo adds that unrated cheap ANLs "blew the windows out of the fuses" in his test [S13] | Fine for lead-acid and small LiFePO4 per some forum members [S21]; below Victron's rule for large lithium |
| CNN | 10-800 A, 48 V DC / 125 V AC, fast | not given | |
| Class T | 125-160 V | 20 kA (various makers); Eaton Bussmann 200 kA at 160 V [S3]; Blue Sea 20 kA at 125 V [S12] | Not ignition-protected-tested (matters only in gasoline spaces) [S13]. A forum member notes the Class T spec requires only "an adequate interrupting rating", so cheap 10 kA "Class T" parts exist [S21] |
| NH | up to 1 000 A, 440-550 V DC | 25 kA at 125-300 V [S3] | Victron lists as a high-current land option |
| DC circuit breaker (MCB/MCCB) | Thermal-magnetic, "AC or DC", DIN rail; for 48 V and up on land per Victron [S3] | Must be checked at the DC voltage | A breaker's AC and DC ratings differ (search excerpt: 10 kA at 120 VAC but 5 kA at 48 VDC, S28). Breakers may be polarity sensitive; "it matters which way they are wired" [S3] |

Interrupt-rating requirement by source:

| Source | Requirement |
|---|---|
| Victron [S3] | "In every lithium battery installation, at least one fuse in the DC line must have an interrupt rating equal to or greater than the maximum prospective short circuit current of the battery bank. This is a mandatory safety requirement." Class T fits the Lynx system; alternatives allowed if continuous, voltage and interrupt ratings match |
| ABYC E-11 (2003) breakers [S1] | Table V-A: 12 V and 24 V main breaker AIC 1 500 A (battery up to 650 CCA), 3 000 A (651-1 100 CCA), 5 000 A (over 1 100 CCA); branch breakers half of that (750 / 1 500 / 2 500 A); 32 V main 3 000 / 5 000 A. Breakers must be trip-free, manual reset, DC rated at least system voltage, and remain operable after the fault. Fuses: only "voltage rating not less than nominal" in 2003 text. A fuse ahead of a breaker may be used to reach the AIC |
| ABYC E-11 current ed., secondary [S14] | Use the manufacturer's short-circuit rating; if unpublished, 3 000 AIC per 100 Ah for most lead-acid and 5 000 AIC per 100 Ah for TPPL lead-acid and lithium ion (older default: 20 000 A at 125 V DC). Solid-state protection allowed in branch circuits only, no AIC requirement for it. Banks over 500 Ah need AIC protection at each battery's output (wording unclear per the author) |
| MarineHowTo (secondary) [S12] | Quotes the same 3 000 / 5 000 A per 100 Ah and says banks over 255 Ah need at least 5 000 AIC. Says ABYC E-13 "specifically calls out" Class T for LiFePO4 (not confirmed by Panbo [S14, S15], Battle Born [S16] or ABYC [S17]; treat as unverified) |
| ISO 10133:2012 [S2] | No interrupt-rating requirement in the clauses visible |
| ANSI/RVIA LV [S9] | Defines "interrupting rating" but sets no minimum; fuses and breakers need "a DC rating not less than the nominal system voltage" and trip-free, still operable after the fault (3-3) |
| Forum opinion [S20, S21] | "Above 10 kA, preferably 20 kA at 60 V" for 48 V; "Class T is overkill at 12 V, MRBF great for 12 and 24 V"; one dissenter says Class T-level interrupt is only needed with paralleled strings. No Victron staff statement in the thread |

Derived check (arithmetic on secondary figures, not a standard's text): at 5 000 AIC per 100 Ah, a
200 Ah LiFePO4 bank needs 10 000 AIC. An MRBF is 10 kA only at 14 V (5 kA at 32 V, 2 kA at 58 V), so
by that formula it does not qualify on a 24 V or 48 V bank.

### 1.4 Breakers versus fuses

- ABYC: breakers must be trip-free, manual reset, DC-rated at nominal voltage, with Table V AIC
  and still working after a fault; fuses need voltage rating only (2003) [S1]. Both need ignition
  protection (SAE J1171 or UL 1500) in gasoline-vapour spaces, not relevant to a picogrid [S1].
- MarineHowTo: some breakers "can literally weld shut before tripping" when the bank's short-circuit
  current exceeds their AIC; for banks over 255 Ah it advises fuses, not breakers [S12, S13].
- Victron: breakers are acceptable ("AC or DC") but selection must cover DC voltage, interrupt
  rating and wiring direction [S3].
- Breaker mounted away from the battery leaves the wire between them unprotected (search excerpt of a UL
  489 DC test paper, S28); consistent with the 7 in / 200 mm rule.

---

## 2. Conductors

### 2.1 Ampacity

ABYC E-11 (2003) Table IV, systems under 50 V, single conductor in free air at 30 C ambient,
amperes [S1]. Inside engine spaces the 105 C column is 0.85 x the outside value (e.g. 120 A to 102 A).

| AWG (mm2) | 60 C outside | 90 C outside | 105 C outside | 105 C inside engine space |
|---|---|---|---|---|
| 14 (2) | 20 | 30 | 35 | 29.8 |
| 12 (3) | 25 | 40 | 45 | 38.3 |
| 10 (5) | 40 | 55 | 60 | 51.0 |
| 8 (8) | 55 | 70 | 80 | 68.0 |
| 6 (13) | 80 | 100 | 120 | 102 |
| 4 (19) | 105 | 135 | 160 | 136 |
| 2 (32) | 140 | 180 | 210 | 178 |
| 1/0 (50) | 195 | 245 | 285 | 242 |
| 2/0 (62) | 225 | 285 | 330 | 280 |
| 4/0 (103) | 300 | 385 | 445 | 378 |

- The 60 C column explains a West Marine figure "6 AWG: 80 A outside, 46.4 A inside" quoted in a
  search excerpt (S29); it is not a conflict with 120 A / 102 A at 105 C, only a different insulation
  rating. Check which column a source means.
- The table is "for systems under 50 volts" and says to cross-check voltage drop (Note under Table IV) [S1].
- ANSI/RVIA LV Table 2 (RV/van, bundled up to 7 or 3 wires per harness): 12 AWG 22.5 A at 90 C and
  25 A at 105/125 C; 8 AWG 55 / 70 A; 4 AWG 95 / 120 A; 2 AWG 130 / 150 A; 4/0 260 A at 90 C [S9].
  These are well below ABYC's free-air 105 C values (4 AWG: 160 A), because of bundling.
- Derating for bundling and insulation: ABYC's 2003 DC text has no bundling derate (the AC table has
  one for bundles over 24 in); RVIA builds it into Table 2; the IET commentary on ISO 13297 gives
  ambient and grouping factors and 0.5 for a cable surrounded by thermal insulation over 0.5 m (search
  excerpt of S27, not read in full). A van wall cavity full of insulation is that case.
- ISO 10133:2012 refers to its Table A.1 for derating and Table A.2 for minimum dimensions; the
  preview did not show the tables values. Not found.
- Victron: no ampacity table; it gives cable length-current pairs (below) and the rule "current / 3 = mm2
  up to 5 m" [S4].

### 2.2 Voltage drop

| Source | Target |
|---|---|
| ABYC E-11 (2003) [S1] | 3 % for panelboard main feeders, bilge blowers, electronics, navigation lights and "other circuits where voltage drop must be kept to a minimum"; 10 % for other lighting and non-critical circuits (11.16.1.2.7). Length is positive source to device and back (round trip). Where ampacity and voltage-drop tables disagree, the larger conductor wins. Formula: CM = 10.75 x I x L / E (L in feet round trip; E = 0.36 V for 3 % at 12 V, 1.2 V for 10 %) |
| ISO 10133:2012 [S2] | Calculated drop at most 10 % of nominal (4.7); 3 % circuits listed: panel main conductors, navigation lights, bilge blowers, bilge pumps, other safety-vital equipment. Equipment must work from 75 % to 133 % of nominal at the battery (12 V: 9-16 V; 24 V: 18-32 V; 48 V: 36-64 V) (4.6) |
| Victron [S4] | App target below 2.5 %. Cable table assumes a 0.259 V drop over the combined positive and negative length, "excluding contact losses". Heat in the cable equals the drop percentage of the power carried |
| ANSI/RVIA LV [S9] | Only an informative appendix: conductor sizing for a maximum 10 % drop at 12 V; not part of the standard |
| Van blogs [S22] | Chart built on 3 % ("ideal") and 10 % ("less important": fans, lights, USB); author notes it is his own chart |

Arithmetic (mine, from the figures above): the Victron table value of 0.259 V is about 2.2 % of 12 V
and 1.1 % of 24 V. ABYC's 3 % at 12 V is 0.36 V, so Victron's cables are about 30 % tighter at 12 V,
and the same absolute drop is half the percentage at 24 V. A 24 V bank therefore meets the same
percentage with half the copper for the same power.

Victron recommended cable (positive plus negative total length) [S4]:

| Cross-section | up to 5 m | 10 m | 15 m | 20 m |
|---|---|---|---|---|
| 10 mm2 | 30 A | 15 A | 10 A | 8 A |
| 25 mm2 | 75 A | 38 A | 25 A | 19 A |
| 50 mm2 | 150 A | 75 A | 50 A | 38 A |
| 95 mm2 | 285 A | 143 A | 95 A | 71 A |

Parallel cables. Victron: two 35 mm2 equal one 70 mm2, "check local rules for individual fusing" [S4];
Smart Lithium: the system cable cross-section equals the string cable times the number of strings [S6].
A Canadian marine article summarising ABYC says paralleling cables to gain ampacity is not allowed,
only to cut voltage drop, because protection is rated to a single cable [S18]. Conflict, secondary
source on the ABYC side.

### 2.3 Construction, stranding, insulation, minimum size

| Item | ABYC E-11 (2003) [S1] | ISO 10133:2012 [S2] | Victron [S3, S4, S8] | ANSI/RVIA LV [S9] |
|---|---|---|---|---|
| Material | Stranded copper (Table XII) | Insulated stranded copper, fire-retardant insulation | "Flexible cable with fine strands"; avoid solid core, rigid or thick strands, solder-tinned ends | Copper, "stranded type" only |
| Stranding | Type 2 (general boat wiring) from 19 strands up to 8 AWG; Type 3 fine-strand "for any wiring where frequent flexing is involved". Solid and less-than-Type-2 "shall not be used" | Not in preview | Marine or moist places: tinned copper. Solar cable UV-resistant, tinned. MPPT manual: "flexible multi stranded copper"; a search excerpt of another Victron manual adds class 5 stranding, e.g. at least 196 strands for 25 mm2 | Not specified |
| Insulation rating | UL 1426, or SAE J378/J1127/J1128 temperature requirements; at least 50 V rating DC; Table IV columns 60-200 C | Engine spaces 70 C minimum and oil resistant; otherwise manufacturer ratings | Not specified in the text read | At least 90 C; 125 C in the engine bay or within 10 in of exhaust; SAE J1127/J1128 or NEC Table 310-104(A); sizes 6-18 AWG must be listed |
| Minimum size | 16 AWG; 18 AWG allowed inside a sheath up to 30 in outside it, inside panels, or electronics circuits under 50 V and 1 A | 1 mm2 single conductor over 200 mm; 0.75 mm2 in multicore, up to 800 mm outside the sheath | Voltage-sense wires 0.75 mm2 | Table 1 lists wire down to 20 AWG with small OCP; circuits under 1 A not covered |
| Marking | Type, voltage, size and temperature rating on the conductor | not in preview | | Marked per listing or SAE; otherwise temperature, gauge, material, insulation thickness |

Amateur practice: explorist.life uses black 2/0 and 10 AWG, "12 ga duplex" for accessories, one size
2 AWG for the MPPT-to-battery run [S22]; FarOutRide lists 2/0 (standard build) or 4/0 (high power) battery
cable, 2 AWG inverter, 4 AWG alternator, 8 AWG solar and bus-to-fuse-block [S23]. Neither page
states tinned or fine-strand construction in the text read.

---

## 3. Terminations, busbars, routing

| Topic | ABYC E-11 (2003) [S1] | ISO 10133:2012 [S2] | Victron [S3, S6, S8] | ANSI/RVIA LV [S9] |
|---|---|---|---|---|
| Joint type | Crimp with the tool designed for the connector, meeting the tensile test; ring or captive-spade terminals; friction connectors only up to 20 A and 50 mV drop at 20 A | Battery terminals must not rely on spring tension | Professional ratcheting crimp tool, tug-test every crimp; bolt lugs flush, order washer, spring ring, nut | Splice "with connectors or by soldering"; terminals per SAE J561/J858/J928; spade terminals allowed |
| Solder | "Solder shall not be the sole means of mechanical connection in any circuit" (11.16.3.7); exception: battery lugs with solder contact at least 1.5 x conductor diameter | not in preview | No soldered strands in screw terminals | Soldered splices permitted if twisted or secured first |
| Wire nuts, bullets, butt splices | Twist-on connectors "shall not be used" | not in preview | Bullet terminals and butt splices "not recommended"; WAGO 221 for up to 4 mm2 | Listed twist-on nuts allowed |
| Screw terminals | Set-screw connectors only if the screw does not bear directly on strands | not in preview | Ferrules required in standard screw terminals, recommended in pressure plate; ferrules crimped, not just tightened | Set-screw pressure connectors if identified for stranded wire |
| Stud stacking | At most 4 conductors per stud; ring terminal same nominal size as the stud | not in preview | not stated | At most 4 terminals per stud |
| Tensile test | Table XVI: e.g. 16 AWG 15 lb; 12 AWG 35 lb; 10 AWG 40 lb; 8 AWG 45 lb, 1 min | | | Table 4: 20 AWG 5 lb ... 6 AWG 50 lb |
| Torque | not stated | not in preview | Torque wrench always; use the manual. Brass fasteners, max: M4 2.9 N.m, M5 5, M6 6, M8 12, M10 24, M12 40. Smart Lithium M8 10 N.m (50-100 Ah) or 14 N.m (160-200 Ah); M10 20 N.m (300-330 Ah); MPPT 1.6 N.m | not stated |
| Support interval | At least every 18 in (455 mm); exception: battery cables within 36 in of the terminal | Every 450 mm; battery conductors to the disconnect every 300 mm, first support within 1 m of the terminal | not stated | Every 1.4 m (4.5 ft) |
| Strain relief and slack | All conductors supported or clamped to relieve strain on connections (11.16.4.1.4) | not in preview | not stated | Loop or slack where parts move; 4 in free conductor after the last securement |
| Chafe protection | Loom, conduit or tape where exposed; protect where passing bulkheads; loom must be V-2 or better (UL 94) | Sheaths or conduit; protect against chafing at bulkheads and edges | not stated | Route away from sharp edges and heat; extra wrap where clamped (non-jacketed) |
| Heat and water | At least 2 in from water-cooled and 9 in from dry exhaust; routed high above bilge water | 50 mm and 250 mm from exhaust; 25 mm above the bilge pump switch level; IP67 if below water | | 10 in from exhaust for 125 C rule |
| DC/AC separation | AC sheathed, bundled or kept apart | Several methods, or at least 100 mm apart | | At least 1/2 in gap to 120/240 V circuits |

Further points.

- Busbars and negative bus: ABYC requires the ampacity of an accessory negative bus, and the conductor
  from it to the engine negative terminal or main negative bus, to be at least that of the feeders to
  the panels it serves (11.5.2.7.3). The DC grounding bus in copper strip is at least 1/2 in x 1/32 in;
  "copper braid shall not be used" (11.18.2.5) [S1].
- Victron busbar rule of thumb: cross-section width x thickness, e.g. 10 x 5 mm = 50 mm2 for 150 A up to
  5 m; alternate inverter and solar connections along the bus; keep parallel cable length, type, lug
  and torque identical; measure current balance at full load [S3, S4].
- Marine heat-shrink guidance, from Boat Nerd (secondary, ABYC paraphrase [S18]): ring terminals
  preferred; spade lugs with upturned forks; closed-barrel lug plus heat shrink for 8 AWG and larger;
  barrel colour codes by wire size (pink/red 22-18, blue 16-14, yellow 12-10); no solder above 18 AWG.
  Victron's crimp-terminal colours are red 0.5-1.5 mm2, blue 1.5-2.5, yellow 2.5-6 [S3].
- Amateur: FarOutRide uses crimped lugs with a heat-shrink kit, says "do NOT rely on bolt's threads
  for conduction", no washer between chassis and lug, dielectric grease on bare metal [S23]. These
  agree with Victron and ABYC. Neither site states a torque value in the text read.
- Victron discourages Anderson-style connectors between battery and inverter (added resistance), car
  plugs above 10 A, and battery clamps for permanent wiring [S4].

---

## 4. Colour codes for DC

| Standard | Positive | Negative | Ground / bonding | Notes |
|---|---|---|---|---|
| ABYC E-11 (2003), Table XIV [S1] | Red | Black or yellow | Green or green with yellow stripe | Wiring diagram is the alternative if another identification method is used (11.16.2.1.4) |
| ABYC via Boat Nerd [S18] | Red | Yellow where AC "hot" is black | | Black avoided because it is AC hot in North America |
| ISO 10133:2012 (7.9-7.11) [S2] | Not black or yellow; other identification allowed if shown on the wiring diagram | Black or yellow; yellow if an AC system using black live exists | Green or green-yellow, never used as a current conductor | Avoid brown, white, light blue in DC unless clearly separated and identified as DC |
| IEC 60445:2017, 6.2.4 [S10] | Red (preferred) | White (preferred) | Green-and-yellow reserved for protective conductor; functional earth pink | |
| IEC 60445:2021, 6.2.4 [S10] | Red (shall) | White (shall) | same; functional earth pink | Wording changed from "preferred" to "shall" |
| UK/BS 7671 (2004 harmonisation, historical) [S11] | Brown (L+) | Grey (L-) | blue for mid-wire M in earthed circuits | Superseded; a search excerpt of IET guidance says current BS 7671 uses red L+, blue M, white L- (not read in full) |
| ANSI/RVIA LV (2020) [S9] | not specified | not specified | not specified | Ground returns "uniquely identified as separate from the supply conductors (i.e. color, marking, etc.)"; conductor keeps its identification along its run |
| Victron [S3] | not specified in the rev 04 text read (grep for colour finds only crimp-terminal and comms cable colours) | not specified | Earth wires yellow/green; older or foreign installations may use green alone [S5] | |
| Automotive (SAE J1128, ISO 6722, DIN 72551) | Not found as a battery-polarity rule; a search excerpt says SAE J1128 colours are "recommended" and OEM circuit codes vary | | | |
| Van-build habit [S22, S23] | Red | Black | green on AC outlets | FarOutRide lists red and black throughout; no explicit convention stated |

Conflicts and risks.

- Black negative is the habit of vans, solar kits and most commercial battery cable. It is allowed
  by ABYC and ISO until an AC system with black live conductors is present, and then both marine
  standards switch to yellow.
- IEC 60445 (the international standard) says red / white. White is the AC neutral in North American
  practice, and white battery cable is rarely stocked.
- Using colour as the only identifier is weak; ISO and ABYC both accept a wiring diagram or marking in
  place of colour.

Recommendation for the wiki: **positive red, negative black, bonding and protective conductors
green-and-yellow (or green), and "+" / "-" marks at both ends of every battery-side cable.** Reasons:
(1) red and black are the only polarities stocked for battery and solar cable in nearly every market,
including remote supply chains; (2) they match ABYC, ISO 10133, Victron imagery and the van trade, so
installers, buyers and later repairers find them familiar; (3) no AC live conductor shares the DC
enclosure in the target systems; where an AC output exists in the same enclosure, require sleeving,
marks or ISO's yellow negative so black is never ambiguous. State plainly that this departs from IEC
60445:2021 (red / white). If the owner prefers strict IEC alignment, the alternative is red / white,
accepting the sourcing cost. Never use green or green-yellow for a current-carrying conductor (ISO
10133 7.9) [S2].

---

## 5. Disconnects, isolators, labelling and documentation

| Item | ABYC E-11 (2003) [S1] | ISO 10133:2012 [S2] | Victron [S3, S8] | ANSI/RVIA LV [S9] |
|---|---|---|---|---|
| Battery switch required | In the positive of each battery or bank over 800 CCA (11.7.1.2.1) | Yes: positive for earthed negative; positive and negative for insulated two-wire (6.1) | "Recommended that if battery isolation is needed, to only isolate the positive." "It might not even be necessary": removing the main fuse also isolates | Not found |
| Exceptions | Memory electronics, safety equipment (bilge pumps, alarms, CO detectors, blowers), charging equipment may sit on the battery side | Same idea; solar and wind chargers for unattended craft allowed if individually fused close to the battery terminal | n/a | n/a |
| Location | Readily accessible, as close as practicable to the battery | Reachable "quickly and safely ... without the use of tools"; as close to the battery as practical | | |
| Rating | Continuous at least the sum of the main OCP ampacities, or the feeder ampacity if less; intermittent at least cranking current | Continuous at least the main breaker's maximum current; remote-controlled switches must permit manual operation (6.3) | Rated for the full-load DC current, 5-minute and peak current. "Some isolator switches are not designed to break current (especially DC)"; low-quality switches add resistance | |
| PV disconnect | n/a | n/a | MPPT manual: "Provide a means to disconnect all current-carrying conductors of a photo-voltaic power source"; switches "shall not be installed in a grounded conductor" if that would leave it ungrounded while energised | n/a |

Lithium and disconnects. A Panbo piece on the 2022 E-13 says the 2022 text required a switch
"independent from a BMS" and the later revision allows a contactor or relay that opens when power is
removed, closes only with power and can be overridden by a manual switch (S14). An earlier Panbo
analysis of the 2022 text, in a comment reply, says E-13 had "no mention of system connectivity"
and no separate disconnect (S15). The two Panbo accounts conflict; the standard text was not seen.

Labelling and documentation.

- ABYC E-11 (2003): each conductor must have a means to identify its function (colour code or sleeve
  or tape marks), except pigtails under 7 in; panelboards on boats with more than one system voltage
  are permanently marked with voltage and type; if colour identification is replaced by other means
  "a wiring diagram of the system indicating the method of identification is provided with each boat"
  (11.11.2.2, 11.16.2.1) [S1]. Tape markers must be at least 3/16 in wide and make two full turns.
- ISO 10133:2012: non-colour identification of DC positives allowed if "properly identified on the
  craft wiring diagrams" (7.10) [S2].
- ANSI/RVIA LV: fuseholders marked with the maximum replacement fuse size; breakers marked with
  amperage (3-4); battery-connection conductors of a solar prep labelled "+" and "-" (2-6); operational
  test of all low-voltage circuits after installation work (8-1) [S9]. No wiring-diagram requirement found.
- Victron: no general labelling or wiring-diagram requirement in the rev 04 text read; "cable
  labelling is very important" appears only for custom communication cables. Its lithium commissioning
  checklist is a documentation analogue: verify polarity, cable size, crimping, torque, tug-test, fuses,
  charger settings, and that disconnecting a BMS cable turns charge sources and loads off and back on [S6].
- Amateur: FarOutRide sells a wiring diagram that calculates wire gauge and terminal counts [S23].

---

## 6. Lithium (LiFePO4) installation norms

### 6.1 What marine guidance requires

| Item | ABYC E-13 as reported (secondary) | Other marine / RV |
|---|---|---|
| Scope | Lithium-ion systems of 600 Wh or more, about 50 Ah at 12 V; applies to all chemistries including LFP; use with E-10 ("If you are installing lithium, you need both standards") [S15, S16, S17] | |
| BMS | "Requires a BMS on all lithium batteries installed on boats" (E-13.7); the BMS keeps the battery in safe limits [S15]. The manufacturer must give BMS design parameters; an output disconnect at maximum discharge rate; a warning before an impending shutdown (Battle Born says "must", Panbo says the notes at the end of 13.7 are "recommendations, not requirements") [S15, S16]. Conflict, unresolved | RVIA: non-vented (lithium) battery installations "shall contain a safety protection system"; lithium systems "shall be listed and conform to the terms of the listing and manufacturer's installation instruction" [S9] |
| Temperature | The owner's manual (13.8) must state charge and discharge limits and temperature limits; no numeric limit was found in any E-13 summary [S15] | Victron: charge only above 5 C by default [S6, S7] |
| Mounting | Restrained per manufacturer (E-13.6.4, search excerpt); install per manufacturer (13.5.2, search excerpt); protect from water [S16] | ISO 10133: no more than 10 mm movement under twice the battery weight; terminals protected from metallic objects [S2] |
| Ventilation | No requirement found in any summary; the Panbo author notes lithium has no spillable electrolyte and "does not routinely off-gas" and questions whether E-10 electrolyte containment still applies [S15] | RVIA: vented compartments need 1.7 sq in openings within 2 in of top and bottom and ventilation to the exterior; a vented-type compartment may house lithium only if it is where a failure would not block the occupants' exit [S9] |
| Short-circuit current | Manufacturer must state it (13.8); AIC of protection must suit it (E-10/E-13 interplay) [S14, S17] | Victron: mandatory interrupt rating rule (section 1.3) [S3] |
| Other | Charging sources and alternator protection must suit lithium; "no such thing as a true drop in replacement"; mixed chemistries allowed after the revision if the maker permits, never in series; certification to SAE, IEC or UL cited by a vendor, unconfirmed [S14, S16, S17] | |
| BMS disconnect consequences | New appendix on transient voltage from charge-bus disconnects ("load dump") [S14] | Relevant to MPPT and charger input voltage if the battery drops off mid-charge |

Dates are inconsistent in the secondary sources (first publication July 2022; "after July 31, 2023"
for the effective recommendation per Panbo; July 13, 2023 in a search excerpt). Use the standard's own
dates if it is ever obtained.

### 6.2 What Victron requires for its Smart LiFePO4 batteries [S6, S7]

- Fuse the positive of every battery and every series string; fuse the positive main cable of a
  parallel bank; fuse rating no higher than the lowest of cable, battery and system rating.
- Charge above the Allowed-To-Charge minimum temperature: default 5 C, adjustable -20 to +20 C;
  below 5 C voids the warranty and "a lithium battery cell will sustain permanent damage when charged
  at temperatures below 5 C".
- Indoor, dry location; upright, or on its side with terminals not facing down (330 Ah model: upright
  only); 20 mm clearance on all four sides; mounted firmly ("can become a projectile").
- Series up to four 12.8 V or two 25.6 V batteries; parallel up to 20; series strings must have equal
  capacity and part number, ages within 3 years; charge each battery individually before series use.
- Charger settings for 12.8 V: 14.20 V absorption (2 h), 13.50 V float; 25.6 V: 28.40 / 27.00 V; full
  charge monthly, weekly for series or heavily cycled banks.
- Torque M8 10-14 N.m, M10 20 N.m; commissioning checklist as above. Cell voltage below 2 V means
  damage has set in; below 8 V (12 V battery) needs a special recovery procedure.
- Always use a BMS-controlled charger; initial charge without a BMS is "not recommended".

### 6.3 Amateur practice

FarOutRide: lithium "requires a BMS", "more sensitive than other types"; charge window 32 to 135 F
(0 to 57 C), "some brands down to 25 F"; suggests self-heated batteries [S23]. This departs from Victron's
5 C default and warranty position: 0 C is below Victron's cutoff, and Victron says cells are
permanently damaged below 5 C. No source read gives a charge-temperature limit from ABYC itself.

---

## 7. Grounding and bonding of DC negative

| Context | Position |
|---|---|
| Marine, ABYC E-11 (2003) [S1] | DC systems are two-wire; "a metallic hull, or the bonding and DC grounding systems, shall not be used as a return conductor" (11.5.2.2). Battery negative and the negative side of the DC system go to the engine negative terminal or its bus (11.5.2.7.2). If negative is connected to ground, only from the engine negative terminal or bus to the DC grounding bus, and that link "is not to carry current under normal operating conditions" (11.5.2.7.4). A DC grounding conductor may be one size under the supply conductors but not under 16 AWG (11.18.2.1). Metal non-current-carrying parts of fixed DC equipment in bilge contact are bonded to the DC grounding bus to minimise stray-current corrosion (11.17.2.3). Where AC is installed, the main AC grounding bus connects to the engine negative terminal or DC main negative bus (grounded DC) or to the DC grounding bus (ungrounded DC) (11.5.2.7.1) |
| Marine, ISO 10133:2012 [S2] | Equipotential bonding conductors green or green-yellow, can be bare, never current carrying; the AC protective conductor (ISO 13297) may connect to the engine DC negative terminal (note to 7.9). Disconnect in positive for earthed negative, both poles for insulated two-wire |
| RV and van, ANSI/RVIA LV (2020) [S9] | A metal chassis or frame at least 1.392 mm thick "shall be permitted as the return path"; the auxiliary battery's grounding terminal goes to the chassis with at least 8 AWG copper (equal to the power lead if that is larger than 8 AWG); converter enclosure bonded to the frame with at least 8 AWG; ground returns "uniquely identified"; ground terminal surfaces cleaned to bare metal or a serrated paint-cutting terminal used |
| Victron, off-grid [S5] | "Do not ground the positive or negative of the PV array" (the MPPT's PV negative is not isolated from the DC output); PV frames may be grounded, near the array or preferably at the central ground. One ground "close to the battery"; the DC ground cable carries at least the DC fuse rating in fault current. Inverter and MPPT chassis are both grounded. Victron inverters have basic DC-to-chassis isolation, so "DC negative or positive grounding is allowed" |
| Victron MPPT manual (US text) [S8] | "A single ground connection, preferably close to the battery, to prevent system issues or ground loops"; PV conductors not grounded; "system negative should be bonded to earth ground through a GFDI at one (and only one) location" because the charger has no internal ground-fault protection |
| Victron, with an AC output [S5] | RCD compulsory on all AC installations; an RCD needs a neutral-to-earth (MEN) link at the AC source, which a Victron inverter/charger makes internally when AC input is lost (earth relay); if the relay is disabled the link must be hard-wired; without a reliable ground or RCD, remove the neutral-to-chassis connection. Mobile installations (boats, vehicles): bond all touchable metal into a local earth and "follow TT principles even when the installation is off-grid". Full PE-conductor sizing: follow local rules |
| Amateur [S23, S31] | FarOutRide makes a new chassis ground point for the alternator negative, keeps high-current grounds out of wet areas. A Victron community thread shows two experienced users disagreeing on chassis versus battery-negative grounding, unresolved; one says it depends on mobile versus fixed and local rules |

Conflicts and cautions.

- Marine forbids the hull as a return; RV standard allows the chassis. For a fixed building there is
  no chassis, so the wiki should require a full two-wire return and treat any frame bond as a
  protective bond, not a current path.
- Victron's text itself has been called contradictory between section 7.7 and a diagram on DC
  grounding (search excerpt of a community post, unverified).
- Victron says the PV array is not grounded, while the US MPPT manual requires a GFDI at one point;
  the first is the EU-style statement, the second the NEC-style one. Local rules decide.
- Victron's DC isolation (basic) and PV-to-output no-isolation facts mean a PV fault can reach the
  battery side; this is why a single ground at the battery is the Victron norm.

---

## 8. Van-build practice versus the norms

Evidence base: explorist.life wire page (S22), FarOutRide electrical guide (S23), a search excerpt of
the explorist fuse calculator (S24), Renogy and DIY Solar forum excerpts (S25, S26), a Victron
community thread (S20), a YBW forum thread on Will Prowse's main-fuse testing (S21). Will Prowse's own
guides and videos were not read; his positions are known only second-hand. The owner's view is that
builders are useful, not gospel; their sites sell kits, so recommendations may follow stock.

| Practice | Who | Norm | Assessment |
|---|---|---|---|
| Fuse = 1.2-1.25 x continuous load, then pick wire | explorist [S24], Renogy and DIY Solar forum [S25, S26] | ABYC: at most 150 % of wire ampacity; ISO, RVIA, Victron: not above the wire; Victron: lower of load and cable | Works when wire is sized to the fuse afterwards. Fails when the wire was sized for voltage drop at a lower current and the fuse is then rounded up to the load figure |
| Fuse sizing "trust the manufacturer" | explorist [S22] | Victron gives min and max battery fuse per MPPT model [S8] | Agrees with Victron for products that publish a range. A commenter's question why a 300 A fuse protects 2/0 wire went unanswered; per the ABYC table, 2/0 at 105 C is 330 A outside engine spaces, so 300 A is within 100 % |
| ANL as main battery fuse | explorist (search excerpt, S24); FarOutRide uses a Blue Sea 250 A terminal fuse (MRBF-style) or a 400 A Class T on the high-power build [S23] | Victron mandates interrupt rating at least bank short-circuit current; Blue Sea ANL 6 kA, MEGA 1-2.5 kA | ANL is acceptable on small lead-acid or small LiFePO4; not on large lithium. FarOutRide's Class T on the high-power build is the better example |
| MRBF at 24 or 48 V | forum consensus "fine at 12 and 24 V, need Class T at 48 V" [S20]; ricardocello | MRBF is 10 kA only at 14 V; 5 kA at 32 V; 2 kA at 58 V; current ABYC rule gives 10 kA for 200 Ah | Interrupt rating at the actual voltage is the missing check; MRBF on a 24 V 200 Ah bank is below the ABYC per-Ah figure |
| "Class T" at the cheapest price | Renogy part rated 10 kA only [S21] | Class T spec sets no number; Victron relies on 20 kA or 200 kA parts | Amateurs buy by name not datasheet. Require the interrupt rating printed on the fuse |
| Unbranded fuses and breakers | YBW thread: junk versions, Chint MCBs 20 kA at 60 VDC noted as an exception [S21] | Victron: DC voltage, polarity and interrupt rating of breakers must be checked [S3] | Cheap AC-style breakers on DC are the pitfall; direct van-builder evidence not found beyond the forum remark |
| No main fuse | Not found documented | Victron: "A DC system should always contain a main fuse"; every consumer fused | Not seen in the pages read; both FarOutRide diagrams have a main fuse |
| Undersized negative | Not found documented | ABYC: negative bus and feeder at least equal to the sum of the feeders (11.5.2.7.3) | FarOutRide's negative matches the positive size (2/0 or 4/0), which agrees with the norm |
| Chassis as negative return and ground | FarOutRide grounds alternator negative to chassis [S23] | ANSI/RVIA allows it; ABYC forbids hull return; Victron prefers one ground at the battery | Acceptable in a vehicle under RVIA; not transferable to a fixed building |
| Voltage drop chart 3 % / 10 % | explorist [S22] | ABYC 3 % and 10 % classes; Victron below 2.5 % | Chart follows ABYC; Victron is stricter for main lines; the author warns it is a generalisation |
| Solder joints | Not used by FarOutRide (crimp and heat shrink) [S23] | ABYC: not sole connection; Victron: no soldered ends in screw terminals; RVIA permits | Amateurs follow marine here; RVIA is the outlier |
| Cold charging | FarOutRide: 0 C window, some to -4 C, self-heated batteries [S23] | Victron: 5 C default, below voids warranty | 0 C charging risks damage per Victron; follow the battery maker, default 5 C |
| Parallel cables for current | Victron endorses two 35 mm2 = 70 mm2 | ABYC (secondary): not allowed to raise ampacity | Conflict between norms; if used, fuse each conductor path or the whole pair per ABYC and manufacturer |
| Solid-core wire | FarOutRide: solid 120 V outlet wire "shouldn't be used in vans/RVs/boats" [S23] | ABYC Table XII; RVIA stranded only; Victron avoid solid | Agrees with norms |

---

## Candidate requirements for the code (for the owner to accept or reject)

Drawn from the overlap of sources; each is a draft sentence, not a quotation.

1. A fuse or breaker must be in the positive conductor at each battery, within 200 mm (7 in) of the
   post, or within 1 m / 1.8 m if the conductor is fully sheathed (ISO) and as close as practicable.
2. Every branch conductor has its own overcurrent device, rated no higher than that conductor's
   ampacity for its insulation temperature and installation (ISO, RVIA, Victron).
3. The protective device's DC voltage rating is at least the highest system voltage, including charge
   voltage; interrupt rating at that voltage is at least the bank's prospective short-circuit current
   (Victron mandatory; ABYC AIC rule).
4. Prefer fuses for battery-level protection of lithium; breakers only with a DC rating, polarity
   marking and interrupt rating at least the same (Victron, ABYC).
5. Conductors: stranded copper, fine-strand (class 5 or better) for flexible runs, tinned in damp or
   marine places, 90 C minimum (105 C where hot), not solid.
6. Voltage drop at most 3 % for main feeders and charge circuits; 10 % only for non-critical loads
   (ABYC); Victron's 2.5 % where practical.
7. Crimped lugs with the correct tool and tug test; no solder as sole connection; ferrules in screw
   terminals; no more than four conductors per stud; torque to the manufacturer's value with a torque
   tool; support cables at most every 450 mm and relieve strain; protect against chafe.
8. Colours: red positive, black negative, green-yellow protective or bonding, "+" and "-" marks at
   both ends; document the departure from IEC 60445:2021.
9. A readily accessible disconnect in the positive near the battery, rated for DC and for the
   full-load current, and a removable main fuse; charge sources individually fused at the battery.
10. A single ground point near the battery; PV conductors not grounded; frames bonded to the central
    ground; DC ground conductor at least as large as the fuse can clear.
11. Lithium: BMS with output disconnect, charging only above the battery maker's temperature limit
    (default 5 C), battery restrained and clear of moisture, no condensation, per maker's clearances.
12. A wiring diagram with fuse ratings and wire sizes ships with, or is fixed to, every installation.

## Gaps and open items

- ABYC E-11 and E-13 current text not read; only the 2003 E-11 and secondary summaries. Check the
  interrupt-rating clause, the lithium clause and whether ABYC E-13 names Class T.
- ISO 13297:2020 Table A.1 / A.2 values and the IEC 60445 colour table for the mid-wire M not read.
- Blue Sea Systems primary articles (AIC, ANL vs MRBF) returned HTTP 403; its positions come via
  MarineHowTo and a retailer excerpt.
- Victron's own MRBF/MEGA/Class T rating for specific parts not published beyond the table in
  Wiring Unlimited; community thread had no staff reply.
- Will Prowse's current guidance not read. EN 1648-2 (EU leisure vehicles, 12 V ELV) and NFPA 1192
  were identified but not read; the ANSI/RVIA LV standard stands in for RV practice.
- No numeric ventilation requirement for LiFePO4 found in any marine source; no temperature limit in
  ABYC E-13 summaries.

---

## Sources

Grades: P = primary, S = secondary summary, A = amateur practice. "Read" says what was actually opened.

- **S1** (P) ABYC E-11 AC and DC Electrical Systems on Boats, July 2003 edition. Read in full text
  (about 3 900 lines): 11.5, 11.7.1.2, 11.11, 11.12, 11.16-11.18, Tables IV, V-A, XII, XIV, XVI.
  https://law.resource.org/pub/us/cfr/ibr/inc/ansi/abyc.e-11.2003.pdf
- **S2** (P) ISO 10133:2012 Small craft, electrical systems, extra-low-voltage d.c. installations,
  public preview. Read clauses 4-9 visible in the preview; tables A.1 and A.2 not visible. Withdrawn.
  https://cdn.standards.iteh.ai/samples/45867/0dceabde692c42a2abe7f580f3b099ff/ISO-10133-2012.pdf
- **S3** (P) Victron Energy, Wiring Unlimited rev 04 (08/2026), PDF. Read the sections on torque,
  DC wiring, fuses, lithium interrupt rating, isolators, terminations.
  https://www.victronenergy.com.au/upload/documents/Wiring-Unlimited.pdf
- **S4** (P) Victron, Wiring Unlimited, DC wiring (web). Read in full.
  https://victronenergy.com/media/pg/The_Wiring_Unlimited_book/en/dc-wiring.html
- **S5** (P) Victron, Wiring Unlimited, Ground, earth and electrical safety (web). Read in full.
  https://www.victronenergy.com/media/pg/The_Wiring_Unlimited_book/en/ground,-earth-and-electrical-safety.html
- **S6** (P) Victron Lithium Battery Smart manual, Installation. Read in full.
  https://www.victronenergy.com/media/pg/Lithium_Battery_Smart/en/installation.html
- **S7** (P) Victron Lithium Battery Smart manual, Appendix. Read (temperature, voltages, charging).
  https://www.victronenergy.com/media/pg/Lithium_Battery_Smart/en/appendix.html
- **S8** (P) Victron SmartSolar MPPT 150/35 and 150/45 manual, Installation. Read.
  https://www.victronenergy.com/media/pg/Manual_SmartSolar_MPPT_150-35__150-45/en/installation.html
- **S9** (P) ANSI/RVIA LV 2020, Standard for Low Voltage Systems in Conversion and Recreational
  Vehicles. Read in full (Table 1 extraction garbled and not quoted).
  https://ia601909.us.archive.org/9/items/ansi-rvia-lv-standard-for-low-voltage-systems-in-conversion-and-recreational-vechicles/ANSI%20RVIA%20LV%20-%20Standard%20for%20Low%20Voltage%20Systems%20in%20Conversion%20and%20Recreational%20Vechicles.pdf
- **S10** (P) IEC 60445:2017 and IEC 60445:2021 previews, clause 6.2.4 (DC line conductors). Read the
  clause only.
  https://cdn.standards.iteh.ai/samples/22582/41312603fd8d4435973ca5c6d4591143/IEC-60445-2017.pdf
  and https://cdn.standards.iteh.ai/samples/104151/245002a9257645fdbc639f87ad465f14/IEC-60445-2021.pdf
- **S11** (S) IET Wiring Matters, harmonised colours and alphanumeric marking (c. 2004, historical).
  Read the DC table lines only.
  https://electrical.theiet.org/media/1720/harmonised-colours-and-alphanumeric-marketing.pdf
- **S12** (S) MarineHowTo, Battery Banks and Over-Current Protection (Compass Marine How To). Read.
  https://marinehowto.com/?p=17412
- **S13** (S) MarineHowTo "Battery Bank Fusing" text as hosted on pbase. Read.
  https://pbase.com/mainecruising/battery_fusing
- **S14** (S) Panbo, "ABYC publishes updated battery and electrical standards" (E-11 AIC rules,
  E-13 revision). Read; article date not confirmed.
  https://panbo.com/abyc-publishes-updated-battery-and-electrical-standards/
- **S15** (S) Panbo, "ABYC Ratifies E-13, their first lithium battery standard" (Ben Stein). Read.
  https://panbo.com/?p=98035
- **S16** (S, vendor) Battle Born Batteries, 7 things about E-13. Read; no section numbers.
  https://battlebornbatteries.com/7-things-you-should-know-about-e-13-the-latest-abyc-standards-for-lithium-batteries/
- **S17** (P/S) ABYC, "Myth vs fact: lithium ion batteries". Read; no numeric limits.
  https://abycinc.org/myth-vs-fact-lithium-ion-batteries/
- **S18** (S) Canadian Yachting / Boat Nerd, DC electrics part 3 (ABYC paraphrase). Read.
  https://boattest.com/article/boat-nerd-boat-dc-electrics-part-3.md
- **S20** (A) Victron Community, "AIC ratings for LiFePO4 - Class T - MRBF" (user posts, no staff).
  Read. https://community.victronenergy.com/t/aic-ratings-for-lifepo4-class-t-mrbf/16468
- **S21** (A) YBW forum, "Will Prowse testing main battery fuses", page 2. Read; his conclusions not
  in the page. https://forums.ybw.com/threads/will-prowse-testing-main-battery-fuses.624960/page-2
- **S22** (A) explorist.life, what wire to use for a DIY camper solar system. Read.
  https://explorist.life/what-wire-to-use-for-diy-camper-solar-system/
- **S23** (A) FarOutRide, Electrical System Guide for DIY Van Conversion. Read first 200 000
  characters; wire, fuse and distribution sections not fully seen.
  https://faroutride.com/electrical-system/
- **S24** (A) explorist.life fuse sizing calculator. Search excerpt only (page fetch redirected,
  then blocked). https://shop.explorist.life/fuse-sizing-calculator/
- **S25** (A) DIY Solar Forum, "Is there a wire fuse size chart for 24v". Search excerpt only (403).
  https://diysolarforum.com/threads/is-there-a-wire-fuse-size-chart-for-24v.43097/
- **S26** (A, vendor) Renogy, fuse and wire sizing guide. Search excerpt only.
  https://www.renogy.com/blogs/learn-center/wire-and-fuse-sizing-guide
- **S27** (S) ISO 13297:2020 listing and IET commentary on boat wiring. Search excerpts only.
  https://www.iso.org/standard/69551.html and
  https://electrical.theiet.org/wiring-matters/years/2023/98-november-2023/boat-wiring-why-bs-7671-doesn-t-address-all-the-issues/
- **S28** (S) DC breaker rating excerpts (Schneider FAQ, McMaster listings, UL 489 DC test paper).
  Search excerpts only. https://www.se.com/us/en/faqs/FA120732/
- **S29** (S) West Marine, Marine Wire Size and Ampacity. Search excerpt only (page returned 404).
  https://www.westmarine.com/WestAdvisor/Marine-Wire-Size-And-Ampacity.html
- **S31** (A) Victron Community, "Grounding to chassis" (users, no staff). Read.
  https://community.victronenergy.com/t/grounding-to-chassis/51821.md
- Identified but not read: EN 1648-2:2018 (EU leisure vehicles 12 V d.c.)
  https://standards.iteh.ai/catalog/standards/cen/5ece93ae-6359-48b5-9908-3cec46a65073/en-1648-2-2018 ;
  NFPA 1192 https://www.rvia.org/standards-regulations/standards-compliance/association-and-ansi-standards ;
  Blue Sea Systems DC Main Overcurrent Protection Requirements
  https://www.bluesea.com/support/articles/Circuit_Protection/99/DC_Main_Overcurrent_Protection_Requirements
  (403).
