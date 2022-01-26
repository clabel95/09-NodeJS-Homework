const fs = require('fs');
const inquirer = require('inquirer');
// var prompt = inquirer.createPromptModule();




inquirer
  .prompt([
    {
        type:'input',
        message:'What is your Github Username?',
        name:'Github',
    },
    {
        type:'input',
        message:'What is your Email Address?',
        name:'Email',
    },
    {
        type:'input',
        message:"What is your project's name?",
        name:'prj_name',
    },
    {
        type:'input',
        message:'Please write a short description of your project',
        name:'description',
    },
    {//https://docs.github.com/en/rest/reference/licenses#get-all-commonly-used-licenses
        type:'list',
        message:'What kind of license should your project have?',
        choices:[   "MIT",
                    "GPLv3",
                    "MPL_2.0",
                    "AGPL_v3",
                    "Unlicense"
                ],
        name:'license',
    },
    {
        type:'input',
        message:'What command should be run to install dependencies?',
        name:'install_depen',
    },
    {
        type:'input',
        message:'What command should be run to run tests?',
        name:'tests',
    },
    {
        type:'input',
        message:'What does the user need to know about using the repo?',
        name:'user_info',
    },
    {
        type:'input',
        message:'What does the user need to know about contributing to the repo?',
        name:'contribution',
    },
   //{
   //    type:'input',
   //    message:'',
   //    name:'',
   //},

  ])
  .then((response) =>
    fs.writeFile("README.md", generateReadMe(response),
    function (err){
      console.log(err)
    })
  );

  var generateReadMe = (data) => {
    return `# ${data.prj_name}
## License
![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)


## Table of contents
* [Description](#description)
* [Installation instructions](#installation)
* [Usage information](#usage)
* [Contribution guidelines](#contribution)
* [Test instructions](#test)
* [Questions](#questions)


## Description
${data.description}


## Installation
${data.install_depen}


## Usage
${data.user_info}


## Contribution
${data.contribution}


## Test
${data.tests}


## Questions
[Github](https://github.com/${data.Github})

For more questions email me at ${data.Email}.

` 
    }
