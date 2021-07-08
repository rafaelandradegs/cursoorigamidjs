// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dados = {
    name: 'Rafael',
    lastName: 'Goncalves',
    mostrarNome() {
        return `${this.name} ${this.lastName}`
    }
}

// Crie um metodo no objeto anterior, que mostre o seu nome completo

console.log(dados.mostrarNome());

// Modifique o valor da propriedade preco para 3000 
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000
console.log(carro.preco);

// Crie um objeto de um cacho que represente um labrador
// preto com 10 anos, que late ao ver um homem

var cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    latir(algumaCoisa) {
        if (algumaCoisa == 'homem') {
            console.log('Au au au');
        } else {
            console.log('Oiii');
        }
    }
}
