const fs = require("fs");
const { currentTerritory } = require("../constants/gameMap");
const { availableMovements } = require("../movementHelpers/availableMovements");
const { convoyChainChecker } = require("./adjudicationHelpers");
const { types } = require("../constants/types");

const { N } = types;

function convoyValidator(movements, convoys) {
	let validConvoysArr = [...movements];
	let invalidConvoys = [];

	convoys.forEach((convoy) => {
		const currentMovement = movements.filter(
			(movement) =>
				convoy.destination === movement.destination &&
				convoy.convoyingUnitOrigin === movement.origin
		);
		const otherMovements = movements.filter(
			(movement) =>
				!convoy.destination === movement.destination ||
				!convoy.convoyingUnitOrigin === movement.origin
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

	return convoyChainChecker(validConvoysArr[0], (data) => {
		console.log("callback", data);
	});
	// return { validConvoysArr, invalidConvoys };
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
