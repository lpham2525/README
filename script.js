const axios = require('axios')
const { prompt } = require('inquirer')
const { writeFile } = require('fs')
const { promisify } = require('util')
const writeFileSync = promisify(writeFile)
const username = ''
const name = ''
const questions = ["What is the title of your project?", "What is the description of your project?", "What is the table of contents for your project?", "How was your project installed?", "How is your project used?", "What is your project licensed under?", "How is your project contributing to the world of web development?", "What kind of testing has your project been through?"]

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
        console.log(err))
  }
  )
  .catch(err =>
    console.log(err))


prompt([
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
  }
  {
    type: 'input',
    name: 'title',
    message: "What is the title of your project?"
  },
  {
    type: 'input',
    name: 'description',
    message: "What is the description of your project?"
  },
  {
    type: 'input',
    name: 'tableofContents',
    message: "What is the table of contents for your project?"
  },
  {
    type: 'input',
    name: 'installation',
    message: "What command is needed to install your project?"
  },
  {
    type: 'input',
    name: 'usage',
    message: "What do users need to know to use your project?"
  },
  {
    type: 'input',
    name: 'license',
    message: "What is your project licensed under?"
  },
  {
    type: 'input',
    name: 'contributing',
    message: "How could users contribute to your project?"
  },
  {
    type: 'input',
    name: 'tests',
    message: "What command is used to run tests on your project?"
  },
])

function init() {
  inquirer.prompt(questions)
    .then((inquirerResponses) => {
      console.log("Searching...")
      api
        .getUser(inquirerResponses.github)
        .then(({ data }) => {
          function writeToFile(fileName, data) {
            writeToFile("README.md", generateMarkdown({ ...inquirerResponses, ...data }))
          }
        })
    }
    )
}
init()