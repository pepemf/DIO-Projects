/*
Elabore um Algoritmo que calcule o que deve ser pago por um produto, considerando o preco normal de etiqueta e a estolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado

Código condição de pagamento
- á vista debito, recebe 10% de desconto
- A vista Dinheiro ou pix, 15% de desconto
- Em duas vezes, preço normal de etiqueta sem juros
- Acima de duas vezes, preço normal de etiqueta mais juros 10%
*/
let desconto = 0;
let valorParcela = 0;
let precoEtiqueta = 123.24;
let codigoFormaPagamento = 2;
/* Formas de pagamento por código
1 - Debito, recebe 10% de desconto
2 - A vista Dinheiro ou pix, 15% de desconto
3 - Duas vezes, preço normal de etiqueta sem juros
4 - Acima de duas vezes, preço normal de etiqueta mais juros 10%
*/

switch(codigoFormaPagamento){

    case 1:
        desconto = (precoEtiqueta/100) * 10;
        console.log(`Debito\nValor a pagar: ${(precoEtiqueta - desconto).toFixed(2)}, Total Economizado: ${desconto.toFixed(2)}`);
        break;
    case 2:
        desconto = (precoEtiqueta / 100) * 15;
        console.log(`Dinheiro ou PIX\nValor a pagar: ${(precoEtiqueta - desconto).toFixed(2)}, Total Economizado: ${desconto.toFixed(2)}`);
        break;
    case 3:
        valorParcela = precoEtiqueta / 2
        console.log(`Parcelado 2x\nValor a pagar: ${precoEtiqueta} em 2 parcelas de ${valorParcela.toFixed(2)}`);
        break
    case 4:
        desconto = (precoEtiqueta / 100) * 10;
        console.log(`Parcelado +2x\nValor a pagar: ${(precoEtiqueta + desconto).toFixed(2)}`);
        break

}
