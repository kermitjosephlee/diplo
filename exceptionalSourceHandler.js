const { gameMap } = require("./gameMap");

function exceptionalSourceHandler(territory, coast = "NORTH") {
	const [currentTerritory] = gameMap.filter(
		(each) => each.shortName === territory
	);

	const availableTerritories = currentTerritory.coasts.filter(
		(each) => each.location === coast
	)[0].territories;

	return availableTerritories;
}

exports.exceptionalSourceHandler = exceptionalSourceHandler;
