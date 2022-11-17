/*Faça um programa para calcular o valor de combustível em uma viagem.
*/
const combustivel = 4.91;
const kmPorLitro = 10;
let distanciaKm = 100;

const calculo = (distanciaKm/kmPorLitro)*combustivel;

console.log(calculo.toFixed(2));