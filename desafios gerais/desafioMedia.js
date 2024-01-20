/**
 * Faca um programa que receba media de um aluno
 * caso a media < 5 imprima reprovado
 * media >= 5 e < 7 recuperacão
 * media >=7 aprovado
 * exemplo:
 *              entreada: 5.5
 *                           saida: recuperacão
 */

const notasAluno = [5.5, 5.5, 5.5];
let notaAluno = 0;
for (let i = 0; i < notasAluno.length; i++) {
  notaAluno = notasAluno[i] + notaAluno;
}
media = notaAluno / notasAluno.length;
if (media < 5) {
  console.log("Reprovado", media);
} else if (media >= 5 && media < 7) {
  console.log("Recuperacão", media);
} else {
  console.log("aprovado", media);
}
