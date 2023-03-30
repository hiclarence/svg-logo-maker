const inquirer = require('inquirer');
// const shapes = require('./lib/shapes.js');
// const fs = require('fs');

// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, shapes.draw(data), err => {
//     if (err) {
//       console.error(err);
//     }
//   });
// }

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
.then((data) =>
      writeToFile('sample.svg',data)
  );
    
init();


// ask user for specific inputs
// pass inputs to shapes file 
// shapes file will already have shape constructors
// inherit the files from the shapes - use template literals for custom values
// export using write

// need to learn :
// - how tm make shapes 
// - how to draw shapes