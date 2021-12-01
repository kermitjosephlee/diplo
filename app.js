const dotenv = require("dotenv").config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001
const { Client } = require("pg")
const client = new Client({
	connectionString: process.env.DATABASE_CONNECTION_STRING,
	ssl: {
    rejectUnauthorized: false
  }
})

app.get("/", (req, res) => {
	res.send("Hello Diplomacy!");
});

client.connect()
client.query('SELECT * FROM users;', (err, res) => {
	console.log("err", err, "\nres", res)
	client.end()
})

if (!module.parent) {
	app.listen(PORT);
	console.log(`Express started on port ${PORT}`);
}
