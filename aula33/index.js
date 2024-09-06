const pessoa =  {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//const { nome = '', sobrenome } = pessoa
//const { nome: n = '', sobrenome } = pessoa
//console.log(n, sobrenome);

//const {endereco: {rua, numero } } = pessoa
//console.log(rua, numero)


const {nome, ...resto  } = pessoa
console.log(resto)