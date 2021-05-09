const fs = require("fs");

function currentUnitPositions() {
	const gameId = 1; // TODO: update gameId tracker
	const gameFile = `turns/currentGames/game${gameId}.txt`;
	const gameStatesList = JSON.parse(fs.readFileSync(gameFile));

	const currentGameState = gameStatesList[0];
	const currentPositions = currentGameState.positions;

	return currentPositions;
}

exports.currentUnitPositions = currentUnitPositions;
