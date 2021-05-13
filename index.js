const fs = require("fs");
const { gameMap, exceptionalCoastTerritories } = require("./constants/gameMap");
const { availableMovements } = require("./movementHelpers/availableMovements");
const { actionTypes } = require("./movementHelpers/actionTypes");
const { ordersTemplates } = require("./orders/ordersTemplates");
const { ordersValidator } = require("./orders/ordersValidator");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const names = gameMap.map(({ name }) => name);
const shortNames = gameMap.map(({ shortName }) => shortName);

const isTerritoryValid = (territory) =>
	names.includes(territory) || shortNames.includes(territory);

const requiresCoastInput = (territory) =>
	exceptionalCoastTerritories
		.map(({ shortName }) => shortName)
		.includes(territory);

const isActionValid = (action) => Object.keys(actionTypes).includes(action);

const gameFile = "./turns/currentGames/game1.txt";
const currentPositions = JSON.parse(fs.readFileSync(gameFile))[0].positions;

// console.log("currentPositions: ", currentPositions);

rl.question("What is the location unit? ", function (territory) {
	const [currentUnit] = currentPositions.filter(
		(each) => each.location === territory
	);
	const currentType = currentUnit.unitType;
	rl.question(
		`What type of unit is it? (A)rmy or (N)avy `,
		function (unitType = currentType) {
			if (isTerritoryValid(territory) && !requiresCoastInput(territory)) {
				rl.question(
					`What would you like it to do? (M)ove, (H)old, (C)onvoy, (S)upport? `,
					function (action) {
						const ordersObj = ordersTemplates(action.toUpperCase());
						if (isActionValid(action.toUpperCase())) {
							if (action.toUpperCase() === "H") {
								ordersObj.origin = territory;
								ordersObj.unitType = currentType;
								ordersValidator(ordersObj);
								rl.close();
							}
							if (action.toUpperCase() === "C") {
								rl.question(
									`What unit to convoy ${availableMovements(territory)}`,
									function (origin) {
										rl.question(
											`Convoy to where ${availableMovements(
												territory
											)} *** still need to build algorithm for convoy chaining`,
											function (dest) {
												ordersObj.currentLocation = territory;
												ordersObj.origin = origin;
												ordersObj.destination = dest;
												ordersObj.unitType = currentType;
												ordersObj.coast = null;
												ordersObj.actionType = "C";
												ordersValidator(ordersObj);
												rl.close();
											}
										);
									}
								);
							}
							if (action.toUpperCase() === "S") {
								rl.question(`Support what unit?`, function (supportingUnit) {
									rl.question(`to where? `, function (dest) {
										ordersObj.origin = territory;
										ordersObj.destination = dest;
										ordersObj.supportingUnit = supportingUnit;
										ordersObj.actionType = dest === territory ? "H" : "M";
										ordersObj.unitType = currentType;
										ordersValidator(ordersObj);
										rl.close();
									});
								});
							}
							if (action.toUpperCase() === "M") {
								rl.question(
									`Move the ${currentType} where: ${availableMovements(
										territory,
										currentType
									)}? `,
									function (dest) {
										ordersObj.origin = territory;
										ordersObj.destination = dest;
										ordersObj.unitType = currentType;
										ordersValidator(ordersObj);
										rl.close();
									}
								);
							}
						}
					}
				);
			}
			if (
				isTerritoryValid(territory) &&
				requiresCoastInput(territory) &&
				currentType === "N"
			) {
				rl.question("What coast? ", function (coast) {
					console.log(
						"available spaces ",
						availableMovements(territory, currentType, coast)
					);
					rl.close();
				});
			}
		}
	);
});

rl.on("close", () => {
	process.exit(0);
});
