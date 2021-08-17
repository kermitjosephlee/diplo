const fs = require("fs");
const {
	pendingOrdersResetter,
} = require("../orders/adjudicationHelpers/pendingOrdersResetter");
const { mapBuilder } = require("../mapBuilding/mapBuilder");
const { supplyCentersCounter } = require("../building/supplyCentersCounter");
const { turnCounter } = require("./turnCounter");

function finalizedTurnAppender(finalizedTurn) {
	const gameId = 1;
	const currentGameFile = `./turns/currentGames/game${gameId}.txt`;
	const { year, season } = turnCounter();
	const previousTurns = JSON.parse(fs.readFileSync(currentGameFile, "utf-8"));
	const currentTurn = { gameId, year, season, positions: finalizedTurn };
	const updatedTurns = [currentTurn, ...previousTurns];

	fs.writeFile(
		currentGameFile,
		JSON.stringify(updatedTurns, null, 2),
		(err) => {
			if (err) return console.log("Error - FinalizedTurnAppender", err);

			console.log(
				`Orders for ${season} ${year} have been written to ${currentGameFile}`
			);

			pendingOrdersResetter(); // will only fire if writeFile is non-error
			supplyCentersCounter();
			mapBuilder();
		}
	);
}

exports.finalizedTurnAppender = finalizedTurnAppender;
