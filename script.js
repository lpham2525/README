const axios = require('axios')
const { prompt } = require('inquirer')
const name = ''

prompt([
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
  }
])
  .then(username => {
    console.log(username)
    for (const name in username)
    console.log(username[name])
    axios.get(`https://api.github.com/users/${username[name]}`)
      .then(({ data }) => {
        console.log(data.avatar_url)
        console.log(data.email)
  })
  .catch(err =>
    console.log(err)
  )

  })
  .catch(err => (
    console.log(err)
  ))