// Quando o usuario clicar nos links internos do site,
// Adicione a classe ativo ao item clicado e remova dos 
// demais itens caso eles possuam a mesma. Previna 
// o comportamento padrao desses links

const links = document.querySelectorAll('a[href^="#"]')

function handleClick(event) {
    event.preventDefault()
    links.forEach((link) => {
        link.classList.remove('ativo')
    })
    event.currentTarget.classList.toggle('ativo')
}

links.forEach((link) => {
    link.addEventListener('click', handleClick)
    console.log(link);
})

// Selecione todos os elementos do site comecando a partir do body
// ao clique mostre exatamente quais elementos estao sendo clicados
// ## Minha resolucao do servico
// function mostraTudo(element) {
//     console.log(element.toElement);
// }

// document.body.addEventListener('click', mostraTudo)

// const todosElementos = document.querySelectorAll('body *')

// function mostraTudo(event) {
//     console.log(event.currentTarget);
// }

// todosElementos.forEach((element) => {
//     element.addEventListener('click', mostraTudo)
// })

// Utilizando o codigo anterior, ao inves de mostrasr no console,
// remova o elemento que esta sendo clicado, o metodo remove() remove um elemento

// const todosElementos = document.querySelectorAll('body *')

// function mostraTudo(event) {
//     event.currentTarget.remove()
// }

// todosElementos.forEach((element) => {
//     element.addEventListener('click', mostraTudo)
// })

// Se o usuario clicar na tecla (t), aumente todo o texto do site.

function fonteGrande(letra) {
    if (letra.key === 't') {
        document.documentElement.classList.toggle('fonte-grande')
    }
}

window.addEventListener('keydown', fonteGrande)