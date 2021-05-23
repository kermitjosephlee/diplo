const fs = require("fs");
const { supplyCenters } = require("../constants/gameMap");

function supplyCentersCounter() {
	const gameID = 1;
	const gameFile = `./turns/currentGames/game${gameID}.txt`;
	const scoreFile = `./building/scores/game${gameID}.txt`;

	const gameFileObj = JSON.parse(fs.readFileSync(gameFile));
	const scoreFileArr = JSON.parse(fs.readFileSync(scoreFile));

	const fallFilteredPositions = gameFileObj.filter(
		(each) => each.season === "Fall"
	);

	const isFirstFall =
		fallFilteredPositions[0].year === 1901 &&
		fallFilteredPositions.length === 1;

	const currentPositions = fallFilteredPositions[0].positions;
	const olderPositions = isFirstFall
		? gameFileObj.filter((each) => each.season === "Spring")[0].positions
		: fallFilteredPositions[1].positions;

	const updatedSupplyCenters = supplyCenters.map((sc) => {
		const currentPosition = currentPositions.filter(
			(position) => position.location === sc.shortName
		);

		const {
			id,
			name,
			shortName,
			isSupplyCenter,
			occupyingNations,
			initialNation,
		} = sc;

		if (
			currentPosition.length > 0 &&
			currentPosition[0].nation !== occupyingNations[0]
		) {
			const updatedSupplyCenter = {
				id,
				name,
				shortName,
				isSupplyCenter,
				initialNation,
				occupyingNations: [currentPosition[0].nation, ...sc.occupyingNations],
			};
			return updatedSupplyCenter;
		}

		return {
			id,
			name,
			shortName,
			isSupplyCenter,
			initialNation,
			occupyingNations,
		};
	});

	const updatedScoreFileArr = [
		{
			gameId: gameFileObj[0].gameId,
			year: gameFileObj[0].year,
			season: gameFileObj[0].season,
			supplyCenters: updatedSupplyCenters,
		},
		...scoreFileArr,
	];

	fs.writeFileSync(scoreFile, JSON.stringify(updatedScoreFileArr, null, 2));

	return updatedScoreFileArr;
}

exports.supplyCentersCounter = supplyCentersCounter;
