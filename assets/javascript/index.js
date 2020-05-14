const axios = require('axios')
const { prompt } = require('inquirer')
const { writeFile, appendFile } = require('fs')
const { promisify } = require('util')
const writeFileSync = promisify(writeFile)
const questions = ["What is the title of your project?", "What is the description of your project?", "What is the table of contents for your project?", "How was your project installed?", "How is your project used?", "What is your project licensed under?", "How is your project contributing to the world of web development?", "What kind of testing has your project been through?"]
const appendFileSync = promisify(appendFile)

const username = data => {
  return `
  <div>
<h1># ${ data.title}</h1>
<p>#  ${ data.description}</p >
<h2># ${ data.tableOfContents}</h2>
<p>#${ data.installation}</p >
<p># ${ data.usage}</p >
<p>#${ data.license}</p >
<p># ${ data.contributing}</p >
<p># ${ data.tests}</p >
<p># ${ data.questions}</p >
<img src ="${user.avatar_url}" alt ="$(user.username)">
<p># ${user.email}</p>
  </div>
  `
}

function writeToFile(fileName, data) {
  writeFileSync('user.html', top)
    .then(() => {
      prompt([
        {
          type: 'input',
          name: 'Project Title',
          message: "What is the title of your project?"
        },
        {
          type: 'input',
          name: 'Description',
          message: "What is the description of your project?"
        },
        {
          type: 'input',
          name: 'Table of Contents',
          message: "What is the table of contents for your project?"
        },
        {
          type: 'input',
          name: 'Installation',
          message: "How was your project installed?"
        },
        {
          type: 'input',
          name: 'Usage',
          message: "How is your project used?"
        },
        {
          type: 'input',
          name: 'License',
          message: "What is your project licensed under?"
        },
        {
          type: 'input',
          name: 'Contributing',
          message: "How is your project contributing to the world of web development?"
        },
        {
          type: 'input',
          name: 'Tests',
          message: "What kind of testing has your project been through?"
        },
      ])
}

function init() {

}

init()
