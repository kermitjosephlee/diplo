const fs = require("fs");
const { supplyCenters } = require("../constants/gameMap");
const { mapSummaryMaker } = require("./mapSummaryMaker");
const { nameUnderscoreReplacer } = require("./nameUnderscoreReplacer");

function mapPositionMaker() {
	const gameID = 1;
	const scoreFile = `./building/scores/game${gameID}.txt`;
	const currentScore = JSON.parse(fs.readFileSync(scoreFile))[0];
	const { supplyCenters: currentSupplyCenters } = currentScore;

	const combinedSupplyCenters = supplyCenters.map((each) => {
		return currentSupplyCenters.map((sc) => sc.name).includes(each.name)
			? currentSupplyCenters.filter((sc) => sc.name === each.name)[0]
			: each;
	});

	let positions = "";

	combinedSupplyCenters.forEach((each) => {
		const { name, occupyingNations } = each;
		const nation =
			occupyingNations.length > 0 ? occupyingNations[0] : undefined;

		positions =
			positions +
			`\n<g title="${name}"><use xlink:href="#sc" class="${nation}" transform="translate(&sc${nameUnderscoreReplacer(
				name
			)};)"/></g>`;
	});

	return positions + mapSummaryMaker();
}

exports.mapPositionMaker = mapPositionMaker;
