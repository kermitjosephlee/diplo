require('dotenv').config()
const { Pool } = require("pg")
const fs = require('fs');
const sql = fs.readFileSync('./db/schema.sql').toString()
const { insertSeedString } = require('./db/seedInserts');
const testData = fs.readFileSync('./db/testSeeder.sql').toString()

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
})

pool.query(`${sql} ${insertSeedString} ${testData}`, (err, res) => {
  console.log(err, res)
  pool.end()
})
