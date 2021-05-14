const { assert } = require("chai");
const { turnCounter } = require("../../turns/turnCounter");
const { seasons } = require("../../constants/seasons");

const result = turnCounter();

function turnCounterSpec() {
	describe("turnCounter", () => {
		it("Returns an object", () => {
			assert.exists(result);
		});

		it("Returns with a object with a year with type of number", () => {
			assert.isNumber(result.year);
		});

		it("Returns a year greater than 1900", () => {
			assert.isAbove(result.year, 1900);
		});

		it("Season is included in seasons array", () => {
			assert.isTrue(seasons.includes(result.season));
		});
	});
}

exports.turnCounterSpec = turnCounterSpec;
