const { getBorderingTerritories } = require("../../constants/gameMap");

function displacementOrderHandler(displacement, resolvedOrders) {
	const availableTerritories = getBorderingTerritories(
		displacement.origin
	).filter(
		(each) =>
			!resolvedOrders.map((position) => position.location).includes(each)
	);

	// no spaces available, unit destroyed
	if (availableTerritories.length === 0) {
		return {
			...displacement,
			destination: null,
			isDisplaced: true,
			isDestroyed: true,
			isMovementSuccessful: false,
		};
	}

	// only one space available, unit defaulted to available territory
	if (availableTerritories.length === 1) {
		return {
			...displacement,
			destination: availableTerritories[0],
			isDisplaced: true,
			isDestroyed: false,
			isMovementSuccessful: true,
		};
	}

	// more than one space available, unit defaulted to first available alphabetically
	return {
		...displacement,
		destination: availableTerritories.sort((a, b) => a - b)[0],
		availableDestinations: availableTerritories,
		isDisplaced: true,
		isDestroyed: false,
		isMovementSuccessful: true,
	};
}

function displacementsOrdersHandler(displacements, resolvedOrders) {
	const resolvedDisplacementOrders = displacements.map((displacement) =>
		displacementOrderHandler(displacement, resolvedOrders)
	);

	return [...resolvedDisplacementOrders, ...resolvedOrders];
}

exports.displacementsOrdersHandler = displacementsOrdersHandler;
