// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log("Inside generate markdown funciton.  Data.title is: " + data.title + "Data.desc is: " + data.description);
  return `# ${data.title} 
  \n## Description
  \n ${data.description}
  \n## Table of Contents
  \n* [Installation](#Installation)
  \n* [Usage](#Usage)
  \n* [Contributions](#Contributions)
  \n* [Tests](#Tests)
  \n* [Questions](#Questions)
  \n## Installation
  \n ${data.installation}
  \n## Usage
  \n ${data.usage}
  \n## Contributions
  \n ${data.contrib}
  \n## Test Instructions
  \n ${data.test}
  \n## Questions
  \n https://github.com/${data.userName}  Email: ${data.email}

`;
}

module.exports = generateMarkdown;