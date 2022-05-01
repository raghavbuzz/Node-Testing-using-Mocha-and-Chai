const Cart = require('./Cart');
const expect = require('chai').expect;

describe("Cart", () => {

    describe("addItem", () => {

        let cart, myPart;

        beforeEach(() => {
            cart = new Cart();
            myPart = {};
        })

        it('should have only 1 item with qty of 1 after addItem is called with qty of 1', () => {
            cart.addItem(myPart, 1);

            // expect(cart.lineItems.length).to.eq(1);
            // expect(cart.lineItems).to.have.lengthOf(1);
            // expect(cart.lineItems[0].quantity).to.eq(1);
            expect(cart.lineItems).to.eql([{ part: {}, quantity: 1 }]);
        })

        it('should have only 1 item with qty of 1 after addItem is called with qty of 1', () => {
            cart.addItem(myPart, 1);
            cart.addItem(myPart, 1);

            expect(cart.lineItems).to.have.lengthOf(1);
            expect(cart.lineItems[0].quantity).to.eq(2);
        })

        it('should add quantities together after addItem is called', () => {
            cart.addItem(myPart, 2);
            cart.addItem(myPart, 4);

            expect(cart.lineItems).to.have.lengthOf(1);
            expect(cart.lineItems[0].quantity).to.eq(6);
        })

        it('should have 2 items if addItem is called with different parts', () => {
            let myPart2 = {};
            cart.addItem(myPart, 1);
            cart.addItem(myPart2, 1);

            expect(cart.lineItems).to.have.lengthOf(2);
        })

        it('should add quantities to the correct existing item', () => {
            let myPart2 = {};
            cart.addItem(myPart, 1);
            cart.addItem(myPart2, 1);
            cart.addItem(myPart, 3);

            expect(cart.lineItems).to.have.lengthOf(2);
            expect(cart.lineItems[0].quantity).to.eq(4);
        })
    })

    describe("getTotalCost", () => {
        let cart;

        beforeEach(() => {
            cart = new Cart();
        })

        it('should be 0 with no items', () => {
            expect(cart.getTotalCost()).to.eq(0);
        })

        it('should be 5 with one item with qty of 1 and cost of 5', () => {
            let myPart1 = { cost: 5 };
            cart.addItem(myPart1, 1)
            expect(cart.getTotalCost()).to.eq(5);
        })

        it('should be 15 with one item with qty of 1 and cost of 5 and another item with qty of 1 and cost of 10', () => {
            let myPart1 = { cost: 5 };
            let myPart2 = { cost: 10 };
            cart.addItem(myPart1, 1)
            cart.addItem(myPart2, 1)
            expect(cart.getTotalCost()).to.eq(15);
        })

        describe("getTotalCost variations", () => {
            let partCost5 = { cost: 5 };
            let partCost10 = { cost: 10 };
            let emptyLineItems = [];
            let singleItemsLineItems = [{ part: partCost5, quantity: 1 }];
            let multiplesItemsLineItems = [{ part: partCost5, quantity: 1 }, { part: partCost10, quantity: 1 }];
            let testVariations = [
                { lineItems: emptyLineItems, expected: 0 },
                { lineItems: singleItemsLineItems, expected: 5 },
                { lineItems: multiplesItemsLineItems, expected: 15 }
            ]

            testVariations.forEach(test => {
                it(`correctly calculates the total cost with ${test.lineItems.length} items`, () => {
                    cart.lineItems = test.lineItems;
                    expect(cart.getTotalCost()).to.eq(test.expected);
                })
            });
        })
    })

    describe("empty", () => {
        let cart;
        beforeEach(() => {
            cart = new Cart();
        })

        it('should have an empty array', () => {

            let emptyArray = [];

            cart.lineItems = [{}, {}];
            cart.empty();

            expect(cart.lineItems).to.eql(emptyArray);
        })
    })
})