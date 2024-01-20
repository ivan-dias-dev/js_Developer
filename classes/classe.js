class Pessoa {
  nome;
  idade;

  constructor(nome, idade) {
    (this.nome = nome), (this.idade = idade);
    this.anoNascimento = 2023 - idade;
  }
  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
  }
}

const ivan = new Pessoa();
ivan.nome = "Ivan";
ivan.idade = 25;

const Ozana = new Pessoa();
Ozana.nome = "Ozana";
Ozana.idade = 25;

const Joao = new Pessoa("João", 18);

ivan.descrever();
Ozana.descrever();

console.log(Joao);
