const { ordersTemplates } = require("../ordersTemplates");
const { ordersValidator } = require("../ordersValidator");

let orders = ordersTemplates("S");

function supportActionHandler(territory, unitType, nation, rl, coast = null) {
	rl.question(`Support what unit? `, (supportingUnit) => {
		rl.question(
			`...to where (press enter for HOLD)? `,
			(destination = null) => {
				orders.origin = territory;
				orders.destination = destination ? destination : territory;
				orders.supportingUnit = supportingUnit;
				orders.actionType = "S";
				orders.nation = nation;
				orders.unitType = unitType;
				orders.coast = coast;
				ordersValidator(orders);
				rl.close();
			}
		);
	});
}

exports.supportActionHandler = supportActionHandler;
