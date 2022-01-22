require('dotenv').config()
const { Pool } = require("pg")
const { insertSeedString } = require('./db/seedInserts');

const pool = new Pool({
  connectionString: process.env.LOCAL_DATABASE_URL
})

pool.query(insertSeedString, (err, res) => {
  console.log(err, res)
  pool.end()
})
