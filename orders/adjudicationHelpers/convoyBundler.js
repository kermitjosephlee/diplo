function convoyBundler(movement, allConvoys) {
	const movementConvoys = allConvoys.filter(
		(convoy) =>
			convoy.destination === movement.destination &&
			convoy.convoyingUnitOrigin === movement.origin
	);

	return { ...movement, convoy: movementConvoys };
}

exports.convoyBundler = convoyBundler;
