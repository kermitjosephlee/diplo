// const { gameMap } = require("../constants/gameMap");
// const { availableMovements } = require("../movementHelpers/availableMovements");
const { ordersAppender } = require("./ordersAppender");

function ordersValidator(orders) {
	// if (orders.actionType === "C") console.log("orders", orders);
	console.log("validator", orders);
	ordersAppender(orders);
}

exports.ordersValidator = ordersValidator;
