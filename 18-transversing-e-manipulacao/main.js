// const h1 = document.querySelector('h1')
// const animaisLista = document.querySelector('.animais-descricao')
// console.log(h1.innerHTML);
// console.log(h1.outerHTML);

// // h1.outerHTML = '<h1>Novo Titulo</h1>'
// // console.log(animaisLista.innerHTML);

// const lista = document.querySelector('.animais-lista')

// console.log(lista.children[--lista.children.length]);
// console.log(lista.querySelector('li:last-child'));

// console.log(lista.childNodes);

// const animais = document.querySelector('.animais')
// const contato = document.querySelector('.contato')
// const titulo = contato.querySelector('.titulo')
// // appendChild move os elementos
// // animais.appendChild(titulo)

// const mapa = document.querySelector('.mapa')

// // contato.removeChild(titulo)
// contato.replaceChild(lista, titulo)

// // contato.insertBefore(animais, mapa)

// const novoh1 = document.createElement('h1')

// novoh1.innerText = 'Novo Titulo'
// novoh1.classList.add('titulo')

// mapa.appendChild(novoh1)

// console.log(novoh1);

const h1 = document.querySelector('h1')
const faq = document.querySelector('.faq')

const cloneh1 = h1.cloneNode(true)

cloneh1.classList.add('azul')

faq.appendChild(cloneh1)
