const { landChecker } = require("./landChecker");
const { waterChecker } = require("./waterChecker");
const { sharedCoastChecker } = require("./sharedCoastChecker");
const { exceptionalCoastTerritories } = require("../constants/gameMap");

function availableMovements(territory, unitType, coast = null) {
	const isExceptional = exceptionalCoastTerritories
		.map((each) => each.shortName)
		.includes(territory);

	if (isExceptional && (unitType === "NAVY" || unitType === "N")) {
		if (!coast) return `Please add in coast`;

		return exceptionalCoastTerritories
			.filter((each) => each.shortName === territory)[0]
			.coasts.filter((each) => each.location === coast)[0].territories;
	}

	if (unitType === "ARMY" || unitType === "A") return landChecker(territory);
	if (unitType === "NAVY" || unitType === "N")
		return [
			...new Set([
				...waterChecker(territory),
				...sharedCoastChecker(territory),
			]),
		];

	return null;
}

exports.availableMovements = availableMovements;
