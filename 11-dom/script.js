// window.alert('Ola')
// const name = window.prompt('Digite seu nome')

const href = window.location.href

if (href == "http://127.0.0.1:5500/11-dom/") {
    console.log('Pode acessar.');
}

const h1selecionada = document.querySelector('h1')

function clickAparece() {
    console.log('clicou em', h1selecionada.innerText);
}

h1selecionada.addEventListener('click', clickAparece)