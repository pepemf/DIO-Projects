let notas = [];
let soma = 0;

notas.push(5);
notas.push(8);
notas.push(6);
notas.push(5);
notas.push(9);

console.log(notas);

for (let i = 0; i < notas.length; i++){
    soma += notas[i];
}

console.log("Media: ", soma / notas.length)