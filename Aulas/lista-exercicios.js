/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.
    Média = (nota 1 + nota 2 + nota 3) / 3;
    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/
 
// let nota1 = 6;
// let nota2 = 0;
// let nota3 = 1;
// const media = (nota1 + nota2 + nota3)/3;

// console.log('Sua média é: ' + media.toFixed(1))

// if (media > 7 ) {
//   console.log('Aprovado(a)');
// } else if (media <= 7 && media >=5) {
//   console.log('Recuperação')
// } else {
//   console.log('Reprovado(a)')
// }


/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 
    Formula do IMC:
    IMC = peso / (altura * altura)
    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.
    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

// let pesoKg = 80;
// let alturaM = 1.75;

// const imc = pesoKg / Math.pow(alturaM, 2);
// console.log('IMC: ' + imc.toFixed(1))

// if (imc > 40) {
//   console.log('Condição: Obesidade Grave');
// } else if (imc >= 30 && imc <= 40)  {
//   console.log('Condição: Obeso');
// } else if (imc >= 25 && imc < 30) {
//   console.log('Condição: Acima do Peso');
// } else if (imc >= 18.5 && imc < 25) {
//   console.log('Condição: Peso normal');
// } else {
//   console.log('Condição: Abaixo do Peso');
// }


/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento:
    1 À vista Débito, recebe 10% de desconto;
    2 À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 Em duas vezes, preço normal de etiqueta sem juros;
    4 Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let preco = 100;
let pagamento = 5;

if (pagamento === 1) {
  const calculo = preco - (preco * 10/100);
  console.log('Valor: R$ ' + calculo.toFixed(2));
} else if (pagamento === 2) {
  const calculo = preco - (preco * 15/100);
  console.log('Valor: R$ ' + calculo.toFixed(2));
} else if (pagamento === 3) {
  console.log('Valor: R$ ' + preco.toFixed(2));
} else if (pagamento === 4) {
  const calculo = preco + (preco * 10/100)
  console.log('Valor: R$ ' + calculo.toFixed(2))
} else {
  console.log('Forma de pagamento inválida!')
}