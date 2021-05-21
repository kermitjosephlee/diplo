const fs = require("fs");
const {
	missingOrdersAppender,
	ordersSorterByType,
	// moveOrdersSorterByDest,
	supportCounter,
	nonAdjacentMovesFinder,
	conflictResolver,
} = require("./adjudicationHelpers");
const { convoyValidator } = require("./convoyValidator");

function ordersAdjudicator() {
	// receive a list of orders
	const gameId = 1;
	const pendingOrdersFile = `./orders/pending/game${gameId}.txt`;
	const pendingOrdersObj = JSON.parse(
		fs.readFileSync(pendingOrdersFile, "utf-8")
	);
	const orders =
		pendingOrdersObj.gameId === gameId ? pendingOrdersObj.orders : [];

	const totalOrders = missingOrdersAppender(orders);
	const sortedOrders = ordersSorterByType(totalOrders);

	const supportUpdatedOrders = supportCounter(sortedOrders);

	const {
		M: supportUpdatedMoves,
		H: supportUpdatedHolds,
		S: supportUpdatedSupports,
	} = supportUpdatedOrders;

	const nonAdjacentMoves = nonAdjacentMovesFinder(supportUpdatedMoves); // potential convoys

	const { convoyValidatedMovements, convoyValidatedHolds } = convoyValidator(
		nonAdjacentMoves,
		sortedOrders.C,
		supportUpdatedMoves,
		supportUpdatedHolds
	);

	const resolvedMovements = conflictResolver(convoyValidatedMovements).flat();

	const successfulMovements = resolvedMovements.filter(
		(each) => each.isMovementSuccessful === true
	);
	const failedMovements = resolvedMovements
		.filter((each) => each.isMovementSuccessful === false)
		.map((each) => ({ destination: each.origin, actionType: "H", ...each }));

	const postResolutionHolds = [...failedMovements, ...convoyValidatedHolds];

	const postResolutionPositions = [
		...successfulMovements,
		...postResolutionHolds,
	].map((each) => {
		if (each.isMovementSuccessful) {
			return {
				location: each.destination,
				unitType: each.unitType,
				nation: each.nation,
			};
		}
		return {
			location: each.origin,
			unitType: each.unitType,
			nation: each.nation,
		};
	});
	console.log("postResolutionPositions", postResolutionPositions);

	//// validate move, support and convoy orders

	//// parse orders by type (move, support, hold, convoy)
	//// bundle move orders and hold orders
	//// validate support orders
	//// append support orders to move/hold orders

	//// evaluate which support orders are cancelled by move orders

	// score move orders
	// evaluate successful move results
	// evaluate if possible retreat spaces are open
	// if more than one, list spaces for prompt
}

ordersAdjudicator();

exports.ordersAdjudicator = ordersAdjudicator;
