const { Pool } = require('pg')
const dotenv = require('dotenv').config()
const connectionString = process.env.DATABASE_URL;
const { gameMap } = require("../constants/gameMap");

const pool = new Pool({ 
  connectionString, 
  ssl: {
    rejectUnauthorized: false
  }
});

const locationsString = gameMap.sort((a, b) => a.name.localeCompare(b.name)).map(location => {
  const {name, shortName, isMaritime, isTerrestrial, isLandLocked, isSupplyCenter, coasts } = location
  return `('${name}', '${shortName}', '${isMaritime}', '${isTerrestrial}', '${isLandLocked}', '${isSupplyCenter}', '${!!coasts}')`
}).join()

// console.log("locationsString", locationsString)

// const insertionString = `INSERT INTO locations (name, short_name, is_maritime, is_terrestrial, is_landlocked, is_supply_center, has_coasts) VALUES ${locationsString};`

// pool.query(insertionString, (err, res) => {
//   console.log('err', err, '\nres:', res)
//   pool.end()
// })
