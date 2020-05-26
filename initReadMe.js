
const initReadMe = function initReadMe (response) {
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

module.exports = {
    initReadMe: initReadMe,
    //response: response
}