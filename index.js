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
  ])
  .then((response) => {
    console.log(buildReadme(response));
  });

function buildReadme(response) {
  let readme = `        
# ${response.title}    

## Description

This project was built becuase ${response.motivation}. This projects solves the problem of ${response.problemSolved}. 
During the development of this project, one of the things I learned was ${response.learned}.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

## Usage

![](assets/images/screenshot.png)

## Credits

## License

## The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.`;
  return readme;
}
