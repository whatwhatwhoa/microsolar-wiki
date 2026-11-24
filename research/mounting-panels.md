# Mounting panels: angle, shade, clearance, fixings, cables, cable entry

Behind install/mounting-panels. Read 2026-11-23 (page numbers are PDF pages). Quotes verbatim;
the key ones were re-checked against the downloaded text or page image.

## Sources read

- [JINKO] JinkoSolar Global Installation Manual 202605 A1.8 EN, in full (31 pp).
  https://www.jinkosolar.com/uploads/[FINAL] JinkoSolar Global Installation Manual_202605_A1.8-EN.pdf
- [LONGI] LONGi PV Module User Manual for DGBG 1.0, in full (16 pp); no clamp or torque table.
  https://static.longi.com/LON_Gi_PV_Module_User_Manual_for_DGBG_1_0_260409_114d652c10.pdf
- [SEIAPI-OG] SEIAPI / PPA, Off Grid PV Power Systems - System Install Guidelines for the Pacific
  Islands (2012); text layer scrambled, pp. 6, 7, 14, 15 read as images.
  https://policy.asiapacificenergy.org/sites/default/files/Off%20Grid%20PV%20Power%20Systems-%20System%20Install%20Guidelines%20for%20the%20Pacific%20Islands.pdf
- [SEIAPI-GC] SEIAPI, Grid-Connected PV Systems (No Battery Storage) Installation Guidelines for
  the Pacific Islands (2012), pp. 1-13.
  https://policy.asiapacificenergy.org/sites/default/files/Grid-Connected%20PV%20%28No%20Battery%20Storage%29-%20System%20Installation%20Guidelines%20for%20the%20Pacific%20Islands.pdf
- [CTS] James Cook University Cyclone Testing Station, Technical Report 72, TC Narelle - Damage
  to structures (2026), section 6.9 and recommendations.
  https://www.jcu.edu.au/__data/assets/pdf_file/0011/2336834/Technical-Report-72-TC-Narelle-v1.pdf
- [CEC5033] Clean Energy Council, Advice on AS/NZS 5033, Issue 1 (2021), in full.
  https://assets.cleanenergycouncil.org.au/documents/Advice-on-ASNZS-5033.pdf
- [CEC14] Clean Energy Council, Guidelines for grid-connected solar PV systems, Issue 14 (2022).
  https://assets.cleanenergycouncil.org.au/documents/accreditation/V14_CEC-Guidelines-for-grid-connected-solar-pv-systems-no-storage-MAY-2022.pdf
- [NREL] Deline, Partially Shaded Operation of a Grid-Tied PV System, NREL/CP-520-46001 (2009),
  pp. 1-4. https://www.osti.gov/servlets/purl/958224
- [DOE] US DOE, Solar PV Cable Management: Best Practices to Support DC-String Cables (2024).
  https://www.energy.gov/sites/default/files/2024-07/pv-cable-management-best-practices.pdf
- [EIA] EIA Today in Energy, 26 Oct 2018 (short quotes only). https://www.eia.gov/todayinenergy/detail.php?id=37372
- IEC TS 62257-7-1:2010 and 62257-9-4:2016 previews: no mounting or orientation text in the
  readable part (7-1 lists "4.2 Mechanical design" in its contents; it points to IEC 60364-7-712).

## Angle and direction
- Face the equator: south in the north, north in the south (JINKO p11, LONGI p7). 30° off: 10-15 %
  less; 60° off: 20-30 % less (JINKO p11).
- SEIAPI-OG p6: true north/south ± 10°, tilt = latitude in the tropics, latitude + 5-15° outside;
  "Between latitudes 10° South and 10°North the array should be tilted at a minimum of 10
  degrees"; with a cloudy wet season, tilt for the sun in the sunny season (Palau, lat 7°: 20°).
- Self-cleaning: "more than 10°" (JINKO p11).
- Size off-grid for the worst month (LONGI p7, JINKO p11). Same tilt and direction in a string
  (LONGI p7).
- EIA: tilt = latitude maximises annual direct sun.

## Shade
- "a shadow can represent a reduction in power over 30 times its physical size" (NREL p1).
- "Shading half of one cell negates all the power produced by the 18 cells in that bypass diode
  group" (NREL p3); bypass diodes do not cure shade (JINKO p11). "free from shadows throughout the
  year" (LONGI p7). Lowest edge above weeds and shrubs (LONGI p8). Clamps must not shade (JINKO).

## Cooling and clearance
- ≥ 10 cm from frame lower edge to the mounting surface (JINKO p10; LONGI p8, also a fire-rating
  minimum on p7). SEIAPI-OG p6: "> 50mm". Wiki uses 10 cm (safer, and the makers' value).
- ≥ 10 mm between panels (JINKO p9, LONGI p8). Do not block frame drain holes (LONGI p8).

## Fixings and wind
- Do not drill the frame (JINKO p6, LONGI p6: weakens it, corrosion, voids warranty).
- JINKO Table 1: M8 in 14 x 9 mm holes 16-20 Nm; M6 in 10 x 7 mm holes 9-12 Nm; anti-corrosion
  bolts with spring and flat washers; confirm with the rack maker. Clamps: at least four per
  panel, not touching glass, ≥ 50 mm long, ≥ 3 mm thick, 16-20 Nm; clamp zones per model table.
- Test load = 1.5 x design load (JINKO p12, LONGI p8); e.g. +5400/-2400 Pa, +2400/-2400 Pa.
- CTS p79: fasten "to the roof structure - not just the roof sheeting"; p78 sheeting-only fixings
  tore roofing and let water in; p55 clamps broke or panels slipped out; p54 a ground-mount panel
  travelled 250 m.
- SEIAPI-OG p6: fixings for the highest wind speed of the region; similar metals or stainless,
  separate dissimilar metals with rubber washers; timber for long-term outdoor use; roof
  penetrations waterproof for the system's life. p7: ground mounts wind-rated.
- Not found: ground-mount ballast or anchor instructions.

## Cables and connectors
- Bend radius at least 43 mm (LONGI p9). Strain on the connector or junction box at most 60 N
  (JINKO p9). Cable ties must not scratch or squeeze the panel back (JINKO p8).
- Never mate different connector makes (LONGI p9, JINKO p24, SEIAPI-GC p13).
- Keep connectors off the roof and out of standing water (LONGI p9; JINKO p28 IP68 but no
  prolonged submersion; SEIAPI-GC p13: cables supported clear of the roof surface).
- UV-resistant ties and clamps (LONGI p9); plastic ties "not suitable for cables in exposed
  situations" (SEIAPI-GC p12); standard ties fail early, use stainless 316 or PVDF clips (DOE p1).
- Support at most every 600 mm (DOE quoting NEC 690.31(C), a US code; no IEC figure found).
- Fix cables so they do not move; UV and mechanical protection, e.g. conduit (SEIAPI-OG p14).

## Cable entry
- CEC5033 p17-18 (on AS/NZS 5033): entry higher than the lowest point of the cable (drip loop);
  glands not in the top face of an enclosure, IP56 or better, one cable per hole; drain at the
  lowest point of outdoor conduit; strain relief at terminations; sealant not relied on unless
  the maker specifies it.
- Roof penetrations: collar flashing (CEC14 4.3.1); sealed for the system's life (SEIAPI-OG p6).

## Safety while mounting
- Do not stand or step on panels (JINKO, LONGI). Fall protection, ladder, PPE on roofs; do not
  work in strong wind (LONGI). Panels stop only when covered by opaque board or kept from light
  (JINKO). Frame earthing through the marked holes only, no extra holes (JINKO p28, LONGI p10).
