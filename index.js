// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type:'input',
            name: 'Title',
            message:'what is the name of your project?',
        },
        {
            type:'input',
            name: 'link',
            message:'what is your project about?',
        },
        {
            type:'input',
            name: 'install',
            message:'how do you install your project?',
        },
        {
            type:'input',
            name: 'usage',
            message:"how do you use it?",
        },
        {
            type:'input',
            name: 'contrabution',
            message:'how can they contribute?',
        },
        {
            type:'input',
            name: 'test',
            message:'how can they test it?',
        },
        {
            type:'checkbox',
            name: 'license',
            message:'what license?',
            choices:['MIT','Apache','GNU general public']
        },
        {
            type:'input',
            name: 'user',
            message:'what is your GitHub username?',
        },
        {
            type:'input',
            name: 'email',
            message:'your email address?',
        },
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
