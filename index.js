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
        }
    ])
        .then((answers) => {
            console.log(answers);
            generateMarkdown(answers);
            console.log(generateMarkdown(answers));
            const title = generateMarkdown(answers);
            return title;
        })
        .then((title) => {
            const fileName = "trialMD"
            writeToFile(fileName, title);
        })

};


// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    console.log("Inside writeToFile" + "File name: " + fileName + "   Title: " + data);
    // writing files
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/generatedReadMe.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'ReadMe File has been created!'
            });
        });
        console.log ("The readme file has been generated!");
    });
};


// TODO: Create a function to initialize app
function init() {
    questions();


};

// Function call to initialize app
init();