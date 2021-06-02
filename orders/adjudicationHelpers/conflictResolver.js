const { ordersSorterByDest } = require("./ordersSorterByDest");

function conflictResolver(movements, holds) {
	const sortedOrders = Object.values(ordersSorterByDest(movements, holds));

	const evalutatedMovements = sortedOrders.map((conflict) => {
		const isThereJustOneConflictedUnit = conflict.length === 1;

		// if there is only one unit involved
		// then movement succeeds
		if (isThereJustOneConflictedUnit) {
			const winningUnit = {
				...conflict[0],
				isMovementSuccessful: true,
			};

			return [winningUnit];
		}

		const sortedUnits = conflict.sort(
			(a, b) =>
				b.supports.receivingSupportFrom.length -
				a.supports.receivingSupportFrom.length
		);

		const [firstUnit, secondUnit, ...rest] = sortedUnits;
		const isThereMoreThanOneConflictedUnit = sortedUnits.length > 1;
		const isLargestSupportedUnitMoreThanSecondLargestSupportedUnit =
			sortedUnits[0].supports.receivingSupportFrom.length >
			sortedUnits[1].supports.receivingSupportFrom.length;

		// are there at least two conflicted Units, and is the largest supported unit larger than the second largest supported unit
		// then movement succeeds
		if (
			isThereMoreThanOneConflictedUnit &&
			isLargestSupportedUnitMoreThanSecondLargestSupportedUnit
		) {
			const winningUnit = {
				...firstUnit,
				isMovementSuccessful: true,
			};

			const losingUnit = {
				...secondUnit,
				isMovementSuccessful: false,
			};

			return [
				winningUnit,
				losingUnit,
				...rest.map((each) => ({ ...each, isMovementSuccessful: false })),
			];
		}
		// the top two supported units are equal in supports
		// then movement fails, all hold
		if (
			isThereMoreThanOneConflictedUnit &&
			!isLargestSupportedUnitMoreThanSecondLargestSupportedUnit
		) {
			return [...sortedUnits].map((each) => ({
				...each,
				isMovementSuccessful: false,
			}));
		}
	});

	return evalutatedMovements;
}

exports.conflictResolver = conflictResolver;
