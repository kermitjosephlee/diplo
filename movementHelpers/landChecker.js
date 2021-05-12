const { gameMap, terrestrialTerritories } = require("../constants/gameMap");

const terrestrialTerritoriesShortNames = terrestrialTerritories.map(
	(item) => item.shortName
);

function landChecker(territory) {
	return gameMap
		.filter((each) => each.shortName === territory)[0]
		.borderingTerritories.filter((item) =>
			terrestrialTerritoriesShortNames.includes(item)
		);
}

exports.landChecker = landChecker;
