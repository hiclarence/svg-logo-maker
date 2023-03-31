// this file is used to export shape classses
function Shape(letters, textColor, shapeColor) {
    this.canvas = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">`
    this.letters = letters;
    this.textColor = function(textColor) {
        return `fill = ${textColor}`; 
    }
    // this.setColor = function(shapeColor) {
    //     return `fill = ${shapeColor}`;
    // }
    this.setColor = shapeColor;
}

function Square(letters,textColor,shapeColor) {
    Shape.call(this, letters, textColor, shapeColor);
    this.render = function () {
        return `<rect x="95" y="40" width="100" height="100" ${Shape.setColor(shapeColor)}/>`; 
    }
    this.text = function () {
        return `<text x="120" y="110" font-size="40" text-anchor="middle" ${Shape.textColor(textColor)}>${letters}</text>`
    }
}
 
function Circle(letters,textColor,shapeColor) {
    Shape.call(this, letters, textColor, shapeColor); 
    this.render = function () {
        return `<circle cx="150" cy="100" r="80" ${Shape.setColor(shapeColor)} />`; 
    }
    this.text = function () {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" ${Shape.textColor(textColor)}>${letters}</text>`
    }
}

function Triangle(letters,textColor,shapeColor) {
    Shape.call(this, letters, textColor, shapeColor);
    this.render = function () {
        return `<polygon points="140, 8 255, 260 50, 200 60" fill=${Shape.setColor}/>`; 
    }
    this.text = function () {
        return `<text x="130" y="90" font-size="20" text-anchor="middle" ${Shape.textColor(textColor)}>${letters}</text>`
    }
}


function draw(data) {
    if (data.shape == 'triangle') {
        const shape = new Triangle(data.letters, data.textColor, data.shapeColor); 
        return `
        ${shape.canvas}
        ${shape.render()};
        </svg> 
        `
    }
    if (data.shape == 'circle') {
        const shape = new Circle(data.letters, data.textColor, data.shapeColor); 
        return `
        ${shape.canvas};
        ${shape.render()};
        </svg> 
        ` 
    }
    if (data.shape == 'square') {
        const shape = new Square(data.letters, data.textColor, data.shapeColor); 
        return `
        ${shape.canvas};
        ${shape.render()};
        </svg> 
        ` 
    }
}

module.exports = { draw } ;