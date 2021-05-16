const { landChecker } = require("./landChecker");
const { waterChecker } = require("./waterChecker");
const { sharedCoastChecker } = require("./sharedCoastChecker");
const {
	exceptionalCoastTerritories,
	gameMap,
} = require("../constants/gameMap");

function availableMovements(territory, unitType = null, coast = null) {
	const unitTypeAbbr = unitType ? unitType.substring(0, 1).toUpperCase() : "Z";
	const isArmy = unitTypeAbbr === "A";
	const isNavy = unitTypeAbbr === "N";
	const isExceptional = exceptionalCoastTerritories
		.map((each) => each.shortName)
		.includes(territory);

	if (isExceptional && isNavy) {
		if (!coast) return `Please add in coast`;

		return exceptionalCoastTerritories
			.filter((each) => each.shortName === territory)[0]
			.coasts.filter((each) => each.location === coast)[0].territories;
	}

	if (isArmy) return landChecker(territory);
	if (isNavy)
		return [
			...new Set([
				...waterChecker(territory),
				...sharedCoastChecker(territory),
			]),
		];

	return gameMap.filter((each) => each.shortName === territory)[0]
		.borderingTerritories;
}

exports.availableMovements = availableMovements;
