const inquirer = require("inquirer");
const fs = require("fs");

//initializer
function run() {
    

inquirer
.prompt([
    {
    type: "input",
    message: "Project Name",
    name: "prodName"
    },
    {    
    type: "input",
    message: "Project Description",
    name: "prodDesc"
    },
    {    
    type: "input",
    message: "Project Table-Of-Contents",
    name: "prodTOC"
    },
    {
    type: "input",
    message: "Project Description",
    name: "prodDesc"
    },
  ]);
 

};

run();