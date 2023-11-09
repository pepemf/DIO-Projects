/* 
Crie uma classe para representsar carros.

Os carros possuem uma marca, uma cor e um gasto medio de combustivel por quilometro rodado.
Crie um metodo que dada a quantidade de quilometros e o preço do combustivel nos de o valor gasto em reais para realizar um percurso.
*/

class Carro{

marca;
cor;
mediaKm;

constructor(marca, cor, mediaKm){

    this.marca = marca;
    this.cor = cor;
    this.mediaKm = mediaKm;
}

calculadora(distanciaViagemKm, precoCombustivel){
    let precoViagem = (distanciaViagemKm/this.mediaKm) * precoCombustivel;

    console.log(`O preço para essa viagem vai ser de R$${precoViagem.toFixed(2)}`);

}

}

ecosport = new Carro("Ford", "Azul", 7)

ecosport.calculadora(300, 4)