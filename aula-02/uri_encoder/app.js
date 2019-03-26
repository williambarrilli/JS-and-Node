const uri = "http://localhost/maps/json?address=";
const toFind = "Saturino de Brito, 74 Jardim Botânico Rio de Janeiro, RJ";

//Fazendo o encode
var encToFInd = encodeURIComponent(toFind);

var result = uri + encToFInd;

console.log('URI codificada',result);

//Fazendo o decode
var decResult = decodeURIComponent(result);

console.log('URI decodificada:', decResult);