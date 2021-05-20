const fs = require("fs");
const { currentTerritory } = require("../constants/gameMap");
const { availableMovements } = require("../movementHelpers/availableMovements");
const { convoyChainChecker } = require("./adjudicationHelpers");
const { convoyInterruptionChecker } = require("./adjudicationHelpers");
const { convoyBundler } = require("./adjudicationHelpers");
const { types } = require("../constants/types");

const { N } = types;

// Note: convoyMovements are referring to the armies being convoyed
// receives potential convoy army movements, all listed unconfirmed convoys, all movements, all holds
function convoyValidator(convoyMovements, convoys, allMovements, allHolds) {
	let updatedMovements = [...allMovements];
	let updatedHolds = [...allHolds];

	const bundledConvoys = convoyMovements.map((movement) =>
		convoyBundler(movement, convoys)
	);

	const accountedConvoys = bundledConvoys
		.map((each) => each.convoy)
		.flat()
		.map((convoy) => convoy.origin);

	// converts unaccounted convoy movements to holds and adds them to the hold list
	const remainingConvoys = convoys
		.filter((each) => !accountedConvoys.includes(each.origin))
		.map((each) => ({ ...each, destination: each.origin, actionType: "H" }));

	updatedHolds = [...updatedHolds, ...remainingConvoys];

	// returns a list of convoys with valid/invalid status
	const updatedStatusConvoys = bundledConvoys.map((each) =>
		convoyChainChecker(each)
	);

	console.log("updatedStatusConvoys", updatedStatusConvoys);
	// console.log("bundledConvoys", bundledConvoys[0].convoy);

	// goal is to confirm convoys, and invalid convoys turned to holds
	// return a list of actions that are all valid for support comparisons
	return { convoyMovements, convoys, allMovements, allHolds };
}

exports.convoyValidator = convoyValidator;

// army movement - ie. LON - KIE
// check if navy is adjacent
// if navy A is adjacent to LON, check to see if KIE is adjacent to navyA
// if so, valid convoy
// if not, check if navy is adjacent to navyA
// if so, and KIE is adjacent to navyB, valid convoy
// if not, check if navy is adjacent to navyB
// if not, invalid convoy, all units hold
