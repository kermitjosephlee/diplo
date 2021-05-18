const { currentTerritory } = require("../../constants/gameMap");

function convoyChainChecker(movement) {
	const { convoy, ...rest } = movement;

	const borderingTerritories = (orders) =>
		currentTerritory(orders.origin).borderingTerritories;

	const [firstConvoyOrders] = convoy.filter((each) =>
		borderingTerritories(rest).includes(each.origin)
	);

	let orderedConvoy = [];

	function recursiveChainer(convoyOrders, cb) {
		if (borderingTerritories(convoyOrders).includes(rest.destination)) {
			orderedConvoy = [...orderedConvoy, convoyOrders];
			return { ...rest, convoy: orderedConvoy };
		} else {
			const [nextConvoyOrders] = convoy.filter((each) =>
				borderingTerritories(convoyOrders).includes(each.origin)
			);
			orderedConvoy = [...orderedConvoy, convoyOrders];
			return recursiveChainer(nextConvoyOrders);
		}
	}

	return recursiveChainer(firstConvoyOrders);
}

exports.convoyChainChecker = convoyChainChecker;
