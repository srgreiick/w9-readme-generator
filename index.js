const inquirer = require("inquirer");
const fs = require("fs");

inquirer
.prompt([
{    type: "input",
    message: "Project Name",
    name: "prodName"}
  ]);
 
