// Adicione a classe ativo a todos os itens do menu
const alteraClasse = document.querySelectorAll('.menu a')

alteraClasse.forEach((item) => {
    item.classList.add(`ativo`)
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas o primeiro 
alteraClasse.forEach((item) => {
    item.classList.remove('ativo')
})
alteraClasse[0].classList.add('ativo')

// Verifique se as imagens possuem o atributo alt
const imgS = document.querySelectorAll('img')

imgS.forEach((x) => {
    const possuiAlt = x.hasAttribute('alt')
    console.log(x, possuiAlt);
})

// imgS.forEach((item) => {
//     item.hasAttribute('alt')
// })


// Modifique o href do link externo no menu

const linkExterno = document.querySelector('a[href^="http"]');
linkExterno.setAttribute('href', 'http://www.google.com.br')

console.log(linkExterno);