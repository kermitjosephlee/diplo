const fs = require("fs");

function ordersAdjudicator() {
	// receive a list of orders
	const gameId = 1;
	const gameFile = `./orders/pending/game${gameId}.txt`;
	const gameFileObj = JSON.parse(fs.readFileSync(gameFile, "utf-8"));
	const orders = gameFileObj.gameId === gameId ? gameFileObj.orders : [];

	console.log("orders", orders);
	// validate move, support and convoy orders

	// parse orders by type (move, support, hold, convoy)
	// bundle move orders and hold orders
	// validate support orders
	// append support orders to move/hold orders
	// evaluate which support orders are cancelled by move orders
	// score move orders
	// evaluate successful move results
	// evaluate if possible retreat spaces are open
	// if more than one, list spaces for prompt
}

ordersAdjudicator();

exports.ordersAdjudicator = ordersAdjudicator;
