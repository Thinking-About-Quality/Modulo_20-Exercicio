const numeroArray = require('./array')

describe('Array', () => {
    it('Validar retorno maior numero array', () => {
        expect(numeroArray([1, 2, 3, 4, 5, 6, 7, 8])).toBe(8)
        expect(numeroArray([10, 24, 31, 14, 52, 64, 69, 45])).toBe(69)

    })

});
