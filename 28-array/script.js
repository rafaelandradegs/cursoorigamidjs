// Todos esses metodos ate metodos de acesso são para modificar um array


// const instrumentos = ['Guitarra', 'Baixo', 'Violão']
// const precos = [49, 99, 69, 89]

// const dados = [new String('Tipo 1'), ['Carro', 'Portas', { cor: 'Azul', preco: 2000 }], function andar(nome) { console.log(nome) }]

// const li = document.querySelectorAll('li')

// const arrayLi = Array.from(li)

// console.log(arrayLi)

// const obj = {
//     0: 'Rafael',
//     1: 'Andrade',
//     2: 'Goncalves',
//     length: 3
// }

// const objArray = Array.from(obj)

// Array.isArray(li) // verifica se o parametro passado é um array ou nao 

// Array.of("teste") // Cria um array com o parametro passado

// Array(20) // Cria um array de 20

// const frutas = ['Banana', 'Pera', ['Uva Roxa', 'Uva Verde']]

// console.log(frutas[2][1])

// console.log(instrumentos.sort())

// const idades = [32, 21, 33, 43, 1, 12, 8]

// console.log(idades.sort())


//Unshift e Push

// const carros = ['Ford', 'Fiat', 'VW']
// carros.unshift('Kia', 'Ferrari') // unshift add valores no começo do array
// const novoArray = carros.push('Parati', 'Gol') // push add valores no final do array

// //Shift e pop

// console.log(carros.pop()) // pop remove o ultimo componente do array
// console.log(carros.shift()) // Shift remove o primeiro elemento do array

// //Reverse

// console.log(carros.reverse()) // Inverte as ordem do array

//Splice
// console.log(carros);
// console.log(carros.splice(2, 4, 'Fusca')) // Na linha do splice ele retorna os removidos, porem altera o array 

// console.log(carros) // Aqui ja esta retornando o array modificado.

//CopyWithin

// console.log(['item1', 'item2', 'item3', 'item4', 'item5'].copyWithin(2, 0, 2)) // O primeiro parametro é da onde você deseja começar, o segundo parametro seria a partir da onde você gostaria de repetir, e o 3 parametro, seria ate onde você pretende repetir.

//Fill

// console.log(['item1', 'item2', 'item3', 'item4', 'item5'].fill('Banana', 1, 3)) // o fill no primeiro parametro preenche o array com o que vc passar, ja no segundo parametro é a partir da onde voce gostaria de começar, e o terceiro parametro onde voce gostaria de parar.

// Metodos de acesso

// const transport1 = ['Barco', 'Aviao']
// const transport2 = ['Carro', 'Moto']

// console.log(transport1.concat(transport2))

// Includes indexof lastindexof

const linguagens = ['html', 'css', 'js', 'php', 'python']

// console.log(linguagens.includes('css')) // includes verifica se contem o valor informado, e devolve um boolean  
// console.log(linguagens.includes('ruby'))
// console.log(linguagens.indexOf('python')) // indexof verifica se tem o valor e devolve o index da onde achou
// console.log(linguagens.indexOf('js'))
// console.log(linguagens.lastIndexOf('js')) // lastindexof verifica a ultima posicao encontra o parametro passado.

// Join

// console.log(linguagens.join()) // o join junta os valores da array e retorna uma string com eles. se voce passar um valor como parametro este sera utilizado durante a juncao de cada item da array
// console.log(linguagens.join(' '))
// console.log(linguagens.join('-_-'))

// let htmlString = '<h2>Titulo principal</h2>'

// htmlString = htmlString.split('h2') // Relembrando o split quebra a string pelo parametro passado e transforma em um array
// htmlString = htmlString.join('h1') // o join transforma o array em string

// console.log(htmlString)

//SLICE [].slice(inicio, final) retorna os itens da array comecando pelo inicio e indo ate o valor de final

console.log(linguagens.slice(3))
console.log(linguagens.slice(1, 4))