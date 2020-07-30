const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./mDController/readmeTemplate")


//initializer
function run() {
    

inquirer
.prompt([
    {
    type: "input",
    message: "Project Name",
    name: "projName"
    },
    {    
    type: "input",
    message: "Project Description",
    name: "projDesc"
    },
    {
    type: "input",
    message: "Installation Instructions. Please describe installation process",
    name: "projInstallation"
    },
    {
    type: "input",
    message: "Usage Instructions. Please discide how to use this app",
    name: "projUsage"
    },
    {
    type: "input",
    message: "Usage Instructions. Please discide how to use this app",
    name: "projUsage"
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