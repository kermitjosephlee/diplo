const fs = require("fs");
const { currentTerritory } = require("../constants/gameMap");
const { availableMovements } = require("../movementHelpers/availableMovements");
const { types } = require("../constants/types");

const { N } = types;

function convoyValidator(orders) {
	const movement = orders.filter((order) => order.action === "M");
	return null;
}

exports.convoyValidator = convoyValidator;

// army movement - ie. LON - KIE
// check if navy is adjacent
// if navy A is adjacent to LON, check to see if KIE is adjacent to navyA
// if so, valid convoy
// if not, check if navy is adjacent to navyA
// if so, and KIE is adjacent to navyB, valid convoy
// if not, check if navy is adjacent to navyB
// if not, invalid convoy, all units hold

const gameFile = "../turns/currentGames/game1.txt";

const currentPositions = JSON.parse(fs.readFileSync(gameFile))[0].positions;

function adjacentNavys(location) {
	const navalPositions = currentPositions.filter(
		(each) =>
			each.unitType === N &&
			availableMovements(location).includes(each.location) &&
			currentTerritory(each.location).isMaritime
	);

	return navalPositions;
}

function isDestination(currentLocation, destination) {
	return availableMovements(currentLocation, "N").includes(destination);
}

console.log("adjacentNavys", adjacentNavys("ENG"));
console.log("isDestination", isDestination("NTH", "NWY"));
