const fs = require("fs");
const { turnCounter } = require("./turnCounter");

const testTurn = [
	{ location: "EDI", unitType: "Navy", nation: "England" },
	{ location: "LVP", unitType: "Army", nation: "England" },
	{ location: "LON", unitType: "Navy", nation: "England" },
	{ location: "MAO", unitType: "Navy", nation: "France" },
	{ location: "PIC", unitType: "Army", nation: "France" },
	{ location: "BUR", unitType: "Army", nation: "France" },
	{ location: "KIE", unitType: "Navy", nation: "Germany" },
	{ location: "BER", unitType: "Army", nation: "Germany" },
	{ location: "MUN", unitType: "Army", nation: "Germany" },
	{ location: "VEN", unitType: "Army", nation: "Italy" },
	{ location: "ROM", unitType: "Army", nation: "Italy" },
	{ location: "NAP", unitType: "Navy", nation: "Italy" },
	{ location: "TRI", unitType: "Navy", nation: "Austria" },
	{ location: "VIE", unitType: "Army", nation: "Austria" },
	{ location: "BUD", unitType: "Army", nation: "Austria" },
	{ location: "CON", unitType: "Army", nation: "Turkey" },
	{ location: "SMY", unitType: "Army", nation: "Turkey" },
	{ location: "ANK", unitType: "Navy", nation: "Turkey" },
	{ location: "WAR", unitType: "Army", nation: "Russia" },
	{ location: "MOS", unitType: "Army", nation: "Russia" },
	{ location: "SEV", unitType: "Navy", nation: "Russia" },
	{ location: "STP", unitType: "Navy", nation: "Russia", coast: "SOUTH" },
];

function finalizedTurnAppender(finalizedTurn) {
	const gameId = 1;
	const currentGameFile = `./turns/currentGames/game${gameId}.txt`;
	const { year, season } = turnCounter();
	const previousTurns = JSON.parse(fs.readFileSync(currentGameFile, "utf-8"));
	const currentTurn = { year, season, positions: finalizedTurn };
	const updatedTurns = [currentTurn, ...previousTurns];

	fs.writeFileSync(currentGameFile, JSON.stringify(updatedTurns, null, 2));
	console.log(
		`Orders for ${season} ${year} have been written to ${currentGameFile}`
	);
}

exports.finalizedTurnAppender = finalizedTurnAppender;
