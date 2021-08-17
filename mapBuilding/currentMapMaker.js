const fs = require("fs");

function currentMapMaker() {
	const latestFileName = fs
		.readdirSync("./maps")
		.map((each) => each)
		.map((str) => parseInt(str.substring(0, 13)))
		.sort((a, b) => b - a)
		.map((each) => `${each.toString()}.svg`)[0];

	fs.copyFileSync(`./maps/${latestFileName}`, "currentMap.svg");

	return;
}

exports.currentMapMaker = currentMapMaker;
