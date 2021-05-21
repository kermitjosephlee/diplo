// checks to see if convoy is broken by attack and insufficient support
// returns updated convoyObj = { valid, invalid }

const { invalidConvoyHandler } = require("./invalidConvoyHandler");

function convoyInterruptionChecker(convoy, movements) {
	const { convoy: convoyFleets, ...rest } = convoy;
	const fullConvoyList = [
		rest.origin,
		...convoyFleets.map((each) => each.origin),
		rest.destination,
	];

	const attackedConvoy = movements.filter(
		(each) =>
			each.origin !== each.destination &&
			each.actionType === "M" &&
			fullConvoyList.includes(each.destination) &&
			each.isConvoyValid
	);

	if (attackedConvoy.length === 1) {
		const convoyAttacker = movements.filter(
			(each) => fullConvoyList.includes(each.destination) && !each.convoy
		);

		const { origin, destination, actionType, ...rest } = convoyAttacker[0];
		const updatedConvoyAttacker = {
			origin: origin,
			destination: origin,
			...rest,
			actionType: "H",
		};

		const dismantledConvoy = invalidConvoyHandler(attackedConvoy[0]);

		return [...dismantledConvoy, updatedConvoyAttacker];
	}

	return [...convoy];
}

exports.convoyInterruptionChecker = convoyInterruptionChecker;
