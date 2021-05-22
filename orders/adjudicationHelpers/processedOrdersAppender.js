const fs = require("fs");
const { currentSeason } = require("../adjudicationHelpers/currentSeason");

function processedOrdersAppender(receivedOrders, finalizedOrders) {
	const gameID = 1;
	const pendingGameFile = `./orders/processed/game${gameID}.txt`;
	const processedGameFile = `./orders/processed/game${gameID}.txt`;
	const { gameId, year, season } = currentSeason();

	const gameObj = JSON.parse(fs.readFileSync(pendingGameFile));

	const ordersObj = {
		gameId,
		year,
		season,
		receivedOrders,
		finalizedOrders,
	};

	const newGameObj = {
		...gameObj,
		orders: [ordersObj, ...gameObj.orders],
	};

	fs.writeFileSync(processedGameFile, JSON.stringify(newGameObj, null, 2));
	console.log(
		`Received and Processed Moves for ${season} ${year} written to ${processedGameFile}`
	);
}

exports.processedOrdersAppender = processedOrdersAppender;
