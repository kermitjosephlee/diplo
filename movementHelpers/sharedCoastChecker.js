const {
	gameMap,
	maritimeTerritories,
	terrestrialTerritories,
	exceptionalCoastTerritories,
} = require("../constants/gameMap");
const { waterChecker } = require("./waterChecker");
const { landChecker } = require("./landChecker");
const {
	exceptionalDestinationHandler,
} = require("./exceptionalDestinationHandler");
const { exceptionalSourceHandler } = require("./exceptionalSourceHandler");

function sharedCoastChecker(territory, coast = null) {
	const isMaritime = maritimeTerritories
		.map((each) => each.shortName)
		.includes(territory);

	const isTerrestrial = terrestrialTerritories
		.map((each) => each.shortName)
		.includes(territory);

	if (isMaritime && !isTerrestrial) {
		return maritimeTerritories.filter((each) => each.shortName === territory)[0]
			.borderingTerritories;
	}

	if (isMaritime && isTerrestrial) {
		return gameMap.filter((each) => each.shortName === territory)[0]
			.borderingTerritories;
	}

	const waterTerritoriesShortNames = waterChecker(territory);
	const landTerritoriesShortNames = landChecker(territory);
	const landTerritories = gameMap.filter((each) =>
		landTerritoriesShortNames.includes(each.shortName)
	);

	const sharedCoastTerritories = landTerritories.map(
		({ shortName, borderingTerritories }) => ({
			shortName,
			sharedCoasts: waterTerritoriesShortNames.filter((each) =>
				borderingTerritories.includes(each)
			),
		})
	);

	const sharedCoastTerritoriesShortNames = sharedCoastTerritories
		.filter((each) => each.sharedCoasts.length > 0)
		.map((each) => each.shortName);

	const isSourceExceptional = exceptionalCoastTerritories
		.map((each) => each.shortName)
		.includes(territory);

	if (isSourceExceptional) {
		return exceptionalSourceHandler(territory, coast);
	}

	const isDestinationExceptional = exceptionalCoastTerritories
		.map((each) => sharedCoastTerritoriesShortNames.includes(each.shortName))
		.includes(true);

	if (isDestinationExceptional) {
		return exceptionalDestinationHandler(
			territory,
			sharedCoastTerritoriesShortNames
		);
	}

	return [...sharedCoastTerritoriesShortNames];
}

exports.sharedCoastChecker = sharedCoastChecker;
