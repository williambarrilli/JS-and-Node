console.log('Inicializando app.js');

const http = require('http');

//Criando um Servidor

http.createServer( ( req, res) => {
    res.write( 'Buenas !!!' );
    res.end();
}).listen( 8000)