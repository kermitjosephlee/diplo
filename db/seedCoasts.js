const dotenv = require('dotenv').config()
const connectionString = process.env.DATABASE_URL;
const { Pool } = require("pg")
const { gameMap, shortNames } = require("../constants/gameMap")
const { isEmpty } = require('lodash')

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
})

const coastLocations = gameMap.sort((a, b) => a.name.localeCompare(b.name)).filter(location => !isEmpty(location.coasts)).map(({shortName, coasts}) => {
  return coasts.map((coast) => [shortName, coast.location])
}).flat()


const coastString = coastLocations.map(([shortName, coast]) => `((SELECT id FROM locations WHERE short_name = '${shortName}'), '${coast}')`).join()

const insertionString = `INSERT INTO coasts (location_id, position) VALUES ${coastString};`

pool.query(insertionString, (err, res) => {
  console.log('err', err, '\nres:', res)
  pool.end()
})



