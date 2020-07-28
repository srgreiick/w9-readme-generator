const inquirer = require("inquirer");
const fs = require("fs");

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
    message: "Project Table-Of-Contents",
    name: "projTOC"
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
  ])
  .then(function(response){
    console.log("information accepted "+JSON.stringify(response))
    fs.writeFile("TestReadme.md", (response), function(err){
      if (err){
          return console.log(err);
      }
    });
  });

};




run();