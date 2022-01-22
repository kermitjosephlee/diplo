const { Pool } = require("pg")
require('dotenv').config()

const pool = new Pool({
  connectionString: process.env.LOCAL_DATABASE_URL
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})