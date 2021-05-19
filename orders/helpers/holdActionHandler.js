const { ordersTemplates } = require("../ordersTemplates");
const { ordersValidator } = require("../ordersValidator");
const { nationalAdjectives } = require("../../constants/nationalAdjectives");

let orders = ordersTemplates("H");

function holdActionHandler(territory, unitType, nation, rl, coast = null) {
	orders.origin = territory;
	orders.destination = territory;
	orders.unitType = unitType;
	orders.coast = coast;
	orders.nation = nation;
	console.log(
		`${nationalAdjectives[nation]} ${unitType} to hold in ${territory} ${
			coast ? coast : ""
		}`
	);
	ordersValidator(orders);
	rl.close();
	return;
}

exports.holdActionHandler = holdActionHandler;
