// Crie uma função que verifique corretamente o tipo de dado

const comprimento = "Ola";

const verificaDado = (dado) => {
  // return typeof dado;
  return Object.prototype.toString.call(dado);
};

console.log(verificaDado([]));

// Crie um objeto quadrado com a propriedade lados e torne ela imutavel

// const quadrado = {
//   lados: 4,
// };

// Object.freeze(quadrado);

// quadrado.lados = 5;

// console.log(quadrado);

const quadrado = {};
Object.defineProperties(quadrado, {
  lados: {
    value: 4, // por padrao o restante vem por default false. enumarable e etc
  },
});

quadrado.lados = 6;
console.log(quadrado.lados);

// previna qualquer mudança no objeto abaixo

const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

Object.freeze(configuracao);

// Liste o nome de todas as propriedades do protótipo de string e array

console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(String.prototype));
