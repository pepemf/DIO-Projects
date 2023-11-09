/* 
2) O IMC é um criterio da OMS para dar uma indicação a condiçãp do peso de uma pessoa adulta

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tablea abaixo:

IMC em adultos:

 - Abaixo de 18.5 = Abaixo do peso;
 - Enttre 18.5 e 25 = Peso normal;
 - Entre 25 e 30 = Acima do peso;
 - Entre 30 e 40 = Obeso;
 - Acima de 40 = Obeisdade Grave;
*/

let peso = 90;
let altura = 1.90;

let imc = peso / (Math.pow(altura, 2));

if (imc > 40){
    console.log(`Seu IMC é ${imc.toFixed(1)} | Obesidade Grave, deve consultar um médico com urgencia`);
}else if (imc <= 40 && imc > 30){
    console.log(`Seu IMC é ${imc.toFixed(1)} | Obesidade, deve consultar um médico com urgencia`);
}else if (imc <= 30 && imc > 25) {
    console.log(`Seu IMC é ${imc.toFixed(1)} | Acima do peso, deve consultar um médico`);
}else if (imc <= 25 && imc > 18.5) {
    console.log(`Seu IMC é ${imc.toFixed(1)} | Normal, Parabens!`);
}else if (imc < 18.5){
    console.log(`Seu IMC é ${imc.toFixed(2)} | Abaixo do peso, deve consultar um médico com urgencia`);
}