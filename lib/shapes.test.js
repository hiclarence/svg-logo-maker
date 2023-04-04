const {Square, Triangle, Circle } = require("./shapes.js");

describe(`Shapes`, () => {

    describe(`Triangle`, () => {
        it(`should be an instance of the Triangle class with white text on a green triangle`, () => {
            const test = new Triangle(`abc`, `white`, `green`); 
            expect(test.render()).toBe(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><<polygon points="140, 8 255, 260 50, 200 60" fill="green"/><text x="100" y="150" font-size="40" fill="white">abc</text></svg>`);
        });
    })

    describe(`Square`, () => {
        it(`should be an instance of the Square class with green text on a yellow square`, () => {
            const test = new Square(`abc`, `green`, `yellow`); 
            expect(test.render()).toBe(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="95" y="40" width="100" height="100" fill="yellow"/><text x="90" y="110" font-size="60" fill="green">abc</text></svg>`);
        });
    })

    describe(`Circle`, () => {
        it(`should be an instance of the Circle class with black text on a orange circle`, () => {
            const test = new Circle(`abc`, `black`, `orange`); 
            expect(test.render()).toBe(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="orange"/><text x="100" y="125" font-size="60" fill="black">abc</text></svg>`);
        });
    })

});

