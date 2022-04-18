// function Pessoa(nome, idade) {
//   this.nome = nome
//   this.idade = idade
// }

// const andre = Pessoa('Andre', 28)

// console.log(Pessoa.prototype)
// console.log(andre.prototype)

const pais = 'Brasil'

const cidade = new String('Rio')

// Array.from(cidade).forEach(e => {
//   console.log(e)
// })

// console.log(cidade.toUpperCase())

const listaAnimais = ['Cachorro', ' Gato', 'Cavalo']

// listaAnimais.forEach(e => {
//   console.log(e)
// })

for (let i = 0; i < pais.length; i++) {
  // console.log(pais[i])
}

Array.from(cidade).forEach(e => {
  // console.log(e)
})

Array.from(pais).map(e => {
  // console.log(e)
})

const lista = document.querySelectorAll('li')

// console.log(lista)

const Carro = {
  marca: 'Ford',
  preco: 2000,
  andar() {
    return true
  }
}
