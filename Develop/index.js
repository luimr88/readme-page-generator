const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions the user will answer to generate README file.
const promptQuestions = [
    {
        type: 'input',
        name: 'title',
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
        message: 'Enter a description for your project explaining the functionality of your project.',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('Please enter a project description!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please give instructions for installation, if there are none enter "none".',
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
        type: 'confirm',
        name: 'deployed',
        message: 'Is your project deployed on a github page?',
        default: false
    },
    {
        type: 'input',
        name: 'deployedLink',
        message: 'Please enter deployed webpage link:',
        when: ({ deployed }) => {
            if (deployed) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubRepo',
        message: 'Please enter the GitHub repository link for your project:',
        validate: repoLink => {
            if (repoLink) {
                return true;
            } else {
                console.log('Please enter the link of your GitHub repository!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What licenses would you like to include? (Check all that apply)',
        choices: ['Apache-2.0', 'BSD-3-Clause', 'BSD 2-Clause', 'EPL-1.0', 'IPL-1.0', 'ISC', 'MIT', 'MPL-2.0', 'Artistic-2.0', 'OFL-1.1']
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
        name: 'emailInput',
        message: 'Enter your email:',
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

// Function that will write file.
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// Function that starts the generator.
function init() {
    inquirer.prompt(promptQuestions)
        .then(responseData => {
            console.log('Creating README')
            return writeToFile('./dist/README.md', generateMarkdown(responseData))
        })
        .catch(err => console.log(err));
}

// Function call to initialize app
init();
