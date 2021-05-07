const { gameMap } = require("../constants/gameMap");
const { availableMovements } = require("../movementHelpers/availableMovements");

function ordersValidator(orders) {
	console.log("orders", orders);
}

exports.ordersValidator = ordersValidator;
