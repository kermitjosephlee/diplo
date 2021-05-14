const { turnCounterSpec, newGameIdGeneratorSpec } = require("./turns");
const { initialUnitsSpec } = require("./orders");

// TURNS folder tests
turnCounterSpec();
newGameIdGeneratorSpec();

initialUnitsSpec();
