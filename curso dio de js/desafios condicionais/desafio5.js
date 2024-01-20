let precoInicial = 100;
let emQuantasVezes = 3;
let formaPagamento = "Debito";

let valorFinal = null;
if (emQuantasVezes == 1) {
  if (formaPagamento == "Debito") {
    valorFinal = precoInicial - (10 % precoInicial); //10%
  } else if (formaPagamento == "Dinheiro" || formaPagamento == "Pix") {
    valorFinal = precoInicial - (15 % precoInicial); //15%
  }
} else if (emQuantasVezes == 2) {
  valorFinal = precoInicial;
} else {
  valorFinal = precoInicial + (10 % precoInicial);
}

console.log(valorFinal);
