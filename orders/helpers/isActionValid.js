const { actionTypes } = require("../../movementHelpers/actionTypes");

function isActionValid(action) {
	return Object.keys(actionTypes).includes(action);
}

exports.isActionValid = isActionValid;
