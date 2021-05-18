const { currentTerritory } = require("../../constants/gameMap");

function convoyChainChecker(movement) {
	console.log("movement", movement);
	const { convoy, ...rest } = movement;

	const borderingTerritories = (orders) =>
		currentTerritory(orders.origin).borderingTerritories;

	const [firstConvoyOrders] = convoy.filter((each) =>
		borderingTerritories(rest).includes(each.origin)
	);

	let orderedConvoy = [];

	function recursiveChainer(convoyOrders) {
		if (borderingTerritories(convoyOrders).includes(rest.destination)) {
			orderedConvoy = [...orderedConvoy, convoyOrders];
			console.log("orderedConvoy", { ...rest, convoy: orderedConvoy });
			return { ...rest, convoy: orderedConvoy };
		} else {
			const [nextConvoyOrders] = convoy.filter((each) =>
				borderingTerritories(convoyOrders).includes(each.origin)
			);
			orderedConvoy = [...orderedConvoy, convoyOrders];
			recursiveChainer(nextConvoyOrders);
		}
	}

	// return recursiveChainer(firstConvoyOrders);
	return recursiveChainer(firstConvoyOrders);
}

exports.convoyChainChecker = convoyChainChecker;
