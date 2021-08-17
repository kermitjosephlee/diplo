const fs = require("fs");
const { seasons } = require("../constants/seasons");

function turnCounter() {
	const gameId = 1;
	const previousTurns = fs.readFileSync(
		`./turns/currentGames/game${gameId}.txt`
	);

	const [lastTurn, ...rest] = JSON.parse(previousTurns);

	if (lastTurn.season === "Winter") {
		const currentYear = lastTurn.year + 1;
		const currentSeason = seasons[0];
		return { year: currentYear, season: currentSeason };
	}

	const previousSeasonIndex = seasons.indexOf(lastTurn.season);
	const currentSeason = seasons[previousSeasonIndex + 1];
	const currentYear = lastTurn.year;

	return { year: currentYear, season: currentSeason };
}

exports.turnCounter = turnCounter;
