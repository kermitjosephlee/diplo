const { unitFinder } = require("./unitFinder");

function unitTypeFinder(territory) {
	return unitFinder(territory) ? unitFinder(territory).unitType : null;
}

console.log(unitTypeFinder("STP"));

exports.unitTypeFinder = unitTypeFinder;
