let soma = (a, b) => {
  let x = a + b;
  return new Promise ((resolve, reject) => {
      if (x >= 0) {
        resolve (`Valor Positivo: ${x}`);
      } else {
        reject (`Valor Negativo: ${x}`);
      }
  });
};

soma(1, -7).then (resolve => {
    console.log (resolve);
})
.catch (reject => {
    console.error (reject);
});
