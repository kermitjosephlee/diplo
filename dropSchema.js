const { Pool } = require("pg")
require('dotenv').config()
const fs = require('fs');

const sql = fs.readFileSync('./db/schema.sql').toString()

const pool = new Pool({
  connectionString: process.env.LOCAL_DATABASE_URL
})

pool.query(sql, (err, res) => {
  console.log(err, res)
  pool.end()
})