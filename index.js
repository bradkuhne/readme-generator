// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project',
            validate: descriptInput => {
                if (descriptInput) {
                    return true;
                } else {
                    console.log('Please enter your project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter intallation instructions: ',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter the installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe the usage of this project: ',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter the usage description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contrib',
            message: 'Describe contributions made to the project: ',
            validate: contribInput => {
                if (contribInput) {
                    return true;
                } else {
                    console.log('Please enter contributions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Describe how to test the project : ',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter test instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'userName',
            message: 'What is your GitHub username : ',
            validate: userNameInput => {
                if (userNameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address : ',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address');
                    return false;
                }
            }
        },
    ])
        .then((answers) => {
            // console.log(answers);
            // generateMarkdown(answers);
            console.log(generateMarkdown(answers));
            const userAnswers = generateMarkdown(answers);
            const fileName = './dist/generatedReadMe.md'
            writeToFile(fileName, userAnswers);
        })
};
// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    console.log("Inside writeToFile" + "File name: " + fileName);
    // writing files
    fs.writeFile(fileName, data, err => {
            if (err) {
                return console.log(err);
        }
        console.log("The readme file has been successfully generated!");
    });
}


// TODO: Create a function to initialize app
function init() {
    questions();


};

// Function call to initialize app
init();