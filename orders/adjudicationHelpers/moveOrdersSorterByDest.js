function moveOrdersSorterByDest(moveOrders) {
	const destinationObj = {};

	moveOrders.forEach((order) => {
		if (!destinationObj[order.destination]) {
			destinationObj[order.destination] = [order];
		} else {
			destinationObj[order.destination].push(order);
		}
	});

	return destinationObj;
}

exports.moveOrdersSorterByDest = moveOrdersSorterByDest;
