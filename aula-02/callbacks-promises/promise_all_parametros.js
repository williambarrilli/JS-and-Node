let somar = (a, b) => {
  return new Promise ((resolve, reject) => {
    let x = a + b;
    if (x >= 0)
      resolve ({
        operacao: 'somar',
        status: 'OK',
        resultado: x,
      });
    else
      reject ({
        operacao: 'somar',
        status: 'ERRO',
        resultado: x,
      });
  });
};
let subtrair = (a, b) => {
  return new Promise ((resolve, reject) => {
    let x = a - b;
    if (x >= 0)
      resolve ({
        operacao: 'subtrair',
        status: 'OK',
        resultado: x,
      });
    else
      reject ({
        operacao: 'subtrair',
        status: 'ERRO',
        resultado: x,
      });
  });
};
Promise.all ([somar (1, 3), subtrair (10, 7)])
  .then (retorno => {
    console.log (retorno);
  })
  .catch (erro => {
    console.log (erro);
  });
