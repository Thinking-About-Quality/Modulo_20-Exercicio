const mdc =require ('./mdc')

describe('MDC', () => {
    it('Listar retorno MDC', () => {
        expect(mdc(5,5)).toBe(5)
        expect(mdc(25,25)).not.toBe(5)
       
    });
});