// TODO: is this really needed?

function holdDowngrader(order) {
	return { ...order, actionType: "H" };
}

exports.holdDowngrader = holdDowngrader;
