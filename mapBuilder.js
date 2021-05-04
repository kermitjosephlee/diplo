const { mapString } = require("./mapTemplate");
const { initialState } = require("./mapStates");
const { currentTerritory, gameMap } = require("./gameMap");
const { nations } = require("./nations");

const fs = require("fs");

function mapPositionMaker() {
	let positions = "";
	initialState.forEach((each) => {
		const longName = currentTerritory(each.location).name;
		const nation = nations[each.nation];

		positions =
			positions +
			`\n<g title="${longName}"><use xlink:href="#sc" class="${nation}" transform="translate(&sc${
				longName === "St Petersburg" ? "St_Petersburg" : longName
			};)"/></g>`;
	});
	return positions;
}

function mapShader(positionalMap) {
	let map = positionalMap;

	const ownershipMap = gameMap.map(({ name, initialNation }) => ({
		name,
		nation: initialNation,
	}));

	ownershipMap.forEach(({ name, nation }) => {
		if (name === "St Petersburg") {
			const targetStringNC = `<g title="St Petersburg (nc)">\n\t<polyline class="l"`;
			const replacementStringNC = `<g title="St Petersburg (nc)">\n\t<polyline class="l${
				nation ? ` ${nation}_shade` : ``
			}"`;

			const targetStringSC = `<g title="St Petersburg (sc)">\n\t<polyline class="l"`;
			const replacementStringSC = `<g title="St Petersburg (sc)">\n\t<polyline class="l${
				nation ? ` ${nation}_shade` : ``
			}"`;

			map = map
				.replace(targetStringNC, replacementStringNC)
				.replace(targetStringSC, replacementStringSC);
		}

		const targetString = `<g title="${name}">\n\t<polygon class="l"`;
		const replacementString = `<g title="${name}">\n\t<polygon class="l${
			nation ? ` ${nation}_shade` : ``
		}"`;

		map = map.replace(targetString, replacementString);
	});

	return map;
}

function mapBuilder() {
	const positions = mapPositionMaker();

	const fileName = "./testMap.svg";

	const mapWithPositionsAndShades = mapShader(mapString(positions));

	return fs.writeFileSync(
		fileName,
		mapWithPositionsAndShades,
		"UTF-8",
		(err) => {
			if (err) console.log("Error while writing file: ", err);
			console.log(`successfully written to ${fileName}`);
		}
	);
}

mapBuilder();

exports.mapBuilder = mapBuilder;
