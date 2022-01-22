const { gameMap } = require("../constants/gameMap");

const sortedGameMap = gameMap.sort((a,b) => a.name.localeCompare(b.name))

const locationsString = sortedGameMap.map(location => {
  const {name, shortName, isMaritime, isTerrestrial, isLandLocked, isSupplyCenter } = location
  return `('${name}', '${shortName}', '${isMaritime}', '${isTerrestrial}', '${isLandLocked}', '${isSupplyCenter}')`
}).join()

const insertLocationsString = `INSERT INTO locations (name, short_name, is_maritime, is_terrestrial, is_landlocked, is_supply_center) VALUES ${locationsString};`

exports.insertLocationsString = insertLocationsString;
