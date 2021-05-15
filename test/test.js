const { turnCounterSpec, newGameIdGeneratorSpec } = require("./turns");
const {
	initialUnitsSpec,
	mapStatesSpec,
	ordersValidatorSpec,
	ordersTemplatesSpec,
} = require("./orders");
const { landCheckerSpec, waterCheckerSpec } = require("./movementHelpers");

// TURNS folder tests
turnCounterSpec();
newGameIdGeneratorSpec();

// ORDERS folder tests
initialUnitsSpec();
mapStatesSpec();
ordersValidatorSpec();
ordersTemplatesSpec();

// MOVEMENT_HELPERS folder tests
landCheckerSpec();
waterCheckerSpec();
