const db = require('./db')

const testQuery = `SELECT * FROM users WHERE id = $1`

const testQueryVariables = [1]

db.query(testQuery, testQueryVariables).then(( data ) => console.log("data", data.rows[0]))
db.end()