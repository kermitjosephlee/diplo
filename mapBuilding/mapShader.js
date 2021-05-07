const { gameMap } = require("../constants/gameMap");

function mapShader(positionalMap) {
	let map = positionalMap;

	const ownershipMap = gameMap.map(({ name, initialNation }) => ({
		name,
		nation: initialNation,
	}));

	ownershipMap.forEach(({ name, nation }) => {
		if (name === "Bulgaria") {
			const targetStringEC = `<g title="Bulgaria (ec)">\n\t<polyline class="l"`;
			const replacementStringEC = `<g title="Bulgaria (ec)">\n\t<polyline class="l${
				!!nation ? ` ${nation}_shade` : ``
			}"`;

			const targetStringSC = `<g title="Bulgaria (sc)">\n\t<polyline class="l"`;
			const replacementStringSC = `<g title="Bulgaria (sc)">\n\t<polyline class="l${
				!!nation ? ` ${nation}_shade` : ``
			}"`;

			map = map
				.replace(targetStringEC, replacementStringEC)
				.replace(targetStringSC, replacementStringSC);
		}

		if (name === "Spain") {
			const targetStringNC = `<g title="Spain (nc)">\n\t<polyline class="l"`;
			const replacementStringNC = `<g title="Spain (nc)">\n\t<polyline class="l${
				nation ? ` ${nation}_shade` : ``
			}"`;

			const targetStringSC = `<g title="Spain (sc)">\n\t<polyline class="l"`;
			const replacementStringSC = `<g title="Spain (sc)">\n\t<polyline class="l${
				nation ? ` ${nation}_shade` : ``
			}"`;

			map = map
				.replace(targetStringNC, replacementStringNC)
				.replace(targetStringSC, replacementStringSC);
		}

		if (name === "St Petersburg") {
			const targetStringNC = `<g title="St Petersburg (nc)">\n\t<polyline class="l"`;
			const replacementStringNC = `<g title="St Petersburg (nc)">\n\t<polyline class="l${
				nation ? ` ${nation}_shade` : ``
			}"`;

			const targetStringSC = `<g title="St Petersburg (sc)">\n\t<polyline class="l"`;
			const replacementStringSC = `<g title="St Petersburg (sc)">\n\t<polyline class="l${
				nation ? ` ${nation}_shade` : ``
			}"`;

			map = map
				.replace(targetStringNC, replacementStringNC)
				.replace(targetStringSC, replacementStringSC);
		}

		const targetString = `<g title="${name}">\n\t<polygon class="l"`;
		const replacementString = `<g title="${name}">\n\t<polygon class="l${
			nation ? ` ${nation}_shade` : ``
		}"`;

		map = map.replace(targetString, replacementString);
	});

	return map;
}

exports.mapShader = mapShader;
