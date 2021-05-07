const { supplyCenters } = require("../constants/gameMap");

function mapSummaryMaker() {
	let summaryString = "\n";

	let ownershipList = {
		England: 0,
		France: 0,
		Germany: 0,
		Italy: 0,
		Austria: 0,
		Russia: 0,
		Turkey: 0,
		null: 0,
	};

	supplyCenters.forEach(
		(each) =>
			(ownershipList[each.initialNation] =
				ownershipList[each.initialNation] + 1)
	);

	Object.entries(ownershipList).forEach(([key, value], index) => {
		summaryString =
			summaryString +
			`\n\t<text x="10" y="${index * 10 + 22}">${
				key === "null" ? "unclaimed" : key
			}: ${value}</text>`;
	});

	return `\n<g title="Summary">\n\t<rect class="summary" width="148" height="100"/>\n\t<text x="10" y="12">Spring 1901</text>${summaryString}\n</g>`;
}

exports.mapSummaryMaker = mapSummaryMaker;
