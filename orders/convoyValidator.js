const fs = require("fs");
const { currentTerritory } = require("../constants/gameMap");
const { availableMovements } = require("../movementHelpers/availableMovements");
const { convoyChainChecker } = require("./adjudicationHelpers");
const { convoyInterruptionChecker } = require("./adjudicationHelpers");
const { types } = require("../constants/types");

const { N } = types;

// Note: convoyMovements are referring to the armies being convoyed
function convoyValidator(convoyMovements, convoys, allMovements) {
	let validConvoysArr = [...convoyMovements];
	let invalidConvoys = [];

	convoys.forEach((convoy) => {
		const currentMovement = convoyMovements.filter(
			(convoyMovement) =>
				convoy.destination === convoyMovement.destination &&
				convoy.convoyingUnitOrigin === convoyMovement.origin
		);
		const otherMovements = convoyMovements.filter(
			(convoyMovement) =>
				!convoy.destination === convoyMovement.destination ||
				!convoy.convoyingUnitOrigin === convoyMovement.origin
		);

		if (currentMovement.length === 0) {
			invalidConvoys = [...invalidConvoys, convoy];
		}

		if (currentMovement.length === 1) {
			if (currentMovement[0].convoy) {
				currentMovement[0].convoy = [...currentMovement[0].convoy, convoy];
			} else {
				currentMovement[0].convoy = [convoy];
			}

			validConvoysArr = [
				...otherMovements,
				{
					...currentMovement[0],
				},
			];
		}

		if (currentMovement.length > 1) {
			return console.log("ERROR: more than one current movement");
		}
	});

	const returnConvoyObj = {
		validConvoys: validConvoysArr.map((each) => convoyChainChecker(each)),
		invalidConvoys,
	};

	// console.log(
	// 	"convoyInterruptionChecker",
	// 	convoyInterruptionChecker(returnConvoyObj, allMovements)
	// );

	return returnConvoyObj;
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
