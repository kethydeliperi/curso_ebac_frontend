function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }
  
  function Mulher(nome, sobrenome, idade) {
    Pessoa.call(this, nome, sobrenome, idade);
    this.genero = 'Feminino';
  }
  
  function Homem(nome, sobrenome, idade) {
    Pessoa.call(this, nome, sobrenome, idade);
    this.genero = 'Masculino';
  }
  
  const homem = new Homem("João", "Silva", 40);
  const mulher = new Mulher("Maria", "Santos", 35);
  
  const homem2 = new Homem("Carlos", "Almeida", 28);
  const mulher2 = new Mulher("Ana", "Oliveira", 22);
  
  const homem3 = new Homem("Luiz", "Pereira", 55);
  const mulher3 = new Mulher("Juliana", "Costa", 42);
  
  console.log(homem);
  console.log(mulher);
  
  console.log(homem2);
  console.log(mulher2);
  
  console.log(homem3);
  console.log(mulher3);
  