// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMD = require('./util/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, response) {
    let readmefileBuffer = "";

//    console.log(response.title);

    let title = genMD.generateTitle(response);
    title += '    ';    
    title += genMD.generateLicenseBadge(response);
    title += '\n';    
    readmefileBuffer += title;

    let description = genMD.generateDescription(response);
    readmefileBuffer += description;

    let toc = genMD.generateTOC(response);
    toc += '\n';
    readmefileBuffer += toc;

    let install = genMD.generateInstallation(response);
    readmefileBuffer += install;

    let usage = genMD.generateUsage(response);
    readmefileBuffer += usage;

    let contribute = genMD.generateContribute(response);
    readmefileBuffer += contribute;

    let test = genMD.generateTest(response);
    readmefileBuffer += test;

    let license = genMD.generateLicenseSection(response);
    readmefileBuffer += license;

    let question = genMD.generateQuestion(response);
    readmefileBuffer += question;

    fs.appendFile(fileName, readmefileBuffer, (err) => err ? console.error(err): console.log('./output/README.md Created!'));    

}

// inquire handler
function inquireHandler() {

    inquirer
    .prompt([
      {
        type: 'input',
        message: 'Project title: ',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Description: ',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Installation instructions: ',
        name: 'install',
      },    
      {
        type: 'input',
        message: 'Usage information: ',
        name: 'usage',
      },    
      {
        type: 'input',
        message: 'Contribution guidelines: ',
        name: 'contribution',
      },    
      {
        type: 'input',
        message: 'Test instructions: ',
        name: 'test',
      },    
      {
        type: 'list',
        message: "Software license: ",
        name: "license",
        choices: ["Apache 2.0", "BSD 3-Clause", "BSD 2-Clause", "GNU GPL v3", "GNU GPL v2", "MIT", "Mozilla Public License 2.0", "IBM Public License Version 1.0"]
        },    
      {
        type: 'input',
        message: 'GitHub username: ',
        name: 'gitUser',
      },    
      {
        type: 'input',
        message: 'email: ',
        name: 'email',
      },    

    ])
    .then((response) =>{
//        console.log(response);
        writeToFile('./output/README.md', response);
  });
      
}

// empty README.md
function init()
{
    fs.writeFile('./output/README.md', '', (err) =>
    err ? console.error(err) : console.log(''));
}

// Function call to initialize app
init();
inquireHandler();

