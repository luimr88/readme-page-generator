// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const promptQuestions = [
        {
            type: 'input',
            name: 'project title',
            message: 'What is your project title?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project',
            validate: description => {
                if (description) {
                    return true;
                } else {
                    console.log('Please describe your project!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please give instructions for installation',
            validate: instructions => {
                if (instructions) {
                    return true;
                } else {
                    console.log('Please give instructions on how to install your project!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is your project used? What is it used for?',
            validate: usage => {
                if (usage) {
                    return true;
                } else {
                    console.log('Please provide usage information for your project!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are your guidelines for future contributions?',
            validate: contributions => {
                if (contributions) {
                    return true;
                } else {
                    console.log('Please list some guidelines!');
                    return false
                }
            }
        },
        {
            type: 'testing',
            name: 'testing',
            message: 'Please provide instructions for testing your project',
            validate: testing => {
                if (testing) {
                    return true;
                } else {
                    console.log('Please tell us how to test your project!');
                    return false
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What licenses would you like to include? (Check all that apply)',
            choices: ['Apache', 'Boost', 'BSD', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Perl', 'SIL', 'WTFPL']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?',
            validate: github => {
                if (github) {
                    return true
                } else {
                    console.log('Please write your Github username!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: email => {
                if (email) {
                    return true 
                } else {
                    console.log('Please provide your email address!');
                    return false
                }
            }
        }
    ]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(promptQuestions).then(responseData =>
    writeToFile('readMe.md', generateMarkdown(responseData)))
}

// Function call to initialize app
init();
