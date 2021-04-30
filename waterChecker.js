const { maritimeTerritories, gameMap } = require("./gameMap");

const maritimesTerritoriesShortNames = maritimeTerritories.map(
	(item) => item.shortName
);

// returns an array of Maritime shortNames that border a territory
function waterChecker(territory) {
	return gameMap
		.filter((each) => each.shortName === territory)[0]
		.borderingTerritories.filter((item) =>
			maritimesTerritoriesShortNames.includes(item)
		);
}

exports.waterChecker = waterChecker;
