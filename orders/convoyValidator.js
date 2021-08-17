const {
	convoyChainChecker,
	invalidConvoyHandler,
	convoyInterruptionChecker,
} = require("./adjudicationHelpers");
const { convoyBundler } = require("./adjudicationHelpers");
const { types } = require("../constants/types");

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

	const validConvoys = updatedStatusConvoys.filter(
		(each) => each.isConvoyValid
	);

	// removes stale convoy movements
	updatedMovements = [...validConvoys, ...updatedMovements].reduce(
		(unique, item) =>
			unique.map(({ origin }) => origin).includes(item.origin)
				? unique
				: [...unique, item],
		[]
	);

	const invalidConvoys = updatedStatusConvoys.filter(
		(each) => each.isConvoyValid === false
	);

	const newHolds = invalidConvoys
		.map((each) => invalidConvoyHandler(each))
		.flat();

	updatedHolds = [...newHolds, ...updatedHolds];

	// removes stale invalid convoys
	updatedMovements = updatedMovements.filter(
		(each) => !updatedHolds.map(({ origin }) => origin).includes(each.origin)
	);

	const interuptedConvoysCheckedOrders = updatedMovements
		.filter((each) => each.isConvoyValid)
		.map((each) => convoyInterruptionChecker(each, updatedMovements));

	if (interuptedConvoysCheckedOrders.length > 0) {
		const interuptedConvoysCheckedMovements =
			interuptedConvoysCheckedOrders.filter((each) => each.actionType === "M");

		const spentConvoys = interuptedConvoysCheckedMovements
			.map((each) => each.convoy)
			.flat()
			.map((each) => ({
				origin: each.origin,
				destination: each.origin,
				actionType: "H",
				...each,
			}));

		const interuptedConvoysCheckedHolds = interuptedConvoysCheckedOrders.filter(
			(each) => each.actionType === "H"
		);
		// updates holds and removes older duplicates
		updatedHolds = [
			...interuptedConvoysCheckedHolds,
			...spentConvoys,
			...updatedHolds,
		].reduce(
			(unique, item) =>
				unique.map(({ origin }) => origin).includes(item.origin)
					? unique
					: [...unique, item],
			[]
		);
		// removes stale convoy movements
		updatedMovements = [
			...interuptedConvoysCheckedMovements,
			...updatedMovements,
		]
			.filter(
				(each) => !updatedHolds.map((hold) => hold.origin).includes(each.origin)
			)
			.reduce(
				(unique, item) =>
					unique.map(({ origin }) => origin).includes(item.origin)
						? unique
						: [...unique, item],
				[]
			);
	}

	return {
		convoyValidatedMovements: updatedMovements,
		convoyValidatedHolds: updatedHolds,
	};
}

exports.convoyValidator = convoyValidator;
