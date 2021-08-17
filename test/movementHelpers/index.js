const { landCheckerSpec } = require("./landCheckerSpec");
const { waterCheckerSpec } = require("./waterCheckerSpec");
const { availableMovementsSpec } = require("./availableMovementsSpec");
const { sharedCoastCheckerSpec } = require("./sharedCoastCheckerSpec");
const {
	exceptionalSourceHandlerSpec,
} = require("./exceptionalSourceHandlerSpec");
// const {
// 	exceptionalDestinationHandlerSpec,
// } = require("./exceptionalDestinationHandlerSpec");

exports.landCheckerSpec = landCheckerSpec;
exports.waterCheckerSpec = waterCheckerSpec;
exports.availableMovementsSpec = availableMovementsSpec;
exports.sharedCoastCheckerSpec = sharedCoastCheckerSpec;
exports.exceptionalSourceHandlerSpec = exceptionalSourceHandlerSpec;
// exports.exceptionalDestinationHandlerSpec = exceptionalDestinationHandlerSpec;
