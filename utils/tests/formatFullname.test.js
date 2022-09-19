const formatFullName = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullNme', () => {
    it('should throw Error if there is no arg', ()=> {
        expect(() => { formatFullName('') }).to.throw('Error');
    });
    it('should throw Error if arg is not a string', ()=> {
        expect(() => { formatFullName(12) }).to.throw('Error');
        expect(() => { formatFullName([]) }).to.throw('Error');
        expect(() => { formatFullName({}) }).to.throw('Error');
        expect(() => { formatFullName(function(){}) }).to.throw('Error');
        expect(() => { formatFullName(undefined) }).to.throw('Error');
    });
    it('should throw Error if there is more or less than name and lastName ', ()=> {
        expect(() => { formatFullName('') }).to.throw('Error');
        expect(() => { formatFullName('John') }).to.throw('Error');
        expect(() => { formatFullName('John Doe Mac') }).to.throw('Error');
    });
})