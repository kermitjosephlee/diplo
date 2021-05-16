const {
	availableMovements,
} = require("../../movementHelpers/availableMovements");
const { ordersTemplates } = require("../ordersTemplates");
const { ordersValidator } = require("../ordersValidator");

let orders = ordersTemplates("C");

function convoyActionHandler(territory, unitType, rl, coast = null) {
	rl.question(
		`Which unit needs the convoy ${availableMovements(territory)}? `,
		(origin) => {
			rl.question(
				`Convoy to where ${availableMovements(territory)}? `,
				(destination) => {
					orders.currentLocation = territory;
					orders.origin = origin;
					orders.destination = destination;
					orders.unitType = unitType;
					orders.coast = coast;
					orders.actionType = "C";
					ordersValidator(orders);
					rl.close();
				}
			);
		}
	);

	return;
}

exports.convoyActionHandler = convoyActionHandler;
