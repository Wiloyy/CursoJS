/*
FALSY
*false
0
'' " " ` `
undefined/null
NaN

OBS: QUALQUER COISA DIFERENTE DOS FALSY É CONSIDERADO TRUE NO JS
*/

console.log ('luiz' && 0 && true) //0
console.log ('luiz' && 'MATHEUS' && true)//true
console.log ('luiz' && 'MATHEUS')//MATHEUS --> ira retorna o ultimo valor pois nao tem avaliaçao de curto circuito pois os dois valores sao true porem sem avaliaçao
console.log ('luiz' && '' && 'MATHEUS') //

/*
function falaOi() {
    return 'oi';
}

let vaiExecutar = true

console.log(vaiExecutar && falaOi())


function falaOi1() {
    return 'oi';
}

let vaiExecutar1 = false;

console.log(vaiExecutar1 && falaOi1())
*/

console.log(null || false || true || 'matheus' )

const corUsuario = 'vermelho'
const corPadrao = corUsuario ||  'preto'
console.log(corPadrao)


const corUsuario1 = null;
const corPadrao1 = corUsuario1 || 'preto'
console.log(corPadrao1)



