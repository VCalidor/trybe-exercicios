const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz function', () => {
    it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
        expect('fizzbuzz').toEqual(myFizzBuzz(15))
    });
    it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
        expect('fizz').toEqual(myFizzBuzz(9))
    });
    it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
        expect('buzz').toEqual(myFizzBuzz(10))
    });
    it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
        expect(8).toEqual(myFizzBuzz(8))
    });
})