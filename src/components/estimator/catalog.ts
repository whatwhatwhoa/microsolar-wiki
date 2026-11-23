// Device catalog and defaults for the system estimator (plan/system-estimator).
// One home for these numbers: the live estimator and the page's reference table both read them.
// Every value is a typical figure from research/loads-and-sizing.md (section D); `src` names its sources.

export type Group = 'light' | 'charge' | 'electronics' | 'internet' | 'cooling' | 'fridge' | 'work';

export interface Device {
	id: string;
	group: Group;
	name: string;
	/** Power while running, in watts. */
	w: number;
	/** Typical hours a day. For fridges: hours the compressor runs, not hours plugged in. */
	h: number;
	/** Needs an inverter (AC). */
	ac?: boolean;
	/** Keeps the inverter on all day (an AC fridge). */
	allDay?: boolean;
	/** Starting surge, as a multiple of running power (motors and compressors). */
	surge?: number;
	/** One short plain-language hint shown under the row. */
	note?: string;
	/** Source IDs (keys of SOURCES; research/loads-and-sizing.md). Empty: no tested figure found. */
	src: string[];
}

export const GROUPS: Record<Group, string> = {
	light: 'Lights',
	charge: 'Phones and charging',
	electronics: 'Electronics',
	internet: 'Internet and security',
	cooling: 'Fans',
	fridge: 'Fridges and freezers',
	work: 'Work, water and kitchen',
};

export const DEVICES: Device[] = [
	{ id: 'led-bulb', group: 'light', name: 'LED bulb, room light (DC)', w: 5, h: 5, note: 'About 500 lumens: enough for one room. LEDs give about 100 lumens per watt.', src: ['LDV', 'ES-BR'] },
	{ id: 'led-tube', group: 'light', name: 'LED tube light (DC)', w: 10, h: 5, note: 'About 1 000 lumens: a larger room or a shop.', src: ['LDV', 'ES-BR'] },
	{ id: 'night-light', group: 'light', name: 'Night light, dim (DC)', w: 1, h: 10, src: ['LDV'] },
	{ id: 'outdoor-light', group: 'light', name: 'Outdoor or security light (DC)', w: 10, h: 12, src: ['LDV'] },

	{ id: 'phone', group: 'charge', name: 'Smartphone charging', w: 10, h: 1.5, note: 'About one full charge a day (15 Wh).', src: ['OZ'] },
	{ id: 'feature-phone', group: 'charge', name: 'Basic phone charging', w: 2, h: 0.5, note: 'A basic phone needs a full charge only every few days.', src: ['HMD'] },
	{ id: 'tool-charger', group: 'charge', name: 'Power-tool battery charger (AC)', w: 240, h: 0.5, ac: true, note: 'About 30 minutes for one tool battery.', src: ['MK'] },

	{ id: 'laptop', group: 'electronics', name: 'Laptop (USB-C)', w: 20, h: 4, note: 'Average while working, not the charger rating (that is the most it can draw).', src: ['APL-MBA'] },
	{ id: 'mini-pc', group: 'electronics', name: 'Mini PC', w: 15, h: 8, src: ['APL-MINI'] },
	{ id: 'tv-24', group: 'electronics', name: 'TV, 24 inch (DC)', w: 15, h: 5, src: ['GL-T', 'EFA-DT'] },
	{ id: 'tv-dc', group: 'electronics', name: 'TV, 32 inch (DC)', w: 20, h: 5, src: ['GL-T', 'EFA-DT'] },
	{ id: 'radio', group: 'electronics', name: 'Radio', w: 3, h: 4, note: 'No tested figure found: check the label on your radio.', src: [] },

	{ id: 'router', group: 'internet', name: 'Wi-Fi router', w: 10, h: 24, src: ['ERIC'] },
	{ id: 'starlink-mini', group: 'internet', name: 'Satellite internet, small dish (Starlink Mini)', w: 30, h: 6, note: 'Runs from 12-48 V DC. Many homes run it a few hours a day on a timer; all day is 720 Wh.', src: ['SL'] },
	{ id: 'starlink-std', group: 'internet', name: 'Satellite internet, standard dish (Starlink)', w: 90, h: 6, ac: true, note: 'The standard kit plugs into AC. All day it uses about 2 kWh: a much bigger system.', src: ['SL'] },
	{ id: 'camera', group: 'internet', name: 'Security camera', w: 6, h: 24, note: 'More at night with infrared or a spotlight.', src: ['RL'] },

	{ id: 'fan-usb', group: 'cooling', name: 'USB fan, small', w: 5, h: 6, src: ['GL-T'] },
	{ id: 'fan-table', group: 'cooling', name: 'Table or pedestal fan (DC)', w: 10, h: 9, note: 'Efficient DC fans draw 7-10 W; many fans on the market draw 14-34 W.', src: ['GL-T', 'EFA-DT'] },
	{ id: 'fan-ceiling', group: 'cooling', name: 'Ceiling fan (DC)', w: 25, h: 9, src: ['GL-T', 'EFA-DT'] },

	{ id: 'fridge-dc', group: 'fridge', name: 'DC fridge (12/24 V)', w: 45, h: 7, surge: 2, note: 'Hours = how long the compressor runs. Lab tests in a 32 °C room: about 300 Wh a day (140-790 Wh by model). Labels tested at 21-25 °C can show a third of that.', src: ['GL-F', 'SEC'] },
	{ id: 'fridge-freezer-dc', group: 'fridge', name: 'DC fridge-freezer (12/24 V)', w: 60, h: 16, surge: 2, note: 'Hours = how long the compressor runs. About 1 kWh a day in a 32 °C room.', src: ['GL-F', 'EFA-DT'] },
	{ id: 'fridge-ac', group: 'fridge', name: 'Household AC fridge, efficient (inverter)', w: 90, h: 11, ac: true, allDay: true, surge: 5, note: 'About 1 kWh a day, and the inverter must stay on all day, using power just waiting. A DC fridge avoids this.', src: ['ES-PF', 'VE-COM'] },

	{ id: 'sewing', group: 'work', name: 'Sewing machine (AC)', w: 85, h: 2, ac: true, src: ['SG'] },
	{ id: 'pump-dc', group: 'work', name: 'Water pump, small (12/24 V)', w: 80, h: 0.5, note: 'Motors take more power for a moment when they start.', src: ['PEN'] },
	{ id: 'other', group: 'work', name: 'Other device', w: 10, h: 1, src: [] },
];

/** Sources behind the device values; full notes in research/loads-and-sizing.md. */
export const SOURCES: Record<string, { label: string; url: string }> = {
	LDV: { label: 'LEDVANCE 12-36 V LED bulb', url: 'https://www.ledvance.com/shortlink/4058075757622' },
	'ES-BR': { label: 'ENERGY STAR, brightness', url: 'https://www.energystar.gov/products/lighting_fans/light_bulbs/learn_about_brightness' },
	OZ: { label: 'Phone charge energy (OneZero, via Engadget)', url: 'https://engadget.com/2200186/wireless-charging-wastes-electricity-why/' },
	HMD: { label: 'Nokia 105 (2024)', url: 'https://www.hmd.com/en_int/nokia-105-2024' },
	MK: { label: 'Makita DC18RC charger', url: 'https://www.makita.co.nz/products/model/DC18RC' },
	'APL-MBA': { label: 'Apple MacBook Air specs', url: 'https://www.apple.com/macbook-air/specs/' },
	'APL-MINI': { label: 'Apple Mac mini power', url: 'https://support.apple.com/en-us/103253' },
	'GL-T': { label: 'Global LEAP 2017, fans and TVs', url: 'https://cdn.shopify.com/s/files/1/0686/0279/0141/files/global_leap_awards_buyers_guide_fans_and_televisions_2016_17_winner_superfan.pdf' },
	'EFA-DT': { label: 'Efficiency for Access 2021', url: 'https://www.clasp.ngo/wp-content/uploads/2021/01/2021-ApplianceDataTrends.pdf' },
	ERIC: { label: 'Malmodin et al. 2023 (Ericsson)', url: 'https://www.ericsson.com/4ac286/assets/local/about-ericsson/sustainability-and-corporate-responsibility/documents/2023/malmodin2023-just-measure-it.pdf' },
	SL: { label: 'Starlink power help page', url: 'https://www.starlink.com/support/article/a7fe6525-5356-a837-48e6-33df176cdbc5' },
	RL: { label: 'Reolink PoE camera power', url: 'https://support.reolink.com/hc/en-us/articles/900000593323-What-is-the-Power-Consumption-of-Reolink-POE-Cameras' },
	'GL-F': { label: 'Global LEAP 2019, refrigerators', url: 'https://assets.publishing.service.gov.uk/media/5ddd5b7d40f0b650e4a64d0b/2019-Global-LEAP-Refrigerators-Buyers-Guide_final.pdf' },
	SEC: { label: 'Secop BD35F compressor', url: 'https://secop.com/fileadmin/user_upload/SEPS/datasheets/en/bd35f_101z0204_r134a_12-24vdc_09-2024_desd100p822.pdf' },
	'ES-PF': { label: 'ENERGY STAR Most Efficient fridges', url: 'https://www.energystar.gov/most-efficient/me-certified-refrigerators/results' },
	'VE-COM': { label: 'Victron Community, compressor start', url: 'https://communityarchive.victronenergy.com/questions/14393/compressor-inrush-current-pulse-width.html' },
	SG: { label: 'Singer Heavy Duty 4423', url: 'https://www.singer.com/Heavy-Duty-4423-Sewing-Machine' },
	PEN: { label: 'Shurflo 2088 pumps', url: 'https://www.pentair.com/en-us/flow/shurflo/shurflo-products/shurflo-agricultural-industrial-applications/agricultural-industrial-pumps/2088-series-diaphragm-pumps.html' },
};

export const byId = (id: string) => DEVICES.find((d) => d.id === id);

/** Defaults; research/loads-and-sizing.md section D gives the source and range of each. */
export const DEFAULTS = {
	voltage: 'auto' as 'auto' | 12 | 24 | 48,
	/** Peak sun hours in the worst month you need power (kWh/m2/day). Tropics: 3.1-5.2 (WHO). */
	sun: 4,
	/** Days the battery carries the loads with no sun. */
	days: 1,
	/** One commodity panel, W. */
	panelW: 450,
	/** Panel nameplate to battery: heat, dust, wiring and MPPT (PVWatts, Victron). */
	derate: 0.75,
	/** LiFePO4 round trip: energy out for energy in (Victron Lithium Smart: 92 %). */
	rt: 0.92,
	/** Share of the battery's rated energy you plan to use (LiFePO4 80 %). */
	dod: 0.8,
	/** Battery to DC devices: DC-DC and USB converters, wire (Victron Orion 88-97 %). */
	dcEff: 0.9,
	/** Inverter efficiency at typical load (Victron Phoenix peak 88-91 %, less at light load). */
	invEff: 0.85,
	/** Inverter idle (no-load) power, W (Victron Phoenix 24/500-800: 8 W; one measured 10 W). */
	invIdle: 10,
};

/** Example households to start from. */
export const PRESETS: { id: string; name: string; rows: [string, number, number?][] }[] = [
	{ id: 'a', name: 'Lights and phones', rows: [['led-bulb', 2], ['night-light', 1], ['phone', 2], ['radio', 1]] },
	{ id: 'b', name: 'Home with laptop and internet', rows: [['led-bulb', 4], ['night-light', 1], ['phone', 4], ['laptop', 1], ['router', 1], ['fan-table', 1], ['starlink-mini', 1]] },
	{ id: 'c', name: 'Home with a DC fridge and TV', rows: [['led-bulb', 5], ['led-tube', 1], ['phone', 4], ['laptop', 1], ['router', 1], ['fan-table', 2], ['tv-dc', 1], ['fridge-dc', 1], ['starlink-mini', 1]] },
];

/** Standard battery packs, nominal Ah, by system voltage (LiFePO4: 12.8, 25.6, 51.2 V). */
export const PACKS: Record<12 | 24 | 48, { v: number; ah: number[] }> = {
	12: { v: 12.8, ah: [20, 30, 50, 100, 200] },
	24: { v: 25.6, ah: [50, 100, 200] },
	48: { v: 51.2, ah: [50, 100, 200] },
};

/** Common charge controller current ratings, A. */
export const MPPT_A = [10, 15, 20, 30, 40, 50, 60, 70, 85, 100];

/** Multi-Tier Framework capacity thresholds (ESMAP 2015, Tables ES.1 and ES.3). */
export const MTF = [
	{ tier: 1, w: 3, wh: 12 },
	{ tier: 2, w: 50, wh: 200 },
	{ tier: 3, w: 200, wh: 1000 },
	{ tier: 4, w: 800, wh: 3425 },
	{ tier: 5, w: 2000, wh: 8219 },
];
