require('dotenv').config()
const { Pool } = require("pg")
const fs = require('fs');
const sql = fs.readFileSync('./db/schema.sql').toString()
const { insertSeedString } = require('./db/seedInserts');

const pool = new Pool({
  connectionString: process.env.LOCAL_DATABASE_URL
})

pool.query(`${sql} ${insertSeedString}`, (err, res) => {
  console.log(err, res)
  pool.end()
})
