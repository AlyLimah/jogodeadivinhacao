let notas = [6.5, 8.0, 7.5, 9.0, 5.5];

console.log("Primeira nota:", notas[0]);
console.log("Última nota:", notas[notas.length - 1]);

notas.push(7.0);
console.log("Array após adicionar nova nota:", notas);

notas.shift();
console.log("Array após remover a primeira nota:", notas);

console.log("Notas:");
notas.forEach(nota => console.log(nota));

let soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
let media = soma / notas.length;
console.log("Média das notas:", media);

let notasMaioresQueSete = notas.filter(nota => nota > 7);
console.log("Notas maiores que 7:", notasMaioresQueSete);

notas.sort((a, b) => a - b);
console.log("Array ordenado em ordem crescente:", notas);

let temNotaSeisMeio = notas.includes(6.5);
console.log("Nota 6.5 está presente?", temNotaSeisMeio);

let indiceNotaOito = notas.indexOf(8.0);
if (indiceNotaOito !== -1) {
    console.log("Índice da nota 8.0:", indiceNotaOito);
} else {
    console.log("Nota 8.0 não encontrada no array.");
}

