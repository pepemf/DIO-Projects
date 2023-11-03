/*
1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um 
semeste da facildade calcule e imprima a sua media e sua classificação 
conforme a tabela abaixo.

Média = (n1 + n2 + n3 ) /3;

Classificação:
	Média menor que 5, reprovação;
	Média entre 5 e 7, recuperação;
	Média acima de 7, passou de semestre;
*/

// Definir valores das notas
let nota1 = 10.0;
let nota2 = 8.0;
let nota3 = 6.0;


let media = (nota1 + nota2 + nota3) / 3;

console.log("Media do aluno: ", media);
if (media < 5){
    console.log("Reprovado")
}else if(media >= 5 && media < 7){
    console.log("Recuperação")
}else {
    console.log("Aprovado")
}
