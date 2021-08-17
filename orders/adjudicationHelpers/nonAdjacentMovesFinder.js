const { currentTerritory } = require("../../constants/gameMap");

function nonAdjacentMovesFinder(moves) {
	return moves.filter(
		({ origin, destination }) =>
			!currentTerritory(origin).borderingTerritories.includes(destination)
	);
}

exports.nonAdjacentMovesFinder = nonAdjacentMovesFinder;
