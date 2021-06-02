const fs = require("fs");
const {
	missingOrdersAppender,
	ordersSorterByType,
	// moveOrdersSorterByDest,
	supportCounter,
	nonAdjacentMovesFinder,
	conflictResolver,
	processedOrdersAppender,
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

	// returns with labelled successful or failed movements
	const resolvedMovements = conflictResolver(
		convoyValidatedMovements,
		convoyValidatedHolds
	).flat();

	const successfulMovements = resolvedMovements.filter(
		(each) => each.isMovementSuccessful === true
	);

	// converts failed movements into holds
	// TODO: will have to check for displacements
	const failedMovements = resolvedMovements
		.filter((each) => each.isMovementSuccessful === false)
		.map((each) => ({ destination: each.origin, actionType: "H", ...each }));

	// updated list of holds
	const postResolutionHolds = [...failedMovements, ...convoyValidatedHolds];

	const finalResultingOrders = [
		...successfulMovements,
		...supportUpdatedSupports,
		...postResolutionHolds,
	];

	// returns with a list of positions for resulting movements and holds
	const postResolutionPositions = finalResultingOrders.map((each) => {
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
	processedOrdersAppender(totalOrders, finalResultingOrders);

	// updates positions file and resets for next turn
	finalizedTurnAppender(postResolutionPositions);

	// score move orders
	// evaluate successful move results
	// evaluate if possible retreat spaces are open
	// if more than one, list spaces for prompt
}

ordersAdjudicator();

exports.ordersAdjudicator = ordersAdjudicator;
