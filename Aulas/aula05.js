// ------------ Array (Listas) -----------

//const alunos = ['João', 'Vitor', 'Maria'];
//console.log(alunos);

//mostrar só o primeiro
//console.log(alunos[0]);

//add na lista
//alunos.push('Renan');   //será add no final da lista
//console.log(alunos);

//ou
// alunos[4] = 'Letícia';
// console.log(alunos);

//substituir
// alunos[2] = 'Arya';
// console.log(alunos);

//remover o último
// alunos.pop();
// console.log(alunos);

//remover o primeiro
// alunos.shift();
// console.log(alunos);
//------------------------------------------------

// -------- EXEMPLOS ---------
/* Calcular a média de notas */
// const notas = []
// notas.push(5);
// notas.push(7);
// notas.push(8);
// notas.push(2);
// notas.push(5);

//saber o tamanho da lista: notas.length;

// const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
// console.log(soma / notas.length);

//E quando não sabemos quantas notas são?   Usamos estrutura de REPETIÇÃO

// const notas = [];
// notas.push(5);
// notas.push(7);
// notas.push(8);
// notas.push(5);

// let soma = 0;

// for (let i = 0; i < notas.length; i++) {
//   const nota = notas[i];
//   soma += nota;
// }

// const media = soma / notas.length;
// console.log(media.toFixed(2));



//------------ Outro exemplo
// const nome = 'Letícia Morais';

// for (let i = 0; i < nome.length; i++) {
//   const letra = nome[i];  //a string é um array(lista) de caracteres
//   console.log(letra);
// }