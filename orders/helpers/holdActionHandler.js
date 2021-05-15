const { ordersTemplates } = require("../ordersTemplates");
const { ordersValidator } = require("../ordersValidator");

let orders = ordersTemplates("H");

function holdActionHandler(territory, unitType, rl) {
	orders.origin = territory;
	orders.unitType = unitType;
	ordersValidator(orders);
	rl.close();
	return;
}

exports.holdActionHandler = holdActionHandler;
