// this file is used to export shape classses
function Shape(letters, textColor, shapeColor) {
    this.canvas = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">`
    this.letters = letters;
    this.textColor = function(textColor) {
        return `fill = ${textColor}`; 
    }
    // this.shapeColor = shapeColor;
    this.setColor = function(shapeColor) {
        return `fill = ${shapeColor}`;
    }
}

function Square(letters,textColor,shapeColor) {
    Shape.call(this, letters, textColor, shapeColor);
    this.render = function () {
        return `<rect x="95" y="40" width="100" height="100" ${Shape.setColor(shapeColor)}/>`; 
    }
    this.text = function () {
        return ``
    }
}
 
function Circle(letters,textColor,shapeColor) {
    Shape.call(this, letters, textColor, shapeColor); 
    this.render = function () {
        return '<circle cx="150" cy="100" r="80" fill="green" />'; 
    }
}

function Triangle(letters,textColor,shapeColor) {
    Shape.call(this, letters, textColor, shapeColor);
    this.render = function () {
        return '<polygon points="140, 8 255, 260 50, 200 60" fill="pink"/>'; 
    }
}



function draw(data) {
    if (data.shape == 'triangle') {
        const shape = new Triangle(data.letters, data.textColor, data,shapeColor); 
        return `
        ${shape.canvas}
        ${shape.render()}; 
        `
    }
    if (data.shape == 'circle') {
        const shape = new Circle(data.letters, data.textColor, data,shapeColor); 
        shape.render(); 
    }
    if (data.shape == 'square') {
        const shape = new Square(data.letters, data.textColor, data,shapeColor); 
        shape.render(); 
    }
}

module.exports = {
    draw
  };
  