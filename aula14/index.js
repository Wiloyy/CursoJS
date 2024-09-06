let num1 = 0.7;
let num2 = 0.1;

num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2

num1 = parseFloat(num1.toFixed(2))

console.log(num1);
console.log(Number.isInteger(num1))
//console.log(num1.toString() + num2) num1 virou uma string porem num2 ainda é um num,ber fazxendo apena concatenaçao
// num1 = num1.toString(); --> Tranformar um number em string
//console.log(num1.toString(2)); -->  Numero binario 
//console.log(num1.toFixed(2)) --> Serve para diminiuir as casas decimais de 10.42342 no caso vai para 10.42 apenas 
//console.log(Number.isInteger(num1)); --> serve para analisar por exmplos em um banco der dado se o numero é interio ou nao 
//let temp = (num1 * 'OLA')
//console.log(Number.isNaN(temp)) --> Serve para saber se seu redultado é um NaN no caso sim pois vc esta multiplicando um numero com uma string
// num1 += num2 = num1 = num1 + num2
