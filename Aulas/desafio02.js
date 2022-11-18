/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

//Carro: C4 Cactus 
  //Etanol: 7.7 km/l
  //Gasolina: 8.9 km/l

const etanol = 3.79;
const gasolina = 6.59;
let distanciaKm = 100;

let combustivel = 'Etanol'

if (combustivel === 'etanol') {
  const calculo =(distancia/7.7)*etanol;
  console.log(calculo.toFixed(2));
} else {
  const calculo = (distancia/8.9)*gasolina;
  console.log(calculo.toFixed(2))
}
