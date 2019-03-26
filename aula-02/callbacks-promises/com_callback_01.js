//Sincrona
console.log('Linha 1A');
console.log('Linha 2A');
console.log('Linha 3A');
console.log('Linha 4A');



//com callback(há espera da resposta) Assincrona
console.log('com callback(há espera da resposta)');
console.log('Linha 1');
setTimeout(function() {
    console.log('Linha 2');
}, 1000);
setTimeout(() =>{
    console.log('Linha 3');
}, 0)
console.log('Linha 4')