const {
	availableMovements,
} = require("../../movementHelpers/availableMovements");
const { ordersTemplates } = require("../ordersTemplates");
const { ordersValidator } = require("../ordersValidator");
const { nationalAdjectives } = require("../../constants/nationalAdjectives");

let orders = ordersTemplates("C");

function convoyReceiptStringGenerator({
	convoyingUnitOrigin,
	origin,
	destination,
	unitType,
	nation,
	coast,
}) {
	return `${
		nationalAdjectives[nation]
	} ${unitType} in ${origin} to convoy Army ${convoyingUnitOrigin} to ${destination} ${
		coast ? coast : ""
	}`;
}

function convoyActionHandler(territory, unitType, nation, rl, coast = null) {
	rl.question(
		`Which unit needs the convoy ${availableMovements(territory)}? `,
		(origin) => {
			rl.question(
				`Convoy to where ${availableMovements(territory)}? `,
				(destination) => {
					orders.convoyingUnitOrigin = origin; // the origin of the convoying army
					orders.origin = territory; // where the convoy navy is currently located
					orders.destination = destination;
					orders.unitType = unitType;
					orders.nation = nation;
					orders.coast = coast;
					orders.actionType = "C";
					console.log(convoyReceiptStringGenerator(orders));
					ordersValidator(orders);
					rl.close();
				}
			);
		}
	);

	return;
}

exports.convoyActionHandler = convoyActionHandler;
