const fs = require("fs");
const { insertLocationsString } = require('./seedLocations');
const { insertUnitsString } = require('./seedUnits');
const { insertBordersString } = require('./seedBorders');
const { updateInitialCountriesString } = require('./seedInitialCountry');
const { insertCoastsString } = require('./seedCoasts');
const { insertCoastBordersString } = require('./seedCoastBorders');

const baseSeedString = fs.readFileSync("./db/seeder.sql").toString();

const insertSeedString = `
  ${baseSeedString}
  ${insertLocationsString}
  ${updateInitialCountriesString}
  ${insertBordersString}
  ${insertCoastsString}
  ${insertCoastBordersString}
  ${insertUnitsString}
`
  
exports.insertSeedString = insertSeedString;
