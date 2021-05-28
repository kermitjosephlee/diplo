const fs = require("fs");

function supplyCentersCounter() {
	const gameID = 1;
	const gameFile = `./turns/currentGames/game${gameID}.txt`;
	const scoreFile = `./building/scores/game${gameID}.txt`;

	const gameFileObj = JSON.parse(fs.readFileSync(gameFile));
	const scoreFileArr = JSON.parse(fs.readFileSync(scoreFile));

	const currentPositions = gameFileObj[0].positions;
	const olderSupplyCenters = scoreFileArr[0].supplyCenters;

	const updatedSupplyCenters = olderSupplyCenters.map((sc) => {
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
			currentPosition[0].nation !== occupyingNations[0] // grabs current one
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
