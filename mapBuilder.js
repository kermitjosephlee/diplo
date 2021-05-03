const { mapString } = require("./mapTemplate.js");

function mapBuilder() {
	console.log("map", mapString);
	return null;
}

mapBuilder();

exports.mapBuilder = mapBuilder;
