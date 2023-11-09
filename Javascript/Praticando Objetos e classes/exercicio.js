class Pessoa{

    nome;
    peso;
    altura

    constructor(nome, peso, altura){
        this.altura = altura;
        this.nome = nome;
        this.peso = peso;
    }

    imc(){

        return this.peso / (this.altura * this.altura)

    }

    classificaimc(imc){

        if (imc < 18.5){
            return "Magreza"
        }else if (imc > 18.5 && imc < 24.9){
            return "Normal"
        }else if (imc > 25 && imc < 29.9){
            return "Sobrepeso";
        }else if (imc > 30 && imc < 34.9){
            return "Obesidade grau I";
        }else if (imc > 35 & imc < 39.9){
            return "Obesidade grau II";
        }else {
            return "Obesidade grau III";
        }

    }

}

jose = new Pessoa("José Roberto", 80, 1.90)

console.log(jose.imc())
console.log(jose.classificaimc(jose.imc()))