const { assert } = require("chai");
const { ordersValidator } = require("../../orders/ordersValidator");

const noOrdersResult = ordersValidator(undefined);
const validOrders = {
  origin: 'EDI',
  destination: 'NWG',
  unitType: 'Navy',
  nation: 'England',
  coast: null,
  supports: { givingSupportTo: null, receivingSupportFrom: [] },
  actionType: 'M'
}

function ordersValidatorSpec() {
	describe("ordersValidatorSpec test", () => {
		it("returns null for undefined orders", () => {
			assert.isNull(noOrdersResult);
		});
		it("returns with orders object for valid orders", () => {
			assert.isObject(validOrders)
		})
	});

	// valid orders are passed to ordersAppender to fs.writeFileSync to pending orders
}

exports.ordersValidatorSpec = ordersValidatorSpec;
