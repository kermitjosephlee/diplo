// const { gameMap } = require("../../constants/gameMap");
const { reject } = require('lodash')
const db = require('../../db')

// const names = gameMap.map(({ name }) => name);
// const shortNames = gameMap.map(({ shortName }) => shortName);



function isTerritoryValid(territory) {
	const selectQuery = `SELECT * FROM locations WHERE name = $1 OR short_name = $1;`
	const variables = [territory]

	db.query(selectQuery, variables)
	.then((data) => {
		// console.log(data)
		return data.rowCount === 1 && data.rows.length === 1
	})
	.catch(e => {
		console.log(e)
		return false
	})
	.finally(() => db.end())
}

exports.isTerritoryValid = isTerritoryValid;
