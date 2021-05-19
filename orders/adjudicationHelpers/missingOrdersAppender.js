const fs = require("fs");
const { ordersTemplates } = require("../ordersTemplates");

const holdTemplate = ordersTemplates("H");

function missingOrdersAppender(pendingOrders) {
	const gameId = 1;
	const unitPositionsFile = `./turns/currentGames/game${gameId}.txt`;
	const unitPositions = JSON.parse(fs.readFileSync(unitPositionsFile, "utf-8"));
	const latestUnitPositions = unitPositions[0].positions;

	const locationsWithPendingOrders = pendingOrders.map((each) => each.origin);

	const filteredUnitPositions = latestUnitPositions.filter(
		(each) => !locationsWithPendingOrders.includes(each.location)
	);

	const filteredUnitHoldOrders = filteredUnitPositions.map(
		({ location, destination, unitType, nation }) => ({
			...holdTemplate,
			origin: location,
			destination: location,
			unitType,
			nation,
		})
	);

	return [...pendingOrders, ...filteredUnitHoldOrders];
}

exports.missingOrdersAppender = missingOrdersAppender;
