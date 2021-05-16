const fs = require("fs");

const gameId = 1;
const gameFile = `./turns/currentGames/game${gameId}.txt`;
const currentPositions = JSON.parse(fs.readFileSync(gameFile, "utf-8"))[0]
	.positions;

function unitFinder(territory) {
	const [currentUnit] = currentPositions.filter(
		(each) => each.location === territory
	);
	return currentUnit;
}

exports.unitFinder = unitFinder;
