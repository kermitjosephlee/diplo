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
	{ location: 'STP', unitType: 'NAVY', nation: 'Russia', coast: 'SOUTH' }
]

const stPetersbergUpdateString = `
	UPDATE initial_units SET 
		coast_id = (
			SELECT id FROM coasts WHERE location_id = (
				SELECT id FROM locations WHERE short_name = 'STP' AND position = 'SOUTH'
			)
		)
		WHERE location_id = (SELECT id FROM locations WHERE short_name = 'STP')
	;
`

const unitsString = initialUnits.map(({location, unitType, nation, coast = null}) => `(
(SELECT id FROM unit_types WHERE unit_type = '${unitType}'),
(SELECT id FROM locations WHERE short_name = '${location}'), 
(SELECT id FROM countries WHERE name = '${nation}'),
NULL
)`).join()




const insertUnitsString = `INSERT INTO initial_units (unit_type_id, location_id, country_id, coast_id) VALUES ${unitsString}; ${stPetersbergUpdateString}`


exports.insertUnitsString = insertUnitsString;
