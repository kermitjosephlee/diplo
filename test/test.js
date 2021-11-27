const { turnCounterSpec, newGameIdGeneratorSpec } = require("./turns");
const {
	initialUnitsSpec,
	mapStatesSpec,
	ordersValidatorSpec,
	ordersTemplatesSpec,
	missingOrdersAppenderSpec,
} = require("./orders");
const {
	landCheckerSpec,
	waterCheckerSpec,
	availableMovementsSpec,
	sharedCoastCheckerSpec,
	exceptionalSourceHandlerSpec,
} = require("./movementHelpers");
const { missingOrdersAppender } = require("../orders/adjudicationHelpers");

// TURNS folder tests
turnCounterSpec();
newGameIdGeneratorSpec();

// ORDERS folder tests
initialUnitsSpec();
mapStatesSpec();
ordersValidatorSpec();
ordersTemplatesSpec();
missingOrdersAppenderSpec();

// MOVEMENT_HELPERS folder tests
landCheckerSpec();
waterCheckerSpec();
availableMovementsSpec();
sharedCoastCheckerSpec();
exceptionalSourceHandlerSpec();
