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
            const fileName = './dist/generatedReadMe.md'
            writeToFile(fileName, title);
        })

};
// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    console.log("Inside writeToFile" + "File name: " + fileName + "   Title: " + data);
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