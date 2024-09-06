let umaString = 'Um texto';
console.log(umaString.charAt(6)) // t, Essa funçao serve para sabeer qual elemnto esta na posiçao desejada


let umaString1 = 'Um texto';
console.log(umaString1.concat(' em um lindo dia. ')); // Essa funçao serve para concatenar seu texto 
console.log(umaString1 + ' em um lindo dia.');//Um texto em um lindo dia. 
console.log(`${umaString1} em um lindo dia.`);//Um texto em um lindo dia. 

let umaString2 = 'Um texto';
console.log(umaString2.indexOf('m', 0)) // Essa funçao serve para aul o valou q começa o texto
console.log(umaString2.lastIndexOf('x', 7))// 1, 5


let umaString3 = 'Um texto';
console.log(umaString3.match(/[A-z]/g)) // Essa funçao serve para achar letras expressao regular 
//['U', 'm', 't', 'e', 'x', 't','o']

 
let umaString4 = 'mamae melao';
console.log(umaString4.replace('Um', 'Outra')) // Essa funçao serve ~
console.log(umaString4.replace(/Um/, 'Outra')) //Outra texto
console.log(umaString4.replace(/m/g, '*'))//*a*ae *elao

//                01234567 -> 8 
let umaString5 = 'Um texto';
console.log(umaString5.length) // 8

let umaString6 = 'Um texto';
console.log(umaString6.slice(2, 5)) // te vai ate o 2 e acaba no 5 como no exemplo 
console.log(umaString6.slice(-5))// texto de tras para frente 

let umaString7 = 'mamae melao';
console.log(umaString7.split('m')) // [ '', 'a', 'ae ', 'elao' ]

let umaString8 = 'Um texto';
console.log(umaString8.toUpperCase()) //UM TEXTO

let umaString9 = 'Um texto';
console.log(umaString9.toLowerCase()) // um texto









 