const {Square, Triangle, Circle } = require("./shapes.js");

describe(`Shapes`, () => {

    describe(`Triangle`, () => {
        it(`should be an instance of the Triangle class with white text on a green triangle`, () => {
            const test = new Triangle(`abc`, `white`, `green`); 
            expect(shape.render()).toBe(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><<polygon points="140, 8 255, 260 50, 200 60" fill="green"/><text x="100" y="150" font-size="40" fill="white">abc</text></svg>`);
        });
    })

});

