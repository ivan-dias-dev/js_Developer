/*uma sala contem 5 alunos e para cada foi sorteado de 1 a 100.
faca um programa que recebe 5 numeros sorteados para os alunos e mostre o maior numero sorteado

entrada :
5
50
10
98
23


saida 98
*/

const { gets, print } = require("./funcõesauxiliares");

let maiorValor = [];
for (let i = 0; i <= 4; i++) {
  let numeroSorteado = gets();
  if (numeroSorteado > maiorValor) {
    maiorValor = numeroSorteado;
  }
}
print(maiorValor);
