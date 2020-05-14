const axios = require('axios')
const { prompt } = require('inquirer')
const name = ''
const { writeFile, appendFile } = require('fs')
const { promisify } = require('util')
const writeFileSync = promisify(writeFile)

// prompt([
//   {
//     type: 'input',
//     name: 'username',
//     message: 'What is your GitHub username?'
//   }
// ])
//   .then(username => {
//     console.log(username)
//     for (const name in username)
//     console.log(username[name])
//     axios.get(`https://api.github.com/users/${username[name]}`)
//       .then(({ data }) => {
//         console.log(data.avatar_url)
//         console.log(data.email)
//   })
//   .catch(err =>
//     console.log(err)
//   )

//   })
//   .catch(err => (
//     console.log(err)
//   ))

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
        console.log(`User not found`)
        process.exit(1)
      })
  }
}


function init() {
  prompt(questions).then((inquirerResponses) => {
    console.log("Searching...")
    api
    .getUser(inquirerResponses.github)
    .then(({ data }) => {
      writeFile("README.md", generateMarkdown({ ...inquirerResponses, ...data }))
    })
  })
}
init()

function generateMarkdown({ data }) {
  return `

  [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
  ----------------------------------------------------------------------------------
# ${ data.title}
=================================================
###  ${ data.description}
----------------------------------------------------------------------------------
## ${ data.tableOfContents}
=================================================
#${ data.installation}

# ${ data.usage}

#${ data.license}

# ${ data.contributing}

# ${ data.tests}

# ${ data.questions}

<img src ="${user.avatar_url}" alt ="$(user.username)">

# ${user.email}
  `
}