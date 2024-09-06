/*
Primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados

Referencia (mutavel) - array, object, fuction - Passado por referencia
*/

let a = 'A'
let b = a
console.log(a, b)

a = 'B'
console.log(a, b)

let c = [1, 2, 3]
let d = [...c]
let e = d
console.log(c, d)

c.push(5)
console.log(c)

d.pop()
console.log(c, d)

const f = {
    nome: 'Matheus',
    sobrenome: 'Antunes'
};

const g = {...f}    
f.nome = 'Andre'

console.log(g)
console.log(f)

//fuction/ funçao

function saudacao(nome) {
    return "Olá, " + nome;
  }
  console.log(saudacao("Matheus"));


  //Objetos/Objects 
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
  };
  console.log(carro.marca);


