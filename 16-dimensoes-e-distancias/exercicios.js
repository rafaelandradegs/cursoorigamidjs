// Verifique a distancia da primeira imagem
// Em relacao ao topo da pagina
function imagemTop() {
    const primeiraImg = document.querySelector('img')
    const imgDistanciaTop = primeiraImg.offsetTop
    console.log(imgDistanciaTop);
}

// Retorne a soma da largura de todas as imagens
function somarImagens() {
    const todasImg = document.querySelectorAll('img')
    let soma = 0
    todasImg.forEach((imagem) => {
        soma += imagem.offsetWidth
    })
    console.log(soma);
}

window.onload = function () {
    imagemTop()
    somarImagens()
}

// Verifique se os links da pagina possuem
// o minimo recomendado para telas utilizadas 
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')
links.forEach((link) => {
    const linkWidth = link.offsetWidth
    const linkHeigth = link.offsetHeight
    if (linkWidth >= 48 && linkHeigth >= 48) {
        console.log(link, 'Link compativel para Mobile');
    } else {
        console.log(link, 'Precisa de manutencao');
    }
})



// Se o browse for menor que 720px
// adicione a classe menu-mobile ao menu


const browser = window.matchMedia('(max-width: 720px)').matches;
if (browser) {
    let menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile')
} else {
    console.log('Usuario Desktop');
}