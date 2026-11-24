// The estimator's arithmetic, kept apart from the page so it can be read and checked on its own.
// The method is explained in plain words on plan/system-estimator ("How the estimate works").
import { byId, DEFAULTS, MPPT_A, MTF, PACKS } from './catalog';

export interface Row {
	/** Catalog id, or 'other'. */
	id: string;
	name: string;
	qty: number;
	w: number;
	h: number;
	ac: boolean;
}

export type Settings = typeof DEFAULTS;
export type Volts = 12 | 24 | 48;

export interface RowResult {
	row: Row;
	/** Energy the device itself uses per day, Wh. */
	wh: number;
	/** Energy taken from the battery per day for this row (after losses), Wh. */
	whBattery: number;
	/** Current of one device at the system voltage, A (DC rows only). */
	amps?: number;
	/** DIST-1.5 branch class for one device (DC rows only). */
	branch?: 'Limited' | 'Standard' | 'Power' | 'Own circuit';
}

export interface Warning {
	level: 'caution' | 'note';
	text: string;
	/** Link to the page or rule that explains it. */
	href?: string;
	link?: string;
}

export interface Result {
	rows: RowResult[];
	/** What the devices use, Wh/day. */
	whDevices: number;
	/** What the battery must deliver, Wh/day (devices + losses + inverter idle). */
	whDaily: number;
	whIdle: number;
	invHours: number;
	/** Everything on at once, W at the devices. */
	peakW: number;
	/** Biggest moment: everything on plus the largest motor starting, W. */
	surgeW: number;
	volts: Volts;
	voltsAuto: boolean;
	packV: number;
	batteryWh: number;
	batteryAh: number;
	packText: string;
	pvW: number;
	panels: number;
	panelW: number;
	pvInstalledW: number;
	mpptA: number;
	mpptPick: number | null;
	/** Continuous current at the battery with everything on, A. */
	mainA: number;
	anyAc: boolean;
	acPeakW: number;
	acSurgeW: number;
	inverterW: number;
	size: 'A' | 'B' | 'C' | 'D';
	mtfTier: number;
	warnings: Warning[];
}

const INVERTER_W = [300, 500, 800, 1000, 1200, 1600, 2000, 3000];

const roundUp = (x: number, list: number[]) => list.find((v) => v >= x) ?? null;

function branchClass(a: number): RowResult['branch'] {
	if (a <= 2.5) return 'Limited';
	if (a <= 5) return 'Standard';
	if (a <= 7.5) return 'Power';
	return 'Own circuit';
}

export function sizeOf(batteryWh: number): Result['size'] {
	if (batteryWh <= 500) return 'A';
	if (batteryWh <= 2500) return 'B';
	if (batteryWh <= 5000) return 'C';
	return 'D';
}

/** Pick 12, 24 or 48 V from the size and the peak power (plan/choose-a-system-voltage). */
export function autoVolts(batteryWh: number, peakW: number): Volts {
	if (batteryWh > 5000 || peakW > 1500) return 48;
	if (batteryWh <= 500 && peakW <= 150) return 12;
	return 24;
}

function packText(v: Volts, ah: number): string {
	const p = PACKS[v];
	const one = p.ah.find((a) => a >= ah);
	const kwh = (a: number) => ((p.v * a) / 1000).toFixed(2).replace(/\.?0+$/, '');
	if (one) return `one ${v} V ${one} Ah pack (${kwh(one)} kWh)`;
	const big = p.ah[p.ah.length - 1];
	const n = Math.ceil(ah / big);
	return `${n} packs of ${v} V ${big} Ah in parallel (${kwh(n * big)} kWh in total)`;
}

export function estimate(rowsIn: Row[], s: Settings): Result {
	const rows = rowsIn.filter((r) => r.qty > 0 && r.w > 0);
	const acRows = rows.filter((r) => r.ac);
	const anyAc = acRows.length > 0;

	// Energy per day.
	const rr: RowResult[] = rows.map((row) => {
		const wh = row.qty * row.w * row.h;
		return { row, wh, whBattery: wh / (row.ac ? s.invEff : s.dcEff) };
	});
	const invHours = anyAc
		? acRows.some((r) => byId(r.id)?.allDay)
			? 24
			: Math.min(24, Math.max(...acRows.map((r) => r.h)))
		: 0;
	const whIdle = anyAc ? s.invIdle * invHours : 0;
	const whDevices = rr.reduce((t, r) => t + r.wh, 0);
	const whDaily = rr.reduce((t, r) => t + r.whBattery, 0) + whIdle;

	// Power: everything on at once, and the largest motor starting on top.
	const peakOf = (list: Row[]) => list.reduce((t, r) => t + r.qty * r.w, 0);
	const extraSurge = (list: Row[]) =>
		Math.max(0, ...list.map((r) => ((byId(r.id)?.surge ?? 1) - 1) * r.w));
	const peakW = peakOf(rows);
	const surgeW = peakW + extraSurge(rows);
	const acPeakW = peakOf(acRows);
	const acSurgeW = acPeakW + extraSurge(acRows);
	const peakBatteryW = peakOf(rows.filter((r) => !r.ac)) / s.dcEff + (anyAc ? (acPeakW + s.invIdle) / s.invEff : 0);

	// Battery.
	const batteryWh = (whDaily * s.days) / s.dod;
	const voltsAuto = s.voltage === 'auto';
	const volts: Volts = voltsAuto ? autoVolts(batteryWh, peakW) : (s.voltage as Volts);
	const packV = PACKS[volts].v;
	const batteryAh = batteryWh / packV;

	// Panels.
	// What the battery gives out must first go in: divide by its round trip as well.
	const pvW = whDaily / (s.sun * s.derate * s.rt);
	let panels: number;
	let panelW: number;
	if (pvW <= 200) {
		// Small systems: one small panel, rounded up to the next 50 W.
		panels = 1;
		panelW = Math.max(20, Math.ceil(pvW / 50) * 50);
	} else {
		panelW = s.panelW;
		panels = Math.ceil(pvW / panelW);
	}
	const pvInstalledW = panels * panelW;

	// Charge controller: panel watts / battery volts x MPPT efficiency (Victron's rule).
	const mpptA = (pvInstalledW / packV) * 0.975;
	const mpptPick = roundUp(mpptA, MPPT_A);

	const mainA = peakBatteryW / packV;
	// Inverter: 25 % above the AC load, and a peak rating (about 1.5 x continuous on the Victron
	// Phoenix datasheet) that covers the largest motor start.
	const invNeed = Math.max(acPeakW * 1.25, acSurgeW / 1.5);
	const inverterW = anyAc ? (roundUp(invNeed, INVERTER_W) ?? Math.ceil(invNeed)) : 0;

	for (const r of rr) {
		if (r.row.ac) continue;
		r.amps = r.row.w / s.dcEff / packV;
		r.branch = branchClass(r.amps);
	}

	// MTF capacity tier the listed loads need (power and daily energy at the devices).
	let mtfTier = 0;
	for (const t of MTF) if (peakW >= t.w && whDevices >= t.wh) mtfTier = t.tier;

	const size = sizeOf(batteryWh);
	const warnings: Warning[] = [];
	const pct = (x: number) => Math.round((100 * x) / Math.max(whDaily, 1));

	if (anyAc && whIdle > 0) {
		warnings.push({
			level: pct(whIdle) >= 20 ? 'caution' : 'note',
			text: `The inverter uses about ${Math.round(whIdle)} Wh a day just by being on (${pct(whIdle)} % of the total). Run what you can on DC, and switch the inverter off when nothing needs AC.`,
			href: '/code/outputs-and-loads/#load-13-dc-loads-first',
			link: 'LOAD-1.3',
		});
	}
	if (rows.some((r) => r.id === 'fridge-ac')) {
		warnings.push({
			level: 'caution',
			text: 'An AC fridge keeps the inverter on all day. A DC fridge of the same size usually needs a smaller battery and fewer panels.',
			href: '/plan/energy-and-load-budgets/#the-fridge-problem',
			link: 'The fridge problem',
		});
	}
	if (size === 'D') {
		warnings.push({
			level: 'caution',
			text: 'This needs more than 5 kWh of battery. That is Size D, beyond what this wiki covers today. Cut or move loads, or plan with an experienced installer.',
			href: '/plan/system-sizes/#size-d-community',
			link: 'Size D',
		});
	}
	if (volts === 12 && (peakW > 300 || batteryWh > 1000)) {
		warnings.push({
			level: 'caution',
			text: `At 12 V the current gets high (about ${Math.round(mainA)} A with everything on). Use 24 V instead.`,
			href: '/plan/choose-a-system-voltage/',
			link: 'Choose a system voltage',
		});
	}
	if (volts === 24 && peakW > 1500) {
		warnings.push({
			level: 'caution',
			text: 'More than 1 500 W at once is a lot for 24 V. Spread the loads over the day, or plan a 48 V system.',
			href: '/plan/choose-a-system-voltage/',
			link: 'Choose a system voltage',
		});
	}
	if (rr.some((r) => r.branch === 'Own circuit')) {
		warnings.push({
			level: 'note',
			text: 'Some DC devices draw more than a 10 A "power" branch allows. They need their own fused circuit, sized to the wire.',
			href: '/code/overcurrent-protection/#dist-15-branch-classes',
			link: 'DIST-1.5',
		});
	}
	if (panels >= 3 && pvW > 200) {
		warnings.push({
			level: 'note',
			text: 'Three or more panels in parallel need a fuse on each panel.',
			href: '/code/solar-array/#gen-15-panels-in-parallel',
			link: 'GEN-1.5',
		});
	}
	if (mpptPick === null) {
		warnings.push({
			level: 'caution',
			text: `The panels can push about ${Math.round(mpptA)} A into the battery: more than one common charge controller. Use two controllers, or a higher system voltage.`,
			href: '/code/charge-controller/',
			link: 'GEN-2 Charge controller',
		});
	}
	if (s.sun < 2.5) {
		warnings.push({
			level: 'note',
			text: 'Very few sun hours: in the dark months, plan to use less, or add a second way to charge.',
		});
	}
	if (s.days < 1) {
		warnings.push({
			level: 'note',
			text: 'Less than one day of battery means no power after a cloudy day.',
		});
	}

	return {
		rows: rr,
		whDevices,
		whDaily,
		whIdle,
		invHours,
		peakW,
		surgeW,
		volts,
		voltsAuto,
		packV,
		batteryWh,
		batteryAh,
		packText: packText(volts, batteryAh),
		pvW,
		panels,
		panelW,
		pvInstalledW,
		mpptA,
		mpptPick,
		mainA,
		anyAc,
		acPeakW,
		acSurgeW,
		inverterW,
		size,
		mtfTier,
		warnings,
	};
}
