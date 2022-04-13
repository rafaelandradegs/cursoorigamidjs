// const Dom = {
//   seletor: 'ul',
//   element() {
//     return (elementSelection = document.querySelector(this.seletor))
//   },
//   ativar() {
//     this.element().classList.toggle('active')
//   }
// }

// function activeStyle() {
//   Dom.ativar()
// }

// Dom.seletor = 'ul'

function Dom(seletor) {
  this.element = () => {
    return (elementSelection = document.querySelectorAll(seletor))
  }
  this.ativar = valor => {
    this.element().classList.toggle(valor)
  }
}

const selecionados = new Dom('#tabelaCores')
selecionados.forEach(item => {
  console.log(item)
})
const botaoClicavel = document.querySelector('#send')

// const li = new Dom('li:last-child')

botaoClicavel.addEventListener('click', e => {
  e.preventDefault()
  const valorInput = document.querySelector('#tabelaCores')
  const valor = valorInput.value
  // const colorText = document.querySelector('#colorText')
  // colorText.addClass(value)
  console.log(valor)
  selecionados.ativar(valor)
})
