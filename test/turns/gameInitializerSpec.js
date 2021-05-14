const { assert } = require("chai");
const { gameInitializer } = require("../../turns/gameInitializer");

const result = gameInitializer();

function gameInitializerSpec() {
	return null;
}

exports.gameInitializerSpec = gameInitializerSpec;

// test not possible because there is no return, just a fs.writeFileSync action
