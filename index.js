// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const generateMD = (answers) =>


`
${answers.license2}

# ${answers.Title}

## Description

${answers.describe}


|      [Install](#Install)      |    [Usage](#Usage)      |
| ------------------------------|-------------------------|
| [Contribution](#Contribution) |   [Testing](#Testing)   |
| ------------------------------|-------------------------|
|     [License](#License)       | [Questions](#Questions) |


## Install

    ${answers.install}


## Usage

    ${answers.usage}


## Contribution

    ${answers.contribution}


## Testing

    ${answers.test}


## License

${answers.license}

## Questions

if you have any questions you can contact me [here](${answers.user}) or email me [here](mailto:${answers.email})
`


inquirer
    .prompt([
        {
            type:'input',
            name: 'Title',
            message:'what is the name of your project?',
        },
        {
            type:'input',
            name: 'describe',
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
            name: 'contribution',
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
            choices:['MIT','Apache','GNU']
        },
        {
            type:'checkbox',
            name: 'license2',
            message:'what license?',
            choices:['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]','[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]','[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]']
        },
        {
            type:'input',
            name: 'user',
            message:'what is your GitHub link?',
        },
        {
            type:'input',
            name: 'email',
            message:'your email address?',
        },
    ])
    .then((answers) => {
        console.log('nextstep')

        const README = generateMD(answers);

        fs.writeFile ('README.md',README, (err) =>
        err ? console.log(err) : console.log("Readme successfully made!")
        );
    })

