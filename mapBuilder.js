const { mapString } = require("./mapTemplate");
const { initialState } = require("./mapStates");
const { currentTerritory, supplyCenters, gameMap } = require("./gameMap");
const { nations } = require("./nations");

const fs = require("fs");
const { mapUnitPlacer } = require("./mapUnitPlacer");
const { initialUnits } = require("./initialUnits");

function mapSummaryMaker() {
	let summaryString = "";

	let ownershipList = {
		England: 0,
		France: 0,
		Germany: 0,
		Italy: 0,
		Austria: 0,
		Russia: 0,
		Turkey: 0,
		null: 0,
	};

	supplyCenters.forEach(
		(each) =>
			(ownershipList[each.initialNation] =
				ownershipList[each.initialNation] + 1)
	);

	Object.entries(ownershipList).forEach(([key, value], index) => {
		summaryString =
			summaryString +
			`\n\t<text x="10" y="${index * 10 + 22}">${
				key === "null" ? "unclaimed" : key
			}: ${value}</text>`;
	});

	return `\n<g title="Summary">\n\t<rect class="summary" width="148" height="100"/>\n\t<text x="10" y="12">Spring 1901</text>${summaryString}\n</g>`;
}

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
	return positions + mapSummaryMaker();
}

function mapShader(positionalMap) {
	let map = positionalMap;

	const ownershipMap = gameMap.map(({ name, initialNation }) => ({
		name,
		nation: initialNation,
	}));

	ownershipMap.forEach(({ name, nation }) => {
		if (name === "Bulgaria") {
			const targetStringEC = `<g title="Bulgaria (ec)">\n\t<polyline class="l"`;
			const replacementStringEC = `<g title="Bulgaria (ec)">\n\t<polyline class="l${
				!!nation ? ` ${nation}_shade` : ``
			}"`;

			const targetStringSC = `<g title="Bulgaria (sc)">\n\t<polyline class="l"`;
			const replacementStringSC = `<g title="Bulgaria (sc)">\n\t<polyline class="l${
				!!nation ? ` ${nation}_shade` : ``
			}"`;

			map = map
				.replace(targetStringEC, replacementStringEC)
				.replace(targetStringSC, replacementStringSC);
		}

		if (name === "Spain") {
			const targetStringNC = `<g title="Spain (nc)">\n\t<polyline class="l"`;
			const replacementStringNC = `<g title="Spain (nc)">\n\t<polyline class="l${
				nation ? ` ${nation}_shade` : ``
			}"`;

			const targetStringSC = `<g title="Spain (sc)">\n\t<polyline class="l"`;
			const replacementStringSC = `<g title="Spain (sc)">\n\t<polyline class="l${
				nation ? ` ${nation}_shade` : ``
			}"`;

			map = map
				.replace(targetStringNC, replacementStringNC)
				.replace(targetStringSC, replacementStringSC);
		}

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
	const positions = mapPositionMaker() + mapUnitPlacer(initialUnits);

	const fileName = `./maps/${Date.now()}.svg`;

	const mapWithPositionsAndShades = mapShader(mapString(positions));

	return fs.writeFile(fileName, mapWithPositionsAndShades, "UTF-8", (err) => {
		if (err) console.log("Error while writing file: ", err);
		console.log(`successfully written to ${fileName}`);
	});
}

mapBuilder();

exports.mapBuilder = mapBuilder;
