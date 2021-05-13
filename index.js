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
        "zLib License",
        "Creative Commons",
        "Artistic License",
      ],
      name: "license",
    },
  ])
  .then((response) => {
    fs.writeFile("readme.md", buildReadme(response), (err) =>
      err
        ? console.log(err)
        : console.log("readme.md file built and saved succesfully!")
    );
  });

function buildReadme(response) {
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

## License -> ${response.license}`;
  return readme;
}
