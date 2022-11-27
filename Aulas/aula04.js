// ----------------- OBEJTO ----------------------------------------

// const leticia = {
//   nome: 'Leticia Morais',
//   idade: 24
// };


//****** add mais valores
//leticia.altura = 1.68;


//****** deletar valores
// delete leticia.nome;

// console.log(leticia.idade);
// console.log(leticia);


//******* uma funcção dentro de um objeto se chama MÉTODO
// const usuario = {
//   nome: 'Arya Stark',
//   idade: 1,

//   descrever: function() {
//     //this: como a função está dentro de um objeto, o this assume o objeto.
//     console.log(`Meu nome é ${this.nome} e tenho ${this.idade} ano(s).`);
//   }
// };

// usuario.descrever();

//****** o objeto pode ser alterado dessa forma
// usuario.nome = `Marlon`;
// usuario.idade = 26;

// usuario.descrever();

//****** a função dentro do objeto tbm pode ser alterado dessa forma
// usuario.descrever = function() {
//   console.log(`Nome: ${this.nome}\nIdade: ${this.idade}`)
// }
// usuario.descrever();


//****** Outra forma mais dinâmica de acessar esses valores

// const pessoa = {
//   nome: 'Vitor J Guerra',
//   idade: 25,

//   descrever: function() {
//     console.log(`Meu nome é ${this.nome} e minha idade é${this.idade}`)
//   }
// };

// console.log(pessoa['nome']);

// ******* outra forma de alterar alguma valor de maneira mais dinâmica
// pessoa['nome'] = 'Arthas';
// console.log(pessoa['nome']);



// ----------------- CLASSE ----------------------------------------

// class Pessoa {
//   nome;
//   idade;

//   descrever() {
//     console.log(`Nome: ${this.nome} \nIdade: ${this.idade}`);
//   }
// }

// const leticia = new Pessoa();
// leticia.nome = 'Letícia';
// leticia.idade = 24;

// const marlon = new Pessoa();
// marlon.nome = 'Marlon';
// marlon.idade = 26;

// console.log(leticia);
// console.log(marlon);

// leticia.descrever();
// marlon.descrever();

/* Classe é a definição do que deve ser aquele objeto e instância é a ocorrência daquele objeto */

/* Constructor é o que acontece quando uma pessoa é instaciada */

// class Pessoa {
//   nome;
//   idade;
//   nascimento;

//   constructor(nome, idade){
//     this.nome = nome;
//     this.idade = idade;
//     this.nascimento = 2022 - idade;
//   }

//   descrever(){
//     console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//   }
// }

// const arthas = new Pessoa('Arthas',1);

// arthas.descrever();
// console.log(arthas);

//--------------------- EXEMPLO -------------------------------------------

// class Pessoa {
//   nome;
//   idade;

//   constructor (nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//   }
// }

// function compararIdade(p1, p2) {
//     if (p1.idade > p2.idade) {
//       console.log(`${p1.nome} é mais velho que ${p2.nome}`);
//     } else if (p2.idade > p1.idade) {
//       console.log(`${p2.nome} é mais velho que ${p1.nome}`);
//     } else {
//       console.log(`${p1.nome} e ${p2.nome} têm a mesma idade.`);
//     }
// }

// const vitor = new Pessoa('vitor', 25);
// const renan = new Pessoa('Renan', 30);

// compararIdade(renan, vitor);