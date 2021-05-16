const { ordersTemplates } = require("../ordersTemplates");
const { ordersValidator } = require("../ordersValidator");

let orders = ordersTemplates("S");

function supportActionHandler(territory, unitType, rl, coast = null) {
	rl.question(`Support what unit?`, (supportingUnit) => {
		rl.question(`...to where? `, (destination) => {
			orders.origin = territory;
			orders.destination = destination;
			orders.supportingUnit = supportingUnit;
			orders.actionType = destination === territory ? "H" : "M";
			orders.unitType = unitType;
			orders.coast = coast;
			ordersValidator(orders);
			rl.close();
		});
	});
}

exports.supportActionHandler = supportActionHandler;
