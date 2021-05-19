const { ordersTemplates } = require("../ordersTemplates");
const { ordersValidator } = require("../ordersValidator");
const { nationalAdjectives } = require("../../constants/nationalAdjectives");

let orders = ordersTemplates("S");

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
				console.log(
					`${
						nationalAdjectives[nation]
					} ${unitType} in ${territory} to support ${supportingUnit} to ${
						destination
							? `move to ${destination} ${coast ? coast : ""}`
							: `hold at ${supportingUnit}`
					}`
				);
				ordersValidator(orders);
				rl.close();
			}
		);
	});
}

exports.supportActionHandler = supportActionHandler;
