/*
Crie uma clase para representar pessoas
Para cada pessoa teremos os atributos nome, preso, altura;
As pessoas devem ter a capacidade de dizer o valor de seu IMC (IMC = peso / altura²)
Instancie uma pessoa chamada José que tenha 70Kg e 1,75m, e demonstre o IMC de José
*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaIMC(){
        let imc = this.peso/Math.pow(this.altura, 2);
        console.log(`O IMC de ${this.nome} é ${imc.toFixed(1)}`);
        return imc;
    }

    classificaIMC(imc){
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
    }

}

jose = new Pessoa("jose", 70, 1.75)


jose.classificaIMC(jose.calculaIMC());