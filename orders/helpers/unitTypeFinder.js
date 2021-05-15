const fs = require("fs");

const gameId = 1;
const gameFile = `./turns/currentGames/game${gameId}.txt`;
const currentPositions = JSON.parse(fs.readFileSync(gameFile, "utf-8"))[0]
	.positions;

function unitTypeFinder(territory) {
	const [currentUnit] = currentPositions.filter(
		(position) => position.location === territory
	);
	return currentUnit.unitType;
}

exports.unitTypeFinder = unitTypeFinder;
