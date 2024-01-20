//faca um programa que receba N (quantidade de números) e seus respectivos valores
//imprima o maior numero par e menor numero impar

//exemplo:
//    entrada:
//  [5,3,4,1,10,8]
//saida:
//maior numero par 10
//menor numero imapr : 1
let { gets, print } = require("./funcõesauxiliares2x");

/**
let MaiorNumPar = null;
let MenorValorImpar = null;
for (let i = 0; i < n; i++) {
  let numero = gets();
  //
  if (numero % 2 === 0 && numero > MaiorNumPar) {
    MaiorNumPar = numero;
  } else if (MenorValorImpar == null || MenorValorImpar > numero) {
    MenorValorImpar = numero;
  }
}
//print(MaiorNumPar);
//print(MenorValorImpar);


 */

let n = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 0;

for (let i = 0; i < n ; i++) {
  const numero = gets();

  if (numero % 2 == 0) {
    if (numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  }else if(numero < menorNumeroImpar || menorNumeroImpar == 0){
    menorNumeroImpar = numero
  }
}

print("Maior número par: "+maiorNumeroPar)
print("Menor número impar: "+menorNumeroImpar)