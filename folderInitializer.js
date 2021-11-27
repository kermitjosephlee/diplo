const fs = require("fs");

const foldersToInitialize = ["./orders/pending", "./orders/processed", "./turns/currentGames", "./building/scores", "./maps"]

function makeDirectory(directory) {
		if (!fs.existsSync(directory)){
			fs.mkdirSync(directory)
		}
		return
	}

foldersToInitialize.forEach(makeDirectory)
