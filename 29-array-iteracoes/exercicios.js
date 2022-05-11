// Selecione cada curso e retorne uma array del
// com objetos contendo o titulo, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso')
    // console.log(cursos)
arrayCursos = Array.from(cursos)
    // console.log(arrayCursos)

const objetoCurso = arrayCursos.map(curso => {
    const titulo = curso.querySelector('h1').innerText
    const descricao = curso.querySelector('p').innerText
    const aulas = curso.querySelector('.aulas').innerText
    const horas = curso.querySelector('.horas').innerText
    return {
        titulo,
        descricao,
        aulas,
        horas
    }
})

console.log(objetoCurso)
console.log(arrayCursos)

// Retorne uma lista com os numeros maiores que 100

const numeros = [3, 44, 333, 23, 122, 322, 33]

const maiorQ100 = numeros.filter(numero => numero > 100)

console.log(maiorQ100)

// verifique se baixo faz parte  da lista de instrumentos e retorne true

const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

// const temBaixo = instrumentos.includes('Baixo')

const temBaixo = instrumentos.some(i => i === 'Baixo')
console.log(temBaixo)

// Retorne o valor total das compras

const compras = [{
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Queijo',
        preco: 'R$ 10,60'
    }
]

const totalCompras = compras.reduce((acumulador, item) => {
    item = +item.preco.slice(3).replace(',', '.')
        // console.log(item)
    return acumulador + item
}, 0)

console.log(totalCompras)