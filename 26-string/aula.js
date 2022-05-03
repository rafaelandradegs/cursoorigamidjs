// const comida = 'Pizza'

// const agua = new String('Agua')

// console.log(agua.length)

// const frase = 'A melhor comida'

// console.log(frase)
// console.log(frase.charAt(frase.length - 1))

// const frase = 'A melhor linguagem é '
// const linguagem = 'JavaScript'

// const fraseFinal = frase.concat(linguagem)

// console.log(fraseFinal)

// const fruta = 'Banana'

// const listaFrutas = 'Melancia, Banana, Laranja'

// console.log(listaFrutas.includes(fruta))
// console.log(fruta.includes(listaFrutas))
// console.log(fruta.startsWith('Ba'))
// console.log(fruta.endsWith('e'))

// const transacao1 = 'Depósito de cliente'
// const transacao2 = 'Depósito de fornecedor'
// const transacao3 = 'Taxa de camisas'

// console.log(transacao1.slice(0, 3))
// console.log(transacao1.slice(12))
// console.log(transacao1.slice(3, 6))

// const linguagem = 'JavaScript'

// console.log(linguagem.substring(3, 5))
// console.log(linguagem.substring(0, 4))
// console.log(linguagem.substring(4))
// console.log(linguagem.substring(-3))

// const instrumento = 'Guitarra'

// console.log(instrumento.indexOf('r'))
// console.log(instrumento.lastIndexOf('r'))
// console.log(instrumento.indexOf('ta'))

// const preco = ['R$99,00', 'R$199,00', 'R$299,00']

// preco.forEach(e => console.log(e))

// preco.forEach(e => console.log(e.padStart(10, '-')))

// preco.forEach(e => console.log(e.padEnd(10, '-')))

// const frase = 'Ta'

// console.log(frase.repeat(20))

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias'

// listaItens = listaItens.replace(/[ ]+/g, ', ') // aqui existe expressao regulares que vai ser ensinado mais pra frente /[ ] +/g

// console.log(listaItens)

// let preco = 'R$ 1200,43'

// console.log(preco.replace(',', '.'))

const arrayLista = listaItens.split(' ')

console.log(arrayLista)

const htmlText = '<div>>O melhor item</div> <div>A melhor lista</div>'
const htmlArray = htmlText.split('div')
const novoHtml = htmlArray.join('section')

console.log(htmlText)
console.log(htmlArray)
console.log(novoHtml)

const frutasArray = ['Banana', 'Melancia', 'Laranja']

const sexo1 = 'feminino'
const sexo2 = 'feminino'
const sexo3 = 'FEMININO'

console.log(sexo1 === 'feminino')

const valor = '  R$ 23.00  '

console.log(valor)

console.log(valor.trim())
