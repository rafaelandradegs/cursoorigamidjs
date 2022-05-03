// Ultilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de recebimento

const transacoes = [
    { descricao: 'Taxa do Pão', valor: 'R$ 39' },
    { descricao: 'Taxa do mercado', valor: 'R$ 129' },
    { descricao: 'Recebimento de cliente', valor: 'R$ 99' },
    { descricao: 'Taxa do banco', valor: 'R$ 129' },
    { descricao: 'Recebimento de cliente', valor: 'R$ 49' }
]

let taxaTotal = 0
let recebimentoTotal = 0

transacoes.forEach(item => {
    const numeroLimpo = Number(item.valor.slice(3))
    if (item.descricao.slice(0, 4) === "Taxa") {
        taxaTotal = taxaTotal + numeroLimpo
    } else {
        recebimentoTotal = recebimentoTotal + numeroLimpo
    }
})

console.log(taxaTotal)
console.log(recebimentoTotal)




// Retorne uma array com a lista abaixo

const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta'

const arrayTransportes = transportes.split(';')

console.log(arrayTransportes)

//Substitua todos os span's por a's

const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

console.log(html.split('span').join('a'))

// Retorne o último caracter da frase              
const frase = 'Melhor do ano'

console.log(frase.charAt(frase.length - 1))

// Retorne o total de taxas

const transacoesLista = ['Taxa do Banco', '    TAXA DO PÃO', '   taxa do mercado', 'depósito Bancário', 'TARIFA especial']


let totalTaxas = 0

transacoesLista.forEach(item => {
    item = item.trim().toLowerCase()
    console.log(item)
    if (item.includes("taxa")) {
        totalTaxas++
    }
})

console.log(`O valor total de taxas é igual a ${totalTaxas}`)