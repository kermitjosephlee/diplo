const { getBorderingTerritories } = require("../../constants/gameMap");

function displacementPositionHandler(displacement, resolvedPositions) {
	const availableTerritories = getBorderingTerritories(
		displacement.origin
	).filter(
		(each) =>
			!resolvedPositions.map((position) => position.location).includes(each)
	);

	// no spaces available, unit destroyed
	if (availableTerritories.length === 0) {
		return {
			location: null,
			unitType: displacement.unitType,
			nation: displacement.nation,
			isDisplaced: true,
			isDestroyed: true,
		};
	}

	// only one space available, unit defaulted to available territory
	if (availableTerritories.length === 1) {
		return {
			location: availableTerritories[0],
			unitType: displacement.unitType,
			nation: displacement.nation,
			isDisplaced: true,
			isDestroyed: false,
		};
	}

	// more than one space available, unit defaulted to first available alphabetically
	return {
		location: availableTerritories.sort((a, b) => a - b)[0],
		availableLocations: availableTerritories,
		unitType: displacement.unitType,
		nation: displacement.nation,
		isDisplaced: true,
		isDestroyed: false,
	};
}

function displacementsPositionsHandler(displacements, resolvedPositions) {
	const handledDisplacementsPositions = displacements.map((displacement) =>
		displacementPositionHandler(displacement, resolvedPositions)
	);

	return [...handledDisplacementsPositions, ...resolvedPositions];
}

exports.displacementsPositionsHandler = displacementsPositionsHandler;
exports.displacementPositionHandler = displacementPositionHandler;
