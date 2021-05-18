function supportCounter(destinationArr) {
	if (destinationArr.length > 1) {
		return destinationArr.sort((a, b) => b.supports - a.supports);
	}
	return destinationArr;
}

exports.supportCounter = supportCounter;
