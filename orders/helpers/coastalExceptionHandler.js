const { unitFinder } = require("./unitFinder");
const { isActionValid } = require("./isActionValid");
const { holdActionHandler } = require("./holdActionHandler");
const { convoyActionHandler } = require("./convoyActionHandler");
const { supportActionHandler } = require("./supportActionHandler");
const { moveActionHandler } = require("./moveActionHandler");

function coastalExceptionHandler(territory, unitType, rl) {
	const { location, nation, coast } = unitFinder(territory);

	rl.question(
		`What would you like the ${nation} ${unitType} in ${location} on the ${coast} coast to do?\n\t(M)ove, (H)old, (C)onvoy, (S)upport? `,
		(action) => {
			if (isActionValid(action.toUpperCase())) {
				switch (action.toUpperCase()) {
					case "H":
						holdActionHandler(territory, unitType, rl, coast);
					case "C":
						convoyActionHandler(territory, unitType, rl, coast);
					case "S":
						supportActionHandler(territory, unitType, rl, coast);
					case "M":
						moveActionHandler(territory, unitType, rl, coast);
				}
			} else {
				console.log("no orders issued");
				rl.close();
			} //closes if isActionValid
		}
	);
}

exports.coastalExceptionHandler = coastalExceptionHandler;
