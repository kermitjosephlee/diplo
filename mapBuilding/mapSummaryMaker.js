// const { supplyCenters } = require("../constants/gameMap");
// const { turnCounter } = require("../turns/turnCounter");
const fs = require("fs");

function mapSummaryMaker() {
	const gameID = 1; // TODO: update gameId tracker
	const gameFile = `turns/currentGames/game${gameID}.txt`;
	const gameStatesList = JSON.parse(fs.readFileSync(gameFile), "utf-8");

	const scoreFile = `./building/scores/game${gameID}.txt`;
	const currentSupplyCenters = JSON.parse(fs.readFileSync(scoreFile))[0];
	const { year, season, supplyCenters } = currentSupplyCenters;

	// const { year, season } = gameStatesList[0];

	let summaryString = "\n";

	let ownershipList = {
		England: 0,
		France: 0,
		Germany: 0,
		Italy: 0,
		Austria: 0,
		Russia: 0,
		Turkey: 0,
		null: 0,
	};

	// TODO: update SC's from post-Fall results instead of hardcoded initial Game Map
	supplyCenters.forEach((each) => {
		if (each.occupyingNations.length > 0) {
			ownershipList[each.occupyingNations[0]] =
				ownershipList[each.occupyingNations[0]] + 1;
		} else {
			ownershipList.null = ownershipList.null + 1;
		}
	});

	Object.entries(ownershipList).forEach(([key, value], index) => {
		summaryString =
			summaryString +
			`\n\t<text x="10" y="${index * 10 + 22}">${
				key === "null" ? "unclaimed" : key
			}: ${value}</text>`;
	});

	return `\n<g title="Summary">\n\t<rect class="summary" width="148" height="100"/>\n\t<text x="10" y="12">${season} ${year}</text>${summaryString}\n</g>`;
}

exports.mapSummaryMaker = mapSummaryMaker;
