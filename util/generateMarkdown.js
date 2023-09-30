// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function generateLicenseBadge(data) {
  let badge;

  switch (data.license)
  {
    case 'Apache 2.0':
      badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      break;
    case 'BSD 3-Clause':
      badge = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
      break;
    case 'BSD 2-Clause':
      badge = '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)';
      break;
    case 'GNU GPL v3':
      badge = '![License](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;
    case 'GNU GPL v2':
      badge = '![License](https://img.shields.io/badge/License-GPL_v2-blue.svg)';
      break;
    case 'MIT':
      badge = '![License](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'Mozilla Public License 2.0':
      badge = '![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
      break;
    case 'IBM Public License Version 1.0':
      badge = '![License](https://img.shields.io/badge/License-IPL_1.0-blue.svg)';
      break;      
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function getLicenseLink(data) {
  let link;

  switch (data.license)
  {
    case 'Apache 2.0':
      link = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'BSD 3-Clause':
      link = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'BSD 2-Clause':
      link = 'https://opensource.org/licenses/BSD-2-Clause';
      break;
    case 'GNU GPL v3':
      link = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'GNU GPL v2':
      link = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
      break;
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'Mozilla Public License 2.0':
      link = 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'IBM Public License Version 1.0':
      link = 'https://opensource.org/licenses/IPL-1.0';
      break;      
  }

  return link;


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function generateLicenseSection(data) {
  let license = '## License\n';
  license += `This application is covered under ${data.license}.  \n`;
  
  let link = getLicenseLink(data);
  license += `Please refer to ${link} for details about this license.\n`;

  return license;
}

// TODO: Create a function to generate markdown for README
function generateTitle(data) {
  return `# ${data.title}`;
}

function generateDescription(data) {
  let description = '## Description\n';
  description += `${data.description}\n`;
  return description;
}

function generateInstallation(data) {
  let install = '## Installation\n';
  install += `${data.install}\n`;
  return install;
}

function generateUsage(data) {
  let usage = '## Usage\n';
  usage += `${data.usage}\n`;
  return usage;
}

function generateContribute(data) {
  let contribute = '## Contributing\n';
  contribute += `${data.contribution}\n`;
  return contribute;
}

function generateTest(data) {
  let testing = '## Tests\n';
  testing += `${data.test}\n`;
  return testing;
}

function generateQuestion(data) {
  let question = '## Questions\n';
  question += `${data.gitUser} `;
  question += `(https://github.com/${data.gitUser})  `;
  question += '\n';
  question += `Please reach out to ${data.email} if you have any question.`
  return question;
}

function generateTOC(data) {
  let toc = '## Table of Contents\n';
  toc += '* [Description](#description) \n';
  toc += '* [Installation](#installation) \n';
  toc += '* [Usage](#usage) \n';
  toc += '* [Contributing](#contributing) \n';
  toc += '* [Tests](#tests) \n';
  toc += '* [License](#license) \n';
  toc += '* [Questions](#questions) \n'

  return toc;
}


module.exports = {
  generateTitle,
  generateDescription,
  generateInstallation,
  generateUsage,
  generateContribute,
  generateTest,
  generateLicenseBadge,
  generateLicenseSection,
  generateQuestion,
  generateTOC
};
