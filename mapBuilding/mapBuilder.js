const fs = require("fs");
const { mapUnitPlacer } = require("./mapUnitPlacer");
// const { initialUnits } = require("../orders/initialUnits");
const { mapString } = require("./mapTemplate");
const { currentMapMaker } = require("./currentMapMaker");
const { currentUnitPositions } = require("./currentUnitPositions");
const { mapPositionMaker } = require("./mapPositionMaker");
const { mapShader } = require("./mapShader");

function mapBuilder() {
	const gameId = 1; //  TODO: update system to keep gameId in memory - db on user for active games in table *** for LATER

	const currentPositions = currentUnitPositions();
	const positions = mapPositionMaker() + mapUnitPlacer(currentPositions);
	const directoryName = `./maps`;
	const fileName = `./maps/${Date.now()}.svg`;
	const mapWithPositionsAndShades = mapShader(mapString(positions));

	const removeOldFiles = true;

	if (removeOldFiles) {
		const oldFiles = fs.readdirSync(directoryName);
		oldFiles.forEach((oldFile) => {
			fs.unlink(`${directoryName}/${oldFile}`, (err) => {
				if (err) console.log(err);
				console.log(`removed ${oldFile}`);
			});
		});
	}

	return fs.writeFile(fileName, mapWithPositionsAndShades, "UTF-8", (err) => {
		if (err) console.log("Error while writing file: ", err);
		console.log(`successfully written to ${fileName}`);
		currentMapMaker();
	});
}

mapBuilder();

exports.mapBuilder = mapBuilder;
