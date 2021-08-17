const { assert } = require("chai");
const {
	availableMovements,
} = require("../../movementHelpers/availableMovements");

const results = availableMovements("LON");
const spainResults = availableMovements("SPA", "N", "NORTH");
const spainResultsNoCoast = availableMovements("SPA", "N");

function availableMovementsSpec() {
	describe("availableMovementsSpec test", () => {
		it("returns with an array of shortNames", () => {
			assert.isArray(results);
		});
		it("returns with an array of shortNames available to fleets from Spain's North Coast", () => {
			assert.isArray(spainResults);
		});
		it("returns with an error string for no coast specified", () => {
			assert.isString(spainResultsNoCoast);
		});
	});
}

exports.availableMovementsSpec = availableMovementsSpec;
