const { assert } = require("chai");
const { waterChecker } = require("../../movementHelpers/waterChecker");

const waterResults = waterChecker("MAO");
const landResults = waterChecker("LON");
const noResults = waterChecker("MOS");

function waterCheckerSpec() {
	describe("waterCheckerSpec test", () => {
		it("returns an array for a body of water territory (MAO)", () => {
			assert.isArray(waterResults);
		});
		it("returns an array for a water-adjacent land territory (LON)", () => {
			assert.isArray(landResults);
		});
		it("returns an empty array for landlocked territory (MOS)", () => {
			assert.isEmpty(noResults);
		});
	});
}

exports.waterCheckerSpec = waterCheckerSpec;
