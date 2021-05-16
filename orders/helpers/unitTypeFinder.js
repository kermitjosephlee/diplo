const { unitFinder } = require("./unitFinder");

function unitTypeFinder(territory) {
	return unitFinder(territory) ? unitFinder(territory).unitType : null;
}

exports.unitTypeFinder = unitTypeFinder;
