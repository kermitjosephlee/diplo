const dotenv = require("dotenv").config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001

app.get("/", (req, res) => {
	res.send("Hello Diplomacy!");
});

console.log("database uri:", process.env.DATABASE_URL)


if (!module.parent) {
	app.listen(PORT);
	console.log(`Express started on port ${PORT}`);
}
