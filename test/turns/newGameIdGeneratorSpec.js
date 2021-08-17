const { assert } = require("chai");
const { newGameIdGenerator } = require("../../turns/newGameIdGenerator");

const result = newGameIdGenerator();

function newGameIdGeneratorSpec() {
	describe("newGameGenerator", () => {
		it("Returns a gameId as a number", () => {
			assert.isNumber(result);
		});

		it("Returns a gameId greater than 0", () => {
			assert.isAbove(result, 0);
		});
	});
}

exports.newGameIdGeneratorSpec = newGameIdGeneratorSpec;
