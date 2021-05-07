const { gameMap, exceptionalCoastTerritories } = require("./constants/gameMap");
const { availableMovements } = require("./movementHelpers/availableMovements");
const { actionTypes } = require("./movementHelpers/actionTypes");
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

rl.question("What is the location unit? ", function (territory) {
	rl.question("What type of unit is it? ", function (unitType) {
		if (isTerritoryValid(territory) && !requiresCoastInput(territory)) {
			rl.question(
				`What would you like it to do? (M)ove, (H)old, (C)onvoy, (S)upport? `,
				function (action) {
					if (isActionValid(action.toUpperCase())) {
						if (action.toUpperCase() === "H") {
							console.log(
								"orders: ",
								`${territory} ${unitType} to ${actionTypes[action]}`
							);
							rl.close();
						}
						if (action.toUpperCase() === "C") {
							rl.question(
								`Convoy to where ${availableMovements(
									territory
								)} *** still need to build algorithm for convoy chaining`,
								(dest) => {
									console.log(
										"orders: ",
										`${territory} ${unitType} to convoy to ${dest}`
									);
									rl.close();
								}
							);
						}
						if (action.toUpperCase() === "S") {
							rl.question(`Support what unit?`, (supportingUnit) => {
								rl.question(`to where? `, (dest) => {
									console.log(
										"orders: ",
										`${territory} supports ${supportingUnit} to ${dest}`
									);
									rl.close();
								});
							});
						}
						if (action.toUpperCase() === "M") {
							rl.question(
								`Move where: ${availableMovements(territory, unitType)}? `,
								function (dest) {
									console.log("orders: ", `${territory} to move to ${dest}`);
									rl.close();
								}
							);
						}
						// console.log("something wrong happened, try again");
						// rl.close();
					}
				}
			);
		}
		if (
			isTerritoryValid(territory) &&
			requiresCoastInput(territory) &&
			unitType === "N"
		) {
			rl.question("What coast? ", function (coast) {
				console.log(
					"available spaces ",
					availableMovements(territory, unitType, coast)
				);
				rl.close();
			});
		}
	});
});

rl.on("close", () => {
	process.exit(0);
});

// inputs
// const territory = process.argv[2].toUpperCase();
// const unitType = process.argv[3].toUpperCase();
// let coast = null;

// if (process.argv.length > 4) {
// 	coast = process.argv[4].toUpperCase();
// }

// console.log(
// 	"territory",
// 	territory,
// 	"isValid",
// 	isTerritoryValid,
// 	"\navailableMovements",
// 	availableMovements(territory, unitType, coast)
// );
