const ordersTemplates = (actionType) => {
	const baseObj = {
		origin: null,
		destination: null,
		unitType: null,
		nation: null,
		coast: null,
	};
	switch (actionType.substring(0, 1).toUpperCase()) {
		case "M":
			return {
				...baseObj,
				supports: 0,
				actionType: "M",
			};

		case "S":
			return {
				...baseObj,
				supportingUnit: null,
				actionType: "S",
			};

		case "H":
			return {
				...baseObj,
				supports: 0,
				actionType: "H",
			};

		case "C":
			return {
				...baseObj, // "origin" in this case is the current location of the convoying navy
				convoyingUnitOrigin: null, // the origin of the convoyed army
				supports: 0,
				actionType: "C",
			};

		default:
			return null;
	}
};

exports.ordersTemplates = ordersTemplates;
