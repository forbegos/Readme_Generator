const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "What was your motivation to build this project?",
      name: "motivation",
    },
    {
      type: "input",
      message: "What problem does your project solve?",
      name: "problemSolved",
    },
    {
      type: "input",
      message: "What did you learn making this project?",
      name: "learned",
    },
    {
      type: "input",
      message: "Describe the installation steps for this project:",
      name: "installation",
    },
    {
      type: "input",
      message: "Describe how to use this program:",
      name: "usage",
    },
    {
      type: "input",
      message: "Enter the path to a project screen shot",
      name: "screenShot",
    },
    {
      type: "input",
      message: "Who built this project?",
      name: "credits",
    },

    {
      type: "checkbox",
      message: "What is the type of license of this project?",
      choices: [
        "GNU",
        "MIT",
        "Mozilla Public License 2.0	",
        "Creative Commons",
        "Artistic License",
      ],
      name: "license",
    },

    {
      type: "input",
      message: "What is your Github username?",
      name: "github",
    },

    { type: "input", message: "Please enter your email: ", name: "email" },
  ])
  .then((response) => {
    fs.writeFile("readme.md", buildReadme(response), (err) =>
      err
        ? console.log(err)
        : console.log("readme.md file built and saved succesfully!")
    );
  });

function buildReadme(response) {
  let lic = "";
  console.log(response.license[0]);

  switch (response.license[0]) {
    case "GNU":
      lic =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "MIT":
      lic =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla Public License 2.0":
      lic =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Creative Commons":
      lic =
        "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "Artistic License":
      lic =
        "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
      break;
    default:
      lic = "Not Defined";
  }

  let readme = `        
# ${response.title}    

## Description

This project was built ${response.motivation}. This projects solves the problem of ${response.problemSolved}. 
During the development of this project, one of the things I learned was ${response.learned}.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${response.installation}

## Usage

${response.usage}

![](${response.screenShot})

## Credits

${response.credits}

## Github Repository

https://www.github.com/${response.github}

## Contact Information

${response.email}

## License: 
## ${lic}\n`;

  return readme;
}
