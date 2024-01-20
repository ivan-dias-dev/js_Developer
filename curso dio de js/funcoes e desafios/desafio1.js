/*fazer uma funcão que escreve o meu nome*/

function escreveNome(nome) {
  return "O nome é:", nome;
}

function ismaiorDeIdade(idade) {
  let ismaior = idade >= 18;

  if (ismaior) {
    return console.log(escreveNome(nome), "maior de idade", idade ,"anos");
  } else {
    return console.log(escreveNome(nome), "menor de idade", idade,"anos");
  }
}
let nome = "ivan";
ismaiorDeIdade(4);
