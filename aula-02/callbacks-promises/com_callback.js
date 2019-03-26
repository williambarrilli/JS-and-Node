//Exemplos, "callback" e retorno podem ser alteradas

let soma = ( a, b, patodonald )=>{
    patodonald(a + b );
}
//console.log(soma(3, 7))
soma( 3, 7, (resultado) =>{
    console.log( resultado );
})
//-----------------------------------------
console.log( 'padrão' );

let soma2 = ( a, b, callback )=>{
    callback(a + b );
}
//console.log(soma(3, 7))
soma2( 3, 7, (retorno) =>{
    console.log( retorno );
})
