const fs = require("fs");
const { seasons } = require("../../constants/seasons");

function pendingOrdersResetter() {
	const gameID = 1; // TODO: from yet unwritten getGameId function
	const pendingOrdersFile = `./orders/pending/game${gameID}.txt`;

	const { gameId, year, season } = JSON.parse(
		fs.readFileSync(pendingOrdersFile, "utf-8")
	);

	const seasonIndex = seasons.indexOf(season);

	// checks if season is WINTER
	if (seasonIndex === 3) {
		const nextSeasonPending = JSON.stringify({
			gameId,
			year: year + 1,
			season: seasons[0], // SPRING
			orders: [],
		});

		return fs.writeFileSync(pendingOrdersFile, nextSeasonPending);
	}

	const nextSeasonPending = JSON.stringify({
		gameId,
		year,
		season: seasons[seasonIndex + 1],
		orders: [],
	});

	return fs.writeFileSync(pendingOrdersFile, nextSeasonPending);
}

exports.pendingOrdersResetter = pendingOrdersResetter;
