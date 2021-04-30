const { gameMap, exceptionalCoastTerritories } = require("./gameMap");

function coastNameAppender(territory, coasts, shortNames) {
	const coastsArr = coasts.map((coast) => `${territory} - ${coast.location}`);
	const filteredShortNames = shortNames.filter((each) => each !== territory);

	return [...filteredShortNames, ...coastsArr];
}

function exceptionalDestinationHandler(
	territory,
	sharedCoastTerritoriesShortNames
) {
	const [currentTerritory] = gameMap.filter(
		(each) => each.shortName === territory
	);

	const [exceptionalCoasts] = exceptionalCoastTerritories.filter((each) =>
		currentTerritory.borderingTerritories.includes(each.shortName)
	);

	console.log("exceptionalCoasts", exceptionalCoasts);

	const exceptionalShortName = exceptionalCoasts.shortName;

	return coastNameAppender(
		exceptionalShortName,
		exceptionalCoasts.coasts,
		sharedCoastTerritoriesShortNames
	);
}

exports.exceptionalDestinationHandler = exceptionalDestinationHandler;
