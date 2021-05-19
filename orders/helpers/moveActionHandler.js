const { ordersTemplates } = require("../ordersTemplates");
const { ordersValidator } = require("../ordersValidator");
const {
	availableMovements,
} = require("../../movementHelpers/availableMovements");

const { nationalAdjectives } = require("../../constants/nationalAdjectives");

let orders = ordersTemplates("M");

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
			console.log(
				`${
					nationalAdjectives[nation]
				} ${unitType} in ${territory} to move to ${destination} ${
					coast ? coast : ""
				}`
			);
			ordersValidator(orders);
			rl.close();
		}
	);
}

exports.moveActionHandler = moveActionHandler;
