let nota1 = 6;
let nota2 = 7;
let nota3 = 7;

let mediaFinal = Math.round((nota1 + nota2 + nota3) / 3)


if (mediaFinal < 5) {
  console.log("reprovado","sua nota final foi",mediaFinal);
} else if (mediaFinal >= 5 && mediaFinal <= 7) {
  console.log("recuperacão","sua nota final foi",mediaFinal);
} else {
  console.log("passou","sua nota final foi",mediaFinal);
}
 