//const data = new Date();
//console.log(data)

//const data = new Date(0);
//console.log(data)

//const data = new Date(2006, 6, 19, 8, 43, 32)
//console.log(data)

//const data = new Date('2006-07-19 8:42:53');
//console.log(data)

//const data = new Date('2006-08-19 8:42:53');
console.log('Ano', data.getFullYear());
console.log('Mes', data.getMonth());
console.log('Dia', data.getDate());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milisegundo', data.getMilliseconds());

function  zeroAEsquerda (num){
    return  num>= 10 ?  num < 10 : `0${num}`
}

function fomataData (data) {
const ano = data.getFullYear();
const mes = data.getMonth();
const dia = data.getDate();
const hora = data.getHours();
const min = data.getMinutes();
const sec = data.getSeconds();

return ` ${ano}/${mes}/${dia} ${hora}:${min}:${sec}`
}

const data = new Date();
const dataBrasil = fomataData(data);
console.log(dataBrasil);
