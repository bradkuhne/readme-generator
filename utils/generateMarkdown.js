// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    console.log ("This is the license that needs to be rendered: " + license);
    switch(license) {
        case "GNU AGPLv3":
            licenseBadge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
            return licenseBadge;
        case "GNU GPLv3":
            licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
            return licenseBadge;
        case "GNU LGPLv3":
            licenseBadge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
            return licenseBadge;
        case "Mozilla Public License 2.0":
            licenseBadge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"
            return licenseBadge; 
        case "Apache License 2.0":
            licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            return licenseBadge; 
        case "MIT License":
            licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            return licenseBadge;
        case "Boost Software License 1.0":
            licenseBadge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
            return licenseBadge;
        case "The Unlicense":
            licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
            return licenseBadge;
        case " ":
        licenseBadge = "No license available"
        return licenseBadge;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    switch(license) {
        case "GNU AGPLv3":
            licenseDesc = "The GNU Affero General Public License is a free, copyleft license for software and other kinds of works, specifically designed to ensure cooperation with the community in the case of network server software. The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, our General Public Licenses are intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users."
            return licenseDesc;
        case "GNU GPLv3":
            licenseDesc = "The GNU General Public License is a free, copyleft license for software and other kinds of works.  The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too."
            return licenseDesc;
        case "GNU LGPLv3":
            licenseDesc = "The GNU General Public License is a free, copyleft license for software and other kinds of works. The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too."
            return licenseDesc;
        case "Mozilla Public License 2.0":
            licenseDesc = "All distribution of Covered Software in Source Code Form, including any Modifications that You create or to which You contribute, must be under the terms of this License. You must inform recipients that the Source Code Form of the Covered Software is governed by the terms of this License, and how they can obtain a copy of this License. You may not attempt to alter or restrict the recipients rights in the Source Code Form."
            return licenseDesc; 
        case "Apache License 2.0":
            licenseDesc = "Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form."
            return licenseDesc; 
        case "MIT License":
            licenseDesc = "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."
            return licenseDesc;
        case "Boost Software License 1.0":
            licenseDesc = "Permission is hereby granted, free of charge, to any person or organization obtaining a copy of the software and accompanying documentation covered by this license (the Software) to use, reproduce, display, distribute, execute, and transmit the Software, and to prepare derivative works of the Software, and to permit third-parties to whom the Software is furnished to do so, all subject to the following: The copyright notices in the Software and this entire statement, including the above license grant, this restriction and the following disclaimer, must be included in all copies of the Software, in whole or in part, and all derivative works of the Software, unless such copies or derivative works are solely in the form of machine-executable object code generated by a source language processor."
            return licenseDesc;
        case "The Unlicense":
            licenseDesc = "The Unlicense is a template for disclaiming copyright monopoly interest in software you've written; in other words, it is a template for dedicating your software to the public domain. It combines a copyright waiver patterned after the very successful public domain SQLite project with the no-warranty statement from the widely-used MIT/X11 license."
            return licenseDesc;
        case " ":
            licenseDesc = "No license available"
        return licenseDesc;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    renderLicenseLink(data.license);
    renderLicenseSection(data.license);
    console.log("Inside generate markdown funciton.  Data.title is: " + data.title + "Data.desc is: " + data.description);
  return `# ${data.title} 
  \n## Description
  \n ${data.description}
  \n## License
  \n ${licenseBadge}
  \n ${licenseDesc}
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