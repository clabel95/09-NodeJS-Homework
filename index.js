const fs = require('fs');
const inquirer = require('inquirer');
// var prompt = inquirer.createPromptModule();




inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your projects title?',
        name: 'prj_name'
    },
    {
        type:'input',
        message:'Write a brief project description',
        name:'description',
    },
    {
        type:'input',
        message:'What was your motivation?',
        name:'motivation'
    },
    {
        type:'input',
        message:'Why did you build this project?',
        name:'why'
    },
    {
        type:'input',
        message:'What problem does it solve?',
        name:'problem',
    },
    {
        type:'input',
        message:'What did you learn?',
        name:'learn',
    },
    {
        type:'input',
        message:'What makes your project stand out?',
        name:'stand_out',
    },
    {
        type:'input',
        message:'What are the steps required to install your project?',
        name:'install',
    },
    {
        type:'input',
        message:'How would someone use your project?',
        name:'usage',
    },
    {
        type:'input',
        message:'contribution guidelines?',
        name:'contribution',
    },
    {
        type:'input',
        message:'Write the test instructions',
        name:'Test',
    },
    {
        type:'input',
        message:'',
        name:'',
    },
    {
        type:'input',
        message:'',
        name:'',
    },
    {
        type:'input',
        message:'',
        name:'',
    },
    {
        type:'input',
        message:'',
        name:'',
    },
    {
        type:'input',
        message:'',
        name:'',
    },
    {
        type:'input',
        message:'',
        name:'',
    },
    {
        type:'input',
        message:'',
        name:'',
    },
    {
        type:'input',
        message:'',
        name:'',
    },


    

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
    ####Motivation
    ${data.motivation}
    ####Why did I build this project?
    ${data.why}
    ####What problem did I solve?
    ${data.problem}
    ####What did I learn?
    ${data.learn}
    ####Why does your project stand out?
    ${data.stand_out}
    ##Installation
    ${data.install}
    ##Usage
    ${data.usage}
    ` 
    }
