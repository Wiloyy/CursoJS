//console.log('Linha 0')
//console.log('Linha 1')
//console.log('Linha 2')
//console.log('Linha 3')
//console.log('Linha 4')
//console.log('Linha 5')

/*
1-Criar uma varivel dentro desse parentese 
2-Criar uma condiçao que vai parar esse laço
3-icrementar ou decremnetar nossa variavel
*/
// i = index
for (let i = 0; i <= 5; i++) {
  console.log(`Linha ${i}`);
}
for (let i = 0; i <= 50; i += 10) {
  console.log(`Linha ${i}`);
}
for (let i = 10; i = 5; i-= 10) {
  console.log(`Linha ${i}`);
}
for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? 'par' : 'impar';
  console.log(i, par);
}

const frutas = ['Maça', 'Pera', 'Uva']
for (let i = 0; i < frutas.length; i++) {
  console.log(`indece ${i}`  ,frutas[ii])
}