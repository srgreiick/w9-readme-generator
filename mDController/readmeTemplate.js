// function to generate markdown for README
function generateMarkdown(userInput) {
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
## Questions
Please send questions or inquiries to: ${userInput.email}
`;
    }
     
  
  module.exports = generateMarkdown;