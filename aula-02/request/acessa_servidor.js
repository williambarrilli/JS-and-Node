var request = require ('request');
request ('http://localhost:8000', function (err, res, body) {

  if (res.statusCode == 200) {
    let usuario = JSON.parse(body)
    console.log(usuario.nome);
  } else {
    console.log('Response: ' + res.statusCode)
  }
});