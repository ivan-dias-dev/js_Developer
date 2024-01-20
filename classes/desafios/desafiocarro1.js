class Carro {
  marca;
  cor;
  gastoMedioCombustivelporKm;

  constructor(marca, cor, gastoMedioCombustivelporKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioCombustivelporKm = gastoMedioCombustivelporKm;
  }

  calculaViajem(kmViajem, precoCombustivel) {
    let precoDaViajem =
      (kmViajem / this.gastoMedioCombustivelporKm) * precoCombustivel;

    return precoDaViajem;
  }
}

let marca = "Fiat";
let cor = "branco";
let gastoMedioCombustivelporKm = 13;

let precoCombustivel = 5.63;

let uno = new Carro(marca, cor, gastoMedioCombustivelporKm);

let siena = new Carro(marca, cor, 10);

let total = "o valor gasto para realizar a viagem será aproximadamente:";
console.log(total, uno.calculaViajem(100, precoCombustivel).toFixed(2));

console.log(
  "Para o ",
  (siena.nome = "siena"),
  total,
  siena.calculaViajem(50, precoCombustivel).toFixed(2)
);
