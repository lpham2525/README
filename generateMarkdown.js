function generateMarkdown(inquirerResponses, data) {
  return `

  [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
  ----------------------------------------------------------------------------------
# Title: ${ inquirerResponses.title}
----------------------------------------------------------------
###  Description: ${ inquirerResponses.description}
----------------------------------------------------------------
##Demo: [![readme-gif]./README.gif]]

##Table of Contents
----------------------------------------------------------------

 *Installation: ${ inquirerResponses.installation}
 ----------------------------------------------------------

 *Usage:${ inquirerResponses.usage}
-----------------------------------------------------------
 *License: ${ inquirerResponses.license}
------------------------------------------------------------
 *Contributing: ${ inquirerResponses.contributing}
------------------------------------------------------------
 *Test: ${ inquirerResponses.test}
--------------------------------------------------------
###Questions? 
-------------------------------------------------
*[![Profile-picture](${data.avatar_url})]]
----------------------------------------------------
###Email: ${data.email}

###Made by LanChi Pham, &copy;Copyright 2020
  `
}

module.exports = generateMarkdown