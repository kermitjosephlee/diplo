function ordersSorterByType(orders) {
	const sortedOrders = {
		M: [],
		S: [],
		C: [],
		H: [],
	};

	orders.forEach((order) => sortedOrders[order.actionType].push(order));
	return sortedOrders;
}

exports.ordersSorterByType = ordersSorterByType;
