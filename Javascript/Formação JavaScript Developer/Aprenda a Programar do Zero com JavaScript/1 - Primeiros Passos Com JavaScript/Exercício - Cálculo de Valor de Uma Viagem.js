/* 
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variaveis. Sendo elas:
1 - Preço do combustivel;
2 - Gesto médio de combustivel do carro KM;
3 - Distancia em KM da viagem;
Imprima no console o valor que será gasto de combustivel para realizar esta viagem
*/

let preçoCombustivel = 3;
let gastoMedioCombustivelKm = 9;
let distanciaViagemKm = 340;

console.log(`O preço para a viagem é de ${((distanciaViagemKm / gastoMedioCombustivelKm) * preçoCombustivel).toFixed(2)}`)