const { ordersTemplates } = require("../ordersTemplates");
const { ordersValidator } = require("../ordersValidator");
const {
	availableMovements,
} = require("../../movementHelpers/availableMovements");

let orders = ordersTemplates("M");

function moveActionHandler(territory, unitType, rl) {
	rl.question(
		`Move the ${unitType} where: ${availableMovements(territory, unitType)}? `,
		function (destination) {
			orders.origin = territory;
			orders.destination = destination;
			orders.unitType = unitType;
			ordersValidator(orders);
			rl.close();
		}
	);
}

exports.moveActionHandler = moveActionHandler;
