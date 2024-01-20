/*function meuNome(nome) {
  console.log(`seu nome é ${nome}`);
}
meuNome("ivan");

function incrementatJuros(valor, percentualJuros) {
  const valorAcrescimo = (percentualJuros / 100) * valor;
  return valor + valorAcrescimo;
}

let calculaJuros = incrementatJuros(100, 10);

console.log(calculaJuros);
*/

function calculaIMC(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarIMC(IMC) {
  if (IMC < 18.5) {
    return "abaixo do peso";
  } else if (IMC >= 18.5 && IMC <= 25) {
    return "Peso normal";
  } else if (IMC > 25 && IMC <= 30) {
    return "Acima do peso";
  } else if (IMC > 30 && IMC <= 40) {
    return "Obeso";
  } else {
    return "Obesidade grave";
  }
}

(function main() {
  let altura = 1.75;
  let peso = 80;
  let IMC = calculaIMC(peso, altura);

  console.log(classificarIMC(IMC), IMC.toFixed(2));
})();
