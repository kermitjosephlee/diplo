const { gameMap } = require("../constants/gameMap");
const { nameUnderscoreReplacer } = require("./nameUnderscoreReplacer");

function mapUnitPlacer(units) {
	let unitString = "\n";
	const locationNames = gameMap.map(({ name, shortName }) => ({
		name,
		shortName,
	}));

	const url = "https://www.google.com";

	units
		.map(({ location, ...rest }) => {
			return {
				name: locationNames.filter((each) => location === each.shortName)[0]
					.name,
				location,
				...rest,
			};
		})
		.forEach((each) => {
			if (!!each.coast) {
				const prefix = each.coast.substring(0, 1).toLowerCase();
				unitString =
					unitString +
					`\n<a xlink:href="${url}">
					<g title="${each.name} (${prefix}c)"><use xlink:href="#${
						each.unitType === "Army" ? "A" : "F"
					}" id="${
						each.name === "St Petersburg" ? "St_Petersburg" : each.name
					}" class="${each.nation} unit" transform="translate(&${
						each.name === "St Petersburg" ? "St_Petersburg" : each.name
					}__${prefix}c;)"/></g></a>`;
			} else {
				unitString =
					unitString +
					`\n<a xlink:href="${url}"><g title="${each.name}"><use xlink:href="#${
						each.unitType === "Army" ? "A" : "F"
					}" id="${each.name}" class="${
						each.nation
					} unit" transform="translate(&${nameUnderscoreReplacer(
						each.name
					)};)"/></g></a>`;
			}
		});

	return unitString;
}

exports.mapUnitPlacer = mapUnitPlacer;
