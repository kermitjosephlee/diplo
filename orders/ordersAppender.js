const fs = require("fs");

function ordersAppender(orders) {
	const gameId = 1; // TODO: from yet unwritten getGameId function
	const pendingOrdersFile = `./orders/pending/game${gameId}.txt`;

	const currentPendingOrders = JSON.parse(
		fs.readFileSync(pendingOrdersFile, "utf-8")
	).orders;

	const appendedOrders = [...currentPendingOrders, orders];
	const updatedFileString = JSON.stringify({
		orders: appendedOrders,
		...currentPendingOrders,
	});

	fs.writeFileSync(pendingOrdersFile, updatedFileString);
}

exports.ordersAppender = ordersAppender;
