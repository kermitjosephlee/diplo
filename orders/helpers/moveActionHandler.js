const { ordersTemplates } = require("../ordersTemplates");
const { ordersValidator } = require("../ordersValidator");
const {
	availableMovements,
} = require("../../movementHelpers/availableMovements");

let orders = ordersTemplates("M");

function moveActionHandler(territory, unitType, rl, coast = null) {
	rl.question(
		`Move the ${unitType} where: ${availableMovements(
			territory,
			unitType,
			coast
		)}? `,
		function (destination) {
			orders.origin = territory;
			orders.destination = destination;
			orders.unitType = unitType;
			orders.coast = coast;
			ordersValidator(orders);
			rl.close();
		}
	);
}

exports.moveActionHandler = moveActionHandler;
