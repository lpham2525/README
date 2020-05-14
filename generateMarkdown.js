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
# ${user.avatar_url}
# ${user.email}
`
}

module.exports = generateMarkdown
