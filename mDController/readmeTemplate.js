// function to generate markdown for README

//The structure here was adapted from dilan and wyatt's code on this project, thank you guys.
function generateMarkdown(userInput) {
    const licenseEdit = userInput.license.replace(" ", "%20");
    return `
### Project Name
# ${userInput.projName} asdf
## Description
${userInput.projDesc}  
## Table of Contents  
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)  
## Media
![Screenshot](${userInput.projScrSht})  
## Installation  
${userInput.projInst}
## Usage
${userInput.projUsage}
## Contributing
${userInput.projContr}
## Tests
${userInput.projTests}  
## License
This application is covered under the ${userInput.license} license.

![License: ${userInput.license}](https://img.shields.io/badge/License-${licenseEdit}-blue.svg)
## Questions
Please send questions or inquiries to: ${userInput.email}
`;
    }

//Export function so it can be used by index.html  
  module.exports = generateMarkdown;