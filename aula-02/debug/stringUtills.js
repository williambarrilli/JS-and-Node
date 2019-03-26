console.log("Inicializando String Util");

module.exports.calcula = (msg, totalizador) =>{

    totalizador += msg.length;

    return totalizador;
}