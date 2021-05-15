const { turnCounterSpec, newGameIdGeneratorSpec } = require("./turns");
const {
	initialUnitsSpec,
	mapStatesSpec,
	ordersValidatorSpec,
	ordersTemplatesSpec,
} = require("./orders");

// TURNS folder tests
turnCounterSpec();
newGameIdGeneratorSpec();

// ORDERS folder tests
initialUnitsSpec();
mapStatesSpec();
ordersValidatorSpec();
ordersTemplatesSpec();
