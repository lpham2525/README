const axios = require("axios")
const inquirer = require("inquirer")
const { writeFile, appendFile } = require('fs')
const { promisify } = require('util')
const writeToFile = promisify(writeFile)
// const questions = [
//   {
//     type: "input",
//     name: "github",
//     message: "What is your GitHub username?"
//   },
//   {
//     type: "input",
//     name: "title",
//     message: "What is your project's name?"
//   },
//   {
//     type: "input",
//     name: "description",
//     message: "Please write a short description of your project."
//   },
//   {
//     type: "list",
//     name: "license",
//     message: "What kind of license should your project have?",
//     choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
//   },
//   {
//     type: "input",
//     name: "installation",
//     message: "What command should be run to install dependencies?",
//     default: "npm i"
//   },
//   {
//     type: "input",
//     name: "test",
//     message: "What command should be run to run tests?",
//     default: "npm test"
//   },
//   {
//     type: "input",
//     name: "usage",
//     message: "What does the user need to know about using the repo?",
//   },
//   {
//     type: "input",
//     name: "contributing",
//     message: "What does the user need to know about contributing to the repo?",
//   }
// ]

// inquirer.prompt([
//   {
//     type: 'input',
//     name: 'username',
//     message: 'What is your Github username?'
//   }
// ])

// const api = {
//   getUser(username) {
//     return axios
//       .get(
//         `https://api.github.com/users/${username}`
//       )
//       .catch(error => {
//         console.log(error)
//       })
//   }
// }

// function init() {
//   inquirer.prompt(questions)
//     .then((inquirerResponses) => {
//       console.log('Searching...')
//       api
//       .getUser(inquirerResponses.github)
//         .then(({ data }) => {
//           writeToFile("README.md", generateMarkdown({ ...inquirerResponses, ...data }))
//         })
//     })
// }
// init()

// module.exports = api

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
    message: "What command should be run to run tests?",
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
const api = {
  getUser(username) {
    return axios
      .get(
        `https://api.github.com/users/${username}?client_id=${
        process.env.CLIENT_ID
        }&client_secret=${process.env.CLIENT_SECRET}`
      )
      .catch(err => {
        console.log(err)
      })
  }
}

function generateMarkdown(data) {
  return `
# ${data.title}
#  ${data.description}
# ${data.tableOfContents}
#${data.installation}
# ${data.usage}
#${data.license}
# ${data.contributing}
# ${data.tests}
# ${data.questions}
`
}

function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Searching...")
    api
      .getUser(inquirerResponses.github)
      .then(({ data }) => {
        writeToFile("README.md", generateMarkdown({ ...inquirerResponses, ...data }))
      })
  })
}
init()



