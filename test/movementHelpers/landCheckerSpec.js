const { assert } = require("chai");
const { landChecker } = require("../../movementHelpers/landChecker");

const result = landChecker("LON");

function landCheckerSpec() {
	describe("landCheckerSpec test", () => {
		it("returns an array", () => {
			assert.isArray(result);
		});
	});
}

exports.landCheckerSpec = landCheckerSpec;
