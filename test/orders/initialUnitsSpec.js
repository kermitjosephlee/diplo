const { assert } = require("chai");
const { initialUnits } = require("../../orders/initialUnits");

const result = initialUnits;

function initialUnitsSpec() {
	describe("initialUnits", () => {
		it("returns an array", () => {
			assert.isArray(result);
		});
	});
}

exports.initialUnitsSpec = initialUnitsSpec;
