//const frutas = ['Pera', 'Maça', 'Uva']
const pessoa = {
nome: 'Matheus',
sobrenome: 'Antunes',
idade: 18
};

for (let chaves in pessoa) {
    console.log(chaves, pessoa[chaves]);
}

/*
Use for quando:

Iterar sobre arrays com controle explícito do índice.
Necessitar de um loop com um número determinado de iterações.
Use for...in quando:

Iterar sobre as propriedades de um objeto.
Trabalhar com objetos cujas propriedades você deseja acessar.
*/


//for (let indice in frutas) {
//    console.log(frutas[indice]);
//}

//for ( i in frutas) {
//    console.log(i)
//}


//for (i = 0; i < frutas.length; i ++) {
//console.log(frutas[1])
//}