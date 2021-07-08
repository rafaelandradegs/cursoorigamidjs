// var ultimoItem = videoGames.pop()

// videoGames.push('3DS')

for (var i = 0; i <= 3; i++) {
    console.log(i);
}

var i = 0;
while (i <= 2) {
    console.log(i);
    i = i + 10;
}

var videoGames = [`switch`, `ps4`, `xbox`, `3DS`]

for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
    if (videoGames[i] == 'xbox') {
        break
    }
}

var frutas = [`banana`, `abacate`, `amora`, `morango`]
frutas.forEach(function (fruta, i, array) {
    console.log(fruta, i, array);
})

var numero = 0
var maximo = 3

for (; numero < maximo;) {
    console.log(numero);
    numero++
}