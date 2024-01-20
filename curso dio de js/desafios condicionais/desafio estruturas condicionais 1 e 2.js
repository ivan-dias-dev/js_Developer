let etanol = 4.35;
let gasolina = 5.63;
let precoCombustivel = undefined;
let combustivel = "etanol";

if (combustivel == "gasolina") {
  precoCombustivel = gasolina;
} else if (combustivel == "etanol") {
  precoCombustivel = etanol;
} else {
  console.log("digitou valor errado, favor escolher entre etanol e gasolina");
}
let KmPorLitro = 13;
let distanciaEmKmDaViagem = 50;

let precoDaViajem = (distanciaEmKmDaViagem / KmPorLitro) * precoCombustivel;
let total = "O valor gasto para realizar a viagem será aproximadamente:";
console.log(total, precoDaViajem.toFixed(2), "R$");
