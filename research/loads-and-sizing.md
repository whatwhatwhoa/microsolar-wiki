# Loads and sizing: sourced numbers for the system estimator

Research for the estimator page (pick loads, get daily Wh, panel, battery and controller sizes).
Researched 2026-11-23. The design method (resource, loads, plant type, monitoring) and the MTF
tiers are in `iec-62257.md` sections 2.4 and 3; this note adds appliance data and sizing factors.

How to read this file:

- Every number carries a tag such as [GL-F]; the Sources list gives the URL, the class and what
  was read. "Search excerpt" means only a search-engine summary was seen: a lead until someone
  reads the page. "My arithmetic" or "my estimate" marks numbers that are mine.
- Watts are at the appliance input: battery-side for DC loads. AC loads add inverter loss and idle.

## A. Loads

### A.1 Lighting

- LEDVANCE LED Star Classic A (E27, 12-36 V AC/DC): 9 W, 940 lm, 104 lm/W, 25 000 h [LDV].
- ENERGY STAR minimum lumens by old bulb: 40 W = 450 lm, 60 W = 800, 75 W = 1 100, 100 W = 1 600
  [ES-BR]. FTC: 800 lm from an LED of about 9 W (89 lm/W, my arithmetic) [FTC, search excerpt].
- A "lumens" note can say: a room light of 400-800 lm takes about 4-9 W at 90-100 lm/W.

### A.2 Phones

- Smartphone, dead to full by cable: 14.26 Wh at the wall; wireless about 21 Wh (OneZero 2020, one
  phone) [OZ]. Feature phone: Nokia 105 (2024) 1 000 mAh, up to 18 days standby [HMD, search
  excerpt]; 1 000 mAh x 3.7 V = 3.7 Wh (my arithmetic).

### A.3 Laptop, mini PC

- MacBook Air 13": 53.8 Wh battery, up to 15 h wireless web, 40 W adapter (up to 60 W) [APL-MBA];
  about 3.6 W in light web use (my arithmetic); charging while in use draws up to the adapter.
  No neutral "average laptop watts" source was found; the default is my estimate in these bounds.
- Mac mini (2024, M4): 4 W idle, 65 W maximum [APL-MINI]. NUC reviews show 5-13 W idle (leads).

### A.4 Internet: router, ONT, Starlink

- Fibre modem plus Wi-Fi router, one home over 61 days: 12.7 W average, near constant [ERIC, search
  excerpt]. Leads: a UK ISP router 6 W idle, 10 W loaded; EnergySage "5 to 20 W", 10 W typical.
- EU Code of Conduct on broadband equipment (device power limits): JRC PDF blocked, **not read**.
- Starlink Standard (current kit): average 75-100 W, idle 20 W, for dish, router, supply and cable,
  at the AC input [SL-S, SL-K]. Older Standard dishes and a Standard Actuated page: 50-75 W [SL-S].
- Starlink Mini: average 25-40 W, 12-48 V DC input, 60 W maximum [SL-M]; help page: 20-40 W
  average, 15 W idle, wants a 100 W (20 V 5 A) USB PD source, no run below 65 W PD [SL-MH].
- All Starlink figures are search excerpts of starlink.com (pages load by script; fetch returned
  only "Starlink"). Check by hand before a page cites them.

### A.5 Fans and radio

Global LEAP 2017 buyer's guide, lab-tested at maximum speed [GL-T]:

| Type | Models | Tested W (rated W) | Air m3/min |
|---|---|---|---|
| Ceiling, 1 040-1 410 mm (mostly 12/24 V DC, one AC) | 8 | 20.5-34.2 (20-36) | 140-200 |
| Pedestal, 352-385 mm, 12 V DC | 4 | 6.9-21.8 (9-30) | 27-42 |
| Large table, 286-350 mm | 2 | 9.6-10.5 (12-19) | 31-36 |
| Small table, 140-245 mm (one 5 V) | 3 | 4.7-9.0 (3-16) | 7-13 |

- The 5 V 140 mm fan (USB-style) was rated 3 W and tested at 8.1 W [GL-T].
- Efficiency for Access sizes fan systems for "nine hours of use in hot seasons"; five market
  pedestal fans in Pakistan drew 14-34 W [EFA-DT].
- Radio: no tested source found; the guides only name a radio inside small kits [GL-T].

### A.6 Television (DC, Global LEAP 2017, as-shipped settings) [GL-T]

| Size | Models | Tested on-mode W | Max on-mode W | Standby W |
|---|---|---|---|---|
| 15.6" | 2 | 6.5-9.8 | 8.7-11.4 | 0.08-0.17 |
| about 19-22" | 5 | 8.6-22.1 | 10.8-26.6 | 0.17-0.31 |
| 23.6-24" | 6 | 11.7-23.4 | 13.4-27.1 | 0.10-0.39 |
| 32" | 2 | 13.6-21.9 | 23.2-27.0 | 0.19-0.39 |

Efficiency for Access sizes TV systems for five hours of evening viewing [EFA-DT].

### A.7 Refrigeration

Global LEAP 2019: 21 off-grid units lab-tested at 32 C ambient; all DC except one direct-drive
unit [GL-F]:

| Category | Volume L | Measured kWh/day at 32 C | Inrush A |
|---|---|---|---|
| Small fridge (4) | 16-42 | 0.143-0.376 | 1.1-5.1 |
| Medium fridge (3) | 84-96 | 0.182-0.787 | 1.5-8.6 |
| Large fridge (5) | 113-237 | 0.164-0.510 | 4.0-5.8 |
| Fridge-freezer (4) | 80-214 | 0.526-1.174 | 3.7-6.7 |
| Solar direct drive (5) | 36-209 | 0.167-0.722 | 3.3-6.1 |

- Median of the 12 plain fridges (small, medium, large): about 0.30 kWh/day (my arithmetic).
  Declared voltage ranges: 9-16 V, 10-31 V or 10-45 V [GL-F].
- Declared values are often far below lab results, mostly because makers test at 21-25 C: Phocos
  FR170 declares 0.097 (21 C), measured 0.283; Hinnova BCD-85 declares 0.45 (25 C), measured 1.174
  [GL-F]. Use the tested 32 C value.
- Fridge-freezers average about 1 kWh/day at 32 C, up to five times a fridge [EFA-DT]. CLASP
  baseline of 36 units: 0.902 kWh/day at 32 C, 1.505 at 43 C (+67 %) [CL-RB, search excerpt].
- Chest freezers: no Global LEAP category and no tested source found.
- Secop BD35F (12/24 V, R134a, static cooling), input at 12 V [SEC]: at -23 C evaporating 24.5 W
  (2 000 rpm) to 43.7 W (3 500 rpm), 2.0-3.6 A; at -10 C 36.5-65.9 W, 3.1-5.5 A. "For 24V
  applications the following must be halfed". Fuse 15 A (12 V) / 7.5 A (24 V); cut-out 10.4 /
  22.8 V, cut-in 11.7 / 24.2 V [SEC].
- Efficient AC fridge: ENERGY STAR Most Efficient top-freezers near 18 cu ft (510 L) list 362-369
  kWh/year (about 1.0 kWh/day) against a federal limit of 406-409 [ES-PF, search excerpt]; the most
  efficient are 16-20 cu ft and top-freezer [ES-REF]. US test values, not 32 C; add inverter loss.

### A.8 Inverter (24 V, 230 V AC)

Victron Phoenix Inverter VE.Direct 230 V datasheet, 24 V column [VE-INV]:

| Model | Cont. W at 25 C | Peak | Max efficiency | Zero-load W | ECO mode W |
|---|---|---|---|---|---|
| 24/500 | 450 | 750 W / 3 s | 88 % | 8 | 1 |
| 24/800 | 800 | 1 200 W / 15 s | 90 % | 8 | 2 |
| 24/1200 | 1 150 | 1 600 W / 15 s | 91 % | 11 | 2 |

- ECO mode sleeps below a set load (minimum 15 W) and retries every 2.5 s [VE-INV]; it suits a
  lights-only night, not a router or fridge that runs all day.
- 8 W for 24 h = 192 Wh/day, about a 24" DC TV for 8 hours (my arithmetic). A user measured
  10 W at no load on a 12/1200 rated 7 W [VE-COM, lead]. Light-load efficiency is not published.

### A.9 Other loads

- Pump: Shurflo 2088 12 V diaphragm pumps, maximum draw 6.0-10.1 A by model; a 24 V model has no
  published current [PEN, search excerpt]. 6-10 A at 12 V = 70-120 W (my arithmetic). The Global
  LEAP pump guide covers irrigation pumps on their own PV, not battery-fed household pumps [GL-P].
- Sewing machine: Singer Heavy Duty 4423 rated 84 W, 0.7 A, 120 V AC [SG, search excerpt].
- Tool charger: Makita DC18RC, 240 W continuous input, 15-55 min per battery [MK, search excerpt].
- PoE security camera, maximum: 10 W single-lens below 8 MP, 11-12 W 12 MP and dual-lens, 20-28 W
  PTZ and floodlight; IR and spotlights raise it; typical draw not published [RL].
- CPAP: AirSense 11 with humidifier 56 W typical, 73 W peak, 24 V 2.71 A [RM, retailer excerpt];
  ResMed's own AirSense 10 table returned 403 [RM-10]. 15-25 W without humidifier is a lead only.

### A.10 Start (surge) current

- DC compressor fridges: lab inrush 1.1-8.6 A [GL-F] on compressors that run at about 2-5 A at
  12 V [SEC]: about 1-2 times running current (my reading of the two).
- AC motors through an inverter: no maker multiple found. Victron Community users: "5-10 times";
  4 for AC, 3 for a pump; a moderator turned down a 12/1200 for a 28 A / 6 400 W compressor start;
  "inverter compressor" appliances almost remove the surge [VE-COM, leads only].
- Estimator: compare start power with the inverter peak rating (A.8); prefer DC or inverter
  compressors. The multiple stays a lead until a maker figure is found.

## B. Sizing factors

### B.1 Peak sun hours (PSH)

- PSH = daily kWh/m2 on the panel plane, i.e. hours at 1 000 W/m2 [VE-RV]. Size on the worst month,
  not the year [PSU, WHO].
- Look up: PVGIS (EU JRC; off-grid tool), Global Solar Atlas (PVOUT kWh/kWp, monthly long-term
  means), NASA POWER (all-sky insolation, monthly climatology, tilt = latitude +/- 15 degrees)
  [PVGIS, GSA, NASA, search excerpts]; IEC TS 62257-200 names the same three.
- PVGIS off-grid takes battery Wh, cut-off % and daily Wh and returns % of days full and empty, by
  month [PVGIS, search excerpt]: a good cross-check for the estimator.
- Worst-month mean daily radiation, tropical stations (WHO / Southampton Table 1, WRDC; my parse of
  about 200 rows, extraction imperfect): 10th percentile 3.1, median 4.2, 90th percentile 5.2
  kWh/m2/day. Examples: Nairobi 3.69 (Jul), New Delhi 3.66 (Dec), Kumasi 3.35 (Aug) [WHO].

### B.2 Losses from panel nameplate to battery

- PVWatts V5 default system losses 14 %: soiling 2, shading 3, snow 0, mismatch 2, wiring 2,
  connections 0.5, light-induced degradation 1.5, nameplate 1, age 0, availability 3 [NREL-PVW].
  It **excludes** temperature (module coefficients -0.47 %/C standard, -0.35 %/C premium, 2014)
  and the inverter [NREL-PVW]. NREL cut the lumped DC loss to about 6 % in 2019 and now models
  shading and snow apart [NREL-19, search excerpt].
- Temperature: a cell at 60 C with -0.35 %/C loses about 12 % (my arithmetic). MPPT: Victron's
  example uses 0.975 [VE-MPPT].
- Off-grid system losses (dust, battery coulombic loss, controller): "typically between 10% and
  20%"; WHO PQS PV01.2 wants the array to supply "the load plus system losses x 1.25" [WHO].
- My chain: 0.86 (PVWatts) x 0.90 (heat) x 0.975 (MPPT) = 0.75 to the battery; x 0.92 battery
  round trip = 0.69 back out.

### B.3 LiFePO4

- Victron Lithium Battery Smart: round trip 92 %; 2 500 cycles at 80 % DoD, 3 000 at 70 %, 5 000
  at 50 % (to 80 % capacity); end of discharge 11.2 V / 22.4 V for 12.8 / 25.6 V [VE-LFP].
- Victron RV article: lithium "can typically be safely discharged to about 80%", but its example
  divides by 0.9 [VE-RV]. Vendors: recommended DoD 80 % (EPEVER) or 90 % (BSL); round trip 94.5 %
  (EG4) [VEND, search excerpts].

### B.4 Days of autonomy

- WHO PQS (solar vaccine fridges): "minimum autonomy will be no less than 3 days"; site table or
  5+ years of daily data first, else "a minimum of 5 days of autonomy" [WHO].
- The WHO tool sets days for 20 years without load shedding; more array cuts the days needed. Table
  1 medians (my parse) at array-to-load ratio 1.0 / 1.1 / 1.25: about 8.0 / 4.3 / 2.3 days; 90th
  percentile about 15 / 9 / 5 [WHO]. The ratio is defined in IEEE 1562 (quoted in [WHO]).
- Penn State AE 868: about 3 days gives 95 % availability at PSH 5; critical loads, 99 %, about
  10 days at PSH 4 [PSU]. Victron RV example: 3 days [VE-RV]. AS/NZS 4509.2 "2 to 5 days" is
  second-hand [lead]. IEEE 1562-2021 and IEEE 1013-2019: scope only, no values [IEEE].

### B.5 DC-DC converters

- Victron Orion-Tr isolated 24/12-20 and 24/12-30: 88 %, no-load below 100 mA; family 87-89 %
  [VE-ORI]. Non-isolated 24/12: 95 % (5 A) to 97 % (10-20 A), no-load below 35 mA [VE-ORN, search
  excerpt]. USB-C PD outputs: no maker figure found; 85-90 % is my estimate.

### B.6 Charge controller current

- "61.9V Vmpp* 2.74A Impp / 48V Battery voltage * 0.975 Efficiency = 3.45A" [VE-MPPT], i.e.
  PV W / battery V x 0.975. Victron's calculator allows 130 % PV over the controller rating, "less
  than 1% annual energy loss"; check Voc at the coldest temperature [VE-MPPT].
- Example (my arithmetic): 2 x 450 W at 25.6 V: 900 / 25.6 x 0.975 = 34 A; a 30 A controller
  is within 130 % (30 A x 25.6 V x 1.3 = 1 000 W).

## C. Conflicts between sources (safer value in the defaults)

1. Starlink: Mini 25-40 W (spec) vs 20-40 W (help); Standard 75-100 W now vs 50-75 W older dishes.
2. Declared vs tested: fridges declare down to a third of the 32 C lab value; a TV rated 40 W tested
   23.4 W; a 5 V fan rated 3 W tested 8.1 W [GL-F, GL-T]. Pedestal fans: Awards 7-10 W, Pakistan
   market 14-34 W [EFA-DT]. Phoenix idle: datasheet 7 W, a user measured 10 W [VE-COM].
3. Victron lithium DoD: text 80 %, its example 90 % [VE-RV]. PVWatts losses: 14 % (2014) vs about
   6 % lumped DC (2019); neither includes heat.

## D. Defaults proposed for the estimator

Hours per day are my planning estimates unless a source is tagged.

| Item | Default | Range | Source |
|---|---|---|---|
| LED room light | 5 W x 5 h; 100 lm/W | 3-10 W; 80-104 lm/W | LDV, ES-BR, FTC |
| Smartphone | 15 Wh/day each | 14-21 Wh | OZ |
| Feature phone | 1 Wh/day | 0.5-2 | HMD (my arithmetic) |
| Laptop | 20 W x 4 h | 4-60 W | APL-MBA (bounds; default mine) |
| Mini PC | 15 W x 8 h | 4-65 W | APL-MINI |
| Router / ONT | 10 W x 24 h | 6-13 W | ERIC, leads |
| Starlink Standard | 90 W x 24 h | 20 idle, 75-100 W | SL-S, SL-K |
| Starlink Mini | 30 W x 24 h | 15 idle, 20-40 W | SL-M, SL-MH |
| Radio | 3 W x 4 h | 1-5 W | none found (mine) |
| DC ceiling fan | 25 W x 9 h | 20-34 W | GL-T; hours EFA-DT |
| DC table / pedestal fan | 10 W x 9 h | 5-22 W | GL-T; EFA-DT |
| USB fan (5 V) | 5 W x 6 h | 3-8 W | GL-T |
| DC TV 24" | 15 W x 5 h | 12-24 W | GL-T; hours EFA-DT |
| DC TV 32" | 20 W x 5 h | 14-27 W | GL-T; EFA-DT |
| DC fridge at 32 C | 0.30 kWh/day | 0.14-0.79 | GL-F |
| DC fridge-freezer at 32 C | 1.0 kWh/day | 0.53-1.17 | GL-F, EFA-DT |
| DC compressor running | 45 W | 25-66 W | SEC |
| Efficient AC fridge | 1.0 kWh/day + inverter | 0.95-1.25 | ES-PF |
| Inverter idle, 24 V 500-800 W | 8 W x 24 h | ECO 1-2; 1200 W: 11 | VE-INV |
| Inverter efficiency | 0.85 | 0.84-0.91 (peak) | VE-INV (margin mine) |
| 12/24 V water pump | 80 W x 0.5 h | 70-120 W | PEN |
| Sewing machine (AC) | 85 W x 2 h | 85-100 W | SG |
| Tool charger (AC) | 240 W x 0.5 h | 0.25-1 h | MK |
| Security camera | 6 W x 24 h | 3-12 W (PTZ to 28) | RL (maximum only) |
| CPAP | 55 W x 8 h with humidifier | 15-73 W | RM (lead) |
| Surge, DC compressor | 2 x running | 1-2 | GL-F, SEC |
| Surge, AC motor via inverter | 5 x running | 3-10 | VE-COM (lead only) |
| Worst-month PSH | 4.0 h (user enters own) | 3.1-5.2 tropics | WHO; PVGIS, GSA, NASA |
| Panel to battery factor | 0.75 | 0.65-0.85 | NREL-PVW, VE-MPPT, WHO |
| Array oversize factor | 1.25 | 1.0-1.3 | WHO (PQS PV01.2), VE-MPPT |
| LiFePO4 usable DoD | 0.80 | 0.80-0.90 | VE-LFP, VE-RV, VEND |
| LiFePO4 round trip | 0.92 | 0.90-0.95 | VE-LFP, VEND |
| Autonomy, household | 2 days (with 1.25 array) | 1-3 | WHO Table 1, PSU, VE-RV |
| Autonomy, critical load | 5 days | 3 minimum | WHO |
| DC-DC 24 to 12 V | 0.90 | 0.88-0.97 | VE-ORI, VE-ORN |
| USB-C PD output | 0.85 | 0.85-0.90 | none found (mine) |
| Controller current | PV W / V_batt x 0.975 | down to 1/1.3 of that | VE-MPPT |

## Sources

Classes: P = primary (test data, standard text, manufacturer); S = secondary; L = lead.

- [GL-F] (P) Global LEAP 2019 Buyer's Guide, Off-Grid Refrigerators. Full PDF text read. https://assets.publishing.service.gov.uk/media/5ddd5b7d40f0b650e4a64d0b/2019-Global-LEAP-Refrigerators-Buyers-Guide_final.pdf
- [GL-T] (P) Global LEAP 2017 Buyer's Guide, Off-Grid Fans and Televisions. Full PDF text read. https://cdn.shopify.com/s/files/1/0686/0279/0141/files/global_leap_awards_buyers_guide_fans_and_televisions_2016_17_winner_superfan.pdf
- [GL-P] (P) Global LEAP 2019 Solar Water Pump Buyer's Guide. Definitions and first product read. https://assets.publishing.service.gov.uk/media/5ddd5868e5274a79476d2942/2019-Global-LEAP-SWP-Buyers-Guide_final.pdf
- [EFA-DT] (P/S) Efficiency for Access, 2021 Appliance Data Trends. TV, fan, fridge parts read. https://www.clasp.ngo/wp-content/uploads/2021/01/2021-ApplianceDataTrends.pdf
- [CL-RB] (S) CLASP, Off-Grid Refrigerator Market Baseline Report, May 2018. Search excerpt. https://storage.googleapis.com/e4a-website-assets/Market-Baseline-Report-Off-Grid-Refrigerators-May2018.pdf
- [SEC] (P) Secop BD35F datasheet 101Z0204, Sep 2024. Full PDF text read. https://secop.com/fileadmin/user_upload/SEPS/datasheets/en/bd35f_101z0204_r134a_12-24vdc_09-2024_desd100p822.pdf
- [VE-INV] (P) Victron, Datasheet Inverter VE.Direct 250-1600 W 230 V. Full PDF text read. https://www.victronenergy.com/upload/documents/Datasheet-Inverter-VE.Direct-250W-1600W-230V-EN.pdf
- [VE-LFP] (P) Victron Lithium Battery Smart manual, Technical data. Read. https://www.victronenergy.com/media/pg/Lithium_Battery_Smart/en/technical-data.html
- [VE-MPPT] (P) Victron blog, Matching solar modules to the new MPPT charge regulators, 2014-03-28. Read. https://www.victronenergy.com/blog/2014/3/28/matching-victron-energy-solar-modules-to-the-new-mppt-charge-regulators
- [VE-RV] (P/S) Victron knowledge article, How to size an RV solar system, 2026. Read. https://www.victronenergy.com/knowledge-articles/2026/5/4/how-to-size-rv-solar-system
- [VE-ORI] (P) Victron Orion-Tr Smart isolated, Specifications. Read. https://www.victronenergy.com/media/pg/Orion-Tr_Smart_DC-DC_Charger_-_Isolated/en/specifications.html
- [VE-ORN] (P) Victron Orion-Tr low power non-isolated datasheet (EN; NL for no-load). Search excerpt. https://www.mygenerator.com.au/assets/images/resource/pdf/Datasheet-Orion-Tr-DC-DC-converters-low-power,-non-isolated-EN.pdf
- [VE-COM] (L) Victron Community: Phoenix idle; compressor inrush. Search excerpts. https://community.victronenergy.com/t/phoenix-1200-12-zero-load-power-much-higher-than-specified-measured-10-w-vs-7-w/47181 and https://communityarchive.victronenergy.com/questions/14393/compressor-inrush-current-pulse-width.html
- [NREL-PVW] (P) Dobos, PVWatts Version 5 Manual, NREL/TP-6A20-62641, 2014. Tables 2, 3, 6 and changes read (web archive). https://webarchive.library.unt.edu/web/20170124203116/http://www.nrel.gov/docs/fy14osti/62641.pdf
- [NREL-19] (P) Dobos, Freeman, Blair, Improvements to PVWatts, 2019. Search excerpt (nrel.gov did not resolve). https://nrel.gov/docs/fy19osti/74097.pdf
- [WHO] (P) WHO PQS, Solar autonomy calculation method (2011), incl. Toma and Markvart, Solar Autonomy Calculation Tool (2009). Full PDF text read; Table 1 parsed by me. https://extranet.who.int/prequal/key-resources/documents/solar-autonomy-calculation-method
- [PSU] (S) Penn State AE 868, Stand-alone system sizing. Read. https://courses.ems.psu.edu/ae868/node/924
- [IEEE] (P, abstract) IEEE 1562-2021 page; IEEE 1013-2019. Search excerpts. https://standards.ieee.org/ieee/1562/10272/
- [PVGIS] (P) EU JRC, PVGIS off-grid tool. Search excerpt. https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis/using-pvgis-5/pvgis-5-tools/grid-pv-systems_en
- [GSA] (P) Global Solar Atlas PVOUT data, World Bank. Search excerpt. https://www.energydata.info/dataset/world-photovoltaic-power-potential-pvout-gis-data-global-solar-atlas
- [NASA] (P) NASA POWER solar FAQ. Search excerpt. https://power.larc.nasa.gov/docs/faqs/solar/
- [SL-S] [SL-K] [SL-M] [SL-MH] (P) Starlink: Help "How much power does my Starlink need?"; Standard kit page and spec sheet; Mini specifications; Help on Mini power. All search excerpts. https://starlink.com/au/support/article/18836c7e-2d97-6153-fe67-c18427bd0558 , https://www.starlink.com/kit , https://starlink.com/public-files/specification_sheet_standard.pdf , https://starlink.com/specifications?spec=5 , https://www.starlink.com/support/article/a7fe6525-5356-a837-48e6-33df176cdbc5
- [ERIC] (S) Malmodin et al., Just measure it, Ericsson 2023. Search excerpt. https://www.ericsson.com/4ac286/assets/local/about-ericsson/sustainability-and-corporate-responsibility/documents/2023/malmodin2023-just-measure-it.pdf
- [EU-COC] (P) EU Code of Conduct, broadband equipment (JRC). Not read (blocked). https://e3p.jrc.ec.europa.eu/sites/default/files/2024-04/jrc136991_kjna31875enn.pdf
- [ES-BR] / [ES-REF] (P) ENERGY STAR, Learn about brightness; Refrigerators. Both read. https://www.energystar.gov/products/lighting_fans/light_bulbs/learn_about_brightness , https://www.energystar.gov/products/refrigerators
- [ES-PF] (P) ENERGY STAR Most Efficient refrigerator listings. Search excerpts. https://www.energystar.gov/most-efficient/me-certified-refrigerators/results
- [FTC] (P) FTC, Shopping for light bulbs. Search excerpt (404 on fetch). https://consumer.ftc.gov/articles/0164-shopping-light-bulbs
- [LDV] (P) LEDVANCE LED Star Classic A 65 9W 840 12-36V. Product page read. https://www.ledvance.com/shortlink/4058075757622
- [APL-MBA] / [APL-MINI] (P) Apple, MacBook Air specs; Mac mini power consumption. Both read. https://www.apple.com/macbook-air/specs/ , https://support.apple.com/en-us/103253
- [OZ] (S) Engadget on wireless charging (cites OneZero 2020). Read; OneZero not read. https://engadget.com/2200186/wireless-charging-wastes-electricity-why/
- [HMD] (P) HMD, Nokia 105 (2024). Search excerpt. https://www.hmd.com/en_int/nokia-105-2024
- [RL] (P) Reolink, Power consumption of Reolink PoE cameras. Read. https://support.reolink.com/hc/en-us/articles/900000593323-What-is-the-Power-Consumption-of-Reolink-POE-Cameras
- [PEN] [SG] [MK] (P) Pentair Shurflo 2088 series; Singer Heavy Duty 4423; Makita NZ DC18RC. Search excerpts. https://www.pentair.com/en-us/flow/shurflo/shurflo-products/shurflo-agricultural-industrial-applications/agricultural-industrial-pumps/2088-series-diaphragm-pumps.html , https://www.singer.com/Heavy-Duty-4423-Sewing-Machine , https://www.makita.co.nz/products/model/DC18RC
- [RM] (L) Retailer listing, AirSense 11 with HumidAir, search excerpt; [RM-10] (P) ResMed Air10 power table, not read (403). https://www.respshop.com/cpap-machines/auto-cpap/resmed-airsense-autoset-cpap-with-humidair-p-1692.html , https://document.resmed.com/documents/products/machine/air10-lumis-series/Power+consumption+Air10+devices.pdf
- [VEND] (P, vendor) LiFePO4 sheets: EPEVER LFP3.84KWH25.6V, BSL B-LFP-48-100E, EG4 whitepaper. Search excerpts. https://www.epever.com/wp-content/uploads/2024/10/LFP3.84KWH25.6V-P65L2-EN-1.pdf , https://www.bsl-battery.com/uploads/B-LFP-48-100E-3U-Datasheet-en2.pdf , https://eg4electronics.com/wp-content/uploads/2024/07/SoH-DoD-and-Round-trip-Efficiency-Explained-Whitepaper.pdf
- Leads not used for defaults: EnergySage https://energysage.com/electricity/house-watts/how-many-watts-does-a-wi-fi-router-use ; ISPreview router test https://www.ispreview.co.uk/index.php/2024/03/the-2024-electricity-costs-of-big-uk-isp-home-broadband-routers.html ; NUC reviews (HotHardware, ServeTheHome, AnandTech); GSES on AS/NZS 4509.2 (403) https://www.gses.com.au/oversized-pv-array-and-battery-days/
