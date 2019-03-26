var request = require ('request');
var promise1 = new Promise ((resolve, reject) => {
  request ('http://10.20.17.110:8000/', function (error, response, body) {
    var user = JSON.parse (body);
    console.log ('Nome:', user.nome);
    console.log ('Email:', user.email);
  });
});
var promise2 = new Promise ((resolve, reject) => {
  request ('http://10.20.17.110:8001/', function (error, response, body) {
    var user = JSON.parse (body);
    console.log ('Status:', user.status);
    console.log ('obs:', user.obs);
  });
});
Promise.all ([promise1, promise2])
  .then (resultado => {
    console.log (resultado);
  })
  .catch (error => {
    console.log (error);
  });
