let a = 'A'
let b = 'B'
let c = 'C'

const letras = [b,c,a]
[a,b,c] = letras

console.log(letras)
//                0 1 2 3 4 5 6 7 8 
const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//const primeiroNumero = numeros1[0]
//const segundoNumero = numeros1[1]
//console.log(primeiroNumero) // destruturaçao 
//const [primeiroNumero, segundoNumero,... resto] = numeros1;
//console.log(primeiroNumero, segundoNumero);
//console.log(resto);
const [um, , tres, ,cinco, , , sete ] = numeros1;
console.log(um, tres, cinco )