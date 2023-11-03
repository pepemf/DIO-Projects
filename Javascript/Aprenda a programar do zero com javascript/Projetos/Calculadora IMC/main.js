/*
2) O IMC é um criterio da OMS para dar uma indicação a condiçãp do peso de uma pessoa adulta

Formula do IMC:
IMC = peso / (altura * peso)

Elabore um algoritimo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tablea abaixo:

IMC em adultos:

 - Abaixo de 18.5 = Abaixo do peso;
 - Enttre 18.5 e 25 = Peso normal;
 - Entre 25 e 30 = Acima do peso;
 - Entre 30 e 40 = Obeso;
 - Acima de 40 = Obeisdade Grave;
 */

 // Definir valores

 let peso = 100;
 let altura = 170;
 
 let imc = (peso / (altura * altura))

 if (imc > 40){
    console.log("Obesidade Grave!")
 } else if(imc <= 40 && imc > 30){
    console.log("Obeso")
 } else if(imc <= 30 && imc > 25){
    console.log("Acima do peso")
} else if(imc <= 25 && imc > 18.5){
    console.log("Peso normal")
} else{
    console.log("Abaixo do peso")
 }