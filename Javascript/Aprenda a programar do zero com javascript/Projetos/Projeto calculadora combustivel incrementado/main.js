/*
Faça um programa para calcular o valor de uma viagem

Você terá 3 variaveis, Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combstivel que está no seu carro
4 - Gasto medio de combustivel do caro por KM;
5 - Distancia em KM da viagem

Imprima no console o valor a ser gasto com combustivel na viagem.
*/

let gasPriceL = 3.50;
let ethPriceL = 2.40;

let gasOrEthn = true; // Gas = True | Eth = False
let carGPerKm = 16.0;

let travlDist = 120.0;

if (gasOrEthn){
    console.log("Preço em combustivel na viagem = ", (travlDist / carGPerKm) * gasPriceL);
} else{
    console.log("Preço em combustivel na viagem = ", (travlDist / carGPerKm) * ethPriceL);
}