const { holdDowngrader } = require("./holdDowngrader");
const { supportingUnitsValidator } = require("./supportingUnitsValidator");

// returns updated list of orders with updated support numbers

function supportCounter(sortedOrders) {
	const { S: supports, M: movements, H: holds } = sortedOrders;

	let updatedMovements = [...movements];
	let updatedHolds = [...holds];
	let updatedSupports = [...supports];

	// 1. update supports for movements
	supports.forEach((support) => {
		const { origin, destination, supports } = support;
		const isMovement = origin !== destination;
		const isHold = origin === destination;
		if (isMovement) {
			const [supportedUnit] = updatedMovements.filter(
				(each) =>
					each.destination === destination &&
					supports.givingSupportTo === each.origin
			);
			const otherMovements = updatedMovements.filter(
				(each) =>
					each.destination !== destination ||
					supports.givingSupportTo !== each.origin
			);
			const updatedSupportedUnit = {
				...supportedUnit,
				supports: {
					givingSupportTo: supportedUnit.supports.givingSupportTo,
					receivingSupportFrom: [
						...supportedUnit.supports.receivingSupportFrom,
						support.origin,
					],
				},
			};
			updatedMovements = [...otherMovements, updatedSupportedUnit];
		}
		// 2. update supports for holds
		if (isHold) {
			const updatedHold = {
				...support,
				actionType: "H",
			};
			const otherSupports = updatedSupports.filter(
				(each) => each.origin !== support.origin
			);
			updatedHolds = [...updatedHolds, updatedHold];
			updatedSupports = [...otherSupports];
		}
	});

	// 3. accounts for mutual support
	updatedHolds.forEach((hold) => {
		if (hold.supports.givingSupportTo) {
			const [receivingUnit] = updatedHolds.filter(
				(each) => each.origin === hold.supports.givingSupportTo
			);
			const otherHolds = updatedHolds.filter(
				(each) => each.origin !== hold.supports.givingSupportTo
			);
			receivingUnit.supports.receivingSupportFrom = [
				...receivingUnit.supports.receivingSupportFrom,
				hold.supports.givingSupportTo,
			];
			updatedHolds = [...otherHolds, receivingUnit];
		}
	});

	// 4. subtract supports for attacked supporting units
	updatedMovements.forEach((movement) => {
		if (movement.supports.receivingSupportFrom.length > 0) {
			supportingUnitsValidator(movement, updatedSupports, updatedHolds);
		}
	});

	// // removes duplicate holds
	// updatedHolds = updatedHolds.reduce(
	// 	(unique, item) =>
	// 		unique.includes(item.origin) ? unique : [...unique, item],
	// 	[]
	// );

	// console.log(
	// 	"M",
	// 	updatedMovements,
	// 	"\nS",
	// 	updatedSupports,
	// 	"\nH",
	// 	updatedHolds
	// );

	// return sortedOrders;
	return null;
}

exports.supportCounter = supportCounter;
