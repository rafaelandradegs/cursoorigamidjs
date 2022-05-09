const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão']

firstItem = comidas.shift()

// console.log(comidas)
// const lastItem = comidas.pop()
// console.log(lastItem)
// console.log(comidas)
// comidas.push('Arroz')
// console.log(comidas)
// comidas.unshift('Peixe', 'Batata')
// console.log(comidas)

// Remova o primeiro valor de comidas e coloque em uma variavel
// Remova o último valor de comidas e colooque em uma variavel
// Adicione 'Arroz' ao final do array 
// Adicione 'Peixe' e 'Batata' ao inicio do array




const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia']

estudantes.sort().reverse()

estudantes.includes('Joana') ? console.log('Contem Joana no array') : console.log('Não contem Joana no array')
estudantes.includes('Juliana') ? console.log('Contem Juliana no array') : console.log('Não contem Juliana no array')


console.log(estudantes)


// Arrume os estudantes em ordem alfabetica
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contatos</div>
            </section>`

html = html.split('section').join('ul').split('div').join('li')

console.log(html)
    // Substitua section por ul e div com li,
    // Ultilizando split e join

const carros = ['Ford', 'Fiat', 'VW', 'Honda']

const carrosOriginais = carros.slice()

carros.pop()

console.log(carros)

// Remova o último carro, mas antes de remover
// salve a array original em outra variavel