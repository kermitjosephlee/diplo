const { assert } = require("chai");
const {
	sharedCoastChecker,
} = require("../../movementHelpers/sharedCoastChecker");

const results = sharedCoastChecker("LON");

function sharedCoastCheckerSpec() {
	describe("sharedCoastCheckerSpec test", () => {
		it("returns an array of shortNames", () => {
			assert.isArray(results);
		});
	});
}

exports.sharedCoastCheckerSpec = sharedCoastCheckerSpec;
