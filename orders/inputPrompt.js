const db = require("../db");
const prompts = require("prompts");

const supportQuestions = [
	{
		type: (prev) => (prev === "SUPPORT" ? "text" : null),
		name: "supportUnitOrigin",
		message: "Where is the current location of the unit receiving support?",
	},
];

const questions = [
	{
		type: "text",
		name: "origin",
		message: "Where is the unit located?",
	},
	{
		type: "select",
		name: "unitType",
		message: "What type of unit it is? (A)rmy or (N)avy?",
		choices: [
			{ title: "Army", value: "ARMY" },
			{ title: "Navy", value: "NAVY" },
		],
	},
	{
		type: "select",
		name: "action",
		message: "What action is it doing?",
		choices: [
			{ title: "Move", value: "MOVE" },
			{ title: "Support", value: "SUPPORT" },
			{ title: "Convoy", value: "CONVOY" },
			{ title: "Hold", value: "HOLD" },
		],
	},
	...supportQuestions,
	{
		type: "text",
		name: "destination",
		message: "Where is it going?",
	},
];

const inputPrompt = async () => {
	const response = await prompts(questions);
	console.log("response", response);
};

exports.inputPrompt = inputPrompt;
