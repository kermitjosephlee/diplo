const fs = require("fs");

function ordersAppender(orders) {
	const gameId = 1; // TODO: from yet unwritten getGameId function
	const pendingOrdersFile = `./orders/pending/game${gameId}.txt`;

	const pendingOrdersObj = JSON.parse(
		fs.readFileSync(pendingOrdersFile, "utf-8")
	);

	const pendingOrders = pendingOrdersObj.orders;

	const filteredOrders = pendingOrders.filter(
		(each) => each.origin !== orders.origin
	);

	const updatedFileString = JSON.stringify({
		...pendingOrdersObj,
		orders: [...filteredOrders, orders],
	});

	fs.writeFileSync(pendingOrdersFile, updatedFileString);
}

exports.ordersAppender = ordersAppender;
