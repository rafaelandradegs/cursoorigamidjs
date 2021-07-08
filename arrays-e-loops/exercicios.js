// Crie uma array com os anos que o brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var ganhouCopa = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O Brasil ganhou a copa de ${ano}

for (let i = 0; i < ganhouCopa.length; i++) {
    console.log(`O brasil ganhou a copa nos anos ${ganhouCopa[i]}`);
}

ganhouCopa.forEach(function (i) {
    console.log(`O brasil ganhou a copa nos anos de ${i}`);
})
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = [`Banana`, `Maca`, `Pera`, `Uva`, `Melancia`]

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] == `Pera`) {
        break
    }
    console.log(frutas[i]);
}

// Coloque a ultima fruta da array acima em uma variavel,
// sem remover a mesma da array

var maisGostosa = frutas[frutas.length - 1]