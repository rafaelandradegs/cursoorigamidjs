// Duplique o menu e adicione ele em copy
const cMenu = document.querySelector('.menu')
const cCopy = document.querySelector('.copy')

cMenuClone = cMenu.cloneNode(true)

cCopy.appendChild(cMenuClone)

// Selecione o primeiro DT da dl de FAQ
const faq = document.querySelector('.faq')
const primeiroDt = faq.querySelector('dt')

console.log(primeiroDt);

// Selecione o DD referente ao primeiro DT
const proximoDd = primeiroDt.nextElementSibling
console.log(proximoDd);

// Substitua o conteudo html de .faq pelo de .animais

const aninais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML