const { ordersTemplates } = require("../ordersTemplates");
const { ordersValidator } = require("../ordersValidator");

let orders = ordersTemplates("H");

function holdActionHandler(territory, unitType, rl, coast = null) {
	orders.origin = territory;
	orders.unitType = unitType;
	orders.coast = coast;
	ordersValidator(orders);
	rl.close();
	return;
}

exports.holdActionHandler = holdActionHandler;
