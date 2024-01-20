/**
 * Prgrama que calcula e imprime o salario a ser transferido para um funcionario
 * calculo recebe o valor bruto do salario e o adicional dos beneficios
 * calculo = valor bruto - % de importos + adicional beneficios
 *
 * aliquots:
 * 0 a 1100 = 5%
 * 1100.1 a 2500 = 10%
 * maior que 2500.01 = 15%
 *
 * exemplo
 * entrada: 2000
 *           250
 * saida    2050.00
 */

let salarioBruto = 1000;
let bonus = 250;
let aliquota = null;

function calculaSalario(salarioBruto, bonus) {
  if (salarioBruto <= 1100) {
    aliquota = 5 / 100;
    return calculoDoSalario(salarioBruto, bonus, aliquota);
  } else if (salarioBruto > 1100.01 && salarioBruto <= 2500) {
    aliquota = 10 / 100;
    return calculoDoSalario(salarioBruto, bonus, aliquota);
  } else if (salarioBruto > 2500.01) {
    aliquota = 15 / 100;
    return calculoDoSalario(salarioBruto, bonus, aliquota);
  } else {
    return "numero invalido";
  }
}

function calculoDoSalario(salarioBruto, bonus, aliquota) {
  return salarioBruto - aliquota * salarioBruto + bonus;
}
console.log(calculaSalario(salarioBruto, bonus));






