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
