const { prompt } = require('inquirer')
const api = function () {
    prompt([
      {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
      }
    ])


      .then(username => {
        console.log(username)
        for (const name in username) {
          axios.get(`https://api.github.com/users/${user[username]}`)
            .then(({ data }) => {
              // appendFileSync('index.html', username(data))


              //   writeFileSync('index.html', top)
              //     .then(() => {
              //       prompt(

              //       )
              // .then(username => {
              //   console.log(username)
              //   for (const name in username)
              //     axios.get('https://api.github.com/users/${user[name]}')
              //       .then(({ username }) => {

            })
          //       .catch(err => console.log(err))
        }
      })
      .catch(err => console.log(err))
  }
}

api()

module.exports = api;


