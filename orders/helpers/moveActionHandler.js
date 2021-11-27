const { ordersTemplates } = require("../ordersTemplates");
const { ordersValidator } = require("../ordersValidator");
const {
	currentTerritory,
	exceptionalCoastTerritories,
} = require("../../constants/gameMap");
const {
	availableMovements,
} = require("../../movementHelpers/availableMovements");

const { nationalAdjectives } = require("../../constants/nationalAdjectives");

let orders = ordersTemplates("M");

function coastExceptionHandler(territory, coast) {
	return currentTerritory(territory)
		.coasts.map((each) => each.location)
		.includes(coast.toUpperCase())
		? coast
		: null;
}

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
	const exceptionalBorderingTerritories = currentTerritory(
		territory
	).borderingTerritories.filter((ea) =>
		exceptionalCoastTerritories.map((each) => each.shortName).includes(ea)
	);

	const isBorderingExceptional = exceptionalBorderingTerritories.length > 0;

	rl.question(
		`Move the ${
			nationalAdjectives[nation]
		} ${unitType} where: ${availableMovements(territory, unitType, coast)}? `,
		function (destination) {
			if (!availableMovements(territory, unitType, coast).includes(destination)) {
				console.log("Your destination is invalid")
				rl.close()
			}
			orders.origin = territory;
			orders.destination = destination;
			orders.unitType = unitType;
			orders.nation = nation;
			if (isBorderingExceptional) {
				const exceptionalBorderingTerritory =
					exceptionalCoastTerritories.filter(
						(each) => each.shortName === exceptionalBorderingTerritories[0]
					);

				const filteredCoasts = exceptionalBorderingTerritory[0].coasts.filter(
					(each) => each.territories.includes(territory)
				);

				rl.question(
					`Which coast? (${filteredCoasts[0].location})`,
					(inputCoast) => {
						if (!inputCoast) {
							inputCoast = filteredCoasts[0].location;
						}
						orders.coast = coastExceptionHandler(destination, inputCoast);
						console.log(moveReceiptStringGenerator(orders));
						ordersValidator(orders);
						rl.close();
					}
				);
			} else {
				console.log(moveReceiptStringGenerator(orders));
				ordersValidator(orders);
				rl.close();
			}
		}
	);
}

exports.moveActionHandler = moveActionHandler;
