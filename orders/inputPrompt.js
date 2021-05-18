const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const {
	isTerritoryValid,
	requiresCoastInput,
	isActionValid,
	unitFinder,
	// unitTypeFinder,
	holdActionHandler,
	convoyActionHandler,
	moveActionHandler,
	supportActionHandler,
	coastalExceptionHandler,
} = require("./helpers");

const { nationalAdjectives } = require("../constants/nationalAdjectives");

function inputPrompt() {
	// prompt for unit in question by territory

	rl.question("What is the location of the unit? ", (territory) => {
		if (!isTerritoryValid(territory)) {
			console.log(`There is no unit available in ${territory} - try again`);
			rl.close();
		}

		const currentUnit = unitFinder(territory);
		const { location, unitType, nation } = currentUnit;
		const nationalAdjective = nationalAdjectives[nation];

		// check if territory entered does not need coast input
		if (!requiresCoastInput(territory)) {
			// prompt for action type
			rl.question(
				`What would you like the ${nationalAdjective} ${unitType} in ${location} to do?\n(M)ove, (H)old, (C)onvoy, (S)upport? `,
				(action) => {
					if (isActionValid(action.toUpperCase())) {
						switch (action.toUpperCase()) {
							case "H":
								holdActionHandler(location, unitType, nation, rl);
							case "C":
								convoyActionHandler(location, unitType, nation, rl);
							case "S":
								supportActionHandler(location, unitType, nation, rl);
							case "M":
								moveActionHandler(location, unitType, nation, rl);
						}
					} else {
						console.log("no orders issued");
						rl.close();
					}
				}
			);
		}

		if (requiresCoastInput(location) && unitType === "Navy") {
			coastalExceptionHandler(location, unitType, nation, rl);
		}
	});

	rl.on("close", () => {
		process.exit(0);
	});
}

exports.inputPrompt = inputPrompt;
