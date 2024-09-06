/*
Operadores logicos 
&& --> AND --> E Todas as expressoes precisam ser verdadeiras para retornar true 
|| --> OR  --> OU
! ---> NOT --> NAO
*/


const expressaoAnd = true && true && true
console.log(expressaoAnd);// true
console.log(true && true && false);// false 

console.log(true || false || true || false)//true

const usuario = 'luiz'
const senha = '1234'
//                       True                True     
const vaiLogar = usuario === 'luiz' && senha === '1234'
console.log(vaiLogar);
//                        True                False
const vaiLogar1 = usuario === 'luiz' && senha === '123'
console.log(vaiLogar1);

console.log(!true)//False 
console.log(!!true)//True 


