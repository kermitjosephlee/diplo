const { ordersTemplates } = require("../ordersTemplates");
const { ordersValidator } = require("../ordersValidator");
const {
	availableMovements,
} = require("../../movementHelpers/availableMovements");

const { nationalAdjectives } = require("../../constants/nationalAdjectives");

let orders = ordersTemplates("M");

function moveReceiptStringGenerator({
	origin,
	destination,
	unitType,
	nation,
	coast,
}) {
	return `${
		nationalAdjectives[nation]
	} ${unitType} in ${origin} to move to ${destination} ${coast ? coast : ""}`;
}

function moveActionHandler(territory, unitType, nation, rl, coast = null) {
	rl.question(
		`Move the ${
			nationalAdjectives[nation]
		} ${unitType} where: ${availableMovements(territory, unitType, coast)}? `,
		function (destination) {
			orders.origin = territory;
			orders.destination = destination;
			orders.unitType = unitType;
			orders.nation = nation;
			orders.coast = coast;
			console.log(moveReceiptStringGenerator(orders));
			ordersValidator(orders);
			rl.close();
		}
	);
}

exports.moveActionHandler = moveActionHandler;
