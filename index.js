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
        name: "projectname"
      },
      {
        type: "input",
        message: "Please write a short desciption about your project.",
        name: "description"
      },
      {
        type: "list", 
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        name: "license"
      },
      {
        type: "input", 
        message: "What command should be run to install dependencies?",
        default: "npm i",
        name: "installcommand"
      },
      {
        type: "input", 
        message: "What command should be run to run tests?",
        default: "npm test",
        name: "testcommand"
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

function initReadMe(response) {
const readMe = `
# ${response.projectname}
[![GitHub license](https://img.shields.io/badge/license-${response.license}-important.svg)](${response.url})

## Description

${response.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install the necessary dependencies, run the following command:

${response.installcommand}

## Usage

${response.usage}

## License

This project is licensed under the ${response.license} license.

## Contributing

${response.contribution}

## Tests

To run tests, run the following command:

${response.testcommand}

## Questions

If you have any questions about the repo, you can open an issue, or contact ${response.username} directly at ${response.email}.
`
  return readMe;
}