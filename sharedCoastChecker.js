const {
	gameMap,
	maritimeTerritories,
	terrestrialTerritories,
	exceptionalCoastTerritories,
} = require("./gameMap");
const { waterChecker } = require("./waterChecker");
const { landChecker } = require("./landChecker");
const {
	exceptionalDestinationHandler,
} = require("./exceptionalDestinationHandler");

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
	}

	const isDestinationExceptional = exceptionalCoastTerritories.map((each) =>
		sharedCoastTerritoriesShortNames.includes(each.shortName)
	);

	console.log(
		"poops",
		exceptionalCoastTerritories.map((each) => each.shortName)
	);

	if (isDestinationExceptional) {
		console.log("dest exceptional");
		return exceptionalDestinationHandler(
			territory,
			sharedCoastTerritoriesShortNames
		);
	}

	return sharedCoastTerritoriesShortNames;
}

exports.sharedCoastChecker = sharedCoastChecker;
