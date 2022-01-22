const { gameMap } = require("../constants/gameMap")
const { isEmpty } = require('lodash')

const coastLocations = gameMap.sort((a, b) => a.name.localeCompare(b.name)).filter(location => !isEmpty(location.coasts)).map(({shortName, coasts}) => {
  return coasts.map((coast) => [shortName, coast.location])
}).flat()

const coastString = coastLocations.map(([shortName, coast]) => `((SELECT id FROM locations WHERE short_name = '${shortName}'), '${coast}')`).join()

const insertCoastsString = `INSERT INTO coasts (location_id, position) VALUES ${coastString};`

exports.insertCoastsString = insertCoastsString;
