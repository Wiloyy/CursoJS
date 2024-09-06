/*
Operadores de comparaçao 
> Maior que 
>= Maior que ou igual a 
< Menor que
<= Menor que ou igual a 
== Igualdade (valor) obs: NAO É RECOMENDADO --> o programa faz uma igualdade mesmo com number e string
=== Igualdade estrita (valor e tipo)
!= Diferente (valor) obs: NAO É RECOMENDADO
!== Diferente estrita estrita (valor e tipo)
*/

console.log(typeof(10 > 5)) //Boolean
console.log(10 > 5) //true
console.log(typeof(10 >= 5)) //Boolean
console.log(10 >= 10)//true
console.log(10 >= 5)//true
console.log(10 <= 12)//true
console.log(10 <= 10)//true
console.log(10 > 10)//false
console.log(10 === 10)//true
console.log(10 !== 5)//true

function resultado () {
    const x = '10';
    const y = 10;
    return x === y
}

console.log(resultado())


function resultado2 () {
    const x = 10
    const y = 10
    return x === y 

}

console.log(resultado2())




