# Open decisions (owner)

Questions the code leaves open until the owner decides. Delete an entry once decided and the rule
updated; the reason goes into the rule's *Why*.

- **Wire colours** (DIST-2.4): red / black / green-yellow (stocked everywhere, ABYC, ISO 10133)
  or IEC 60445:2021 red / white. The code uses red / black and states the departure.
- **PV voltage** (SYS-1.1, GEN-1.1): every circuit at or below 60 V, so panels in parallel only.
  The alternative (series strings above 60 V, ES2) needs PV-rated parts, skills and rules the code
  does not cover.
- **Standard connectors** (DIST-3.1): one family per voltage. Candidates: 5.5 x 2.1 barrel (12 V,
  5 A), USB-C PD, and Mini-Fit Jr or Anderson Powerpole for 24 V. The owner's Lark pages
  "Outlet - Electrical box" and "Outlet - 24mm Round" may already answer this (not exported yet).
- **Branch classes** (DIST-1.5): limited 3 A / standard 8 A / power 10 A fuses, from the 24 V
  picogrid safety study (`safety-model.md`).
- **Battery fuse distance** (STO-2.1): 200 mm (ISO 10133 / ABYC) rather than the RV standard's
  457 mm.
- **System sizes** (plan/system-sizes): Size A-D replace "Tier 0-3" (clash with the World Bank
  MTF tiers). Ranges reconcile two versions of the owner's notes: B 1-2.5 kWh, C 2.5-5 kWh.
- **Owner's Lark pages not yet exported**: Introduction; Distribution subpages (wiring standards,
  connectors and plugs, protection and fuses, outlets, splicing, DC breaker); Battery Storage;
  Power Generation; the tier pages; Part III Specific Applications; Academia for further reading.
- **Estimator defaults** (plan/system-estimator, `src/components/estimator/catalog.ts`): battery
  covers 1 day without sun (the owner's "about a day's worth") or 2 days (WHO site table: about
  2.3 days median with a 1.25 array oversize; `loads-and-sizing.md` B.4). Inverter idle 10 W
  (Victron datasheet 8 W, one measured 10 W) or higher for cheap inverters (the owner's notes say
  25-50 W). Starlink figures are from search excerpts only; check them by hand.
- **8 A standard branch fuse** (DIST-1.5): blade fuses (ATO, MINI) come in 7.5 A and 10 A, not
  8 A (`distribution-wiring.md` key finding 1). Change the class to 7.5 A, or name another fuse
  family. `install/distribution-wiring` tells installers to use 7.5 A until this is settled.
- **Bundled branches** (DIST-2.1): more than three branch cables bundled, or a hot roof run, steps
  up to 2.5 mm² (grouping factors from an unofficial copy of IEC 60364-5-52). Stated as advice on
  `install/distribution-wiring`; not yet a rule.
- **DC voltage drop in IEC TS 62257-9-4**: its Annex A figure title gives 15 % for d.c., looser
  than DIST-2.2 (3 % / 10 %). Values not seen; the code keeps the stricter limits.
- **Enclosure IP ratings** (DIST-5.2): guides range from IP20 to IP54 indoors and IP55 to IP65
  outdoors. The wiring page recommends IP54 indoors where dust or insects are common, IP65 outdoors.
- **Lead-acid fallback** (STO-1.1): `plan/when-parts-are-missing` allows deep-cycle lead-acid at
  50 % daily use and car batteries as a stopgap at 15 %, with ventilation and a named take-back
  point. Make the take-back point a rule (SYS-2.1)? Equalising a 24 V flooded bank (32.4 V)
  exceeds the 24 V device range: a rule that loads are off during equalise?
- **Second-life lithium**: the alternatives page says "never" as the system battery. A rule under
  STO-1?
- **Grid backup page** (plan/grid-backup): the owner's 30 V power-supply setting exceeds a 24 V
  ORing module's input range (MEAN WELL DRDN20-24: 19-29 V, distributor listing) and the 8S LFP
  charge limit; the page now stops at about 28 V. Confirm.
