/*
Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado

Dados de entrada: 
5
50
10
98
23

Saída:
98

*/

function selecionaSorteio(listaNumeros) {
    let numero = 1;
    for (let i = 0; i < listaNumeros.length; i++){
        console.log(listaNumeros[i])

        if (listaNumeros[i] > numero) {
            numero = listaNumeros[i];
        }

    }
    console.log(`Maior numero ${numero}`)
}

module.exports = {selecionaSorteio}