const {
	gameMap,
	supplyCenters,
	maritimeTerritories,
	terrestrialTerritories,
	exceptionalCoastTerritories,
} = require("./gameMap");
const { waterChecker } = require("./waterChecker");
const { landChecker } = require("./landChecker");
const { sharedCoastChecker } = require("./sharedCoastChecker");
const { availableMovements } = require("./availableMovements");

const territory = process.argv[2].toUpperCase();
const unitType = process.argv[3].toUpperCase();
let coast = null;

if (process.argv.length > 4) {
	coast = process.argv[4].toUpperCase();
}

console.log("sharedCoastCHecker", sharedCoastChecker(territory, coast));

// console.log(
// 	"availableMovements",
// 	availableMovements(territory, unitType, coast)
// );
