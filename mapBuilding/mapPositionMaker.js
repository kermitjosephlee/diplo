const { currentTerritory } = require("../constants/gameMap");
const { initialState } = require("../orders/mapStates");
const { mapSummaryMaker } = require("./mapSummaryMaker");
const { nations } = require("../constants/nations");

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

exports.mapPositionMaker = mapPositionMaker;
