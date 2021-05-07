const ordersTemplates = (actionType) => {
	switch (actionType.substring(0)) {
		case "M":
			return {
				origin: null,
				destination: null,
				unitType: null,
				coast: null,
				actionType: "M",
			};

		case "S":
			return {
				origin: null,
				supportingUnit: null,
				destination: null,
				actionType: null,
				unitType: null,
				coast: null,
				actionType: "S",
			};

		case "H":
			return {
				origin: null,
				unitType: null,
				coast: null,
				actionType: "H",
			};

		case "C":
			return {
				currentLocation: null,
				origin: null,
				destination: null,
				unitType: null,
				coast: null,
				actionType: "C",
			};

		default:
			return null;
	}
};

exports.ordersTemplates = ordersTemplates;
