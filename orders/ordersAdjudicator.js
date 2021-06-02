const fs = require("fs");
const {
	conflictResolver,
	displacementsOrdersHandler,
	displacementPositionHandler,
	displacementsPositionsHandler,
	missingOrdersAppender,
	nonAdjacentMovesFinder,
	ordersSorterByType,
	processedOrdersAppender,
	supportCounter,
} = require("./adjudicationHelpers");
const { convoyValidator } = require("./convoyValidator");
const { finalizedTurnAppender } = require("../turns/finalizedTurnsAppender");

function ordersAdjudicator() {
	// receive a list of orders
	const gameId = 1;
	const pendingOrdersFile = `./orders/pending/game${gameId}.txt`;
	const pendingOrdersObj = JSON.parse(
		fs.readFileSync(pendingOrdersFile, "utf-8")
	);
	const orders =
		pendingOrdersObj.gameId === gameId ? pendingOrdersObj.orders : [];

	const totalOrders = missingOrdersAppender(orders); // adds in generic hold orders for units without orders
	const sortedOrders = ordersSorterByType(totalOrders); // returns orders by action type

	const supportUpdatedOrders = supportCounter(sortedOrders); // handles additions and subtractions of supports

	const {
		M: supportUpdatedMoves,
		H: supportUpdatedHolds,
		S: supportUpdatedSupports,
	} = supportUpdatedOrders;

	const nonAdjacentMoves = nonAdjacentMovesFinder(supportUpdatedMoves); // potential convoys

	// returns with validated chain convoys and holds converted from invalid or interruped convoys
	const { convoyValidatedMovements, convoyValidatedHolds } = convoyValidator(
		nonAdjacentMoves,
		sortedOrders.C,
		supportUpdatedMoves,
		supportUpdatedHolds
	);

	// returns with labelled successful or failed movements, and labelled for displacement handling
	const resolvedOrders = conflictResolver(
		convoyValidatedMovements,
		convoyValidatedHolds
	).flat();

	const successfulMovements = resolvedOrders.filter(
		(each) => each.isMovementSuccessful === true
	);

	const displacedUnits = resolvedOrders.filter((each) => each.isDisplaced);

	// converts failed movements into holds
	const failedMovements = resolvedOrders
		.filter((each) => each.isMovementSuccessful === false && !each.isDisplaced)
		.map((each) => ({ destination: each.origin, actionType: "H", ...each }));

	// filters out any convoy validated displaced holds
	const filteredHolds = convoyValidatedHolds.filter(
		(each) =>
			!displacedUnits
				.map((displacement) => displacement.origin)
				.includes(each.origin)
	);

	// updated list of holds
	const postResolutionHolds = [...failedMovements, ...filteredHolds];

	const finalResultingOrders = [
		...successfulMovements,
		...supportUpdatedSupports,
		...postResolutionHolds,
	];

	const postDisplacementOrders = displacementsOrdersHandler(
		displacedUnits,
		finalResultingOrders
	);

	// returns with a list of positions for resulting movements and holds
	const postDisplacementPositions = postDisplacementOrders.map((each) => {
		if (each.isMovementSuccessful) {
			return {
				location: each.destination,
				unitType: each.unitType,
				nation: each.nation,
				coast: each.coast,
			};
		}

		return {
			location: each.origin,
			unitType: each.unitType,
			nation: each.nation,
			coast: each.coast,
		};
	});

	// logs received orders and resulting orders
	processedOrdersAppender(totalOrders, postDisplacementOrders);

	// updates positions file and resets for next turn
	finalizedTurnAppender(postDisplacementPositions);
}

ordersAdjudicator();

exports.ordersAdjudicator = ordersAdjudicator;
