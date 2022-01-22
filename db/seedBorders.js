const { gameMap } = require("../constants/gameMap")

const borderPairs = gameMap.sort((a, b) => a.name.localeCompare(b.name)).map((location) => {
  const shortName = location.shortName
  return location.borderingTerritories.map(each => [shortName, each])
}).flat()

const uniquePairs = borderPairs.reduce((previous, current, index, array) => {
  if (!previous.includes([current[1], current[0]].join())){
    return [...previous, current.join()]
  }
  return previous
}, []).map(each => each.split(','))

const uniqueString = uniquePairs.map(([a, b]) => `((SELECT id FROM locations WHERE short_name = '${a}'), (SELECT id FROM locations WHERE short_name = '${b}'))`).join()

const insertionString = `INSERT INTO borders (location_a, location_b) VALUES ${uniqueString};`

exports.insertBordersString = insertionString;