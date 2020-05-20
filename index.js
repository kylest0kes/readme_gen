const inquirer = require("inquirer");
const fs = require("fs");  

const promptUser = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email"
      },
      {
        type: "input",
        message: "What is the URL to your project?",
        name: "url"
      },
      {
        type: "input",
        message: "What is your project name?",
        name: "project-name"
      },
      {
        type: "input",
        message: "Please write a short desciption about your project.",
        name: "description"
      },
      {
        type: "input", //dropdown with all license types
        message: "What kind of license should your project have?",
        name: "license"
      },
      {
        type: "input", //default to npm i
        message: "What command should be run to install dependencies?",
        name: "install-command"
      },
      {
        type: "input", //default to npm test
        message: "What command should be run to run tests?",
        name: "test-command"
      },
      {
        type: "input", 
        message: "What does the user need to know about using the repo?",
        name: "usage"
      },
      {
        type: "input", 
        message: "What does the user need to know about contributing to the repo?",
        name: "contribution"
      },
];


inquirer
    .prompt(promptUser).then(function(response) {
        fs.writeFile("README.md", initReadMe(response), function(err) {
            if (err) {
                return console.log(err);
            }

        })

    })

function initReadMe (response) {
    const readMe = ``
}