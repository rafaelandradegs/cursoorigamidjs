function areaQuadrado(lado) {
    return lado * lado
}

console.log(areaQuadrado(4));
console.log(areaQuadrado(5));
console.log(areaQuadrado(2));

function pi() {
    return 3.14;
}

var total = 5 * pi();

console.log(total);

function imc(peso, altura) {
    const imc = peso / (altura ** 2)
    return imc
}

console.log(imc(120, 1.85))

function corFavorita(cor) {
    if (cor === 'azul') {
        return 'Eu gosto do ceu';
    } else if (cor === 'verde') {
        return 'Eu gosto de mato';
    } else {
        return 'Eu nao gosto de cores';
    }
}

console.log(corFavorita('rosa'));

/*addEventListener('click', function () {
    console.log('Oi');
})*/

function mostraConsole() {
    console.log('Oi');
}

addEventListener('click', mostraConsole)

function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc2(20, 1.8)// Undefined, por que nao tem return na function!

function terceiraIdade(idade) {
    console.log(typeof idade);
    if (typeof idade !== 'number') {
        return 'informe a sua idade!';
    } else if (idade >= 60) {
        return true
    } else {
        return false
    }
}

console.log(terceiraIdade(50));

function faltaVisitar(paisesVisitados) {
    var totalPaises = 193
    return `Faltam visitar ${totalPaises - paisesVisitados} Paises`
}

console.log(faltaVisitar(2));

var profissao = 'Designer';

function dados() {
    var nome = 'Rafael'
    var idade = 33;
    function outrosDados() {
        var endereco = 'Campinas';
        var idade = 29;
        return `${nome},${idade},${endereco},${profissao}`
    }
    return outrosDados();
}

console.log(dados());
console.log(outrosDados());