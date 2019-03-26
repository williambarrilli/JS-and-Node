var promise1 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve('Promise 1 resolvida');
    },2000);
});
var promise2 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        reject('Promise 2 foi rejeitada');
    },1000);
});

var promise3 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        reject('Promise 3 foi rejeitada');
    },1000);
});

Promise.all([promise1, promise2, promise3])
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error(error);
    });