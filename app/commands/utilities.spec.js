const expect = require('chai').expect;
const utilities = require('./utilities');

describe("utilities", () => {

    describe("getArgument", () => {
        // beforeEach(() => {
        //     console.log('before each')
        // })

        // afterEach(() => {
        //     console.log('after each')
        // })

        // before(() => {
        //     console.log('before')
        // })

        // after(() => {
        //     console.log('after')
        // })

        it("should return the second word when asked for first param", () => {
            let firstArg = utilities.getArgument("command argument", 1);
            expect(firstArg).to.eq("argument");
        })

        it("should return the third word when asked for second param", () => {
            let secondArg = utilities.getArgument("command argument1 argument2", 2);
            expect(secondArg).to.eq("argument2");
        })

        it("should return undefined when asked for third param", () => {
            let thirdArg = utilities.getArgument("command argument1 argument2", 3);
            expect(thirdArg).to.be.undefined;
        })

        it("should return undefined when asked for a param from string with only 1 word", () => {
            let secondArg = utilities.getArgument("command", 2);
            expect(secondArg).to.be.undefined;
        })
    })

})
