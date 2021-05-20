const { currentTerritory } = require("../../constants/gameMap");
// const { invalidConvoyHandler } = require("./invalidConvoyHandler");

function convoyChainChecker(movement) {
	const { convoy, ...rest } = movement;

	const borderingTerritories = (origin) => {
		return origin ? currentTerritory(origin).borderingTerritories : [];
	};

	const [firstConvoyOrders] = convoy.filter((each) =>
		borderingTerritories(rest.origin).includes(each.origin)
	);

	let orderedConvoy = [];

	function recursiveChainer(convoyOrders) {
		const finalDestination = rest.destination;
		const isDestinationAdjacent = borderingTerritories(
			convoyOrders.origin
		).includes(finalDestination);

		const isConvoyAdjacent =
			convoy.filter((each) =>
				borderingTerritories(convoyOrders.origin).includes(each.origin)
			).length > 0;

		// 1. base case A - bordering territories of convoy origin has destination
		if (isDestinationAdjacent) {
			orderedConvoy = [...orderedConvoy, convoyOrders];

			const updatedMovement = {
				...rest,
				convoy: orderedConvoy,
				isConvoyValid: true,
			};
			return updatedMovement;
		}

		// 2. base case B - last convoy of chain does not have destination as bordering terr
		if (!isDestinationAdjacent && !isConvoyAdjacent) {
			orderedConvoy = [...orderedConvoy, convoyOrders];
			const updatedMovement = {
				...rest,
				convoy: orderedConvoy,
				isConvoyValid: false,
			};
			return updatedMovement;
		}

		// 3. recursive case - bordering territory does not have destination but does have another convoy origin
		if (!isDestinationAdjacent && isConvoyAdjacent) {
			orderedConvoy = [...orderedConvoy, convoyOrders];
			const [nextConvoyOrders] = convoy.filter((each) =>
				borderingTerritories(convoyOrders.origin).includes(each.origin)
			);

			return recursiveChainer(nextConvoyOrders);
		}
	}
	return recursiveChainer(firstConvoyOrders);
}

exports.convoyChainChecker = convoyChainChecker;
