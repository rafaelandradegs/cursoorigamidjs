// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(name, sobrenome, idade) {
  this.name = name
  this.sobrenome = sobrenome
  this.idade = idade
}

Pessoa.prototype.nomeCompleto = function () {
  return this.name + ' ' + this.sobrenome
}

const rafael = new Pessoa('Rafael', 'Andrade Gonçalves', 34)

console.log(rafael.nomeCompleto())

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, document

console.log(NodeList.prototype)
console.log(HTMLCollection.prototype)
console.log(Document.prototype)

// Liste os contrutores dos dados abaixo

const li = document.querySelector('li')

li // HtmlCollection
li.click // Function
li.value // Number
li.hidden // Boolean
li.offsetLeft // Number
li.click() // Undefined

// Qual o construtor do dado abaixo
console.log(li.hidden.constructor.name)
