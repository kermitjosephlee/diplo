const { landChecker } = require("./landChecker");
const { waterChecker } = require("./waterChecker");
const { sharedCoastChecker } = require("./sharedCoastChecker");
const {
	exceptionalCoastTerritories,
	currentTerritory,
	gameMap,
} = require("../constants/gameMap");

function availableMovements(territory, unitType = null, coast = null) {
	const unitTypeAbbr = unitType ? unitType.substring(0, 1).toUpperCase() : "Z";
	const isArmy = unitTypeAbbr === "A";
	const isNavy = unitTypeAbbr === "N";
	const isExceptional = exceptionalCoastTerritories
		.map((each) => each.shortName)
		.includes(territory);

	const exceptionalBorderingTerritories = currentTerritory(
		territory
	).borderingTerritories.filter((ea) =>
		exceptionalCoastTerritories.map((each) => each.shortName).includes(ea)
	);

	const isBorderingExceptional = exceptionalBorderingTerritories.length > 0;

	if (isExceptional && isNavy) {
		if (!coast) return `Please add in coast`;

		return exceptionalCoastTerritories
			.filter((each) => each.shortName === territory)[0]
			.coasts.filter((each) => each.location === coast)[0].territories;
	}

	if (isBorderingExceptional && isNavy) {
		const exceptionalBorderingTerritory = exceptionalCoastTerritories.filter(
			(each) => each.shortName === exceptionalBorderingTerritories[0]
		);

		const remainingBorderingTerritories = currentTerritory(
			territory
		).borderingTerritories.filter(
			(each) => each !== exceptionalBorderingTerritory[0].shortName
		);

		const filteredCoasts = exceptionalBorderingTerritory[0].coasts.filter(
			(coast) => coast.territories.includes(territory)
		);

		const updatedTerritoryString = `${exceptionalBorderingTerritory[0].shortName} - ${filteredCoasts[0].location}`;

		return [...remainingBorderingTerritories, updatedTerritoryString];
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
