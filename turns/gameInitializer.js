const fs = require("fs");
const { initialUnits } = require("../orders/initialUnits");
const { seasons } = require("../constants/seasons");
const { supplyCenters } = require("../constants/gameMap");
const { newGameIdGenerator } = require("./newGameIdGenerator");
const { mapBuilder } = require("../mapBuilding/mapBuilder");

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
		year: firstYear,
		season: seasons[0],
		orders: [],
	};

	const initialOrders = {
		gameId,
		orders: [],
	};

	const initialScore = {
		gameId,
		year: firstYear,
		season: seasons[0],
		supplyCenters: supplyCenters.map(
			({
				id,
				name,
				shortName,
				isSupplyCenter,
				occupyingNations,
				initialNation,
			}) => ({
				id,
				name,
				shortName,
				isSupplyCenter,
				occupyingNations,
				initialNation,
			})
		),
	};

	// function makeDirectory(directory) {
	// 	if (!fs.existsSync(directory)){
	// 		fs.mkdirSync(directory)
	// 	}
	// 	return
	// }

	// ["../orders/pending", "../orders/processed", "../turns/currentGames", "../building/scores"].forEach((each) => makeDirectory(each))

	fs.writeFileSync(
		`./orders/pending/game${gameId}.txt`,
		JSON.stringify(initialPendingOrders, null, 2)
	);

	fs.writeFileSync(
		`./orders/processed/game${gameId}.txt`,
		JSON.stringify(initialOrders, null, 2)
	);

	fs.writeFileSync(
		`./turns/currentGames/game${gameId}.txt`,
		JSON.stringify([initialTurn], null, 2)
	);

	fs.writeFileSync(
		`./building/scores/game${gameId}.txt`,
		JSON.stringify([initialScore], null, 2)
	);

	console.log(
		`game id: ${gameId} initialized\n./turns/currentGames/game${gameId}.txt`
	);

	mapBuilder();
}

gameInitializer();

exports.gameInitializer = gameInitializer;
