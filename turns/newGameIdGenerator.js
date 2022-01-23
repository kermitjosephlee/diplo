// const fs = require("fs");

// function newGameIdGenerator() {
// 	const turns = fs.readdirSync(`./turns/currentGames`);
// 	return turns.length + 1;
// }

// exports.newGameIdGenerator = newGameIdGenerator;

const db = require('../db/index')

db.query(`SELECT COUNT (*) FROM games;` , null, (err, res) => {
	if (err) console.log (err)

	console.log(res.rows)

})
