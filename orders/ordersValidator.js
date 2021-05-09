const { gameMap } = require("../constants/gameMap");
const { availableMovements } = require("../movementHelpers/availableMovements");

function ordersValidator(orders) {
	if (orders.actionType === "C") console.log("orders", orders);
}

exports.ordersValidator = ordersValidator;
