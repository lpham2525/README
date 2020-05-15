function generateMarkdown(inquirerResponses, data) {
  return `

  [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
  ----------------------------------------------------------------------------------
# ${ inquirerResponses.title}
=================================================
###  ${ inquirerResponses.description}
----------------------------------------------------------------
#${ inquirerResponses.installation}

# ${ inquirerResponses.usage}

#${ inquirerResponses.license}

# ${ inquirerResponses.contributing}

# ${ inquirerResponses.test}

# ${ inquirerResponses.questions}

[![Profile-picture](${data.avatar_url})]]

# ${data.email}
  `
}

module.exports = generateMarkdown
