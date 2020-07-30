const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./mDController/readmeTemplate")


//initializer
function run() {
    

inquirer
.prompt([
    {
    type: "input",
    message: "Enter Project Name:",
    name: "projName"
    },
    {    
    type: "input",
    message: "Project Description, please describe your project here:",
    name: "projDesc"
    },
    {
    type: "input",
    message: "Please include a screen shot of functioning app, enter file path here:",
    name: "projScrSht"
    },
    {
    type: "input",
    message: "Installation Instructions. Please describe how to install this app:",
    name: "projInst"
    },
    {
    type: "input",
    message: "Usage Instructions. Please describe how to use this app:",
    name: "projUsage"
    },
    {
    type: "input",
    message: "If contributions are allowed, enter guidelines here:",
    name: "projContr",
    },

    {
    type: "input",
    message: "Describe how to run tests on your application:",
    name: "projTests",
    },
    {
    type: "list",
    message: "Which kind of license would you like for this application?:",
    name: "license",
    choices: ["AGPLv3", "GPLv3", "LGPLv3", "MPL 2.0", "Apache 2.0", "MIT", "Boost 1.0", "PDDL"]
    },
    {
    type: "input",
    message: "Please provide and email address for users with inquiries or questions:",
    name: "email"
    }
  ])
  .then(function(response){
    console.log("information accepted "+JSON.stringify(response))
    fs.writeFile("TestReadme.md", generateMarkdown(response), function(error){
      
      
      
      if (error){
          return console.log(error);
      }
    });
  });

};




run();