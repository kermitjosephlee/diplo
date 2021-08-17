const { assert } = require("chai");
const {
	exceptionalSourceHandler,
} = require("../../movementHelpers/exceptionalSourceHandler");

const results = exceptionalSourceHandler("SPA", "SOUTH");

function exceptionalSourceHandlerSpec() {
	describe("exceptionalSourceHandlerSpec test", () => {
		it("returns an array of available territories for Spain South Coast", () => {
			assert.isArray(results);
		});
	});
}

exports.exceptionalSourceHandlerSpec = exceptionalSourceHandlerSpec;
