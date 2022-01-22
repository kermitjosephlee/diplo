const { gameMap } = require("../constants/gameMap")
const { isEmpty } = require('lodash')

const coastLocations = gameMap.sort((a, b) => a.name.localeCompare(b.name)).filter(location => !isEmpty(location.coasts)).map(({shortName, coasts}) => {
  return coasts.map((coast) => coast.territories.map((terr) => [shortName, coast.location, terr])).flat()
}).flat()

const coastLocationsString = coastLocations.map(([shortName, coast, borderingLocation]) => `((SELECT id FROM coasts WHERE location_id = (SELECT id FROM locations WHERE short_name = '${shortName}') AND position = '${coast}'), ( SELECT id FROM borders WHERE location_b = (SELECT id FROM locations WHERE short_name = '${shortName}') AND location_a = (SELECT id FROM locations WHERE short_name = '${borderingLocation}') OR location_a = (SELECT id FROM locations WHERE short_name = '${shortName}') AND location_b = (SELECT id FROM locations WHERE short_name = '${borderingLocation}')))`).join()

const insertCoastBordersString = `INSERT INTO coast_borders (coast_id, border_id) VALUES ${coastLocationsString};`

exports.insertCoastBordersString = insertCoastBordersString;
