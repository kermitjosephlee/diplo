const { gameMap } = require("../constants/gameMap");

function mapUnitPlacer(units) {
	let unitString = "";
	const locationNames = gameMap.map(({ name, shortName }) => ({
		name,
		shortName,
	}));

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
					`\n<g title="${each.name} (${prefix}c)"><use xlink:href="#${
						each.unitType === "Army" ? "A" : "F"
					}" id="${
						each.name === "St Petersburg" ? "St_Petersburg" : each.name
					}" class="${each.nation}" transform="translate(&${
						each.name === "St Petersburg" ? "St_Petersburg" : each.name
					}__${prefix}c;)"/></g>`;
			} else {
				unitString =
					unitString +
					`\n<g title="${each.name}"><use xlink:href="#${
						each.unitType === "Army" ? "A" : "F"
					}" id="${each.name}" class="${each.nation}" transform="translate(&${
						each.name
					};)"/></g>`;
			}
		});

	return unitString;
}

exports.mapUnitPlacer = mapUnitPlacer;
