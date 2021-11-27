const { assert } = require("chai")
const { missingOrdersAppender } = require("../../../orders/adjudicationHelpers/missingOrdersAppender")

const emptyOrdersResult = missingOrdersAppender([])

function missingOrdersAppenderSpec() {
  describe("missingOrdersAppenderSpec test", () => {
    it('returns with array for empty pending orders', () => {
      assert.isArray(emptyOrdersResult)
    })
  })
}

exports.missingOrdersAppenderSpec = missingOrdersAppenderSpec;