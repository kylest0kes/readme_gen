const inquirer = require("inquirer");
const fs = require("fs");  
const { prompts } = require("./prompts.js");
const { initReadMe } = require("./initReadMe.js")


inquirer
    .prompt(prompts).then(function(response) {
      fs.writeFile("README.md", initReadMe(response), function(err) {
        if (err) {
          return console.log(err);
        }
      })
    })

 
    
