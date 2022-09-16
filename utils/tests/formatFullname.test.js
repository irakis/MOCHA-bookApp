const formatFullName = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullNme', () => {
    it('should return Error if there is no arg', ()=> {
        expect(formatFullName('')).to.equal('Error');
    });
    it('should return Error if arg is not a string', ()=> {
        expect(formatFullName(12)).to.equal('Error');
        expect(formatFullName([])).to.equal('Error');
        expect(formatFullName({})).to.equal('Error');
        expect(formatFullName(function(){})).to.equal('Error');
        expect(formatFullName(undefined)).to.equal('Error');
    });
    it('should return Error if there is more or less than name and lastName ', ()=> {
        expect(formatFullName('')).to.equal('Error');
        expect(formatFullName('John')).to.equal('Error');
        expect(formatFullName('John Doe Mac')).to.equal('Error');
    });
})