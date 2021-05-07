const fs = require("fs");
const { mapUnitPlacer } = require("./mapUnitPlacer");
const { initialUnits } = require("../orders/initialUnits");
const { mapString } = require("./mapTemplate");
const { currentMapMaker } = require("./currentMapMaker");
const { mapPositionMaker } = require("./mapPositionMaker");
const { mapShader } = require("./mapShader");

function mapBuilder() {
	const positions = mapPositionMaker() + mapUnitPlacer(initialUnits);

	const fileName = `./maps/${Date.now()}.svg`;

	const mapWithPositionsAndShades = mapShader(mapString(positions));

	return fs.writeFile(fileName, mapWithPositionsAndShades, "UTF-8", (err) => {
		if (err) console.log("Error while writing file: ", err);
		console.log(`successfully written to ${fileName}`);
		currentMapMaker();
	});
}

mapBuilder();

exports.mapBuilder = mapBuilder;
