const { nations } = require("./nations");
const { RUS, FRA, GER, ENG, ITA, TUR, AUS } = nations;
const { coasts } = require("./coasts");
const { NORTH, SOUTH, EAST } = coasts;

const gameMap = [
	{
		id: 1,
		name: "North Atlantic Ocean",
		shortName: "NAO",
		borderingTerritories: ["MAO", "IRI", "LVP", "CLY", "NWG"],
		isMaritime: true,
		isTerrestrial: false,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 2,
		name: "Norwegian Sea",
		shortName: "NWG",
		borderingTerritories: ["NAO", "CLY", "EDI", "NTH", "NWY", "BAR"],
		isMaritime: true,
		isTerrestrial: false,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 3,
		name: "Barents Sea",
		shortName: "BAR",
		borderingTerritories: ["NWG", "NWY", "STP"],
		isMaritime: true,
		isTerrestrial: false,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 4,
		name: "St Petersburg",
		shortName: "STP",
		borderingTerritories: ["BAR", "NWY", "FIN", "BOT", "LVN", "MOS"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: RUS,
		coasts: [
			{ location: SOUTH, territories: ["LVN", "BOT", "FIN"] },
			{ location: NORTH, territories: ["BAR", "NWY"] },
		],
	},
	{
		id: 5,
		name: "Finland",
		shortName: "FIN",
		borderingTerritories: ["BOT", "STP", "NWY", "SWE"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 6,
		name: "Gulf of Bothnia",
		shortName: "BOT",
		borderingTerritories: ["SWE", "FIN", "STP", "LVN", "BAL"],
		isMaritime: true,
		isTerrestrial: false,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 7,
		name: "Sweden",
		shortName: "SWE",
		borderingTerritories: ["NWY", "FIN", "BOT", "BAL", "DEN", "SKA"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 8,
		name: "Norway",
		shortName: "NWY",
		borderingTerritories: ["NTH", "NWG", "BAR", "STP", "FIN", "SWE", "SKA"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 9,
		name: "North Sea",
		shortName: "NTH",
		borderingTerritories: [
			"LON",
			"YOR",
			"EDI",
			"NWG",
			"NWY",
			"SKA",
			"DEN",
			"HEL",
			"HOL",
			"BEL",
			"ENG",
		],
		isMaritime: true,
		isTerrestrial: false,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 10,
		name: "Edinburgh",
		shortName: "EDI",
		borderingTerritories: ["CLY", "NWG", "NTH", "YOR", "LVP"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: ENG,
	},
	{
		id: 11,
		name: "Clyde",
		shortName: "CLY",
		borderingTerritories: ["NAO", "NWG", "EDI", "LVP"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: ENG,
	},
	{
		id: 12,
		name: "Liverpool",
		shortName: "LVP",
		borderingTerritories: ["NAO", "CLY", "EDI", "YOR", "WAL", "IRI"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: ENG,
	},
	{
		id: 13,
		name: "Yorkshire",
		shortName: "YOR",
		borderingTerritories: ["WAL", "LON", "NTH", "EDI", "LVP"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: ENG,
		coasts: null,
	},
	{
		id: 14,
		name: "Irish Sea",
		shortName: "IRI",
		borderingTerritories: ["NAO", "LVP", "WAL", "ENG", "MAO"],
		isMaritime: true,
		isTerrestrial: false,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 15,
		name: "Wales",
		shortName: "WAL",
		borderingTerritories: ["IRI", "LVP", "YOR", "LON", "ENG"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: ENG,
	},
	{
		id: 16,
		name: "London",
		shortName: "LON",
		borderingTerritories: ["WAL", "YOR", "NTH", "ENG"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: ENG,
	},
	{
		id: 17,
		name: "English Channel",
		shortName: "ENG",
		borderingTerritories: [
			"MAO",
			"IRI",
			"WAL",
			"LON",
			"NTH",
			"BEL",
			"PIC",
			"BRE",
		],
		isMaritime: true,
		isTerrestrial: false,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 18,
		name: "Belgium",
		shortName: "BEL",
		borderingTerritories: ["ENG", "PIC", "BUR", "RUH", "HOL", "NTH"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 19,
		name: "Holland",
		shortName: "HOL",
		borderingTerritories: ["BEL", "NTH", "HEL", "KIE", "RUH"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 20,
		name: "Helgoland Bight",
		shortName: "HEL",
		borderingTerritories: ["NTH", "DEN", "KIE", "HOL"],
		isMaritime: true,
		isTerrestrial: false,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 21,
		name: "Denmark",
		shortName: "DEN",
		borderingTerritories: ["HEL", "NTH", "SKA", "SWE", "BAL", "KIE"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 22,
		name: "Skagerrak",
		shortName: "SKA",
		borderingTerritories: ["NTH", "NWY", "SWE", "DEN"],
		isMaritime: true,
		isTerrestrial: false,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 23,
		name: "Baltic Sea",
		shortName: "BAL",
		borderingTerritories: ["KIE", "DEN", "SWE", "BOT", "LVN", "PRU", "BER"],
		isMaritime: true,
		isTerrestrial: false,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 24,
		name: "Livonia",
		shortName: "LVN",
		borderingTerritories: ["PRU", "BAL", "BOT", "STP", "MOS", "WAR"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: RUS,
	},
	{
		id: 25,
		name: "Moscow",
		shortName: "MOS",
		borderingTerritories: ["STP", "LVN", "WAR", "UKR", "SEV"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: true,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: RUS,
	},
	{
		id: 26,
		name: "Warsaw",
		shortName: "WAR",
		borderingTerritories: ["SIL", "PRU", "LVN", "MOS", "UKR", "GAL"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: true,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: RUS,
	},
	{
		id: 27,
		name: "Prussia",
		shortName: "PRU",
		borderingTerritories: ["BER", "BAL", "LVN", "WAR", "SIL"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
	},
	{
		id: 28,
		name: "Berlin",
		shortName: "BER",
		borderingTerritories: ["KIE", "BAL", "PRU", "SIL", "MUN"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: GER,
	},
	{
		id: 29,
		name: "Kiel",
		shortName: "KIE",
		borderingTerritories: ["HOL", "HEL", "DEN", "BAL", "BER", "MUN", "RUH"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: GER,
	},
	{
		id: 30,
		name: "Ruhr",
		shortName: "RUH",
		borderingTerritories: ["BEL", "HOL", "KIE", "MUN", "BUR"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: true,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: GER,
	},
	{
		id: 31,
		name: "Munich",
		shortName: "MUN",
		borderingTerritories: ["BUR", "TYR", "BOH", "SIL", "BER", "KIE", "RUH"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: true,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: GER,
	},
	{
		id: 32,
		name: "Burgundy",
		shortName: "BUR",
		borderingTerritories: ["GAS", "PAR", "PIC", "BEL", "RUH", "MUN", "MAR"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: true,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: FRA,
	},
	{
		id: 33,
		name: "Picardy",
		shortName: "PIC",
		borderingTerritories: ["BRE", "ENG", "BEL", "BUR", "PAR"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: FRA,
	},
	{
		id: 34,
		name: "Paris",
		shortName: "PAR",
		borderingTerritories: ["GAS", "BRE", "PIC", "BUR"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: true,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: FRA,
	},
	{
		id: 35,
		name: "Brest",
		shortName: "BRE",
		borderingTerritories: ["MAO", "ENG", "PIC", "PAR", "GAS"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: FRA,
	},
	{
		id: 36,
		name: "Gascony",
		shortName: "GAS",
		borderingTerritories: ["MAO", "BRE", "PAR", "BUR", "MAR", "SPA"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: FRA,
	},
	{
		id: 37,
		name: "Mid-Atlantic Ocean",
		shortName: "MAO",
		borderingTerritories: [
			"NAO",
			"IRI",
			"ENG",
			"BRE",
			"GAS",
			"SPAnc",
			"SPAsc",
			"POR",
			"NAF",
			"WES",
		],
		isMaritime: true,
		isTerrestrial: false,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 38,
		name: "Portugal",
		shortName: "POR",
		borderingTerritories: ["MAO", "SPA"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 39,
		name: "Spain",
		shortName: "SPA",
		borderingTerritories: ["POR", "MAO", "WES", "LYO", "MAR", "GAS"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: null,
		coasts: [
			{ location: SOUTH, territories: ["MAR", "LYO", "WES", "MAO", "POR"] },
			{ location: NORTH, territories: ["GAS", "MAO", "POR"] },
		],
	},
	{
		id: 40,
		name: "Marseilles",
		shortName: "MAR",
		borderingTerritories: ["SPA", "LYO", "PIE", "BUR", "GAS"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: FRA,
	},
	{
		id: 41,
		name: "Gulf of Lyon",
		shortName: "LYO",
		borderingTerritories: ["SPA", "WES", "TYS", "TUS", "PIE", "MAR"],
		isMaritime: true,
		isTerrestrial: false,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 42,
		name: "Piedmont",
		shortName: "PIE",
		borderingTerritories: ["MAR", "LYO", "TUS", "VEN", "TYR"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: ITA,
	},
	{
		id: 43,
		name: "Tyrolia",
		shortName: "TYR",
		borderingTerritories: ["PIE", "VEN", "TRI", "VIE", "BOH", "MUN"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: true,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 44,
		name: "Venice",
		shortName: "VEN",
		borderingTerritories: ["PIE", "TUS", "ROM", "APU", "ADR", "TRI", "TYR"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: ITA,
	},
	{
		id: 45,
		name: "Tuscany",
		shortName: "TUS",
		borderingTerritories: ["PIE", "LYO", "TYS", "ROM", "VEN"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: ITA,
	},
	{
		id: 46,
		name: "Rome",
		shortName: "ROM",
		borderingTerritories: ["TYS", "NAP", "APU", "VEN", "TUS"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: ITA,
	},
	{
		id: 47,
		name: "Apulia",
		shortName: "APU",
		borderingTerritories: ["ROM", "NAP", "ION", "ADR", "VEN"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: ITA,
	},
	{
		id: 48,
		name: "Naples",
		shortName: "NAP",
		borderingTerritories: ["TYS", "ION", "APU", "ROM"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: ITA,
	},
	{
		id: 49,
		name: "Tyrrhenian Sea",
		shortName: "TYS",
		borderingTerritories: ["LYO", "WES", "TUN", "ION", "NAP", "ROM", "TUS"],
		isMaritime: true,
		isTerrestrial: false,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 50,
		name: "Western Mediterranean",
		shortName: "WES",
		borderingTerritories: ["MAO", "NAF", "TUN", "TYS", "LYO", "SPA"],
		isMaritime: true,
		isTerrestrial: false,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 51,
		name: "North Africa",
		shortName: "NAF",
		borderingTerritories: ["MAO", "TUN", "WES"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 52,
		name: "Tunis",
		shortName: "TUN",
		borderingTerritories: ["NAF", "ION", "TYS", "WES"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 53,
		name: "Ionian Sea",
		shortName: "ION",
		borderingTerritories: [
			"TYS",
			"TUN",
			"EAS",
			"AEG",
			"GRE",
			"ALB",
			"ADR",
			"APU",
			"NAP",
		],
		isMaritime: true,
		isTerrestrial: false,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 54,
		name: "Adriatic Sea",
		shortName: "ADR",
		borderingTerritories: ["VEN", "APU", "ION", "ALB", "TRI"],
		isMaritime: true,
		isTerrestrial: false,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 55,
		name: "Trieste",
		shortName: "TRI",
		borderingTerritories: ["ADR", "ALB", "SER", "BUD", "VIE", "TYR", "VEN"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: AUS,
	},
	{
		id: 56,
		name: "Vienna",
		shortName: "VIE",
		borderingTerritories: ["TYR", "TRI", "BUD", "GAL", "BOH"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: true,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: AUS,
	},
	{
		id: 57,
		name: "Bohemia",
		shortName: "BOH",
		borderingTerritories: ["MUN", "TYR", "VIE", "GAL", "SIL"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: true,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 58,
		name: "Silesia",
		shortName: "SIL",
		borderingTerritories: ["MUN", "BOH", "GAL", "WAR", "PRU", "BER"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 59,
		name: "Galicia",
		shortName: "GAL",
		borderingTerritories: ["BOH", "VIE", "BUD", "RUM", "UKR", "WAR", "SIL"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: true,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 60,
		name: "Budapest",
		shortName: "BUD",
		borderingTerritories: ["VIE", "TRI", "SER", "RUM", "GAL"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: true,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: AUS,
	},
	{
		id: 61,
		name: "Serbia",
		shortName: "SER",
		borderingTerritories: ["TRI", "ALB", "GRE", "BUL", "RUM", "BUD"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: true,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 62,
		name: "Greece",
		shortName: "GRE",
		borderingTerritories: ["ION", "AEG", "BUL", "SER", "ALB"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 63,
		name: "Bulgaria",
		shortName: "BUL",
		borderingTerritories: ["GRE", "AEG", "CON", "BLA", "RUM", "SER"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: null,
		coasts: [
			{ location: EAST, territories: ["RUM", "BLA", "CON"] },
			{ location: SOUTH, territories: ["CON", "AEG", "GRE"] },
		],
	},
	{
		id: 64,
		name: "Rumania",
		shortName: "RUM",
		borderingTerritories: ["BUD", "SER", "BUL", "BLA", "SEV", "UKR", "GAL"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 65,
		name: "Ukraine",
		shortName: "UKR",
		borderingTerritories: ["GAL", "RUM", "SEV", "MOS", "WAR"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: true,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: RUS,
	},
	{
		id: 66,
		name: "Sevastopol",
		shortName: "SEV",
		borderingTerritories: ["UKR", "RUM", "BLA", "ARM", "MOS"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: RUS,
	},
	{
		id: 67,
		name: "Black Sea",
		shortName: "BLA",
		borderingTerritories: ["RUM", "BUL", "CON", "ANK", "ARM", "SEV"],
		isMaritime: true,
		isTerrestrial: false,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 68,
		name: "Constantinople",
		shortName: "CON",
		borderingTerritories: ["BUL", "AEG", "SMY", "ANK", "BLA"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: TUR,
	},
	{
		id: 69,
		name: "Ankara",
		shortName: "ANK",
		borderingTerritories: ["CON", "SMY", "ARM", "BLA"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: TUR,
	},
	{
		id: 70,
		name: "Armenia",
		shortName: "ARM",
		borderingTerritories: ["SEV", "BLA", "ANK", "SMY", "SYR"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 71,
		name: "Syria",
		shortName: "SYR",
		borderingTerritories: ["EAS", "ARM", "SMY"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 72,
		name: "Eastern Mediterranean Sea",
		shortName: "EAS",
		borderingTerritories: ["ION", "AEG", "SMY", "SYR"],
		isMaritime: true,
		isTerrestrial: false,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},
	{
		id: 73,
		name: "Aegean Sea",
		shortName: "AEG",
		borderingTerritories: ["ION", "AEG", "SMY", "SYR"],
		isMaritime: true,
		isTerrestrial: false,
		isLandLocked: false,
		isSupplyCenter: false,
		occupyingUnits: [],
		initialNation: null,
		coasts: null,
	},

	{
		id: 74,
		name: "Smyrna",
		shortName: "SMY",
		borderingTerritories: ["AEG", "EAS", "SYR", "ARM", "ANK", "CON"],
		isMaritime: false,
		isTerrestrial: true,
		isLandLocked: false,
		isSupplyCenter: true,
		occupyingUnits: [],
		initialNation: TUR,
		coasts: null,
	},
];

function currentTerritory(territoryShortName) {
	const [current] = gameMap.filter(
		(each) => each.shortName === territoryShortName
	);
	return current;
}

function getBorderingTerritories(territoryShortName) {
	return currentTerritory(territoryShortName).borderingTerritories;
}

exports.gameMap = gameMap;
exports.maritimeTerritories = gameMap.filter((each) => each.isMaritime);
exports.terrestrialTerritories = gameMap.filter((each) => each.isTerrestrial);
exports.supplyCenters = gameMap.filter((each) => each.isSupplyCenter);
exports.exceptionalCoastTerritories = gameMap.filter((each) => each.coasts);
exports.currentTerritory = currentTerritory;
exports.getBorderingTerritories = getBorderingTerritories;
