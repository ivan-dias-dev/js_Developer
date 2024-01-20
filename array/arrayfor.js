const nome = "Ivan Aragão Dias";

for (let i = 0; i < nome.length; i++) {
  const letra = nome[i];
}

const notas = [];

notas.push(3);
notas.push(7);
notas.push(5);
notas.push(4);
notas.push(8);
notas.push(10);
console.log(notas);

//criar let aqui fora para somar
let soma = 0;
for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota;
}
const media = soma / notas.length;
console.log(media);
