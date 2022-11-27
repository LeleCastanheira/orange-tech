/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */

// class Carro {
//   marca;
//   cor;
//   gasto;

//   constructor(marca, cor, gasto) {
//     this.marca = marca;
//     this.cor = cor;
//     this.gasto = gasto;
//   }

//   calcularViagem(distancia, preco) {
//     return distancia * this.gasto * preco;
//   }
// }

// const c4 = new Carro ('Citroen', 'Branco', 1/13);

// console.log('Valor total da gasolina: R$' + c4.calcularViagem(70, 5).toFixed(2))

// const palio = new Carro('Fiat', 'preto', 1/10);
// console.log('Valor total da gasolina: R$' + palio.calcularViagem(70, 5).toFixed(2))



/* 2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */


// class Pessoa {
//   nome;
//   peso;
//   altura;

//   constructor (nome, peso, altura, imc) {
//     this.peso = peso;
//     this.altura = altura;
//     this.nome = nome;
//   }

//   calcularImc() {
//     return this.peso /(this.altura * this.altura);
//   }

//   classificarImc(){
//     const imc = this.calcularImc();
//     if ( imc < 18.5) {
//       return ' - Abaixo do peso.';
//     } else if (imc >= 18.5 && imc <25) {
//       return ' - Peso normal';
//     } else if (imc >= 25 && imc < 30) {
//       return ' - Acima do peso';
//     } else if (imc >= 30 && imc < 40) {
//       return ' - Obesidade grau I';
//     } else {
//       return ' - Obesidade grau II';
//     }
//   }
// }

// const jose = new Pessoa ('José', 70, 1.75);
// console.log('IMC: ' + jose.calcularImc().toFixed(1) + jose.classificarImc());

// const marlon = new Pessoa('Marlon', 130, 1.75);
// console.log('IMC: ' + marlon.calcularImc().toFixed(1) + marlon.classificarImc());