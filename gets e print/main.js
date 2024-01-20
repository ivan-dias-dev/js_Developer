const { gets, print } = require("./funcõesauxiliares");

print(gets());

const pessoa = {
  nome: "Ivan",
};

const { nome } = pessoa;

print(nome)