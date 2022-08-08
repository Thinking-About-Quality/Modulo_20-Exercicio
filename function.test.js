const somar =require('./fun_soma')

describe('Multiplos de 5 e 7', () => {
   
    it('Retorno de multiplos', () => {
       expect(somar(5,7)).toBe(156361)
       expect(somar(5,5)).toBe(99500)
       expect(somar(5,5)).not.toBe(0)
      
    });
});

