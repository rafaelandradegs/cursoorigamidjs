// const perimetro = new Function('lado', 'return lado * 4')

// console.log(perimetro(5))

// function somar(n1, n2) {
//     return n1 + n2
// }
// console.log(somar.name)

//----------------------------------------------------------------function.call()-----------------------------------------------------------

// function.call(this, arg1, arg2, ...) executa a função, sendo possivel passarmos uma nova referência ao this da mesma

// const carro = {
//     marca: 'Ford',
//     ano: 2018
// }

// window.marca = 'carro'
// window.ano = 288

// function descricaoCarro(velocimetro) {
//     console.log(this.marca + ' ' + this.ano + velocimetro)
// }

// descricaoCarro.call({ marca: 'Honda', ano: 2008 }, ' ' + 100)

// const carros = ['Ford', 'Fiat', 'VW']
// const frutas = ['Banana', 'Uva', 'Abacate']

// carros.forEach.call(frutas, item => {
//     console.log(item)
// })

// function Dom(seletor) {
//     this.element = document.querySelector(seletor)
// }

// Dom.prototype.ativo = function(classe) {
//     console.log(this)
//     this.element.classList.add(classe)
// }

// const li = {
//     element: document.querySelector('li')
// }

// Dom.prototype.ativo.call(li, 'ativar')

// const ul = new Dom('ul')

// ul.ativo.call(li, 'ativo')

// ul.ativo('ativo')

// const frutas = ['Banana', 'Uva', 'Maçã']

// Array.prototype.mostrarThis = function() {
//     console.log(this)
// }

// Array.prototype.pop.call(frutas)

// console.log(frutas)

// const arrayLike = {
//     0: 'item1',
//     1: 'item2',
//     2: 'item3',
//     length: 3
// }

// const li = document.querySelectorAll('li')

// const filtro = Array.prototype.filter.call(li, item => {
//     return item.classList.contains('ativo')
// })

// console.log(filtro)

// console.log(li)

// pelo que entendi custuma se usar call quando vc esta mechendo com array like e node lists

//----------------------------------------------------------------function.apply()---------------------------------------------------------

// O apply(this, [arg1, arg2, ...])funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.

const numeros = [3, 4, 6, 1, 34, 44, 32]

Math.max.apply(null, numeros)
Math.max.call(null, 3, 4, 5, 6, 7, 20)

const li = document.querySelectorAll('li')

// function itemPossuiAtivo(item) {
//     return item.classList.contains('ativo')
// }

// const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo)
// const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo])

//----------------------------------------------------------------function.bind()-----------------------------------------------------------

//Diferente de call e apply, o bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo contesto de this

const filtrarLi = Array.prototype.filter.bind(li, function(item) {
    return item.classList.contains('ativo')
})

console.log(filtrarLi())

// Argumentos e bind
// Não precisamos passar todos os argumentos no momoento do bind, podemos passar os mesmo na nova função no mommentoda execução da mesma

const carro = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function(aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao}km em ${tempo} segundos`
    }
}

console.log(carro.acelerar(100, 20))

const honda = {
    marca: 'Honda'
}

const acelerarHonda = carro.acelerar.bind(honda, 200, 10)

console.log(acelerarHonda())

function imc(altura, peso) {
    return peso / (altura * altura)
}

const imc180 = imc.bind(null, 1.8)

console.log(imc(1.8, 70))

console.log(imc180(70))