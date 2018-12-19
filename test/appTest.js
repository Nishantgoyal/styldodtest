const assert  = require('chai').assert;
const calc = require('../app').Calculator.prototype;
describe('App',function(){
    it('it should return a number',function(){
        assert.equal(calc.addNumbers(3,2),5);
    });

    it('it should return mutiplied value',function(){
        assert.equal(calc.mulNumbers(3,2),6);
    });
});