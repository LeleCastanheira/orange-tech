// function escreverNome(nome) {
//   console.log('Meu nome é ' + nome);
// }


// escreverNome('Letícia');
// escreverNome('Arya');
//-------------------------------------------------------------


// function verificarIdade(idade) {
//   if (idade >= 18){
//     console.log('Você já atingiu a maioridade');
//   } else {
//     console.log('Você ainda não atingiu a maioridade!');
//   }
// }


// verificarIdade(4);
//-------------------------------------------------------------

/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento:
    1 À vista Débito, recebe 10% de desconto;
    2 À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 Em duas vezes, preço normal de etiqueta sem juros;
    4 Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */

// function desconto(valor, desconto) {
//   return valor - (valor * desconto/100);
// }

// function juros(valor, juros) {
//   return valor + (valor * juros/100)
// }

// function frasePadrao() {
//   return 'Valor a pagar: R$';
// }


// const preco = 100;
// const pagamento = 5;


// if (pagamento === 1) {
//   console.log(frasePadrao() + desconto(preco, 10).toFixed(2));
// } else if (pagamento === 2) {
//   console.log(frasePadrao() + desconto(preco, 15).toFixed(2));
// } else if (pagamento === 3) {
//   console.log(frasePadrao() + preco.toFixed(2));
// } else if (pagamento === 4) {
//   console.log(frasePadrao() + juros(preco, 10).toFixed(2));
// } else {
//   console.log('Forma de pagamento inválida!');
// }