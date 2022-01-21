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
        choices:[   "MIT License",
                    "GNU Lesser General Public License v3.0",
                    "Mozilla Public License 2.0",
                    "GNU Affero General Public License v3.0",
                    "The Unlicense",
                    "Apache License 2.0",
                    "GNU General Public License v3.0",
                    "None"],
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
    ## Description
    ${data.description}
    
    ` 
    }
