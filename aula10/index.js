/* Aritimeticos 
 + Adiçao / Concatenaçao
 - / * 
 ** Ponteciaçao(Elevaçao)
 % Resto da divisão
 Incremento = ++Aumenta oa valor da sau variavel 
 Decremento = --Diminui oa valor da sau variavel
 */

const num1 = 3; 
const num2 = 10;
console.log(num1 % num2);

//++contador aumenta seu valou 
//--contador diminui seu valor 
//exemplo abaixo

let contador1 = 40;
console.log(++contador1)
//resultado é 41

let contador2 = 40;
contador2++;
console.log(contador2)
//resultado é 41 RECOMENDADO

let contador3 = 40;
console.log(--contador3)
//resultado é 39

let contador4 = 40;
contador4--;
console.log(contador4)
//resultado é 39 RECOMENDADO

let contador5 = 0; 
contador5 += 2;
contador5 += 2;
contador5 += 2;
console.log(contador5)
//resultado 6

const num3 = 10
const num4 = parseInt ('5.4')
console.log(num3 + num4)
console.log(typeof num4)
//Resultado 15 
//parseInt move as casas decimais e retorna apenas a parte inteira do número como no exemplo 5.4 perem com Int somente lendo a parte interia no caso o 5


const num5 = 10
const num6 = parseFloat ('5.4')
console.log(num5 + num6)
console.log(typeof num6)
//resultado 15.4
//parseFloat preserva as casas decimais.no exemplo 5.4 

//NaN -> Not a number 
const num7 = 10;
const num8 = 'matheus';
console.log(num7 + num8)
//Resultado NaN Conta com um erro nos dados ou dados invalidos



