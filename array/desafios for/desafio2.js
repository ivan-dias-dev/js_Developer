let lista = [1, 4, 5, 2, 6, 7, 8, 9, 10];

for (let i = 0; i < lista.length; i++) {
  if (lista[i] % 2 === 0) {
    console.log(lista[i]);
  }
}



const numerosPares = [];

for (let i = 0; i < 10; i = i + 2) {
    numerosPares.push(i);
}

console.log(numerosPares);