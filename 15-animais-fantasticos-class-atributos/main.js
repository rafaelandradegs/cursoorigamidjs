const menu = document.querySelector(`.menu`)

menu.classList.add('ativo')
menu.classList.remove('azul')
menu.classList.toggle('azul')

if (menu.classList.contains('azul')) {
    menu.classList.add('possui-azul')
} else {
    menu.classList.add('nao-possui-azul')
}

menu.className += ' vermelho'

console.log(menu.className);
// console.log(menu);

const animais = document.querySelector('.animais');

console.log(animais.attributes['data-text']);

const img = document.querySelector('img')

const srcImg = img.getAttribute('alt')

img.setAttribute('alt', 'e uma raposa')

const possuiAlt = img.hasAttribute('alt')

console.log(possuiAlt);

console.log(srcImg);

const carro = {
    portas: 4,
    andar(km) {
        console.log(`Andou ${km} km`);
    }
}