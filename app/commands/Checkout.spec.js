let checkout = require('./Checkout');
const Cart = require('../models/Cart');
const expect = require('chai').expect;

describe("Checkout", () => {

    it('should throw an error with an empty cart', () => {
        let cart = new Cart();

        let callCheckout = () => { checkout(null, Cart) };

        expect(callCheckout).to.throw();

    })
})