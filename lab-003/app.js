console.log ('Inicializando app.js');

const fs = require ('fs');

const logger = fs.createWriteStream ('teste.log', 'utf8');

for (x = 0; x < 100; x++) {
  logger.write (`Linha ${x}\n`, 'utf8', err => {
    if (err) {
      console.error ('EROOOOOOOOU');
      throw err;
    }
  });
}
console.log ('Arquivo criado com sucesso !!!');
