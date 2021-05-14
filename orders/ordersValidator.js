const fs = require("fs");
const { ordersAppender } = require("./ordersAppender");

function ordersValidator(orders) {
	const gameId = 1;
	const currentGameFile = `./turns/currentGames/game${gameId}.txt`;
	const [current, ...rest] = JSON.parse(
		fs.readFileSync(currentGameFile, "utf-8")
	);

	if (!orders) return null; // pauses appender firing before orders are received

	const isOrdersOriginValid = current.positions
		.map((each) => each.location)
		.includes(orders.origin);

	if (!isOrdersOriginValid) return null;

	return ordersAppender(orders);
}

exports.ordersValidator = ordersValidator;
