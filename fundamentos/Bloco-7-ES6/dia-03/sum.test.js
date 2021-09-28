const sum = require('./sum');

describe('funcao sum', () => {
    it('soma 4 e 5',() => {
        expect(9).toEqual(sum(4, 5));
    })
    it('soma 0 e 0',() => {
        expect(0).toEqual(sum(0, 0));
    })
    it('soma 4 e "5"',() => {
        expect(9).toEqual(sum(4, '5'));
    })
    
});