const dotenv = require('dotenv').config()
const { nations } = require("../constants/nations");
const { types } = require("../constants/types");
const { RUS, FRA, GER, ENG, ITA, TUR, AUS } = nations;
const { A, N } = types;
const connectionString = process.env.DATABASE_URL;
const { Pool } = require("pg")
const { gameMap } = require("../constants/gameMap")

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
})

const initialUnits = [
	{ location: 'EDI', unitType: 'NAVY', nation: 'England', coast: null },
	{ location: 'LVP', unitType: 'ARMY', nation: 'England', coast: null },
	{ location: 'LON', unitType: 'NAVY', nation: 'England', coast: null },
	{ location: 'BRE', unitType: 'NAVY', nation: 'France', coast: null },
	{ location: 'PAR', unitType: 'ARMY', nation: 'France', coast: null },
	{ location: 'MAR', unitType: 'ARMY', nation: 'France', coast: null },
	{ location: 'KIE', unitType: 'NAVY', nation: 'Germany', coast: null },
	{ location: 'BER', unitType: 'ARMY', nation: 'Germany', coast: null },
	{ location: 'MUN', unitType: 'ARMY', nation: 'Germany', coast: null },
	{ location: 'VEN', unitType: 'ARMY', nation: 'Italy', coast: null },
	{ location: 'ROM', unitType: 'ARMY', nation: 'Italy', coast: null },
	{ location: 'NAP', unitType: 'NAVY', nation: 'Italy', coast: null },
	{ location: 'TRI', unitType: 'NAVY', nation: 'Austria', coast: null },
	{ location: 'VIE', unitType: 'ARMY', nation: 'Austria', coast: null },
	{ location: 'BUD', unitType: 'ARMY', nation: 'Austria', coast: null },
	{ location: 'CON', unitType: 'ARMY', nation: 'Turkey', coast: null },
	{ location: 'SMY', unitType: 'ARMY', nation: 'Turkey', coast: null },
	{ location: 'ANK', unitType: 'NAVY', nation: 'Turkey', coast: null },
	{ location: 'WAR', unitType: 'ARMY', nation: 'Russia', coast: null },
	{ location: 'MOS', unitType: 'ARMY', nation: 'Russia', coast: null },
	{ location: 'SEV', unitType: 'NAVY', nation: 'Russia', coast: null },
	{ location: 'STP', unitType: 'NAVY', nation: 'Russia', coast: 'SOUTH' },
]

const unitsString = initialUnits.map(({location, unitType, nation}) => `(
  '${unitType}',
(SELECT id FROM locations WHERE short_name = '${location}'), 
(SELECT id FROM countries WHERE name = '${nation}')
)
`).join()

const insertionString = `INSERT INTO units (unit_type, location_id, country_id) VALUES ${unitsString};`

console.log(insertionString)
pool.query(insertionString, (err, res) => {
  console.log('err', err, '\nres:', res)
  pool.end()
})

