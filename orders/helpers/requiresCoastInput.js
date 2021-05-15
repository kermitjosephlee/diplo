const { exceptionalCoastTerritories } = require("../../constants/gameMap");

function requiresCoastInput(territory) {
	return exceptionalCoastTerritories
		.map(({ shortName }) => shortName)
		.includes(territory);
}

exports.requiresCoastInput = requiresCoastInput;
