class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, altura, peso) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }
  calculaIMC() {
    return this.peso / Math.pow(this.altura, 2);
  }

  classificaIMC() {
    const IMC = this.calculaIMC();
    if (IMC < 18.5) {
      return "abaixo do peso";
    } else if (IMC >= 18.5 && IMC <= 25) {
      return "Peso normal";
    } else if (IMC > 25 && IMC <= 30) {
      return "Acima do peso";
    } else if (IMC > 30 && IMC <= 40) {
      return "Obeso";
    } else {
      return "Obesidade grave";
    }
  }
}

let altura = 1.76;
let peso = 77;
let nome = "Ivan";

let ivan = new Pessoa(nome, altura, peso);

let jose = new Pessoa("jose", 1.75, 70);

console.log(jose.classificaIMC());



class Pessoa {
  nome;
  idade;

  constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
  }

  descrever() {
      console.log(`Nome: ${this.nome}; Idade: ${this.idade};`);
  }
}

new Pessoa('Renan', 30).descrever();


const dev = {
  nome: 'Renan',
  linguagemPreferida: 'JavaScript'
};

console.log(dev.linguagemPreferida);

class Pessoa {
  nome;
  idade;

  constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
  }
}

function descreverPessoa(pessoa) {
  return `Nome: ${pessoa.nome}; Idade: ${pessoa.idade};`;
}

const renan = new Pessoa('Renan', 30);
console.log(descreverPessoa(renan));