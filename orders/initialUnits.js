const { nations } = require("../constants/nations");
const { types } = require("../constants/types");

const { RUS, FRA, GER, ENG, ITA, TUR, AUS } = nations;
const { A, N } = types;

const initialUnits = [
	{ location: "EDI", unitType: N, nation: ENG },
	{ location: "LVP", unitType: A, nation: ENG },
	{ location: "LON", unitType: N, nation: ENG },
	{ location: "BRE", unitType: N, nation: FRA },
	{ location: "PAR", unitType: A, nation: FRA },
	{ location: "MAR", unitType: A, nation: FRA },
	{ location: "KIE", unitType: N, nation: GER },
	{ location: "BER", unitType: A, nation: GER },
	{ location: "MUN", unitType: A, nation: GER },
	{ location: "VEN", unitType: A, nation: ITA },
	{ location: "ROM", unitType: A, nation: ITA },
	{ location: "NAP", unitType: N, nation: ITA },
	{ location: "TRI", unitType: N, nation: AUS },
	{ location: "VIE", unitType: A, nation: AUS },
	{ location: "BUD", unitType: A, nation: AUS },
	{ location: "CON", unitType: A, nation: TUR },
	{ location: "SMY", unitType: A, nation: TUR },
	{ location: "ANK", unitType: N, nation: TUR },
	{ location: "WAR", unitType: A, nation: RUS },
	{ location: "MOS", unitType: A, nation: RUS },
	{ location: "SEV", unitType: N, nation: RUS },
	{ location: "STP", unitType: N, nation: RUS, coast: "SOUTH" },
];

exports.initialUnits = initialUnits;
