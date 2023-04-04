function Shape(letters, textColor, shapeColor) {
    this.letters = letters;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.render = function () {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><${this.shapeCoord} fill="${this.shapeColor}"/><${this.textCoord} fill="${this.textColor}">${this.letters}</text></svg>`;
    };
}

function Square(letters,textColor,shapeColor, shapeCoord, textCoord) {
    Shape.call(this, letters, textColor, shapeColor);
    this.shapeCoord = `rect x="95" y="40" width="100" height="100"`; 
    this.textCoord = `text x="90" y="110" font-size="60"`; 
}
 
function Circle(letters,textColor,shapeColor, shapeCoord, textCoord) {
    Shape.call(this, letters, textColor, shapeColor); 
    this.shapeCoord = `circle cx="150" cy="100" r="80"`; 
    this.textCoord = `text x="100" y="125" font-size="60"`;
}

function Triangle(letters,textColor,shapeColor, shapeCoord, textCoord) {
    Shape.call(this, letters, textColor, shapeColor);
    this.shapeCoord = `<polygon points="140, 8 255, 260 50, 200 60"`; 
    this.textCoord = `text x="100" y="150" font-size="40"`;
}

function draw(data) {
    if (data.shape == 'triangle') {
        const newShape = new Triangle(data.letters, data.textColor, data.shapeColor); 
        return newShape.render();
    }
    if (data.shape == 'circle') {
        const newShape = new Circle(data.letters, data.textColor, data.shapeColor); 
        return newShape.render();
    }
    if (data.shape == 'square') {
        const newShape = new Square(data.letters, data.textColor, data.shapeColor); 
        return newShape.render();
    }
}

module.exports = { draw, Triangle, Circle, Square } ;