//---------------------------------------------------------------- forEach ----------------------------------------------------------------

// forEach(callback(itemAtual, index, array)) a função de calback é executada para cada item da array. Ela possui três argumentos, item Atual(Valor do item da array), index (index do valor na array) e a array (array original)

// const carros = ['Ford', 'Fiat', 'Honda']

// carros.forEach((item, index, array) => {
//     console.log(item, index, array)
// })


// carros.forEach((car, index, array) => {
//     array[index] = "Marca " + car
// })

// console.log(carros)

// const li = document.querySelectorAll('li')

// li.forEach(i => i.classList.add('ativo'))

//---------------------------------------------------------------- Map ---------------------------------------------------------------------

// map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova arrau com valores atualizados de acordo com o return de cada iteração

// const newCarros = carros.map(car => 'Marca ' + car)

// const numeros = [2, 4, 5, 6, 78]
// const numerosX2 = numeros.map(n => n * 2)

// console.log(numerosX2)

// console.log(carros)
// console.log(newCarros)

// Valor Retornado

// Se não retornarmos nenhum valor durante a iteralção utilizando map, o valor retornado como de qualquer função que não possui o return, será undefined

// const nCarros = carros.map(item => {
//     const novoValor = 'Carro ' + item
//     return novoValor
// })

// console.log(nCarros)

//----------------------------------------------------------------MAP COM OBJETOs-----------------------------------------------------------

// Map pode ser muito Útil para interagirmos com uma array de objetos, onde desejammos isolar um valor único de cada objeto.

// const aulas = [{
//         nome: 'HTML 1',
//         min: 15
//     },
//     {
//         nome: 'HTML 2',
//         min: 10
//     }, {
//         nome: 'CSS 1',
//         min: 20
//     }, {
//         nome: 'JS 1',
//         min: 25
//     }
// ]

// const tempoAulas = aulas.map(aula => aula.min)

// function nomeAulas(aula) {
//     return aula.nome
// }

// const arrayNomeAulas = aulas.map(nomeAulas)

// console.log(`Aqui esa o arrayNomeAulas ${arrayNomeAulas}`)

// console.log(tempoAulas)

//----------------------------------------------------------------REDUCE-----------------------------------------------------------------

// reduce(callback(acumulador, valorAtual, index, array), valorInicial)... Executa a função de callback para cada item da Array. Um valor especial existe nessa função  de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior

// const aulas = [10, 25, 30]

// const reduceAulas = aulas.reduce((acumulador, item) => {
//     console.log(acumulador, item)
//     return acumulador + item
// }, 0)

// console.log(reduceAulas)

// Reduce nao serve somente para somar, mas tem como fazer comparação

// const numeros = [10, 25, 30, 3, 54, 33, 22]

// const maiorNumero = numeros.reduce((anterior, atual) => anterior > atual ? anterior : atual
//     // if (anterior > atual) return anterior
//     // else return atual
// )

// console.log(maiorNumero)

// const aulas = [{
//         nome: 'HTML 1',
//         min: 15
//     },
//     {
//         nome: 'HTML 2',
//         min: 10
//     }, {
//         nome: 'CSS 1',
//         min: 20
//     }, {
//         nome: 'JS 1',
//         min: 25
//     }
// ]

// const listaAulas = aulas.reduce((acumulador, atual, index) => {
//     acumulador[index] = atual.nome
//     return acumulador
// }, {})

// console.log(listaAulas)

//----------------------------------------------------------------[].reduceRight()---------------------------------------------------------

// Existe também o método [].reduceRighty(), a diferença é que este começa aa iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita

// const frutas = ['Banana', 'Pêra', 'Uva']

// const frutasRight = frutas.reduceRighty((acc, fruta) => acc + '' + fruta)

// const frutasLeft = frutas.reduce((acc, fruta) => acc + '' + fruta)

//---------------------------------------------------------------[].some()------------------------------------------------------------------

// [].some(), se pelo menos um return da iteração for truthy, ele retorna true

// const frutas = ['Banana', 'Pêra', 'Uva']

// const temUva = frutas.some((item) => item == "Uva")

// console.log(temUva)

//---------------------------------------------------------------[].every()-----------------------------------------------------------------

// [].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false

// const frutas = ['Banana', 'Pêra', 'Uva', '']

// const arraysCheias = frutas.every((fruta) => {
//     return fruta
// })

// console.log(arraysCheias)

// const numeros = [6, 43, 1, 88, 101, 29]

// const maiorQue3 = numeros.every(n => n > 3)
// console.log(maiorQue3)

// const menorQue3 = numeros.some(n => n > 3)
// console.log(menorQue3)

// Na minha compreensão o every se tem um pelo menos que é falso ele devolve falso, ja o some se tem pelo menos um que seja verdadeiro ele devolve verdadeiro

//----------------------------------------------------------------[].find() e [].findIndex()------------------------------------------------

// [].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. Já o [].findInsex, ao invés de retornar o valor retorna o index deste valor na array.

// const frutas = ['Banana', 'Pêra', 'Uva', 'Maçã']

// const buscaUva = frutas.findIndex(fruta => fruta === 'Uva')
// const buscaFind = frutas.find(fruta => fruta === 'Uva')

// console.log(buscaFind)
// console.log(buscaUva)

//----------------------------------------------------------------[].filter()---------------------------------------------------------------

//[].filter(), retorna uma array com a lista de valores que durante a sua iteração retornarão um valor truthy

const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã']

const arrayFrutas = frutas.filter((item) => {
    console.log(item)
    return item
})

console.log(arrayFrutas)

// Filter retorna os valores verdadeiros dentro do array, ou seja os valores true

const aulas = [{
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    }, {
        nome: 'CSS 1',
        min: 20
    }, {
        nome: 'JS 1',
        min: 25
    }
]

const maiores15 = aulas.filter(aula => {
    return aula.min > 15
})