const { ordersTemplates } = require("../ordersTemplates");
const { ordersValidator } = require("../ordersValidator");
const { nationalAdjectives } = require("../../constants/nationalAdjectives");

let orders = ordersTemplates("S");

function supportReceiptStringGenerator(orders) {
	const {
		origin,
		destination,
		supports: { givingSupportTo },
		nation,
		unitType,
		coast,
	} = orders;
	return `${
		nationalAdjectives[nation]
	} ${unitType} in ${origin} to support ${givingSupportTo} ${
		destination === origin
			? `hold`
			: `to move to ${destination} ${coast ? coast : ""}`
	}`;
}

function supportActionHandler(territory, unitType, nation, rl, coast = null) {
	rl.question(`Support what unit? `, (supportingUnit) => {
		rl.question(
			`...to where (press enter for HOLD)? `,
			(destination = null) => {
				orders.origin = territory;
				orders.destination = destination ? destination : territory;
				orders.supports.givingSupportTo = supportingUnit;
				orders.actionType = "S";
				orders.nation = nation;
				orders.unitType = unitType;
				orders.coast = coast;
				console.log(supportReceiptStringGenerator(orders));
				ordersValidator(orders);
				rl.close();
			}
		);
	});
}

exports.supportActionHandler = supportActionHandler;
