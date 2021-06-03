const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello Diplomacy!");
});

if (!module.parent) {
	app.listen(3000);
	console.log("Express started on port 3000");
}
