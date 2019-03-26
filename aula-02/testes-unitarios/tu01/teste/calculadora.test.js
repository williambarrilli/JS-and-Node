const assert = require( 'assert' );

const {somar,subtrair} = require( '../calculadora' );

describe('Testes de calculadora - somar', () => {
    it('Retona soma com valores positos', () => {
        assert.ok( (somar( 2, 5)) === 7);
    });
    it('Retona soma com valores negativos', () => {
        assert.ok( (somar( -2, -5)) === -7);
    });
    it('Retoma soma com um valor positivo e outro negativo', () => {
        assert.ok( (somar( -2, -15)) === -17);
    });
})

describe('Testes de calculadora - subtrair', () => {
    it('Retona subtração com valores positos', () => {
        assert.ok( (subtrair( 7, 5)) === 2);
    });
    it('Retona subtração com valores negativos', () => {
        assert.ok( (subtrair( -2, -15)) === 13);
    });
    it('Retoma subtração com um valor positivo e outro negativo', () => {
        assert.ok( (subtrair( -2, -15)) === 13 );
    });
})  