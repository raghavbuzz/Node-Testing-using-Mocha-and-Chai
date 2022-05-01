let order = require('./order');
const expect = require('chai').expect;

describe("order", () => {

    // Async Testing
    // it('should call the callback with a true value', (done) => {
    //     let cart = {};
    //     let success;

    //     let cb = (p1) => {
    //         success = p1;
    //         expect(success).to.be.true;
    //         done();
    //     }
    //     order(cart, cb);


    // })

    it('should deal with promise', () => {
        let cart = {};        
        return order(cart).then(total => {            
            expect(total).to.eq(500);
        });
    })
})