const { gameMap } = require("../../constants/gameMap");

const names = gameMap.map(({ name }) => name);
const shortNames = gameMap.map(({ shortName }) => shortName);

function isTerritoryValid(territory) {
	return names.includes(territory) || shortNames.includes(territory);
}

exports.isTerritoryValid = isTerritoryValid;
