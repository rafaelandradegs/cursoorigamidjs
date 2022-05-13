//----------------------------------------------------------------Object----------------------------------------------------------------

// Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype

// const carro = {
//     marca: 'Ford',
//     ano: 2018
// }
// const pessoa = new Object({
//     nome: 'André',
//     idade: 28
// })

//----------------------------------------------------------------Metodos de Object------------------------------------------------------

// object.create(obj, definePropriedades) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento

// const carro = {
//   rodas: 4,
//   init(marca) {
//     this.marca = marca
//     return this
//   },
//   acelerar() {
//     return `${this.marca} acelelou as ${this.rodas} rodas`
//   },
//   buzinar() {
//     return this.marca + ' buzinou'
//   }
// }

// const honda = Object.create(carro)

// honda.init('Honda').acelerar()

// const ferrari = Object.create(carro).init('Ferrari')
// console.log(ferrari.acelerar())

//----------------------------------------------------------------Object.assign()---------------------------------------------------------

// object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo

// const funcaoAutomovel = {
//   acelarar() {
//     return 'acelerou'
//   },
//   buzinar() {
//     return 'buzinou'
//   }
// }

// const moto = {
//   rodas: 2,
//   capacete: true
// }

// Object.assign(moto, funcaoAutomovel)

// console.log(moto)

//----------------------------------------------------------------Object.defineProperties()------------------------------------------------

// object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas caracteristicas dessas propriedades

// const moto = {};

// Object.defineProperties(moto, {
//   rodas: {
//     value: 2,
//     configurable: false, // configurable serve pra deixar deletar ele vem false por default
//     enumarable: true, //
//   },
//   capacete: {
//     value: true,
//     configurable: true, // configurable serve pra deixar deletar ele vem false por default
//     writable: false, // permite alterar o valor ele vem false por default
//   },
// });

//----------------------------------------------------------------get e set----------------------------------------------------------------------------

// É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos ob.propriedade = 'valor' a função de set é ativada

const moto = {};
Object.defineProperties(moto, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = "velocidade " + valor;
    },
  },
});

moto.velocidade = 20;

console.log(moto.velocidade);

//----------------------------------------------------------------Object.getOwnPropertyDescriptors(obj)----------------------------------------------------

// lista todos os métodos e propriedades de um objeto, com as suas devidas configurações

Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, "innerHeight");
// Puxa de uma única propriedade

//----------------------------------------------------------------Object.keys(obj), Object.values(obj) e Object.entries(obj)--------------------------------

// object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. object.values(obj) retorna uma array com os valores do objeto. object.entries(obj) retorna uma array com array's contendo a chave e o valor.

// Object.keys(array);
// [] vazia, pois não possui propriedades enumeráveis

// const carro = {
//   marca: "Ford",
//   ano: 20158,
// };

// Object.keys(carro);
// ['marca', 'ano']

// Object.values(carro);
// ['Ford', '2018']

// Object.entries(carro);
// [['marca', 'Ford'], ['ano', 2018]]

//----------------------------------------------------------------Object.getOwnPropertyNames(obj)-------------------------------------------------------------

// Retorna uma array com todas as propriedades diretas do objeto(não retorna as do protótipo)

// Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

// Object.getOwnPropertyNames(Array.prototype);
// [..., 'filer', 'map', 'every', 'some', 'reduce', ...]

// const carro = {
//   marca: "Ford",
//   ano: 2018,
// };

// Object.getOwnPropertyNames(carro);
// ['marca' , 'ano']

//----------------------------------------------------------------Object.getPrototypeOf() e Object.is()-------------------------------------------------------

// Object.getPrototypeOf(), retorna o protótipo do objeto. object.is(obje1, obj2) verifica se os objetos são iguais e retorna true ou false;

// const frutas = ["Banana", "Pêra"];

// Object.getPrototypeOf(frutas);
// Object.getPrototypeOf(""); // String

// const frutas1 = ["Banana", "Pêra"];
// const frutas2 = ["Banana", "Pêra"];

// Object.is(frutas1, frutas2); // false por que são arrays diferentes

//----------------------------------------------------------------Object.freeze(), Object.seal(), Object.preventExtensions()-------------------------------

// Object.freeze() impede qualquer mudança nas propriedades
// Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas.
// Object.preventExtensions() previne a adicção de novas propriedades

const carro = {
  marca: "Ford",
};

Object.freeze(carro);
Object.seal(carro);
Object.preventExtensions(carro);

Object.isFrozen(carro);
Object.isSealed(carro);
console.log(Object.isExtensible(carro));

//----------------------------------------------------------------Propriedades e métodos do protótipo-------------------------------------------------------

// Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponiveis em todos os objetos criados a partir de  funções construtoras. {}.constructor retorna a função construtora do objeto.

// const frutas = ["Banana", "Uva"];
// frutas.constructor; // Array

const frase = "Isso é uma String";
// frase.constructor; // String

// {}.hasOwnProperty('prop') e {}.propertylsEnumerable('prop'): Verifica se possuira propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável

const frutas = ["Banana", "Uva"];

frutas.hasOwnProperty("map");
Array.hasOwnProperty("map");
Array.prototype.hasOwnProperty("map");

Array.prototype.propertyIsEnumerable("map");
window.propertyIsEnumerable("innerHeight");

//----------------------------------------------------------------{}.isPrototypeOf(valor)----------------------------------------------------------------

// Verifica se é o protótipo do valor passado

// Array.prototupe.isPrototypeOf(frutas);

//----------------------------------------------------------------{}.toString()----------------------------------------------------------------------------

// Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor)

frutas.toString(); //'Banana', 'Uva'
typeof frutas; // Object
Object.prototype.toString.call(frutas); // [object Array]

frase.toString(); // 'Uma String'
typeof frase; //String
Object.prototype.toString.call(frase); // [object string]

carro.toString(); // [object object]
