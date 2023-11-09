class Carro{
    marca;
    cor;
    kpl;

    constructor(marca, cor, kpl){
        this.marca = marca;
        this.cor = cor;
        this.kpl = kpl;
    }

    calculadora(quilometros, preçocomb){
        let litrosviagem = quilometros/this.kpl //

        return(preçocomb * litrosviagem)

    }

}

fordka = new Carro("ford", "branco", 9)

console.log('A viagem vai custar ', fordka.calculadora(536, 3));