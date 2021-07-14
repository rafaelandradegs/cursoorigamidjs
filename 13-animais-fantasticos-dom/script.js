// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img')
console.log(img);

// Retorne no console apenas as imagens que comecaram com a palavra imagem
const imgImagem = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imgImagem);
// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]')
console.log(linksInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroH2);

// Selecione o último p do site

// const todosP = document.querySelectorAll('p')
// const arrayP = Array.from(todosP)
// const ultimoP = arrayP.pop()

// console.log(todosP);
// console.log(ultimoP);

const paragrafos = document.querySelectorAll('p')
console.log(paragrafos[--paragrafos.length]);
// ou 
console.log(paragrafos[paragrafos.length - 1]);
