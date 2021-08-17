const ordersTemplates = (actionType) => {
	const baseObj = {
		origin: null,
		destination: null,
		unitType: null,
		nation: null,
		coast: null,
		supports: { givingSupportTo: null, receivingSupportFrom: [] },
	};
	switch (actionType.substring(0, 1).toUpperCase()) {
		case "M":
			return {
				...baseObj,
				actionType: "M",
			};

		case "S":
			return {
				...baseObj,
				actionType: "S",
			};

		case "H":
			return {
				...baseObj,
				actionType: "H",
			};

		case "C":
			return {
				...baseObj, // "origin" in this case is the current location of the convoying navy
				convoyingUnitOrigin: null, // the origin of the convoyed army
				actionType: "C",
			};

		default:
			return null;
	}
};

exports.ordersTemplates = ordersTemplates;
