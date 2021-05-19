const { getBorderingTerritories } = require("../../constants/gameMap");

function supportingUnitsValidator(
	supportedOrder,
	allSupportOrders,
	allHoldOrders
) {
	console.log(
		"supportedOrder",
		supportedOrder,
		"\nallSupportOrders",
		allSupportOrders,
		"\nallHoldOrders",
		allHoldOrders
	);
	return null;
	// const {
	// 	destination,
	// 	supports: { receivingSupportFrom },
	// } = supportedOrder;
	// const updatedValidSupportingUnits = receivingSupportFrom.filter((unit) =>
	// 	getBorderingTerritories(unit).includes(destination)
	// );
	// const updatedInvalidSupportingUnits = receivingSupportFrom.filter(
	// 	(unit) => !getBorderingTerritories(unit).includes(destination)
	// );

	// const updatedSupportOrders = allSupportOrders.filter(
	// 	(each) => !updatedInvalidSupportingUnits.includes(each.origin)
	// );

	// const newHoldOrders = allSupportOrders
	// 	.filter((each) => updatedInvalidSupportingUnits.includes(each.origin))
	// 	.map((each) => ({
	// 		...each,
	// 		destination: each.origin,
	// 		supports: {
	// 			givingSupportTo: null,
	// 			receivingSupportFrom: [...supports.receivingSupportFrom],
	// 		},
	// 		actionType: "H",
	// 	}));

	// const updatedSupportedOrder = {
	// 	...supportedOrder,
	// 	supports: {
	// 		...supports,
	// 		receivingSupportFrom: updatedValidSupportingUnits,
	// 	},
	// };

	// const updatedSupports = [...updatedSupportOrders];
	// const updatedHolds = [...allHoldOrders, ...newHoldOrders];

	// const returnObj = {
	// 	validatedMovement: updatedSupportedOrder,
	// 	validatedSupports: [...updatedSupports],
	// 	validatedHolds: [...updatedHolds],
	// };

	// return returnObj;
}

exports.supportingUnitsValidator = supportingUnitsValidator;
