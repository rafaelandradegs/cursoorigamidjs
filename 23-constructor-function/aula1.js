const honda = new Carro('Honda', 45.0)
const fiat = new Carro('Fiat', 35.0)

function Carro(marca, precoInicial) {
  this.taxa = 1.2
  const precoFinal = precoInicial * this.taxa
  this.marca = marca
  this.preco = precoFinal
  console.log(this)
}

const mazda = new Carro('Mazda', 35000)
