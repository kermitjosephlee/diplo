const { mapString } = require("./mapTemplate");
const { initialState } = require("./mapStates");
const { currentTerritory } = require("./gameMap");
const { nations } = require("./nations");

const fs = require("fs");

function mapBuilder() {
	let positions = "";
	initialState.forEach((each) => {
		const longName = currentTerritory(each.location).name;
		const nation = nations[each.nation];

		positions =
			positions +
			`\n<g title="${longName}"><use xlink:href="#sc" class="${nation}" transform="translate(&sc${longName};)"/></g>`;
	});
	const map = mapString(positions);

	const fileName = "./testMap.svg";

	return fs.writeFileSync(fileName, map, "UTF-8", (err) => {
		if (err) console.log("Error while writing file: ", err);
		console.log(`successfully written to ${fileName}`);
	});
}

mapBuilder();

exports.mapBuilder = mapBuilder;
