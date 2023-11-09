/*
Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua media e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota3) / 3;

Classificação:
 - Media menor que 5. Reprovado
 - Media entre 5 e 7. Recuperação
 - Media acima de 7. Passou
*/

let nota1 = 8;
let nota2 = 9;
let nota3 = 5;

let media = (nota1 + nota2 + nota3) / 3;

if (media < 5){
    console.log(`Aluno reprovado, Media ${media.toFixed(1)}`)
}else if(media > 5 && media < 7){
    console.log(`Aluno em recuperação, Media ${media.toFixed(1)}`);
}else{
    console.log(`Aluno aprovado, Media ${media.toFixed(1)}`);
}

