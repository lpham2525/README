const axios = require('axios')
const { prompt } = require('inquirer')
const { writeFile, appendFile } = require('fs')
const { promisify } = require('util')
const writeFileSync = promisify(writeFile)
let inquirerResponses = ''
const api = require('./api')
const generateMarkdown = require('./generateMarkdown')

const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's name?"
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project"
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm i"
  },
  {
    type: "input",
    name: "test",
    message: "What command should be used to run tests?",
    default: "npm test"
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
  }
]

function init() {
  prompt(questions).then((inquirerResponses) => {
    console.log(inquirerResponses)
    api
      .getUser(inquirerResponses.github)
      .then(({ data }) => {
        writeFileSync("README.md", generateMarkdown(inquirerResponses, data))
          .then(() => {
          })
          .catch(err => console.log(err))
      })
  })
}
init()