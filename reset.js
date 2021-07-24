const fs = require("fs");
// const { gameInitializer } = require("./turns/gameInitializer");

function eraser(dir) {
	return fs.readdirSync(dir).forEach((each) => {
		fs.unlink(`${dir}/${each}`, (err) => {
			if (err) console.log("error", err);
			console.log(`removed ${each}`);
		});
	});
}

function reset() {
	const scores = `./building/scores`;
	const pending = `./orders/pending`;
	const processed = `./orders/processed`;
	const currentGame = `./turns/currentGames`;

	[(scores, pending, processed, currentGame)].forEach((dir) => eraser(dir));
}

reset();
