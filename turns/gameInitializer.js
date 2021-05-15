const fs = require("fs");
const { initialUnits } = require("../orders/initialUnits");
const { seasons } = require("../constants/seasons");
const { newGameIdGenerator } = require("./newGameIdGenerator");

function gameInitializer() {
	const firstYear = 1901;
	const gameId = newGameIdGenerator();

	const initialTurn = {
		gameId,
		year: firstYear,
		season: seasons[0], // "Spring"
		positions: [...initialUnits],
	};

	const initialPendingOrders = {
		gameId,
		orders: [],
	};

	fs.writeFileSync(
		`./orders/pending/game${gameId}.txt`,
		JSON.stringify(initialPendingOrders, null, 2)
	);

	fs.writeFileSync(
		`./turns/currentGames/game${gameId}.txt`,
		JSON.stringify([initialTurn], null, 2)
	);

	console.log(
		`game id: ${gameId} initialized\n./turns/currentGames/game${gameId}.txt`
	);
}

gameInitializer();

exports.gameInitializer = gameInitializer;
