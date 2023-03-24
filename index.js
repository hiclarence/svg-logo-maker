const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter up to three letters:',
      name: 'letters',
    },
    {
      type: 'input',
      message: 'Please enter your text color choice:',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'Please choose your shape: ',
      name: 'shape',
      choices: ['triangle', 'square', 'circle', ]
    },
    {
      type: 'input',
      message: 'Please enter your shape color choice:',
      name: 'shapeColor',
    }
  ])
    .then(() =>
      console.log('Generated logo.svg')
  );
    
