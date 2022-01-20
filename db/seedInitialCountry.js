const dotenv = require('dotenv').config()
const connectionString = process.env.DATABASE_URL;
const { Pool } = require("pg")
const { gameMap } = require("../constants/gameMap")

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
})

// console.log("connectionString", connectionString)

const locationsString = gameMap.sort((a, b) => a.name.localeCompare(b.name)).filter(location => location.initialNation).map((location) => `(SELECT id FROM countries WHERE name = '${location.initialNation}')`).join()
// const insertionString = `UPDATE locations SET 'initial_country_id' = (SELECT id FROM countries WHERE name = '${location.initialNation}') WHERE name = '${location.name}';`

const updateArr = gameMap.sort((a,b) => a.name.localeCompare(b.name)).filter((location) => location.initialNation).map(location => `UPDATE locations SET initial_country_id = (SELECT id FROM countries WHERE name = '${location.initialNation}') WHERE name = '${location.name}';`)

console.log('updateArr', updateArr.length)

// updateArr.forEach(location => {
//   pool.query(location, (err, res) => {
//     console.log('err', err, '\nres:', res)
//   })
// })



// pool.end()

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })