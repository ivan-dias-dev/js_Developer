function tabuadaCalc(tabuada, numero, tabuadafinal, quantosNumNaTabuada) {
  for (i = 0; i <= quantosNumNaTabuada; i++) {
    tabuada.push(i);
    tabuadafinal = numero * i;
    console.log(numero, "x", i, "=", tabuadafinal);
  }
}

function main() {
  const tabuada = [];
  let numero = 5;
  let tabuadafinal = 0;
  let quantosNumNaTabuada = 10;
  tabuadaCalc(tabuada, numero, tabuadafinal, quantosNumNaTabuada);
}
main();
