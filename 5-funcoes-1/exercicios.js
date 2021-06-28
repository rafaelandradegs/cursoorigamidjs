// Crie uma função para verificar se um valor e truthy

function tOuF(dado) {
    return !!dado
}

tOuF(1)
tOuF(``)

// Cri euma função matemática que retorne o perímeto de um quadrado 
// lembrando: perímetro é a soma dos quatro lados do quadrado 

function perimetroQ(valorQ) {
    return `O perimetro quadrado de ${valorQ} e igual a ${valorQ * 4}`
}

perimetroQ(2)

// Crie uma função que retorne o seu nome completo 
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
    // var nome = `Rafael`
    // var sobrenome = `Goncalves`
    return `${nome} ${sobrenome}`
}

nomeCompleto()

// Crie uma função que verifica se um número é par

function parOuImpar(numero) {
    if (numero % 2 == 0) {
        return `Numero Par`
    } else {
        return `Numero Impar`
    }
}

// Crie umak função que retorne o tipo de 
// dado do argumento passado dela (typeof)

function tipo(dado) {
    return typeof dado
}

// addEventListener é uma função nativa do JavaScript 
// o primeiro parâmetro é o evento que ocoore e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo 
// quando o evento 'click' ocorrer.


addEventListener('click', () => {
    console.log('Rafael Andrade Goncalves');
})

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {

    return `Ainda faltan ${totalPaises - paisesVisitados} paises para visitar`
}

function jaVisitei(paisesVisitados) {
    return `Ja visitei ${paisesVisitados} do total de ${totalPaises} paises`

}
precisoVisitar(20)
jaVisitei(20)