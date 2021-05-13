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
		JSON.stringify(initialPendingOrders)
	);

	fs.writeFileSync(
		`./turns/currentGames/game${gameId}.txt`,
		JSON.stringify([initialTurn])
	);
}

gameInitializer();

exports.gameInitializer = gameInitializer;
