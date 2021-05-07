const initialState = [
	{ location: "LON", ownership: "ENG", nation: "ENG" },
	{ location: "EDI", ownership: "ENG", nation: "ENG" },
	{ location: "LVP", ownership: "ENG", nation: "ENG" },
	{ location: "BRE", ownership: "FRA", nation: "FRA" },
	{ location: "PAR", ownership: "FRA", nation: "FRA" },
	{ location: "MAR", ownership: "FRA", nation: "FRA" },
	{ location: "KIE", ownership: "GER", nation: "GER" },
	{ location: "MUN", ownership: "GER", nation: "GER" },
	{ location: "BER", ownership: "GER", nation: "GER" },
	{ location: "VEN", ownership: "ITA", nation: "ITA" },
	{ location: "ROM", ownership: "ITA", nation: "ITA" },
	{ location: "NAP", ownership: "ITA", nation: "ITA" },
	{ location: "TRI", ownership: "AUS", nation: "AUS" },
	{ location: "BUD", ownership: "AUS", nation: "AUS" },
	{ location: "VIE", ownership: "AUS", nation: "AUS" },
	{ location: "CON", ownership: "TUR", nation: "TUR" },
	{ location: "ANK", ownership: "TUR", nation: "TUR" },
	{ location: "SMY", ownership: "TUR", nation: "TUR" },
	{ location: "STP", ownership: "RUS", nation: "RUS" },
	{ location: "WAR", ownership: "RUS", nation: "RUS" },
	{ location: "MOS", ownership: "RUS", nation: "RUS" },
	{ location: "SEV", ownership: "RUS", nation: "RUS" },
	{ location: "POR", ownership: null, nation: null },
	{ location: "SPA", ownership: null, nation: null },
	{ location: "TUN", ownership: null, nation: null },
	{ location: "BEL", ownership: null, nation: null },
	{ location: "HOL", ownership: null, nation: null },
	{ location: "DEN", ownership: null, nation: null },
	{ location: "NWY", ownership: null, nation: null },
	{ location: "SWE", ownership: null, nation: null },
	{ location: "SER", ownership: null, nation: null },
	{ location: "RUM", ownership: null, nation: null },
	{ location: "BUL", ownership: null, nation: null },
	{ location: "GRE", ownership: null, nation: null },
];

let mapStates = [
	{
		id: 1,
		season: "Spring",
		year: "1901",
		supplyCenters: initialState,
	},
];

exports.mapStates = mapStates;
exports.initialState = initialState;
