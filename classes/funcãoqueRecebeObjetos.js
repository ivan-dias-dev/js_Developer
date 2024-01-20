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

function comparaIdade(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
  } else if (p1.idade < p2.idade) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
  } else {
    console.log(`${p2.nome} e ${p1.nome} tem a mesma idade`);
  }
}

const ivan = new Pessoa("Ivan", 25);

const ozana = new Pessoa("Ozana", 30);

comparaIdade(ivan, ozana);
