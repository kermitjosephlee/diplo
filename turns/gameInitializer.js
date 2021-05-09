const fs = require("fs");
const { initialUnits } = require("../orders/initialUnits");
const { seasons } = require("../constants/seasons");

function gameInitializer() {
	const turns = fs.readdirSync(`./turns/currentGames`);
	const firstYear = 1901;
	const gameId = turns.length + 1;

	const initialTurn = {
		gameId,
		year: firstYear,
		season: seasons[0], // "Spring"
		positions: [...initialUnits],
	};

	fs.writeFileSync(
		`./turns/currentGames/game${gameId}.txt`,
		JSON.stringify([initialTurn])
	);
}

gameInitializer();

exports.gameInitializer = gameInitializer;
