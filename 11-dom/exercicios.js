// Retorne o url da pagina atual utilizando o objeto window

const meuUrl = window.location.href
console.log(meuUrl);

// Selecione o primeiro elemento da pagina que 
// Possua a classe ativo 

const h1Elemento = document.querySelector('.ativo')
console.log(h1Elemento.innerText);


// Retorne a linguagem do navegador
const urlLanguage = window.navigator.language
console.log(urlLanguage);

// Retorne a largura da janela
const larguraPagina = window.screen.width
const alturaPagina = window.screen.height
console.log(larguraPagina);
console.log(alturaPagina);