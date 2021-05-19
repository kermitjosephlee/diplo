function nameUnderscoreReplacer(name = "") {
	return name.split(" ").join("_");
}

console.log(nameUnderscoreReplacer("North Atlantic Ocean"));

exports.nameUnderscoreReplacer = nameUnderscoreReplacer;
