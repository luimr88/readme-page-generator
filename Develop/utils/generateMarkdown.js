// Function creates a badge for the license the user selected.
function renderLicenseBadge(license) {
  if (license) {
    return `![License: ${license}](https://img.shields.io/badge/License-${String(license).replace('-', '_')}-success)`
  }
  return ''
}

// Function gives a link with information about the license.
function renderLicenseLink(license) {
  if (license) {
    return `[For more information about the License](https://opensource.org/licenses/${license})`
  }
  return ''
}

// Creates the section in the readme file.
function renderLicenseSection(license) {
  if (license) {
    return `## License`
  }
  return ''
}

// Creates the table of contents section for license.
function renderLicenseContent(license) {
  if (license) {
    return `[License](#license)`
  }
  return ''
}

// Creates a deployed link for a webpage.
function generateLink(deployText) {
  if (!deployText) {
    return '';
  }
  return `## Webpage Deployment
  ${deployText}`;
}

// Creates the table of contents section for the deployed link.
function renderLinkContent(deployText) {
  if (deployText) {
    return `[Webpage Deployment](#webpage-deployment)`
  }
  return ''
}

// Function that creates the README file.
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#installation)

  [Usage](#usage)

  [Contributions](#contributions)

  [Testing](#testing)
  
  ${renderLinkContent(data.deployedLink)}

  [GitHub Repo](#github-repository)

  ${renderLicenseContent(data.license)}

  [Contact](#contact)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contribution}

  ## Testing
  ${data.testing}

  ${generateLink(data.deployedLink)}

  ## GitHub Repository
  Link: ${data.githubRepo}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}

  ${renderLicenseLink(data.license)}

  ## Contact
  GitHub Profile: https://github.com/${data.github}

  Email: ${data.emailInput}
`;
}

module.exports = generateMarkdown;
