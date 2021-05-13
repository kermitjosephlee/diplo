const fs = require("fs");

function newGameIdGenerator() {
	const turns = fs.readdirSync(`./turns/currentGames`);
	return turns.length + 1;
}

exports.newGameIdGenerator = newGameIdGenerator;
