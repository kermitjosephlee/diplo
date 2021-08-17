function nameUnderscoreReplacer(name = "") {
	return name.split(" ").join("_");
}

exports.nameUnderscoreReplacer = nameUnderscoreReplacer;
