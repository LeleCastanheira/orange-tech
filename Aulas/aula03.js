// function teste() {
//   console.log('Teste');
// }


// teste()
// teste()

//--------------------------------------------

// function sayMyName(name) {
//     console.log('Your name is ' + name);
// }


// sayMyName('Letícia')
// sayMyName('Arya Stark')

//---------------------------------------------

// function quadrado(valor) {
//   return valor * valor;
// }


// const quadradoDeDez = quadrado(10);
// console.log(quadradoDeDez);

//----------------------------------------------

// function juros(valor, percentual) {
//   const acrescimo = (percentual / 100) * valor;
//   return valor + acrescimo;
// }


// console.log(juros(100, 10));
// console.log(juros(100, 15));

//----------------------------------------------


// -------> REFAZENDO O EXERCÍCIO DO IMC <-------
// function calcularImc (peso, altura) {
//   return peso / Math.pow(altura, 2);
// }

// function classificaçãoImc(imc) {
//   if (imc > 40) {
//     return 'Condição: Obesidade Grave';
//   } else if (imc >= 30 && imc <= 40)  {
//     return 'Condição: Obeso';
//   } else if (imc >= 25 && imc < 30) {
//     return 'Condição: Acima do Peso';
//   } else if (imc >= 18.5 && imc < 25) {
//     return 'Condição: Peso normal';
//   } else {
//     return 'Condição: Abaixo do Peso';
//   }
// }

// function main() {
//   let peso = 75;
//   let altura = 1.75;
//   const imc = calcularImc(peso, altura);

//   console.log(classificaçãoImc(imc));
// }


// main();
// ******** outra maneira de chamar a função main ********
// (function () {
//   let peso = 75;
//   let altura = 1.75;
//   const imc = calcularImc(peso, altura);
  
//   console.log(classificaçãoImc(imc));
// })();   <------ isso se chama função imediatamente invocada, pois ela cria e se executa