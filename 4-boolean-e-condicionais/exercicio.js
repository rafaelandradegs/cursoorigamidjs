// Verifique se a sua idade e maior do que a de algum parente
// Dependendo do resultado coloque no console 'E maior', 'e igual'

var idade = 33;
var mariana = 29;
if (idade > mariana) {
    console.log('Parabens Rafael voce e mais velho');
} else {
    console.log('Ixi tem gente mais velho que voce');
}


//qual valor e retornado na seguinte expressao? = 3
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variaveis sao Truthy ou Falsy
var nome = 'Andre'; // true
var idade = 28; // true
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o Total de habitantes do Brasil com china (valor em mi)
var brasil = 207;
var china = 1340;
if (china > brasil) {
    console.log('China tem mais habitantes');
} else {
    console.log('Brasil tem mais habitantes');
}

// O que ira aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

// O que ira aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'cao');
} else {
    console.log('Falso');
}
