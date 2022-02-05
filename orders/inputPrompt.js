const db = require("../db")
const readline = require("readline");
const { isTerritoryValid } = require("./helpers/isTerritoryValid");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});



async function inputPrompt(){
	rl.question("What is the location of your unit? ", 
		(territory) => {
			const selectQuery = `SELECT * FROM locations WHERE name = $1 OR short_name = $1;`
			const variables = [territory]
		
			db.query(selectQuery, variables)
			.then((data) => {
				
				if (data.rowCount === 1 && data.rows.length === 1){
					rl.question("Where are we going? ", (destination) => {

						const destinationQuery = `SELECT * FROM locations WHERE name = $1 or short_name = $1;`
						const destinationVariables = [destination]


						db.query(destinationQuery, destinationVariables)
						.then(data => {
							console.log("data...", data)
							if (data.rowsCount !== 1) {
								rl.question("Error. Try again")
								rl.close()
							}
						})
						.catch(error => console.log("error", error))
					})
				}
			})
		}
	)
}

// function inputPrompt() {
// 	// prompt for unit in question by territory

// 	rl.question("What is the location of the unit? ", (territory) => {
// 		if (!isTerritoryValid(territory)) {
// 			console.log(`There is no unit available in ${territory} - try again`);
// 			rl.close();
// 		}

// 		const currentUnit = unitFinder(territory);
// 		const { location, unitType, nation } = currentUnit;
// 		const nationalAdjective = nationalAdjectives[nation];

// 		// check if territory entered does not need coast input
// 		if (!requiresCoastInput(territory)) {
// 			// prompt for action type
// 			rl.question(
// 				`What would you like the ${nationalAdjective} ${unitType} in ${location} to do?\n(M)ove, (H)old, (C)onvoy, (S)upport? `,
// 				(action) => {
// 					if (isActionValid(action.toUpperCase())) {
// 						switch (action.toUpperCase()) {
// 							case "H":
// 								holdActionHandler(location, unitType, nation, rl);
// 							case "C":
// 								convoyActionHandler(location, unitType, nation, rl);
// 							case "S":
// 								supportActionHandler(location, unitType, nation, rl);
// 							case "M":
// 								moveActionHandler(location, unitType, nation, rl);
// 						}
// 					} else {
// 						console.log("no orders issued");
// 						rl.close();
// 					}
// 				}
// 			);
// 		}

// 		if (requiresCoastInput(location) && unitType === "Navy") {
// 			coastalExceptionHandler(location, unitType, nation, rl);
// 		}
// 	});

// 	rl.on("close", () => {
// 		process.exit(0);
// 	});
// }

exports.inputPrompt = inputPrompt;
