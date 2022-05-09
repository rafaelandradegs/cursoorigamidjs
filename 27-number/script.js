console.log(Number.isNaN(9))

console.log(Number.isInteger(9.20))

console.log(parseFloat('99.50'))

console.log(parseInt('99.50'))

const preco = 59.49

console.log(+preco.toFixed(2))

console.log(preco.toString())

let valor = 78.23;

valor = valor.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

console.log(valor)

console.log(Math.PI)

console.log(Math.max(0, 1, 5, 4))

let numero = Math.random() * 100

const aleatorio = Math.floor(Math.random() * (40 - 20 + 1)) + 20

console.log(aleatorio)