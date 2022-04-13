//Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {
//     console.log(this.nome + ' andou')
//   }
// }

function Pessoa(name, idade) {
  this.name = name
  this.idade = idade
  this.andar = () => {
    console.log('andou')
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos,

// const joao = new Pessoa('João', 20)
// const maria = new Pessoa('Maria', 25)
// const bruno = new Pessoa('Bruno', 15)

// console.log(joao)
// console.log(maria)
// console.log(bruno)

// Crie uma Constructor Function (Dom) para manipulacão
// de listas de  elementos do dom. Deve conter as seguintes
// propriedades e metodos:

// elements, retorna NodeList com os elementos selecionados para
// addClass(classe), adiciona a classe a todos os elementos selecionados
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor)
  this.element = elementList
  this.adicionaClasse = classe => {
    elementList.forEach(e => {
      e.classList.add(classe)
      console.log(e)
    })
  }
  this.removeClasse = classe => {
    elementList.forEach(e => {
      e.classList.remove(classe)
      console.log(e)
    })
  }
}

const listaItens = new Dom('li')

function adicionaClasseItem() {
  listaItens.adicionaClasse('ativo')
}

function removeClassItem() {
  listaItens.removeClasse('ativo')
}
