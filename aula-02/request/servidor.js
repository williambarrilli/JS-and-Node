const http = require ('http');
//Criando um Servidor

let usuario = {
  nome: 'Juvenal',
  idade: 56,
  email: 'juvenal@bla.com',
};

http
  .createServer ((req, res) => {
    res.write (JSON.stringify (usuario));
    res.end ();
  })
  .listen (8000);
