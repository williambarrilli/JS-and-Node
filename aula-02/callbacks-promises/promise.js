var valor = 127;
//Criando um Promise
var promise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        if (valor >= 100) {
            resolve(`Valor válido: ${valor}`);
        } else {
            reject(`Valor Invalido: ${valor}`);
        }
    },3000);
});

//Executando o promise
promise.then((resultado) => {
    console.log(resultado);
}).catch((erro)=> {
    console.error(erro);
});