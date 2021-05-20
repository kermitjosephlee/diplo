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

			if (receivingUnit !== undefined) {
				receivingUnit.supports.receivingSupportFrom = [
					...receivingUnit.supports.receivingSupportFrom,
					hold.supports.givingSupportTo,
				];
			}
			updatedHolds = [...otherHolds, receivingUnit];
		}
	});

	// 4. subtract supports for attacked supporting units
	// 		a. downgrades attacking movements to holds & removes from movement list & adds to hold list
	// 		b. removes giving support units from receiving support unit list
	//		c. downgrades giving support units action from SUPPORT to HOLD
	// 		d. removes from support list & adds to hold list
	updatedMovements.forEach((movement) => {
		let [attackedSupport] = updatedSupports.filter(
			(each) => movement.destination === each.origin
		);

		if (attackedSupport !== undefined) {
			let attackingUnit = { ...movement };

			// const otherAttacks = updatedMovements.filter(
			// 	(each) => attackingUnit.origin !== each.origin
			// );

			const otherSupports = updatedSupports.filter(
				(each) => movement.destination !== each.origin
			);

			const receivingSupportUnitShortName =
				attackedSupport.supports.givingSupportTo;

			let [receivingSupportUnit] = updatedMovements.filter(
				(each) => each.origin === receivingSupportUnitShortName
			);

			const otherMovements = updatedMovements
				.filter((each) => each.origin !== receivingSupportUnitShortName)
				.filter((each) => attackingUnit.origin !== each.origin);

			receivingSupportUnit = {
				...receivingSupportUnit,
				supports: {
					...receivingSupportUnit.supports,
					receivingSupportFrom:
						receivingSupportUnit.supports.receivingSupportFrom.filter(
							(each) => each !== attackedSupport.origin
						),
				},
			};

			attackedSupport = {
				...attackedSupport,
				supports: {
					...attackedSupport.supports,
					givingSupportTo: null,
				},
				actionType: "H",
			};

			attackingUnit = {
				...attackingUnit,
				actionType: "H",
			};

			// removes duplicate movements
			updatedMovements = [receivingSupportUnit, ...otherMovements].reduce(
				(unique, item) =>
					unique.includes({ origin: item.origin }) ? unique : [...unique, item],
				[]
			);
			updatedSupports = [...otherSupports];
			updatedHolds = [...updatedHolds, attackedSupport, attackingUnit];
		}
	});

	const returnObj = {
		S: updatedSupports,
		M: updatedMovements,
		H: updatedHolds,
	};

	return returnObj;
}

exports.supportCounter = supportCounter;
