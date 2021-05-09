const { gameMap } = require("../constants/gameMap");

function convoyValidator(orders) {
	const movement = orders.filter((order) => order.action === "M");
	return null;
}

exports.convoyValidator = convoyValidator;
