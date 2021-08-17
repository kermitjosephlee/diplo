function ordersSorterByDest(movements, holds) {
	const orders = [...movements, ...holds];

	const destinationObj = {};

	orders.forEach((order) => {
		if (!destinationObj[order.destination]) {
			destinationObj[order.destination] = [order];
		} else {
			destinationObj[order.destination].push(order);
		}
	});

	return destinationObj;
}

exports.ordersSorterByDest = ordersSorterByDest;
