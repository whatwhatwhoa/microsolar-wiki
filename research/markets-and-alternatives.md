# What is sold in off-grid markets, and alternatives when the recommended part is missing

Research for two planned pages: "What is normally available" and "When the recommended part isn't
available (alternatives)". Researched 2026-11-23. The code today asks for LiFePO4 (STO-1.1), MPPT
above the smallest kit size, listed or certified parts, and one native battery pack at system
voltage. This note asks what a community installer can actually buy, what goes wrong with it, and
which fallbacks are acceptable.

Already covered elsewhere, not repeated here: VeraSol and IEC TS 62257-9-8 scope and rules
(`iec-62257.md` section 4); appliance watts from Global LEAP tests, LiFePO4 cycle data and
controller sizing (`loads-and-sizing.md` A.5-A.7, B.3, B.6); blade, MIDI, MEGA and ANL fuse ratings
(`industry-norms.md`).

How to read this file:

- Every claim carries a tag [S#]; the Sources list gives the URL, the class and what was read.
  Classes: **(P)** primary (standard text or official preview, maker datasheet, programme report,
  test data); **(S)** secondary (summaries, journalism, third-party guides); **(A)** anecdotal
  (forums, blogs, single buyer tests).
- "Search excerpt" means only a search-engine summary was seen: a lead until someone reads the
  page. "My arithmetic", "my reading" or "my suggestion" marks what is mine.
- Prices are as shown on the day read; they move. They are for comparing, not for budgets.

## Key findings for the code

1. **Most off-grid solar sold is small, and much of it is unverified.** In 2024 GOGLA affiliates sold
   9.3 million kits: 5.6 million lanterns (0-3 Wp), 1.9 million multi-light kits (3-10 Wp) and
   1.7 million solar home systems (SHS, 11 Wp and up), of which fewer than 27 000 were 100 Wp or
   more [S1]. Larger systems (100 Wp and up) are mostly **component-based**: panels, batteries,
   controllers and lights bought separately, assembled by local vendors, sold for cash, and more
   common outside the quality-verified market [S2]. Our Size B and C systems (1-5 kWh) live in this
   component market, not in the kit market.
2. **Lead-acid is still the battery most people can buy.** The CGD 2026 paper says most off-grid
   solar systems in sub-Saharan Africa use lead-acid, and estimates (from anecdote) a roughly 70 %
   share overall; quality-verified kits are mostly lithium [S6]. Lithium prices keep falling:
   BloombergNEF's 2025 survey puts the average LFP pack at USD 81/kWh and stationary packs at
   USD 70/kWh, factory level, mostly China [S8].
3. **Quality failures are common and measurable.** All 17 top-selling unverified pico-solar
   products bought in five countries failed Lighting Global's standards; 9 of 16 overstated battery
   capacity, by 35 % on average [S3]. Fake "MPPT" controllers that work as PWM, very low real
   capacity in lithium cells (a "10 000 mAh" 18650 measured about 500 mAh), and CCA cable sold as
   copper are documented by makers or testers [S26, S25, S31]. Simple buyer checks exist (table in
   section 2.4).
4. **A good lead-acid battery is an acceptable fallback; a car battery is a stopgap.** Victron and
   Morningstar: plan lead-acid at 50 % depth of discharge (DoD) [S14, S15]; a shallow-cycle
   (car-type) battery only about 15 % per day [S15]. On one Indian maker's own claims, a "solar
   tubular" flooded battery costs about the same per kWh cycled as its LiFePO4 pack (my arithmetic,
   section 3.5), but weighs four times as much, needs water, ventilation and acid care, and loses
   life fast in heat [S10, S11, S12, S13].
5. **Lead pollution is the hidden cost of lead-acid.** Unsafe recycling of used lead-acid batteries
   (ULAB) is "a leading contributor" to child lead poisoning; up to half of lead-acid batteries in
   low- and middle-income countries are recycled informally [S22]. CGD estimates off-grid solar
   creates 250 000 to 1.5 million tonnes of ULAB waste per year in sub-Saharan Africa [S6]. A rule
   that allows lead-acid should require a take-back plan.
6. **Second-life lithium (laptop 18650 cells, EV modules) should stay out of the code.** The UK
   product-safety study finds second-life cells may fail more often, that "a sample of second-life
   LiBs should not be taken to be representative of the batch", and that every battery needs its
   own assessment [S23]. IEC 63330-1:2024 (repurposing) targets batteries "with data traceability"
   [S24]: a pile of salvaged cells has none.
7. **PWM is acceptable only in small, matched, warm systems.** Victron: PWM is "a good low cost
   solution for small systems only, when cell temperature is moderate to high (between 45 °C and
   75 °C)"; MPPT is the choice "as soon as the array power exceeds a few hundred Watts (12 V
   battery)" [S26]. At 25 °C cell temperature the PWM loss in Victron's example is 19 % [S26].
8. **Repair is the weak link.** Only 36 % of surveyed customers with a fault felt it was repaired
   well: 58 % under warranty, 22 % out of warranty; the top barriers were not knowing where to go
   (27 %) and cost (15 %) [S2]. Spare parts are the main barrier to repair (SolarAid, cited by
   [S2]). This supports the code's preference for commodity parts sold locally.

## 1. What is normally sold

### 1.1 Kits and PAYGo (the quality-verified "affiliate" market)

GOGLA 2024 sales by affiliates (companies reporting to GOGLA: members, VeraSol-certified sellers,
Global LEAP participants) [S1, S2]:

| Category (GOGLA) | Panel size | Units sold 2024 | Change on 2023 |
|---|---|---|---|
| Lanterns | 0-1.5 Wp | 2.85 million | -6 % |
| Lanterns with phone charging | 1.5-3 Wp | 2.79 million | +14 % |
| Multi-light systems | 3-10 Wp | 1.94 million | +11 % |
| SHS | 11-20 Wp | 660 000 | +3 % |
| SHS | 20-49 Wp | 570 500 | +26 % |
| SHS | 50-100 Wp | 447 000 | -18 % |
| SHS | 100+ Wp | just under 27 000 | -66 % |
| Solar generators (with inverter, first reported 2024) | 200 Wp-3.5 kWp; battery 0.64-10 kWh; inverter 0.3-8 kW | 48 400 | n/a |

- Payment: 5.82 million kits sold for cash, 3.46 million PAYGo in 2024 [S1]. PAYGo rose from 39 %
  of affiliate sales in 2023 to 48 % in 2025 [S2]. A typical Tier 1 PAYGo SHS in a mature market
  costs about USD 90 over 12 months, about USD 7.10 a month [S2].
- MTR 2026 categories: small SHS 3-49.99 Wp (Tier 1+), large SHS 50 Wp and up (Tier 2+, for TVs
  or fridges) [S2]. Affiliate sales grew from 10.7 million (2023) to 12 million (2025) [S2].
- Appliances sold by affiliates in 2024: 1.44 million fans, 239 000 TVs (down 45 %), 291 000 solar
  water pumps (growth mostly from new reporters), 4 469 refrigeration units [S1]. In East Africa
  99 % of TVs are bundled with an SHS [S1].
- Kit voltage: no market statistic found. VeraSol kits are limited to 35 V and DC outputs
  (`iec-62257.md`, section 4).
- Battery chemistry in kits: of 193 VeraSol-eligible kits, "only two use lead-acid chemistries
  and the majority are lithium-ion" (CGD, citing the VeraSol list) [S6]. In 2016 Lighting Global
  reported most pico products used lithium; three of four sealed lead-acid batteries failed its
  storage durability test [S4].

### 1.2 The component market ("non-affiliate", mix-and-match)

- MTR 2026: "For SHS, the non-affiliate market is dominated by component-based mix-and-match
  configurations". In South Asia and parts of East Africa a large share of SHS demand is met this
  way; studies put mix-and-match at 50-80 % of the Ugandan SHS market; local vendors assemble,
  sell and service; sales are mostly cash, sometimes with microfinance [S2].
- Component systems "are often large SHS (100Wp+)" and "more common in the non-affiliate market"
  [S2]. Bangladesh and Myanmar programmes distributed millions of component-based systems; in
  Myanmar households often ran several panels and batteries in one system, growing it over time
  [S2].
- Earlier MTRs assumed about 70 % of off-grid solar products were sold by non-affiliates; MTR 2026
  drops this figure because the survey data behind it is old [S2]. The 2018 figure: 71 % of global
  sales from companies not affiliated with Lighting Global or GOGLA, "including no-name brands,
  copycats, and counterfeits" [S3].
- Uganda study: plug-and-play and full-service systems are relatively high quality;
  component-based kits are "a low-quality, low cost alternative"; and there is "a 'no quality'
  product segment with junk and fake products" [S5, abstract only].
- Kenya: technicians now "solarise" AC appliances (TVs, fridges, egg incubators) as a cheaper
  alternative to DC appliances, which "may also present quality and safety issues" [S1].
- What the stalls sell: a lead-acid battery (often a car battery), a panel, a controller and
  lights. CGD's waste estimate uses "a full-size car battery (18.15 kg)" with a one-year life as
  its high case and a 6 kg motorcycle battery with a two-year life as its low case, and says the low
  case "is probably unrealistically conservative, given the documented use of full-size car
  batteries" [S6]. CGD quotes an example price of USD 45 for a lead-acid battery against USD 160
  for an equivalent lithium battery (Zubi et al.) [S6].
- Lead-acid lifespan in this market: "generally ranging from six months to five years" [S6].
  Cheap batteries, "often manufactured in China", have shorter lives and so create more waste
  [S6].

### 1.3 Regions

| Region | What the sources show |
|---|---|
| Sub-Saharan Africa | Kit and PAYGo markets led by Kenya, Nigeria, Zambia (about half of SHS sales) [S2]; component market large in East Africa [S2]; Africa now imports more dollars of batteries than of panels from China, led by Nigeria and DRC; battery imports quadrupled in two years (chemistry not stated in the parts read) [S38]. |
| South Asia | Component-based systems "continue to be popular, particularly in South Asia"; Pakistan's demand growth met almost entirely by distributed solar; India's PM KUSUM doubled standalone solar pumps to 1 168 667 by September 2026 [S2]. Bangladesh IDCOL sold over 4.1 million SHS by 2018 for about 20 million people [S37]. Indian makers sell "solar tubular" flooded batteries rated at C10 with 5-year warranties [S12]. |
| Pacific islands | SEIAPI and the Pacific Power Association publish off-grid PV design and install guidelines (2012): deep-discharge batteries in a single series string, no parallel strings unless each is fused, ventilation formula for flooded lead-acid (section 3.6) [S18]. |
| Latin America | Peru, Cajamarca: a non-profit SHS for about 4 000 households is one 85 W panel, one 100 Ah battery, one 10 A controller and three 5 W LED lights, no inverter; residents pay 10 soles (USD 3) a month with a 40-sole subsidy [S36]. World Bank Peru projects installed about 7 100 and then 11 915 household systems (search excerpt) [S37-WB-PE]. |
| Remote North America (Navajo Nation) | NTUA's 6th-generation unit (2020): 3.0 kW stand-alone PV, "minimum of 800 amp-hour Lithium based Battery Storage", Energy Star fridge, up to 3 days of power; semi-annual service visits; customer pays USD 84 a month for operation, maintenance and repair [S35]. A much larger class than our Size C, run as a utility service. |

## 2. Quality problems and buyer checks

### 2.1 What lab tests found

Lighting Global, *Quality Matters* (2018): 17 top-selling unverified pico-solar products (≤ 10 Wp)
bought anonymously in Ethiopia, Kenya, Myanmar, Nigeria and Tanzania, tested to IEC TS 62257-9-5
[S3]:

| Finding | Result |
|---|---|
| Met all Lighting Global standards | 0 of 17 |
| Failed for a durability defect (battery protection, water ingress, lumen maintenance...) | 94 % |
| Inaccurate advertising | 88 % |
| No consumer warranty | 88 % |
| Battery capacity stated | 16 of 17; accurate 6; overstated 9 (measured on average 35 % below the label); 1 dead |
| Full-battery run time stated | 11; accurate 3; the other 8 measured on average 43 % below the label |
| PV power stated | 8; only 1 inaccurate ("advertised PV module power values were more likely to be accurate") |
| Proper deep-discharge and overcharge protection | 37 % |
| AC-DC chargers with a recognised safety approval | 0 of 7 |
| Battery storage durability | 9 of 16 passed; 5 lost 40 % capacity on average (25 % is a pass); 2 failed catastrophically |

- Truth-in-advertising rule then: numbers on the box must be at least 85 % of the advertised
  rating [S3]; -9-8:2025 tightens this to 10 % (`iec-62257.md`).
- One Tanzanian top-seller passed all durability, safety and charge-control tests and needed only
  a warranty and correct labels: some unverified products are close to acceptable [S3].
- The MTR calls the effect "market spoilage": non-affiliate lanterns that lack durability "erode
  consumer trust in solar technology" [S2].
- Enforcement: 28 countries have adopted standards harmonised with IEC TS 62257-9-8, 11 make them
  compulsory for import, but "borders remain porous" and customs officers often lack training [S2].

### 2.2 Counterfeit and mislabelled components

| Problem | Evidence | Class |
|---|---|---|
| "MPPT" controllers that are really PWM | Victron defines the difference: a PWM controller pulls the panel to "near that of the battery" (Vbat + 0.5 V in its example); an MPPT controller holds the panel at its maximum power voltage and gives more amps out than in [S26]. Buyers report cheap "MPPT" units holding a panel at about 14 V on a 12.2 V battery; one blogger: many cheap regulators "labelled as MPPT but are actually only PWM type" [S27]. No lab survey found. | P (method), A (cases) |
| Battery capacity fraud | Pico products: 9 of 16 overstated, 35 % on average [S3]. Lithium cells: a "10000mAh" 18650 measured about 500 mAh, rated "bad cell"; the tester thinks many such cells come from one factory [S25]. | P, A |
| Overstated panel watts | Only 1 of 8 pico products overstated PV power [S3]. Nigeria press and industry reports of counterfeit and relabelled panels exist (search excerpts only, no test data found). | P, S |
| CCA (copper-clad aluminium) cable | About 10 % copper over aluminium; conductivity about 63 % of copper; "AWG4 (25 mm²) CCA corresponds to approximately AWG6 (16 mm²) of copper"; a fuse chosen for the apparent size may not protect it; "many sellers and shops fail to highlight this distinction" [S31]. | S (cable maker) |
| Counterfeit fuses | Littelfuse catalogue: a counterfeit may match the size "but fails to perform to the stringent performance and safety specifications" (search excerpt); a fuse vendor's test of fakes "that never blow" and forum reports (search excerpts) [S34]. | S, A |
| Unsafe chargers | 0 of 7 AC-DC chargers in pico products carried a safety approval [S3]. | P |

Note: the Energy Safe Victoria recall of "E Cables" CCA power cable (2014) was for insulation that
was not cross-linked, not for the CCA conductor itself [S32]. Do not cite it as proof that CCA burns.

### 2.3 The VeraSol database as a check

- The VeraSol Product Database lists "Certified Solar Energy Kits" and "Tested Appliances and
  Equipment" (egg incubators, pressure cookers, fans, fridges, pumps, TVs, cold rooms). Appliances
  are tested, not evaluated against quality standards. It can be sorted by model, brand, size and
  price; full data needs an account; a "Previously Certified Products" list shows products that no
  longer hold certification [S30].
- VeraSol policy: the database is the official place to confirm a certificate is valid (search
  excerpt) [S30]. A VeraSol guidance note: apart from branding, the product should look physically
  identical to the one in the test report (search excerpt) [S30].
- It covers kits up to 350 W only; there is nothing to look up for loose panels, controllers or
  batteries.

### 2.4 Simple checks a buyer can do (my synthesis from the sources named)

| Part | Check | Basis |
|---|---|---|
| Kit | Look up brand and model in the VeraSol database; compare photos | [S30] |
| Panel | Measure the frame: at "over 22 %" to "just under 25 %" module efficiency [S33] and 1 000 W/m² at STC [S26], a 100 W panel needs at least about 0.4-0.45 m² (my arithmetic). Measure open-circuit voltage (Voc) in sun and compare with the label | [S26, S33] |
| Panel | Count cells: 36 in series for a 12 V battery with PWM, 72 for 24 V [S26]. Half-cut-cell panels show twice as many half-cells (my note) | [S26] |
| Controller | While charging a battery that is not full, measure panel voltage at the controller: within about 1 V of battery voltage means it is working as PWM. Or compare amps: more amps out than in means MPPT | [S26] |
| Lead-acid battery | Weigh it: datasheet weights are about 25 kg per kWh (Victron AGM 12 V 90 Ah, 27 kg) and 32 kg per kWh (Luminous tubular 12 V 150 Ah C10, 58 kg) (my arithmetic). Much lighter than this for the claimed Ah is suspect | [S10, S12] |
| Lead-acid battery | Rested voltage of a new flooded battery: Trojan's table gives 12.73 V (24 V: 25.46 V) at 100 % and 12.10 V (24.20 V) at 50 % | [S11] |
| LiFePO4 pack | Weight about 11 kg per kWh for one maker's pack (Luminous 12.8 V 100 Ah, about 14.5 kg) (my arithmetic). A timed discharge with a known load and a meter shows real capacity | [S13] |
| Lithium cells | Any 18650 labelled far above the market's real maximum is fake; a vendor blog puts the ceiling at 3 500-3 600 mAh (search excerpt, commercial source) | [S25] |
| Cable | Cut or scrape the end: a silver-grey core under copper colour is CCA (my note; follows from [S31]) | [S31] |
| Anything | A written warranty and a seller who will be there next year; 88 % of tested unverified products had no warranty | [S3] |

## 3. Lead-acid as the alternative to LiFePO4

### 3.1 Types sold

| Type | What it is | Sources |
|---|---|---|
| Car or truck starter (SLI) | Flooded, thin plates, "built to provide short bursts of current" and "not really designed for deep-cycle service" | [S15] |
| Flooded deep-cycle ("solar", "tubular", "inverter" battery) | Liquid acid, needs water; tubular-plate versions sold in South Asia rated at C10 | [S11, S12] |
| OPzS | German stationary flooded cell with tubular plates ("Ortsfest, Panzerplatte, flüssig"); IRENA calls it the typical large stationary lead-acid design | [S9] |
| AGM (VRLA) | Acid held in a glass mat; sealed, valve-regulated; good at high currents | [S10] |
| Gel (VRLA) | Acid held as gel; longer service life and better cycling than AGM | [S10] |

IRENA: flooded lead-acid "do not respond well to deep discharging", need periodic water, sulphate
if stored discharged, and have cycle lives "up to 2 500" [S9]. VRLA needs no water or special
ventilation but is "more sensitive to higher-temperature environment" and has a shorter lifetime
than flooded [S9]. Lead-acid calendar life 3-15 years and cycle life 250-2 500 equivalent full
cycles (2016) [S9].

### 3.2 Depth of discharge and cycle life

| Battery | Maker's figure | Source |
|---|---|---|
| Lead-acid, general | "should only be discharged by 50%"; lithium "70-80%" | Victron KA 2026 [S14] |
| Shallow-cycle (car type) | Daily DoD about 15 %; maximum about 50 % | Morningstar [S15] |
| Deep-cycle lead-acid | Built for 50 % daily; up to 80 % "without damaging", but regular deep discharge shortens life | Morningstar [S15] |
| Trojan flooded | "Do not discharge your battery to more than 80% depth of discharge" | [S11] |
| Victron AGM Deep Cycle | 400 cycles at 80 %, 600 at 50 %, 1 500 at 30 % | [S10] |
| Victron Gel Deep Cycle | 500 cycles at 80 %, 750 at 50 %, 1 800 at 30 % | [S10] |
| Luminous solar tubular (India) | "up to 1500 cycles @ 80% DOD"; 1500 at 80 %, 5000 at 20 % on another model (search excerpt) | [S12] |
| OPzS (vendor claims, search excerpts) | 1 600-2 500 cycles at 80 %; Exide Classic OPzS Solar up to 2 800 at 60 % | [S12-OPzS] |
| LiFePO4 (for comparison) | Victron Lithium Smart 2 500 at 80 %, 5 000 at 50 % | `loads-and-sizing.md` B.3 |
| Lithium-ion vs lead-acid, mini-grids | 3 000 vs 800 cycles (cited by CGD) | [S6] |

- Energy through life per kWh of rated capacity (my arithmetic, DoD x cycles): Victron AGM 320 kWh
  at 80 % or 300 at 50 %; Gel 400 or 375; Victron LiFePO4 2 000 at 80 %. The 50 % rule protects
  against a short life from one deep night more than it adds total energy.
- Heat: Victron float design life is AGM 7-10 years at 20 °C, 4 at 30 °C, 2 at 40 °C; Gel 12, 6
  and 3 [S10]. For lithium IRENA gives the rule of thumb that every 10 °C above design temperature
  halves calendar life [S9]. Many target sites are hot; lead-acid life there is a fraction of the
  datasheet.
- Cold: Trojan, a battery at -18 °C delivers 50 % of its capacity [S11].
- Field: in SHS lead-acid, corrosion (long time at high voltage) is the main ageing mechanism in
  all but the heaviest use; a voltage control scheme gave 25 % more life in simulation [S39,
  abstract].

### 3.3 Car batteries and IEC TS 62257-341

- IEC TS 62257-341:2026 replaces -8-1:2018. Its scope: "simple, inexpensive, comparative tests to
  determine which types of flooded lead-acid automobile batteries are acceptable for use in PV
  electrification systems", "particularly useful ... to test in laboratories of developing countries
  the capability of locally made car or truck batteries" [S16]. Its full title ends "available in
  developing countries" [S16].
- **Correction to the brief:** the preview does not say car batteries are poor choices. It
  accepts them where tested and gives installation and safety rules (cases, terminals, electrolyte
  hazard, short circuits, enclosures, marking for spillage, recycling) [S16; contents in
  `iec-62257.md` 2.12]. The test values and the pass marks are not in the preview.
- Industry sources do call them a poor fit for cycling: about 15 % daily DoD [S15]. SEIAPI:
  "Deep discharge type batteries / cells should be selected" [S18].
- My reading: a car or truck battery is a stopgap for Size A or a first Size B system, sized so the
  daily use is about 15 % of its rating, replaced by a deep-cycle or LiFePO4 battery when it fails.

### 3.4 Charge settings (lead-acid)

| Setting | Trojan flooded, per cell (12 V / 24 V) at 25 °C [S11] | Victron VRLA, 12 V [S10] |
|---|---|---|
| Bulk current | 10-13 % of C20 | ≤ 0.2 C preferred |
| Absorption | 2.35-2.45 V (14.1-14.7 / 28.2-29.4 V), up to 4 h | AGM 14.2-14.6 V; Gel 14.1-14.4 V |
| Float | 2.25 V (13.5 / 27.0 V); avoid continuous float if charged more than once a week | 13.5-13.8 V |
| Equalise | 2.70 V (16.2 / 32.4 V), flooded only, when SG < 1.235 or cells differ by > 0.030 | never for AGM or gel |
| Temperature compensation | -5 mV per cell per °C from 25 °C | -4 mV per cell per °C (-24 mV/°C at 12 V), needed below 10 °C or above 30 °C |

- **Conflict with the code's 24 V bus:** a flooded 24 V equalise at 32.4 V [S11] is above the
  32 V top of ISO 10133's 24 V equipment range (`industry-norms.md`) and above the 31 V
  over-voltage cut of the owner's 24 V modules (`safety-model.md`). An installer using flooded
  batteries must switch loads off during equalise or not equalise (my inference).
- Victron gassing voltage: 14.34 V for a 12 V battery [S10]; IRENA about 2.39 V per cell [S9].
- A LiFePO4 controller profile is not right for lead-acid and the reverse; the controller must
  offer the battery type (general point, both makers give type-specific settings [S10, S11]).

### 3.5 Lifetime cost per kWh cycled

Sources disagree:

- CGD: lead-acid "generally cost more per unit of energy over their lifetimes" [S6]. Its Table 1
  (from ESMAP and Ayeng'o et al.) lost its layout in extraction; my reading: cycle life 500-1 000
  vs 2 000-6 000, LCOE USD 0.480 vs 0.395 per kWh, capex USD 80-150 vs 250-350 per kWh, lead-acid
  vs lithium-ion.
- IEA PVPS Task 18 (2025): "The bigger the size of the required Lithium-Ion battery storage is, the
  better it performs compared to lead acid storage. In rather small battery storage systems lead
  acid batteries perform economically more feasible." Very small (≤ 0.5 kWh) and very large systems
  are "dominated by Li-Ion" [S7, executive summary only].
- Zubi et al. (2020): lithium-ion "is competitive at the level of energy storage cost" despite the
  higher first cost (abstract, search excerpt) [S41]. A Belgian-Ethiopian study (grid-tied 10 kWp
  model) found LCOE EUR 0.32 (lithium) vs 0.34 (lead-acid) per kWh (secondary report) [S40].

My arithmetic, one maker, one market (India, prices read 2026-11-23), maker's cycle claims:

| | Luminous LPTT12150L tubular flooded [S12] | Luminous Helios 12.8 V 100 Ah LiFePO4 [S13] |
|---|---|---|
| Energy | 12 V x 150 Ah (C10) = 1.80 kWh | 1.28 kWh |
| Price | INR 17 499 | INR 29 000 |
| Cycles claimed | 1 500 at 80 % DoD | "up to 3000", DoD not stated (I assume 80 %) |
| Energy through life | 1.80 x 0.8 x 1 500 = 2 160 kWh | 1.28 x 0.8 x 3 000 = 3 072 kWh |
| Cost per kWh cycled | about INR 8.1 | about INR 9.4 |
| Weight | 58 kg (32 kg/kWh) | about 14.5 kg (11 kg/kWh) |
| Warranty | 60 months | 60 months |
| Upkeep | "topping up required once in 8-10 months" | none stated |

- On paper the two are close. In practice the tubular battery's claim is at 27 °C-type lab
  conditions; heat [S10], partial charge and sulphation [S4, S9], and lower round-trip efficiency
  (flooded 70-90 % [S9] vs about 92 % for LiFePO4, `loads-and-sizing.md` B.3) push lead-acid's real
  cost up, and its weight raises transport cost to remote sites. Lead-acid also carries the
  recycling cost (3.7). For AGM or gel (Victron: 300-400 kWh per rated kWh) or a car battery the
  comparison is far worse (my arithmetic from [S10, S15]).
- Recommendation for the page: present tubular flooded or gel as "acceptable when LiFePO4 is not
  available or not affordable", car batteries as "stopgap", with the numbers above as an example,
  not a rule.

### 3.6 Hydrogen, ventilation and acid

- IEC 62485-2:2010 (stationary lead-acid and NiCd/NiMH up to 1 500 V DC) covers hazards from
  "electricity, gas emission, electrolyte"; contents include ventilation requirements (7.2),
  natural (7.3) and forced ventilation (7.4), and Annex B, "Calculation of safety distance d to
  protect against explosion"; photovoltaic systems are a named application [S17]. Edition 1.0,
  2010-06-16, stability date 2028; the IEC page lists no newer edition [S17]. A secondary site
  names a 2016 edition; not confirmed (conflict noted).
- The formula is not in the preview. Secondary sources give Q = 0.05 x n x Igas x C x 10^-3 m³/h
  (n cells, Igas in mA/Ah, C in Ah) and an opening area A = 28 x Q cm² for inlet and outlet [S20];
  ZVEI's traction-battery leaflet (EN 62485-3) uses 0.055 with a safety margin [S20]. Keep hydrogen
  below 4 % by volume [S19, S20]. Igas values: **not found** in a source read.
- SUVA (Swiss accident insurer): inlet at most 10 cm above the floor, outlet at most 10 cm below
  the ceiling, two openings in opposite walls or at least 2 m apart, not closable; no ignition
  sources within 1 m of the battery; fans run during charge and at least one hour after; SN EN
  62485-2 and -3 decide [S19].
- SEIAPI (Pacific), flooded batteries: A = 100 qv cm², qv (L/s) = 0.006 x n x I, with I the
  largest charging source's maximum output or its fuse rating; for VRLA a reduced current per Ah is
  used (the digits did not survive text extraction) [S18]. Example (my arithmetic): 24 V flooded
  (12 cells) on a 20 A controller: qv = 0.006 x 12 x 20 = 1.44 L/s, A = 144 cm² for each opening.
- SEIAPI also: restrict access ("Prevent children easily accessing the batteries"), nothing
  mounted above the battery, no connecting or disconnecting where hydrogen may be present, shrouded
  terminals, insulated tools, acid-resistant trays able to hold one cell's electrolyte, water,
  gloves, glasses and eyewash at hand, battery-explosion and electrolyte signs, main fuse below the
  vents or behind a partition [S18].
- Trojan: wear protective clothing, gloves and goggles; no smoking; keep sparks away; "Never add
  acid to a battery"; flooded batteries upright only; neutralise spills with baking soda
  (150 g/L) [S11].

### 3.7 Recycling and lead pollution

- WHO (fact sheet, 10 June 2026): "There is no level of exposure to lead that is known to be
  without harmful effects"; more than 3.5 million deaths in 2023 attributed to lead (IHME); "Most
  global lead consumption is for the manufacture of lead-acid batteries for motor vehicles";
  battery recycling has caused mass poisoning outbreaks; children may absorb 4-5 times as much lead
  as adults from the same dose [S21].
- UNICEF and Pure Earth, *The Toxic Truth* (2020): about one in three children, up to 800 million,
  have blood lead at or above 5 µg/dL; nearly half in South Asia; informal lead-acid battery
  recycling is "a leading contributor"; as much as half of lead-acid batteries in low- and
  middle-income countries are recycled unsafely [S22].
- CGD (2026): backyard recycling loses up to 50 % of the lead to the environment; safe plants
  recover more than 98 %; off-grid solar is 13-47 % of sub-Saharan ULAB waste (250 000-1.5 million
  t/year) [S6]. MTR 2026: battery recycling infrastructure "remains especially limited"; repair,
  not recycling, is the realistic near-term lever [S2].
- For the code (my suggestion): if lead-acid is used, name the take-back point (seller or licensed
  recycler) in the system documents, and never break, burn or melt batteries at home.

## 4. Second-life lithium (salvaged 18650 cells, EV modules)

- UK OPSS study (Newcastle University, 2023): hazards are the same as new cells "but the
  probability of failure may be higher" from ageing and unknown first-life abuse; capacity fades
  roughly linearly to the end of first life at 75-80 % state of health, then a hard-to-predict
  "knee" brings "severe and potentially dangerous deterioration"; cycling cold or at high rates
  lowers the thermal-runaway temperature; so "the safety of second-life LiBs cannot be reliably
  assured by type tests" and each battery needs its own assessment [S23].
- Standards: IEC 63330-1:2024 sets repurposing requirements (diagnosis, operating range, history of
  critical failure, residual performance, storage and repair history) for lithium-ion products
  "with data traceability"; it excludes lead-acid [S24]. IEC 63338 (general guidance) was "under
  development" in the 63330 preview; a reseller lists it as published 2024 (search excerpt). UL 1974
  covers sorting and grading for repurposing, mainly of EV packs (search excerpt).
- Salvaged laptop cells add mixed makers, ages and capacities in one pack, and a market with
  relabelled fakes [S25]. No standard or fire-service guidance for DIY packs was found.
- My recommendation: the code should not allow second-life or DIY lithium packs as the counted
  battery (STO-1.1 stands). A page can explain why, and point to certified new LiFePO4 or to the
  lead-acid fallback instead.

## 5. PWM where MPPT is not available

Victron white paper, *Which solar charge controller: PWM or MPPT?* (20 January 2020) [S26]:

- PWM is a switch: the panel runs at battery voltage plus about 0.5 V of cable and controller
  loss. Example 100 W, 36-cell panel at 25 °C on a 13 V battery: 81 W, 19 % less than MPPT.
- At 75 °C cell temperature the two are equal (77 W vs 77.5 W). PWM is within 10 % of MPPT between
  about 45 °C and 75 °C cell temperature for battery charge voltages of 13-15 V.
- A free-standing array can reach 70-80 °C on a hot, still day; panels with an insulated back can
  exceed 100 °C, where a PWM controller may not fully charge the battery.
- Low irradiance, partial shade, cold climates and long cable runs all favour MPPT. MPPT also lets
  panels run in series at higher voltage, cutting cable size by four when voltage doubles.
- "The PWM charge controller is therefore a good low cost solution for small systems only, when cell
  temperature is moderate to high (between 45°C and 75°C)." MPPT "as soon as the array power
  exceeds a few hundred Watts (12 V battery), or several hundred Watts (24 V or 48 V battery)".
- Matching: PWM needs the usual cell count, 36 cells for 12 V and 72 for 24 V; MPPT works best with
  more cells in series (for example 72 for 12 V, 108 for 24 V).

For the code (my reading): PWM acceptable for Size A (one small panel), and for a small Size B
array only when the panel's cell count matches the battery and the site is warm. Large modern
panels (400-500 W) are not matched to 12 V and are rarely matched to 24 V: check Vmp on the label.
SEIAPI gives separate sizing methods for "standard switched controllers" (sized in Ah) and MPPT
(sized in Wh) [S18].

## 6. Efficient DC appliances

Global LEAP test results for fans, TVs and fridges are in `loads-and-sizing.md` A.5-A.7. Added here:

- Efficiency for Access (2019): an SHS with super-efficient appliances "is up to 35% cheaper than
  one using conventional appliances to deliver the same level of service"; most demanded off-grid
  appliances are LED lights, phone charging, radios, TVs, fans and fridges [S28].
- Appliance Data Trends (2018): the most efficient model in the dataset was a 32" TV using 14 W;
  Global LEAP award TV price fell from USD 1.57 to 1.06 per square inch (2016 to 2017); baseline
  TVs were on average 63 % more expensive than similar award products; in rural Tanzania few shops
  stocked off-grid appliances, priced at 130 000-400 000 TZS (USD 57-175) [S29].
- Affiliate appliance sales and the Kenya trend of solarised AC appliances: section 1.1 and 1.2
  [S1]. VeraSol database lists tested (not certified) fans, fridges, TVs, pumps [S30].
- Not found: current (2024-2026) market price surveys for DC appliances.

## 7. Supply channels, repairability and spares

| Channel | What it reliably has | Notes and sources |
|---|---|---|
| Auto-parts and truck-parts shops | Car and truck batteries; blade, MIDI and ANL fuses rated 32 V (fits 12 and 24 V, not 48 V; `industry-norms.md`); battery cable; lugs | Counterfeit fuses reported (search excerpts) [S34]; CCA cable sold as copper [S31] |
| Solar and electrical dealers, market stalls | Panels, PWM controllers, "solar" or tubular lead-acid, lights, inverters | Component market assembled by local vendors [S2]; quality spread from good to "junk and fake" [S5] |
| Kit and PAYGo companies | VeraSol-certified kits to 350 W, warranties, financing | [S1, S2]; closed boxes are hard for others to repair [S2] |
| Mobile-phone shops | USB chargers and cables | Not found as a sourced channel; the safety of chargers: 0 of 7 approved in [S3] |
| Online import | LiFePO4 packs, MPPT controllers, cells | Africa's battery imports from China quadrupled in value in two years [S38]; fake cells and controllers in [S25, S27] |
| Utility or NGO programme | A whole serviced system | NTUA (USD 84/month O&M) [S35]; Peru (USD 3/month plus subsidy) [S36] |

- Repair (MTR 2026): 95 % of PAYG customers had a working Tier 1 SHS four or more years after
  purchase; 38 % reported at least one technical issue; only 36 % of those felt it was
  satisfactorily repaired or replaced (58 % in warranty, 22 % out); barriers: not knowing where
  (27 %), out-of-warranty cost (15 %), thinking it could not be repaired (12 %), no nearby service
  (11 %) [S2]. Distributors "struggle to obtain" parts to repair closed-box systems, because of
  minimum order quantities or discontinued products; "availability of quality spare parts is the
  primary barrier" (SolarAid study cited) [S2]. During SHS repair, 29 % of customers went back to
  candles or kerosene and 8 % had no light (SolarAid survey cited) [S2].
- For the code (my reading): parts that an auto-parts shop or electrical wholesaler stocks
  (32 V blade fuses at 12/24 V, copper cable by mm², ring lugs) are the repairable choice; specify
  the part by rating, not brand, so a local equivalent can replace it.

## 8. Conflicts between sources (safer value in brackets)

1. **Lead-acid lifetime cost**: CGD and Zubi say lithium is cheaper over life [S6, S41]; IEA PVPS
   says lead-acid is more economical in small systems [S7]; one Indian maker's prices and claims put
   tubular flooded and LiFePO4 close per kWh cycled (my arithmetic). [Recommend LiFePO4; allow
   deep-cycle lead-acid as a fallback; do not claim either is always cheaper.]
2. **Car batteries**: IEC TS 62257-341 gives tests to accept them [S16]; Morningstar and SEIAPI
   steer away from them for cycling [S15, S18]. [Stopgap only, about 15 % daily DoD.]
3. **Lead-acid DoD**: Victron 50 % [S14]; Trojan up to 80 % [S11]; Morningstar 50 % daily, 80 %
   maximum for deep-cycle [S15]. [Plan at 50 %.]
4. **IEC 62485-2 edition**: IEC webstore and VDE preview show 2010 ed. 1.0; one secondary site says
   2016 [S17]. [Cite 2010 until the IEC page shows otherwise.]
5. **Ventilation formula**: IEC-style Q = 0.05 n Igas C (secondary) vs SEIAPI 0.006 n I L/s using
   full charger current [S18, S20]. They use different current bases. [For a small enclosure, use
   SEIAPI's, which needs only the controller rating, and state it as a regional guideline.]
6. **Non-affiliate share**: 71 % (2018) [S3] vs MTR 2026 dropping the ~70 % assumption as outdated
   [S2]. [Say "most of the market in many countries", no single figure.]
7. **Panel efficiency for the size check**: "over 22 %" (2025 report) vs "just under 25 %" (2026
   update) [S33]. [Use 25 %, which gives the smallest plausible area.]

## 9. Not found

- A lab survey of fake MPPT controllers, of panel wattage in component markets, or of loose
  lead-acid battery capacity in markets.
- Test data on cheap inverters (real output, idle draw, waveform) in off-grid markets.
- IEC 62485-2 Igas values and the exact clause text; the -341 test pass marks.
- Typical SHS kit voltages as a statistic; LFP retail prices in African or Pacific markets.
- Any standard or fire-service guidance for DIY packs from salvaged cells.
- Sourced information on mobile-phone shops as a channel for USB power parts.
- The share of LiFePO4 vs lead-acid in loose battery sales anywhere.

## Sources

- [S1] (P) GOGLA, Global Off-Grid Solar Market Report, Annual Sales & Impact Data 2024, public
  report (May 2025). Full PDF text extracted and read (summary, global and East Africa sections).
  https://gogla.org/wp-content/uploads/2025/05/GOGLA_Sales-and-Impact-Report-H2-2024.pdf
- [S2] (P) ESMAP / World Bank, Off-Grid Solar Market Trends Report 2026 (October 2026). Full PDF
  text extracted; read headline trends, 1.1-1.3, repair section (chapter 4), 5.5 Quality
  Assurance, 5.6 End-of-Life. https://mtr.esmap.org/pdfs/OGS-MTR-Report-2026.pdf (site:
  https://mtr.esmap.org/). The 2024 and 2022 editions returned 403.
- [S3] (P) Lighting Global, Technical Notes Issue 27, *Quality Matters* (August 2018). Full PDF
  text read. https://clasp.ngo/wp-content/uploads/2021/01/Quality-Matters.pdf
- [S4] (P) Lighting Global, Technical Notes Issue 23, *Battery Testing for Off-grid Solar Products*
  (June 2016). Full PDF text read.
  https://www.lightingglobal.org/wp-content/uploads/2016/06/Issue-23-Battery-Testing-final-1.pdf
- [S5] (P, abstract) Groenewoudt, Romijn, Alkemade, *From fake solar to full service: An empirical
  analysis of the solar home systems market in Uganda*, Energy for Sustainable Development 58
  (2020) 100-111, doi 10.1016/j.esd.2020.07.004. Abstract page read; full text not read.
  https://research.tue.nl/en/publications/from-fake-solar-to-full-service-an-empirical-analysis-of-the-sola/
- [S6] (S) Bonnifield and Mallory, *Lead-Safe Off-Grid Electrification: Understanding the Issues in
  Sub-Saharan Africa*, CGD Policy Paper 383 (February 2026). Full PDF text extracted; read abstract,
  sections 1-3 and the market analysis; Table 1 layout garbled.
  https://www.cgdev.org/sites/default/files/lead-safe-off-grid-electrification-understanding-issues.pdf
- [S7] (P, executive summary) IEA PVPS Task 18, *Li-Ion Battery systems in Off-Grid applications*,
  Report IEA-PVPS T18-04:2025 (October 2025). Executive summary PDF read; full report not read.
  https://iea-pvps.org/wp-content/uploads/2025/10/IEA-PVPS_T18-04-2025_EXEC-SUMM_Li-Ion-Systems.pdf
- [S8] (P, press release) BloombergNEF, Lithium-ion battery pack prices fall to USD 108/kWh
  (9 December 2025). Press release read; lowest LFP cell USD 36 and pack USD 50/kWh only in a
  search excerpt. https://about.bnef.com/insights/clean-energy/lithium-ion-battery-pack-prices-fall-to-108-per-kilowatt-hour
- [S9] (P) IRENA, *Electricity Storage and Renewables: Costs and Markets to 2030* (October 2017).
  Full PDF text extracted; read lead-acid section, Li-ion cost and lifetime passages.
  https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2017/Oct/IRENA_Electricity_Storage_Costs_2017.pdf
- [S10] (P) Victron Energy, Datasheet *Gel and AGM Batteries* (EN). Full PDF text read.
  https://www.victronenergy.com/upload/documents/Datasheet-GEL-and-AGM-Batteries-EN.pdf
- [S11] (P) Trojan Battery, Flooded Battery Quick Start Guide (2017) and User's Guide. Both PDFs
  read (charging, maintenance, safety, SG/OCV table).
  https://ressupply.com/documents/trojan_battery/Flooded_Battery_Quick_Start_Guide.pdf and
  https://s1.solacity.com/docs/Trojan/TrojanBattery_UsersGuide.pdf (third-party copies of Trojan
  documents)
- [S12] (P, vendor) Luminous India, Solar Battery LPTT 12150L product page, read 2026-11-23.
  https://www.luminousindia.com/solar-batteries/solar-battery-lptt-12150l . 5000 at 20 % DoD on the
  LPTT1280H page and GEM GSTL 1500/3000/5000 cycles: search excerpts only.
  [S12-OPzS] (P, vendor, search excerpts) OPzS cycle claims: Systems Sunlight, CSPower, Discover,
  Exide Classic OPzS Solar datasheet (403 on fetch). https://exidegroup.com/en/document/classic-opzs-solar-datasheet
- [S13] (P, vendor) Luminous India, Helios 12.8V 100Ah product page, read 2026-11-23 (price shown
  INR 29 000; a search excerpt showed INR 39 999 earlier).
  https://www.luminousindia.com/batteries/helios-128v-100ah
- [S14] (P) Victron Energy knowledge article, RV battery bank size (12 September 2026). Read.
  https://www.victronenergy.com/knowledge-articles/2026/9/12/rv-battery-bank-size
- [S15] (P) Morningstar, Tech Tip: Design Factors for Lead Acid Batteries (2022/2024). Read.
  https://www.morningstarcorp.com/?p=27080
- [S16] (P) IEC TS 62257-341:2026, official preview (VDE): contents, introduction, scope,
  normative references. https://assets.vde-verlag.de/iec-normen/preview-pdf/info_iects62257-341%7Bed1.0%7Den.pdf
- [S17] (P) IEC 62485-2:2010, official preview (VDE): contents, introduction, scope; IEC webstore
  page (edition, dates). https://www.vde-verlag.de/iec-normen/preview-pdf/info_iec62485-2%7Bed1.0%7Db.pdf ,
  https://webstore.iec.ch/en/publication/7091 . Secondary claim of a 2016 edition:
  https://www.batterydesign.net/legislation-rules-and-regulations/iec-62485-2/
- [S18] (P, regional industry guideline) SEIAPI and Pacific Power Association, *Off Grid PV Power
  Systems: System Design Guidelines* and *System Install Guidelines for the Pacific Islands* (2012).
  Both PDFs read; parts of the text use a shifted font, decoded by me; some digits lost.
  https://policy.asiapacificenergy.org/sites/default/files/Off%20Grid%20PV%20Power%20Systems-%20System%20Design%20Guidelines%20for%20the%20Pacific%20Islands.pdf
  and https://policy.asiapacificenergy.org/sites/default/files/Off%20Grid%20PV%20Power%20Systems-%20System%20Install%20Guidelines%20for%20the%20Pacific%20Islands.pdf
- [S19] (S) SUVA, Lüftungsmassnahmen beim Laden von Bleibatterien. Page read (German).
  https://www.suva.ch/de-ch/praevention/nach-gefahren/gefaehrliche-materialien-strahlungen-und-situationen/explosionen-durch-brennbare-und-leichtentzuendliche-stoffe/lueftungsmassnahmen-beim-laden-von-bleibatterien
- [S20] (S) INOTEC, Venting and aerating batteries (cites EN 50272-2), page read; ZVEI leaflet 26e
  (VRLA degassing, 2018), PDF read; ZVEI leaflet 14e (traction, 0.055 factor), search excerpt.
  https://www.inotec-licht.de/en/practice/venting-and-aerating-batteries/ ,
  https://ZVEI.ORG/fileadmin/user_upload/Verband/Fachverbaende/Batterien/Merkblaetter/Industriebatterien/26e_Information_on_degassing_systems_for_VRLA_batteries_in_stationary_applications_2018.02.pdf
- [S21] (P) WHO, Lead poisoning fact sheet (10 June 2026). Read.
  https://www.who.int/news-room/fact-sheets/detail/lead-poisoning-and-health
- [S22] (P) UNICEF press release on *The Toxic Truth* (UNICEF and Pure Earth, 30 July 2020). Read;
  the full report not read. https://www.unicef.org/press-releases/third-worlds-children-poisoned-lead-new-groundbreaking-analysis-says ;
  report: https://www.unicef.org/reports/toxic-truth-childrens-exposure-to-lead-pollution-2020
- [S23] (P, government study) UK Office for Product Safety and Standards, *A Study on the Safety of
  Second-life Batteries in Battery Energy Storage Systems* (Christensen, Mrozik, Wise, Newcastle
  University, January 2023). Executive summary and conclusions read.
  https://assets.publishing.service.gov.uk/media/63d91ff0e90e0773da7fdb92/safety-of-second-life-batteries-in-bess.pdf
- [S24] (P) IEC 63330-1:2024, *Repurposing of secondary batteries - Part 1*, preview (iTeh):
  contents and scope. https://cdn.standards.iteh.ai/samples/104072/5a796f63e8e947fe956c51f173648aff/IEC-63330-1-2024.pdf .
  IEC 63338 and UL 1974: search excerpts only.
- [S25] (A, independent tester) lygte-info.dk, review of GTL LS18650 10000mAh. Read.
  https://lygte-info.dk/review/batteries2012/GTL%20LS18650%2010000mAh%20(White)%20UK.html .
  18650 capacity ceiling: vendor blog, search excerpt.
- [S26] (P) Victron Energy, white paper *Which solar charge controller: PWM or MPPT?*
  (20 January 2020). Full PDF read.
  https://www.victronenergy.com/upload/documents/White-paper-Which-solar-charge-controller-PWM-or-MPPT.pdf
- [S27] (A) Fake MPPT reports: bkhome.org (2019, reversed 2020), read
  https://bkhome.org/news/201905/mppt-regulator-is-genuine-mppt.html ; mousetrap.net blog (2018),
  read https://mouse.mousetrap.net/blog/2018/09/03/backchannel-guaranteed-fake/ ; Good Sam and
  solar-electric.com forum threads, search excerpts.
- [S28] (P/S) Efficiency for Access Coalition, policy brief *Promoting High-Performing Off-Grid
  Appliances* (June 2019). PDF read (pp. 1-5).
  https://assets.publishing.service.gov.uk/media/5d30a8cd40f0b64a7a6c07e5/Promoting_High-Performing_Off-Grid_Appliances.pdf
- [S29] (P) Efficiency for Access / Global LEAP, *Appliance Data Trends* (September 2018). PDF text
  read (TV section, Tanzania availability).
  https://assets.publishing.service.gov.uk/media/5bb3492bed915d25b68f6b87/Data-Trends-Report-Sept7-Final.pdf
- [S30] (P) VeraSol Product Database page, read: https://verasol.org/database/ . VeraSol
  certificate expiration policy and "valid evidence" note: search excerpts.
  https://storage.googleapis.com/verasol-assets/VeraSol_Product-Certificate-Expiration-Policy_v2-210303.pdf
- [S31] (S, cable maker) HELUKABEL, CCA inner conductor instead of aluminium or copper? Read.
  https://www.helu.com/us-en/newsroom/item/cca-inner-concuctor-instead-of-aluminium-or-copper.html
- [S32] (P) Energy Safe Victoria, E Cables branded power cable recall (2014). Read.
  https://www.energysafe.vic.gov.au/industry-guidance/electrical/industry-safety-alerts-and-recalls/e-cables-branded-power-cable
- [S33] (S) Fraunhofer ISE, Photovoltaics Report (May 2025 edition and July 2026 web update).
  Search excerpts only. https://www.ise.fraunhofer.de/en/publications/studies/photovoltaics-report.html
- [S34] (S/A) Counterfeit fuses: Littelfuse aftermarket catalogue (search excerpt)
  https://pdf.directindustry.com/pdf/littelfuse/littelfuse-north-american-automotive-aftermarket-catalog/17136-571198.html ;
  VIOX Electric article (search excerpt) https://viox.com/counterfeit-fuses-how-to-spot/ ; IH8MUD
  forum (search excerpt).
- [S35] (P) NTUA, *CARES Act: NTUA's Off-Grid Solar Program* (19 August 2020). PDF read.
  https://www.ntua.com/assets/-1-cares-act---ntua-s-off-grid-solar-units-description.pdf
- [S36] (P, academic) Welch García, *Trading solar panels for grid power: An ethnography of rural
  energy service in Peru*, Journal of Rural Studies (August 2020). PDF read (introduction).
  https://www.cei.washington.edu/wp-content/uploads/2020/07/Trading-solar-panels-for-grid-power-An-ethnography-of-rural-energy-service-in-Peru-Journal-of-Rural-Studies-August-2020.pdf
- [S37] (P) World Bank feature, *A game changer in Bangladesh's growth story: solar home systems*
  (8 April 2021). Read. https://www.worldbank.org/en/news/feature/2021/04/08/a-game-changer-in-bangladesh-growth-story-solar-home-systems .
  [S37-WB-PE] World Bank results briefs on Peru (2014, 2019): search excerpts only.
  https://www.worldbank.org/en/results/2019/05/13/promoting-rural-electrification-in-peru
- [S38] (S) Ember, *The take-off in African solar that official statistics can't yet see* (Jones and
  Nana, 27 August 2026). PDF text read (summary, battery imports).
  https://ember-energy.org/app/uploads/2026/08/Report-PDF-The-take-off-in-African-solar-that-official-statistics-cant-yet-see.pdf
- [S39] (P, abstract) Perriment, Kumtepeli, McCulloch, Howey, *Lead-acid battery lifetime extension
  in solar home systems under different operating conditions*, arXiv:2311.14098 (2023). Abstract
  read. https://arxiv.org/abs/2311.14098
- [S40] (S) pv magazine, *Lithium-ion vs lead-acid batteries* (2 September 2021), reporting a VUB /
  Jimma Institute of Technology study in Journal of Energy Storage. Read; the study not read.
  http://www.pv-magazine.com/2021/09/02/lithium-ion-vs-lead-acid-batteries/
- [S41] (S) Zubi et al., *Lithium-ion battery-packs for solar home systems: Layout, cost and
  implementation perspectives*, Journal of Energy Storage (2020). Abstract seen only as a search
  excerpt. https://re.public.polimi.it/handle/11311/1151384
