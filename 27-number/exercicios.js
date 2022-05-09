// Retorne um número aleatorio entre 1050 e 2000 

const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050

console.log(aleatorio)

// Retorne o maior número da lista abaixo

const numeros = '4,5,20,8,9'

arrayNumeros = numeros.split(',')

const numeroMaximo = Math.max(...arrayNumeros)

console.log(numeroMaximo)

// Crie uma função para limpar os precos e retirnar os numeros com centavos arredondados e depois retorne a soma total

const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230', 'r$ 200']

function limpaPreco(valor) {
    valor = +valor.toUpperCase().replace("R$", "").trim().replace(',', '.')
    valor = +valor.toFixed(2)
    return valor
}


let somaPreco = 0
listaPrecos.forEach(preco => {
    somaPreco += limpaPreco(preco)
})

console.log(somaPreco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))