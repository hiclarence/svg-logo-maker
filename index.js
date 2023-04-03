const inquirer = require('inquirer');
const shapes = require('./shapes');
const fs = require('fs');

function writeToFile(fileName, data) {
  fs.writeFile(fileName, shapes.draw(data), err => {
    if (err) {
      console.error(err);
    }
    console.log('sucess!')
  });
}

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
    },
])
.then((data) => {
  writeToFile(`sample${data.shape}.svg`,data);
});