// function to generate markdown for README
function generateMarkdown(userInput) {
    return `
##Project Name
${userInput.projName}
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
![Screenshot](${userInput.screenshot})  
## Installation  
${userInput.projInstallation}
## Usage
${userInput.usage}
## Contributing
${userInput.contribution}
## Tests
${userInput.tests}  
## License
This application is covered under the ${userInput.license} license.
## Questions
Please contact me for any aditional questions.  
GitHub: https://github.com/${userInput.github}  
Email: ${userInput.email}
`;
    }
     
  
  module.exports = generateMarkdown;