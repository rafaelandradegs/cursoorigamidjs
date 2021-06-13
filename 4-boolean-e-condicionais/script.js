var possuiGraduacao = false;
var possuiDoutorado = true;

if (possuiGraduacao) {
    console.log('E Graduado');
} else if (possuiDoutorado) {
    console.log('Possui Doutorado');
} else {
    console.log('Vai Estudadar preguicoso.');
}

var nome = '10kg' / 10;

if (nome) {
    console.log(nome);
} else {
    console.log('Nome nao existe');
}

if (!possuiGraduacao) {
    console.log('Parabens');
}

var corFavorita = 'verde';

switch (corFavorita) {
    case 'azul':
        console.log('Olhe para o ceu');
        break

    case 'amarelo':
        console.log('Olhe para o sol');
        break

    case 'verde':
        console.log('Olhe para a floresta');
        break

    default:
        console.log('feche os olhos');
}