const { unitFinder } = require("./unitFinder");
const { isActionValid } = require("./isActionValid");
const { holdActionHandler } = require("./holdActionHandler");
const { convoyActionHandler } = require("./convoyActionHandler");
const { supportActionHandler } = require("./supportActionHandler");
const { moveActionHandler } = require("./moveActionHandler");
const { nationalAdjectives } = require("../../constants/nationalAdjectives");

function coastalExceptionHandler(territory, unitType, nation, rl) {
	const { location, coast } = unitFinder(territory);

	rl.question(
		`What would you like the ${nationalAdjectives[nation]} ${unitType} in ${location} on the ${coast} coast to do?\n\t(M)ove, (H)old, (C)onvoy, (S)upport? `,
		(action) => {
			if (isActionValid(action.toUpperCase())) {
				switch (action.toUpperCase()) {
					case "H":
						holdActionHandler(territory, unitType, nation, rl, coast);
					case "C":
						convoyActionHandler(territory, unitType, nation, rl, coast);
					case "S":
						supportActionHandler(territory, unitType, nation, rl, coast);
					case "M":
						moveActionHandler(territory, unitType, nation, rl, coast);
				}
			} else {
				console.log("no orders issued");
				rl.close();
			} //closes if isActionValid
		}
	);
}

exports.coastalExceptionHandler = coastalExceptionHandler;
