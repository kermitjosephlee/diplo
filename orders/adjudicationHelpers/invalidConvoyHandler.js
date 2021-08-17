function invalidConvoyHandler(invalidConvoyMovement) {
	const { convoy, ...rest } = invalidConvoyMovement;
	const newConvoyHolds = convoy.map((each) => ({
		...each,
		destination: each.origin,
		convoyingUnitOrigin: null,
		actionType: "H",
	}));

	const newArmyHold = {
		...rest,
		destination: rest.origin,
		actionType: "H",
		isConvoyValid: false,
	};

	// returns a list of holds from invalid convoy orders
	return [...newConvoyHolds, newArmyHold];
}

exports.invalidConvoyHandler = invalidConvoyHandler;
