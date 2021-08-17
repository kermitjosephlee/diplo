const { assert } = require("chai");
const { ordersTemplates } = require("../../orders/ordersTemplates");

const moveResults = ordersTemplates("Move");
const supportResults = ordersTemplates("Support");
const holdResults = ordersTemplates("Hold");
const convoyResults = ordersTemplates("Convoy");
const nullResults = ordersTemplates("Z");

function ordersTemplatesSpec() {
	describe("ordersTemplatesSpec test", () => {
		it("is Move object", () => {
			assert.isObject(moveResults);
		});
		it("is Support object", () => {
			assert.isObject(supportResults);
		});
		it("is Hold object", () => {
			assert.isObject(holdResults);
		});
		it("is Convoy object", () => {
			assert.isObject(convoyResults);
		});
		it("is null for non action", () => {
			assert.isNull(nullResults);
		});
	});
}

exports.ordersTemplatesSpec = ordersTemplatesSpec;
