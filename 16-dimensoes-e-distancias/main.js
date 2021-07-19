const listaAnimais = document.querySelector('.animais-lista')

const height = listaAnimais.scrollHeight
console.log(`O atributo usado neste exemplo e o "scrollHeight".A medida deste componente total contando com o scroll e de ${height}`);
const animaisTop = listaAnimais.offsetTop
console.log(`O atributo usado neste exemplo e o "offsetTop". A distancia desse elemento para o topo e de ${animaisTop}`);

const primeiroH2 = document.querySelector("h2");
const h2left = primeiroH2.offsetLeft;

console.log(`O atributo usado neste explio e o "offsetLeft" e ele mede a distancia do elemento ao lado esquerdo da tela, a medida deste exemplo e de ${h2left}`);

const h2rect = primeiroH2.getBoundingClientRect();

console.log(h2rect.left);

if (h2rect.top < 0) {
    console.log('passou do elemento');
}

console.log(
    window.innerWidth,
    window.outerWidth,
    window.innerHeight,
    window.outerHeight,
    window.pageYOffset,
);

const small = window.matchMedia('(max-width: 600px)').matches;


if (small) {
    console.log('Usuario Mobile');
} else {
    console.log('Usuario Desktop');
}