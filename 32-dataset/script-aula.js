const h1 = document.querySelector("h1");

console.log(Object.prototype.toString.call(h1));

console.log(h1.dataset);

//----------------------------------------------------------------Dataset----------------------------------------------------------------

// dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data -

const div = document.querySelector("[data-cor]");
const divs = document.querySelector("[data-animal]");

div.dataset.height = 1000;
div.dataset.tudobem = 300;

delete div.dataset.tudobem;
console.log(div.dataset);

//----------------------------------------------------------------Data Atributes----------------------------------------------------------------

// Os atributos e valores que começarem com a data- poderão ser utilizados como forma de configuração de plugins e interações DOM/JS

// divs.forEach((div) => {
//   div.classList.add(div.dataset.anima);
// });

//----------------------------------------------------------------Data vs Class----------------------------------------------------------------

// a vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. além de deixar a estrutura da tag mais organizada.

{
  /* <div data-anima="left" data-tempo="1000">
  Div1
</div>;

<div class="anima-left tempo-1000">Div2</div>; */
}

//----------------------------------------------------------------Nomenclatura----------------------------------------------------------------

// Por padrão o JavaScript não aceita -(traço) como caracter válido para nomear propriedades. Então qualquer traço será removido e a letra seguinte transformada em maiúscula.
