function criaPessoa (nome, sobrenome, idade) {
  return { nome, sobrenome, idade }

}

const pessoa1 = criaPessoa('Luiz', 'Antunes', 22)
const pessoa2 = criaPessoa('Gustavo', 'Aquino', 18)
const pessoa3 = criaPessoa('Mariana', 'Cassins', 65)
const pessoa4 = criaPessoa('Vitor', 'Branco', 2)
const pessoa5 = criaPessoa('Nicolas', 'Jeba', 27)

console.log(pessoa1.nome, pessoa2.nome)

const pessoa6 = {
    nome:'luiz',
    sobrenome: 'Antunes',
    idade: 23,
    fala(){
        console.log(`${this.nome} ${this.sobrenome} esta falando oi...`)
    },
    
    incrementaIdade () {
        this.idade++;
    }
}

pessoa6.fala();