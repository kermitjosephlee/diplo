const { gameMap } = require("../constants/gameMap")

const updateArr = gameMap.sort((a,b) => a.name.localeCompare(b.name)).filter((location) => location.initialNation).map(location => `UPDATE locations SET initial_country_id = (SELECT id FROM countries WHERE name = '${location.initialNation}') WHERE name = '${location.name}';`).join().replaceAll(',', '')

exports.updateInitialCountriesString = updateArr;
