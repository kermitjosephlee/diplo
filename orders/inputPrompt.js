const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const {
	isTerritoryValid,
	requiresCoastInput,
	isActionValid,
	unitTypeFinder,
	holdActionHandler,
	convoyActionHandler,
	moveActionHandler,
	supportActionHandler,
	coastalExceptionHandler,
} = require("./helpers");

function inputPrompt() {
	// prompt for unit in question by territory
	rl.question("What is the location of the unit? ", (territory) => {
		if (!isTerritoryValid(territory)) {
			console.log(`There is no unit available in ${territory} - try again`);
			rl.close();
		}

		const currentType = unitTypeFinder(territory);

		// check if territory entered does not need coast input
		if (!requiresCoastInput(territory)) {
			// prompt for action type
			rl.question(
				`What would you like the ${currentType} in ${territory} to do?\n(M)ove, (H)old, (C)onvoy, (S)upport? `,
				(action) => {
					if (isActionValid(action.toUpperCase())) {
						switch (action.toUpperCase()) {
							case "H":
								holdActionHandler(territory, currentType, rl);
							case "C":
								convoyActionHandler(territory, currentType, rl);
							case "S":
								supportActionHandler(territory, currentType, rl);
							case "M":
								moveActionHandler(territory, currentType, rl);
						}
					} else {
						console.log("no orders issued");
						rl.close();
					}
				}
			);
		}

		if (requiresCoastInput(territory) && currentType === "Navy") {
			coastalExceptionHandler(territory, currentType, rl);
		}
	});

	rl.on("close", () => {
		process.exit(0);
	});
}

exports.inputPrompt = inputPrompt;
