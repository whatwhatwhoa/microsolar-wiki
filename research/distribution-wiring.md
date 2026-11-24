# Distribution wiring: cable you can buy, fakes, board hardware, layouts

Research note behind the planned page "Distribution wiring: what to buy and how to lay it out" (and
the DIST- rules). It does not repeat `industry-norms.md` (fuse types, ABYC/ISO ampacity tables,
voltage drop, terminations, torque, colours, support intervals for boats and RVs): read that first.
Every claim carries a tag `[S#]`; the Sources list at the end gives the URL, the grade and what was
actually read. Read 2026-11-23.

## How to read this note

- **Grades.** (P) primary: the standard text or official preview, a manufacturer datasheet, a
  regulator or government guideline. (S) secondary: trade press, a reputable summary, a reproduced
  table. (A) anecdotal: forums, videos, shop listings.
- **"Search excerpt"** means only a search-engine snippet was seen; the page itself was not read
  (blocked, 403, or not opened). Such values are leads, never the only source for a rule.
- **Standards are paywalled.** IEC TS 62257-9-4, IEC 60364-5-52, BS 7671, ISO 6722, SAE J1128 and
  EN 50618 tables were **not** read. Values from them come through manufacturer datasheets that cite
  them (named in each row). No clause number or value was guessed; "not found" means not found.
- **"My arithmetic"** marks numbers I computed from sourced inputs. They need checking, not citing.
- The code's branch classes (from `safety-model.md`): limited 3 A fuse / 1.0 mm², standard 8 A /
  1.5 mm², power 10 A / 1.5 mm²; voltage drop 3 % / 10 %; stranded copper.

## Key findings for the code

1. **There is no 8 A blade fuse.** The Littelfuse ATO range is 1, 2, 3, 4, 5, 7.5, 10, 15, 20, 25,
   30, 35, 40 A, all 32 V DC, 1000 A interrupting rating [S21]; MINI is 2-30 A with the same steps
   (search excerpt) [S22]. The "standard 8 A" class cannot use the commonest branch fuse. Options:
   7.5 A blade fuse, or an 8 A fuse of another family (5x20 mm glass or ceramic, DIN MCB) after
   checking its DC rating. Flag for the owner.
2. **The code's wire sizes fit the flexible-cord ratings, single and in free air.** H05VV-F two- or
   three-core, 30 °C, IEC 60364-5-52 reference method E: 0.75 mm² 6 A, 1.0 mm² 10 A, 1.5 mm² 16 A,
   2.5 mm² 25 A, 4 mm² 32 A [S4]. BS 7671 Table 4F3A gives 0.5 mm² 3 A, 0.75 mm² 6 A (as quoted by
   a cable maker) [S7]. So 1.0 mm² >= 3 A and 1.5 mm² >= 10 A hold.
3. **Bundling and heat break that margin.** Temperature factors for 70 °C PVC cord: 35 °C 0.91,
   40 °C 0.82, 45 °C 0.71, 50 °C 0.58 [S4, S7]. Grouping factors (bunched, IEC 60364-5-52 Table
   B.52.17, search excerpt of an unofficial copy): 2 circuits 0.80, 3 0.70, 4 0.65, 6 0.57, 9 0.50
   [S49]. My arithmetic: 1.5 mm² in a bundle of 6 branches under a 40 °C roof = 16 x 0.57 x 0.82 =
   7.5 A, below both the 8 A and 10 A fuses. 2.5 mm² gives 11.7 A. Rule candidate: more than 3
   branch cables bundled together, or a run through a hot roof space, steps up to 2.5 mm².
4. **The size printed on a cable is not a measurement; its resistance is.** IEC 60228 defines the
   nominal area as a "value that identifies a particular size of conductor but is not subject to
   direct measurement"; each size must meet a maximum resistance [S2]. Undersized and CCA cable
   is documented in the UK (two sizes under; 1.5 mm² measuring 0.8 mm²) [S33, S34, S35], Nigeria
   (cables over 1000 ohm against a 12 ohm limit, copper-coated iron; search excerpts) [S37], South
   Africa (CCA and non-compliant conductors in grey imports; search excerpts) [S40] and Australia
   (CCA power cable recall) [S43]. A loop-resistance check of a whole reel with a cheap multimeter
   catches all of these (section 3.4).
5. **Solid conductors: the sources split.** Victron, ABYC, the GTZ solar-home-system standard and
   the Sri Lankan stand-alone guideline all say flexible stranded only [S26, S28, S29;
   industry-norms S1, S3]. But IEC TS 62257-9-4's own Annex A draws its d.c. length chart for
   "1000RO2V" (a fixed-installation cable) and its a.c. chart for H05VV-F (contents list only)
   [S1]. Safer value and the code's choice: stranded (class 5 flexible preferred) everywhere.
6. **DC MCBs on long thin branches may not trip fast.** IEC 60898-2 DC instantaneous trip: type B
   above 4 to 7 x In, type C above 7 to 15 x In [S19]. My arithmetic: a 10 A type C breaker needs
   70-150 A to trip at once; a short at the end of 20 m of 1.5 mm² at 24 V draws about 24 V / 0.53
   ohm = 45 A, so it trips only on the slow thermal element. A blade fuse at 350 % opens in 0.02-0.5
   s [S21]. Fuses suit small DC branches better than C-curve breakers.
7. **Polarised DC breakers must be wired as marked, and the marking can be counter-intuitive.**
   IEC 60898-2: terminals "shall be marked with + or - if necessary" [S19]. ABB S200M UC: for a
   top-fed breaker, terminal 1 to (-) and terminal 3 to (+); wrong polarity "may cause damage"
   [S20]. Cheap listings claim "no positive and negative poles" (A) [S48].
8. **Enclosure IP ratings in solar guidelines differ widely:** indoor IP32 / outdoor IP55 (GTZ
   2000) [S28]; indoor IP54 / outdoor IP65 (Sri Lanka) [S29]; indoor IP20 / outdoor IP65 (Qatar)
   [S30]. Safer value: IP54 indoor where dust or insects are common, IP65 outdoors, plastic boxes
   only (GTZ: "no metal boxes") [S28].
9. **One field-tested house-wiring standard exists for SHS** (GTZ 2000, via energypedia) [S28]:
   stranded flexible copper everywhere; surface cable fixed every 15-20 cm; overhead cable lowest
   point >= 2.8 m above ground; buried >= 0.5 m with mechanical protection (1 m optional); switches
   ~1.2 m above the floor; DC-rated switches only; junction boxes or screw/block connectors or crimp
   ferrules; no field soldering, no wire nuts; no fuse in a grounded conductor.

---

## 1. Cable types an installer can actually buy

### 1.1 Conductor classes (IEC 60228)

| Class | Meaning [S2] | Typical cables | Fit for 12/24 V distribution |
|---|---|---|---|
| 1 | Solid | House wire 60227 IEC 01 (H07V-U) 1.5-10 mm² [S3]; twin-and-earth 6242Y 1.0-2.5 mm² [S12] | No: breaks with flexing, poor in crimps and ferrules (section 1.3) |
| 2 | Stranded (few, thick strands) | 60227 IEC 01 (H07V-R) [S3]; twin-and-earth 4 mm² and up [S12] | Acceptable for fixed runs in conduit; not for cords |
| 5 | Flexible (fine strands) | H05VV-F, H03VV-F, H07V-K, H07RN-F, H1Z2Z2-K [S4, S5, S10, S11] | Yes: the default |
| 6 | More flexible than class 5 | H01N2-D welding cable (search excerpt) [S17] | Yes: battery leads |

Classes 1 and 2 "are intended for use in cables for fixed installations. Classes 5 and 6 are
intended for use in flexible cables and cords but may also be used for fixed installations" [S2].
IEC 60228 covers 0.5 mm² to 2 500 mm² [S2]. Standard sizes seen in the datasheets read: 0.5, 0.75,
1.0, 1.25 (UK only, not harmonised), 1.5, 2.5, 4, 6, 10, 16, 25, 35, 50 mm² [S5, S13].

### 1.2 Cable families compared

| Cable (codes) | Construction | Rating | Use in a picogrid | Source |
|---|---|---|---|---|
| **H05VV-F** = 60227 IEC 53, UK 318-Y (2-5 cores, round) | Class 5 copper, PVC insulation, PVC sheath; 0.75-4 mm² | 300/500 V, 70 °C conductor | Indoor branch cable and cords; the best all-round choice indoors | [S4, S5] |
| **H03VV-F / H03VVH2-F** (round / flat "figure-8") | Class 5, PVC/PVC, 0.5 and 0.75 mm² only | 300/300 V, 70 °C | Light cords only (limited 3 A class at 0.75 mm²); flat cord is the harmonised zip cord | [S6, S7] |
| **H07RN-F** = 60245 IEC 66 | Class 5, rubber insulation, heavy polychloroprene sheath | 450/750 V; standard 60 °C conductor; Lapp "enhanced" 90 °C, UV and water resistant | Outdoor runs, cords that get walked on, wet places | [S10]; IEC 66 = H07RN-F by supplier labelling (search excerpt) [S50] |
| **60227 IEC 01** (H07V-U / H07V-R) single core | Class 1 or 2, PVC, no sheath; 0.7 mm insulation at 1.5 mm² | 450/750 V, 70 °C | In conduit or trunking only; avoid class 1 | [S3] |
| **60227 IEC 02** (H07V-K) single core | Class 5, PVC, no sheath | 450/750 V | In conduit, inside boxes, battery-side links | [S3] (clause heading only) |
| **Twin-and-earth** 6242Y (BS 6004) | Flat; class 1 solid at 1.0-2.5 mm², class 2 from 4 mm²; earth conductor bare and smaller (1.0 mm² in 1.5 mm² cable) | 300/500 V, 70 °C; "not suitable for underground laying" | Avoid: solid, and the bare earth tempts use as the negative | [S12] |
| **NYM** (German sheathed house cable) | Not read | | Treat like twin-and-earth until a datasheet is read | not found |
| **Automotive FLRY** (ISO 6722) | Single core, thin-wall PVC, class B | 60 V; -40 to +105 °C (search excerpt) | Inside the battery box and short links; needs loom or conduit in a building | [S16] |
| **Automotive GPT / GXL / TXL** (SAE J1128) | Single core; GPT PVC (85 °C), GXL/TXL thin-wall XLPE (125 °C); TXL 0.4 mm wall at 22 AWG (search excerpts) | J1128 scope: "nominal system voltage of 60 VDC (25 VAC) or less" | As FLRY; sold by AWG | [S15] (abstract read), [S16] |
| **PV cable H1Z2Z2-K** (EN 50618) | Single core, class 5 **tinned** copper, halogen-free cross-linked insulation and sheath | 1500 V DC; -40 to +90 °C, 120 °C for 20 000 h; ozone and UV resistant; AD8 water; direct burial | Outdoor runs, PV, any run in sun; two singles needed per circuit | [S11] |
| **"Speaker" / zip cord** (unbranded) | Often CCA; sold by AWG; insulation usually unmarked | none stated | Avoid unless marked copper with a voltage and current rating | Monoprice, retailer listings (search excerpt) [S51] |
| **Welding cable H01N2-D** (EN 50525-2-81) | Class 6 (Topcable says class D), rubber | 100/100 V, 85 °C (search excerpts, Prysmian) | Battery and inverter leads; Prysmian markets it as battery cable | [S17] |

Notes.

- **Ratings in different columns are not comparable.** H05VV-F is rated at 30 °C ambient [S4];
  H1Z2Z2-K at up to 60 °C ambient [S11]; H07RN-F enhanced at 30 °C with a 90 °C conductor [S10].
  Terminals limit the useful rating: a WAGO 221 is marked T85 (85 °C surrounding air) [S24].
- **Harmonised codes in plain words** (from the datasheets read): H = harmonised; 03/05/07 =
  300/300, 300/500, 450/750 V; V = PVC, R = rubber, N = polychloroprene sheath; -F flexible,
  -K flexible for fixed wiring, -U solid, -R stranded [S3, S4, S5, S10]. Marking on the sheath is
  the buyer's first check, but it can be forged (section 3.2).
- **Sri Lankan guideline:** "Not to use cable with coarse strands", "Not to use non-flexible
  cables", "Not to use AC cables for DC applications" [S29]. The last point conflicts with
  IEC TS 62257-9-4, which charts an AC cord (H05VV-F) and a building cable for d.c. use [S1], and
  with every datasheet read: insulation rated 300/500 V is rated for the voltage regardless of
  a.c. or d.c. at 12/24 V. Not adopted.
- **Practical Action / SCODE (Kenya)** user guide: "Generally, cables of 2.5mm sq., 4.0 mm sq. and
  6.0mm sq. are used" in solar home systems [S46]. Field practice only.

### 1.3 Why solid wire is a problem in DC distribution

- Rules that forbid it: ABYC "solid and less-than-Type-2 shall not be used"; Victron "avoid solid
  core, rigid or thick strands" (both in `industry-norms.md` S1, S3); GTZ: "Stranded and flexible
  insulated copper wires and cables must be used for all outdoor and indoor installations" [S28].
- Ferrules are made for fine-stranded wire; Victron requires ferrules in standard screw terminals
  (industry-norms S3). A solid conductor cannot take a ferrule.
- Crimps: no general ban was found. Some insulated terminal ranges are listed for solid wire (TE
  PLASTI-GRIP "solid or stranded copper"; ABB lists ring and fork terminals for solid wire in set
  ranges) (search excerpts) [S52]. The rule is "only a terminal listed for solid wire, with the
  matching tool", which installers cannot check in a market. Simpler: no solid wire.
- WAGO 221 lever connectors accept solid, stranded and fine-stranded 0.2-4 mm² (fine-stranded
  from 0.14 mm²) [S24], so lever connectors are the one joint that works for both.
- Twin-and-earth adds a second trap: its earth conductor is bare and one size smaller (1.5 mm²
  cable has a 1.0 mm² earth; 2.5 mm² has 1.5 mm²) [S12]. Used as the DC negative, it is
  uninsulated and undersized.

### 1.4 AWG to mm²

ASTM B258 solid-wire areas (trueCABLE table) [S14]; nearest metric size as one maker maps it
(Balluff, search excerpt) [S14]; next metric size up is the safe substitute (Rapid, search excerpt)
[S14].

| AWG | Area, mm² | Balluff "frequently used" metric | Safe metric substitute (next size up) |
|---|---|---|---|
| 22 | 0.326 | 0.34 | 0.5 |
| 20 | 0.519 | 0.5 | 0.75 |
| 18 | 0.823 | 0.75 | 1.0 |
| 16 | 1.31 | 1.5 | 1.5 |
| 14 | 2.08 | 2.5 | 2.5 |
| 12 | 3.31 | 4 | 4 |
| 10 | 5.26 | 6 | 6 |
| 8 | 8.37 | 10 | 10 |
| 6 | 13.3 | 16 | 16 |
| 4 | 21.2 | 25 | 25 |
| 2 | 33.6 | 35 | 35 |
| 1/0 | 53.5 | | 70 (50 is smaller) |
| 2/0 | 67.4 | | 70 |

18 AWG is larger than 0.75 mm²; 20 AWG is larger than 0.5 mm²; 16 AWG is smaller than 1.5 mm².
Every three gauge steps doubles the area (LEX Products, search excerpt) [S14].

---

## 2. Current ratings of flexible cords and small cables

### 2.1 Tabulated ratings, single cable, 30 °C

| mm² | H03VV-F / H05VV-F 2-3 core, BS 7671 4F3A or IEC 60364-5-52 method E [S4, S7] | H05VV-F 4-5 core (three-phase basis) [S4] | H07RN-F enhanced, 90 °C conductor, 2-5 core [S10] | 60 °C rubber flexible, BS 7671 4F1A, 2-core [S8] | H1Z2Z2-K single, free air / on surface / two touching, up to 60 °C ambient [S11] |
|---|---|---|---|---|---|
| 0.5 | 3 A | | | | |
| 0.75 | 6 A | 6 A | | | |
| 1.0 | 10 A | 10 A | 17 A | | |
| 1.5 | 16 A | 16 A | 23 A | | 30 / 29 / 24 A |
| 2.5 | 25 A | 20 A | 32 A | | 41 / 39 / 33 A |
| 4 | 32 A | 25 A | 42 A | 30 A | 55 / 52 / 44 A |
| 6 | not made in H05VV-F | | 54 A | 39 A | 70 A free air (search excerpt) [S11] |

- Top Cable states its column as "Reference method E for one cable with adequate ventilation
  according to IEC60364-5-52 in open air at 30 °C ambient temperature" [S4].
- **Conflict at 2.5 mm²:** an Italian H05VV-F datasheet gives 20 A for two-core (search excerpt)
  [S53]; Top Cable gives 25 A [S4]. Top Cable's 4-5 core value is 20 A. Safer value for a two-core
  2.5 mm² branch: 20 A. The code's fuses (3-10 A) sit far below either.
- 1.25 mm² (UK only) is 13 A in an older BS 6500 table (search excerpt) [S53]; not a harmonised
  size [S5].
- Voltage drop per amp per metre (DC, 60 °C conductor, BS 7671 4F3B via Eland): 0.5 mm² 93 mV/A/m,
  0.75 mm² 62 mV/A/m [S7]. Top Cable (70 °C): 0.75 62.2, 1.0 46.6, 1.5 31.8, 2.5 19.1, 4 11.8
  V/(A·km) for two-core [S4]. These include both conductors.

### 2.2 How bundling and heat derate them

The method (IET Wiring Matters, explaining BS 7671 Appendix 4, which takes most ratings from IEC
60364-5-52) [S9]: installed capacity Iz = tabulated It x Ca (ambient) x Cg (grouping) x Ci (thermal
insulation) x Cc (fuse type or buried). The fuse rating In must not exceed Iz, and its operating
current I2 must not exceed 1.45 x Iz. Cc = 0.725 applies to semi-enclosed (rewirable) fuses.

| Factor | Values | Source |
|---|---|---|
| Ambient, 70 °C PVC cord (Ca) | 20 °C 1.15; 25 °C 1.08; 30 °C 1.00; 35 °C 0.91; 40 °C 0.82; 45 °C 0.71; 50 °C 0.58; 55 °C 0.41 | [S4, S7] |
| Ambient, PV cable (above 60 °C) | 70 °C 0.91; 80 °C 0.82; 90 °C 0.71; 100 °C 0.58; 110 °C 0.41 | [S11] |
| Grouping, bunched in air, on a surface, embedded or enclosed (Cg) | 1 circuit 1.00; 2 0.80; 3 0.70; 4 0.65; 5 0.60; 6 0.57; 7 0.54; 8 0.52; 9 0.50; 12 0.45; 16 0.41; 20 0.38 | IEC 60364-5-52 Table B.52.17, search excerpt of an unofficial copy [S49]; not verified |
| Thermal insulation over 0.5 m (Ci) | 0.5 | `industry-norms.md` S27 (search excerpt) |
| Breakers side by side (ABB S200M UC) | 1 adjacent 0.95; 2 0.90; 3 0.86; 4 0.82; 5 0.795; 6 0.78; 7 0.77 (not needed with spacers) | [S20] |
| Cords coiled or covered on load | reduce; reel factors 85 % (1 layer) to 35 % (4 layers) as a guide | BS 7671 4F1A notes via Eland [S8] |

- Grouping factors assume a group of "similar equally loaded" cables (forum quote of the standard,
  search excerpt) [S49]; DC branches rarely all run at their fuse rating, but the rule In <= Iz
  is written for the worst case.
- My arithmetic for the code's classes (1.5 mm² H05VV-F, It = 16 A):

| Situation | Iz | 8 A fuse | 10 A fuse |
|---|---|---|---|
| Single, 30 °C | 16 A | OK | OK |
| 3 bunched, 30 °C | 11.2 A | OK | OK |
| 6 bunched, 30 °C | 9.1 A | OK | **fails** |
| 3 bunched, 40 °C roof | 9.2 A | OK | **fails** |
| 6 bunched, 40 °C roof | 7.5 A | **fails** | **fails** |
| 2.5 mm², 6 bunched, 40 °C | 11.7 A | OK | OK |

---

## 3. Counterfeit and substandard cable

### 3.1 What the fakes are

| Defect | Evidence | Where | Grade |
|---|---|---|---|
| Conductor smaller than marked | Kaydour armoured cable: "Conductors are up to two standard sizes smaller than that marked", excessive conductor resistance, from India, not BASEC approved (2009) | UK [S33] | P (National Grid bulletin quoting BASEC) |
| Half the copper in flex and house wire | Atlas Kablo (Turkey): "only 50% of the specified copper", 1.5 mm² measuring 0.8 mm²; sample marked "TSE <HAR> ATLAS KABLO 3183Y HO5VV-F 3G 1SQMM" | UK [S34]; 11 million metres recalled in 2010, incl. H05VV-F 2-5 core [S35] | S |
| Copper-coated iron or steel, very high resistance | SON: conductor resistance standard 12 ohm, seized cables "over 1000 Ohms"; "copper coated cables, some of them are iron" (2019-2020) | Nigeria [S37] | S, search excerpts |
| Cloned brands | SON seized over 30 million naira of counterfeit cables; importers "cloned popular brands" (2024) | Nigeria [S36] | P |
| CCA in power cable, insulation not cross-linked | E Cables CCA power cable recall (sold 2011-2014) | Australia [S43] | P |
| CCA and non-compliant conductors in imports, SANS 1507 failures | Trade-press claims; importers swap copper for aluminium without changing the model number | South Africa [S40] | S, search excerpts |
| Insulation fails elongation and flame tests | DTI-BPS ordered P737 000 of thermoplastic wire destroyed (PNS 35-1) (2023) | Philippines [S39] | S, search excerpts |
| Extension cables and sockets | KEBS intercepted about 24 000 substandard extension sockets/cables (2025); commentary blames thinner copper or copper-coated aluminium | Kenya [S38] | S, search excerpts; no KEBS CCA cable finding seen |
| Mislabelled cable type | Two different cables both sold as "6491B" (90 °C H07Z vs 70 °C H07Z1) | UK [S44] | S |
| "Undersized" defined by resistance | Malaysian Energy Commission: a conductor that "does not meet the minimum cross-sectional area as determined by its specific resistance" | Malaysia [S47] | S, search excerpt |

The ACI (UK) estimated about a fifth of UK cable supply may be "unsafe, non-approved or
counterfeit" [S35]. No equivalent figure was found for Africa or Asia.

### 3.2 Markings and certification marks

- Harmonised and national marks to look for: `<HAR>` (EU harmonised), BASEC (UK), ISI mark under
  IS 694 (India: PVC cables are under the 2003 Quality Control Order, search excerpt) [S41], PS
  mark or ICC sticker (Philippines; ICC is a hologram, checkable with the ICC Verification App,
  search excerpt) [S39], KEBS (Kenya), SONCAP/MANCAP (Nigeria, not read).
- **Marks are forged.** The Atlas Kablo cable that held half its copper carried `<HAR>` and a TSE
  mark [S34]; SON reports cloned brands [S36]; DTI found a PS mark with no valid licence (search
  excerpt) [S39]. Marking is a first filter, not proof.
- A complete marking on the sheath shows maker, type code (e.g. H05VV-F), cores and size (3G1.5),
  voltage (300/500 V) and usually year [S34]. No marking at all on power cable: do not buy.

### 3.3 What a real cable looks like (reference values)

| Size | Stranding, H05VV-F (Doncaster) [S5] | Area from strands (my arithmetic) | Max resistance, class 5, 20 °C [S13] | Insulation / sheath, nominal [S5] |
|---|---|---|---|---|
| 0.75 mm² | 24 x 0.20 mm | 0.754 mm² | 26.0 ohm/km | 0.6 / 0.8 mm (2-core) |
| 1.0 mm² | 32 x 0.20 mm | 1.005 mm² | 19.5 ohm/km | 0.6 mm |
| 1.5 mm² | 30 x 0.25 mm | 1.47 mm² | 13.3 ohm/km | 0.7 / 0.8 mm (2-core) |
| 2.5 mm² | 50 x 0.25 mm | 2.45 mm² | 7.98 ohm/km | 0.8 mm |
| 4 mm² | 56 x 0.30 mm | 3.96 mm² | 4.95 ohm/km | 0.8 mm |
| 6 mm² | | | 3.30 ohm/km | |

Class 1 and 2 (solid and stranded) plain copper are lower: 1.5 mm² 12.1, 2.5 mm² 7.41, 4 mm² 4.61,
6 mm² 3.08 ohm/km [S12, S13]. Tinned (metal-coated) class 5 is slightly higher: 1.5 mm² 13.7,
2.5 mm² 8.21, 4 mm² 5.09 ohm/km [S11, S13]. Class 5 sets a maximum strand diameter, not a strand
count (search excerpt) [S13]: another maker may use 48 x 0.20 mm for 1.5 mm² and still comply, so
strand count alone proves nothing.

### 3.4 Field checks an installer can do

In order of strength (all methods are mine unless a source is given; physics inputs: copper 8.9
g/cm³, aluminium 2.7 g/cm³, copper resistance rises about 0.4 % per °C).

1. **Resistance of the whole reel (decisive).** Join the two cores at the far end of the reel and
   measure the loop with a multimeter on its lowest ohm range. First touch the probes together and
   subtract that reading. Maximum loop resistance for a 100 m two-core reel (200 m of conductor)
   at 20 °C, class 5 copper: 0.75 mm² 5.2 ohm; 1.0 mm² 3.9 ohm; 1.5 mm² 2.66 ohm; 2.5 mm² 1.60
   ohm; 4 mm² 0.99 ohm; 6 mm² 0.66 ohm. Add 4 % at 30 °C. A reel more than 10 % above its line is
   undersized or not copper: CCA reads about 55-65 % high (Fluke: "about 55% greater" for
   aluminium of the same diameter) [S42]; the Atlas fake (0.8 mm² sold as 1.5) would read about
   5 ohm.
2. **Volt-drop test for a short piece.** Pass a known current from the battery (e.g. a 5 A load)
   through a measured length and read the drop. 10 m of two-core 1.5 mm² looped (20 m of
   conductor) should drop at most 20 x 0.0133 x 5 = 1.33 V.
3. **Scrape test (CCA).** Cut the end, scrape a strand with a knife: silver under the copper
   colour means aluminium. Fluke calls this more effective than weighing [S42].
4. **Weight.** Fluke: CCA boxes are lighter, but "ballast" has been found in boxes and heavier CCA
   exists, so "weighing the box is not foolproof" [S42]. If used, weigh bare conductor: copper is
   8.9 g per metre per mm² (1.5 mm²: 13.3 g/m); aluminium is 2.7 g (1.5 mm²: about 4 g/m).
5. **Count and measure strands** (needs a micrometer, not a caliper): area = count x 0.785 x d².
   Compare with the marked size (table 3.3). Catches gross undersizing only.
6. **Insulation and sheath.** Compare overall diameter and wall thickness with the datasheet; bend
   a sample hard in the cold: cracking or stiffness shows cheap PVC (the Philippine failures were
   elongation and flame tests [S39]).
7. **Buy where a recall can reach you:** a named brand from a dealer who keeps invoices. The ESV
   and Atlas recalls worked through batch lists and wholesalers [S35, S43].

---

## 4. Distribution board hardware

### 4.1 Automotive blade fuses and fuse blocks

| Item | Data | Source |
|---|---|---|
| ATO / ATC (regular) blade fuse | 1-40 A, 32 V DC, interrupting rating 1000 A at 32 V DC; SAE J1284; UL listed 1-40 A | [S21] (P) |
| ATO colour code | 1 A black, 2 grey, 3 violet, 4 pink, 5 tan, 7.5 brown, 10 red, 15 blue, 20 yellow, 25 natural (clear), 30 green, 35 blue-green, 40 orange | [S21] (column read from the ordering table) |
| ATO opening times (3-40 A) | 110 %: carries; 135 %: 0.5-600 s; 200 %: 0.1-5 s; 350 %: 0.02-0.5 s | [S21] |
| MINI (ATM) blade fuse | 2-30 A (2, 3, 4, 5, 7.5, 10, 15, 20, 25, 30), 32 V DC, 1000 A interrupting | [S22] (search excerpt) |
| Blue Sea ATO/ATC fuse block | 32 V DC max; 30 A per circuit; 100 A per block (12-circuit); negative bus on #10-32 stud | [S23] (search excerpt) |
| Cheap blade fuses | Will Prowse tests (summarised by Hackaday): one brand's fuses "ran very hot" | [S45] (A/S) |

- 32 V suits 12 V and 24 V nominal systems (24 V LFP charges to about 29 V). It does not suit a
  48 V system.
- The 1000 A interrupting rating is far below what an LFP pack can deliver into a short; branch
  fuses rely on the main battery fuse upstream (see `industry-norms.md` 1.3 and the safety model).
  The branch wire's resistance also limits branch fault current.

### 4.2 DIN-rail DC MCBs

- **Scope of the household standard.** IEC 60898-2:2016 covers breakers for AC and DC "with a
  rated DC voltage not exceeding 220 V for single-pole and 440 V for two-pole circuit-breakers, a
  rated current not exceeding 125 A and a rated DC short-circuit capacity not exceeding 10 000 A"
  [S19]. Industrial DC breakers are tested to IEC 60947-2 (ABB, Eaton datasheets) [S20].
- **Marking.** Rated DC voltage with the DC symbol; rating with curve letter (e.g. B 16); DC
  breaking capacity in a rectangle; "+ or -" on terminals "if necessary", current-direction arrows
  allowed; connection diagrams in the maker's documents [S19].
- **DC trip ranges:** B above 4 up to 7 x In; C above 7 up to 15 x In (AC: 3-5 and 5-10) [S19]. See
  key finding 6.
- **Polarity.** Breakers with permanent magnets in the arc chute are polarised; ABB S200M UC
  top-fed: terminal 1 to (-), terminal 3 to (+); "Incorrect polarities may cause damage to the MCB";
  1-pole 250 V DC, 2 poles in series 500 V DC; 10 kA DC breaking capacity per UL 1077 [S20].
- **Cheap brands.** Suntree SL7 listings (Kenyan shops) contradict each other on voltage (500 V,
  550 V, 1000 V) and breaking capacity (4.5, 6, 10 kA), and one says the breaker has "no positive
  and negative poles" (A, search excerpts) [S48]. Ask for the datasheet and a test certificate.
- **Counterfeits.** Will Prowse's tests: most cheap DC breakers "generally did their job", some
  arrived broken and some ran "surprisingly crispy"; a DIHOOL MCCB did best (Hackaday summary)
  [S45]. South Africa 2012: counterfeit MCBs identified by a small hole in the line terminal and a
  low price (Daily Maverick, search excerpt) [S45]. An AC-only breaker may not break a DC arc [S45].

### 4.3 Busbars and terminal blocks

- Victron: busbars "provide a common positive and a common negative point"; they are bare, so
  "it is in most cases necessary to shield the busbar"; the feed to the distribution point must
  equal the sum of the branch cross-sections it serves; connect the battery in the middle and
  alternate sources and loads along the bar [S26].
- Kahramaa (Qatar) DC box: copper busbars, DC disconnect, surge protection, "screw type terminal
  strips and strain-relief cable glands"; crimped lugs, no soldered terminations, no joints between
  two cable ends [S30].
- **WAGO 221-412** (lever connector): 450 V, 32 A, 4 kV impulse per IEC/EN 60664-1 (overvoltage
  category II, pollution degree 2); UL 600 V, 20 A; solid 0.2-4 mm², stranded 0.2-4 mm²,
  fine-stranded 0.14-4 mm² (24-12 AWG); strip 11 mm; T85; housing UL 94 V2 [S24]. Victron accepts
  WAGO 221 up to 4 mm² (industry-norms S3).
- Screw terminal strips: ferrules on stranded wire (Victron, industry-norms S3; GTZ "stranded wires
  need proper end sleeves") [S28]; no datasheet for cheap "Euro" strips was read.

### 4.4 Junction boxes, IP codes and glands

IEC 60529 (2013 consolidated, read in full) [S18]:

| Digit | First digit: solids and fingers | Second digit: water |
|---|---|---|
| 2 | Finger (12.5 mm object) | Drops with enclosure tilted 15° |
| 3 | Tool (2.5 mm) | Spraying water, up to 60° from vertical |
| 4 | Wire (1.0 mm) | Splashing water from any direction |
| 5 | Dust-protected: dust may enter but not enough to interfere or impair safety | Water jets from any direction |
| 6 | Dust-tight: no ingress of dust | Powerful water jets |
| 7 | | Temporary immersion |

So IP44 = no 1 mm wire, splashes; IP54 = dust-protected, splashes; IP65 = dust-tight, jets. An
enclosure marked only 7 or 8 (immersion) "is considered unsuitable for exposure to water jets"
unless dual-coded (e.g. IPX5/IPX7) [S18].

| Guideline | Indoor box | Outdoor box | Other |
|---|---|---|---|
| GTZ 2000 SHS standard [S28] | IP32 minimum | IP55 minimum | dust- and waterproof, non-corrosive, insulated, "no metal boxes"; entries with strain relief and chafe protection |
| Sri Lanka SAPS guideline [S29] | IP54 | IP65 | thermoplastic junction boxes |
| Kahramaa (Qatar) PW-PWR/G3 [S30] | IP20 | IP65 | DC/AC distribution boxes |

Glands: GTZ requires purpose-built boxes or UV-resistant glands at roof entries, holes sealed with
UV-resistant silicone [S28]; Kahramaa requires strain-relief glands [S30]. No gland datasheet
(clamping ranges) was read.

### 4.5 Conduit, trunking, clips and support spacing

- IEC 61386-1:2008 (preview) classifies conduit by compression and impact resistance (1 very light
  to 5 very heavy), bending (rigid, pliable, self-recovering, flexible), lower temperature (class 1
  +5 °C to class 5 -45 °C), upper temperature (60 °C to 400 °C), electrical character, and
  protection at least IP3X; UV resistance is not a classification in the clauses seen [S31].
- Outdoors: "All exposed wiring must be in UV-resistant conduits or be firmly fastened to the
  building and/or support structure"; thatch and other flammable roofs need flame-retardant cable or
  non-flammable conduit [S28]. Kahramaa: GI, HDPE or rigid PVC conduit; armoured cable underground
  [S30]. Victron: conduit traps heat, "Use a cable conduit that is open at the top" [S26].
- Support spacing:

| Source | Spacing |
|---|---|
| GTZ 2000 SHS standard [S28] | surface cable every 15-20 cm |
| IET On-Site Guide Table D1, cables up to 9 mm diameter (via Prysmian and others, search excerpt) [S32] | 250 mm horizontal, 400 mm vertical |
| ABYC / ISO 10133 / RVIA | 455 mm / 450 mm / 1.4 m (`industry-norms.md` section 3) |

- Fire: BS 7671 521.10.202 (quoted by Prysmian) requires wiring supported so it will not collapse
  early in a fire; Note 3 "precludes ... the use of non-metallic cable clips or cable ties as the
  sole means of support where cables are clipped direct to exposed surfaces" [S32]. Relevant on
  escape routes and ceilings; plastic clips on walls are common practice elsewhere.

---

## 5. Typical layouts

### 5.1 Order from the battery out

Battery + -> main fuse (as close as possible) -> isolator -> positive busbar or fuse block -> one
fuse per branch -> branch cable -> outlets. Negative: battery - -> shunt (if any) -> negative bus
-> branch negatives. Sources:

- Sri Lanka: overcurrent device on the battery positive, rated DC, >= 1.25 x nominal battery
  voltage, interrupt rating above the battery's short-circuit current, cable to it "as short as
  possible"; an isolator that interrupts **both** poles [S29].
- Victron: one main battery fuse, then branch fuses, one per consumer "No matter how big or small";
  fuse the positive only; keep the negative continuous; isolate the positive only [S26].
  **Conflict with Sri Lanka on two-pole isolation.** `industry-norms.md` section 5 already records
  ABYC/ISO positive-only isolation.
- GTZ: "No fuses or circuit breakers shall be installed in a grounded conductor"; fuses at 125-150 %
  of the maximum design current; breaker on the battery positive as close to the source as
  possible [S28]. (125-150 % of load conflicts with the code's fuse-to-wire rule only if the wire is
  sized to the load; the code sizes the wire to the fuse.)

### 5.2 Negative bus and shunt

- Victron SmartShunt: battery negative on the BATTERY MINUS side, "there should be no other
  connections on this side of the shunt or on the negative battery terminal"; "the negative of all
  DC loads, inverters, battery chargers, solar chargers and other charge sources" on the SYSTEM
  MINUS side; anything else is left out of the state of charge [S25].
- Victron Lynx: left side battery, right side system; the earth connection goes after the shunt or
  BMS [S27].
- The negative bus is the system side of the shunt; any earth bond also lands there.

### 5.3 Star (home-run) versus daisy-chain versus ring

No standard or installer guide read compares these for DC branches. What the sources give:

- Victron: everything connects to a central busbar and each consumer has its own fuse [S26]. That
  is a star from the board, one fuse per branch.
- IEC TS 62257-9-4 has a "Maximum design current of circuits depending on voltages" table (Table
  1) and Annex A charts of maximum circuit length versus current [S1]: values not visible.
- My arithmetic (1.5 mm², 13.3 ohm/km per conductor, 24 V, three 1 A lamps at 5, 10 and 15 m):
  - Daisy-chain on one cable: segments carry 3, 2 and 1 A over 5 m each; drop at the last lamp =
    2 x 0.0133 x 5 x (3 + 2 + 1) = 0.80 V (3.3 %); 15 m of cable.
  - Star (one cable per lamp): last lamp 2 x 0.0133 x 15 x 1 = 0.40 V (1.7 %); 30 m of cable.
  - Daisy-chain saves cable and is fine for light loads if the fuse protects the first (thickest
    loaded) segment and every segment has the same size. Star suits power outlets and long runs.
- **Ring circuits:** no DC source found. My reasoning: a ring relies on two parallel paths; a break
  in one leg is invisible and the other leg then carries the whole load, so a ring needs each leg
  to be sized to the fuse anyway. No advantage at 12/24 V. Recommend: no rings.

### 5.4 House wiring details from SHS guidance (GTZ 2000) [S28]

- Cable: stranded flexible copper indoors and out; outdoor cable with UV-resistant, weatherproof
  sheath rated for underground use (rubber or PE preferred); interconnecting wires rated above
  85 °C.
- Heights and depths: suspended cable lowest point >= 2.8 m above ground; buried >= 0.5 m with
  mechanical protection (1 m optional, with marker tape or cover bricks); switches near the room
  entrance at about 1.2 m above the finished floor.
- Switches and sockets: "Only special DC switches are allowed"; AC switches only if their DC
  performance is certified; sockets industrial, watertight, surface-mounted, rated 5 A.
- Joints: junction boxes, screw connectors, block connectors or crimped ferrules; crimped joints
  insulated with heat shrink; "Soldering in the field and the use of wire nuts are not allowed";
  each joint rated for the circuit's current.
- Minimum sizes (SHS of that era): 2.5 mm² PV to regulator, 4 mm² regulator to battery, 1.5 mm²
  regulator to loads; losses < 3 % PV-battery, < 1 % battery-regulator, < 5 % battery-load.
- Colour: positive red or brown, negative black or blue, earth green-yellow (differs from the
  wiki's red/black recommendation only by allowing brown/blue: see `industry-norms.md` section 4).

### 5.5 IEC TS 62257-9-4:2016 (user installation, 12/24 V d.c. or a.c., up to 500 VA)

Read: the preview (pages 1-9: contents, foreword, scope, references, definitions, clauses 4 to
5.2.2.1) [S1]. Useful facts:

- Scope: single-phase user installations up to 500 VA, supplied by an a.c. microgrid or by their
  own a.c. or "d.c micropower plant (12 V or 24 V)"; above 500 VA, IEC TS 62257-5 applies [S1].
- Normative references include IEC 60364-5-52 (wiring systems) and IEC 60269 (fuses) [S1]: the
  ratings in section 2 are the ones the TS points to.
- 5.1: "Simple separation, at least, shall be provided between the d.c. side and the a.c. side of
  a stand-alone installation" [S1].
- Clause 8.1 (wiring system) has subclauses for voltage drops, cross-sectional area, connections,
  installation method, external influences, buried wiring (8.1.7) and circuit identification
  (8.1.8). Tables: 1 maximum design current by voltage; 2 maximum voltage drops; 3 cross-sections
  for copper in fixed installations; 4 selection and 5 installation of wiring systems; 6 fuse and
  breaker ratings. Annex A: Figure A.1 for 3 % drop (a.c., H05VVF); **Figure A.2 for 15 % drop in
  d.c. systems** (cable "1000RO2V") [S1]. **Values: not found.** The 15 % in a figure title
  suggests a looser d.c. drop limit than the code's 3 % / 10 %; unconfirmed.

---

## Candidate requirements (for the owner)

1. Branch and cord cable: H05VV-F (or H07RN-F outdoors, H1Z2Z2-K in sun), class 5 copper, marked
   with type, size and voltage. No solid wire, no twin-and-earth, no unmarked zip or speaker cord.
2. Size to the fuse after derating: more than 3 branch cables bundled, or a run through a space
   above 35 °C, uses 2.5 mm² for the 8 A and 10 A classes.
3. Check each reel before use: loop resistance at or below the table in 3.4 (+10 %), scrape test
   for aluminium. Record the reading on the installation sheet.
4. Branch fuses: ATO/ATC or MINI blade fuses, 32 V DC, in a fuse block rated for the total; replace
   the 8 A class with 7.5 A or name the fuse family.
5. A DC breaker used as a branch device must be marked with a DC voltage, wired to its polarity
   marks, and backed by the arithmetic that a far-end short reaches its instantaneous trip; else a
   fuse.
6. Enclosures: insulating (plastic), IP54 indoors where dusty, IP65 outdoors; glands or bushings on
   every entry.
7. Layout: star from the fuse block for outlets and long runs; daisy-chain only for lighting on one
   fused cable of uniform size; no rings. All negatives on the system side of any shunt.
8. Fixing: clips every 250 mm horizontal / 400 mm vertical (15-20 cm on soft or uneven walls);
   overhead >= 2.8 m; buried >= 0.5 m in conduit; UV-resistant conduit or cable outdoors.

## Gaps and open items

- IEC TS 62257-9-4 Tables 1-6 and Annex A values; IEC 60364-5-52 Table B.52.17 from an official
  copy; BS 7671 Table 4F3A itself (only quoted by makers).
- KEBS: no cable-specific (CCA or undersize) finding; only extension sockets/cables. Ghana, Uganda
  and India enforcement news on undersize: not found. SON resistance figures are search excerpts.
- No SEIAPI stand-alone installation guideline, IRENA, Lighting Global or VeraSol house-wiring
  guide was found in reach; ESMAP's Kenya SHS installation manual (2000) returned 403.
- NYM, FLRY and H01N2-D datasheets not read in full (search excerpts only).
- No source on star versus daisy-chain versus ring for DC branches; no cable-gland datasheet; no
  rated data for cheap blade-fuse blocks.

## Sources

Grades: P = primary, S = secondary, A = anecdotal. "Read" says what was actually opened.

- **S1** (P) IEC TS 62257-9-4:2016 Ed. 2.0, Integrated systems, User installation, iTeh preview.
  Read pages 1-9 (contents incl. table and figure list, foreword, introduction, scope, normative
  references, definitions, clauses 4-5.2.2.1). VDE preview of the same edition checked (shorter).
  https://cdn.standards.iteh.ai/samples/22172/b7ef20fc7ea64326b7b39e9c276976bf/IEC-TS-62257-9-4-2016.pdf
- **S2** (P) IEC 60228:2004 Conductors of insulated cables, VDE preview. Read scope, definitions
  2.1-2.2, clause 3 classification.
  https://vde-verlag.de/iec-normen/preview-pdf/info_iec60228%7Bed3.0%7Db.pdf
- **S3** (P) IEC 60227-3:1993+A1:1997, PVC non-sheathed cables for fixed wiring, iTeh preview.
  Read clause 2 (60227 IEC 01) with Table 1, Table 2, clause 3 heading (60227 IEC 02, class 5).
  https://cdn.standards.iteh.ai/samples/1797/ba441acc9b0b43559a7d4d54522d92f8/IEC-60227-3-1993.pdf
- **S4** (P) Top Cable, Topflex VV-F H05VV-F datasheet, v10 2022 (EN 50525-2-11 / IEC 60227-5).
  Read in full (ratings, voltage drop, temperature factors).
  https://www.topcable.com/downloads/pdf/en/topcable-datasheet-topflex-vv-f-h05vv-f-en.pdf
- **S5** (P) Doncaster Cables 318-Y (H05VV-F) datasheet, 2017. Read in full (stranding,
  thicknesses; current ratings referred to BS 7671 Table 4F3). https://cdn.yesss.co.uk/documents/58404.pdf
- **S6** (P) Doncaster Cables 2192Y (H03VVH2-F) / 218-Y (H03VV-F) datasheet, 2017. Read in full.
  https://cdn.yesss.co.uk/documents/58402.pdf
- **S7** (P) Eland Cables 218-Y H03VV-F datasheet (Rapid). Read in full: ratings "in accordance
  with Table 4F3A of the 17th Edition", voltage drop per 4F3B, derating factors.
  https://static.rapidonline.com/pdf/566441_v1.pdf
- **S8** (S) Eland Cables, Tables 4F1A and 4F1B "Reproduced from BS7671:2018" (60 °C thermosetting
  flexible cables). Read; extraction partly garbled, two-core column used.
  https://www.elandcables.com/media/nu1flhnm/table-4f1a-and-4f1b.pdf
- **S9** (S) M. Coles, "Appendix 4 of BS 7671", IET Wiring Matters, Autumn 2008. Read in full.
  https://electrical.theiet.org/media/1617/appendix-4-of-bs-7671.pdf
- **S10** (P) Lapp, H07RN-F enhanced version datasheet DB4533000EN, valid 2026-06-16. Read in full.
  https://imager.lapp.com/e/lapp/mpDxauw4RsPXgzOF3m-2wg~~/DB4533000EN.pdf
- **S11** (P) Eland Cables, Photovoltaic Solar H1Z2Z2-K datasheet. Read in full (1.5-4 mm² rows
  and derating; 6 mm² 70 A from search excerpts of Oznur and Prysmian sheets).
  https://www.elandcables.com/media/uluhjuev/photovoltaic-solar-h1z2z2-k-cable-datasheet.pdf
- **S12** (P) element14/Farnell, 6242Y twin-and-earth (BS 6004) datasheet, 2016. Read page 1-2;
  class split confirmed by Prysmian page (search excerpt). https://www.farnell.com/datasheets/2064205.pdf
- **S13** (P) Lapp, Technical Tables T11, conductor resistances to DIN EN 60228. Read (resistance
  columns realigned by hand; make-up columns garbled, not used).
  https://t3.lappcdn.com/fileadmin/DAM/Lapp_USA/Brochures/Cable_Guide/Conductor_Resistance.pdf
- **S14** (S) trueCABLE, Table of standard diameters (ASTM B258-18). Read. Balluff FAQ, Rapid and
  LEX Products: search excerpts only.
  https://cdn.shopify.com/s/files/1/0014/6404/1539/files/Table_of_Standard_Diameters_-_trueCABLE.pdf ;
  https://www.balluff.com/en-MX/document/FAQ-18512475 ;
  https://www.rapidonline.com/news/wire-gauge-conversion-chart ;
  https://lexproducts.com/technical/wire-conversion
- **S15** (P, abstract) SAE J1128_202508 Low Voltage Primary Cable. Scope read.
  https://saemobilus.sae.org/standards/j1128_202508-low-voltage-primary-cable
- **S16** (S) ISO 6722 FLRY and SAE J1128 wire data: TME FLRY datasheet, Caledonian FLRY-B, IEWC
  GXL/TXL/GPT sheets, Caltrans wiring spec. Search excerpts only (TME PDF returned HTML).
  https://www.tme.com/Document/f8a9a7c10c1c6256b4627461a2c08bec/FLRY_EN.pdf ;
  https://caledonian-cables.com/products/automotive-cable/FLRY-B.shtml ;
  https://dot.ca.gov/programs/equipment/electrical/wires-cable-harness
- **S17** (S) H01N2-D welding cable (EN 50525-2-81): Prysmian, Lapp, Topcable, Faber datasheets.
  Search excerpts only.
  https://ro.prysmian.com/sites/ro.prysmian.com/files/media/documents/PGDE_H01N2-D_EN_6pgA4_lowres_0.pdf
- **S18** (P) IEC 60529 Ed. 2.2 (2013 consolidated, with corrigendum), as incorporated by
  reference, law.resource.org. Read clauses 5-6, Tables 1-3.
  https://law.resource.org/pub/us/cfr/ibr/inc/iec/iec.60529.2013.pdf
- **S19** (P) IEC 60898-2:2016 Circuit-breakers for AC and DC operation, iTeh preview. Read scope,
  5.3.5 Table 2, clause 6 marking.
  https://cdn.standards.iteh.ai/samples/21684/ee14a2e17fc447fe9b2cbea8bfc0e105/IEC-60898-2-2016.pdf
- **S20** (P) ABB S200M UC miniature circuit breakers datasheet (1SXP403008B0202). Read DC-use page,
  polarity note, adjacent-device factors.
  https://library.e.abb.com/public/53ac189cddb24a168c4ec4cbbb4c4632/1SXP403008B0202.pdf
- **S21** (P) Littelfuse, ATO fuse fast-acting type (257 series) catalogue page, two copies. Read in
  full. https://assets.rs-online.com/v1698936282/Datasheets/681cc411c267c0f30ba69238f150b741.pdf ;
  https://www.farnell.com/datasheets/5428.pdf
- **S22** (S) Littelfuse MINI 297 series: archived catalogue and distributor pages. Search excerpts.
  https://littelfuse.com/products/fuses/automotive-aftermarket-products/blade-fuses/mini.aspx
- **S23** (S) Blue Sea Systems ATO/ATC fuse blocks and 5245 fuse. Search excerpts of bluesea.com and
  iboats listings. https://www.bluesea.com/products/5245/ATO___ATC_Fuse_-_30_Amp ;
  https://www.iboats.com/shop/electrical/marine-fuse-blocks-busbars-and-terminal-blocks/blue-sea-systems-fuse-block-ato-atc-12-circuit.html
- **S24** (P) WAGO 221-412 datasheet, 2020. Read pages 1-3. https://cdn.yesss.co.uk/documents/59447.pdf
- **S25** (P) Victron SmartShunt manual, Installation. Read.
  https://www.victronenergy.com/media/pg/SmartShunt/en/installation.html
- **S26** (P) Victron Wiring Unlimited, DC wiring (web). Read (busbars, fusing, distribution,
  conduit). https://victronenergy.com/media/pg/The_Wiring_Unlimited_book/en/dc-wiring.html
- **S27** (P) Victron Lynx Distributor manual, Installation. Read.
  https://www.victronenergy.com/media/pg/Lynx_Distributor/en/installation.html
- **S28** (P, extract) "Quality Standards for Solar Home Systems and Rural Health Power Supply:
  Photovoltaic Systems in Developing Countries", February 2000 (GTZ per the file link), as
  extracted on energypedia. Read the extract in full; the original PDF not opened.
  https://energypedia.info/wiki/Standards_for_System_Installation_and_Wiring
- **S29** (P) Guidelines on Design, Installation, Operation and Maintenance of Stand-Alone Power
  Systems and Power Backup Systems, Version 1 (USAID Sri Lanka Energy Program / PUCSL). Read 7.2-7.4
  and Annex D. https://www.energy.gov.lk/images/guidelines-on-design-installation-operation-and-maintenance-of-standalone-power-systems-and-power-backup-systems.pdf
- **S30** (P) Kahramaa (Qatar), Standalone Solar PV Systems Guidelines PW-PWR/G3. Read 4.8.2-4.8.4
  and the IP table. https://km.qa/RenewableEnergy/Guidelines/Standalone%20Solar%20PV%20Systems%20Guidelines.pdf
- **S31** (P) IEC 61386-1:2008 Conduit systems, iTeh preview. Read clause 6 and 7.1.
  https://cdn.standards.iteh.ai/samples/13941/af5fdc3150d248e7b4bc714168543ee7/IEC-61386-1-2008.pdf
- **S32** (S) Prysmian UK, "Cable Support Distances" (quotes BS 7671 522.8 and 521.10.202). Read
  (the spacing table itself did not extract). OSG Table D1 values (250 / 400 mm for <= 9 mm) from
  search excerpts of the Prysmian catalogue and squote.app.
  https://uk.prysmian.com/sites/uk.prysmian.com/files/media/documents/Cable%20Support%20Distances.pdf ;
  https://squote.app/knowledge/electrical/cable-clipping-and-fixings
- **S33** (P) National Grid Engineering Bulletin 078 (2009), hosted by UKOPA as SA-10-0037: BASEC
  test of Kaydour cable. Read in full. https://ukopa.co.uk/wp-content/uploads/2025/07/UKOPA-SA-10-0037.pdf
- **S34** (S) Approved Cables Initiative, case study "Non-compliant PVC flexible cables" (Atlas
  Kablo). Read. https://www.aci.org.uk/news/case-studies/case-study-non-compliant-pvc-flexible-cables
- **S35** (S) Electrical Safety First, "11 million metres of cable recalled from the UK market",
  June 2010. Read.
  https://electricalsafetyfirst.org.uk/product-recalls/2010/06/11-million-metres-of-cable-recalled-from-the-uk-market
- **S36** (P) Standards Organisation of Nigeria, Ekiti State seizure, 13 June 2024. Read.
  https://son.gov.ng/2024/06/13/son-confiscates-over-30-million-naira-worth-of-fake-electrical-cables-in-ekiti-state/
- **S37** (S) SON resistance findings and copper-coated iron conductors, Guardian Nigeria and Sun
  News reports 2019-2020. Search excerpts only (pages 403).
  https://guardian.ng/business-services/son-intercepts-over-n8-billion-counterfeited-cables-in-lagos/ ;
  https://www.sunnewsonline.com/son-destroys-4-truck-loads-of-substandard-cables/
- **S38** (S) KEBS seizures of extension sockets / cables, Mombasa, July 2025 (The Star, Kenya News
  Agency, Kenyans.co.ke). Search excerpts only.
  https://www.kenyanews.go.ke/kebs-intercepts-24000-substandard-power-extension-cables/
- **S39** (S) DTI-BPS Philippines destruction of substandard wires (Feb 2023) and PS / ICC marks.
  Search excerpts only (dti.gov.ph unreachable).
  https://dti.gov.ph/archives/dti-bps-orders-destruction-substandard-electric-wires-cables
- **S40** (S) South African trade press on non-compliant and CCA cable imports (Engineering News
  2024-2025, Zawya). Search excerpts only (403).
  https://www.engineeringnews.co.za/article/noncompliant-electrical-cables-in-south-africa-risk-safety-2024-05-03
- **S41** (S) BIS India, Quality Control Order 2003 (S.O. 189(E)) covering IS 694 PVC cables.
  Search excerpts only. https://www.bis.gov.in/scheme-i-mark-scheme/
- **S42** (S) Fluke Networks, application note "Copper Clad Aluminum (CCA) Cables" (hosted by the
  CCCA). Read in full.
  https://cccassoc.org/wp-content/uploads/2020/03/FLUKE_Application_Note_Copper_Clad_Aluminum_CCA_Cables.pdf
- **S43** (P) Energy Safe Victoria, E Cables branded power cable recall (Nov 2014). Read.
  https://www.energysafe.vic.gov.au/industry-guidance/electrical/industry-safety-alerts-and-recalls/e-cables-branded-power-cable
- **S44** (S) BASEC warning on 6491B low-smoke conduit wire (IET). Read.
  https://electrical.theiet.org/media/1412/basec-warning.pdf
- **S45** (A/S) Hackaday, "Testing cheap DC breakers and how to not start fires" (Will Prowse's
  tests), 28 Oct 2025. Read. Daily Maverick 2012 on counterfeit MCBs in South Africa: search excerpt.
  https://hackaday.com/2025/10/28/testing-cheap-dc-breakers-and-how-to-not-start-fires ;
  https://www.dailymaverick.co.za/article/2012-06-22-critical-electrical-protection-devices-in-sa-found-to-be-dangerous-counterfeits.md
- **S46** (A) J. Maina and P. Gichohi (SCODE, Nakuru), "Solar Energy: A Reference Guide for Users"
  (Practical Action collection). Read. SNV Zimbabwe pico-PV manual also read: no wiring rules.
  https://rachel.core2learn.org/modules/en-practical_action/Energy/Solar%20energy/solar_energy_a_reference_guide.pdf
- **S47** (S) Suruhanjaya Tenaga (Malaysia), presentation on substandard cables (2016). Search
  excerpt only (404 on fetch).
  https://www.st.gov.my/en/contents/presentations/2016/safety/6.%20Analysis%20%20Impact%20of%20Substandard%20Cables%20to%20the%20Industries%20%20Consumers_Tee%20Kok%20Hwa.pdf
- **S48** (A) Suntree SL7 DC MCB listings, Kenyan solar shops. Search excerpts only.
  https://solarshop.co.ke/solar-dc-accessories/suntree-63a-dc-mcb
- **S49** (S) IEC 60364-5-52 Table B.52.17 grouping factors, unofficial Scribd copy and Eng-Tips
  thread. Search excerpts only; not verified against the standard.
  https://www.scribd.com/document/469555971/4 ; https://eng-tips.com/viewthread.cfm?qid=486728
- **S50** (S) Lapp listing "H07RN-F 60245 IEC 66"; IEC 60245-4 Ed. 4.0 preview contents. Search
  excerpts only. https://www.vde-verlag.de/iec-normen/preview-pdf/info_iec60245-4%7Bed4.0%7Den.pdf
- **S51** (A) Monoprice speaker wire guide and CCA speaker wire retail listings. Search excerpts only.
  https://www.monoprice.com/pages/MPAcademy_Speaker_Wire
- **S52** (S) TE PLASTI-GRIP and ABB termination catalogues on crimping solid wire. Search excerpts
  only. https://library.e.abb.com/public/d425a3759d7a46a79bf1e086a7a05f3e/Termination%20catalog.pdf
- **S53** (S) Italian H05VV-F datasheet (risparmio-elettrico) and an older BS 6500 compiled table:
  2.5 mm² 20 A, 1.25 mm² 13 A. Search excerpts only.
  https://risparmio-elettrico.it/cdn/shop/files/H05VV_F.pdf
