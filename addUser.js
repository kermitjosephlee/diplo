const db = require('./db')
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


function addUserPrompt() {
  rl.question("What is the first name of the new user? ", (firstName) => {
    if(!firstName || firstName === ''){
      console.log('You did not enter a value for the first name of the new user. Try again.')
      rl.close()
    }

    rl.question(`What is new user ${firstName}'s last name? `, (lastName) => {
      if(!lastName || lastName === ''){
        console.log(`You did not enter a value for ${firstName}'s last name. Try again.`)
        rl.close()
      }

      rl.question(`What is the unique user name for ${firstName} ${lastName}? `, (userName) => {
        if (!userName || userName === ''){
          console.log(`You did not enter a value for ${firstName} ${lastName}'s user name. Try again.`)
          rl.close()
        }

        rl.question(`What is the password ${firstName} ${lastName} would like to use for this account? `, (passwordA) => {
          if(!passwordA || passwordA === ''){
            console.log(`You did not enter a value for ${firstName} ${lastName}'s password. Try again.`)
            rl.close()
          }
          if(passwordA.length < 7){
            console.log('Your password was not long enough. Passwords have to be 8 characters or greater. Try again')
            rl.close()
          }
          rl.question(`Verify the password by entering it again: `, (passwordB) => {
            if(!passwordB || passwordB === ''){
              console.log(`You did not enter a value for ${firstName} ${lastName}'s password. Try again.`)
              rl.close()
            }
            if(passwordA !== passwordB){
              console.log('Your passwords do not match. Try again.')
              rl.close()
            }

            rl.question(`What is ${firstName} ${lastName}'s email address? `, (email) => {
              if(!email || email === ''){
                console.log(`You did not enter a value for ${firstName} ${lastName}'s email. Try again.`)
                rl.close()
              }
              rl.question(`Please confirm the following: \nFirst Name: ${firstName}\nLast Name: ${lastName}\nUser Name: ${userName}\nEmail: ${email}`, () => {

                const insertQuery = `INSERT INTO users (first_name, last_name, user_name, password, email) VALUES ($1, $2, $3, $4, $5) RETURNING *;`
                const variables = [firstName, lastName, userName, passwordA, email]

                db.query(insertQuery, variables).then(data => console.log(data)).catch(e => console.log(e)).finally(() => db.end());
                rl.close()
              })
            })
          })
        } )
      })
    })
  })
}

addUserPrompt();
