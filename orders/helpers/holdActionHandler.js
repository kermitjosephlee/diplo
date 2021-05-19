const { ordersTemplates } = require("../ordersTemplates");
const { ordersValidator } = require("../ordersValidator");

let orders = ordersTemplates("H");

function holdActionHandler(territory, unitType, nation, rl, coast = null) {
	orders.origin = territory;
	orders.destination = territory;
	orders.unitType = unitType;
	orders.coast = coast;
	orders.nation = nation;
	ordersValidator(orders);
	rl.close();
	return;
}

exports.holdActionHandler = holdActionHandler;
