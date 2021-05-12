const ordersTemplates = (actionType) => {
	switch (actionType.substring(0)) {
		case "M":
			return {
				origin: null,
				destination: null,
				unitType: null,
				coast: null,
				supports: 0,
				actionType: "M",
			};

		case "S":
			return {
				origin: null,
				supportingUnit: null,
				destination: null,
				unitType: null,
				coast: null,
				actionType: "S",
			};

		case "H":
			return {
				origin: null,
				unitType: null,
				coast: null,
				supports: 0,
				actionType: "H",
			};

		case "C":
			return {
				currentLocation: null,
				origin: null,
				destination: null,
				unitType: null,
				coast: null,
				supports: 0,
				actionType: "C",
			};

		default:
			return null;
	}
};

exports.ordersTemplates = ordersTemplates;
