let somar = ( a, b, callback )=>{
    callback(a + b );
}
somar( 3, 7, (soma) =>{
    console.log( soma );
})


let subtrair = ( a, b, callback )=>{
    callback(a - b );
}

subtrair( 3, 7, (subtrai) =>{
    console.log( subtrai );
})

let multiplicar = ( a, b, callback )=>{
    callback(a * b );
}

multiplicar( 3, 7, (multiplica) =>{
    console.log( multiplica );
})

let dividir = ( a, b, callback )=>{
    callback(a / b );
}

dividir( 3, 7, (dividi) =>{
    console.log( dividi );
})



console.log('somando 10 com 20 e subtraindo de 15');
somar (10,20, (resultadosoma)=>{
    subtrair (15,resultadosoma,(resultadosubtrai)=>{
        console.log(resultadosubtrai );

    });
})