# Install order and troubleshooting: what the manuals say

Behind install/connection-order and maintain/troubleshooting. Read 2026-11-23: full manual pages
(HTML) and full PDFs, converted to text; quotes are verbatim. Not read: EPEver XTRA manual, the
Phoenix VE.Direct 12/24 V manual (the 230 V HW15 one was read), IEC TS 62257 previews for these
topics.

## Sources read

- Victron SmartSolar MPPT 150/35-150/45: installation, operation, troubleshooting, safety.
  https://www.victronenergy.com/media/pg/Manual_SmartSolar_MPPT_150-35__150-45/en/installation.html
  (troubleshooting is `troubleshooting.html`, not `troubleshooting-and-support.html`)
- Victron SmartSolar MPPT 75/10-100/20 (has a load output; covers the 75/15) and 100/30-100/50:
  https://www.victronenergy.com/media/pg/Manual_SmartSolar_MPPT_75-10_up_to_100-20/en/installation.html
  https://www.victronenergy.com/media/pg/Manual_SmartSolar_MPPT_100-30__100-50/en/installation.html
- Victron MPPT error codes: https://www.victronenergy.com/live/mppt-error-codes
- Victron Inverter VE.Direct 230 V HW15: https://www.victronenergy.com/media/pg/Inverter_VE.Direct_230V_-_HW15/en/installation.html
- Victron Lithium Battery Smart: https://www.victronenergy.com/media/pg/Lithium_Battery_Smart/en/installation.html
- Victron Lynx Smart BMS, commissioning: https://www.victronenergy.com/media/pg/Lynx_Smart_BMS/en/commissioning-and-operation-of-the-lynx-smart-bms.html
- Victron Wiring Unlimited, theory and DC wiring: https://www.victronenergy.com/media/pg/The_Wiring_Unlimited_book/en/
- EPEver Tracer-AN G3 manual V2.2: https://www.epever.com/wp-content/uploads/2024/08/Tracer-AN-G3-Manual-EN-V2.2.pdf
- EPEver Tracer-AN 50-100A manual V3.4: https://www.epever.com/wp-content/uploads/2021/05/Tracer-AN50-100A-Manual-EN-V3.4.pdf
- Renogy Rover Li 20/30/40 A manual rev B3: https://au.renogy.com/cdn/shop/files/RNG-CTRL-RVR20_30_40_Rover_Li_Series__UM_B3.pdf
- Renogy LiFePO4 voltage chart (marketing blog): https://www.renogy.com/blogs/general-solar/lifepo4-voltage-chart
- Battle Born, SoC and voltage in LiFePO4: https://battlebornbatteries.com/blogs/academy/understanding-state-of-charge-soc-and-voltage-in-lifepo4-batteries

## A. Connection order

All three makers agree: battery first, PV last; disconnect in reverse.

| | Victron MPPT | EPEver Tracer-AN G3 | Renogy Rover Li |
|---|---|---|---|
| Order | battery (wait 10 s), loads (75/10 only), PV | "battery -- load -- PV array" | battery before panel |
| Disconnect | PV, then battery | "reverse order" | not stated (reconnect battery first) |
| Why | auto system-voltage detection; "Not following the correct procedures can disable or damage the charger" | not stated | reverse polarity protection "does not apply if the solar panel is connected ... before the battery" |
| Battery reversed | "not protected against reverse battery polarity" (internal fuse; 150/35 not serviceable) | G3: survives only with PV disconnected; AN 50-100A: "no battery reverse protection" | protected only if battery first |
| PV reversed | protected, no error shown; current stays 0, heat | "may not be damaged" (limit 1.5 x rated PV power) | - |
| Terminal torque | 0.75 Nm (75/10-100/20), 1.6 Nm (100/30 up) | "not less than 1.2 N.m" | 1.2 N·m, "do not overtighten" |

- Victron detects system voltage once only, on first install; moved to a lower-voltage system it
  keeps charging at the old voltage, "leading to overcharging" (150/35 troubleshooting 8.7.1).
- EPEver: fuses and breakers out while wiring; power the controller from the battery fuse first,
  then load and PV fuses/breakers. "connect the inverter directly to the battery, not to the load
  side of the controller." Battery fuse 1.25-2 x controller current within 150 mm of the battery.
- Renogy: "Remove the cover of the solar panels or place them face up after connection."
- Victron inverter: remove the remote bridge (or switch off) during installation so it cannot
  switch on; reverse polarity "will cause damage to the inverter"; battery cable over 1.5 m needs
  an extra fuse near the battery.
- Battery studs (Victron Lithium Smart): M8 10 Nm (12.8 V 50-100 Ah, 25.6 V 100 Ah), 14 Nm
  (160/200 Ah), M10 20 Nm (300/330 Ah).
- **Inverter spark / precharge**: not in any controller or small-inverter manual read. Only the
  Lynx Smart BMS mentions a precharge circuit "to prevent very high inrush current"; resistor or
  bulb precharge is Victron Community lore. STO-2.6 (connect with the isolator open) rests on the
  physics, not on a manual quote; a source is still wanted.

## B. Troubleshooting

### Not charging
- Victron starts charging at PV 5 V above battery, keeps going while 1 V above. Causes listed:
  night, cloud, blown fuses, too few panels in series.
- Lithium BMS switches the charger off when full or cold ("below ~5°C", Victron). Lithium Smart:
  charging only +5 to +50 °C. EPEver lithium low-temperature protection 0 °C by default; it stops
  charge and discharge.
- Battery full: current drops; "not a fault".
- Battery not really connected (blown fuse, open isolator): controller shows a voltage but ~0 A.
  Check: measure at controller terminals and at battery terminals; compare.
- PV over voltage: charging resumes 5 V below the rated max; keep 10 % margin.

### Victron error codes (150/35 8.11, and the live list)
#1 battery too hot; #2 battery voltage too high (another charger, or wrong system voltage set);
#17 controller overheated (ambient, blocked heat sink); #18 over-current (large load switched,
inverter overload); #26 terminal overheated (tighten); #33 PV over voltage (auto reset);
#38/#39 PV input shutdown (wrong battery voltage setting or another charger set higher); reset
for #38: PV off, battery off, wait 3 min, battery on, PV on.

### Loads cutting out
- Controller load output: low-voltage disconnect is "normal"; high-inrush loads go straight to the
  battery (Victron 75/10).
- BMS: disables loads when one cell reaches its low threshold; recharge at once (Victron).
- EPEver load output: short-circuit cut at 4 x rated, overload at 1.05 x with retries; reconnects
  at LVR.
- Inverter: shuts down below "Low battery shutdown", restarts after 30 s, stays off after 3 tries;
  same on overload/start current. "check if all battery cable connections have been tightened. Do
  the battery cables have a sufficient thickness." High ripple = loose or thin DC cables.
- Wiring Unlimited example: a 12.6 V battery drops to 11.5 V when a large load is switched on.

### Measuring
- Multimeter on DC volts at controller terminals; Victron calls above 50 V "generally considered
  dangerous".
- Voltage drop: Victron MPPT "more than 2.5% is unacceptable", measured at full charge current
  between controller and battery terminals. Wiring Unlimited: aim for 2.5 % (12 V 0.3 V, 24 V
  0.6 V); measure across each cable under full load. No per-connection millivolt limit found.
- Fuse: take it out, resistance/continuity mode; check battery polarity before replacing a blown
  controller fuse (Victron).
- Lithium Smart charge voltages: absorption 14.2 V (12.8 V) / 28.4 V (25.6 V); float 13.5 / 27 V.

### Rest voltage vs state of charge
Victron gives no table ("SoC is not calculated in the battery but in the battery monitor").
Renogy blog table (rough; the page has typos), 12 V / 24 V pack at rest: 100 % 13.6 / 27.2,
90 % 13.4 / 26.8, 70 % 13.2 / 26.4, 50 % 13.0 / 26.1, 30 % 12.9 / 25.8, 20 % 12.8 / 25.6,
10 % 12.0 / 24.0, 0 % 10.0 / 20.0. Battle Born: flat curve; at rest reads higher, under load
lower; a battery monitor is the accurate way. Use only to tell "nearly empty" from "has charge".
