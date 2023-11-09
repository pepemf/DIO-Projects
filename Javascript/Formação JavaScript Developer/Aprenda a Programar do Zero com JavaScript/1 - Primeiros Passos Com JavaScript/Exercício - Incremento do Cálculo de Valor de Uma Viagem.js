/*
Faça um programa para calcular o valor de uma viagem

Você terá 5 variaveis, Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combstivel que está no seu carro;
4 - Gasto medio de combustivel do caro por KM;
5 - Distancia em KM da viagem;
Imprima no console o valor a ser gasto com combustivel na viagem.
*/

let preçoGasolina = 4;
let preçoEtanol = 3;
let TipoCombustivel = "Eth"; //Gas || Eth
let gastoMedioCombustivelKm = 9;
let distanciaViagemKm = 340;

if (TipoCombustivel == "Gas"){
    console.log(
      `O preço para a viagem é de ${(
        (distanciaViagemKm / gastoMedioCombustivelKm) *
        preçoGasolina
      ).toFixed(2)}`
    );
}else if(TipoCombustivel == "Eth"){
    console.log(
      `O preço para a viagem é de ${(
        (distanciaViagemKm / gastoMedioCombustivelKm) *
        preçoEtanol
      ).toFixed(2)}`
    );
}else{
    console.log("Tipo de combustivel invalido")
}
