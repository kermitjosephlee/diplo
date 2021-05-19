const { ordersTemplates } = require("../ordersTemplates");
const { ordersValidator } = require("../ordersValidator");
const { nationalAdjectives } = require("../../constants/nationalAdjectives");

let orders = ordersTemplates("H");

function holdReceiptStringGenerator({ origin, nation, unitType, coast }) {
	return `${
		nationalAdjectives[nation]
	} ${unitType} in ${origin} to hold in ${origin} ${coast ? coast : ""}`;
}

function holdActionHandler(territory, unitType, nation, rl, coast = null) {
	orders.origin = territory;
	orders.destination = territory;
	orders.unitType = unitType;
	orders.coast = coast;
	orders.nation = nation;
	console.log(holdReceiptStringGenerator(orders));
	ordersValidator(orders);
	rl.close();
	return;
}

exports.holdActionHandler = holdActionHandler;
