const fs = require("fs");

function currentSeason() {
	const gameID = 1;
	const pendingGameFile = `./orders/pending/game${gameID}.txt`;
	const { gameId, year, season } = JSON.parse(fs.readFileSync(pendingGameFile));

	return { gameId, year, season };
}

exports.currentSeason = currentSeason;
