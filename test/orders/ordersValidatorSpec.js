const { assert } = require("chai");
const { ordersValidator } = require("../../orders/ordersValidator");

const noOrdersResult = ordersValidator(undefined);

function ordersValidatorSpec() {
	describe("ordersValidatorSpec test", () => {
		it("returns null for undefined orders", () => {
			assert.isNull(noOrdersResult);
		});
	});

	// valid orders are passed to ordersAppender to fs.writeFileSync to pending orders
}

exports.ordersValidatorSpec = ordersValidatorSpec;
